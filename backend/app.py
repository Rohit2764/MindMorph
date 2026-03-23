import base64
import cv2
import numpy as np
import logging
import sys
import time
from collections import deque, defaultdict
from db import save_emotion_log, emotion_collection

from flask import Flask
from flask_socketio import SocketIO, emit
from flask import jsonify
from flask_cors import CORS
from deepface import DeepFace
from services.speech_emotion import predict_speech_emotion

# ==================================
# Suppress TensorFlow logs
# ==================================
logging.getLogger("tensorflow").setLevel(logging.ERROR)

# ==================================
# Flask + SocketIO Setup
# ==================================
app = Flask(__name__)
CORS(app)

socketio = SocketIO(
    app,
    cors_allowed_origins="*",
    async_mode="threading",
    logger=False,
    engineio_logger=False
)

print("\n🚀 MindMorph Multimodal Emotion Server")

# ==================================
# CONFIGURATION
# ==================================
FRAME_SKIP = 2
FACE_CONF_THRESHOLD = 0.70
FACE_EMOTION_THRESHOLD = 0.45

SPEECH_CONF_THRESHOLD = 0.55

FUSION_FACE_WEIGHT = 0.6
FUSION_SPEECH_WEIGHT = 0.4

FUSION_STABILITY_THRESHOLD = 1
FUSION_UPDATE_INTERVAL = 0.4

# ==================================
# GLOBAL STATE
# ==================================
FRAME_COUNT = 0

FUSION_HISTORY = deque(maxlen=5)

LAST_FUSED_EMOTION = None
LAST_FUSED_TIME = 0

CURRENT_FACE = None
CURRENT_SPEECH = None

# ==================================
# PRELOAD FACE MODEL
# ==================================
print("⏳ Loading Face Models...")

try:
    dummy = np.zeros((100, 100, 3), dtype=np.uint8)
    DeepFace.analyze(dummy, actions=["emotion"], enforce_detection=False)
    DeepFace.extract_faces(dummy, detector_backend="retinaface", enforce_detection=False)
    print("✅ Face Models Ready")
except Exception as e:
    print("🔥 Model loading failed:", e)
    sys.exit(1)

# ==================================
# FACE PREPROCESSING
# ==================================
def preprocess_frame(frame):
    h, w = frame.shape[:2]

    if w > 480:
        scale = 480 / w
        frame = cv2.resize(frame, (480, int(h * scale)))

    gamma = 1.3
    invGamma = 1.0 / gamma
    table = np.array([(i / 255.0) ** invGamma * 255
                      for i in np.arange(256)]).astype("uint8")
    frame = cv2.LUT(frame, table)

    return frame


def analyze_face(frame):
    try:
        faces = DeepFace.extract_faces(
            img_path=frame,
            detector_backend="opencv",
            enforce_detection=False
        )

        if not faces:
            return None, 0.0

        face = faces[0]

        if face["confidence"] < FACE_CONF_THRESHOLD:
            return None, 0.0

        face_img = (face["face"] * 255).astype(np.uint8)
        face_img = cv2.resize(face_img, (224, 224))

        result = DeepFace.analyze(
            face_img,
            actions=["emotion"],
            enforce_detection=False
        )

        if isinstance(result, list):
            result = result[0]

        emotion_scores = result["emotion"]
        emotion_scores = {k: v / 100 for k, v in emotion_scores.items()}

        dominant = max(emotion_scores, key=emotion_scores.get)
        confidence = emotion_scores[dominant]

        if confidence >= FACE_EMOTION_THRESHOLD:
            return dominant, confidence

        return None, 0.0

    except Exception:
        return None, 0.0


# ==================================
# FUSION ENGINE
# ==================================
def fuse_emotions(face_data, speech_data):

    if face_data and not speech_data:
        return face_data

    if speech_data and not face_data:
        return speech_data

    if face_data and speech_data:
        face_emotion, face_conf = face_data
        speech_emotion, speech_conf = speech_data

        if face_emotion == speech_emotion:
            return face_emotion, (face_conf * 0.6 + speech_conf * 0.4)

        if speech_conf > 0.80:
            return speech_emotion, speech_conf

        score = defaultdict(float)
        score[face_emotion] += face_conf * FUSION_FACE_WEIGHT
        score[speech_emotion] += speech_conf * FUSION_SPEECH_WEIGHT

        final_emotion = max(score, key=score.get)
        return final_emotion, score[final_emotion]

    return None, 0.0


def handle_fusion():
    global LAST_FUSED_EMOTION, LAST_FUSED_TIME

    fused_emotion, fused_conf = fuse_emotions(CURRENT_FACE, CURRENT_SPEECH)

    if not fused_emotion:
        return

    FUSION_HISTORY.append(fused_emotion)

    stable = max(set(FUSION_HISTORY), key=FUSION_HISTORY.count)

    if FUSION_HISTORY.count(stable) >= FUSION_STABILITY_THRESHOLD:

        current_time = time.time()

        if (
            stable != LAST_FUSED_EMOTION
            or (current_time - LAST_FUSED_TIME) >= FUSION_UPDATE_INTERVAL
        ):
            LAST_FUSED_EMOTION = stable
            LAST_FUSED_TIME = current_time

            print("🎯 FINAL EMOTION:", stable)

            # ✅ CREATE PAYLOAD
            payload = {
                "label": stable,
                "confidence": float(fused_conf),
                "timestamp": time.time()
            }

            # ✅ SEND TO FRONTEND
            socketio.emit("final_emotion_update", payload)

            # ✅ SAVE TO DATABASE (THIS WAS MISSING)
            save_emotion_log(payload)

# ==================================
# SOCKET EVENTS
# ==================================
@socketio.on("connect")
def connect():
    print("✅ Client connected")
    emit("connection_ack", {"status": "connected"})


@socketio.on("video_frame")
def handle_video(data):
    global FRAME_COUNT, CURRENT_FACE

    FRAME_COUNT += 1
    if FRAME_COUNT % FRAME_SKIP != 0:
        return

    try:
        frame_b64 = data.get("frame")
        if not frame_b64:
            return

        image_data = base64.b64decode(frame_b64.split(",")[1])
        np_arr = np.frombuffer(image_data, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        if frame is None:
            return

        frame = preprocess_frame(frame)

        emotion, confidence = analyze_face(frame)

        if emotion:
            CURRENT_FACE = (emotion, confidence)
            handle_fusion()

    except Exception as e:
        print("🔥 Face handler error:", e)


@socketio.on("audio_frame")
def handle_audio(data):
    global CURRENT_SPEECH

    try:
        audio_b64 = data.get("audio")
        if not audio_b64:
            return

        audio_bytes = base64.b64decode(audio_b64)

        emotion, confidence = predict_speech_emotion(audio_bytes)

        if emotion and confidence >= SPEECH_CONF_THRESHOLD:
            CURRENT_SPEECH = (emotion, confidence)
            handle_fusion()

    except Exception as e:
        print("🔥 Audio handler error:", e)

@app.route("/analytics", methods=["GET"])
def get_analytics():
    try:
        data = list(emotion_collection.find({}, {"_id": 0}))

        # Basic aggregation
        emotion_counts = {}
        timeline = []

        for entry in data:
            label = entry.get("label")
            ts = entry.get("timestamp")

            if label:
                emotion_counts[label] = emotion_counts.get(label, 0) + 1

            if ts:
                timeline.append({
                    "time": ts,
                    "emotion": label,
                    "confidence": entry.get("confidence", 0)
                })

        return jsonify({
            "distribution": emotion_counts,
            "timeline": timeline
        })

    except Exception as e:
        return jsonify({"error": str(e)})


# ==================================
# RUN SERVER
# ==================================
if __name__ == "__main__":
    print("🔥 Server running on http://0.0.0.0:5000")
    socketio.run(app, host="0.0.0.0", port=5000, debug=False)
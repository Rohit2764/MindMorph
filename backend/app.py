import eventlet
eventlet.monkey_patch()

import base64
import cv2
import numpy as np
from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from deepface import DeepFace
import logging
from collections import deque
import sys
import time

# --- Suppress TensorFlow warnings ---
logging.getLogger('tensorflow').setLevel(logging.ERROR)

app = Flask(__name__)
CORS(app)

socketio = SocketIO(
    app,
    cors_allowed_origins="*",
    max_http_buffer_size=5_000_000,
    ping_timeout=120,
    ping_interval=30
)

print("\n--- 🚀 MindMorph Production Emotion Server ---")

# --- GLOBAL STATE ---
EMOTION_HISTORY = deque(maxlen=10)
LAST_SENT_EMOTION = "neutral"
LAST_SENT_TIME = 0
FRAME_COUNT = 0

STABILITY_THRESHOLD = 1
FRAME_SKIP = 1
EMOTION_UPDATE_INTERVAL = 0.5

# --- Preload Models Once ---
print("⏳ Loading DeepFace models once...")

try:
    dummy_image = np.zeros((100, 100, 3), dtype=np.uint8)

    print("  - Pre-loading Emotion model...")
    DeepFace.analyze(
        dummy_image,
        actions=['emotion'],
        enforce_detection=False
    )

    print("  - Pre-loading Face Detector...")
    DeepFace.extract_faces(
        dummy_image,
        detector_backend='mtcnn',
        enforce_detection=False
    )

    print("✅ All DeepFace models loaded successfully!")

except Exception as e:
    print(f"🔥 FATAL: Could not load DeepFace models. Error: {e}")
    sys.exit(1)


def preprocess_frame(frame):
    """Optimized preprocessing for real-time detection."""

    height, width = frame.shape[:2]

    if width > 640:
        scale = 640 / width
        frame = cv2.resize(frame, (640, int(height * scale)))

    # CLAHE contrast enhancement
    lab = cv2.cvtColor(frame, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
    l = clahe.apply(l)
    lab = cv2.merge([l, a, b])
    frame = cv2.cvtColor(lab, cv2.COLOR_LAB2BGR)

    # ✅ FIXED OpenCV call (positional arguments only)
    frame = cv2.fastNlMeansDenoisingColored(
        frame,
        None,
        10,  # h (luminance strength)
        10,  # hColor (color strength)
        7,   # templateWindowSize
        21   # searchWindowSize
    )

    return frame


def analyze_emotion(face_img):
    try:
        analysis = DeepFace.analyze(
            face_img,
            actions=['emotion'],
            enforce_detection=False
        )

        if isinstance(analysis, list):
            return analysis[0]['dominant_emotion']

        return analysis['dominant_emotion']

    except Exception:
        return None


@socketio.on('connect')
def handle_connect():
    print('✅ Client connected.')
    emit('connection_ack', {'status': 'connected'})


@socketio.on('disconnect')
def handle_disconnect():
    print('❌ Client disconnected.')


@socketio.on('video_frame')
def handle_video_frame(data):
    global FRAME_COUNT, LAST_SENT_EMOTION, LAST_SENT_TIME

    try:
        FRAME_COUNT += 1

        if FRAME_COUNT % FRAME_SKIP != 0:
            return

        frame_b64 = data.get('frame') if isinstance(data, dict) else data
        if not frame_b64 or not isinstance(frame_b64, str):
            return

        image_data = base64.b64decode(frame_b64.split(',')[1])
        nparr = np.frombuffer(image_data, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if frame is None:
            return

        frame = preprocess_frame(frame)

        result = DeepFace.extract_faces(
            img_path=frame,
            detector_backend='mtcnn',
            enforce_detection=False
        )

        if not result or result[0]['confidence'] <= 0.50:
            return

        face_img = (result[0]['face'] * 255).astype(np.uint8)
        face_img = cv2.resize(face_img, (224, 224))

        emotion = analyze_emotion(face_img)

        if emotion:
            EMOTION_HISTORY.append(emotion)

            if EMOTION_HISTORY.count(emotion) >= STABILITY_THRESHOLD:
                current_time = time.time()

                if (
                    emotion != LAST_SENT_EMOTION
                    or (current_time - LAST_SENT_TIME) >= EMOTION_UPDATE_INTERVAL
                ):
                    LAST_SENT_EMOTION = emotion
                    LAST_SENT_TIME = current_time

                    print(f"🎯 Emotion: {emotion}")

                    socketio.emit(
                        'emotion_update',
                        {'label': emotion, 'confidence': 1},
                        broadcast=True
                    )

    except Exception as e:
        print(f"🔥 Error processing frame: {e}")


@socketio.on('audio_event')
def handle_audio_event(data):
    pass


@socketio.on('behavior_event')
def handle_behavior_event(data):
    pass


if __name__ == '__main__':
    print("Starting server on http://0.0.0.0:5000")
    socketio.run(app, host='0.0.0.0', port=5000)

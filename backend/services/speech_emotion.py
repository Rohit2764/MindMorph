import numpy as np
import librosa
import os
from tensorflow.keras.models import load_model



# Get absolute path to project root
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

MODEL_PATH = os.path.join(BASE_DIR, "models", "ser_model.keras")
MEAN_PATH = os.path.join(BASE_DIR, "models", "ser_mean.npy")
STD_PATH = os.path.join(BASE_DIR, "models", "ser_std.npy")

print("🎤 Loading Speech Emotion Model...")
print("Model path:", MODEL_PATH)

ser_model = load_model(MODEL_PATH)
ser_mean = np.load(MEAN_PATH)
ser_std = np.load(STD_PATH)

print("✅ Speech Emotion Model Loaded!")

# Emotion labels (must match training order)
EMOTION_LABELS = [
    "angry",
    "calm",
    "disgust",
    "fearful",
    "happy",
    "neutral",
    "sad",
    "surprised"
]

# ==============================
# Feature Extraction (Same as Training)
# ==============================

def extract_features_from_audio(audio_bytes):
    """
    Convert raw audio bytes to MFCC features
    """

    # Convert bytes to numpy array
    audio_np = np.frombuffer(audio_bytes, dtype=np.float32)

    # Ensure fixed sample rate
    sr = 22050

    # Extract MFCC
    mfcc = librosa.feature.mfcc(
        y=audio_np,
        sr=sr,
        n_mfcc=40
    )

    # Pad / Trim to match (40, 174)
    if mfcc.shape[1] < 174:
        pad_width = 174 - mfcc.shape[1]
        mfcc = np.pad(mfcc, ((0, 0), (0, pad_width)), mode='constant')
    else:
        mfcc = mfcc[:, :174]

    return mfcc


# ==============================
# Predict Emotion
# ==============================

def predict_speech_emotion(audio_bytes):
    """
    Takes raw audio bytes and returns predicted emotion
    """

    try:
        mfcc = extract_features_from_audio(audio_bytes)

        # Normalize using training stats
        mfcc = (mfcc - ser_mean) / ser_std

        # Add batch + channel dimension
        mfcc = mfcc[np.newaxis, ..., np.newaxis]

        prediction = ser_model.predict(mfcc, verbose=0)
        emotion_index = np.argmax(prediction)
        confidence = float(np.max(prediction))

        emotion = EMOTION_LABELS[emotion_index]

        return emotion, confidence

    except Exception as e:
        print("🔥 Speech prediction error:", e)
        return None, 0.0
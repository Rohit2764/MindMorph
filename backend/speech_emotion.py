import librosa
import numpy as np
import tensorflow as tf
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), "ser_model.h5")

EMOTIONS = [
    "angry",
    "calm",
    "disgust",
    "fear",
    "happy",
    "sad",
    "neutral"
]

print("🎤 Loading Speech Emotion Model...")
ser_model = tf.keras.models.load_model(MODEL_PATH)
print("✅ Speech Emotion Model Loaded")


def extract_features(file_path):

    audio, sample_rate = librosa.load(
        file_path,
        duration=3,
        offset=0.5
    )

    mfcc = librosa.feature.mfcc(
        y=audio,
        sr=sample_rate,
        n_mfcc=40
    )

    mfcc = np.mean(mfcc.T, axis=0)

    return mfcc


def predict_speech_emotion(file_path):

    features = extract_features(file_path)

    features = np.expand_dims(features, axis=0)

    prediction = ser_model.predict(features, verbose=0)

    emotion = EMOTIONS[np.argmax(prediction)]
    confidence = float(np.max(prediction))

    return emotion, confidence
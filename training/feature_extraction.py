import os
import librosa
import numpy as np

# Emotion mapping from RAVDESS filename
emotion_map = {
    "01": "neutral",
    "02": "calm",
    "03": "happy",
    "04": "sad",
    "05": "angry",
    "06": "fearful",
    "07": "disgust",
    "08": "surprised"
}

def extract_features(file_path, max_pad_len=174):
    try:
        audio, sample_rate = librosa.load(file_path, sr=22050)

        # Extract MFCC
        mfcc = librosa.feature.mfcc(
            y=audio,
            sr=sample_rate,
            n_mfcc=40
        )

        # Pad / Trim to fixed size
        if mfcc.shape[1] < max_pad_len:
            pad_width = max_pad_len - mfcc.shape[1]
            mfcc = np.pad(mfcc, pad_width=((0,0),(0,pad_width)), mode='constant')
        else:
            mfcc = mfcc[:, :max_pad_len]

        return mfcc

    except Exception as e:
        print("Error processing:", file_path, e)
        return None


def load_data(dataset_path):
    features = []
    labels = []

    for actor in os.listdir(dataset_path):
        actor_path = os.path.join(dataset_path, actor)

        for file in os.listdir(actor_path):
            if file.endswith(".wav"):
                emotion_code = file.split("-")[2]
                emotion = emotion_map.get(emotion_code)

                file_path = os.path.join(actor_path, file)
                mfcc = extract_features(file_path)

                if mfcc is not None:
                    features.append(mfcc)
                    labels.append(emotion)

    return np.array(features), np.array(labels)
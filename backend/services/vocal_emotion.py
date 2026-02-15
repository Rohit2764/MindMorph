# backend/services/vocal_emotion.py
import numpy as np
import librosa
import pyaudio
import logging
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
import pickle
from pathlib import Path
import io
import soundfile as sf

logger = logging.getLogger(__name__)

class VocalEmotionDetector:
    def __init__(self):
        self.sample_rate = 22050
        self.chunk_size = 1024
        self.audio_format = pyaudio.paInt16
        self.channels = 1
        self.record_seconds = 2  # Record 2 seconds of audio

        self.audio = None
        self.stream = None
        self.model = None
        self.scaler = None

        # Emotion labels (keep these consistent with fusion)
        self.emotion_labels = ['angry', 'calm', 'happy', 'sad', 'surprised']
        self.confidence_threshold = 0.4

        # Model paths
        self.model_dir = Path(__file__).parent / "models"
        self.model_dir.mkdir(exist_ok=True)
        self.model_path = self.model_dir / "vocal_emotion_model.pkl"
        self.scaler_path = self.model_dir / "vocal_emotion_scaler.pkl"

        self.load_model()

    def load_model(self):
        """Load pre-trained emotion recognition model"""
        try:
            if self.model_path.exists() and self.scaler_path.exists():
                with open(self.model_path, 'rb') as f:
                    self.model = pickle.load(f)
                with open(self.scaler_path, 'rb') as f:
                    self.scaler = pickle.load(f)
                logger.info("Loaded pre-trained ML model for vocal emotion detection")
            else:
                logger.info("No pre-trained model found, using rule-based vocal emotion detection")
        except Exception as e:
            logger.error(f"Failed to load emotion model: {e}")
            logger.info("Falling back to rule-based vocal emotion detection")

    # -- original audio recording helpers (kept for offline use if needed) --
    def initialize_audio(self):
        """Initialize PyAudio for microphone input"""
        try:
            self.audio = pyaudio.PyAudio()
            default_device_index = self.audio.get_default_input_device_info()['index']

            self.stream = self.audio.open(
                format=self.audio_format,
                channels=self.channels,
                rate=self.sample_rate,
                input=True,
                input_device_index=default_device_index,
                frames_per_buffer=self.chunk_size
            )

            logger.info("Audio input initialized successfully")
            return True
        except Exception as e:
            logger.error(f"Failed to initialize audio input: {e}")
            return False

    def record_audio(self):
        """Record audio from microphone (2s default)"""
        if not self.stream:
            return None

        frames = []
        for i in range(0, int(self.sample_rate / self.chunk_size * self.record_seconds)):
            data = self.stream.read(self.chunk_size, exception_on_overflow=False)
            frames.append(data)

        audio_data = np.frombuffer(b''.join(frames), dtype=np.int16)
        audio_data = audio_data.astype(np.float32) / 32768.0  # Normalize to [-1, 1]
        return audio_data

    # -- feature extraction (kept) --
    def extract_features(self, audio_data):
        """Extract comprehensive audio features for emotion recognition"""
        try:
            mfccs = librosa.feature.mfcc(y=audio_data, sr=self.sample_rate, n_mfcc=13)
            mfccs_mean = np.mean(mfccs, axis=1)
            mfccs_std = np.std(mfccs, axis=1)

            chroma = librosa.feature.chroma_stft(y=audio_data, sr=self.sample_rate)
            chroma_mean = np.mean(chroma, axis=1)
            chroma_std = np.std(chroma, axis=1)

            contrast = librosa.feature.spectral_contrast(y=audio_data, sr=self.sample_rate)
            contrast_mean = np.mean(contrast, axis=1)
            contrast_std = np.std(contrast, axis=1)

            spectral_centroid = librosa.feature.spectral_centroid(y=audio_data, sr=self.sample_rate)
            spectral_centroid_mean = np.mean(spectral_centroid)
            spectral_centroid_std = np.std(spectral_centroid)

            spectral_rolloff = librosa.feature.spectral_rolloff(y=audio_data, sr=self.sample_rate)
            spectral_rolloff_mean = np.mean(spectral_rolloff)
            spectral_rolloff_std = np.std(spectral_rolloff)

            tempo, _ = librosa.beat.tempo(y=audio_data, sr=self.sample_rate)

            zcr = librosa.feature.zero_crossing_rate(y=audio_data)
            zcr_mean = np.mean(zcr)
            zcr_std = np.std(zcr)

            rms = librosa.feature.rms(y=audio_data)
            rms_mean = np.mean(rms)
            rms_std = np.std(rms)

            pitches, magnitudes = librosa.piptrack(y=audio_data, sr=self.sample_rate)
            pitch_mean = np.mean(pitches[pitches > 0]) if np.any(pitches > 0) else 0
            pitch_std = np.std(pitches[pitches > 0]) if np.any(pitches > 0) else 0

            features = np.concatenate([
                mfccs_mean, mfccs_std,        # 26
                chroma_mean, chroma_std,      # 24
                contrast_mean, contrast_std,  # 14
                [spectral_centroid_mean, spectral_centroid_std],  # 2
                [spectral_rolloff_mean, spectral_rolloff_std],    # 2
                [tempo],                      # 1
                [zcr_mean, zcr_std],          # 2
                [rms_mean, rms_std],          # 2
                [pitch_mean, pitch_std]       # 2
            ])
            return features
        except Exception as e:
            logger.error(f"Feature extraction failed: {e}")
            return None

    # -- prediction (kept) --
    def predict_emotion(self, features):
        """Predict emotion from audio features using ML model or rule-based fallback"""
        try:
            if self.model is not None and self.scaler is not None:
                features_scaled = self.scaler.transform(features.reshape(1, -1))
                probabilities = self.model.predict_proba(features_scaled)[0]
                predicted_class = np.argmax(probabilities)
                confidence = probabilities[predicted_class]
                emotion = self.emotion_labels[predicted_class]

                if confidence < self.confidence_threshold:
                    emotion = 'neutral'
                    confidence = 0.5

                return {
                    'emotion': emotion,
                    'confidence': float(confidence),
                    'features': {
                        'probabilities': {label: float(prob) for label, prob in zip(self.emotion_labels, probabilities)}
                    }
                }
            else:
                return self._rule_based_prediction(features)

        except Exception as e:
            logger.error(f"Emotion prediction failed: {e}")
            return {
                'emotion': 'neutral',
                'confidence': 0.0,
                'features': {}
            }

    def _rule_based_prediction(self, features):
        """Rule-based fallback"""
        try:
            mfccs_mean = features[:13]
            chroma_mean = features[13:25]
            rms_mean = features[-4]
            pitch_mean = features[-2]

            energy_level = rms_mean
            pitch_variation = np.std(mfccs_mean)
            chroma_energy = np.mean(chroma_mean)

            if energy_level > 0.1 and pitch_variation > 50:
                if chroma_energy > 0.3:
                    emotion = 'surprised'
                    confidence = 0.7
                else:
                    emotion = 'angry'
                    confidence = 0.6
            elif energy_level < 0.05 and pitch_variation < 30:
                if chroma_energy < 0.2:
                    emotion = 'sad'
                    confidence = 0.6
                else:
                    emotion = 'calm'
                    confidence = 0.7
            else:
                emotion = 'happy'
                confidence = 0.5

            if confidence < self.confidence_threshold:
                emotion = 'neutral'
                confidence = 0.5

            return {
                'emotion': emotion,
                'confidence': confidence,
                'features': {
                    'energy': energy_level,
                    'pitch_variation': pitch_variation,
                    'chroma_energy': chroma_energy
                }
            }
        except Exception as e:
            logger.error(f"Rule-based prediction failed: {e}")
            return {
                'emotion': 'neutral',
                'confidence': 0.0,
                'features': {}
            }

    # training / save utilities (kept)
    def train_model(self, X_train, y_train, X_test=None, y_test=None):
        try:
            logger.info("Training vocal emotion recognition model...")
            self.scaler = StandardScaler()
            self.model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42, n_jobs=-1)
            X_train_scaled = self.scaler.fit_transform(X_train)
            self.model.fit(X_train_scaled, y_train)
            self.save_model()
            logger.info("Model training completed successfully")
            return True
        except Exception as e:
            logger.error(f"Model training failed: {e}")
            return False

    def save_model(self):
        try:
            with open(self.model_path, 'wb') as f:
                pickle.dump(self.model, f)
            with open(self.scaler_path, 'wb') as f:
                pickle.dump(self.scaler, f)
            logger.info("Model and scaler saved successfully")
        except Exception as e:
            logger.error(f"Failed to save model: {e}")

    # -- helper to infer from raw bytes (this is the new integration point) --
def infer_vocal_emotion_from_bytes(audio_bytes: bytes):
    """
    Read bytes (WAV/FLAC/other) -> resample -> extract features -> return (probs_list_of_len6, confidence)
    Note: final probs vector length is 6 to match other modalities (angry, calm, happy, sad, surprised, neutral)
    """
    try:
        # Read audio from bytes (soundfile supports many containers)
        audio_data, sr = sf.read(io.BytesIO(audio_bytes))
        if audio_data is None:
            raise RuntimeError("soundfile read returned None")

        # If stereo, convert to mono
        if len(audio_data.shape) > 1:
            audio_data = np.mean(audio_data, axis=1)

        # Resample if needed
        detector = VocalEmotionDetector()
        if sr != detector.sample_rate:
            audio_data = librosa.resample(audio_data.astype(float), orig_sr=sr, target_sr=detector.sample_rate)

        features = detector.extract_features(audio_data)
        if features is None:
            # fallback neutral vector (6 classes)
            probs = [0.0, 0.0, 0.0, 0.0, 0.0, 1.0]
            return probs, 0.3

        result = detector.predict_emotion(features)
        emotion = result.get('emotion', 'neutral')
        confidence = float(result.get('confidence', 0.3))

        # Map model probs if provided; else place high mass on predicted label
        probs_list = [0.0] * 6  # angry, calm, happy, sad, surprised, neutral
        probs_dict = result.get('features', {}).get('probabilities', None)
        if probs_dict:
            # fill first 5 entries from model labels
            for i, label in enumerate(detector.emotion_labels):
                probs_list[i] = float(probs_dict.get(label, 0.0))
            # neutral leftover
            probs_list[5] = max(0.0, 1.0 - sum(probs_list[:5]))
        else:
            if emotion in detector.emotion_labels:
                idx = detector.emotion_labels.index(emotion)
                probs_list[idx] = confidence
                probs_list[5] = max(0.0, 1.0 - confidence)
            else:
                # neutral
                probs_list = [0.0, 0.0, 0.0, 0.0, 0.0, 1.0]

        # normalize
        arr = np.array(probs_list, dtype=float)
        if arr.sum() <= 0:
            arr = np.array([0,0,0,0,0,1.0], dtype=float)
        arr = arr / arr.sum()
        return arr.tolist(), float(confidence)
    except Exception as e:
        logger.error(f"Infer vocal emotion from bytes failed: {e}")
        return [0.0,0.0,0.0,0.0,0.0,1.0], 0.3

# global instance (kept for optional local use)
vocal_detector = VocalEmotionDetector()

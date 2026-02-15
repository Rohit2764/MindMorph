import cv2
import numpy as np
from deepface import DeepFace
import logging

logger = logging.getLogger(__name__)

class FacialEmotionDetector:
    def __init__(self):
        self.emotion_labels = ['angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral']
        self.confidence_threshold = 0.5
        self.cap = None

    def initialize_camera(self):
        """Initialize webcam capture"""
        try:
            self.cap = cv2.VideoCapture(0)
            if not self.cap.isOpened():
                raise Exception("Could not open webcam")
            logger.info("Webcam initialized successfully")
            return True
        except Exception as e:
            logger.error(f"Failed to initialize camera: {e}")
            return False

    def detect_emotion(self, frame):
        """Detect emotion from a single frame"""
        try:
            # Analyze emotion using DeepFace
            result = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)

            if isinstance(result, list) and len(result) > 0:
                emotions = result[0]['emotion']
                dominant_emotion = max(emotions, key=emotions.get)
                confidence = emotions[dominant_emotion] / 100.0

                if confidence >= self.confidence_threshold:
                    return {
                        'emotion': dominant_emotion,
                        'confidence': confidence,
                        'all_emotions': emotions
                    }
                else:
                    return {
                        'emotion': 'neutral',
                        'confidence': 0.5,
                        'all_emotions': emotions
                    }
            else:
                return {
                    'emotion': 'neutral',
                    'confidence': 0.0,
                    'all_emotions': {}
                }
        except Exception as e:
            logger.error(f"Emotion detection failed: {e}")
            return {
                'emotion': 'neutral',
                'confidence': 0.0,
                'all_emotions': {}
            }

    def get_frame(self):
        """Capture a single frame from webcam"""
        if self.cap is None or not self.cap.isOpened():
            return None

        ret, frame = self.cap.read()
        if ret:
            # Convert BGR to RGB for DeepFace
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            return frame_rgb
        return None

    def release_camera(self):
        """Release webcam resources"""
        if self.cap:
            self.cap.release()
            logger.info("Camera released")

    def start(self):
        """Start emotion detection"""
        return self.initialize_camera()

    def stop(self):
        """Stop emotion detection"""
        self.release_camera()

# Global instance
facial_detector = FacialEmotionDetector()

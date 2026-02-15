# backend/services/fusion_engine.py
import time
import threading
from collections import deque
import numpy as np

EMOTIONS = ["Happy","Sad","Angry","Fear","Surprise","Neutral"]

class FusionEngine:
    def __init__(self, fusion_interval_ms=500, window_ms=2500):
        self.fusion_interval = fusion_interval_ms / 1000.0
        self.window = window_ms / 1000.0
        self.lock = threading.Lock()
        self.face_queue = deque()
        self.audio_queue = deque()
        self.behavior_queue = deque()
        self.running = False
        self.on_fused = None

    def start(self):
        if not self.running:
            self.running = True
            t = threading.Thread(target=self._loop, daemon=True)
            t.start()

    def stop(self):
        self.running = False

    def push_face(self, probs, conf, timestamp=None):
        with self.lock:
            self.face_queue.append((timestamp or time.time(), probs, conf))

    def push_audio(self, probs, conf, timestamp=None):
        with self.lock:
            self.audio_queue.append((timestamp or time.time(), probs, conf))

    def push_behavior(self, probs, conf, timestamp=None):
        with self.lock:
            self.behavior_queue.append((timestamp or time.time(), probs, conf))

    def _trim_old(self, q):
        cutoff = time.time() - self.window
        while q and q[0][0] < cutoff:
            q.popleft()

    def _aggregate_latest(self, q):
        if not q:
            return None, 0.0
        return q[-1][1], q[-1][2]

    def _fuse_once(self):
        with self.lock:
            self._trim_old(self.face_queue)
            self._trim_old(self.audio_queue)
            self._trim_old(self.behavior_queue)

            face_probs, face_conf = self._aggregate_latest(self.face_queue)
            audio_probs, audio_conf = self._aggregate_latest(self.audio_queue)
            beh_probs, beh_conf = self._aggregate_latest(self.behavior_queue)

        modality_probs = []
        modality_confs = []
        labels = EMOTIONS

        if face_probs is not None:
            modality_probs.append(np.array(face_probs))
            modality_confs.append(float(face_conf))
        if audio_probs is not None:
            modality_probs.append(np.array(audio_probs))
            modality_confs.append(float(audio_conf))
        if beh_probs is not None:
            modality_probs.append(np.array(beh_probs))
            modality_confs.append(float(beh_conf))

        if not modality_probs:
            probs = np.zeros(len(labels)); probs[labels.index("Neutral")] = 1.0
            return probs.tolist(), 0.2

        confs = np.array(modality_confs, dtype=float)
        confs = np.clip(confs, 1e-3, None)
        weights = confs / confs.sum()

        fused = np.zeros_like(modality_probs[0], dtype=float)
        for w, p in zip(weights, modality_probs):
            fused += w * p

        fused = np.clip(fused, 1e-9, None)
        fused = fused / fused.sum()

        entropy = -np.sum(fused * np.log(fused + 1e-9))
        max_entropy = np.log(len(labels))
        entropy_factor = 1.0 - (entropy / max_entropy)
        final_conf = float(np.mean(weights) * entropy_factor)

        return fused.tolist(), final_conf

    def _loop(self):
        while self.running:
            fused_probs, fused_conf = self._fuse_once()
            if callable(self.on_fused):
                try:
                    self.on_fused({"probs": fused_probs, "confidence": fused_conf, "timestamp": time.time()})
                except Exception:
                    pass
            time.sleep(self.fusion_interval)

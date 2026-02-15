# backend/services/behavior_emotion.py
import numpy as np

EMOTIONS = ["Happy","Sad","Angry","Fear","Surprise","Neutral"]

def infer_behavior(typing_stats, mouse_stats):
    """
    typing_stats: {"keys": int, "avg_ikey_interval_ms": float, "burstiness": float}
    mouse_stats: {"distance_px": float, "idle_ms": float, "speed_px_per_s": float}
    Returns: (probs_list_len6, confidence)
    """
    try:
        keys = typing_stats.get("keys", 0)
        avg_i = typing_stats.get("avg_ikey_interval_ms", 0)
        burst = typing_stats.get("burstiness", 0)

        mouse_dist = mouse_stats.get("distance_px", 0)
        idle = mouse_stats.get("idle_ms", 1000)
        speed = mouse_stats.get("speed_px_per_s", 0)

        # heuristics
        happy_score = min(1.0, (keys / 50.0) + (burst * 0.5))
        sad_score = min(1.0, (idle / 3000.0) + (avg_i / 2000.0))
        angry_score = min(1.0, (speed / 1000.0) + (mouse_dist / 5000.0))
        fear_score = 0.05
        surprise_score = min(0.5, burst * 0.7)
        neutral_score = max(0.05, 1.0 - (happy_score + sad_score + angry_score + surprise_score))

        raw = np.array([happy_score, sad_score, angry_score, fear_score, surprise_score, neutral_score], dtype=float)
        raw = np.clip(raw, 1e-6, None)
        probs = raw / np.sum(raw)

        # confidence: higher if keys or mouse activity present
        activity_level = min(1.0, (keys / 50.0) + (mouse_dist / 2000.0))
        conf = 0.2 + 0.7 * activity_level

        return probs.tolist(), float(conf)
    except Exception as e:
        # fallback neutral
        return [0,0,0,0,0,1.0], 0.2

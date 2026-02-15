from pymongo import MongoClient
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv

load_dotenv()

# In-memory storage fallback
EMOTION_LOGS = []
USE_IN_MEMORY = True

class EmotionLog:
    def __init__(self, emotion, confidence, facial_confidence=0, vocal_confidence=0):
        self.emotion = emotion
        self.confidence = confidence
        self.facial_confidence = facial_confidence
        self.vocal_confidence = vocal_confidence
        self.timestamp = datetime.utcnow()

    def save(self):
        """Save emotion log to database or in-memory"""
        global EMOTION_LOGS
        try:
            if USE_IN_MEMORY:
                doc = {
                    'emotion': self.emotion,
                    'confidence': self.confidence,
                    'facial_confidence': self.facial_confidence,
                    'vocal_confidence': self.vocal_confidence,
                    'timestamp': self.timestamp
                }
                EMOTION_LOGS.append(doc)
                print(f"Saved emotion log in-memory: {self.emotion}")
            else:
                collection = get_emotion_collection()
                doc = {
                    'emotion': self.emotion,
                    'confidence': self.confidence,
                    'facial_confidence': self.facial_confidence,
                    'vocal_confidence': self.vocal_confidence,
                    'timestamp': self.timestamp
                }
                collection.insert_one(doc)
        except Exception as e:
            print(f"Error saving emotion log: {e}")

    @staticmethod
    def get_analytics(days=7):
        """Get emotion analytics for the specified number of days"""
        global EMOTION_LOGS
        try:
            start_date = datetime.utcnow() - timedelta(days=days)
            filtered_logs = [log for log in EMOTION_LOGS if log['timestamp'] >= start_date] if USE_IN_MEMORY else get_emotion_collection().find({'timestamp': {'$gte': start_date}})

            if USE_IN_MEMORY:
                # Emotion distribution
                emotion_dist = {}
                for log in filtered_logs:
                    emotion = log['emotion']
                    if emotion not in emotion_dist:
                        emotion_dist[emotion] = {'count': 0, 'avg_confidence': 0}
                    emotion_dist[emotion]['count'] += 1
                    emotion_dist[emotion]['avg_confidence'] += log['confidence']
                for emotion in emotion_dist:
                    emotion_dist[emotion]['avg_confidence'] /= emotion_dist[emotion]['count']
                emotion_dist = sorted(emotion_dist.items(), key=lambda x: x[1]['count'], reverse=True)

                # Daily trends
                daily_trends = {}
                for log in filtered_logs:
                    date_str = log['timestamp'].strftime('%Y-%m-%d')
                    emotion = log['emotion']
                    key = (date_str, emotion)
                    if key not in daily_trends:
                        daily_trends[key] = 0
                    daily_trends[key] += 1
                daily_trends_list = sorted([{'_id': {'date': k[0], 'emotion': k[1]}, 'count': v} for k, v in daily_trends.items()], key=lambda x: (x['_id']['date'], x['_id']['emotion']))

                # Streaks
                recent_logs = sorted(filtered_logs[-100:], key=lambda x: x['timestamp'], reverse=True)
                streaks = calculate_streaks(recent_logs)

                total_logs = len(filtered_logs)

                return {
                    'emotion_distribution': [{'_id': k, 'count': v['count'], 'avg_confidence': v['avg_confidence']} for k, v in emotion_dist],
                    'daily_trends': daily_trends_list,
                    'streaks': streaks,
                    'total_logs': total_logs
                }
            else:
                collection = get_emotion_collection()
                # Get emotion distribution
                pipeline = [
                    {'$match': {'timestamp': {'$gte': start_date}}},
                    {'$group': {
                        '_id': '$emotion',
                        'count': {'$sum': 1},
                        'avg_confidence': {'$avg': '$confidence'}
                    }},
                    {'$sort': {'count': -1}}
                ]

                emotion_dist = list(collection.aggregate(pipeline))

                # Get daily emotion trends
                daily_pipeline = [
                    {'$match': {'timestamp': {'$gte': start_date}}},
                    {'$group': {
                        '_id': {
                            'date': {'$dateToString': {'format': '%Y-%m-%d', 'date': '$timestamp'}},
                            'emotion': '$emotion'
                        },
                        'count': {'$sum': 1}
                    }},
                    {'$sort': {'_id.date': 1, '_id.emotion': 1}}
                ]

                daily_trends = list(collection.aggregate(daily_pipeline))

                # Get emotion streaks
                recent_logs = list(collection.find(
                    {'timestamp': {'$gte': start_date}},
                    {'emotion': 1, 'timestamp': 1}
                ).sort('timestamp', -1).limit(100))

                streaks = calculate_streaks(recent_logs)

                return {
                    'emotion_distribution': emotion_dist,
                    'daily_trends': daily_trends,
                    'streaks': streaks,
                    'total_logs': collection.count_documents({'timestamp': {'$gte': start_date}})
                }

        except Exception as e:
            print(f"Error getting analytics: {e}")
            return {'error': str(e)}

def get_emotion_collection():
    """Get MongoDB collection for emotion logs"""
    client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017/'))
    db = client['mindmorph']
    return db['emotion_logs']

def calculate_streaks(logs):
    """Calculate emotion streaks from recent logs"""
    if not logs:
        return {}

    # Sort logs by timestamp (most recent first)
    logs = sorted(logs, key=lambda x: x['timestamp'], reverse=True)

    current_emotion = logs[0]['emotion']
    streak_count = 1

    for log in logs[1:]:
        if log['emotion'] == current_emotion:
            streak_count += 1
        else:
            break

    return {
        'current_emotion': current_emotion,
        'streak_length': streak_count,
        'longest_streak': max_streak(logs)
    }

def max_streak(logs):
    """Calculate the longest emotion streak"""
    if not logs:
        return 0

    logs = sorted(logs, key=lambda x: x['timestamp'])
    max_streak = 1
    current_streak = 1

    for i in range(1, len(logs)):
        if logs[i]['emotion'] == logs[i-1]['emotion']:
            current_streak += 1
            max_streak = max(max_streak, current_streak)
        else:
            current_streak = 1

    return max_streak

def init_db():
    """Initialize database connection and create indexes"""
    global USE_IN_MEMORY
    try:
        # Test MongoDB connection
        client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017/'), serverSelectionTimeoutMS=3000)
        client.admin.command('ping')
        USE_IN_MEMORY = False
        collection = get_emotion_collection()
        # Create index on timestamp for efficient queries
        collection.create_index('timestamp')
        # Create index on emotion for aggregation queries
        collection.create_index('emotion')
        print("Database initialized successfully with MongoDB")
    except Exception as e:
        USE_IN_MEMORY = True
        print(f"MongoDB not available, using in-memory storage: {e}")

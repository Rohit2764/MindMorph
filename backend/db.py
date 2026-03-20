from pymongo import MongoClient

MONGO_URI = "mongodb+srv://Rohit:Rohitkpatil%4007@clustermindmorph.q66atvg.mongodb.net/?appName=ClusterMindMorph"

client = MongoClient(MONGO_URI)

print("✅ MongoDB Connected:", client.list_database_names())

db = client["mindmorph"]
emotion_collection = db["emotion_logs"]

def save_emotion_log(data):
    try:
        emotion_collection.insert_one(data)
        print("✅ Saved to DB:", data)
    except Exception as e:
        print("❌ DB Error:", e)
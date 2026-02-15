import eventlet
eventlet.monkey_patch()

from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import time

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

print("--- Starting DEBUG Server ---")

@socketio.on('connect')
def handle_connect():
    print('✅ Client connected to DEBUG server.')
    emit('connection_ack', {'status': 'connected'})

@socketio.on('disconnect')
def handle_disconnect():
    print('❌ Client disconnected from DEBUG server.')

@socketio.on('video_frame')
def handle_video_frame(data):
    # This function now only confirms receipt and sends back a fixed emotion.
    print(f"Frame received at {time.time()}")
    socketio.emit('emotion_update', {'emotion': 'happy'})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)


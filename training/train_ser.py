import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import (
    Conv2D,
    MaxPooling2D,
    Flatten,
    Dense,
    Dropout
)
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.callbacks import EarlyStopping
from feature_extraction import load_data

# ===============================
# 1️⃣ Load Dataset
# ===============================
print("Loading dataset...")
X, y = load_data("../dataset/ravdess")

print(f"Dataset shape: {X.shape}")
print(f"Labels shape: {y.shape}")

# ===============================
# 2️⃣ Encode Labels (Before Split)
# ===============================
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

print("Emotion Classes:", encoder.classes_)

# ===============================
# 3️⃣ Train/Test Split (FIXED)
# ===============================
X_train, X_test, y_train_enc, y_test_enc = train_test_split(
    X,
    y_encoded,
    test_size=0.2,
    random_state=42,
    stratify=y_encoded
)

print("Training samples:", X_train.shape[0])
print("Validation samples:", X_test.shape[0])

# ===============================
# 4️⃣ Normalize using TRAIN stats
# ===============================
mean = np.mean(X_train)
std = np.std(X_train)

X_train = (X_train - mean) / std
X_test = (X_test - mean) / std

# ===============================
# 5️⃣ Add Channel Dimension
# ===============================
X_train = X_train[..., np.newaxis]
X_test = X_test[..., np.newaxis]

# ===============================
# 6️⃣ One-Hot Encode AFTER split
# ===============================
y_train = to_categorical(y_train_enc)
y_test = to_categorical(y_test_enc)

# ===============================
# 7️⃣ Build Simpler CNN (Stable)
# ===============================
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(40, 174, 1)),
    MaxPooling2D((2, 2)),
    Dropout(0.3),

    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Dropout(0.3),

    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.4),
    Dense(8, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

# ===============================
# 8️⃣ Early Stopping
# ===============================
early_stop = EarlyStopping(
    monitor='val_loss',
    patience=6,
    restore_best_weights=True
)

# ===============================
# 9️⃣ Train Model
# ===============================
print("Training model...")

history = model.fit(
    X_train,
    y_train,
    epochs=40,
    batch_size=32,
    validation_data=(X_test, y_test),
    callbacks=[early_stop]
)

# ===============================
# 🔟 Evaluate Model
# ===============================
loss, accuracy = model.evaluate(X_test, y_test)
print(f"\nFinal Validation Accuracy: {accuracy * 100:.2f}%")

np.save("../models/ser_mean.npy", mean)
np.save("../models/ser_std.npy", std)

# ===============================
# 11️⃣ Save Model
# ===============================
os.makedirs("../models", exist_ok=True)
model.save("../models/ser_model.keras")

print("Model saved successfully!")
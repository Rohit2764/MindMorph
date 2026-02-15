// src/hooks/useEmotionSocket.ts
"use client";
import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://127.0.0.1:5000"; // Flask backend

export interface EmotionData {
  label: string;
  confidence: number;
  probs?: number[];
}

export const useEmotionSocket = () => {
  const [emotion, setEmotion] = useState<EmotionData>({ label: "default", confidence: 0 });
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Behavior tracking
  const typingStats = useRef({ keys: 0, lastKeyTs: 0, intervals: [] as number[] });
  const mouseStats = useRef({
    distance_px: 0,
    lastPos: null as { x: number; y: number } | null,
    idle_ms: 0,
    idleStart: Date.now(),
  });

  // 🎙️ --- Audio capture setup ---
  useEffect(() => {
    async function startAudioCapture() {
      try {
        const ctx = new AudioContext({ sampleRate: 22050 });
        audioCtxRef.current = ctx;
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const source = ctx.createMediaStreamSource(stream);
        const processor = ctx.createScriptProcessor(4096, 1, 1);

        source.connect(processor);
        processor.connect(ctx.destination);

        let buffer: Float32Array[] = [];
        let totalLen = 0;
        const chunkDurationMs = 1000;
        const samplesToSend = Math.floor((ctx.sampleRate * chunkDurationMs) / 1000);

        const floatTo16BitPCM = (input: Float32Array) => {
          const buffer = new ArrayBuffer(input.length * 2);
          const view = new DataView(buffer);
          let offset = 0;
          for (let i = 0; i < input.length; i++, offset += 2) {
            const s = Math.max(-1, Math.min(1, input[i]));
            view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
          }
          return buffer;
        };

        const writeString = (view: DataView, offset: number, str: string) => {
          for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
        };

        const encodeWAV = (samples: Float32Array, sampleRate: number) => {
          const buffer = new ArrayBuffer(44 + samples.length * 2);
          const view = new DataView(buffer);
          writeString(view, 0, "RIFF");
          view.setUint32(4, 36 + samples.length * 2, true);
          writeString(view, 8, "WAVE");
          writeString(view, 12, "fmt ");
          view.setUint32(16, 16, true);
          view.setUint16(20, 1, true);
          view.setUint16(22, 1, true);
          view.setUint32(24, sampleRate, true);
          view.setUint32(28, sampleRate * 2, true);
          view.setUint16(32, 2, true);
          view.setUint16(34, 16, true);
          writeString(view, 36, "data");
          view.setUint32(40, samples.length * 2, true);

          const pcm = new DataView(floatTo16BitPCM(samples));
          for (let i = 0; i < pcm.byteLength; i++) {
            view.setUint8(44 + i, pcm.getUint8(i));
          }

          const blob = new Blob([view], { type: "audio/wav" });
          return blob;
        };

        processor.onaudioprocess = (e) => {
          const input = e.inputBuffer.getChannelData(0);
          const copy = new Float32Array(input);
          buffer.push(copy);
          totalLen += copy.length;

          if (totalLen >= samplesToSend) {
            const merged = new Float32Array(totalLen);
            let offset = 0;
            for (const chunk of buffer) {
              merged.set(chunk, offset);
              offset += chunk.length;
            }
            buffer = [];
            totalLen = 0;

            const wavBlob = encodeWAV(merged, ctx.sampleRate);
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64data = reader.result as string;
              socketRef.current?.emit("audio_event", {
                wav_b64: base64data,
                timestamp: Date.now(),
              });
            };
            reader.readAsDataURL(wavBlob);
          }
        };
      } catch (err) {
        console.warn("Audio permission denied or error:", err);
      }
    }
    startAudioCapture();
  }, []);

  // 🧠 --- Socket setup ---
useEffect(() => {
  const socket = io(SERVER_URL, {
    transports: ["websocket"],
    reconnectionAttempts: 10,
    reconnectionDelay: 2000,
    timeout: 30000,
    forceNew: true,
  });
  socketRef.current = socket;

  socket.on("connect", () => {
    console.log("✅ Connected to backend");
    setIsConnected(true);
  });

  socket.on("disconnect", () => {
    console.log("❌ Disconnected");
    setIsConnected(false);
  });

  socket.on("emotion_update", (data: EmotionData) => {
    console.log("🧠 Fused Emotion received:", data);
    setEmotion(data);
    console.log("✅ Emotion state updated to:", data.label);
  });

  socket.on("connect_error", (err) => console.error("Socket error:", err));

  // Add ping/pong handling to keep connection alive
  socket.on("ping", () => {
    socket.emit("pong");
  });

  // ✅ Cleanup on unmount
  return () => {
    if (socket.connected) {
      socket.disconnect();
      console.log("Socket disconnected on unmount");
    }
  };
}, []);


  // ⌨️ --- Behavior tracking ---
  useEffect(() => {
    function onKeydown() {
      const now = Date.now();
      if (typingStats.current.lastKeyTs) {
        typingStats.current.intervals.push(now - typingStats.current.lastKeyTs);
      }
      typingStats.current.lastKeyTs = now;
      typingStats.current.keys++;
    }

    function onMouseMove(e: MouseEvent) {
      const now = Date.now();
      const last = mouseStats.current.lastPos;
      if (last) {
        const dx = e.clientX - last.x;
        const dy = e.clientY - last.y;
        mouseStats.current.distance_px += Math.sqrt(dx * dx + dy * dy);
      }
      mouseStats.current.lastPos = { x: e.clientX, y: e.clientY };
      mouseStats.current.idle_ms = now - mouseStats.current.idleStart;
    }

    window.addEventListener("keydown", onKeydown);
    window.addEventListener("mousemove", onMouseMove);

    const interval = setInterval(() => {
      const avgI =
        typingStats.current.intervals.length > 0
          ? typingStats.current.intervals.reduce((a, b) => a + b, 0) / typingStats.current.intervals.length
          : 0;
      const burstiness =
        typingStats.current.intervals.length > 0
          ? typingStats.current.intervals.length / Math.max(1, typingStats.current.keys)
          : 0;
      const typing = {
        keys: typingStats.current.keys,
        avg_ikey_interval_ms: avgI,
        burstiness,
      };
      const mouse = {
        distance_px: mouseStats.current.distance_px,
        idle_ms: mouseStats.current.idle_ms,
        speed_px_per_s: mouseStats.current.distance_px / 1.5,
      };

      socketRef.current?.emit("behavior_event", { typing, mouse, timestamp: Date.now() });

      typingStats.current = { keys: 0, lastKeyTs: 0, intervals: [] };
      mouseStats.current.distance_px = 0;
    }, 1500);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const sendFrame = (frame: string) => {
    socketRef.current?.emit("video_frame", { frame, timestamp: Date.now() });
  };

  return { emotion, isConnected, sendFrame };
};

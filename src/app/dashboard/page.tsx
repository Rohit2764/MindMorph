"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import { motion } from "framer-motion";

const COLORS: any = {
  happy: "#00ff88",
  neutral: "#00c3ff",
  sad: "#ff4d6d",
  angry: "#ff3b3b",
  fear: "#9b5cff",
  surprise: "#ffaa00"
};

export default function Dashboard() {
  const [data, setData] = useState<any>({
    distribution: {},
    timeline: []
  });

  const [liveEmotion, setLiveEmotion] = useState<any>(null);

  // 🔥 SOCKET REAL-TIME
  useEffect(() => {
    const socket = io("http://127.0.0.1:5000");

    socket.on("connect", () => console.log("🟢 Connected"));

    socket.on("final_emotion_update", (d) => {
      setLiveEmotion(d);

      setData((prev: any) => {
        const updated = { ...prev };

        updated.distribution[d.label] =
          (updated.distribution[d.label] || 0) + 1;

        updated.timeline = [
          ...updated.timeline,
          {
            time: Date.now(),
            confidence: d.confidence,
            emotion: d.label
          }
        ].slice(-50);

        return updated;
      });
    });

    return () => socket.disconnect();
  }, []);

  const pieData = Object.keys(data.distribution).map((k) => ({
    name: k,
    value: data.distribution[k]
  }));

  // 🧠 AI PREDICTION ENGINE
  const predictNextEmotion = () => {
    if (data.timeline.length < 5) return "Analyzing...";

    const recent = data.timeline.slice(-5).map((d: any) => d.emotion);

    const freq: any = {};
    recent.forEach((e: string) => {
      freq[e] = (freq[e] || 0) + 1;
    });

    return Object.keys(freq).sort((a, b) => freq[b] - freq[a])[0];
  };

  // 📊 STABILITY SCORE
  const stability = () => {
    if (data.timeline.length < 2) return 100;

    let changes = 0;
    for (let i = 1; i < data.timeline.length; i++) {
      if (data.timeline[i].emotion !== data.timeline[i - 1].emotion) {
        changes++;
      }
    }

    return Math.max(0, 100 - changes * 5);
  };

  const dominant =
    pieData.sort((a, b) => b.value - a.value)[0]?.name || "N/A";

  return (
    <div className="min-h-screen bg-[#050b18] text-white p-6">

      {/* 🔥 LIVE CORE */}
      <motion.div
        className="mb-6 p-6 rounded-2xl text-center backdrop-blur-xl bg-white/5 border border-white/10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <h1 className="text-2xl">🧠 LIVE EMOTION CORE</h1>

        <p
          className="text-5xl font-bold mt-3"
          style={{ color: COLORS[liveEmotion?.label] || "#fff" }}
        >
          {liveEmotion?.label || "Detecting..."}
        </p>

        <p className="text-gray-400 mt-2">
          Confidence: {(liveEmotion?.confidence * 100 || 0).toFixed(1)}%
        </p>
      </motion.div>

      {/* 📊 MAIN GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* PIE */}
        <div className="bg-white/5 p-4 rounded-xl">
          <h2>Emotion Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value">
                {pieData.map((e, i) => (
                  <Cell key={i} fill={COLORS[e.name] || "#888"} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* TIMELINE */}
        <div className="col-span-2 bg-white/5 p-4 rounded-xl">
          <h2>Emotion Timeline</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.timeline}>
              <XAxis hide />
              <YAxis />
              <Tooltip />
              <Line dataKey="confidence" stroke="#00c3ff" />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* 🧠 AI PANELS */}
      <div className="grid grid-cols-4 gap-4 mt-6">

        <div className="bg-white/5 p-4 rounded-xl">
          <h3>Dominant Emotion</h3>
          <p className="text-xl">{dominant}</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <h3>Predicted Next</h3>
          <p className="text-xl text-green-400">
            {predictNextEmotion()}
          </p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <h3>Stability Score</h3>
          <p className="text-xl">{stability()}%</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <h3>Total Samples</h3>
          <p className="text-xl">{data.timeline.length}</p>
        </div>

      </div>

      {/* 🔥 INSIGHT ENGINE */}
      <motion.div
        className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-xl">🤖 AI Insight Engine</h2>

        <p className="mt-2">
          {dominant === "sad" && "⚠️ Stress detected"}
          {dominant === "angry" && "⚠️ High frustration"}
          {dominant === "happy" && "✅ Positive engagement"}
          {dominant === "neutral" && "🧠 Balanced state"}
        </p>
      </motion.div>

    </div>
  );
}
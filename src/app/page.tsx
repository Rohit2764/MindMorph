"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  MessageSquare,
  BarChart,
  Sliders,
  Wind,
  RefreshCw,
  AlertTriangle,
  Video,
  VideoOff,
  Edit2,
  Zap,
} from "lucide-react";
import { useEmotionSocket } from "../hooks/useEmotionSocket";
import { emotionStyles, Emotion } from "../lib/emotionStyles";
import BreathingGuide from "../components/BreathingGuide";
import AnimatedQuote from "../components/AnimatedQuote";
import AnalyticsButton from "@/components/AnalyticsButton";

export default function HomePage() {
  const webcamRef = useRef<Webcam>(null);
  const { emotion, isConnected, sendFrame } = useEmotionSocket();

  const [currentQuote, setCurrentQuote] = useState({
    quote: "Activate the Bio-Sensor or explore the dashboard.",
    author: "MindMorph",
  });
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);
  const [showBreathingGuide, setShowBreathingGuide] = useState(false);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  // Get current emotion - properly handle undefined/null
  const emotionLabel = emotion?.label?.toLowerCase() || "default";
  const currentEmotion = (emotionLabel as Emotion);
  const confidence = emotion?.confidence || 0;
  const currentStyle = emotionStyles[currentEmotion] || emotionStyles.default;

  // capture webcam frames
  const captureFrame = useCallback(() => {
    if (isWebcamActive && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) sendFrame(imageSrc);
    }
  }, [sendFrame, isWebcamActive]);

  useEffect(() => {
    const interval = setInterval(captureFrame, 600);
    return () => clearInterval(interval);
  }, [captureFrame]);

  useEffect(() => {
  if (currentEmotion !== "default") {
    setIsQuoteLoading(true);

    setTimeout(() => {
      const newQuote = getQuoteByEmotion(currentEmotion);
      setCurrentQuote(newQuote);
      setIsQuoteLoading(false);
    }, 800); // delay for animation feel
  }
}, [currentEmotion]);

  const getQuoteByEmotion = (emotion: string) => {
  const quotes: Record<string, { quote: string; author: string }[]> = {
    happy: [
      { quote: "Happiness is a direction, not a place.", author: "Sydney Harris" },
      { quote: "Keep smiling, it confuses people.", author: "Unknown" },
    ],
    sad: [
      { quote: "Tears come from the heart.", author: "Leonardo da Vinci" },
      { quote: "Every storm runs out of rain.", author: "Unknown" },
    ],
    angry: [
      { quote: "Speak when you are calm, not angry.", author: "Unknown" },
      { quote: "Anger is one letter short of danger.", author: "Eleanor Roosevelt" },
    ],
    fear: [
      { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    ],
    neutral: [
      { quote: "Calm mind brings inner strength.", author: "Dalai Lama" },
    ],
    default: [
      { quote: "Activate the Bio-Sensor or explore the dashboard.", author: "MindMorph" },
    ],
  };

  const selected = quotes[emotion] || quotes["default"];
  return selected[Math.floor(Math.random() * selected.length)];
};

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white transition-colors duration-300">
      {/* Aurora background with continuous update */}
      <motion.div
        key={`aurora-${currentEmotion}`}
        className="absolute inset-0 z-0"
        initial={{
          background: `radial-gradient(ellipse at 40% 60%, ${emotionStyles.default.auroraColors[0]} 0%, transparent 50%),
                       radial-gradient(ellipse at 60% 40%, ${emotionStyles.default.auroraColors[1]} 0%, transparent 50%)`,
        }}
        animate={{
          background: `radial-gradient(ellipse at 40% 60%, ${currentStyle.auroraColors[0]} 0%, transparent 50%),
                       radial-gradient(ellipse at 60% 40%, ${currentStyle.auroraColors[1]} 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex h-screen flex-col items-center p-4">
        <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider">MindMorph</h1>
          <div className="flex items-center gap-4 text-gray-400">
            <button
              title="Refresh"
              className="hover:text-white transition-colors"
              onClick={() => window.location.reload()}
            >
              <RefreshCw size={20} />
            </button>
            <button
              title="Breathing Exercise"
              onClick={() => setShowBreathingGuide(true)}
              className="hover:text-white transition-colors"
            >
              <Wind size={20} />
            </button>
          </div>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center text-center -mt-16">
          {/* Emotion orb with continuous animation based on current emotion */}
          <motion.div
            key={`orb-${currentEmotion}`}
            className="mb-8 h-48 w-48 rounded-full flex items-center justify-center shadow-2xl"
            initial={{
              background: `radial-gradient(circle at center, ${emotionStyles.default.orbColor} 0%, transparent 70%)`,
              scale: 1,
            }}
            animate={{
              background: `radial-gradient(circle at center, ${currentStyle.orbColor} 0%, transparent 70%)`,
              scale: [1, 1.08, 1],
            }}
            transition={{
              background: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.span
              key={`emotion-text-${currentEmotion}`}
              className="text-3xl font-bold capitalize"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentEmotion}
            </motion.span>
          </motion.div>

          <motion.p
            key={`confidence-${confidence}`}
            className="text-sm opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Confidence: {(confidence * 100).toFixed(0)}%
          </motion.p>

                

          <AnimatedQuote
  quote={currentQuote.quote}
  author={currentQuote.author}
  isLoading={isQuoteLoading}
  emotion={currentEmotion}
/>
        </div>

        <footer className="absolute bottom-0 w-full h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isWebcamActive ? (
              <motion.div
                key="webcam-active"
                className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Webcam
                    ref={webcamRef}
                    mirrored={true}
                    className="h-full w-full object-cover"
                    videoConstraints={{
                      width: 320,
                      height: 180,
                      facingMode: "user",
                    }}
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-3">
                    <button
                      onClick={() => setIsWebcamActive(false)}
                      className="p-1.5 rounded-full bg-red-500/80 text-white hover:bg-red-600/80 transition-colors"
                    >
                      <VideoOff size={14} />
                    </button>
                    <div
                      className={`flex items-center gap-2 rounded-full px-2 py-1 text-xs transition-colors ${
                        isConnected ? "bg-green-500/80" : "bg-red-500/80"
                      }`}
                    >
                      <Wifi size={12} />
                      {isConnected ? "Connected" : "Offline"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="webcam-off"
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={() => setIsWebcamActive(true)}
                  className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Zap size={28} />
                  </motion.div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </footer>
      </div>

      <BreathingGuide
        isVisible={showBreathingGuide}
        onClose={() => setShowBreathingGuide(false)}
      />

  


              <AnimatePresence>
  {isLaunching && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Rotating Loader */}
      <motion.div
        className="w-40 h-40 rounded-full border-4 border-blue-400 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />

      {/* Pulse Ring */}
      <motion.div
        className="absolute w-60 h-60 rounded-full border border-blue-500"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* Text */}
      <motion.p className="mt-8 text-blue-400 text-lg font-mono">
        Initializing AI Analytics...
      </motion.p>

      <motion.p
        className="text-gray-400 text-sm mt-2"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Syncing multimodal signals...
      </motion.p>
    </motion.div>
  )}
</AnimatePresence>

{/* ================= POPUP NOTIFICATION ================= */}
<AnimatePresence>
  {currentEmotion !== "default" && !isLaunching && (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        onClick={() => {
          setIsLaunching(true);

          setTimeout(() => {
            window.open("/dashboard", "_blank");
            setIsLaunching(false);
          }, 2500);
        }}
        className="cursor-pointer w-72 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-lg shadow-2xl hover:scale-105 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400">MindMorph AI</span>
          <span className="text-green-400 text-xs animate-pulse">LIVE</span>
        </div>

        {/* Content */}
        <h3 className="text-white font-semibold text-sm">
          🧠 Emotion Insights Ready
        </h3>

        <p className="text-gray-400 text-xs mt-1">
          Your session analytics are available. Click to explore deep insights.
        </p>

        {/* Action */}
        <div className="mt-3 text-blue-400 text-xs font-medium">
          Open Dashboard →
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

</main>
  );
}

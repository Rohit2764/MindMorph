"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AnalyticsButton() {
  const router = useRouter();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <motion.button
  onClick={() => window.open("/dashboard", "_blank")}
  className="relative px-6 py-3 rounded-full text-white bg-black/30 border border-white/20 backdrop-blur-xl"
  whileHover={{ scale: 1.1 }}
>
  <span className="relative z-10">🧠 Open Intelligence</span>

  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-40"></span>
</motion.button>
    </motion.div>
  );
}
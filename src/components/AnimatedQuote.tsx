'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedQuoteProps {
  quote: string;
  author: string;
  isLoading: boolean;
  emotion?: string;
}
const AnimatedQuote = ({ quote, author, isLoading, emotion }: AnimatedQuoteProps) => {
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (isLoading) {
    return (
        <div className="flex h-24 items-center justify-center">
            <motion.div 
                className="w-4 h-4 bg-white/50 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    )
  }

  const glowMap: Record<string, string> = {
  happy: "text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]",
  sad: "text-blue-300 drop-shadow-[0_0_10px_rgba(0,150,255,0.6)]",
  angry: "text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]",
  neutral: "text-white",
  fear: "text-purple-300",
  surprise: "text-pink-300",
  disgust: "text-green-300",
};

  return (
    <AnimatePresence mode="wait">
      <motion.div

        animate={{
  opacity: 1,
  y: [0, -5, 0],
}}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut"
}}
        key={quote} // Animate whenever the quote text changes
        className="flex h-24 flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className={`max-w-2xl text-center text-xl italic transition-all duration-500 ${
  glowMap[emotion || "neutral"] || "text-white"
}`}
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          {quote.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p 
            className="mt-3 text-sm text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5 } }}
        >
            - {author}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedQuote;

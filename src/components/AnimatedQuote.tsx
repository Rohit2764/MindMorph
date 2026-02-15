'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedQuoteProps {
  quote: string;
  author: string;
  isLoading: boolean;
}

const AnimatedQuote = ({ quote, author, isLoading }: AnimatedQuoteProps) => {
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={quote} // Animate whenever the quote text changes
        className="flex h-24 flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="max-w-2xl text-center text-xl italic text-white"
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

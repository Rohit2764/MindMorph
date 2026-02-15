'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';

interface BreathingGuideProps {
  isVisible: boolean;
  onClose: () => void;
}

const BreathingGuide = ({ isVisible, onClose }: BreathingGuideProps) => {
  // --- Interactive Pacing State ---
  const [inhaleTime, setInhaleTime] = useState(4);
  const [holdTime, setHoldTime] = useState(4);
  const [exhaleTime, setExhaleTime] = useState(6);
  const [currentStep, setCurrentStep] = useState('Inhale');

  const totalDuration = inhaleTime + holdTime + exhaleTime;
  const controls = useAnimation();

  // Effect to manage the animation sequence and text labels
  useEffect(() => {
    if (isVisible) {
      const sequence = async () => {
        while (true) {
          setCurrentStep(`Inhale (${inhaleTime}s)`);
          await controls.start({ scale: 1.5, transition: { duration: inhaleTime, ease: 'easeInOut' } });
          setCurrentStep(`Hold (${holdTime}s)`);
          await new Promise(resolve => setTimeout(resolve, holdTime * 1000));
          setCurrentStep(`Exhale (${exhaleTime}s)`);
          await controls.start({ scale: 1, transition: { duration: exhaleTime, ease: 'easeInOut' } });
          await new Promise(resolve => setTimeout(resolve, 500)); // Brief pause
        }
      };
      sequence();
    }
  }, [isVisible, inhaleTime, holdTime, exhaleTime, controls]);

  // Handlers for interactive controls
  const adjustTime = (setter: React.Dispatch<React.SetStateAction<number>>, delta: number) => {
    setter(prev => Math.max(1, prev + delta));
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-all z-20">
            <X size={32} />
          </button>

          {/* Main Visualizer */}
          <div className="relative flex h-80 w-80 items-center justify-center">
            {/* Pulsating Rings */}
            {[0, 1, 2].map(i => (
                 <motion.div
                    key={i}
                    className="absolute h-full w-full rounded-full border border-blue-400/30"
                    initial={{ scale: 1 }}
                    animate={controls}
                    style={{ animationDelay: `${i * 0.2}s`}}
                 />
            ))}
            
            {/* Central Text */}
            <div className="z-10 text-center text-white">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-semibold"
                    >
                        {currentStep.split(' ')[0]}
                    </motion.p>
                </AnimatePresence>
                <p className="text-lg text-white/60 mt-2">{currentStep.includes('(') ? currentStep.split(' ')[1] : ''}</p>
            </div>

             {/* Circular Progress Bar */}
             <motion.svg className="absolute h-full w-full" viewBox="0 0 100 100">
                <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="rgba(59, 130, 246, 0.7)"
                    strokeWidth="3"
                    fill="transparent"
                    strokeDasharray="301.59"
                    initial={{ strokeDashoffset: 301.59 }}
                    animate={{ strokeDashoffset: [301.59, 0, 0, 301.59, 301.59] }}
                    transition={{
                        duration: totalDuration + 0.5,
                        ease: "linear",
                        repeat: Infinity,
                        times: [0, inhaleTime/totalDuration, (inhaleTime+holdTime)/totalDuration, 1, 1]
                    }}
                />
            </motion.svg>
          </div>

          {/* Interactive Controls Panel */}
          <motion.div 
            className="absolute bottom-10 flex gap-8 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 }}}
          >
             {['Inhale', 'Hold', 'Exhale'].map((label) => {
                 const [value, setter] = {
                     'Inhale': [inhaleTime, setInhaleTime],
                     'Hold': [holdTime, setHoldTime],
                     'Exhale': [exhaleTime, setExhaleTime]
                 }[label] as [number, React.Dispatch<React.SetStateAction<number>>];

                 return (
                    <div key={label} className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium text-white/70">{label}</span>
                        <div className="flex items-center gap-3">
                            <button onClick={() => adjustTime(setter, -1)} className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Minus size={16}/></button>
                            <span className="text-lg font-bold w-6 text-center">{value}</span>
                            <button onClick={() => adjustTime(setter, 1)} className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Plus size={16}/></button>
                        </div>
                    </div>
                 )
             })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BreathingGuide;


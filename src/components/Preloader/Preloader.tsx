import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const hasSeen = sessionStorage.getItem('noctra_preloader_seen');
    if (hasSeen) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem('noctra_preloader_seen', 'true');
            setIsDone(true);
            onComplete?.();
          }, 350);
          return 100;
        }
        // Realistic easing progress
        const remaining = 100 - prev;
        const jump = Math.max(1, Math.floor(Math.random() * (remaining * 0.25) + 3));
        return Math.min(100, prev + jump);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#10100F] text-[#EAE4D9]"
      >
        {/* Subtle background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,174,139,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Architectural Monolith Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <svg
              className="w-12 h-12 text-[#C5AE8B] stroke-current"
              viewBox="0 0 32 32"
              fill="none"
              strokeWidth="1.2"
            >
              <polygon points="16,2 30,28 2,28" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="16,10 24,26 8,26" fill="rgba(197, 174, 139, 0.2)" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="20" r="1.5" fill="#C5AE8B" />
            </svg>
          </motion.div>

          {/* NOCTRA Wordmark */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, letterSpacing: '0.25em' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#EAE4D9] mb-4"
          >
            NOCTRA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#77736A] font-light mb-12"
          >
            Escape the Surface
          </motion.p>

          {/* Minimal Progress Line & Number */}
          <div className="w-48 sm:w-64 flex flex-col items-center gap-3">
            <div className="w-full h-[1px] bg-[#292825] overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#C5AE8B]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>
            <div className="flex justify-between w-full text-[10px] uppercase tracking-widest text-[#77736A] font-mono">
              <span>Sector -380M</span>
              <span className="text-[#C5AE8B]">{progress}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

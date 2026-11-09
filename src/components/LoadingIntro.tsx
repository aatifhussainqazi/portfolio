import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingIntroProps {
  onComplete: () => void;
}

export const LoadingIntro: React.FC<LoadingIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, finish immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const startTime = Date.now();
    const duration = 1400; // 1.4s sweet spot

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setIsFinished(true);
        setTimeout(() => {
          onComplete();
        }, 500); // Allow curtain reveal animation to finish
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#0A0A0A] flex flex-col justify-between p-8 sm:p-12 md:p-16 select-none cursor-default"
        >
          {/* Header indicator */}
          <div className="flex items-center justify-between text-xs font-mono text-[#929292]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467] animate-pulse" />
              SYSTEM.INIT // AATIF HUSSAIN QAZI
            </span>
            <button
              onClick={handleSkip}
              className="text-[#929292] hover:text-[#C5F467] transition-colors uppercase tracking-widest text-[11px]"
            >
              Skip [ESC]
            </button>
          </div>

          {/* Central Monogram */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-[#F5F5F5] font-display">
                AQ<span className="text-[#C5F467]">.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#929292]"
            >
              Creative Technology &amp; Digital Portfolio
            </motion.p>
          </div>

          {/* Bottom Telemetry & Progress */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 font-mono text-xs text-[#929292]">
            <div>
              <div className="text-[11px] text-[#5A5A5A] uppercase tracking-wider mb-1">Affiliation</div>
              <div className="text-[#F5F5F5]">B.Sc. DYOD · IUST Awantipora</div>
            </div>

            <div className="w-full sm:w-64">
              <div className="flex justify-between text-xs mb-2 text-[#929292]">
                <span className="tracking-widest">LOADING ASSETS</span>
                <span className="text-[#C5F467] font-bold">{progress.toString().padStart(3, '0')}%</span>
              </div>
              <div className="h-[2px] w-full bg-[#292929] overflow-hidden">
                <motion.div
                  className="h-full bg-[#C5F467]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

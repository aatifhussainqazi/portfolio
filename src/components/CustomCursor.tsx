import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device has touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-interactive]');
      const projectCard = target.closest('[data-cursor-project]');

      if (projectCard) {
        setIsPointer(true);
        setCursorText('VIEW');
      } else if (interactive) {
        setIsPointer(true);
        setCursorText('');
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Tiny precise center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C5F467] pointer-events-none z-[9999]"
        style={{
          x: position.x - 4,
          y: position.y - 4,
          boxShadow: '0 0 10px rgba(197, 244, 103, 0.6)',
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 450, mass: 0.1 }}
      />

      {/* Smooth outer follower ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] flex items-center justify-center transition-colors duration-200 ${
          isPointer
            ? 'border-[#C5F467] bg-[#C5F467]/10 backdrop-blur-[1px]'
            : 'border-white/20 bg-transparent'
        }`}
        animate={{
          x: isPointer ? position.x - 24 : position.x - 16,
          y: isPointer ? position.y - 24 : position.y - 16,
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.2 }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#C5F467]">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};

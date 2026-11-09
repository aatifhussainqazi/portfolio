import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-[#C5F467] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(197,244,103,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

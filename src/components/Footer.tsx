import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Globe } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Indian Standard Time (UTC+5:30)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-[#080808] border-t border-[#222222] text-[#929292] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-[#1E1E1E] gap-6">
          <div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-[#F5F5F5] tracking-tight mb-1">
              AATIF HUSSAIN QAZI<span className="text-[#C5F467]">.</span>
            </div>
            <div className="text-[#5A5A5A] text-xs">
              Creative Technology · Digital Media · Practical Projects
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-[#929292]">
              <Clock size={13} className="text-[#C5F467]" />
              <span>SOPORE / IUST:</span>
              <span className="text-[#F5F5F5] font-semibold">{localTime || 'IST UTC+5:30'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141414] border border-[#292929] hover:border-[#C5F467]/50 text-[#F5F5F5] transition-all hover:bg-[#1E1E1E] active:scale-95"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="text-[#C5F467]" />
            </button>
          </div>
        </div>

        {/* Bottom Details Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#5A5A5A] text-[11px]">
          <div className="flex items-center gap-2">
            <Globe size={12} className="text-[#C5F467]" />
            <span>Islamic University of Science &amp; Technology · Awantipora, Kashmir</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#7A7A7A]">DESIGNED &amp; BUILT WITH CURIOSITY</span>
            <span>·</span>
            <span>&copy; {currentYear} {personalData.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

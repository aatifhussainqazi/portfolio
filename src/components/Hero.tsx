import React from 'react';
import { ArrowDownRight, Compass, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroVisual3D } from './HeroVisual3D';
import { personalData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0A0A0A] bg-grid-pattern"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#C5F467]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Metadata pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#292929] text-[11px] font-mono text-[#C5F467] tracking-wider uppercase">
              <Sparkles size={12} className="text-[#C5F467]" />
              <span>{personalData.roleSubtitle}</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-[#5A5A5A]">
              [SOPORE · KASHMIR]
            </span>
          </motion.div>

          {/* Large Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 mb-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tighter text-[#F5F5F5] font-display leading-[0.98]">
              Exploring <span className="text-[#C5F467]">technology.</span>
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tighter text-[#929292] font-display leading-[0.98]">
              Creating digital <span className="text-[#F5F5F5]">experiences.</span>
            </h1>
          </motion.div>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#929292] font-sans max-w-xl leading-relaxed mb-10"
          >
            I'm <span className="text-[#F5F5F5] font-medium">{personalData.name}</span>, a DYOD student at IUST interested in technology, 3D creation, digital media, and practical projects. I enjoy exploring ideas and turning them into something tangible.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#C5F467] text-[#0A0A0A] font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#b2e64b] hover:shadow-[0_0_20px_rgba(197,244,103,0.4)] active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </button>

            <button
              onClick={() => scrollTo('about')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] border border-[#292929] text-[#F5F5F5] font-mono text-xs tracking-wider uppercase hover:border-[#5A5A5A] hover:bg-[#202020] transition-all duration-300 active:scale-95"
            >
              <Compass size={14} className="text-[#929292]" />
              <span>About Me</span>
            </button>
          </motion.div>

          {/* Monospace Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-[#292929]/80 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs"
          >
            <div>
              <span className="text-[#5A5A5A] uppercase tracking-wider block text-[10px]">Curriculum</span>
              <span className="text-[#F5F5F5] font-medium">B.Sc. DYOD (1st Year)</span>
            </div>
            <div>
              <span className="text-[#5A5A5A] uppercase tracking-wider block text-[10px]">Creative Focus</span>
              <span className="text-[#C5F467] font-medium">Blender 3D &amp; Media</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#5A5A5A] uppercase tracking-wider block text-[10px]">Location</span>
              <span className="text-[#F5F5F5] font-medium">Sopore, J&amp;K</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Art Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Card-like subtle frame surrounding 3D element */}
          <div className="relative w-full aspect-square max-w-[460px] rounded-2xl border border-[#292929] bg-[#111111]/60 p-2 backdrop-blur-sm overflow-hidden group">
            {/* Corner crosshair accents for technical precision feel */}
            <div className="absolute top-3 left-3 text-[10px] font-mono text-[#5A5A5A] tracking-widest z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#C5F467] rounded-full" />
              VIEWPORT // 3D.OBJ
            </div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-[#5A5A5A] z-10">
              [ROTATION: DYNAMIC]
            </div>
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#5A5A5A] z-10">
              DRAG TO ROTATE
            </div>
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#C5F467] z-10">
              60 FPS
            </div>

            {/* Three.js viewport */}
            <HeroVisual3D />
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between text-xs font-mono text-[#5A5A5A]"
      >
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2 hover:text-[#C5F467] transition-colors group cursor-pointer focus:outline-none"
        >
          <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
          <ChevronDown
            size={14}
            className="animate-bounce text-[#929292] group-hover:text-[#C5F467]"
          />
        </button>

        <div className="hidden sm:flex items-center gap-3 text-[11px] text-[#5A5A5A]">
          <span>INDEX 2026</span>
          <span>·</span>
          <span>CREATIVE TECHNOLOGY</span>
        </div>
      </motion.div>
    </section>
  );
};

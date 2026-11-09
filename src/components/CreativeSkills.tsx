import React from 'react';
import { motion } from 'framer-motion';
import { Box, Film, Video, Palette, Sparkles, Share2, CornerDownRight } from 'lucide-react';
import { creativeSkillsData } from '../data/portfolioData';

export const CreativeSkills: React.FC = () => {
  const getSkillIcon = (id: string, category: string) => {
    if (id === 'video-editing') return <Video size={20} className="text-[#C5F467]" />;
    switch (category) {
      case '3d':
        return <Box size={20} className="text-[#C5F467]" />;
      case 'motion':
        return <Film size={20} className="text-[#C5F467]" />;
      case 'design':
        return <Palette size={20} className="text-[#C5F467]" />;
      case 'content':
        return <Share2 size={20} className="text-[#C5F467]" />;
      default:
        return <Sparkles size={20} className="text-[#C5F467]" />;
    }
  };

  return (
    <section
      id="creative"
      className="relative py-28 bg-[#0A0A0A] border-t border-[#292929] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#292929] mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#C5F467] tracking-widest uppercase">
                03 / CREATIVE SKILLS
              </span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span className="font-mono text-xs text-[#5A5A5A] uppercase hidden sm:inline">
                Spatial, Motion &amp; Visual Disciplines
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F5F5F5]">
              The <span className="text-[#C5F467]">creative side.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#929292] max-w-xs text-right hidden sm:block">
            Grounding imagination with 3D precision, visual craft, and kinetic pacing.
          </div>
        </div>

        {/* 6 High-Impact Creative Skill Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeSkillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#3E3E3E] transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Header: Icon & Environment Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#292929] group-hover:border-[#C5F467]/40 transition-colors">
                    {getSkillIcon(skill.id, skill.category)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#181818] border border-[#262626] text-[10px] font-mono text-[#929292] group-hover:text-[#C5F467] transition-colors">
                    {skill.tool}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#5A5A5A] block mb-1">
                  {skill.subtitle}
                </span>
                <h3 className="text-xl font-display font-bold text-[#F5F5F5] group-hover:text-[#C5F467] transition-colors mb-3">
                  {skill.title}
                </h3>

                {/* Honest Editorial Narrative */}
                <p className="text-xs sm:text-sm text-[#929292] font-sans leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="pt-4 border-t border-[#222222]">
                <div className="text-[10px] font-mono text-[#5A5A5A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CornerDownRight size={10} className="text-[#C5F467]" />
                  <span>Key Competencies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.capabilities.map((cap, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#929292] border border-[#262626]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

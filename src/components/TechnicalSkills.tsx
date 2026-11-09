import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Monitor, Share2, Check } from 'lucide-react';
import { technicalSkillsData } from '../data/portfolioData';

export const TechnicalSkills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming & Data':
        return <Terminal size={16} className="text-[#C5F467]" />;
      case 'Creative Software':
        return <Cpu size={16} className="text-[#C5F467]" />;
      case 'Web & Systems':
        return <Monitor size={16} className="text-[#C5F467]" />;
      case 'Digital Media':
        return <Share2 size={16} className="text-[#C5F467]" />;
      default:
        return <Terminal size={16} className="text-[#C5F467]" />;
    }
  };

  return (
    <section
      id="technical"
      className="relative py-28 bg-[#0A0A0A] border-t border-[#292929] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#292929] mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#C5F467] tracking-widest uppercase">
                04 / TECHNICAL SKILLS
              </span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span className="font-mono text-xs text-[#5A5A5A] uppercase hidden sm:inline">
                Toolsets &amp; Environments
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F5F5F5]">
              Tools I <span className="text-[#C5F467]">work with.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#5A5A5A]">
            AUTHENTIC STACK // VERIFIED
          </div>
        </div>

        {/* 4 Grouped Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalSkillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#292929] flex flex-col justify-between"
            >
              {/* Group Title Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-[#222222] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1A1A1A] border border-[#292929]">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#F5F5F5]">
                    {group.category}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#5A5A5A]">
                  {group.skills.length} TOOLS
                </span>
              </div>

              {/* Skills in this Category */}
              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-[#171717]/60 border border-[#262626] hover:border-[#3D3D3D] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467]" />
                        <h4 className="font-display font-bold text-sm text-[#F5F5F5] group-hover:text-[#C5F467] transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-[#5A5A5A] group-hover:text-[#929292]">
                        <Check size={12} className="text-[#C5F467]" />
                        Active
                      </span>
                    </div>

                    <p className="text-xs text-[#929292] font-sans mb-2">
                      {skill.description}
                    </p>

                    <div className="text-[11px] font-mono text-[#6A6A6A] bg-[#111111] px-2.5 py-1 rounded border border-[#222222]">
                      <span className="text-[#5A5A5A] mr-1.5">Context:</span>
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

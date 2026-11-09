import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-28 bg-[#0A0A0A] border-t border-[#292929] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#292929] mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#C5F467] tracking-widest uppercase">
                05 / EXPERIENCE
              </span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span className="font-mono text-xs text-[#5A5A5A] uppercase hidden sm:inline">
                Real-World Engagement
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F5F5F5]">
              Experience <span className="text-[#C5F467]">beyond the classroom.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#5A5A5A]">
            PRACTICAL CHRONOLOGY
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-16 border-l border-[#292929] space-y-12 max-w-4xl">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[71px] top-1.5 flex items-center justify-center">
                <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                  exp.current
                    ? 'border-[#C5F467] bg-[#0A0A0A] shadow-[0_0_10px_rgba(197,244,103,0.8)]'
                    : 'border-[#5A5A5A] bg-[#0A0A0A] group-hover:border-[#C5F467]'
                }`}>
                  {exp.current && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5F467] m-auto" />
                  )}
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#3E3E3E] transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#222222] mb-6 gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-bold text-xl text-[#F5F5F5] group-hover:text-[#C5F467] transition-colors">
                        {exp.role}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-[#C5F467]/10 border border-[#C5F467]/30 text-[10px] font-mono text-[#C5F467] font-semibold uppercase">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#929292]">
                      <Briefcase size={14} className="text-[#C5F467]" />
                      <span>{exp.organization}</span>
                      <span className="text-[#5A5A5A]">·</span>
                      <MapPin size={14} className="text-[#5A5A5A]" />
                      <span className="text-[#5A5A5A] text-xs font-mono">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-[#929292] bg-[#171717] px-3 py-1.5 rounded-lg border border-[#262626] self-start sm:self-auto">
                    <Calendar size={13} className="text-[#C5F467]" />
                    <span>{exp.period}</span>
                    {exp.duration && (
                      <span className="text-[#5A5A5A]">({exp.duration})</span>
                    )}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm text-[#929292] font-sans">
                      <CheckCircle2 size={15} className="text-[#C5F467] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-[#1E1E1E] flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#181818] border border-[#262626] font-mono text-[11px] text-[#929292]"
                    >
                      {tag}
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

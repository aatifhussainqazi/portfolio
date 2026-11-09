import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-28 bg-[#0A0A0A] border-t border-[#292929] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#292929] mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#C5F467] tracking-widest uppercase">
                06 / EDUCATION
              </span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span className="font-mono text-xs text-[#5A5A5A] uppercase hidden sm:inline">
                Academic Foundations
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F5F5F5]">
              Currently <span className="text-[#C5F467]">learning.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#5A5A5A]">
            ACADEMIC PATHWAY
          </div>
        </div>

        {/* Education Editorial Grid / Stack */}
        <div className="space-y-6 max-w-4xl">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                edu.current
                  ? 'bg-[#141414] border-[#C5F467]/40 shadow-xl shadow-black/60 relative overflow-hidden'
                  : 'bg-[#111111] border-[#292929] hover:border-[#3D3D3D]'
              }`}
            >
              {edu.current && (
                <div className="absolute top-0 right-0 bg-[#C5F467] text-[#0A0A0A] text-[10px] font-mono font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles size={11} />
                  CURRENT ENROLLMENT
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <GraduationCap
                      size={18}
                      className={edu.current ? 'text-[#C5F467]' : 'text-[#929292]'}
                    />
                    <h3 className="font-display font-bold text-xl text-[#F5F5F5]">
                      {edu.institution}
                    </h3>
                  </div>

                  <div className="text-base font-medium text-[#C5F467] font-sans">
                    {edu.degree}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-[#929292]">
                  <div className="flex items-center gap-1.5 bg-[#171717] px-3 py-1 rounded border border-[#262626]">
                    <Calendar size={12} className="text-[#C5F467]" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-[11px] text-[#5A5A5A]">{edu.status}</span>
                </div>
              </div>

              {/* Location & Details */}
              <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-[#5A5A5A] font-mono">
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                </div>

                {edu.grade && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171717] border border-[#292929] font-mono text-xs text-[#F5F5F5] font-semibold">
                    <Award size={13} className="text-[#C5F467]" />
                    <span>{edu.grade}</span>
                  </div>
                )}
              </div>

              {edu.details && (
                <p className="mt-3 text-xs sm:text-sm text-[#929292] font-sans leading-relaxed">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

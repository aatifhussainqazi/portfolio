import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Building2, Flame, Layers } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const About: React.FC = () => {
  const metadataItems = [
    {
      icon: <MapPin size={16} className="text-[#C5F467]" />,
      label: 'Location',
      value: personalData.location,
      detail: 'Baramulla District, Kashmir',
    },
    {
      icon: <GraduationCap size={16} className="text-[#C5F467]" />,
      label: 'Program',
      value: 'B.Sc. DYOD',
      detail: 'Design Your Own Degree',
    },
    {
      icon: <Building2 size={16} className="text-[#C5F467]" />,
      label: 'Institution',
      value: 'IUST Awantipora',
      detail: 'Islamic Univ. of Science & Tech',
    },
    {
      icon: <Flame size={16} className="text-[#C5F467]" />,
      label: 'Current Focus',
      value: 'Creative Tech & 3D',
      detail: 'Blender, Systems & Media',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#0A0A0A] border-t border-[#292929] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#292929] mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#C5F467] tracking-widest uppercase">
              01 / ABOUT
            </span>
            <span className="w-8 h-[1px] bg-[#292929]" />
            <span className="font-mono text-xs text-[#5A5A5A] uppercase hidden sm:inline">
              Personal Profile &amp; Ethos
            </span>
          </div>

          <div className="font-mono text-xs text-[#5A5A5A]">
            AQ.BIO.2026
          </div>
        </div>

        {/* Editorial Layout: Large Heading Left, Narrative & Metadata Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophical Note */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F5F5F5] leading-tight mb-8"
            >
              A little <br />
              <span className="text-[#C5F467]">about me.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#111111] border border-[#292929] relative overflow-hidden"
            >
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#C5F467] uppercase tracking-wider mb-3">
                <Layers size={14} />
                <span>Interdisciplinary Philosophy</span>
              </div>
              <p className="text-sm text-[#929292] font-sans leading-relaxed">
                "I believe the best work emerges at the intersection of creative intuition and computational curiosity. Learning by building is my continuous methodology."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Bio Narrative + Metadata Grid */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Bio Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-base sm:text-lg text-[#929292] font-sans leading-relaxed"
            >
              <p className="text-[#F5F5F5] font-medium leading-relaxed">
                {personalData.bioParagraphs[0]}
              </p>
              <p>
                {personalData.bioParagraphs[1]}
              </p>
              <p>
                {personalData.bioParagraphs[2]}
              </p>
            </motion.div>

            {/* Visual Metadata Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="pt-6 border-t border-[#292929]"
            >
              <div className="text-xs font-mono text-[#5A5A5A] uppercase tracking-wider mb-4">
                Structured Telemetry
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metadataItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#3D3D3D] transition-colors flex items-start gap-3.5 group"
                  >
                    <div className="p-2 rounded-lg bg-[#171717] border border-[#292929] group-hover:border-[#C5F467]/40 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A5A] block">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-[#F5F5F5] block font-sans">
                        {item.value}
                      </span>
                      <span className="text-xs text-[#929292] font-mono block mt-0.5">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

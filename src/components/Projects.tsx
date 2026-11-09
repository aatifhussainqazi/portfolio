import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#0A0A0A] border-t border-[#292929] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#292929] mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#C5F467] tracking-widest uppercase">
                02 / SELECTED WORK
              </span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span className="font-mono text-xs text-[#5A5A5A] uppercase hidden sm:inline">
                Projects &amp; Contributions
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#F5F5F5]">
              Things I've <span className="text-[#C5F467]">worked on.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#5A5A5A]">
            <FolderGit2 size={14} className="text-[#C5F467]" />
            <span>4 CURATED ENTRIES</span>
          </div>
        </div>

        {/* Asymmetrical Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projectsData.map((project, index) => {
            // Asymmetrical layout: odd/even span variations for editorial rhythm
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-cursor-project="true"
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group relative rounded-2xl bg-[#141414] border border-[#292929] hover:border-[#3E3E3E] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/80`}
              >
                {/* Visual Representation Area */}
                <div className="overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <ProjectCardVisual type={project.visualType} title={project.title} />
                </div>

                {/* Card Info Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category & Status Bar */}
                    <div className="flex items-center justify-between font-mono text-xs mb-3 text-[#929292]">
                      <span className="uppercase tracking-wider text-[#C5F467]">
                        {project.category}
                      </span>
                      <span className="text-[#5A5A5A]">{project.year}</span>
                    </div>

                    {/* Title with Subtle Hover Offset */}
                    <h3 className="text-2xl font-display font-bold text-[#F5F5F5] group-hover:text-[#C5F467] transition-all duration-300 flex items-center justify-between mb-3">
                      <span>{project.title}</span>
                      <div className="p-2 rounded-full bg-[#1A1A1A] border border-[#292929] group-hover:border-[#C5F467]/50 group-hover:bg-[#C5F467] text-[#929292] group-hover:text-[#0A0A0A] transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </h3>

                    {/* Honest Description */}
                    <p className="text-sm text-[#929292] font-sans leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Tagline & Tech Chips */}
                  <div className="pt-4 border-t border-[#242424] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-[#5A5A5A] mr-2">ROLE: {project.role}</span>
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded bg-[#1A1A1A] border border-[#292929] text-[11px] font-mono text-[#929292]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ambient glow accent line on card bottom */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C5F467]/0 to-transparent group-hover:via-[#C5F467]/40 transition-all duration-500" />
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Expanded Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

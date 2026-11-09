import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, AlertCircle, CheckCircle2, Terminal } from 'lucide-react';
import type { Project } from '../types';
import { ProjectCardVisual } from './ProjectCardVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#111111] border border-[#292929] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111111]/95 backdrop-blur-md border-b border-[#292929]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#C5F467] font-semibold tracking-wider uppercase">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#5A5A5A]">·</span>
              <span className="text-xs font-mono text-[#929292]">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#929292] hover:text-[#F5F5F5] hover:bg-[#1E1E1E] transition-colors border border-transparent hover:border-[#292929]"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Visual Canvas Area */}
          <div className="w-full">
            <ProjectCardVisual type={project.visualType} title={project.title} />
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Tagline */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F5F5F5]">
                  {project.title}
                </h3>
                <span className="px-2.5 py-1 rounded-md bg-[#171717] border border-[#292929] text-xs font-mono text-[#C5F467]">
                  {project.role}
                </span>
              </div>
              <p className="text-sm font-sans text-[#929292]">{project.tagline}</p>
            </div>

            {/* Editable Placeholder Notice if applicable */}
            {project.isPlaceholderDetail && (
              <div className="p-4 rounded-xl bg-[#171717] border border-[#292929] flex items-start gap-3">
                <AlertCircle size={18} className="text-[#C5F467] shrink-0 mt-0.5" />
                <div className="text-xs font-mono text-[#929292] leading-relaxed">
                  <span className="text-[#F5F5F5] font-semibold block mb-0.5">
                    Live Documentation Note
                  </span>
                  This entry is formatted for easy expansion. Real screenshots, models, or module breakdowns will be populated as documentation is confirmed.
                </div>
              </div>
            )}

            {/* Overview */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5A5A5A] uppercase tracking-wider">
                <Layers size={14} className="text-[#C5F467]" />
                <span>Project Overview</span>
              </div>
              <p className="text-sm sm:text-base text-[#F5F5F5] font-sans leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#5A5A5A] uppercase tracking-wider">
                  Scope &amp; Context
                </div>
                <p className="text-sm text-[#929292] font-sans leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* My Contributions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5A5A5A] uppercase tracking-wider">
                <CheckCircle2 size={14} className="text-[#C5F467]" />
                <span>My Contributions &amp; Responsibilities</span>
              </div>
              <ul className="space-y-2.5">
                {project.contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#929292]">
                    <span className="text-[#C5F467] font-mono text-xs mt-0.5">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-3 pt-4 border-t border-[#292929]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5A5A5A] uppercase tracking-wider">
                <Terminal size={14} className="text-[#C5F467]" />
                <span>Technologies &amp; Competencies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-[#171717] border border-[#292929] text-xs font-mono text-[#F5F5F5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="px-6 py-4 bg-[#0E0E0E] border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#5A5A5A]">
            <span>STATUS: {project.statusText}</span>
            <button
              onClick={onClose}
              className="text-[#929292] hover:text-[#C5F467] transition-colors"
            >
              Close Window [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

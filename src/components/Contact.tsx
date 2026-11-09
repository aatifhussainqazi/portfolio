import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [customSubject, setCustomSubject] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(customSubject.trim() || 'Collaboration / Inquiry');
    const body = encodeURIComponent(
      customMessage.trim() || "Hi Aatif,\n\nI came across your portfolio and wanted to get in touch regarding..."
    );
    return `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0A0A0A] border-t border-[#292929] overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C5F467]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#292929] mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#C5F467] tracking-widest uppercase">
              07 / CONTACT
            </span>
            <span className="w-8 h-[1px] bg-[#292929]" />
            <span className="font-mono text-xs text-[#5A5A5A] uppercase hidden sm:inline">
              Direct Inquiries
            </span>
          </div>

          <div className="font-mono text-xs text-[#5A5A5A]">
            COMMUNICATION
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F5F5F5] leading-[1.05] mb-6"
              >
                Have something <br />
                <span className="text-[#C5F467]">interesting</span> in mind?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-base sm:text-lg text-[#929292] font-sans leading-relaxed max-w-lg mb-8"
              >
                I'm always interested in learning, exploring new ideas, and connecting with people working on interesting projects across 3D, creative technology, and practical computing.
              </motion.p>
            </div>

            {/* Email Action Pill Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#111111] border border-[#292929] space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#5A5A5A]">
                <span>PRIMARY INBOX</span>
                <span className="text-[#C5F467]">DIRECT MAIL</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex-grow flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#171717] border border-[#292929] hover:border-[#C5F467]/50 text-[#F5F5F5] font-mono text-sm tracking-wide transition-all group"
                >
                  <span className="truncate">{personalData.email}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#929292] group-hover:text-[#C5F467] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2"
                  />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#171717] border border-[#292929] hover:bg-[#202020] text-xs font-mono text-[#F5F5F5] transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#C5F467]" />
                      <span className="text-[#C5F467]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-[#929292]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-[#5A5A5A] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467]" />
                <span>Response expected within reasonable turnaround</span>
              </div>
            </motion.div>

            {/* Configurable Social Channels */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="pt-6 border-t border-[#292929]"
            >
              <div className="text-xs font-mono text-[#5A5A5A] uppercase tracking-wider mb-3">
                Network &amp; Profiles
              </div>
              <div className="flex flex-wrap gap-2.5">
                {personalData.socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target={item.configured ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!item.configured && item.url === '#') {
                        e.preventDefault();
                        alert(`Aatif's ${item.platform} link will be published soon.`);
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#141414] border border-[#292929] hover:border-[#3E3E3E] text-xs font-mono text-[#929292] hover:text-[#F5F5F5] transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.platform}</span>
                    <ArrowUpRight size={12} className="text-[#5A5A5A]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Direct Email Composer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#292929]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5F467] uppercase tracking-wider">
                <MessageSquare size={14} />
                <span>Compose Direct Inquiry</span>
              </div>
              <span className="text-[10px] font-mono text-[#5A5A5A]">MAILTO INTEGRATED</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#929292] uppercase tracking-wider mb-2">
                  Topic / Subject
                </label>
                <input
                  type="text"
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  placeholder="e.g. 3D Project, Student Collaboration, Creative Idea"
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#292929] text-sm text-[#F5F5F5] placeholder-[#5A5A5A] focus:outline-none focus:border-[#C5F467] transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#929292] uppercase tracking-wider mb-2">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Share a brief overview of what you'd like to discuss or collaborate on..."
                  className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#292929] text-sm text-[#F5F5F5] placeholder-[#5A5A5A] focus:outline-none focus:border-[#C5F467] transition-colors font-sans resize-none"
                />
              </div>

              <div className="pt-2">
                <a
                  href={generateMailto()}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C5F467] text-[#0A0A0A] font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#b2e64b] hover:shadow-[0_0_20px_rgba(197,244,103,0.3)] active:scale-98"
                >
                  <Send size={14} />
                  <span>Send via Email Client</span>
                </a>
              </div>

              <p className="text-[11px] font-mono text-[#5A5A5A] text-center">
                Launches your default mail application directly to {personalData.email}.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

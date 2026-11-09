import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Creative', href: '#creative', id: 'creative' },
    { label: 'Technical', href: '#technical', id: 'technical' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 border-b border-[#292929]/80 shadow-2xl shadow-black/60'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Aatif Hussain Qazi Portfolio Home"
          >
            <span className="font-display font-extrabold text-xl tracking-tight text-[#F5F5F5] group-hover:text-[#C5F467] transition-colors">
              AQ<span className="text-[#C5F467]">.</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#929292] tracking-widest uppercase border-l border-[#292929] pl-3 py-0.5">
              Aatif Qazi
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors uppercase ${
                    isActive
                      ? 'text-[#C5F467] font-semibold'
                      : 'text-[#929292] hover:text-[#F5F5F5]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#C5F467]"
                      transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Status Indicator */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-[#292929] text-[11px] font-mono text-[#929292]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5F467] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5F467]" />
              </span>
              <span className="text-[#F5F5F5] tracking-wide font-medium">OPEN TO COLLABORATION</span>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#929292] hover:text-[#F5F5F5] border border-[#292929] rounded-md bg-[#171717] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[60px] z-40 bg-[#0A0A0A]/98 backdrop-blur-2xl border-t border-[#292929] flex flex-col justify-between p-8 lg:hidden"
          >
            <div className="flex flex-col gap-6 pt-4">
              <div className="text-[11px] font-mono tracking-widest text-[#5A5A5A] uppercase border-b border-[#292929] pb-3">
                Index Navigation
              </div>
              <div className="flex flex-col gap-3">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between text-2xl font-display font-bold tracking-tight text-[#F5F5F5] hover:text-[#C5F467] py-2 border-b border-[#1E1E1E] transition-colors"
                  >
                    <span>
                      <span className="text-xs font-mono text-[#929292] mr-3">0{idx + 1}</span>
                      {link.label}
                    </span>
                    <ArrowUpRight size={18} className="text-[#929292]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#292929] flex flex-col gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#929292]">
                <span className="w-2 h-2 rounded-full bg-[#C5F467]" />
                <span className="text-[#F5F5F5]">OPEN TO LEARNING &amp; COLLABORATION</span>
              </div>
              <div className="text-[#5A5A5A]">B.Sc. DYOD · IUST Awantipora, Kashmir</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

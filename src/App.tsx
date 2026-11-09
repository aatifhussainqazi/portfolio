import React, { useState, useEffect } from 'react';
import { LoadingIntro } from './components/LoadingIntro';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CreativeSkills } from './components/CreativeSkills';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'projects',
      'creative',
      'technical',
      'experience',
      'education',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased selection:bg-[#C5F467] selection:text-[#0A0A0A] relative">
      {/* Intro sequence */}
      {isLoading && <LoadingIntro onComplete={() => setIsLoading(false)} />}

      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Scroll indicator bar at very top */}
      <ScrollProgress />

      {/* Fixed Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <CreativeSkills />
        <TechnicalSkills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;

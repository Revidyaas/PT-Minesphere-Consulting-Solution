import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { OurStory } from './components/OurStory';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { WhyMinesphere } from './components/WhyMinesphere';
import { VisionMission } from './components/VisionMission';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollProgress } from './components/ScrollReveal';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Language, Theme } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ID');
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem('minesphere_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    } catch {
      // fallback
    }
    return 'light'; // Defaulting to light mode per user request
  });

  const [prefilledService, setPrefilledService] = useState<string>('');

  // Keyboard scrolling support: ArrowUp, ArrowDown, PageUp, PageDown, Home, End
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept if user is typing in a form input, textarea, select, or editable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable ||
          target.getAttribute('role') === 'textbox')
      ) {
        return;
      }

      const arrowStep = 150; // Comfortable scroll step for arrow navigation
      const pageStep = Math.max(window.innerHeight * 0.85, 400); // 85% viewport height for PageUp/PageDown

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: arrowStep, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: -arrowStep, behavior: 'smooth' });
      } else if (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault();
        window.scrollBy({ top: pageStep, behavior: 'smooth' });
      } else if (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        window.scrollBy({ top: -pageStep, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({
          top: document.documentElement.scrollHeight || document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('minesphere_theme', theme);
    } catch {
      // ignore
    }

    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'ID' : 'EN'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConsultService = (serviceName: string) => {
    setPrefilledService(serviceName);
    scrollToContact();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light'
        ? 'light-theme bg-[#F4FAF5] text-[#163832] selection:bg-[#235347] selection:text-white'
        : 'dark-theme bg-[#051F20] text-[#DAF1DE] selection:bg-[#8EB69B] selection:text-[#051F20]'
    } font-sans antialiased`}>
      {/* Top seamless reading scroll progress bar */}
      <ScrollProgress />

      {/* Sticky Desktop & Mobile Navbar */}
      <Navbar
        lang={lang}
        theme={theme}
        onToggleLang={toggleLanguage}
        onToggleTheme={toggleTheme}
      />

      {/* Persistent Dynamic Breadcrumb Navigation */}
      <Breadcrumbs
        lang={lang}
        theme={theme}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          theme={theme}
          onExploreServices={scrollToServices}
          onConsultTeam={scrollToContact}
        />

        {/* Who We Are & Lifecycle */}
        <WhoWeAre
          lang={lang}
          theme={theme}
          onConsultService={handleConsultService}
        />

        {/* Our Story / Heritage */}
        <OurStory lang={lang} theme={theme} />

        {/* Consulting Services */}
        <Services
          lang={lang}
          theme={theme}
          onConsultService={handleConsultService}
        />

        {/* Expertise: 5 Disciplines */}
        <Expertise lang={lang} theme={theme} />

        {/* Why Minesphere (M.I.N.E & G.R.E.E.N) */}
        <WhyMinesphere lang={lang} theme={theme} />

        {/* Vision & Mission */}
        <VisionMission lang={lang} theme={theme} />

        {/* Projects / Portfolio */}
        <Projects lang={lang} theme={theme} />

        {/* Team: Partners & Specialists */}
        <Team lang={lang} theme={theme} />

        {/* Contact & Consultation Form */}
        <ContactCTA
          lang={lang}
          theme={theme}
          prefilledService={prefilledService}
        />
      </main>

      {/* Floating Action Buttons (Fixed Bottom Right Dock) */}
      <FloatingActions
        lang={lang}
        theme={theme}
        onConsultClick={scrollToContact}
      />

      {/* Corporate Footer */}
      <Footer lang={lang} theme={theme} />
    </div>
  );
}


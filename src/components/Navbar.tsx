import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, Sun, Moon, ChevronDown, ArrowRight, Briefcase } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language, Theme } from '../types';
import { PROJECTS } from '../data/companyData';

interface NavbarProps {
  lang: Language;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLight = theme === 'light';

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setPortfolioDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setPortfolioDropdownOpen(false);
    }, 180);
  };

  const handleSelectProject = (projectId: string) => {
    setPortfolioDropdownOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById(`project-${projectId}`) || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'services', 'expertise', 'projects', 'why-us', 'team', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelEn: 'About', labelId: 'Tentang Kami', id: 'about' },
    { href: '#services', labelEn: 'Services', labelId: 'Layanan', id: 'services' },
    { href: '#expertise', labelEn: 'Expertise', labelId: 'Keahlian', id: 'expertise' },
    { href: '#projects', labelEn: 'Projects', labelId: 'Portofolio', id: 'projects' },
    { href: '#why-us', labelEn: 'Why Us', labelId: 'Keunggulan', id: 'why-us' },
    { href: '#team', labelEn: 'Team', labelId: 'Tim Ahli', id: 'team' },
    { href: '#contact', labelEn: 'Contact', labelId: 'Kontak', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isLight
          ? isScrolled
            ? 'bg-[#F4FAF5]/95 backdrop-blur-md border-b border-[#DAF1DE] shadow-sm py-3'
            : 'bg-[#F4FAF5]/95 backdrop-blur-md border-b border-[#DAF1DE]/80 shadow-xs py-3.5'
          : isScrolled
            ? 'bg-[#051F20]/95 backdrop-blur-md border-b border-[#163832] shadow-lg shadow-black/40 py-3'
            : 'bg-gradient-to-b from-[#051F20]/95 via-[#051F20]/85 to-transparent py-4 border-b border-transparent'
      }`}
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with PT Minesphere Consulting Solution */}
          <BrandLogo isScrolled={isScrolled} theme={theme} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              // Special dropdown handling for Portfolio ('projects')
              if (link.id === 'projects') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <a
                      href={link.href}
                      onClick={() => setPortfolioDropdownOpen(false)}
                      className={`px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors rounded-md inline-flex items-center gap-1 cursor-pointer ${
                        isActive || portfolioDropdownOpen
                          ? isLight
                            ? 'text-[#051F20] bg-[#DAF1DE] font-black'
                            : 'text-[#DAF1DE] bg-[#163832] font-black'
                          : isLight
                            ? 'text-[#163832] hover:text-[#051F20] hover:bg-[#DAF1DE]/60'
                            : 'text-[#DAF1DE]/80 hover:text-white hover:bg-[#163832]/60'
                      }`}
                      id="nav-link-projects"
                      aria-haspopup="true"
                      aria-expanded={portfolioDropdownOpen}
                    >
                      <span>{lang === 'EN' ? link.labelEn : link.labelId}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          portfolioDropdownOpen ? 'rotate-180 text-[#8EB69B]' : 'opacity-60'
                        }`}
                      />
                    </a>

                    {/* Dropdown Menu Panel */}
                    {portfolioDropdownOpen && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fadeIn`}
                        style={{ width: '380px' }}
                      >
                        <div
                          className={`rounded-2xl border shadow-2xl p-3.5 backdrop-blur-xl transition-all ${
                            isLight
                              ? 'bg-white/98 border-[#DAF1DE] shadow-[#0B2B26]/10 text-[#051F20]'
                              : 'bg-[#0B2B26]/98 border-[#163832] shadow-black/90 text-[#DAF1DE]'
                          }`}
                          role="menu"
                          aria-label="Portofolio Proyek"
                        >
                          {/* Header with All Projects link */}
                          <div className={`flex items-center justify-between px-2 pb-2 mb-2 border-b ${
                            isLight ? 'border-[#DAF1DE]' : 'border-[#163832]'
                          }`}>
                            <span className={`text-[10px] font-mono font-bold tracking-wider uppercase ${
                              isLight ? 'text-[#235347]' : 'text-[#8EB69B]'
                            }`}>
                              {lang === 'EN' ? 'FEATURED ENGAGEMENTS' : 'PROYEK & DOKUMEN TEKNIS'}
                            </span>
                            <a
                              href="#projects"
                              onClick={() => setPortfolioDropdownOpen(false)}
                              className={`inline-flex items-center gap-1 text-[11px] font-bold hover:underline ${
                                isLight ? 'text-[#235347]' : 'text-[#8EB69B]'
                              }`}
                            >
                              <span>{lang === 'EN' ? 'View All' : 'Lihat Semua'}</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>

                          {/* 4 Featured Projects */}
                          <div className="space-y-1">
                            {PROJECTS.map((proj) => (
                              <a
                                key={proj.id}
                                href={`#project-${proj.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSelectProject(proj.id);
                                }}
                                className={`group block p-2.5 rounded-xl transition-all border ${
                                  isLight
                                    ? 'hover:bg-[#DAF1DE]/60 hover:border-[#8EB69B]/60 border-transparent text-[#051F20]'
                                    : 'hover:bg-[#163832]/80 hover:border-[#8EB69B]/40 border-transparent text-[#DAF1DE]'
                                }`}
                                role="menuitem"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-1.5">
                                      <h4 className={`text-xs font-bold font-heading truncate transition-colors ${
                                        isLight ? 'group-hover:text-[#235347]' : 'group-hover:text-[#8EB69B]'
                                      }`}>
                                        {proj.companyName}
                                      </h4>
                                      {proj.areaSize && (
                                        <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-medium flex-shrink-0 ${
                                          isLight ? 'bg-[#DAF1DE] text-[#051F20]' : 'bg-[#163832] text-[#DAF1DE]'
                                        }`}>
                                          {proj.areaSize}
                                        </span>
                                      )}
                                    </div>
                                    <p className={`text-[11px] mt-0.5 line-clamp-1 ${
                                      isLight ? 'text-[#395A50]' : 'text-[#8EB69B]'
                                    }`}>
                                      {proj.commodity}
                                    </p>
                                    <div className="mt-1">
                                      <span className={`inline-block text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md ${
                                        isLight
                                          ? 'bg-[#DAF1DE] text-[#051F20] border border-[#8EB69B]/50'
                                          : 'bg-[#163832] text-[#DAF1DE] border border-[#235347]'
                                      }`}>
                                        {proj.tag}
                                      </span>
                                    </div>
                                  </div>
                                  <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1 ${
                                    isLight ? 'text-[#235347]' : 'text-[#8EB69B]'
                                  }`} />
                                </div>
                              </a>
                            ))}
                          </div>

                          {/* Footer Action link to Contact */}
                          <div className={`mt-2 pt-2 border-t px-2 text-center ${
                            isLight ? 'border-[#DAF1DE]' : 'border-[#163832]'
                          }`}>
                            <a
                              href="#contact"
                              onClick={() => setPortfolioDropdownOpen(false)}
                              className={`inline-flex items-center justify-center gap-1.5 text-[11px] font-medium transition-colors ${
                                isLight ? 'text-[#235347] hover:text-[#051F20]' : 'text-[#8EB69B] hover:text-[#DAF1DE]'
                              }`}
                            >
                              <Briefcase className={`w-3 h-3 ${isLight ? 'text-[#235347]' : 'text-[#8EB69B]'}`} />
                              <span>{lang === 'EN' ? 'Consult your project study' : 'Konsultasikan studi proyek Anda'} &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors rounded-md ${
                    isActive
                      ? isLight
                        ? 'text-[#051F20] bg-[#DAF1DE] font-black'
                        : 'text-[#DAF1DE] bg-[#163832] font-black'
                      : isLight
                        ? 'text-[#163832] hover:text-[#051F20] hover:bg-[#DAF1DE]/60'
                        : 'text-[#DAF1DE]/80 hover:text-white hover:bg-[#163832]/60'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {lang === 'EN' ? link.labelEn : link.labelId}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items (Language & Theme Mode Switcher + Reference Lime Pill Button) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Language Switch: Rounded-full pill */}
            <button
              type="button"
              onClick={onToggleLang}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                isLight
                  ? 'border-[#8EB69B]/50 text-[#051F20] hover:text-[#051F20] bg-[#DAF1DE] hover:bg-[#DAF1DE]/80 shadow-xs'
                  : 'border-[#163832] text-[#DAF1DE] hover:text-white hover:border-[#8EB69B]/50 bg-[#0B2B26]'
              }`}
              id="lang-toggle-btn"
              title={lang === 'EN' ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
            >
              <Globe className={`w-3.5 h-3.5 ${isLight ? 'text-[#235347]' : 'text-[#8EB69B]'}`} />
              <span>{lang === 'EN' ? 'EN' : 'ID'}</span>
              <span className="text-[10px] opacity-40">|</span>
              <span className="text-[10px] opacity-70">{lang === 'EN' ? 'ID' : 'EN'}</span>
            </button>

            {/* Light / Dark Mode Toggle Button: Rounded-full pill */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                isLight
                  ? 'border-[#8EB69B]/50 text-[#051F20] hover:text-[#235347] bg-[#DAF1DE] hover:bg-[#DAF1DE]/80 shadow-xs'
                  : 'border-[#163832] text-[#DAF1DE] hover:text-[#8EB69B] hover:border-[#8EB69B]/50 bg-[#0B2B26]'
              }`}
              id="theme-toggle-btn"
              title={
                isLight 
                  ? (lang === 'EN' ? 'Switch to Dark Mode' : 'Beralih ke Mode Gelap')
                  : (lang === 'EN' ? 'Switch to Light Mode' : 'Beralih ke Mode Terang')
              }
              aria-label="Toggle theme mode"
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#051F20]" />
                  <span>{lang === 'EN' ? 'Dark' : 'Gelap'}</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#8EB69B]" />
                  <span>{lang === 'EN' ? 'Light' : 'Terang'}</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Theme Switch */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border text-xs font-bold ${
                isLight
                  ? 'border-[#DAF1DE] bg-[#DAF1DE] text-[#051F20] shadow-xs'
                  : 'border-[#163832] bg-[#0B2B26] text-[#8EB69B]'
              }`}
              aria-label="Toggle theme mode"
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Quick Lang Switch */}
            <button
              type="button"
              onClick={onToggleLang}
              className={`p-2 rounded-lg border text-xs font-bold ${
                isLight
                  ? 'border-[#DAF1DE] bg-[#DAF1DE] text-[#051F20] shadow-xs'
                  : 'border-[#163832] bg-[#0B2B26] text-[#8EB69B]'
              }`}
              aria-label="Toggle language"
            >
              {lang}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isLight
                  ? 'text-[#051F20] border-[#DAF1DE] bg-[#DAF1DE]'
                  : 'text-[#DAF1DE] hover:text-white border-[#163832] bg-[#0B2B26]'
              }`}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 animate-fadeIn ${
          isLight ? 'bg-[#F4FAF5] border-[#DAF1DE]' : 'bg-[#0B2B26] border-[#163832]'
        }`}>
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.id === 'projects') {
                return (
                  <div key={link.id} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg ${
                          isLight
                            ? 'text-[#163832] hover:text-[#051F20] hover:bg-[#DAF1DE]/60'
                            : 'text-[#DAF1DE] hover:text-white hover:bg-[#163832]/60'
                        }`}
                      >
                        {lang === 'EN' ? link.labelEn : link.labelId}
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setMobilePortfolioOpen(!mobilePortfolioOpen);
                        }}
                        className={`p-2 rounded-lg ${
                          isLight
                            ? 'text-[#235347] hover:bg-[#DAF1DE]'
                            : 'text-[#8EB69B] hover:bg-[#163832]'
                        }`}
                        aria-label="Toggle portfolio sub-items"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobilePortfolioOpen ? 'rotate-180 text-[#8EB69B]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu for Mobile */}
                    {mobilePortfolioOpen && (
                      <div
                        className={`ml-3 pl-3 border-l space-y-1 my-1.5 ${
                          isLight ? 'border-[#DAF1DE]' : 'border-[#163832]'
                        }`}
                      >
                        <a
                          href="#projects"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-2.5 py-1 text-xs font-bold hover:underline ${
                            isLight ? 'text-[#235347]' : 'text-[#8EB69B]'
                          }`}
                        >
                          &rarr; {lang === 'EN' ? 'View All Projects' : 'Lihat Semua Portofolio'}
                        </a>
                        {PROJECTS.map((proj) => (
                          <a
                            key={proj.id}
                            href={`#project-${proj.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSelectProject(proj.id);
                            }}
                            className={`block px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                              isLight
                                ? 'text-[#163832] hover:text-[#051F20] hover:bg-[#DAF1DE]/60'
                                : 'text-[#DAF1DE] hover:text-white hover:bg-[#163832]/60'
                            }`}
                          >
                            <div className="font-semibold">{proj.companyName}</div>
                            <div className={`text-[10px] ${isLight ? 'text-[#395A50]' : 'text-[#8EB69B]'}`}>{proj.commodity}</div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    isLight
                      ? 'text-[#163832] hover:text-[#051F20] hover:bg-[#DAF1DE]/60'
                      : 'text-[#DAF1DE] hover:text-white hover:bg-[#163832]/60'
                  }`}
                >
                  {lang === 'EN' ? link.labelEn : link.labelId}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};


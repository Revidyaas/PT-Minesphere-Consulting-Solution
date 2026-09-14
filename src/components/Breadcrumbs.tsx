import React, { useState, useEffect } from 'react';
import { Home, ChevronRight, Compass } from 'lucide-react';
import { Language, Theme } from '../types';

interface BreadcrumbsProps {
  lang: Language;
  theme?: Theme;
  activeSection?: string;
  subDetail?: string;
  onNavigate?: (sectionId: string) => void;
}

interface SectionMeta {
  id: string;
  labelEn: string;
  labelId: string;
  parentEn?: string;
  parentId?: string;
  parentIdRef?: string;
}

const SECTION_MAP: Record<string, SectionMeta> = {
  home: { id: 'home', labelEn: 'Home', labelId: 'Beranda' },
  about: { id: 'about', labelEn: 'Who We Are', labelId: 'Tentang Kami', parentEn: 'Overview', parentId: 'Profil' },
  lifecycle: { id: 'lifecycle', labelEn: 'Mining Lifecycle', labelId: 'Siklus Pertambangan', parentEn: 'Who We Are', parentId: 'Tentang Kami', parentIdRef: 'about' },
  story: { id: 'story', labelEn: 'Our Story', labelId: 'Perjalanan Kami', parentEn: 'Overview', parentId: 'Profil' },
  expertise: { id: 'expertise', labelEn: 'Core Expertise', labelId: 'Bidang Keahlian', parentEn: 'Solutions', parentId: 'Solusi' },
  services: { id: 'services', labelEn: 'Consulting Services', labelId: 'Layanan Konsultasi', parentEn: 'Solutions', parentId: 'Solusi' },
  'why-us': { id: 'why-us', labelEn: 'Why Minesphere', labelId: 'Keunggulan Kami', parentEn: 'Values', parentId: 'Nilai Unggul' },
  vision: { id: 'vision', labelEn: 'Vision & Mission', labelId: 'Visi & Misi', parentEn: 'Values', parentId: 'Nilai Unggul' },
  projects: { id: 'projects', labelEn: 'Projects Portfolio', labelId: 'Portofolio Proyek', parentEn: 'Track Record', parentId: 'Rekam Jejak' },
  team: { id: 'team', labelEn: 'Expert Team', labelId: 'Tim Ahli & Partner', parentEn: 'Organization', parentId: 'Organisasi' },
  contact: { id: 'contact', labelEn: 'Contact & Advisory', labelId: 'Kontak & Konsultasi', parentEn: 'Engagement', parentId: 'Konsultasi' },
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  lang,
  theme,
  activeSection = 'home',
  subDetail,
  onNavigate
}) => {
  const isLight = theme === 'light';
  const [currentSection, setCurrentSection] = useState<string>(activeSection);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show breadcrumbs bar after user scrolls past the hero banner (>180px)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 160);

      const sections = [
        'about',
        'services',
        'expertise',
        'why-us',
        'projects',
        'team',
        'contact'
      ];
      const scrollPos = scrollY + 260;

      let matched = 'home';
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            matched = s;
            break;
          }
        }
      }
      setCurrentSection(matched);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const meta = SECTION_MAP[currentSection] || SECTION_MAP.home;

  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onNavigate) onNavigate(id);
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Breadcrumb Navigation"
      className={`fixed top-[60px] sm:top-[64px] left-0 right-0 z-30 transition-all duration-300 border-b backdrop-blur-md ${
        isLight
          ? 'bg-[#F4FAF5]/95 border-[#DAF1DE] text-[#163832] shadow-xs'
          : 'bg-[#051F20]/95 border-[#163832] text-[#DAF1DE] shadow-sm'
      }`}
      id="global-breadcrumbs-bar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <ol className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium overflow-x-auto no-scrollbar whitespace-nowrap">
          {/* Root: Home */}
          <li className="flex items-center">
            <button
              onClick={() => scrollTo('home')}
              className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-1.5 rounded ${
                currentSection === 'home'
                  ? isLight ? 'text-[#051F20] font-bold' : 'text-[#8EB69B] font-bold'
                  : isLight ? 'text-[#235347] hover:text-[#051F20]' : 'text-[#DAF1DE]/70 hover:text-white'
              }`}
              title={lang === 'EN' ? 'Back to Home' : 'Kembali ke Beranda'}
              aria-label="Home"
            >
              <Home className={`w-3.5 h-3.5 ${isLight ? 'text-[#235347]' : 'text-[#8EB69B]'}`} />
              <span>{lang === 'EN' ? 'Home' : 'Beranda'}</span>
            </button>
          </li>

          {/* Section Breadcrumb Item if not on home */}
          {currentSection !== 'home' && (
            <>
              <li aria-hidden="true" className={isLight ? 'text-[#8EB69B] flex items-center' : 'text-[#235347] flex items-center'}>
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </li>

              {/* Optional Category Parent */}
              {meta.parentId && (
                <>
                  <li className="flex items-center">
                    <button
                      onClick={() => meta.parentIdRef && scrollTo(meta.parentIdRef)}
                      className={`transition-colors cursor-pointer py-1 px-1 rounded ${
                        isLight ? 'text-[#235347] hover:text-[#051F20]' : 'text-[#DAF1DE]/70 hover:text-white'
                      } ${meta.parentIdRef ? 'hover:underline' : 'cursor-default pointer-events-none'}`}
                    >
                      {lang === 'EN' ? meta.parentEn : meta.parentId}
                    </button>
                  </li>
                  <li aria-hidden="true" className={isLight ? 'text-[#8EB69B] flex items-center' : 'text-[#235347] flex items-center'}>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </li>
                </>
              )}

              {/* Current Active Section */}
              <li className="flex items-center" aria-current={!subDetail ? 'page' : undefined}>
                <button
                  onClick={() => scrollTo(currentSection)}
                  className={`inline-flex items-center gap-1 font-semibold py-1 px-1.5 rounded transition-colors cursor-pointer ${
                    !subDetail
                      ? isLight
                        ? 'text-[#051F20] font-bold bg-[#DAF1DE]'
                        : 'text-[#8EB69B] font-bold bg-[#163832]/70'
                      : isLight
                      ? 'text-[#163832] hover:text-[#051F20]'
                      : 'text-[#DAF1DE] hover:text-white'
                  }`}
                >
                  <span>{lang === 'EN' ? meta.labelEn : meta.labelId}</span>
                </button>
              </li>
            </>
          )}

          {/* Sub Detail / Deep Active Node (e.g. Carousel Stage) */}
          {subDetail && (
            <>
              <li aria-hidden="true" className={isLight ? 'text-[#8EB69B] flex items-center' : 'text-[#235347] flex items-center'}>
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </li>
              <li className="flex items-center truncate max-w-[200px] sm:max-w-none" aria-current="page">
                <span className={`font-mono text-[11px] px-2 py-0.5 rounded font-bold truncate ${
                  isLight
                    ? 'bg-[#DAF1DE] text-[#051F20] border border-[#8EB69B]/40'
                    : 'bg-[#0B2B26] text-[#DAF1DE] border border-[#163832]'
                }`}>
                  {subDetail}
                </span>
              </li>
            </>
          )}

          {/* Quick jump hint on far right */}
          <li className="ml-auto hidden md:flex items-center gap-1 text-[11px] font-mono opacity-80 pl-4">
            <Compass className={`w-3 h-3 ${isLight ? 'text-[#235347]' : 'text-[#8EB69B]'}`} />
            <span className={isLight ? 'text-[#235347]' : 'text-[#DAF1DE]/70'}>Minesphere Navigator</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

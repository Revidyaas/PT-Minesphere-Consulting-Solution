import React from 'react';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Layers,
  FileCheck,
} from 'lucide-react';
import { Language, Theme } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  lang: Language;
  theme: Theme;
  onExploreServices: () => void;
  onConsultTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  theme,
  onExploreServices,
  onConsultTeam,
}) => {
  const isLight = theme === 'light';

  return (
    <section
      className={`relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300 ${
        isLight ? 'bg-white' : 'bg-[#0B1118]'
      }`}
      id="home"
    >
      {/* =========================================================
          BACKGROUND
          ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Base background */}
        <div
          className={`absolute inset-0 ${
            isLight ? 'bg-white' : 'bg-[#0B1118]'
          }`}
        />

        {/* ---------------------------------------------------------
            MINING PHOTOGRAPHY
            Same composition in both themes.
            The image fades into the background on the left.
            --------------------------------------------------------- */}
        <img
          src={`${import.meta.env.BASE_URL}open-pit.jpg`}
          alt="Open-pit mining operation"
          className={`absolute right-0 top-0 h-full w-[50%] object-cover object-center ${
            isLight
              ? 'opacity-90 brightness-105 contrast-95'
              : 'opacity-90'
          }`}
          style={{
            maskImage: isLight
              ? 'linear-gradient(to right, transparent 0%, black 36%, black 100%)'
              : 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',

            WebkitMaskImage: isLight
              ? 'linear-gradient(to right, transparent 0%, black 36%, black 100%)'
              : 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
          }}
        />

        {/* ---------------------------------------------------------
            LEFT-SIDE SEAMLESS BLEND
            Light mode = white fade
            Dark mode = navy fade
            --------------------------------------------------------- */}
        <div
          className={`absolute inset-0 ${
            isLight
              ? 'bg-gradient-to-r from-white via-white/75 to-transparent'
              : 'bg-gradient-to-r from-[#0B1118] via-[#0B1118]/35 to-transparent'
          }`}
        />

        {/* ---------------------------------------------------------
            TOP / BOTTOM ATMOSPHERIC BLEND
            --------------------------------------------------------- */}
        <div
          className={`absolute inset-0 ${
            isLight
              ? 'bg-gradient-to-b from-white/10 via-transparent to-white/25'
              : 'bg-gradient-to-b from-[#0B1118]/15 via-transparent to-[#0B1118]/45'
          }`}
        />
      </div>

      {/* =========================================================
          TECHNICAL GRID / TOPOGRAPHIC GRAPHICS
          ========================================================= */}
      <div
        className={`absolute inset-0 z-[2] pointer-events-none ${
          isLight ? 'opacity-30' : 'opacity-20'
        } bg-tech-grid`}
      >
        <svg
          className={`absolute right-0 top-1/4 w-[600px] h-[600px] ${
            isLight
              ? 'text-emerald-700/20'
              : 'text-emerald-500/20'
          }`}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Topographic Elevation Contours */}
          <path
            d="M 50,250 C 120,180 200,320 300,220 C 400,120 480,260 550,200"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />

          <path
            d="M 30,280 C 100,210 220,350 320,250 C 420,150 490,290 560,230"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M 10,310 C 80,240 240,380 340,280 C 440,180 500,320 570,260"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />

          <path
            d="M 0,350 C 70,270 260,410 360,310 C 460,210 520,350 590,290"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Mining Grid Marks */}
          <circle
            cx="200"
            cy="220"
            r="3"
            fill="#10B981"
          />

          <circle
            cx="340"
            cy="280"
            r="3"
            fill="#10B981"
          />

          <line
            x1="190"
            y1="220"
            x2="210"
            y2="220"
            stroke="#10B981"
            strokeWidth="1"
          />

          <line
            x1="200"
            y1="210"
            x2="200"
            y2="230"
            stroke="#10B981"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">

        <div className="max-w-3xl">

         

          {/* =====================================================
              MAIN TITLE
              ===================================================== */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-heading mb-6 ${
              isLight
                ? 'text-slate-950'
                : 'text-white'
            }`}
          >
            ENGINEERING <br />

            <span
              id="hero-smarter-mining-text"
              className="text-[#08561c]"
              style={{ color: '#08561c' }}
            >
              SMARTER MINING
            </span>

            <br />

            FOR A SUSTAINABLE FUTURE.
          </h1>

          {/* =====================================================
              SUPPORTING COPY
              ===================================================== */}
          <p
            className={`text-lg sm:text-xl max-w-2xl leading-relaxed font-normal mb-8 ${
              isLight
                ? 'text-slate-600'
                : 'text-slate-300'
            }`}
          >
            {lang === 'EN'
              ? COMPANY_INFO.summaryEn
              : COMPANY_INFO.summaryId}
          </p>

          {/* =====================================================
              ACTION BUTTONS
              ===================================================== */}
          <div className="flex flex-wrap items-center gap-4 mb-12">

            {/* Primary CTA */}
            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-black rounded-full shadow-lg transition-all hover:translate-y-[-1px] active:translate-y-[1px] text-white bg-[#1F7A63] hover:bg-[#186451] shadow-[#1F7A63]/20 cursor-pointer"
              id="hero-explore-services-btn"
            >
              <span>
                {lang === 'EN'
                  ? 'EXPLORE OUR SERVICES'
                  : 'LIHAT LAYANAN KAMI'}
              </span>

              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={onConsultTeam}
              className={`inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50 hover:border-[#1F7A63] shadow-sm'
                  : 'bg-slate-900/80 text-white border-slate-700/80 hover:bg-slate-800 hover:border-[#1F7A63]'
              }`}
              id="hero-consult-team-btn"
            >
              <span>
                {lang === 'EN'
                  ? 'CONSULT OUR TEAM'
                  : 'KONSULTASI DENGAN TIM'}
              </span>
            </button>
          </div>

          {/* =====================================================
              TRUST MARKERS
              ===================================================== */}
          <div
            className={`pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 ${
              isLight
                ? 'border-slate-200'
                : 'border-slate-800/80'
            }`}
          >

            {/* Mining Lifecycle */}
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-xs ${
                  isLight
                    ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                    : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                }`}
              >
                <Compass className="w-4 h-4" />
              </div>

              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLight
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}
                >
                  {lang === 'EN'
                    ? 'Mining Lifecycle'
                    : 'Siklus Tambang'}
                </div>

                <div
                  className={`text-[11px] ${
                    isLight
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  {lang === 'EN'
                    ? 'Exploration to Closure'
                    : 'Eksplorasi hingga Pasca-Tambang'}
                </div>
              </div>
            </div>

            {/* Multi-Disciplinary */}
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-xs ${
                  isLight
                    ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                    : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                }`}
              >
                <Layers className="w-4 h-4" />
              </div>

              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLight
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}
                >
                  {lang === 'EN'
                    ? 'Multi-Disciplinary'
                    : 'Multi-Disiplin'}
                </div>

                <div
                  className={`text-[11px] ${
                    isLight
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  {lang === 'EN'
                    ? 'Mining, Geology, Water, ESG'
                    : 'Tambang, Geologi, Air, ESG'}
                </div>
              </div>
            </div>

            {/* RKAB & Perizinan */}
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-xs ${
                  isLight
                    ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                    : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                }`}
              >
                <FileCheck className="w-4 h-4" />
              </div>

              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLight
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}
                >
                  RKAB & Perizinan
                </div>

                <div
                  className={`text-[11px] ${
                    isLight
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  {lang === 'EN'
                    ? '3-Year Matrix & Compliance'
                    : 'Laporan & Matriks 3 Tahunan'}
                </div>
              </div>
            </div>

            {/* AMDAL & Pertek */}
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-xs ${
                  isLight
                    ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                    : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
              </div>

              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLight
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}
                >
                  AMDAL & Pertek
                </div>

                <div
                  className={`text-[11px] ${
                    isLight
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  {lang === 'EN'
                    ? 'Amdalnet & Certified KTPA'
                    : 'Tim Bersertifikat KTPA'}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

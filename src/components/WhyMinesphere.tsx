import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { CORE_VALUES_MINE, CORE_VALUES_GREEN } from '../data/companyData';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

interface WhyMinesphereProps {
  lang: Language;
  theme?: Theme;
}

export const WhyMinesphere: React.FC<WhyMinesphereProps> = ({ lang, theme }) => {
  const isLight = theme === 'light';
  const [activePhilosophy, setActivePhilosophy] = useState<'MINE' | 'GREEN'>('MINE');

  return (
    <section className={`py-24 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#0E1520] border-slate-800/80'
    }`} id="why-us">
      {/* Background Subtle Contours */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading mb-4 ${
            isLight ? 'text-[#0F172A]' : 'text-white'
          }`}>
            {lang === 'EN' ? 'INNOVATION & SUSTAINABILITY IN MINING' : 'INOVASI & KEBERLANJUTAN DALAM PERTAMBANGAN'}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#475569]' : 'text-slate-300'
          }`}>
            {lang === 'EN'
              ? 'Amid an evolving global resource landscape, Minesphere serves as a strategic partner bridging cutting-edge technology, operational cost efficiency, and unwavering environmental compliance.'
              : 'Di tengah industri pertambangan yang terus berkembang, Minesphere hadir sebagai mitra strategis yang menggabungkan teknologi, efisiensi, dan keberlanjutan. Kami memastikan eksplorasi, operasional, dan pasca-tambang berjalan lebih cerdas, efektif, dan sesuai regulasi.'}
          </p>
        </ScrollReveal>

        {/* Corporate Philosophy Tab Selector */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl border mb-10 transition-colors ${
            isLight
              ? 'bg-white border-[#E2E8F0] shadow-sm'
              : 'bg-slate-900/80 border-slate-800'
          }`}>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setActivePhilosophy('MINE')}
                className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activePhilosophy === 'MINE'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : isLight
                    ? 'bg-[#F1F5F9] text-[#334155] hover:bg-slate-200/80'
                    : 'text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800'
                }`}
                id="tab-mine-philosophy"
              >
                <span>M.I.N.E. PRINCIPLE</span>
              </button>

              <button
                onClick={() => setActivePhilosophy('GREEN')}
                className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activePhilosophy === 'GREEN'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : isLight
                    ? 'bg-[#F1F5F9] text-[#334155] hover:bg-slate-200/80'
                    : 'text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800'
                }`}
                id="tab-green-philosophy"
              >
                <span>G.R.E.E.N. COMMITMENT</span>
              </button>
            </div>

            <div className={`text-xs text-right hidden lg:block pr-4 ${
              isLight ? 'text-[#64748B]' : 'text-slate-400'
            }`}>
              {activePhilosophy === 'MINE'
                ? (lang === 'EN' ? 'Core Foundation for Mining Excellence' : 'Fondasi Minesphere untuk Masa Depan Pertambangan')
                : (lang === 'EN' ? 'Symbolizing Dedication to Environmental Harmony' : 'Melambangkan Kepedulian terhadap Lingkungan')}
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Principle Cards View with Staggered Scroll Animations */}
        {activePhilosophy === 'MINE' ? (
          <ScrollStagger key="mine" staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES_MINE.map((val) => (
              <ScrollStaggerItem key={val.letter} className="h-full">
                <div
                  className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full group hover:translate-y-[-2px] ${
                    isLight
                      ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md'
                      : 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800/80 hover:border-emerald-500/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black font-heading shadow-xs group-hover:scale-105 transition-transform ${
                        isLight
                          ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                          : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        {val.letter}
                      </span>
                      <span className={`text-[10px] font-mono tracking-widest uppercase ${
                        isLight ? 'text-[#64748B]' : 'text-slate-500'
                      }`}>
                        PILLAR
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold font-heading tracking-tight mb-3 ${
                      isLight ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {lang === 'EN' ? val.titleEn : val.titleId}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isLight ? 'text-[#475569]' : 'text-slate-300'
                    }`}>
                      {lang === 'EN' ? val.descEn : val.descId}
                    </p>
                  </div>

                  <div className={`pt-6 mt-6 border-t text-[11px] font-semibold flex items-center gap-1.5 ${
                    isLight
                      ? 'border-[#E2E8F0] text-[#059669]'
                      : 'border-slate-800/80 text-emerald-400/90'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isLight ? 'bg-[#059669]' : 'bg-emerald-400'
                    }`} />
                    <span>
                      {val.letter === 'M' && (lang === 'EN' ? 'Advanced Mining Tools' : 'Teknologi Modern')}
                      {val.letter === 'I' && (lang === 'EN' ? 'Ethical Compliance' : 'Etika & Kepatuhan')}
                      {val.letter === 'N' && (lang === 'EN' ? 'People & Community' : 'Pengembangan SDM')}
                      {val.letter === 'E' && (lang === 'EN' ? 'Optimal Strategy' : 'Strategi Optimal')}
                    </span>
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        ) : (
          <ScrollStagger key="green" staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CORE_VALUES_GREEN.map((val) => (
              <ScrollStaggerItem key={val.letter + val.titleEn} className="h-full">
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full group hover:translate-y-[-2px] ${
                    isLight
                      ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md'
                      : 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800/80 hover:border-emerald-500/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-black font-heading shadow-xs group-hover:scale-105 transition-transform ${
                        isLight
                          ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                          : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        {val.letter}
                      </span>
                      <span className={`text-[10px] font-mono tracking-widest uppercase ${
                        isLight ? 'text-[#64748B]' : 'text-slate-500'
                      }`}>
                        ESG
                      </span>
                    </div>

                    <h3 className={`text-base font-bold font-heading tracking-tight mb-2 ${
                      isLight ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {lang === 'EN' ? val.titleEn : val.titleId}
                    </h3>

                    <p className={`text-xs leading-relaxed ${
                      isLight ? 'text-[#475569]' : 'text-slate-300'
                    }`}>
                      {lang === 'EN' ? val.descEn : val.descId}
                    </p>
                  </div>

                  <div className={`pt-4 mt-4 border-t text-[11px] font-medium ${
                    isLight
                      ? 'border-[#E2E8F0] text-[#059669]'
                      : 'border-slate-800/80 text-emerald-400'
                  }`}>
                    {val.titleEn === 'Growth' && (lang === 'EN' ? 'Sustainable Industry' : 'Industri Berkelanjutan')}
                    {val.titleEn === 'Responsibility' && (lang === 'EN' ? 'Environmental Impact' : 'Dampak Lingkungan')}
                    {val.titleEn === 'Efficiency' && (lang === 'EN' ? 'Resource Optimization' : 'Optimalisasi Sumber Daya')}
                    {val.titleEn === 'Ecology' && (lang === 'EN' ? 'Ecosystem Balance' : 'Keseimbangan Ekosistem')}
                    {val.titleEn === 'Networking' && (lang === 'EN' ? 'Multi-Stakeholder' : 'Sinergi Pemangku Kepentingan')}
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        )}

        {/* Corporate Manifesto Statement */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className={`mt-14 p-8 rounded-2xl border text-center max-w-4xl mx-auto transition-colors ${
            isLight
              ? 'bg-[#F8FAFC] border-[#E2E8F0]'
              : 'bg-slate-950/70 border-slate-800'
          }`}>
            <p className={`text-sm sm:text-base font-medium leading-relaxed ${
              isLight ? 'text-[#334155]' : 'text-slate-300'
            }`}>
              {lang === 'EN'
                ? 'Modern technology. Integrity and transparency. Human development. Technical excellence. Responsible growth. Environmental responsibility. Efficient resource use. Ecological balance. Collaboration.'
                : 'Teknologi modern. Integritas dan transparansi. Pengembangan insan tambang. Keunggulan teknis. Pertumbuhan bertanggung jawab. Kepedulian lingkungan. Efisiensi sumber daya. Keseimbangan ekologis. Kolaborasi.'}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

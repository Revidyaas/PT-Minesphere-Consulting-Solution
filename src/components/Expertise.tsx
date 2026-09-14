import React, { useState } from 'react';
import { Pickaxe, Mountain, Droplets, Leaf, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Theme } from '../types';
import { EXPERTISE_AREAS } from '../data/companyData';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

interface ExpertiseProps {
  lang: Language;
  theme?: Theme;
  onSelectCategory?: (catId: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'mining-engineering': <Pickaxe className="w-5 h-5" />,
  'geology-geotechnical': <Mountain className="w-5 h-5" />,
  'hydrology-water': <Droplets className="w-5 h-5" />,
  'environment-esg': <Leaf className="w-5 h-5" />,
  'economics-regulatory': <Scale className="w-5 h-5" />,
};

export const Expertise: React.FC<ExpertiseProps> = ({ lang, theme }) => {
  const [activeTab, setActiveTab] = useState<string>(EXPERTISE_AREAS[0].id);
  const isLight = theme === 'light';

  const selectedArea = EXPERTISE_AREAS.find((area) => area.id === activeTab) || EXPERTISE_AREAS[0];

  return (
    <section className={`py-24 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#0E1520] border-slate-800/80'
    }`} id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading mb-4 ${
            isLight ? 'text-[#0F172A]' : 'text-white'
          }`}>
            {lang === 'EN' ? 'OUR EXPERTISE' : 'KEAHLIAN TEKNIS KAMI'}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#334155]' : 'text-slate-300'
          }`}>
            {lang === 'EN'
              ? 'Multi-disciplinary engineering solutions organized across five specialized technical disciplines supporting Indonesian mining operations.'
              : 'Solusi rekayasa multi-disiplin yang terbagi ke dalam lima bidang teknis spesifik untuk mendukung operasional dan kepatuhan tambang Indonesia.'}
          </p>
        </ScrollReveal>

        {/* Category Navigation Pills */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {EXPERTISE_AREAS.map((area) => {
              const isActive = area.id === activeTab;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap border cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-[#1F7A63]/10 border-[#1F7A63] text-[#1F7A63] shadow-sm font-extrabold scale-[1.02]'
                        : 'bg-[#1F7A63]/25 border-[#1F7A63] text-[#5EEAD4] shadow-md shadow-emerald-500/10 scale-[1.02]'
                      : isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                  id={`expertise-tab-${area.id}`}
                >
                  <span className={isActive ? (isLight ? 'text-[#1F7A63]' : 'text-[#5EEAD4]') : (isLight ? 'text-slate-500' : 'text-slate-500')}>
                    {CATEGORY_ICONS[area.id]}
                  </span>
                  <span>{lang === 'EN' ? area.title.EN : area.title.ID}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Detail Showcase Card with Smooth Tab Animation & Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`p-8 sm:p-10 rounded-2xl border transition-colors duration-300 shadow-xl ${
                isLight
                  ? 'bg-slate-50/80 border-slate-200 shadow-slate-200/50'
                  : 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-slate-800'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description */}
                <div className="lg:col-span-5">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold shadow-xs ${
                    isLight
                      ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                      : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                  }`}>
                    {CATEGORY_ICONS[selectedArea.id]}
                  </div>
                  <h3 className={`text-2xl font-black font-heading tracking-tight mb-3 ${
                    isLight ? 'text-[#0F172A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? selectedArea.title.EN : selectedArea.title.ID}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isLight ? 'text-[#334155]' : 'text-slate-300'
                  }`}>
                    {lang === 'EN' ? selectedArea.description.EN : selectedArea.description.ID}
                  </p>
                  <div className={`p-4 rounded-xl border text-xs ${
                    isLight
                      ? 'bg-white border-slate-200 text-[#334155] shadow-sm'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-400'
                  }`}>
                    <span className={`font-semibold block mb-1 ${
                      isLight ? 'text-[#1F7A63]' : 'text-[#5EEAD4]'
                    }`}>
                      {lang === 'EN' ? 'Minesphere Consulting Standard' : 'Standar Konsultasi Minesphere'}
                    </span>
                    {lang === 'EN'
                      ? 'All technical models and engineering calculations undergo internal peer review and verification before regulatory submission.'
                      : 'Seluruh model teknis dan perhitungan rekayasa melalui penelaahan internal rekan sejawat sebelum diajukan ke instansi pemerintah.'}
                  </div>
                </div>

                {/* Right Capabilities Grid */}
                <div className="lg:col-span-7">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    <span>{lang === 'EN' ? 'Key Capabilities & Scope' : 'Cakupan & Kapabilitas Teknis'}</span>
                    <span className={`w-8 h-[1px] ${isLight ? 'bg-slate-300' : 'bg-slate-700'}`} />
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedArea.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border transition-all hover:translate-x-1 ${
                          isLight
                            ? 'bg-white border-slate-200 shadow-sm hover:border-[#1F7A63]/60'
                            : 'bg-[#0B1118]/80 border-slate-800/90 hover:border-[#1F7A63]/40'
                        }`}
                      >
                        <span className={`text-xs font-medium ${
                          isLight ? 'text-[#334155]' : 'text-slate-200'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
};

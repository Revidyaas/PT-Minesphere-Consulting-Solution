import React, { useState } from 'react';
import { Pickaxe, Leaf, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Language, Theme } from '../types';
import { SERVICES_DATA } from '../data/companyData';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

interface ServicesProps {
  lang: Language;
  theme?: Theme;
  onConsultService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, theme, onConsultService }) => {
  const isLight = theme === 'light';
  const [activeMainTab, setActiveMainTab] = useState<'mining-consulting' | 'environmental-consulting'>('mining-consulting');
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

  const currentService = SERVICES_DATA.find((s) => s.id === activeMainTab) || SERVICES_DATA[0];

  const toggleExpand = (num: string) => {
    setExpandedSubcategory(expandedSubcategory === num ? null : num);
  };

  return (
    <section className={`py-24 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-[#F4F5EE] border-neutral-200/60' : 'bg-[#051F20] border-[#163832]'
    }`} id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading mb-4 ${
              isLight ? 'text-[#061D1A]' : 'text-white'
            }`}>
              {lang === 'EN' ? 'ENGINEERING & ENVIRONMENTAL SOLUTIONS' : 'LAYANAN PERTAMBANGAN & LINGKUNGAN'}
            </h2>
            <p className={`text-base sm:text-lg ${
              isLight ? 'text-[#163832]/85' : 'text-[#DAF1DE]/80'
            }`}>
              {lang === 'EN'
                ? 'Structured technical reporting, rigorous field studies, regulatory approvals, and corporate ESG compliance.'
                : 'Penyusunan dokumen teknis, kajian lapangan mendalam, perizinan kementerian, serta pemenuhan standar lingkungan & ESG.'}
            </p>
          </div>

          {/* Tab Switcher (Rounded-Full Pill Toggle matching reference) */}
          <div className={`flex items-center p-1.5 rounded-full border self-start md:self-auto ${
            isLight ? 'bg-white border-neutral-200/80 shadow-xs' : 'bg-[#0B2B26] border-[#163832]'
          }`}>
            <button
              onClick={() => {
                setActiveMainTab('mining-consulting');
                setExpandedSubcategory(null);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeMainTab === 'mining-consulting'
                  ? 'bg-[#1F7A63] text-white shadow-sm font-black'
                  : isLight
                    ? 'text-[#061D1A]/70 hover:text-[#061D1A]'
                    : 'text-[#DAF1DE]/70 hover:text-white'
              }`}
              id="tab-mining-consulting"
            >
              <Pickaxe className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? 'Mining Consulting' : 'Konsultan Pertambangan'}</span>
            </button>

            <button
              onClick={() => {
                setActiveMainTab('environmental-consulting');
                setExpandedSubcategory(null);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeMainTab === 'environmental-consulting'
                  ? 'bg-[#1F7A63] text-white shadow-sm font-black'
                  : isLight
                    ? 'text-[#061D1A]/70 hover:text-[#061D1A]'
                    : 'text-[#DAF1DE]/70 hover:text-white'
              }`}
              id="tab-environmental-consulting"
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? 'Environmental Consulting' : 'Konsultan Lingkungan'}</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Current Pillar Intro Banner */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className={`p-6 rounded-2xl border mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            isLight ? 'bg-white border-neutral-200/80 shadow-xs' : 'bg-[#0B2B26] border-[#163832]'
          }`}>
            <div>
              <h3 className={`text-lg font-bold font-heading ${
                isLight ? 'text-[#061D1A]' : 'text-white'
              }`}>
                {lang === 'EN' ? currentService.title.EN : currentService.title.ID}
              </h3>
              <p className={`text-xs mt-1 ${
                isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
              }`}>
                {lang === 'EN' ? currentService.subtitle.EN : currentService.subtitle.ID}
              </p>
            </div>
            <div className={`text-xs font-bold px-3.5 py-1 rounded-full shadow-xs ${
              isLight 
                ? 'bg-[#1F7A63]/15 text-[#1F7A63]' 
                : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
            }`}>
              {currentService.subcategories.length} {lang === 'EN' ? 'Service Modules Available' : 'Modul Layanan Tersedia'}
            </div>
          </div>
        </ScrollReveal>

        {/* Modular Grid Layout for Services with Staggered Scroll Animations */}
        <ScrollStagger key={activeMainTab} staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentService.subcategories.map((subcat) => {
            const isExpanded = expandedSubcategory === subcat.num;
            return (
              <ScrollStaggerItem key={subcat.num} className="h-full">
                <div
                  className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full group ${
                    isLight
                      ? isExpanded
                        ? 'bg-white border-[#1F7A63] shadow-md ring-2 ring-[#1F7A63]/25'
                        : 'bg-white border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-md'
                      : isExpanded
                        ? 'bg-[#0B2B26] border-[#1F7A63] shadow-xl ring-2 ring-[#1F7A63]/30'
                        : 'bg-[#0B2B26] border-[#163832] hover:border-[#1F7A63]/50'
                  }`}
                >
                  <div className="p-7">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-full shadow-xs ${
                        isLight
                          ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                          : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        {subcat.num}
                      </span>
                      <span className={`text-[11px] font-bold ${
                        isLight ? 'text-[#061D1A]' : 'text-[#8EB69B]'
                      }`}>
                        {subcat.items.length} {lang === 'EN' ? 'scopes' : 'lingkup'}
                      </span>
                    </div>

                    <h4 className={`text-base font-bold font-heading mb-4 min-h-[48px] flex items-center ${
                      isLight ? 'text-[#061D1A]' : 'text-white'
                    }`}>
                      {lang === 'EN' ? subcat.name.EN : subcat.name.ID}
                    </h4>

                    {/* Service Items List */}
                    <ul className="space-y-2.5 text-xs">
                      {subcat.items.slice(0, isExpanded ? subcat.items.length : 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isLight ? 'text-[#1F7A63]' : 'text-[#5EEAD4]'
                          }`} />
                          <span className={`leading-snug ${
                            isLight ? 'text-[#061D1A] font-medium' : 'text-[#DAF1DE]'
                          }`}>
                            {lang === 'EN' ? item.EN : item.ID}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Show more toggle if more than 3 items */}
                    {subcat.items.length > 3 && (
                      <button
                        onClick={() => toggleExpand(subcat.num)}
                        className={`mt-4 text-xs font-bold inline-flex items-center gap-1 focus:outline-none cursor-pointer transition-colors ${
                          isLight
                            ? 'text-[#1F7A63] hover:text-[#061D1A]'
                            : 'text-[#5EEAD4] hover:text-white'
                        }`}
                      >
                        <span>
                          {isExpanded
                            ? (lang === 'EN' ? 'Show less' : 'Sembunyikan')
                            : (lang === 'EN' ? `+ ${subcat.items.length - 3} more items` : `+ ${subcat.items.length - 3} lingkup lainnya`)}
                        </span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className={`px-7 py-4 border-t rounded-b-3xl flex items-center justify-between transition-colors ${
                    isLight
                      ? 'border-neutral-100 bg-[#F4F5EE]/50'
                      : 'border-[#163832] bg-[#051F20]/50'
                  }`}>
                    <span className={`text-[11px] font-medium ${
                      isLight ? 'text-[#061D1A]' : 'text-[#8EB69B]'
                    }`}>
                      {lang === 'EN' ? 'Direct consultation' : 'Konsultasi langsung'}
                    </span>
                    <button
                      onClick={() => onConsultService(lang === 'EN' ? subcat.name.EN : subcat.name.ID)}
                      className={`text-xs font-bold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer transition-all ${
                        isLight
                          ? 'bg-[#DAF1DE] hover:bg-[#1F7A63] text-[#061D1A] hover:text-white'
                          : 'bg-[#163832] hover:bg-[#1F7A63] text-[#DAF1DE] hover:text-white'
                      }`}
                    >
                      <span>{lang === 'EN' ? 'Inquire' : 'Tanyakan'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
};


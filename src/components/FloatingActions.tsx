import React from 'react';
import { PhoneCall, ArrowUpRight } from 'lucide-react';
import { Language, Theme } from '../types';

interface FloatingActionsProps {
  lang: Language;
  theme: Theme;
  onConsultClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  lang,
  onConsultClick,
}) => {
  return (
    <aside
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      id="floating-actions-dock"
      aria-label="Aksi Cepat"
    >
      {/* Floating Konsultasi Tim CTA Button */}
      <button
        type="button"
        onClick={onConsultClick}
        className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1F7A63] hover:bg-[#186451] text-white text-xs sm:text-sm font-black shadow-xl shadow-black/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-[#235347] cursor-pointer"
        id="floating-consult-btn"
        title={lang === 'EN' ? 'Consult Our Mining Team' : 'Konsultasi dengan Tim Ahli Kami'}
      >
        <PhoneCall className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
        <span className="tracking-wider uppercase font-extrabold">{lang === 'EN' ? 'CONSULT OUR TEAM' : 'KONSULTASI TIM'}</span>
        <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
      </button>
    </aside>
  );
};

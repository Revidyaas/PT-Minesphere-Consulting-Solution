import React from 'react';
import { Compass } from 'lucide-react';
import { Language, Theme } from '../types';
import { VISION_MISSION } from '../data/companyData';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

interface VisionMissionProps {
  lang: Language;
  theme?: Theme;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ lang, theme }) => {
  const isLight = theme === 'light';

  return (
    <section className={`py-24 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1118] border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading mb-4 ${
            isLight ? 'text-[#0F172A]' : 'text-white'
          }`}>
            {lang === 'EN' ? 'VISION & MISSION' : 'VISI DAN MISI'}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#475569]' : 'text-slate-300'
          }`}>
            {lang === 'EN'
              ? 'Our overarching corporate vision and six guiding missions steering our engineering deliverables.'
              : 'Arah jangka panjang dan enam komitmen misi yang memandu seluruh layanan konsultasi teknis Minesphere.'}
          </p>
        </ScrollReveal>

        {/* Vision Hero Section with Headline */}
        <div className="mb-14">
          <ScrollReveal direction="up" delay={0.05} className="mb-6">
            <h3 className={`text-lg font-bold uppercase tracking-wider font-heading ${
              isLight ? 'text-[#0F172A]' : 'text-white'
            }`}>
              {lang === 'EN' ? 'Corporate Vision' : 'Visi Korporat'}
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl relative overflow-hidden transition-all duration-300 ${
              isLight
                ? 'bg-gradient-to-r from-emerald-50/80 via-white to-slate-50 border-[#A7F3D0] shadow-emerald-950/5'
                : 'bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900/60 border-emerald-500/40'
            }`}>
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
                isLight ? 'bg-emerald-500/15' : 'bg-emerald-500/10'
              }`} />

              {/* Isi Visi didampingi Icon */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-xs transition-transform group-hover:scale-105 ${
                  isLight
                    ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                    : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                }`}>
                  <Compass className="w-6 h-6" />
                </div>

                <div>
                  <blockquote className={`text-xl sm:text-2xl md:text-3xl font-extrabold font-heading tracking-tight max-w-4xl leading-snug ${
                    isLight ? 'text-[#0F172A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? VISION_MISSION.vision.EN : VISION_MISSION.vision.ID}
                  </blockquote>
                  
                  <p className={`text-xs sm:text-sm mt-4 max-w-3xl leading-relaxed ${
                    isLight ? 'text-[#475569]' : 'text-slate-400'
                  }`}>
                    {lang === 'EN'
                      ? 'Committed to delivering technology-driven solutions, operational efficiency, and environmental sustainability—creating a smarter, accountable, and globally competitive future for mining.'
                      : 'Kami berkomitmen untuk menghadirkan solusi berbasis teknologi, efisiensi operasional, dan keberlanjutan lingkungan, menciptakan pertambangan masa depan yang lebih cerdas, bertanggung jawab, dan berdaya saing global.'}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Six Missions Grid with Staggered Scroll Animations (Tanpa Icon) */}
        <div>
          <ScrollReveal direction="up" delay={0.05} className="mb-6">
            <h3 className={`text-lg font-bold uppercase tracking-wider font-heading ${
              isLight ? 'text-[#0F172A]' : 'text-white'
            }`}>
              {lang === 'EN' ? 'Our Six Core Missions' : 'Enam Misi Utama Minesphere'}
            </h3>
          </ScrollReveal>

          <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VISION_MISSION.missions.map((mission) => (
              <ScrollStaggerItem key={mission.num} className="h-full">
                <div
                  className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full group hover:translate-y-[-2px] ${
                    isLight
                      ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md'
                      : 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40'
                  }`}
                >
                  <div>
                    <div className="mb-4">
                      <span className={`text-xs font-mono font-black px-3 py-1 rounded-full inline-block shadow-xs ${
                        isLight
                          ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                          : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        {mission.num}
                      </span>
                    </div>
                    <h4 className={`text-base font-bold font-heading mb-2 ${
                      isLight ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {lang === 'EN' ? mission.titleEn : mission.titleId}
                    </h4>
                    <p className={`text-xs leading-relaxed ${
                      isLight ? 'text-[#475569]' : 'text-slate-300'
                    }`}>
                      {lang === 'EN' ? mission.descEn : mission.descId}
                    </p>
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </div>
    </section>
  );
};

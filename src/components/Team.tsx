import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Language, Theme } from '../types';
import { PARTNERS, ASSOCIATES_AND_SPECIALISTS } from '../data/companyData';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

interface TeamProps {
  lang: Language;
  theme?: Theme;
}

export const Team: React.FC<TeamProps> = ({ lang, theme }) => {
  const isLight = theme === 'light';
  const [activeFilter, setActiveFilter] = useState<'all' | 'partners' | 'associates' | 'specialists'>('all');

  const filteredAssociates = ASSOCIATES_AND_SPECIALISTS.filter((member) => {
    if (activeFilter === 'partners') return false;
    if (activeFilter === 'associates') return member.category === 'associate';
    if (activeFilter === 'specialists') return member.category === 'specialist';
    return true;
  });

  return (
    <section className={`py-24 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-[#F8FAFC] border-slate-200' : 'bg-[#0E1520] border-slate-800/80'
    }`} id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded border text-xs font-bold tracking-widest uppercase mb-4 ${
              isLight
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700'
                : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
            }`}>
              {lang === 'EN' ? 'OUR LEADERSHIP & ENGINEERS' : 'TIM & PRAKTISI AHLI'}
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading mb-4 ${
              isLight ? 'text-[#0F172A]' : 'text-white'
            }`}>
              {lang === 'EN' ? 'THE MINESPHERE TEAM' : 'TIM KONSULTAN MINESPHERE'}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-[#475569]' : 'text-slate-300'
            }`}>
              {lang === 'EN'
                ? 'Led by experienced partners and senior associates with extensive upstream-to-downstream Indonesian mining engineering expertise.'
                : 'Dipimpin oleh para partner pendiri dan asosiasi profesional berpengalaman luas di sektor pertambangan hulu hingga hilir.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className={`flex items-center p-1 rounded-xl border text-xs font-bold uppercase tracking-wider self-start md:self-auto transition-colors ${
            isLight
              ? 'bg-white border-[#E2E8F0] shadow-sm'
              : 'bg-slate-900 border-slate-800'
          }`}>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : isLight
                  ? 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'EN' ? 'All Members' : 'Semua'}
            </button>
            <button
              onClick={() => setActiveFilter('partners')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'partners'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : isLight
                  ? 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'EN' ? 'Partners' : 'Partner'}
            </button>
            <button
              onClick={() => setActiveFilter('associates')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'associates'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : isLight
                  ? 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'EN' ? 'Associates' : 'Asosiasi'}
            </button>
            <button
              onClick={() => setActiveFilter('specialists')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'specialists'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : isLight
                  ? 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'EN' ? 'Specialists' : 'Spesialis'}
            </button>
          </div>
        </ScrollReveal>

        {/* Partners Section Highlight */}
        {(activeFilter === 'all' || activeFilter === 'partners') && (
          <div className="mb-16">
            <ScrollReveal direction="up" delay={0.05} className="flex items-center gap-3 mb-6">
              <span className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-[#059669]' : 'bg-emerald-400'}`} />
              <h3 className={`text-sm font-bold uppercase tracking-widest font-mono ${
                isLight ? 'text-[#059669]' : 'text-emerald-400'
              }`}>
                {lang === 'EN' ? 'Founding Partners' : 'Para Mitra Pendiri (Partners)'}
              </h3>
            </ScrollReveal>

            <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PARTNERS.map((partner) => (
                <ScrollStaggerItem key={partner.id} className="h-full">
                  <div
                    className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-lg h-full hover:translate-y-[-2px] ${
                      isLight
                        ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md'
                        : 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-slate-800 hover:border-emerald-500/50'
                    }`}
                  >
                    <div>
                      {/* Header with Avatar placeholder / Initials */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-black font-heading group-hover:scale-105 transition-transform shadow-xs ${
                            isLight
                              ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                              : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                          }`}>
                            {partner.name
                              .split(' ')
                              .filter((n) => !n.includes('.'))
                              .slice(0, 2)
                              .map((n) => n[0])
                              .join('')}
                          </div>
                          <div>
                            <span className={`inline-block text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full mb-1 shadow-xs ${
                              isLight
                                ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                                : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                            }`}>
                              {lang === 'EN' ? 'Partner' : 'Partner Pendiri'}
                            </span>
                            <h4 className={`text-lg sm:text-xl font-black font-heading tracking-tight ${
                              isLight ? 'text-[#0F172A]' : 'text-white'
                            }`}>
                              {partner.name}
                            </h4>
                            <p className={`text-xs font-semibold ${
                              isLight ? 'text-[#475569]' : 'text-slate-400'
                            }`}>
                              {lang === 'EN' ? partner.role : partner.roleId}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Academic Background */}
                      <div className={`p-3.5 rounded-xl border mb-5 flex items-start gap-2.5 transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-[#E2E8F0]'
                          : 'bg-slate-950/70 border-slate-800/90'
                      }`}>
                        <GraduationCap className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isLight ? 'text-[#059669]' : 'text-emerald-400'
                        }`} />
                        <p className={`text-xs leading-relaxed ${
                          isLight ? 'text-[#334155]' : 'text-slate-300'
                        }`}>
                          {lang === 'EN' ? partner.background : partner.backgroundId}
                        </p>
                      </div>

                      {/* Key Skills */}
                      <div className="space-y-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                          isLight ? 'text-[#64748B]' : 'text-slate-400'
                        }`}>
                          {lang === 'EN' ? 'Specialized Competencies' : 'Kompetensi & Keahlian'}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(lang === 'EN' ? partner.skills : partner.skillsId).map((skill, idx) => (
                            <span
                              key={idx}
                              className={`text-[11px] px-2.5 py-1 rounded-md border transition-colors ${
                                isLight
                                  ? 'bg-[#F1F5F9] border-[#E2E8F0] text-[#334155] hover:border-slate-300'
                                  : 'bg-slate-800/80 border-slate-700/80 text-slate-200'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        )}

        {/* Associates & Specialists Grid */}
        {(activeFilter === 'all' || activeFilter === 'associates' || activeFilter === 'specialists') && (
          <div>
            <ScrollReveal direction="up" delay={0.05} className="flex items-center gap-3 mb-6">
              <span className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-[#64748B]' : 'bg-slate-400'}`} />
              <h3 className={`text-sm font-bold uppercase tracking-widest font-mono ${
                isLight ? 'text-[#475569]' : 'text-slate-400'
              }`}>
                {lang === 'EN' ? 'Associates & Technical Specialists' : 'Asosiasi & Tenaga Ahli Teknis'}
              </h3>
            </ScrollReveal>

            <ScrollStagger staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAssociates.map((member) => (
                <ScrollStaggerItem key={member.id} className="h-full">
                  <div
                    className={`p-5 rounded-xl border transition-all flex flex-col justify-between h-full hover:translate-y-[-1px] ${
                      isLight
                        ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md'
                        : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                          isLight
                            ? 'bg-[#F1F5F9] border-[#E2E8F0] text-[#475569]'
                            : 'bg-slate-800 border-slate-700 text-slate-400'
                        }`}>
                          {member.category === 'associate' ? 'Associate' : 'Specialist'}
                        </span>
                        {member.credentials && (
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs ${
                            isLight
                              ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                              : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                          }`}>
                            {member.credentials}
                          </span>
                        )}
                      </div>

                      <h5 className={`text-sm font-bold font-heading ${
                        isLight ? 'text-[#0F172A]' : 'text-white'
                      }`}>
                        {member.name}
                      </h5>
                      <p className={`text-xs font-medium mb-2 ${
                        isLight ? 'text-[#059669]' : 'text-emerald-400/90'
                      }`}>
                        {lang === 'EN' ? member.role : member.roleId}
                      </p>

                      <p className={`text-[11px] mb-3 flex items-start gap-1.5 ${
                        isLight ? 'text-[#475569]' : 'text-slate-400'
                      }`}>
                        <GraduationCap className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          isLight ? 'text-[#64748B]' : 'text-slate-500'
                        }`} />
                        <span>{lang === 'EN' ? member.background : member.backgroundId}</span>
                      </p>
                    </div>

                    <div className={`pt-3 border-t text-[11px] ${
                      isLight
                        ? 'border-[#E2E8F0] text-[#334155]'
                        : 'border-slate-800/80 text-slate-300'
                    }`}>
                      <span className={`block text-[10px] uppercase font-mono mb-1 ${
                        isLight ? 'text-[#64748B]' : 'text-slate-500'
                      }`}>
                        {lang === 'EN' ? 'Focus' : 'Fokus'}
                      </span>
                      {(lang === 'EN' ? member.skills : member.skillsId).join(' • ')}
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        )}
      </div>
    </section>
  );
};


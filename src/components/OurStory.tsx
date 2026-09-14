import React from 'react';
import { GraduationCap, Cpu, ShieldAlert, Award } from 'lucide-react';
import { Language, Theme } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface OurStoryProps {
  lang: Language;
  theme?: Theme;
}

export const OurStory: React.FC<OurStoryProps> = ({ lang, theme }) => {
  const isLight = theme === 'light';

  return (
    <section className={`py-20 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#0B1118] border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Column - Smooth Scroll Reveal from Left */}
          <ScrollReveal direction="left" duration={0.7} className="lg:col-span-7">
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-heading mb-6 leading-tight ${
              isLight ? 'text-[#0F172A]' : 'text-white'
            }`}>
              {lang === 'EN' ? (
                <>
                  Born from Ambition. <br />
                  <span className={isLight ? 'text-[#059669]' : 'text-emerald-400'}>Growing through Innovation.</span>
                </>
              ) : (
                <>
                  Lahir dari Ambisi. <br />
                  <span className={isLight ? 'text-[#059669]' : 'text-emerald-400'}>Tumbuh dengan Inovasi.</span>
                </>
              )}
            </h2>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-[#475569]' : 'text-slate-300'
            }`}>
              <p>
                {lang === 'EN'
                  ? 'Behind every meaningful transformation lies a courageous vision. Minesphere was born from the collective ambition of four mining professionals with distinguished backgrounds in the Indonesian mining industry—graduates in Mining Engineering from Universitas Sriwijaya (UNSRI) who advanced to master degrees at Institut Teknologi Bandung (ITB).'
                  : 'Di balik setiap perubahan besar, selalu ada mimpi besar. Minesphere lahir dari visi empat anak muda berbakat dengan latar belakang kuat di industri pertambangan, lulusan Teknik Pertambangan Universitas Sriwijaya (UNSRI) dan melanjutkan studi magister di Institut Teknologi Bandung (ITB).'}
              </p>

              <p>
                {lang === 'EN'
                  ? 'With specialized competencies spanning mineral economics, geotechnics, environmental compliance, and mine water hydrology, they recognized a pivotal opportunity: to deliver modern, data-driven, and highly reliable engineering advisory for Indonesian mining enterprises.'
                  : 'Dengan keahlian yang saling melengkapi di bidang ekonomi pertambangan, geoteknik, perizinan lingkungan, dan hidrologi tambang, mereka mendirikan Minesphere bukan sekadar perusahaan, melainkan wadah solusi terpercaya untuk industri pertambangan Indonesia.'}
              </p>

              <p className={`text-xs sm:text-sm italic border-l-2 pl-4 py-1 ${
                isLight
                  ? 'text-[#334155] border-[#059669]'
                  : 'text-slate-400 border-emerald-500'
              }`}>
                {lang === 'EN'
                  ? '"Today, Minesphere stands as a trusted strategic consulting partner across Indonesia—delivering innovation, technical precision, and environmental stewardship from exploration to post-mining closure."'
                  : '"Kini, Minesphere menjadi mitra strategis bagi perusahaan tambang di Indonesia, menghadirkan solusi dari eksplorasi hingga pasca-penambangan melalui semangat rekayasa cerdas dan inovasi berkelanjutan."'}
              </p>
            </div>
          </ScrollReveal>

          {/* Academic & Engineering Heritage Pillar - Smooth Scroll Reveal from Right */}
          <ScrollReveal direction="right" duration={0.7} delay={0.15} className="lg:col-span-5">
            <div className={`p-8 rounded-2xl border shadow-xl relative overflow-hidden group transition-all duration-300 ${
              isLight
                ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md'
                : 'bg-gradient-to-br from-slate-900/90 to-slate-950 border-slate-800 hover:border-emerald-500/40'
            }`}>
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none ${
                isLight ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
              }`} />

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-xs group-hover:scale-105 transition-transform ${
                  isLight
                    ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                    : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                }`}>
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wider ${
                    isLight ? 'text-[#0F172A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Academic & Technical Foundation' : 'Fondasi Akademik & Teknis'}
                  </h4>
                  <span className={`text-xs font-mono ${
                    isLight ? 'text-[#059669]' : 'text-emerald-400'
                  }`}>
                    UNSRI & ITB Mining Engineers
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className={`p-3.5 rounded-lg border flex items-start gap-3 transition-colors ${
                  isLight
                    ? 'bg-slate-50 border-[#E2E8F0]'
                    : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <Cpu className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    isLight ? 'text-[#059669]' : 'text-emerald-400'
                  }`} />
                  <div>
                    <span className={`font-semibold block mb-0.5 ${
                      isLight ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {lang === 'EN' ? 'Engineering Innovation' : 'Inovasi Rekayasa Terkini'}
                    </span>
                    <span className={isLight ? 'text-[#64748B]' : 'text-slate-400'}>
                      {lang === 'EN'
                        ? 'Combining empirical field investigation with advanced numerical models and digital matrix simulations.'
                        : 'Memadukan investigasi lapangan empiris dengan pemodelan numerik mutakhir dan simulasi matriks digital.'}
                    </span>
                  </div>
                </div>

                <div className={`p-3.5 rounded-lg border flex items-start gap-3 transition-colors ${
                  isLight
                    ? 'bg-slate-50 border-[#E2E8F0]'
                    : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <ShieldAlert className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    isLight ? 'text-[#059669]' : 'text-emerald-400'
                  }`} />
                  <div>
                    <span className={`font-semibold block mb-0.5 ${
                      isLight ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {lang === 'EN' ? 'Rigorous Regulatory Alignment' : 'Kesesuaian Regulasi Ketat'}
                    </span>
                    <span className={isLight ? 'text-[#64748B]' : 'text-slate-400'}>
                      {lang === 'EN'
                        ? 'Aligning directly with ESDM, KLHK, and regional mining governance standards.'
                        : 'Menyelaraskan langsung dengan standar Kementerian ESDM, KLHK, dan regulasi pertambangan nasional.'}
                    </span>
                  </div>
                </div>

                <div className={`p-3.5 rounded-lg border flex items-start gap-3 transition-colors ${
                  isLight
                    ? 'bg-slate-50 border-[#E2E8F0]'
                    : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <Award className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    isLight ? 'text-[#059669]' : 'text-emerald-400'
                  }`} />
                  <div>
                    <span className={`font-semibold block mb-0.5 ${
                      isLight ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {lang === 'EN' ? 'Palembang & Nationwide Deployment' : 'Berpusat di Palembang & Menjangkau Nasional'}
                    </span>
                    <span className={isLight ? 'text-[#64748B]' : 'text-slate-400'}>
                      {lang === 'EN'
                        ? 'Headquartered in South Sumatra, actively consulting concession assets across Sumatra and Kalimantan.'
                        : 'Berpusat di Palembang, Sumatera Selatan, aktif mendampingi konsesi tambang di Sumatera dan Kalimantan.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Pickaxe, Wrench, Leaf, CheckCircle2, Star, TrendingUp, Sparkles } from 'lucide-react';
import { Language, Theme } from '../types';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';
import { LifecycleCarousel } from './LifecycleCarousel';

interface WhoWeAreProps {
  lang: Language;
  theme?: Theme;
  onConsultService?: (serviceName: string) => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ lang, theme, onConsultService }) => {
  const isLight = theme === 'light';

  return (
    <section
      className={`py-24 relative border-t transition-colors duration-300 ${
        isLight ? 'bg-[#F4F5EE] border-neutral-200/60' : 'bg-[#051F20] border-[#163832]'
      }`}
      id="about"
    >
      {/* Subtle background technical motif */}
      <div className="absolute inset-0 bg-tech-dots opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER (LANDINGER REFERENCE TITLE STYLE)
            ========================================================= */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
      

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading mb-4 ${
            isLight ? 'text-[#061D1A]' : 'text-white'
          }`}>
            {lang === 'EN' ? 'WHO WE ARE' : 'TENTANG MINESPHERE'}
          </h2>

          <p className={`text-lg sm:text-xl font-medium font-heading mb-4 ${
            isLight ? 'text-[#235347]' : 'text-[#8EB69B]'
          }`}>
            {lang === 'EN' 
              ? 'Technical expertise. Practical solutions. Sustainable results.' 
              : 'Keahlian teknis. Solusi praktis. Hasil berkelanjutan.'}
          </p>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
          }`}>
            {lang === 'EN'
              ? 'PT Minesphere Consulting Solution is an independent mining consulting company providing integrated engineering and advisory across the entire mining lifecycle. We support mining concessions from early-stage exploration and feasibility planning through commercial operations, comprehensive environmental management, stringent regulatory compliance, and sustainable post-mining closure.'
              : 'PT Minesphere Consulting Solution adalah perusahaan konsultan pertambangan independen yang menyediakan solusi terintegrasi di seluruh siklus hidup pertambangan. Kami mendampingi pemegang izin usaha pertambangan mulai dari tahap eksplorasi dan perencanaan studi kelayakan, operasional tambang, pengelolaan lingkungan hidup, pemenuhan regulasi pemerintah, hingga penutupan pasca-tambang yang berkelanjutan.'}
          </p>
        </ScrollReveal>

        {/* =========================================================
            BENTO GRID (EXACT REFERENCE: 2 MAIN CARDS + 1 BANNER)
            ========================================================= */}
        <div className="space-y-6 mb-24">
          
          {/* Top Row: Left White Bento Card + Right white Spruce Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* -----------------------------------------------------
                CARD 1 (LEFT WHITE CARD WITH EMBEDDED PHOTO & MINI CARD)
                ----------------------------------------------------- */}
            <ScrollReveal direction="up" delay={0.05} className="lg:col-span-7 flex flex-col">
              <div className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between h-full ${
                isLight
                  ? 'bg-white border-neutral-200/80 shadow-sm'
                  : 'bg-[#0B2B26] border-[#163832] text-white shadow-lg'
              }`}>
                <div>
                  {/* Circular Emerald Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#1F7A63]/20 flex items-center justify-center text-[#1F7A63] mb-6 font-bold shadow-xs">
                    <Pickaxe className="w-6 h-6 text-[#1F7A63]" />
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-black font-heading tracking-tight mb-4 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Technical Expertise & Geological Assessment' : 'Keahlian Teknis & Penilaian Geologi'}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
                    isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                  }`}>
                    {lang === 'EN'
                      ? 'Grounded in deep mining engineering, geological assessments, geotechnical stability analysis, hydrology and hydrogeology, environmental engineering, and specialized technical mining studies.'
                      : 'Berlandaskan penguasaan mendalam bidang teknik pertambangan, penilaian geologi, analisis kestabilan geoteknik, hidrologi dan hidrogeologi, rekayasa lingkungan, serta studi teknis pertambangan spesifik.'}
                  </p>
                </div>

                {/* Nested Visual Image Container with Floating Mini Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-100 border border-neutral-200/50 mt-4 group">
                  <img
                    src="/mining-haul-trucks.jpg"
                    alt="Open-pit mining haul trucks operation"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://media.istockphoto.com/id/685647028/photo/two-yellow-dump-trucks.jpg?s=1024x1024&w=is&k=20&c=Q5HrurZDvCQ0OOIb4qcBsZ3n9ZxeoIAHea04SIDdvf4=';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Mini Widget Card (Reference Style) */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md text-[#061D1A] rounded-xl p-3 sm:p-4 shadow-xl border border-white/80 flex items-center gap-3 max-w-[240px]">
                    <div className="w-8 h-8 rounded-full bg-[#1F7A63]/20 flex items-center justify-center text-[#1F7A63] font-black text-xs flex-shrink-0 shadow-xs">
                      FS
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-neutral-500 font-semibold uppercase truncate">
                        Matriks RKAB & FS
                      </div>
                      <div className="text-xs font-black text-[#061D1A]">
                        100% Terverifikasi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* -----------------------------------------------------
                CARD 2 (RIGHT BENTO CARD WITH CHECKLIST)
                ----------------------------------------------------- */}
            <ScrollReveal direction="up" delay={0.12} className="lg:col-span-5 flex flex-col">
              <div className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between h-full ${
                isLight
                  ? 'bg-white border-neutral-200/80 shadow-sm text-[#061D1A]'
                  : 'bg-[#061D1A] text-white border-[#163832] shadow-xl dark-surface'
              }`}>
                <div>
                  {/* Circular Emerald Icon Badge */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold shadow-xs ${
                    isLight ? 'bg-[#1F7A63]/15 text-[#1F7A63]' : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                  }`}>
                    <Wrench className={`w-6 h-6 ${isLight ? 'text-[#1F7A63]' : 'text-[#5EEAD4]'}`} />
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-black font-heading tracking-tight mb-4 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Work seamlessly with our engineering team' : 'Solusi Praktis & Kolaborasi Operasional Tambang'}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
                    isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                  }`}>
                    {lang === 'EN'
                      ? 'Delivering pragmatic engineering methodologies, rigorous techno-economic analysis, operational fleet efficiency, mine production scheduling, project feasibility evaluation, and actionable regulatory support.'
                      : 'Menghadirkan metodologi rekayasa terapan, analisis tekno-ekonomi komprehensif, optimalisasi produktivitas alat, penjadwalan produksi, evaluasi kelayakan proyek, dan pendampingan regulasi yang aplikatif.'}
                  </p>

                  {/* Checklist with Green Checkmarks */}
                  <div className={`space-y-4 pt-4 border-t ${
                    isLight ? 'border-neutral-200/80' : 'border-white/10'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isLight ? 'bg-[#1F7A63]/15 text-[#1F7A63]' : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        isLight ? 'text-[#061D1A]' : 'text-white'
                      }`}>
                        {lang === 'EN' ? 'Feasibility Studies (FS) & RKAB matrix reporting' : 'Studi Kelayakan (FS) & Laporan Matriks RKAB 3-Tahunan'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isLight ? 'bg-[#1F7A63]/15 text-[#1F7A63]' : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        isLight ? 'text-[#061D1A]' : 'text-white'
                      }`}>
                        {lang === 'EN' ? 'Mine scheduling & equipment productivity' : 'Penjadwalan produksi tambang & efisiensi armada alat'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isLight ? 'bg-[#1F7A63]/15 text-[#1F7A63]' : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        isLight ? 'text-[#061D1A]' : 'text-white'
                      }`}>
                        {lang === 'EN' ? 'Mineral economics & CAPEX/OPEX modeling' : 'Permodelan tekno-ekonomi, analisis CAPEX & OPEX'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isLight ? 'bg-[#1F7A63]/15 text-[#1F7A63]' : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        isLight ? 'text-[#061D1A]' : 'text-white'
                      }`}>
                        {lang === 'EN' ? 'Environmental permitting (AMDAL / UKL-UPL)' : 'Kepatuhan perizinan lingkungan (AMDAL & UKL-UPL)'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    type="button"
                    onClick={() => onConsultService && onConsultService('Engineering Advisory')}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all w-full justify-center border cursor-pointer ${
                      isLight
                        ? 'bg-[#061D1A] hover:bg-[#163832] text-white border-[#061D1A] shadow-sm'
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    }`}
                  >
                    <span>{lang === 'EN' ? 'Consult Technical Team' : 'Konsultasikan Studi Teknis'}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* -----------------------------------------------------
              BANNER CARD BELOW (EXACT REFERENCE: VIBRANT LIME BANNER)
              ----------------------------------------------------- */}
          <ScrollReveal direction="up" delay={0.08}>
            <div
              id="about-sustainable-banner"
              className="rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-[#12493B] via-[#1F7A63] to-[#2DA889] text-white shadow-xl shadow-[#1F7A63]/25 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 group"
            >
              {/* Radial ambient glow highlights */}
              <div className="absolute -top-28 -right-28 w-80 h-80 bg-white/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#5EEAD4]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Angled Specular Sheen / Shine Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.08)_60%,transparent_80%)] pointer-events-none" />

              {/* Dynamic Traveling Shine Light Beam */}
              <div className="absolute top-0 bottom-0 -left-1/4 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-banner-shine" />

              {/* Fine Upper Edge Highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              <div className="max-w-xl relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mb-2 text-white">
                  {lang === 'EN'
                    ? 'Sustainable results across the entire concession lifecycle.'
                    : 'Hasil berkelanjutan & kepatuhan penuh seluruh siklus tambang.'}
                </h3>
                <p className="text-sm sm:text-base font-medium text-white/90">
                  {lang === 'EN'
                    ? 'Integrated mining engineering, environmental compliance, and progressive reclamation strategies.'
                    : 'Sinergi teknik pertambangan, tata kelola lingkungan terpadu, dan strategi reklamasi pasca-tambang.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 sm:gap-12 flex-shrink-0 relative z-10">
                {/* Metric 1 */}
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-xs">
                    100%
                  </div>
                  <div className="text-xs font-bold text-white/85 uppercase tracking-wider mt-1">
                    {lang === 'EN' ? 'ESDM Compliance' : 'Kepatuhan Regulasi ESDM'}
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-xs">
                      4.9
                    </span>
                    <div className="flex items-center text-white">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white drop-shadow-xs" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-white/85 uppercase tracking-wider mt-1">
                    {lang === 'EN' ? 'Partner Satisfaction' : 'Rating Kepuasan Rekanan'}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* =========================================================
            "QUICK START GUIDE" / 3-STEP ADVISORY WORKFLOW (REFERENCE)
            ========================================================= */}
        <div className="mb-24">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
            <h3 className={`text-3xl sm:text-4xl font-black font-heading tracking-tight mb-3 ${
              isLight ? 'text-[#061D1A]' : 'text-white'
            }`}>
              {lang === 'EN' ? 'Quick start guide' : 'Alur Pendampingan & Eksekusi'}
            </h3>

            <p className={`text-sm sm:text-base ${
              isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
            }`}>
              {lang === 'EN'
                ? 'A proven 3-phase roadmap from technical intake to official ministerial approvals.'
                : 'Metodologi sistematis 3 tahap dari tinjauan data awal hingga terbit persetujuan resmi.'}
            </p>
          </ScrollReveal>

          {/* 3 Step Horizontal Columns */}
          <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 01 */}
            <ScrollStaggerItem className="h-full">
              <div className={`p-8 rounded-3xl border transition-all h-full flex flex-col justify-between ${
                isLight ? 'bg-white border-neutral-200/80 shadow-xs' : 'bg-[#0B2B26] border-[#163832]'
              }`}>
                <div>
                  <div className="badge-step-number mb-6">
                    01
                  </div>
                  <h4 className={`text-xl font-bold font-heading mb-2.5 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Data Review & Consultation' : 'Konsultasi & Tinjauan Data Awal'}
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                  }`}>
                    {lang === 'EN'
                      ? 'Audit existing geological databases, mining concession boundaries, license validity, and target document schedules.'
                      : 'Pemeriksaan menyeluruh terhadap basis data geologi, batas konsesi IUP, masa berlaku perizinan, dan target jadwal dokumen.'}
                  </p>
                </div>
              </div>
            </ScrollStaggerItem>

            {/* Step 02 */}
            <ScrollStaggerItem className="h-full">
              <div className={`p-8 rounded-3xl border transition-all h-full flex flex-col justify-between ${
                isLight ? 'bg-white border-neutral-200/80 shadow-xs' : 'bg-[#0B2B26] border-[#163832]'
              }`}>
                <div>
                  <div className="badge-step-number mb-6">
                    02
                  </div>
                  <h4 className={`text-xl font-bold font-heading mb-2.5 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Technical Modeling & Studies' : 'Kajian Teknis & Analisis Lapangan'}
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                  }`}>
                    {lang === 'EN'
                      ? 'Detailed geotechnical stability, hydrological calculations, mine sequencing, economic models, and environmental impact assessments.'
                      : 'Analisis kestabilan lereng, kalkulasi hidrologi/hidrogeologi, desain tambang, permodelan tekno-ekonomi, dan simulasi dampak lingkungan.'}
                  </p>
                </div>
              </div>
            </ScrollStaggerItem>

            {/* Step 03 */}
            <ScrollStaggerItem className="h-full">
              <div className={`p-8 rounded-3xl border transition-all h-full flex flex-col justify-between ${
                isLight ? 'bg-white border-neutral-200/80 shadow-xs' : 'bg-[#0B2B26] border-[#163832]'
              }`}>
                <div>
                  <div className="badge-step-number mb-6">
                    03
                  </div>
                  <h4 className={`text-xl font-bold font-heading mb-2.5 ${
                    isLight ? 'text-[#061D1A]' : 'text-white'
                  }`}>
                    {lang === 'EN' ? 'Submission & Defense Approval' : 'Penyusunan & Pengawalan Persetujuan'}
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isLight ? 'text-[#061D1A]' : 'text-[#DAF1DE]'
                  }`}>
                    {lang === 'EN'
                      ? 'Finalizing official ESDM/KLHK documentation, coaching technical defenses, and securing legitimate approvals.'
                      : 'Finalisasi dokumen resmi sesuai format Ditjen Minerba/KLHK, pendampingan sidang teknis, hingga surat persetujuan resmi terbit.'}
                  </p>
                </div>
              </div>
            </ScrollStaggerItem>
          </ScrollStagger>

          {/* Large Cinematic Banner Image (Reference Layout Element) */}
          <ScrollReveal direction="up" delay={0.08}>
            <div className="rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl border border-neutral-200/60 aspect-[21/9] bg-[#061D1A] relative group dark-surface">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
                alt="Mining site field technical engineering supervision"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/open-pit.jpg';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              {/* Deep rich contrast gradient overlay ensuring 100% crystal clear readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-2xl z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1F7A63] text-white shadow-lg mb-3">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="font-extrabold">{lang === 'EN' ? 'Field Operations & Verification' : 'Operasional & Verifikasi Lapangan'}</span>
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black font-heading text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight tracking-tight">
                  {lang === 'EN' ? 'Rigorous On-Site Engineering Oversight' : 'Supervisi Teknis Lapangan Berstandar Rekayasa Tinggi'}
                </h4>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* =========================================================
            LIFECYCLE CAROUSEL
            ========================================================= */}
        <ScrollReveal direction="up">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h3 className={`text-2xl sm:text-3xl font-black font-heading ${
              isLight ? 'text-[#061D1A]' : 'text-white'
            }`}>
              {lang === 'EN' ? 'Explore the Full Mining Lifecycle' : 'Telusuri Seluruh Siklus Penambangan'}
            </h3>
          </div>
          <LifecycleCarousel
            lang={lang}
            theme={theme}
            onConsultStage={onConsultService}
          />
        </ScrollReveal>

      </div>
    </section>
  );
};


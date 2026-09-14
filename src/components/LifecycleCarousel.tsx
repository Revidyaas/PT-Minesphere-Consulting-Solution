import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Pickaxe,
  FileText,
  Wrench,
  TrendingUp,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ScrollText,
  Cpu
} from 'lucide-react';
import { Language, Theme } from '../types';

interface LifecycleCarouselProps {
  lang: Language;
  theme?: Theme;
  onConsultStage?: (stageName: string) => void;
}

interface StageDetail {
  step: string;
  nameEn: string;
  nameId: string;
  subtitleEn: string;
  subtitleId: string;
  descEn: string;
  descId: string;
  icon: typeof Pickaxe;
  deliverablesEn: string[];
  deliverablesId: string[];
  regulationsEn: string[];
  regulationsId: string[];
  tools: string[];
  accentColor: string;
}

const LIFECYCLE_DETAILS: StageDetail[] = [
  {
    step: '01',
    nameEn: 'Exploration',
    nameId: 'Eksplorasi',
    subtitleEn: 'Geological Mapping, Resource Modeling & Target Delineation',
    subtitleId: 'Pemetaan Geologi, Pemodelan Sumber Daya & Delineasi Target',
    descEn: 'Fundamental geological investigations to identify mineral or coal deposits, quantify geological confidence, and establish compliant resource models.',
    descId: 'Investigasi geologi fundamental untuk mengidentifikasi deposit batubara atau mineral, mengukur tingkat keyakinan geologi, serta menyusun model sumber daya terverifikasi.',
    icon: Pickaxe,
    accentColor: 'emerald',
    deliverablesEn: [
      'Regional & local geological outcrop mapping (1:5,000 / 1:2,000)',
      'Diamond core drilling supervision & stratigraphic / geotechnical logging',
      'Laboratory coal quality (proximate/ultimate) & mineral assay testing',
      '3D geological wireframe modeling & resource estimation (KCMI / JORC Code)',
      'Official Final Exploration Report compliant with ESDM guidelines'
    ],
    deliverablesId: [
      'Pemetaan geologi permukaan & singkapan batuan skala 1:5.000 / 1:2.000',
      'Supervisi pemboran inti (coring) & logging geoteknik / stratigrafi batuan',
      'Uji laboratorium kualitas batubara (analisis proksimat/ultimat) & assay mineral',
      'Pemodelan geologi 3D & estimasi sumber daya tereka, terunjuk, terukur (KCMI/JORC)',
      'Penyusunan Laporan Akhir Eksplorasi resmi sesuai format Ditjen Minerba ESDM'
    ],
    regulationsEn: [
      'Kepmen ESDM No. 1827 K/30/MEM/2018 (Annex I)',
      'SNI 5015:2019 (Coal) & SNI 4726:2019 (Minerals)',
      'Indonesian Mineral & Coal Reporting Code (KCMI 2017)'
    ],
    regulationsId: [
      'Kepmen ESDM No. 1827 K/30/MEM/2018 (Lampiran I)',
      'SNI 5015:2019 (Batubara) & SNI 4726:2019 (Mineral)',
      'Kode Pelaporan KCMI 2017 / Standar CPI Terdaftar'
    ],
    tools: ['Micromine', 'Leapfrog Geo', 'Surpac', 'ArcGIS Pro', 'RockWorks']
  },
  {
    step: '02',
    nameEn: 'Planning & Feasibility',
    nameId: 'Perencanaan & FS',
    subtitleEn: 'Techno-Economic Feasibility Studies & Pit Optimization',
    subtitleId: 'Studi Kelayakan Tekno-Ekonomi & Optimasi Batas Pit',
    descEn: 'Comprehensive technical and economic feasibility evaluations to determine mineable reserves, optimize stripping ratios, and ensure investment bankability.',
    descId: 'Evaluasi kelayakan teknis dan ekonomi komprehensif untuk membuktikan cadangan tertambang, mengoptimalkan nisbah kupas (stripping ratio), dan memastikan kelayakan finansial investasi.',
    icon: FileText,
    accentColor: 'emerald',
    deliverablesEn: [
      'Comprehensive Technical & Financial Feasibility Study (FS) document',
      'Ultimate Pit Limit (UPL) optimization & economic cut-off grade definition',
      'Pit geometry design, waste dump placement & haul road corridor routing',
      'Techno-economic modeling (CAPEX, OPEX, DCF, NPV, IRR, and Payback Period)',
      'Sensitivity & scenario analysis against commodity price and cost swings'
    ],
    deliverablesId: [
      'Penyusunan Dokumen Studi Kelayakan (FS) resmi aspek teknis & finansial',
      'Optimasi Batas Penambangan (Ultimate Pit Limit) & cut-off grade ekonomis',
      'Desain geometri lereng tambang, lokasi timbunan (disposal) & jalan utama',
      'Pemodelan tekno-ekonomi komprehensif (CAPEX, OPEX, DCF, NPV, IRR & Payback)',
      'Analisis sensitivitas fluktuasi harga komoditas & biaya operasional penambangan'
    ],
    regulationsEn: [
      'ESDM Directorate General of Mineral & Coal Feasibility Study Guidelines',
      'Law No. 3/2020 on Mineral & Coal Mining (Minerba)',
      'Ministry of Finance & ESDM Royalty Fiscal Regulations'
    ],
    regulationsId: [
      'Pedoman Penyusunan Dokumen Studi Kelayakan Ditjen Minerba ESDM',
      'Undang-Undang No. 3 Tahun 2020 tentang Minerba',
      'Regulasi Fiskal, PNBP & Penetapan Royalti Komoditas Tambang'
    ],
    tools: ['Whittle', 'Minescape', 'Datamine', 'Minex', 'Financial DCF Engine']
  },
  {
    step: '03',
    nameEn: 'Development & Geotech',
    nameId: 'Pengembangan & Geoteknik',
    subtitleEn: 'Geotechnical Characterization, Mine Infrastructure & Haul Roads',
    subtitleId: 'Karakterisasi Geoteknik, Infrastruktur Tambang & Jalan Angkut',
    descEn: 'Civil and rock engineering to establish safe pit slopes, robust heavy haulage roads, sediment traps, and foundation integrity prior to commercial extraction.',
    descId: 'Rekayasa sipil dan mekanika batuan untuk mewujudkan lereng tambang yang stabil, jalan angkut alat berat yang kokoh, kolam sedimen awal, serta integritas fondasi infrastruktur.',
    icon: Wrench,
    accentColor: 'emerald',
    deliverablesEn: [
      'Slope stability evaluations for highwalls, lowwalls, and waste disposal dumps',
      'Haul road engineering (width, grade %, super-elevation, and safety bunds)',
      'Factor of Safety (FoS) & Probability of Failure (PoF) numerical simulations',
      'Bearing capacity testing for ROM pad, crushing plant, and workshop facilities',
      'Initial site runoff diversion channels and temporary settling ponds'
    ],
    deliverablesId: [
      'Kajian geoteknik kestabilan lereng highwall, lowwall, dan timbunan disposal',
      'Desain rekayasa jalan angkut tambang (lebar, kemiringan/grade, superelevasi & tanggul)',
      'Simulasi numerik Faktor Keamanan (FK statis/dinamis) & Probabilitas Kelongsoran (PK)',
      'Uji daya dukung tanah untuk fondasi ROM pad, crushing plant, dan bengkel tambang',
      'Perencanaan saluran pengelak limpasan permukaan (diversion channel) & kolam sedimen'
    ],
    regulationsEn: [
      'Kepmen ESDM No. 1827 K/30/MEM/2018 (Annex II - Mining Technical Good Practice)',
      'Indonesian National Standard for Geotechnical Open Pit Stability',
      'Ministry of Public Works Geotechnical Design Codes'
    ],
    regulationsId: [
      'Kepmen ESDM No. 1827 K/30/MEM/2018 (Lampiran II - Kaidah Teknik Pertambangan)',
      'Pedoman Teknis Evaluasi Kestabilan Lereng Terbuka Ditjen Minerba',
      'Standar Keselamatan Operasi Tambang & Konstruksi Jalan Angkut'
    ],
    tools: ['Rocscience Slide2', 'Slide3', 'RS2', 'Plaxis 2D', 'Civil 3D']
  },
  {
    step: '04',
    nameEn: 'Operations & RKAB',
    nameId: 'Operasi & RKAB',
    subtitleEn: 'Mine Scheduling, Blast Optimization & 3-Year RKAB Approvals',
    subtitleId: 'Penjadwalan Produksi, Optimasi Peledakan & RKAB 3 Tahunan',
    descEn: 'Active production coordination, drill & blast vibration control, fleet efficiency matching, and 3-year ESDM RKAB submission and approval defense.',
    descId: 'Koordinasi produksi aktif, pengendalian getaran pemboran & peledakan, optimalisasi keserasian armada alat berat, serta penyusunan dan pengawalan persetujuan RKAB 3 tahunan.',
    icon: TrendingUp,
    accentColor: 'emerald',
    deliverablesEn: [
      '3-Year RKAB Technical Document & ESDM Official Excel Matrix preparation',
      'Short-term (monthly/quarterly) and long-term mine production scheduling',
      'Controlled blasting pattern design, vibration (PPV) and airblast mitigation',
      'Heavy equipment match factor optimization and fuel burn ratio management',
      'Mine water pumping & sump dewatering network performance models'
    ],
    deliverablesId: [
      'Penyusunan Dokumen RKAB 3 Tahunan (Teks Naratif & Matriks Input Excel ESDM)',
      'Penjadwalan tambang jangka pendek (bulanan/triwulanan) & jangka panjang',
      'Desain pola pemboran & peledakan (blasting), mitigasi getaran (PPV) & airblast',
      'Optimalisasi keserasian alat gali-muat & angkut (Match Factor) serta rasio bahan bakar',
      'Pemodelan kapasitas pemompaan air tambang (mine dewatering) & dimensi sump'
    ],
    regulationsEn: [
      'SE Dirjen Minerba No. 1.E/MB.05/DJB.B/2024 (RKAB Guidance)',
      'Kepmen ESDM No. 1827 K/30/MEM/2018 (Annex III & IV - Operations & Safety)',
      'Regulation on Mine Technical Head (KTT) Governance'
    ],
    regulationsId: [
      'Surat Edaran Dirjen Minerba No. 1.E/MB.05/DJB.B/2024 (Pedoman Evaluasi RKAB)',
      'Kepmen ESDM No. 1827 K/30/MEM/2018 (Lampiran III & IV - Operasi & Keselamatan)',
      'Tata Kelola Kepala Teknik Tambang (KTT) & Manajemen Risiko Operasional'
    ],
    tools: ['SIMPONTEN ESDM', 'ShotPlus', 'Minescape', 'MineSched', 'Spry']
  },
  {
    step: '05',
    nameEn: 'Environmental & Pertek',
    nameId: 'Lingkungan & Pertek',
    subtitleEn: 'AMDAL/UKL-UPL, Wastewater Approvals (Pertek) & ESG Stewardship',
    subtitleId: 'AMDAL/UKL-UPL, Persetujuan Teknis Air Limbah (Pertek) & ESG',
    descEn: 'Proactive environmental engineering ensuring compliance with national effluent standards, industrial wastewater absorption, and comprehensive AMDAL permits.',
    descId: 'Rekayasa lingkungan proaktif menjamin kepatuhan baku mutu limbah nasional, pemanfaatan air limbah resapan ke tanah, persetujuan teknis (Pertek), dan dokumen AMDAL.',
    icon: Leaf,
    accentColor: 'emerald',
    deliverablesEn: [
      'Environmental Impact Assessment (AMDAL / UKL-UPL via Amdalnet portal)',
      'Technical Approval (Pertek) for Ground Absorption & Surface Water Discharge',
      'Settling pond multi-compartment design & Acid Mine Drainage (AMD) neutralization',
      'Certificate of Operational Feasibility (SLO) for environmental management systems',
      'Corporate ESG roadmap, decarbonization strategies & semesterly RKL-RPL audits'
    ],
    deliverablesId: [
      'Penyusunan Persetujuan Lingkungan (AMDAL / UKL-UPL melalui sistem Amdalnet)',
      'Persetujuan Teknis (Pertek) Pemanfaatan Air Limbah Resapan & Pembuangan ke Sungai',
      'Perhitungan dimensi Kolam Pengendap Lumpur (Setpond) & instalasi netralisasi AAT',
      'Pengurusan Sertifikat Laik Operasi (SLO) lingkungan hidup dari instansi terkait',
      'Penyusunan Roadmap ESG korporasi, efisiensi emisi, dan pelaporan berkala RKL-RPL'
    ],
    regulationsEn: [
      'Government Regulation (PP) No. 22/2021 on Environmental Protection & Management',
      'Permen LHK No. 5/2021 on Technical Standards for Industrial Wastewater',
      'Minister of Environment & Forestry Environmental Quality Decrees'
    ],
    regulationsId: [
      'Peraturan Pemerintah (PP) No. 22 Tahun 2021 tentang Penyelenggaraan Lingkungan Hidup',
      'Permen LHK No. 5 Tahun 2021 (Tata Cara Penerbitan Persetujuan Teknis & SLO)',
      'Baku Mutu Air Limbah Usaha Pertambangan Kementerian LHK'
    ],
    tools: ['Amdalnet KLHK', 'HEC-RAS', 'WaterCAD', 'HydroGeoChem', 'GIS Spatial Analysis']
  },
  {
    step: '06',
    nameEn: 'Mine Closure & Reclamation',
    nameId: 'Pasca-Tambang & Reklamasi',
    subtitleEn: 'Progressive Reclamation, Pit Lake Void Studies & Community PPM',
    subtitleId: 'Reklamasi Progresif, Rencana Pasca Tambang & Program PPM',
    descEn: 'End-of-life mine decommissioning, void water stability, continuous land rehabilitation, social transition, and reclamation bond clearance.',
    descId: 'Penutupan tambang bertanggung jawab, kajian kualitas air pit lake (void), rehabilitasi lahan progresif, keberlanjutan sosial PPM, dan pencairan jaminan reklamasi.',
    icon: ShieldCheck,
    accentColor: 'emerald',
    deliverablesEn: [
      '5-Year Progressive Reclamation Plan and Mine Closure Plan (RPT)',
      'Reclamation Guarantee (Jamrek) & Post-Mining Guarantee budget calculations',
      'Land re-contouring, erosion mitigation, topsoil management & cover crops',
      'Pit lake hydrochemical stability analysis for safe downstream community usage',
      'Community Development & Empowerment (PPM) self-sustaining exit strategies'
    ],
    deliverablesId: [
      'Dokumen Rencana Reklamasi 5 Tahunan & Rencana Pasca Tambang (RPT) Komprehensif',
      'Perhitungan penetapan Jaminan Reklamasi (Jamrek) & Jaminan Pasca Tambang (Jampt)',
      'Rekayasa penataan lahan (land leveling), penaburan tanah pucuk & revegetasi',
      'Kajian hidrokimi dan kestabilan air void (pit lake) untuk pemanfaatan berkelanjutan',
      'Program Pengembangan & Pemberdayaan Masyarakat (PPM) mandiri pasca-operasional'
    ],
    regulationsEn: [
      'Permen ESDM No. 26/2018 on Implementation of Good Mining Practices',
      'Kepmen ESDM 1827 K/30/MEM/2018 (Annex VI & VII - Reclamation & Mine Closure)',
      'ESDM Directives on Reclamation Bond Assessment and Release'
    ],
    regulationsId: [
      'Permen ESDM No. 26 Tahun 2018 tentang Pelaksanaan Kaidah Pertambangan yang Baik',
      'Kepmen ESDM 1827 K/30/MEM/2018 (Lampiran VI & VII - Reklamasi & Pasca Tambang)',
      'Petunjuk Teknis Penempatan & Pencairan Jaminan Reklamasi Ditjen Minerba'
    ],
    tools: ['Drone UAV Survey', 'ArcGIS Pro', 'QGIS', 'USLE Soil Loss Modeling', 'CAD Terrain']
  }
];

export const LifecycleCarousel: React.FC<LifecycleCarouselProps> = ({
  lang,
  theme,
  onConsultStage
}) => {
  const isLight = theme === 'light';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeStage = LIFECYCLE_DETAILS[currentIndex];
  const IconComponent = activeStage.icon;

  const prevIndex = (currentIndex - 1 + LIFECYCLE_DETAILS.length) % LIFECYCLE_DETAILS.length;
  const nextIndex = (currentIndex + 1) % LIFECYCLE_DETAILS.length;
  const prevStage = LIFECYCLE_DETAILS[prevIndex];
  const nextStage = LIFECYCLE_DETAILS[nextIndex];
  const PrevIcon = prevStage.icon;
  const NextIcon = nextStage.icon;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === LIFECYCLE_DETAILS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? LIFECYCLE_DETAILS.length - 1 : prev - 1));
  };

  const handleSelectStage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isAutoPlay) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlay, currentIndex]);

  // Keyboard navigation within the carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isLight
          ? 'bg-slate-50 border-slate-200 shadow-md'
          : 'bg-gradient-to-b from-slate-900/90 via-[#0B1118] to-slate-950/90 border-slate-800 shadow-xl'
      } p-5 sm:p-7 lg:p-9`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
      aria-label="Mining Lifecycle Carousel"
    >
      {/* Top Header: Title, Stage Counter (NN/g style), and Autoplay Toggle */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div>
          <h3 className={`text-2xl sm:text-3xl font-black font-heading tracking-tight ${
            isLight ? 'text-[#0F172A]' : 'text-white'
          }`}>
            {lang === 'EN' ? 'The Integrated Mining Lifecycle' : 'Siklus Terintegrasi Pertambangan'}
          </h3>
          <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${
            isLight ? 'text-[#64748B]' : 'text-slate-400'
          }`}>
            {lang === 'EN'
              ? 'Minesphere embeds specialized engineering, environmental approvals, and regulatory compliance across every operational milestone.'
              : 'Minesphere mendampingi seluruh rangkaian operasional pertambangan mulai dari kajian eksplorasi, perizinan, reklamasi, hingga penutupan tambang.'}
          </p>
        </div>

        {/* NN/g Style Counter Badge + Autoplay Controls */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          {/* Stage Count (NN/g style) */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${
            isLight
              ? 'bg-white border-slate-200 text-slate-800 shadow-xs'
              : 'bg-slate-900 border-slate-800 text-slate-200'
          }`}>
            <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>
              {activeStage.step}
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-400">06</span>
          </div>

          {/* Autoplay toggle button */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer flex items-center justify-center ${
              isAutoPlay
                ? isLight
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                  : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400'
                : isLight
                ? 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isAutoPlay ? (lang === 'EN' ? 'Pause auto-play' : 'Jeda putar otomatis') : (lang === 'EN' ? 'Start auto-play' : 'Mulai putar otomatis')}
            aria-label="Toggle autoplay"
          >
            {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Step Navigation Ribbon: 6 Timeline Nodes */}
      <div className="mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {LIFECYCLE_DETAILS.map((stage, idx) => {
            const isCurrent = idx === currentIndex;
            const isPassed = idx < currentIndex;
            const StageIcon = stage.icon;

            return (
              <button
                key={stage.step}
                onClick={() => handleSelectStage(idx)}
                className={`relative p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isCurrent
                    ? isLight
                      ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                    : isPassed
                    ? isLight
                      ? 'bg-slate-100 border-slate-200 hover:bg-white text-slate-700'
                      : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60 text-slate-400'
                    : isLight
                    ? 'bg-slate-100/70 border-slate-200 hover:bg-white text-slate-500'
                    : 'bg-slate-950/30 border-slate-800/60 hover:bg-slate-900/40 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className={`text-[11px] font-mono font-bold ${
                    isCurrent
                      ? isLight ? 'text-emerald-700' : 'text-emerald-400'
                      : isLight ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    {stage.step}
                  </span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                    isCurrent
                      ? isLight ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                      : isLight ? 'bg-slate-200 text-slate-500 group-hover:text-slate-800' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                  }`}>
                    <StageIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="truncate">
                  <h4 className={`text-xs font-bold truncate ${
                    isCurrent
                      ? isLight ? 'text-[#0F172A]' : 'text-white'
                      : isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {lang === 'EN' ? stage.nameEn : stage.nameId}
                  </h4>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {lang === 'EN' ? stage.subtitleEn.split(',')[0] : stage.subtitleId.split(',')[0]}
                  </span>
                </div>

                {/* Bottom Active Indicator Line */}
                {isCurrent && (
                  <motion.div
                    layoutId="activeStageTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-500 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CAROUSEL DECK: NN/g Style Center Active Card with Flanking Cards & Circular Arrows */}
      <div className="relative">
        {/* Main Carousel Area with Flanking Previews (NN/g Deck Pattern) */}
        <div className="relative flex items-center justify-center gap-3 lg:gap-5">
          {/* Left Flanking Card (Previous Stage Preview - visible on large screens) */}
          <div
            onClick={handlePrev}
            className={`hidden xl:flex flex-col justify-between w-56 flex-shrink-0 self-stretch rounded-2xl border p-5 cursor-pointer transition-all duration-300 opacity-50 hover:opacity-85 hover:scale-[1.02] ${
              isLight
                ? 'bg-white/80 border-slate-200 shadow-xs'
                : 'bg-slate-900/60 border-slate-800/80'
            }`}
            title={lang === 'EN' ? `Previous: Stage ${prevStage.step} - ${prevStage.nameEn}` : `Sebelumnya: Tahap ${prevStage.step} - ${prevStage.nameId}`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                }`}>
                  {prevStage.step}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                }`}>
                  <PrevIcon className="w-4 h-4" />
                </div>
              </div>

              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                {lang === 'EN' ? '← Previous Stage' : '← Tahap Sebelumnya'}
              </span>
              <h5 className={`text-sm font-bold font-heading line-clamp-2 ${
                isLight ? 'text-[#0F172A]' : 'text-white'
              }`}>
                {lang === 'EN' ? prevStage.nameEn : prevStage.nameId}
              </h5>
              <p className="text-[11px] text-slate-400 line-clamp-3 mt-2 leading-relaxed">
                {lang === 'EN' ? prevStage.descEn : prevStage.descId}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? 'Click to view' : 'Klik untuk lihat'}</span>
            </div>
          </div>

          {/* Left Circular Navigation Button (NN/g diagram style) */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 ${
              isLight
                ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-slate-300/60'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-white shadow-black/60'
            }`}
            title={lang === 'EN' ? 'Previous Stage (Left Arrow)' : 'Tahap Sebelumnya (Panah Kiri)'}
            aria-label="Previous stage"
            id="carousel-prev-btn"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Center Main Active Card (Animated Focus) */}
          <div className="flex-1 w-full max-w-4xl relative z-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeStage.step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`rounded-2xl border p-6 sm:p-8 lg:p-9 transition-colors ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-lg ring-1 ring-slate-900/5'
                    : 'bg-slate-900/95 border-slate-800 shadow-2xl'
                }`}
              >
                {/* Slide Header: Badge, Step, Title & Stage Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-xs ${
                      isLight
                        ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                        : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                    }`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full shadow-xs ${
                          isLight
                            ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                            : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                        }`}>
                          {lang === 'EN' ? `Stage ${activeStage.step}` : `Tahap ${activeStage.step}`}
                        </span>
                        <span className="text-xs font-mono text-slate-400 hidden sm:inline">•</span>
                        <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                          {lang === 'EN' ? activeStage.subtitleEn : activeStage.subtitleId}
                        </span>
                      </div>

                      <h4 className={`text-2xl sm:text-3xl font-black font-heading tracking-tight ${
                        isLight ? 'text-[#0F172A]' : 'text-white'
                      }`}>
                        {lang === 'EN' ? activeStage.nameEn : activeStage.nameId}
                      </h4>
                    </div>
                  </div>

                  {/* Stage indicator pill */}
                  <div className={`self-start sm:self-center px-3.5 py-1 rounded-full text-xs font-mono font-bold shadow-xs ${
                    isLight
                      ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
                      : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
                  }`}>
                    {activeStage.tools.length} {lang === 'EN' ? 'Tools & Standards' : 'Perangkat & Regulasi'}
                  </div>
                </div>

                {/* Description Paragraph */}
                <p className={`text-sm sm:text-base leading-relaxed mb-7 ${
                  isLight ? 'text-[#334155]' : 'text-slate-300'
                }`}>
                  {lang === 'EN' ? activeStage.descEn : activeStage.descId}
                </p>

                {/* 3 Pillars Grid: Deliverables, Standards/Regulations, Tools & Software */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-7">
                  {/* Column 1: Technical Deliverables (7 cols) */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 mb-3">
                      <ScrollText className="w-4 h-4 text-emerald-500" />
                      <h5 className={`text-xs font-bold uppercase tracking-wider ${
                        isLight ? 'text-[#0F172A]' : 'text-white'
                      }`}>
                        {lang === 'EN' ? 'Key Technical Scope & Deliverables' : 'Lingkup Teknis & Dokumen Keluaran'}
                      </h5>
                    </div>
                    <div className={`p-4 rounded-xl border space-y-2.5 ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
                    }`}>
                      {(lang === 'EN' ? activeStage.deliverablesEn : activeStage.deliverablesId).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className={isLight ? 'text-slate-700 leading-relaxed' : 'text-slate-300 leading-relaxed'}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Regulations & Tools (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                    {/* Regulatory Framework */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <h5 className={`text-xs font-bold uppercase tracking-wider ${
                          isLight ? 'text-[#0F172A]' : 'text-white'
                        }`}>
                          {lang === 'EN' ? 'Regulatory Compliance & Standards' : 'Landasan Regulasi & Standar'}
                        </h5>
                      </div>
                      <div className={`p-3.5 rounded-xl border space-y-1.5 ${
                        isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950/60 border-slate-800 text-slate-300'
                      }`}>
                        {(lang === 'EN' ? activeStage.regulationsEn : activeStage.regulationsId).map((reg, idx) => (
                          <div key={idx} className="text-[11px] font-mono flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span className="truncate">{reg}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Engineering Tools / Software */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        <h5 className={`text-xs font-bold uppercase tracking-wider ${
                          isLight ? 'text-[#0F172A]' : 'text-white'
                        }`}>
                          {lang === 'EN' ? 'Engineering Software & Tools' : 'Perangkat Lunak & Metodologi'}
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeStage.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                              isLight
                                ? 'bg-slate-100 border-slate-300 text-slate-700'
                                : 'bg-slate-800/80 border-slate-700 text-emerald-300'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation CTA button */}
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <div className="text-xs text-slate-400">
                    {lang === 'EN'
                      ? 'Comprehensive engineering & regulatory advisory provided by certified technical specialists.'
                      : 'Pendampingan teknis dan perizinan ditangani langsung oleh tenaga ahli bersertifikat resmi.'}
                  </div>

                  <button
                    onClick={() => {
                      const targetName = lang === 'EN' ? activeStage.nameEn : activeStage.nameId;
                      if (onConsultStage) {
                        onConsultStage(`Konsultasi Tahap ${activeStage.step}: ${targetName}`);
                      } else {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer bg-[#1F7A63] hover:bg-[#186451] text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    id="carousel-consult-stage-btn"
                  >
                    <span>
                      {lang === 'EN'
                        ? `Consult on ${activeStage.nameEn} Needs`
                        : `Konsultasi Kebutuhan Tahap ${activeStage.nameId}`}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Circular Navigation Button (NN/g diagram style) */}
          <button
            onClick={handleNext}
            className={`absolute right-0 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 ${
              isLight
                ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-slate-300/60'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-white shadow-black/60'
            }`}
            title={lang === 'EN' ? 'Next Stage (Right Arrow)' : 'Tahap Berikutnya (Panah Kanan)'}
            aria-label="Next stage"
            id="carousel-next-btn"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Flanking Card (Next Stage Preview - visible on large screens) */}
          <div
            onClick={handleNext}
            className={`hidden xl:flex flex-col justify-between w-56 flex-shrink-0 self-stretch rounded-2xl border p-5 cursor-pointer transition-all duration-300 opacity-50 hover:opacity-85 hover:scale-[1.02] ${
              isLight
                ? 'bg-white/80 border-slate-200 shadow-xs'
                : 'bg-slate-900/60 border-slate-800/80'
            }`}
            title={lang === 'EN' ? `Next: Stage ${nextStage.step} - ${nextStage.nameEn}` : `Berikutnya: Tahap ${nextStage.step} - ${nextStage.nameId}`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                }`}>
                  {nextStage.step}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                }`}>
                  <NextIcon className="w-4 h-4" />
                </div>
              </div>

              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                {lang === 'EN' ? 'Next Stage →' : 'Tahap Berikutnya →'}
              </span>
              <h5 className={`text-sm font-bold font-heading line-clamp-2 ${
                isLight ? 'text-[#0F172A]' : 'text-white'
              }`}>
                {lang === 'EN' ? nextStage.nameEn : nextStage.nameId}
              </h5>
              <p className="text-[11px] text-slate-400 line-clamp-3 mt-2 leading-relaxed">
                {lang === 'EN' ? nextStage.descEn : nextStage.descId}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-end gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>{lang === 'EN' ? 'Click to view' : 'Klik untuk lihat'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* NN/g Style Centered Pagination Dots (Matching Image 2 exactly) */}
        <div className="flex items-center justify-center gap-2 mt-7">
          {LIFECYCLE_DETAILS.map((stage, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => handleSelectStage(idx)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  isActive
                    ? 'w-7 h-2.5 bg-emerald-500 shadow-sm shadow-emerald-500/30'
                    : isLight
                    ? 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to stage ${stage.step}`}
                title={`Tahap ${stage.step}: ${lang === 'EN' ? stage.nameEn : stage.nameId}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

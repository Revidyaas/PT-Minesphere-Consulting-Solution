import { TeamMember, ProjectItem, ServiceCategory, ExpertiseArea } from '../types';

export const COMPANY_INFO = {
  legalName: 'PT Minesphere Consulting Solution',
  brandName: 'MINESPHERE',
  subBrand: 'KONSULTAN INDONESIA',
  taglineId: 'Lahir dari Ambisi, Tumbuh dengan Inovasi',
  taglineEn: 'Born from Ambition, Growing through Innovation',
  headlineEn: 'ENGINEERING SMARTER MINING FOR A SUSTAINABLE FUTURE.',
  headlineId: 'REKAYASA PERTAMBANGAN CERDAS UNTUK MASA DEPAN BERKELANJUTAN.',
  summaryEn: 'PT Minesphere Consulting Solution provides integrated mining, geological, environmental, and strategic consulting solutions to support responsible and efficient mining projects.',
  summaryId: 'PT Minesphere Consulting Solution menyediakan solusi konsultasi pertambangan terintegrasi, geologi, lingkungan, dan strategis untuk mendukung proyek pertambangan yang efisien dan bertanggung jawab.',
  address: {
    street: 'Jl. Kapten A Rivai, Lorong Muawanah II, No. 4, Bukit Kecil',
    subdistrict: 'Kec. Ilir Barat I',
    city: 'Kota Palembang',
    province: 'Sumatera Selatan',
    country: 'Indonesia'
  },
  phone: '+62851-8606-0812',
  whatsappUrl: 'https://wa.me/6285186060812?text=Halo%20Minesphere%20Consulting%20Solution%2C%20kami%20ingin%20berkonsultasi%20terkait%20layanan%20pertambangan%2Flingkungan.',
  email: 'contact@minesphere.id',
  website: 'www.minesphere.id',
  instagram: '@minesphere.id',
  instagramUrl: 'https://instagram.com/minesphere.id',
  linkedin: 'Minesphere Consulting Solutions',
  linkedinUrl: 'https://www.linkedin.com/company/minesphere-consulting-solutions',
};

export const LIFECYCLE_STAGES = [
  {
    step: '01',
    nameEn: 'Exploration',
    nameId: 'Eksplorasi',
    descEn: 'Resource assessment, geological mapping, drilling supervision, and exploration final reporting.',
    descId: 'Kajian sumber daya, pemetaan geologi, supervisi pengeboran, dan laporan akhir eksplorasi.'
  },
  {
    step: '02',
    nameEn: 'Planning',
    nameId: 'Perencanaan',
    descEn: 'Feasibility studies, mine layout, pit design, stripping ratio analysis, and techno-economic modeling.',
    descId: 'Studi kelayakan, tata letak tambang, desain pit, analisis stripping ratio, dan model tekno-ekonomi.'
  },
  {
    step: '03',
    nameEn: 'Development',
    nameId: 'Pengembangan',
    descEn: 'Haul road & infrastructure engineering, geotechnical characterization, and permitting approvals.',
    descId: 'Rekayasa jalan angkut & infrastruktur, karakterisasi geoteknik, dan persetujuan perizinan.'
  },
  {
    step: '04',
    nameEn: 'Operations',
    nameId: 'Operasi',
    descEn: 'Mine scheduling, drill & blast optimization, water management, and 3-year RKAB document preparation.',
    descId: 'Penjadwalan tambang, optimasi drill & blast, pengelolaan air tambang, dan penyusunan RKAB 3 tahun.'
  },
  {
    step: '05',
    nameEn: 'Environment',
    nameId: 'Lingkungan',
    descEn: 'AMDAL, UKL-UPL, wastewater technical approval (Pertek), emission compliance, and ESG strategy.',
    descId: 'AMDAL, UKL-UPL, persetujuan teknis air limbah & emisi, pemenuhan baku mutu, dan strategi ESG.'
  },
  {
    step: '06',
    nameEn: 'Mine Closure',
    nameId: 'Pasca-Tambang',
    descEn: 'Post-mining planning, reclamation engineering, social PPM sustainability, and ecosystem restoration.',
    descId: 'Rencana pasca-tambang, rekayasa reklamasi lahan, keberlanjutan program PPM, dan pemulihan ekosistem.'
  }
];

export const PARTNERS: TeamMember[] = [
  {
    id: 'm-benny-bayu',
    name: 'M. Benny Bayu R, S.T., M.T.',
    role: 'Partner / Mining Engineering Lead',
    roleId: 'Partner / Rekayasa Pertambangan',
    category: 'partner',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Manajemen & Ekonomi Minerba)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Manajemen & Ekonomi Minerba)',
    skills: [
      'Pit Design & Optimization',
      'Underground Mine Layout Design',
      'Stripping Ratio & Cut-off Grade Analysis',
      'Mine Scheduling',
      'Geotechnical Analysis',
      'Drill & Blast Design',
      'Haul Road & Infrastructure Design'
    ],
    skillsId: [
      'Desain & Optimasi Pit',
      'Tata Letak Tambang Bawah Tanah',
      'Analisis Stripping Ratio & Cut-off Grade',
      'Penjadwalan Tambang (Mine Scheduling)',
      'Analisis Geoteknik',
      'Desain Drill & Blast',
      'Desain Jalan Angkut & Infrastruktur Tambang'
    ]
  },
  {
    id: 'rio-fajri',
    name: 'Rio Fajri, S.T., M.T.',
    role: 'Partner / Mining Economic & Regulatory Lead',
    roleId: 'Partner / Ekonomi & Regulasi Pertambangan',
    category: 'partner',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Manajemen & Ekonomi Minerba)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Manajemen & Ekonomi Minerba)',
    skills: [
      'Mining Permit & Regulation',
      'Mining Economic & Valuation',
      'Investment Risk Management',
      'Mining Strategic Plan',
      'Mining Project Evaluation'
    ],
    skillsId: [
      'Perizinan & Regulasi Pertambangan',
      'Ekonomi & Valuasi Pertambangan',
      'Manajemen Risiko Investasi',
      'Rencana Strategis Pertambangan',
      'Evaluasi Proyek Pertambangan'
    ]
  },
  {
    id: 'miftahurrizka-afrah',
    name: 'Miftahurrizka Afrah, S.T., M.T.',
    role: 'Partner / Environmental Permitting & ESG Lead',
    roleId: 'Partner / Perizinan Lingkungan & ESG',
    category: 'partner',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Lingkungan Tambang)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Lingkungan Tambang)',
    skills: [
      'Environmental Permitting & Compliance',
      'ESG Strategy',
      'Emissions Efficiency',
      'Mine Hydrology',
      'Geochemical Analysis',
      'Reclamation & Post-Mining Planning'
    ],
    skillsId: [
      'Perizinan & Kepatuhan Lingkungan',
      'Strategi ESG (Environmental, Social & Governance)',
      'Efisiensi Emisi',
      'Hidrologi Tambang',
      'Kajian Geokimia',
      'Perencanaan Reklamasi & Pasca-Tambang'
    ]
  },
  {
    id: 'm-daffa-al-hadi',
    name: 'M. Daffa Al Hadi, S.T., M.T.',
    role: 'Partner / Mine Water & Geochemistry Lead',
    roleId: 'Partner / Pengelolaan Air & Geokimia Tambang',
    category: 'partner',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Lingkungan Tambang)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya • S2 Rekayasa Pertambangan, Institut Teknologi Bandung (Lingkungan Tambang)',
    skills: [
      'Mining Environmental Management',
      'Mine Hydrology & Hydrogeology',
      'Geochemical Characterization Acid Mine Drainage',
      'ESG Strategy'
    ],
    skillsId: [
      'Pengelolaan Lingkungan Pertambangan',
      'Hidrologi & Hidrogeologi Tambang',
      'Karakterisasi Geokimia Air Asam Tambang (AAT)',
      'Strategi ESG Pertambangan'
    ]
  }
];

export const ASSOCIATES_AND_SPECIALISTS: TeamMember[] = [
  {
    id: 'ir-bekti-setiyarto',
    name: 'Ir. Bekti Setiyarto',
    role: 'Mining Engineer Associate',
    roleId: 'Mining Engineer Associate',
    category: 'associate',
    credentials: 'Senior Specialist',
    background: 'Mining Engineering Senior Professional',
    backgroundId: 'Praktisi Senior Teknik Pertambangan',
    skills: ['Over 25 years of industry experience in large-scale mining operations and management'],
    skillsId: ['Pengalaman lebih dari 25 tahun di industri dan operasional pertambangan skala besar']
  },
  {
    id: 'ir-sarwo-edy-lewier',
    name: 'Ir. Sarwo Edy Lewier, S.T., M.Ling., C.EIA., IPM., Asean Eng.',
    role: 'Senior Environmental & AMDAL Associate',
    roleId: 'Senior Environmental & AMDAL Associate',
    category: 'associate',
    credentials: 'Bersetifikat KTPA (Ketua Tim Penyusun AMDAL)',
    background: 'Certified KTPA AMDAL Team Leader & ASEAN Engineer',
    backgroundId: 'Ketua Tim Penyusun AMDAL Bersetifikat KTPA & ASEAN Engineer',
    skills: ['AMDAL preparation leadership', 'Environmental impact assessment', 'Environmental regulatory strategy'],
    skillsId: ['Ketua Tim Penyusunan Dokumen AMDAL', 'Analisis Mengenai Dampak Lingkungan', 'Strategi Regulasi Lingkungan']
  },
  {
    id: 'periska-rasma',
    name: 'Periska Rasma, S.T., M.T.',
    role: 'Mining Exploration Associate',
    roleId: 'Mining Exploration Associate',
    category: 'associate',
    background: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['Exploration design', 'Mineral resource estimation', 'Geological modeling'],
    skillsId: ['Desain Eksplorasi', 'Estimasi Sumber Daya Mineral', 'Pemodelan Geologi']
  },
  {
    id: 'jefri-putra',
    name: 'Jefri Putra, S.T., M.T.',
    role: 'Mining Economics Associate',
    roleId: 'Mining Economics Associate',
    category: 'associate',
    background: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['Techno-economic modeling', 'Feasibility study financial analysis', 'Mineral commodity valuation'],
    skillsId: ['Pemodelan Tekno-Ekonomi', 'Analisis Keuangan Studi Kelayakan', 'Valuasi Komoditas Tambang']
  },
  {
    id: 'haris-nur-prasetya',
    name: 'Haris Nur Prasetya, S.T.',
    role: 'Remote Sensing Engineer Associate',
    roleId: 'Remote Sensing Engineer Associate',
    category: 'associate',
    background: 'S1 Teknik Pertambangan, Institut Teknologi Nasional Yogyakarta (ITNY)',
    backgroundId: 'S1 Teknik Pertambangan, Institut Teknologi Nasional Yogyakarta (ITNY)',
    skills: ['Drone survey & photogrammetry', 'Satellite imagery processing', 'Mine GIS analysis'],
    skillsId: ['Survei Drone & Fotogrametri', 'Pengolahan Citra Satelit', 'Analisis GIS Pertambangan']
  },
  {
    id: 'inzagi-s',
    name: 'Inzagi S, S.T., M.T.',
    role: 'Geomechanics Engineer Associate',
    roleId: 'Geomechanics Engineer Associate',
    category: 'associate',
    background: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['Rock mechanics', 'Slope stability numerical modeling', 'Underground support design'],
    skillsId: ['Mekanika Batuan', 'Pemodelan Numerik Kestabilan Lereng', 'Desain Penyangga Tambang']
  },
  {
    id: 'rinaldi',
    name: 'Rinaldi, S.T.',
    role: 'Geotechnical Engineer Associate',
    roleId: 'Geotechnical Engineer Associate',
    category: 'associate',
    background: 'S1 Teknik Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S1 Teknik Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['Geotechnical field investigation', 'Slope monitoring', 'Soil & rock strength evaluation'],
    skillsId: ['Investigasi Lapangan Geoteknik', 'Pemantauan Lereng', 'Evaluasi Kekuatan Tanah & Batuan']
  },
  {
    id: 'fadhil-m',
    name: 'Fadhil M, S.T., M.T.',
    role: 'Mining Policy & Economic Modeling Specialist',
    roleId: 'Spesialis Kebijakan & Pemodelan Ekonomi Tambang',
    category: 'specialist',
    background: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['Mining policy advisory', 'Econometric modeling', 'Mineral royalty and taxation structures'],
    skillsId: ['Advis Kebijakan Pertambangan', 'Pemodelan Ekonometrik', 'Struktur Royalti & Fiskal Minerba']
  },
  {
    id: 'aisyah-salma',
    name: 'Aisyah Salma, S.T., M.T.',
    role: 'Hydrology & Hydrogeology Engineer',
    roleId: 'Insinyur Hidrologi & Hidrogeologi',
    category: 'specialist',
    background: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['Aquifer pump & slug tests', 'Groundwater hydrogeological modeling', 'Mine dewatering systems'],
    skillsId: ['Uji Pemompaan (Pump & Slug Test)', 'Pemodelan Air Tanah Hidrogeologi', 'Sistem Penirisan Tambang']
  },
  {
    id: 'nandita-suri',
    name: 'Nandita Suri K, S.T., M.T.',
    role: 'Mining Environmental Engineer',
    roleId: 'Insinyur Lingkungan Pertambangan',
    category: 'specialist',
    background: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['Environmental baseline monitoring', 'Acid mine drainage neutralization', 'Pollution prevention'],
    skillsId: ['Pemantauan Rona Lingkungan', 'Netralisasi Air Asam Tambang', 'Pencegahan Pencemaran']
  },
  {
    id: 'willy-adhitama',
    name: 'Willy Adhitama, S.T., M.T.',
    role: 'Geotechnical Engineer',
    roleId: 'Insinyur Geoteknik',
    category: 'specialist',
    background: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    backgroundId: 'S2 Rekayasa Pertambangan, Institut Teknologi Bandung (ITB)',
    skills: ['2D/3D limit equilibrium analysis', 'Discontinuity mapping', 'Disposal dump stability'],
    skillsId: ['Analisis Kesetimbangan Batas 2D/3D', 'Pemetaan Diskontinuitas', 'Kestabilan Timbunan Disposal']
  },
  {
    id: 'm-iqbal-khairul',
    name: 'M. Iqbal Khairul S, S.T.',
    role: 'Mining Engineer Associate',
    roleId: 'Mining Engineer Associate',
    category: 'associate',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    skills: ['Fleet productivity optimization', 'Short-term mine planning', 'Site production control'],
    skillsId: ['Optimasi Produktivitas Alat', 'Perencanaan Tambang Jangka Pendek', 'Kontrol Produksi Lapangan']
  },
  {
    id: 'erwin-patra-jenggi',
    name: 'Erwin Patra Jenggi, S.T.',
    role: 'Engineering Blasting Associate',
    roleId: 'Engineering Blasting Associate',
    category: 'associate',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    skills: ['Blast pattern design', 'Vibration & air blast mitigation', 'RKAB Blasting compliance'],
    skillsId: ['Desain Pola Peledakan', 'Mitigasi Getaran & Airblast', 'Penyusunan Rencana RKAB Peledakan']
  },
  {
    id: 'ardiansah-budiman',
    name: 'Ardiansah Budiman, S.T.',
    role: 'Mine Plan Engineer',
    roleId: 'Mine Plan Engineer',
    category: 'specialist',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    skills: ['CAD mine surveying', 'Production tracking', 'Haulage network design'],
    skillsId: ['Survei & Pemetaan CAD Tambang', 'Tracking Produksi', 'Desain Jaringan Pengangkutan']
  },
  {
    id: 'ronald-arbi',
    name: 'Ronald Arbi, S.T.',
    role: 'Geologist',
    roleId: 'Geologist Lapangan',
    category: 'specialist',
    background: 'S1 Teknik Geologi, Universitas Sriwijaya (UNSRI)',
    backgroundId: 'S1 Teknik Geologi, Universitas Sriwijaya (UNSRI)',
    skills: ['Stratigraphic logging', 'Outcrop mapping', 'Geochemical sampling protocols'],
    skillsId: ['Logging Stratigrafi', 'Pemetaan Singkapan', 'Protokol Sampling Geokimia']
  },
  {
    id: 'choirun-nisa',
    name: 'Choirun Nisa, S.T.',
    role: 'Mining Environmental Engineer',
    roleId: 'Insinyur Lingkungan Tambang',
    category: 'specialist',
    background: 'S1 Teknik Lingkungan, Universitas Bakrie',
    backgroundId: 'S1 Teknik Lingkungan, Universitas Bakrie',
    skills: ['Environmental audit reporting', 'Waste management documentation', 'AMDAL/UKL-UPL drafting'],
    skillsId: ['Pelaporan Audit Lingkungan', 'Dokumentasi Pengelolaan Limbah', 'Penyusunan AMDAL & UKL-UPL']
  },
  {
    id: 'dina-maulina',
    name: 'Dina Maulina U, A.md.T',
    role: 'HRGA Coordinator',
    roleId: 'HRGA Koordinator',
    category: 'specialist',
    background: 'D3 Teknik Telekomunikasi, Politeknik Negeri Sriwijaya (POLSRI)',
    backgroundId: 'D3 Teknik Telekomunikasi, Politeknik Negeri Sriwijaya (POLSRI)',
    skills: ['Corporate operations', 'Project administration', 'Resource coordination'],
    skillsId: ['Operasional Korporat', 'Administrasi Proyek', 'Koordinasi Sumber Daya']
  },
  {
    id: 'maya-fadillah',
    name: 'Maya Fadillah, S.T.',
    role: 'HRGA & Technical Operations',
    roleId: 'HRGA & Operasional Teknis',
    category: 'specialist',
    background: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    backgroundId: 'S1 Teknik Pertambangan, Universitas Sriwijaya (UNSRI)',
    skills: ['Technical coordination', 'Project compliance management', 'Stakeholder liaising'],
    skillsId: ['Koordinasi Teknis', 'Manajemen Kepatuhan Proyek', 'Hubungan Pemangku Kepentingan']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pt-megah-karya-baronang',
    companyName: 'PT Megah Karya Baronang',
    location: 'Kecamatan Kapuas Tengah, Kabupaten Kapuas, Kalimantan Tengah',
    commodity: 'Batu Andesit (Batu Hias & Batu Bangunan)',
    areaSize: '25 Hektar',
    scopeOfWork: [
      'Persetujuan Teknis Pemanfaatan Air Limbah (Pertek Air Limbah)'
    ],
    description: {
      EN: 'PT Megah Karya Baronang operates an andesite quarry covering 25 hectares in Central Kapuas. Minesphere was appointed to develop the technical standard document for ground absorption wastewater, calculating rainfall discharge, rainfall intensity, runoff discharge, settling pond (setpond) and absorption pond dimensions with maintenance schedules, emergency preparedness procedures, and Environmental Management System (EMS).',
      ID: 'PT Megah Karya Baronang adalah perusahaan yang bergerak di bidang penggalian batu hias dan batu bangunan (komoditas batu andesit) seluas 25 hektar di Kecamatan Kapuas Tengah. Minesphere dipercaya menyusun dokumen standar teknis air limbah resapan ke tanah penunjang UKL-UPL, meliputi perhitungan debit curah hujan, intensitas hujan, debit limpasan, dimensi setpond & perawatannya, dimensi kolam resapan, penanggulangan keadaan darurat, dan Sistem Manajemen Lingkungan.'
    },
    highlights: [
      'Debit curah hujan & intensitas hujan presisi',
      'Dimensi teknis setpond & kolam resapan',
      'Penanggulangan keadaan darurat & SML'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Wastewater Technical Approval'
  },
  {
    id: 'pt-gading-jaya-baronang',
    companyName: 'PT Gading Jaya Baronang',
    location: 'Kecamatan Kapuas Tengah, Kabupaten Kapuas, Kalimantan Tengah',
    commodity: 'Batu Andesit (Split / Aggregate Tambang)',
    areaSize: '48.7 Hektar',
    scopeOfWork: [
      'Persetujuan Teknis Pemanfaatan Air Limbah',
      'UKL-UPL (Upaya Pengelolaan Lingkungan - Upaya Pemantauan Lingkungan)',
      'RKAB Blasting (Rencana Peledakan)'
    ],
    description: {
      EN: 'PT Gading Jaya Baronang holds a 48.7-hectare andesite concession in Central Kapuas producing aggregates for regional infrastructure. Minesphere executed a multi-scope technical program: engineering groundwater absorption wastewater technical approvals, drafting complete UKL-UPL documentation to secure PPKPLH via the Amdalnet system, and formulating a dedicated RKAB Blasting plan to guarantee safe, regulatory-compliant, and environmentally controlled blasting operations.',
      ID: 'PT Gading Jaya Baronang adalah perusahaan pertambangan batu andesit dengan izin usaha 48,7 hektar di Kapuas Tengah. Minesphere menyelesaikan program teknis menyeluruh: penyusunan standar teknis pemanfaatan air limbah ke tanah, penyusunan dokumen UKL-UPL hingga terbit Persetujuan Pernyataan Kesanggupan Pengelolaan Lingkungan Hidup (PPKPLH) melalui sistem Amdalnet, serta penyusunan RKAB Blasting terpadu untuk memastikan operasi peledakan aman, sesuai regulasi, dan minim risiko lingkungan.'
    },
    highlights: [
      'Persetujuan PPKPLH melalui Amdalnet',
      'Desain standar teknis air limbah resapan',
      'Rencana Peledakan RKAB Blasting komprehensif'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    tag: 'Comprehensive Environmental & Blasting'
  },
  {
    id: 'cv-difa-jaya',
    companyName: 'CV Difa Jaya',
    location: 'Desa Tanjung Kerang, Kec. Babat Supat, Kab. Musi Banyuasin, Sumatera Selatan',
    commodity: 'Tanah Urug & Tanah Liat',
    areaSize: '26.7 Hektar',
    scopeOfWork: [
      'Persetujuan Teknis Pemanfaatan Air Limbah',
      'UKL-UPL (Upaya Pengelolaan Lingkungan - Upaya Pemantauan Lingkungan)'
    ],
    description: {
      EN: 'CV Difa Jaya undertakes extraction of fill material (tanah urug) and clay across a 26.7-hectare site in Musi Banyuasin. Minesphere engineered the wastewater standard documentation featuring sedimentation and ground-absorption pond configurations conforming to Environment & Forestry Ministerial Regulation No. 5/2021, and managed the complete UKL-UPL approval sequence through Amdalnet screening, drafting, defense presentation, and final revision.',
      ID: 'CV Difa Jaya adalah perusahaan penambangan tanah dan tanah liat (Tanah Urug) di lahan seluas 26,7 hektar di Musi Banyuasin. Minesphere menyusun dokumen standar teknis air limbah dengan sistem kolam sedimentasi dan resapan tanah sesuai Peraturan Menteri LHK No. 5 Tahun 2021, serta mendampingi penyusunan dokumen UKL-UPL untuk mendapatkan PPKPLH melalui sistem Amdalnet mulai dari penapisan, penyusunan, pemaparan, hingga perbaikan.'
    },
    highlights: [
      'Kepatuhan Permen LHK No. 5 Tahun 2021',
      'Perhitungan limpasan & kolam sedimentasi',
      'Penerbitan PPKPLH Amdalnet'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Mining Permitting & UKL-UPL'
  },
  {
    id: 'pt-manggala-alam-lestari',
    companyName: 'PT Manggala Alam Lestari',
    location: 'Kec. Bayung Lencir & Tungkal Jaya, Kab. Musi Banyuasin, Sumatera Selatan',
    commodity: 'Batubara (Coal Mining Concession)',
    areaSize: '4.563 Hektar',
    scopeOfWork: [
      'Kajian Geokimia Tambang Batubara',
      'Kajian Hidrologi',
      'Kajian Hidrogeologi'
    ],
    description: {
      EN: 'PT Manggala Alam Lestari holds an extensive coal mining concession of 4,563 hectares in Musi Banyuasin. Minesphere conducted rigorous specialized geochemical characterization (carbon, sulfur, trace elements, potential acid formation, and heavy metal mobility) alongside comprehensive surface hydrology modeling and groundwater hydrogeological analysis to ensure long-term operational sustainability and mine water balance.',
      ID: 'PT Manggala Alam Lestari adalah perusahaan pertambangan batubara dengan IUP seluas 4.563 hektar di Bayung Lencir. Minesphere melakukan kajian geokimia mendalam untuk menganalisis komposisi kimia batubara (karbon, sulfur, abu, potensi pembentukan air asam tambang & pencemaran logam berat), dipadukan dengan kajian hidrologi aliran permukaan untuk mencegah banjir, serta kajian hidrogeologi air tanah untuk mengevaluasi dampak operasional terhadap akuifer.'
    },
    highlights: [
      'Konsesi skala besar 4.563 Hektar',
      'Analisis pembentukan Air Asam Tambang (AAT)',
      'Pemodelan Hidrologi & Akuifer Hidrogeologi'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    tag: 'Large-scale Hydrogeology & Geochemistry'
  }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'mining-consulting',
    title: {
      EN: 'Mining Consulting',
      ID: 'Konsultan Pertambangan'
    },
    subtitle: {
      EN: 'Comprehensive technical, feasibility, and regulatory advisory from mine planning to closure.',
      ID: 'Layanan teknis terpadu, studi kelayakan, hingga kepatuhan regulasi dari hulu hingga hilir.'
    },
    subcategories: [
      {
        num: '01',
        name: {
          EN: 'Feasibility Studies & Technical Reports',
          ID: 'Studi Kelayakan & Dokumen Tambang'
        },
        items: [
          { EN: 'Feasibility Study Documents (Dokumen Studi Kelayakan)', ID: 'Dokumen Studi Kelayakan (FS)' },
          { EN: 'Techno-Economic Evaluation Reports', ID: 'Dokumen Tekno-Ekonomi' },
          { EN: 'Mining Environmental Documents', ID: 'Dokumen Lingkungan Tambang' },
          { EN: 'Exploration Final Reports', ID: 'Laporan Akhir Eksplorasi' },
          { EN: 'Mineral Resource & Reserve Balance Reports', ID: 'Laporan Neraca Sumber Daya dan Cadangan' },
          { EN: 'Production Final Reports', ID: 'Laporan Akhir Produksi' },
          { EN: 'Comprehensive Mining Documentation', ID: 'Dokumen Teknis Pertambangan Terpadu' }
        ]
      },
      {
        num: '02',
        name: {
          EN: 'Mining Technical Studies',
          ID: 'Teknis Pertambangan'
        },
        items: [
          { EN: 'Geotechnical Analysis & Slope Stability Studies', ID: 'Studi Geoteknikal & Kestabilan Lereng' },
          { EN: 'Hydrological & Hydrogeological Studies', ID: 'Studi Hidrologi dan Hidrogeologi' },
          { EN: 'Aquifer Pump & Slug Tests', ID: 'Pump & Slug Test (Uji Pemompaan Akuifer)' },
          { EN: 'Acid Mine Drainage (AMD) Studies & Characterization', ID: 'Studi Air Asam Tambang dan Analisis Geokimia' },
          { EN: 'High-Precision Mine Surveying & Mapping', ID: 'Mine Surveying & Pemetaan Tambang' }
        ]
      },
      {
        num: '03',
        name: {
          EN: 'RKAB Preparation & Compliance',
          ID: 'Penyusunan & Matriks RKAB'
        },
        items: [
          { EN: 'Three-Year Work Plan and Budget Report (Laporan & Rencana Tiga Tahunan)', ID: 'Laporan dan Rencana Tiga Tahunan RKAB' },
          { EN: 'Official Ministry Excel Input Matrix Formulation', ID: 'Excel Matriks Input Resmi Ditjen Minerba' },
          { EN: 'RKAB Blasting Plan & Technical Submissions', ID: 'Rencana Kerja Peledakan (RKAB Blasting)' },
          { EN: 'RKAB Defense & Evaluation Technical Assistance', ID: 'Pendampingan Evaluasi & Pemaparan RKAB' }
        ]
      },
      {
        num: '04',
        name: {
          EN: 'Reclamation & Mine Closure',
          ID: 'Reklamasi & Pasca Tambang'
        },
        items: [
          { EN: 'Five-Year Reclamation Plan Documents', ID: 'Dokumen Rencana Reklamasi 5 Tahunan' },
          { EN: 'Mine Closure Documents (Dokumen Pasca Tambang)', ID: 'Dokumen Rencana Pasca Tambang (RPT)' },
          { EN: 'Technical Feasibility Study of Reclamation Implementation', ID: 'Kajian Teknis Implementasi Reklamasi Lahan' },
          { EN: 'Reclamation Guarantee Calculation (Jaminan Reklamasi)', ID: 'Perhitungan Jaminan Reklamasi & Pasca Tambang' }
        ]
      },
      {
        num: '05',
        name: {
          EN: 'RI-PPM (Community Development)',
          ID: 'RI-PPM (Pengembangan Masyarakat)'
        },
        items: [
          { EN: 'Social & Demographic Baseline Mapping', ID: 'Pemetaan Sosial Masyarakat Lingkar Tambang' },
          { EN: 'Master Plan RI-PPM Program Formulation', ID: 'Penyusunan Program Master Plan RIPPM' },
          { EN: 'Field Program Implementation & Monitoring', ID: 'Pendampingan & Implementasi Program di Lapangan' }
        ]
      },
      {
        num: '06',
        name: {
          EN: 'Mining Permitting & Concession Licensing',
          ID: 'Perizinan Pertambangan'
        },
        items: [
          { EN: 'WIUP (Mining Concession Area) Applications', ID: 'Pengajuan WIUP (Wilayah Izin Usaha Pertambangan)' },
          { EN: 'IUP Exploration & IUP Production Operation Approvals', ID: 'Pengajuan & Perpanjangan IUP Eksplorasi & Operasi Produksi' },
          { EN: 'SIPB, IUJP, & IPP Permitting', ID: 'Pengajuan SIPB, IUJP, dan IPP' },
          { EN: 'MODI Registration & Concession Data Updating', ID: 'Pengajuan & Pembaruan Sistem MODI Ditjen Minerba' },
          { EN: 'Kepala Teknik Tambang (KTT) Ratification Documents', ID: 'Pengesahan Kepala Teknik Tambang (KTT)' },
          { EN: 'Corporate Shareholder Change Approvals for Mining Firms', ID: 'Perubahan Pemegang Saham Perusahaan Pertambangan' }
        ]
      }
    ]
  },
  {
    id: 'environmental-consulting',
    title: {
      EN: 'Environmental Consulting',
      ID: 'Konsultan Lingkungan'
    },
    subtitle: {
      EN: 'Rigorous ecological assessments, environmental permits, and ESG sustainability strategies.',
      ID: 'Kajian lingkungan komprehensif, persetujuan teknis, dan strategi keberlanjutan ESG pertambangan.'
    },
    subcategories: [
      {
        num: '01',
        name: {
          EN: 'Core Environmental Studies & AMDAL',
          ID: 'Studi Lingkungan & AMDAL'
        },
        items: [
          { EN: 'Environmental Feasibility Studies (Studi Kelayakan Lingkungan)', ID: 'Studi Kelayakan Lingkungan Hidup' },
          { EN: 'AMDAL (Environmental Impact Analysis) Led by Certified KTPA', ID: 'AMDAL (Dipimpin Ketua Tim Penyusun Bersetifikat KTPA)' },
          { EN: 'UKL-UPL (Environmental Management & Monitoring Efforts)', ID: 'UKL-UPL dan Pengurusan PPKPLH Amdalnet' },
          { EN: 'SPPL, DELH, & DPLH Environmental Audits', ID: 'Penyusunan Dokumen SPPL, DELH, dan DPLH' },
          { EN: 'Semi-Annual & Annual RKL-RPL Implementation Reports', ID: 'Laporan Pelaksanaan RKL-RPL Semesteran & Tahunan' }
        ]
      },
      {
        num: '02',
        name: {
          EN: 'ESG, LCA & Environmental Performance',
          ID: 'ESG, LCA & Penilaian Kinerja'
        },
        items: [
          { EN: 'Life Cycle Assessment (LCA) Studies', ID: 'Life Cycle Assessment (LCA) Tambang & Industri' },
          { EN: 'PROPER KLHK Compliance & Assistance', ID: 'Pendampingan Program PROPER KLHK' },
          { EN: 'Environmental, Social & Governance (ESG) Strategy Formulation', ID: 'Strategi & Roadmap ESG Korporasi Tambang' },
          { EN: 'Carbon Footprint & Greenhouse Gas (GHG) Reduction Analysis', ID: 'Analisis Efisiensi Emisi & Inventarisasi GRK' }
        ]
      },
      {
        num: '03',
        name: {
          EN: 'Technical Approvals (Persetujuan Teknis & SLO)',
          ID: 'Persetujuan Teknis (Pertek) & SLO'
        },
        items: [
          { EN: 'Hazardous Waste Technical Approval (Pertek Limbah B3)', ID: 'Persetujuan Teknis Pengelolaan Limbah B3' },
          { EN: 'Wastewater Utilization / Disposal Pertek & SLO Certification', ID: 'Persetujuan Teknis Air Limbah & SLO (Sertifikat Laik Operasi)' },
          { EN: 'Emission Technical Approval & SLO Certification', ID: 'Persetujuan Teknis Pemenuhan Baku Mutu Emisi & SLO' },
          { EN: 'Temporary Hazardous Waste Storage (TPS Limbah B3) Specs', ID: 'Rincian Teknis Tempat Penyimpanan Sementara (TPS) Limbah B3' },
          { EN: 'Traffic Impact Analysis (Andalalin) for Mining Haulage', ID: 'Analisis Dampak Lalu Lintas (Andalalin) Jalan Angkut Tambang' }
        ]
      }
    ]
  }
];

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: 'mining-engineering',
    title: {
      EN: 'Mining Engineering',
      ID: 'Rekayasa Pertambangan'
    },
    description: {
      EN: 'End-to-end engineering from pit design and production scheduling to haul road infrastructure and blasting optimization.',
      ID: 'Rekayasa menyeluruh dari desain pit dan penjadwalan produksi hingga infrastruktur jalan angkut dan optimasi peledakan.'
    },
    items: [
      'Mine Planning & Phase Design',
      'Pit Design & Optimization',
      'Mine Production Scheduling',
      'Drill & Blast Engineering',
      'Haul Road & Infrastructure Design',
      'Mining Technical Studies & Review'
    ]
  },
  {
    id: 'geology-geotechnical',
    title: {
      EN: 'Geology & Geotechnical',
      ID: 'Geologi & Geoteknik'
    },
    description: {
      EN: 'In-depth geological investigations, mineral resource modeling, rock mechanics, and numerical slope stability analyses.',
      ID: 'Investigasi geologi mendalam, pemodelan sumber daya mineral, mekanika batuan, dan analisis numerik stabilitas lereng.'
    },
    items: [
      'Geological Assessment & Mapping',
      'Mineral Resource / Reserve Studies',
      'Geotechnical Field Investigation',
      'Geomechanics & Slope Stability',
      'Geochemical Composition Studies'
    ]
  },
  {
    id: 'hydrology-water',
    title: {
      EN: 'Hydrology & Water',
      ID: 'Hidrologi & Pengelolaan Air'
    },
    description: {
      EN: 'Precision water balance studies, catchment hydrology, aquifer slug/pump testing, and acid mine drainage mitigation.',
      ID: 'Kajian neraca air presisi, hidrologi tangkapan air, uji pemompaan akuifer, dan mitigasi pembentukan air asam tambang.'
    },
    items: [
      'Surface Water Hydrology & Runoff',
      'Groundwater Hydrogeological Modeling',
      'Aquifer Pump & Slug Testing',
      'Acid Mine Drainage (AMD) Studies',
      'Mine Dewatering & Settling Ponds'
    ]
  },
  {
    id: 'environment-esg',
    title: {
      EN: 'Environment & ESG',
      ID: 'Lingkungan & ESG'
    },
    description: {
      EN: 'Robust regulatory compliance with AMDAL, UKL-UPL, technical approvals (Pertek), reclamation, and actionable ESG roadmaps.',
      ID: 'Kepatuhan regulasi teruji melalui AMDAL, UKL-UPL, persetujuan teknis (Pertek), rencana reklamasi, dan peta jalan ESG.'
    },
    items: [
      'Environmental Permitting & Compliance',
      'AMDAL Led by KTPA Specialists',
      'UKL-UPL & Amdalnet Submissions',
      'RKL-RPL Monitoring Implementation',
      'ESG Strategy & Emissions Efficiency',
      'Reclamation & Post-Mining Closure',
      'Life Cycle Assessment (LCA) Studies'
    ]
  },
  {
    id: 'economics-regulatory',
    title: {
      EN: 'Mining Economics & Regulatory',
      ID: 'Ekonomi & Regulasi Tambang'
    },
    description: {
      EN: 'Strategic techno-economic feasibility, project valuation, concession licensing, MODI compliance, and 3-Year RKAB formulation.',
      ID: 'Kelayakan tekno-ekonomi strategis, valuasi proyek, perizinan konsesi, pemenuhan MODI, dan penyusunan RKAB 3 tahun.'
    },
    items: [
      'Mining Economics & Techno-Economic Models',
      'Project Feasibility & Valuation',
      'Mining Strategic Planning',
      'Mining Concession Permitting (WIUP/IUP)',
      'RKAB Three-Year Work Plan Formulation',
      'National Mining Regulatory Compliance'
    ]
  }
];

export const CORE_VALUES_MINE = [
  {
    letter: 'M',
    titleEn: 'Modern',
    titleId: 'Modern',
    descEn: 'Adopting state-of-the-art engineering technology and numerical tools for efficient and sustainable mining.',
    descId: 'Mengadopsi teknologi terkini untuk pertambangan yang efisien dan berkelanjutan.'
  },
  {
    letter: 'I',
    titleEn: 'Integrity',
    titleId: 'Integrity',
    descEn: 'Upholding strict professional ethics, engineering transparency, and unwavering regulatory compliance.',
    descId: 'Menjunjung tinggi etika, transparansi, dan kepatuhan terhadap seluruh regulasi yang berlaku.'
  },
  {
    letter: 'N',
    titleEn: 'Nurture',
    titleId: 'Nurture',
    descEn: 'Actively nurturing human resource excellence and fostering empowerment across mining community ecosystems.',
    descId: 'Mendukung pengembangan sumber daya manusia yang kompeten serta memberdayakan komunitas lingkar tambang.'
  },
  {
    letter: 'E',
    titleEn: 'Excellence',
    titleId: 'Excellence',
    descEn: 'Ensuring every engineering solution is crafted with optimal strategy, cost efficiency, and high-standard deliverables.',
    descId: 'Memastikan setiap solusi dirancang dengan strategi optimal, mengutamakan efektivitas biaya dan hasil maksimal.'
  }
];

export const CORE_VALUES_GREEN = [
  {
    letter: 'G',
    titleEn: 'Growth',
    titleId: 'Growth',
    descEn: 'Driving resilient and sustainable economic growth throughout the mining sector.',
    descId: 'Mendorong pertumbuhan yang berkelanjutan dalam industri pertambangan.'
  },
  {
    letter: 'R',
    titleEn: 'Responsibility',
    titleId: 'Responsibility',
    descEn: 'Taking proactive accountability for operational impacts on natural environments and local surroundings.',
    descId: 'Bertanggung jawab penuh atas dampak operasional terhadap kelestarian lingkungan hidup.'
  },
  {
    letter: 'E',
    titleEn: 'Efficiency',
    titleId: 'Efficiency',
    descEn: 'Optimizing resource extraction and energy utilization through innovative engineering methodologies.',
    descId: 'Menggunakan sumber daya secara efektif, hemat biaya, dan inovatif.'
  },
  {
    letter: 'E',
    titleEn: 'Ecology',
    titleId: 'Ecology',
    descEn: 'Uncompromising dedication to ecosystem balance, soil rehabilitation, and biological preservation.',
    descId: 'Berkomitmen menjaga keseimbangan ekosistem dan keanekaragaman hayati.'
  },
  {
    letter: 'N',
    titleEn: 'Networking',
    titleId: 'Networking',
    descEn: 'Building synergy and collaborative alliances across industry leaders, government bodies, and communities.',
    descId: 'Membangun kolaborasi erat dengan seluruh pemangku kepentingan untuk keberlanjutan masa depan.'
  }
];

export const VISION_MISSION = {
  vision: {
    EN: '"To be a strategic and trusted partner in a modern, innovative, and sustainable mining industry."',
    ID: '"Menjadi mitra strategis dan terpercaya dalam industri pertambangan yang modern, inovatif, dan berkelanjutan."'
  },
  missions: [
    {
      num: '01',
      titleEn: 'Integrated Lifecycle Consulting',
      titleId: 'Layanan Konsultasi Terintegrasi',
      descEn: 'Provide integrated consulting services spanning exploration, operations, through post-mining using data-driven methodologies and modern technology.',
      descId: 'Menyediakan layanan konsultasi terintegrasi yang mencakup eksplorasi, operasi, hingga pasca-tambang dengan pendekatan berbasis data dan teknologi terkini.'
    },
    {
      num: '02',
      titleEn: 'Technological Innovation & Precision',
      titleId: 'Inovasi & Teknologi Modern',
      descEn: 'Develop and implement modern engineering innovations to enhance efficiency, analytical accuracy, and overall industry sustainability.',
      descId: 'Mengembangkan dan menerapkan inovasi serta teknologi modern guna meningkatkan efisiensi, akurasi, dan keberlanjutan industri pertambangan.'
    },
    {
      num: '03',
      titleEn: 'Collaborative Multi-Stakeholder Partnerships',
      titleId: 'Kemitraan Jangka Panjang',
      descEn: 'Build enduring relationships with clients, government regulators, local communities, and industry partners driven by mutual sustainable growth.',
      descId: 'Membangun hubungan jangka panjang dengan klien, pemerintah, komunitas, dan mitra industri melalui kolaborasi yang berorientasi pada pertumbuhan bersama.'
    },
    {
      num: '04',
      titleEn: 'Human Capital Excellence',
      titleId: 'Pengembangan SDM Unggul',
      descEn: 'Cultivate a progressive working environment that nurtures innovative, highly qualified, and ethically grounded mining professionals.',
      descId: 'Menciptakan lingkungan kerja yang mendukung pengembangan sumber daya manusia agar lebih unggul, kompeten, dan inovatif.'
    },
    {
      num: '05',
      titleEn: 'Good Mining Practices',
      titleId: 'Prinsip Good Mining Practices',
      descEn: 'Promote responsible mining practices by balancing economic viability, social welfare, and environmental stewardship.',
      descId: 'Mengutamakan praktik pertambangan yang bertanggung jawab dengan menyeimbangkan aspek ekonomi, sosial, dan lingkungan melalui prinsip Good Mining Practices.'
    },
    {
      num: '06',
      titleEn: 'Green Mining & Sustainable Reclamation',
      titleId: 'Solusi Pertambangan Hijau',
      descEn: 'Actively lead sustainability initiatives through green mining solutions, progressive reclamation programs, and ecological restoration.',
      descId: 'Berperan aktif dalam isu-isu keberlanjutan dengan mengedepankan solusi pertambangan hijau dan program reklamasi yang berkelanjutan.'
    }
  ]
};


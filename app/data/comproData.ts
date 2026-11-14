export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  deliverables: string[];
  scopeDetails: string[];
}

export interface MethodologyPhase {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  deliverable: string;
  impact: string;
}

export interface CorporateValue {
  target: string;
  title: string;
  badge: string;
  description: string;
  commitments: string[];
}

export interface BusinessImpact {
  number: string;
  title: string;
  category: string;
  description: string;
  keyMetric: string;
  tacticalAction: string;
}

export interface ClientProfile {
  title: string;
  subtitle: string;
  painPoints: string[];
  ourSolution: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const corporateOverview = {
  name: "KONSULTAN MANAJEMEN RUMAH SAKIT",
  englishName: "Healthcare Management Advisory & Hospital Development Group",
  tagline: "Mitra Strategis Perencanaan, Pembangunan, dan Optimalisasi Tata Kelola Rumah Sakit Modern",
  vision: "Membantu melakukan konsultasi dalam perencanaan, pelaksanaan, pengorganisasian, serta pengawasan manajemen RS secara benar, efisien, dan berkelanjutan.",
  tataNilaiStatement: 'Setiap karyawan Rumah Sakit senantiasa memberikan pelayanan yang terbaik kepada Pelanggan, Perusahaan (Stakeholder), serta Pemilik Perusahaan (Owner).',
  stats: [
    { label: "Kepatuhan Regulasi Kemenkes", value: "100%", detail: "Sesuai standar Permenkes RI & Akreditasi" },
    { label: "Optimalisasi Efisiensi Biaya", value: "35%+", detail: "Pemangkasan kebocoran operasional & OPEX" },
    { label: "Tahapan Roadmap Terstruktur", value: "7 Tahap", detail: "Metodologi teruji dari audit hingga mandiri" },
    { label: "Indeks Kepuasan Pasien", value: "96.4%", detail: "Standar Service Excellence & Patient Safety" },
  ],
};

export const clientProfiles: ClientProfile[] = [
  {
    title: "Pemilik Modal & Investor Baru",
    subtitle: "Ingin mendirikan fasilitas kesehatan tanpa beban teknis medis harian",
    painPoints: [
      "Tidak memiliki latar belakang manajemen perumahsakitan atau kedokteran.",
      "Kekhawatiran pemborosan dana investasi (CAPEX) pada alat medis yang salah spesifikasi.",
      "Regulasi perizinan RS, AMDAL, dan ketenagakerjaan medis yang kompleks dan ketat."
    ],
    ourSolution: "Menjadi perpanjangan tangan strategis investor. Pemilik modal cukup fokus pada fungsi pengawasan dan komunikasi tingkat tinggi melalui pelaporan berkala transparan, sementara seluruh eksekusi teknis dikawal konsultan profesional."
  },
  {
    title: "Direksi & Manajemen Rumah Sakit Eksisting",
    subtitle: "Membutuhkan turnaround manajerial, efisiensi operasional, dan kepatuhan akreditasi",
    painPoints: [
      "Tingginya antrean dan waktu tunggu pasien di poliklinik, IGD, maupun loket farmasi.",
      "Kebocoran pendapatan akibat billing manual dan klaim BPJS Kesehatan yang sering tertunda/pending.",
      "Turnover tenaga kesehatan tinggi dan belum adanya standarisasi service excellence."
    ],
    ourSolution: "Melakukan audit mendalam (diagnostic audit), restrukturisasi SOP, implementasi lean healthcare, optimalisasi utilisasi bed (BOR), serta percepatan bridging SIMRS/RME SatuSehat Kemenkes."
  },
  {
    title: "Yayasan & Institusi Pemilik Klinik",
    subtitle: "Rencana peningkatan status (upgrade) dari Klinik Utama menjadi Rumah Sakit Tipe D / C",
    painPoints: [
      "Keterbatasan pemahaman persyaratan zonasi tata ruang medis dan rasio ketenagaan minimal RS.",
      "Perlunya studi kelayakan pasar untuk memastikan segmentasi pasien yang tepat.",
      "Penyesuaian sistem manajemen manual menuju sistem informasi rumah sakit terpadu."
    ],
    ourSolution: "Penyusunan Feasibility Study komprehensif, pendampingan renovasi tata ruang berstandar PPI (Pencegahan & Pengendalian Infeksi), serta perancangan master plan 5 tahun yang realistis."
  }
];

export const servicesData: ServicePillar[] = [
  {
    id: "operasional-modern",
    number: "01",
    title: "Rancang Bangun Manajemen Operasional RS Modern & Efisien",
    shortTitle: "Manajemen Operasional",
    badge: "Pilar Utama 01",
    tagline: "Membangun pondasi tata kelola rumah sakit yang tangguh, tertib administrasi, dan berstandar internasional.",
    description: "Kami memberikan jasa konsultasi manajemen menyeluruh untuk mendesain, merevisi, dan menata ulang tata kelola operasional rumah sakit. Dari penataan alur klinis hingga sistem evaluasi kinerja karyawan, kami memastikan seluruh mata rantai pelayanan berfungsi secara harmonis dan efisien.",
    keyBenefits: [
      "Penyusunan Standard Operating Procedures (SOP) lengkap seluruh unit medis, penunjang medis, dan non-medis.",
      "Desain Clinical Pathways terstandarisasi untuk memastikan mutu klinis terbaik dengan biaya yang terkendali.",
      "Restrukturisasi bagan organisasi rumah sakit sesuai dengan regulasi terkini Kementerian Kesehatan RI.",
      "Penyusunan kamus kompetensi, uraian tugas (job description), dan Key Performance Indicators (KPI) berkeadilan."
    ],
    deliverables: [
      "Buku Panduan Tata Kelola Rumah Sakit (Hospital Bylaws & Medical Staff Bylaws)",
      "Kompilasi SOP Operasional & Clinical Pathway Seluruh Departemen",
      "Matriks Evaluasi Kinerja Karyawan & Sistem Remunerasi Berbasis Beban Kerja",
      "Standarisasi Alur Pasien (Patient Journey Flowchart) Rawat Jalan, Inap, & Gawat Darurat"
    ],
    scopeDetails: [
      "Unit Pelayanan Medis: IGD, ICU/ICCU/NICU, Kamar Bedah (OK), Rawat Jalan, Rawat Inap.",
      "Unit Penunjang: Laboratorium, Radiologi, Farmasi, Gizi, CSSD, Rekam Medis, Pemulasaraan Jenazah.",
      "Unit Manajerial: Keuangan, SDM, Pemasaran, Logistik Pengadaan, Pemeliharaan Sarana (IPSRS)."
    ]
  },
  {
    id: "inovasi-operasional",
    number: "02",
    title: "Inovasi Manajemen Operasional Siap Terap (Lean Healthcare)",
    shortTitle: "Inovasi & Efisiensi",
    badge: "Pilar Utama 02",
    tagline: "Mentransformasi birokrasi dan inefisiensi menjadi proses pelayanan yang cepat, lincah, dan hemat biaya.",
    description: "Menerapkan inovasi operasional mutakhir berbasis metodologi lean healthcare yang terbukti ampuh memangkas pemborosan waktu, energi, dan biaya. Kami merumuskan solusi praktis yang langsung dapat dioperasionalkan di lapangan tanpa mengorbankan keselamatan dan kenyamanan pasien.",
    keyBenefits: [
      "Pemangkasan drastis waktu tunggu pasien di Poliklinik, IGD, Laboratorium, dan Farmasi.",
      "Optimalisasi utilisasi ruang rawat inap (Bed Occupancy Rate / BOR) dan turn-over rate tempat tidur (TOI).",
      "Peningkatan produktivitas Kamar Operasi (OK) melalui penjadwalan cerdas dan turn-around time yang terukur.",
      "Efisiensi manajemen rantai pasok (supply chain) obat-obatan dan bahan medis habis pakai (BMHP)."
    ],
    deliverables: [
      "Dokumen Analisis Aliran Nilai (Value Stream Mapping) Pelayanan Rumah Sakit",
      "Protokol Fast-Track Pelayanan Gawat Darurat & Poliklinik Eksekutif",
      "Sistem Pemantauan Utilisasi Fasilitas Kritis & Ruang Perawatan Real-Time",
      "Standarisasi Manajemen Logistik & Pengendalian Dead-Stock Farmasi"
    ],
    scopeDetails: [
      "Audit waktu tunggu (time & motion study) per titik sentuh pasien.",
      "Penataan ulang layout tata letak unit untuk meminimalkan perpindahan pasien dan staf yang tidak perlu.",
      "Eliminasi dokumen ganda dan proses persetujuan administratif berulang."
    ]
  },
  {
    id: "teknologi-simrs",
    number: "03",
    title: "Teknologi Informasi, SIMRS & Digital Health Inovatif",
    shortTitle: "Digitalisasi SIMRS & RME",
    badge: "Pilar Utama 03",
    tagline: "Mengintegrasikan seluruh data klinis, keuangan, dan logistik dalam satu platform terpusat yang aman dan patuh regulasi.",
    description: "Teknologi informasi modern adalah tulang punggung efisiensi rumah sakit modern. Kami membantu merencanakan, memilih, dan mengimplementasikan Sistem Informasi Manajemen Rumah Sakit (SIMRS) terintegrasi serta Rekam Medis Elektronik (RME) yang telah bridging resmi dengan platform SatuSehat Kemenkes RI dan BPJS Kesehatan.",
    keyBenefits: [
      "Implementasi Rekam Medis Elektronik (RME) 100% tervalidasi regulasi SatuSehat Kementerian Kesehatan.",
      "Integrasi sistem billing kasir otomatis, menghilangkan kebocoran biaya administrasi dan selisih tarif.",
      "Bridging mulus V-Claim & I-Care BPJS Kesehatan untuk mempercepat proses verifikasi dan klaim tanpa dispute.",
      "Dashboard Eksekutif Direksi & Pemilik: akses pemantauan cash flow, kunjungan pasien, dan BOR kapan saja dari ponsel."
    ],
    deliverables: [
      "Spesifikasi Teknis Kebutuhan Hardware & Server Jaringan Rumah Sakit",
      "Arsitektur Software SIMRS Terintegrasi (Klinis, Farmasi, Keuangan, Kasir, Logistik)",
      "Protokol Keamanan Data Medis & Kepatuhan Perlindungan Data Pribadi (UU PDP)",
      "Modul Pelaporan Otomatis SIRS Online & SP2RS Kementerian Kesehatan"
    ],
    scopeDetails: [
      "Hardware: Perencanaan jaringan LAN/Wi-Fi medis, server lokal/cloud, UPS backup, workstation nakes.",
      "Software: E-Prescription, Electronic Medical Records, E-Billing, Laboratorium & Radiologi PACS Viewer.",
      "Integrasi Eksternal: Platform SatuSehat Kemenkes, BPJS Kesehatan, Asuransi Swasta AdMedika dsb."
    ]
  },
  {
    id: "pendampingan-pelatihan",
    number: "04",
    title: "Pendampingan, Workshop, Hospitality & Patient Safety",
    shortTitle: "SDM & Patient Safety",
    badge: "Pilar Utama 04",
    tagline: "Membentuk budaya kerja prima, komunikasi medis empatik, dan kepatuhan mutlak terhadap keselamatan pasien.",
    description: "Keberhasilan sistem rumah sakit sangat ditentukan oleh kualitas manusia yang menjalankannya. Kami menyelenggarakan program workshop berkala, pelatihan komunikasi terapeutik, service excellence, dan bimbingan keselamatan pasien secara langsung di lapangan hingga rumah sakit meraih predikat Akreditasi Paripurna.",
    keyBenefits: [
      "Pelatihan Service Excellence & Hospitality berstandar hotel bintang lima untuk frontliner dan perawat.",
      "Workshop Public Speaking & Komunikasi Efektif bagi Dokter dan Tenaga Medis guna meminimalkan komplain pasien.",
      "Penerapan 6 Sasaran Keselamatan Pasien (SKP) Kemenkes untuk menjamin 'Zero Medical Negligence'.",
      "Simulasi audit akreditasi mandiri dan pendampingan lapangan menjelang survei akreditasi KARS / LAM-KPRS."
    ],
    deliverables: [
      "Kurikulum Pelatihan Terstruktur Hospital Academy bagi Staf Baru & Existing",
      "Modul Standar Pelayanan Prima (Service Excellence Standard Book)",
      "Sistem Pelaporan Insiden Keselamatan Pasien (IKP) Internal yang Solutif",
      "Sertifikasi Pelatihan Internal dan Portofolio Kesiapan Akreditasi Nasional"
    ],
    scopeDetails: [
      "Pelatihan Hospitality & Complaint Handling bagi bagian pendaftaran, kasir, dan customer care.",
      "Pelatihan Komunikasi SBAR & Terapeutik bagi dokter spesialis, dokter umum, dan perawat ruangan.",
      "Workshop Manajemen Mutu, PPI, K3RS, serta Manajemen Fasilitas & Keselamatan (MFK)."
    ]
  }
];

export const methodologyPhases: MethodologyPhase[] = [
  {
    phase: "01",
    title: "Inventarisasi Masalah & Diagnostic Audit",
    subtitle: "Pemeriksaan Mendalam Seluruh Lini",
    description: "Melakukan audit menyeluruh terhadap kondisi eksisting institusi, mencakup aspek legalitas izin operasional, kesiapan fisik bangunan medis, kecukupan SDM nakes, hingga kesehatan arus kas.",
    keyActivities: [
      "Wawancara mendalam dengan pemilik modal, manajemen, dan kepala instalasi.",
      "Audit kepatuhan regulasi teknis bangunan (tata udara kamar operasi, alur CSSD, limbah medis B3).",
      "Identifikasi titik-titik kebocoran finansial dan hambatan alur pelayanan pasien."
    ],
    deliverable: "Laporan Diagnostic Audit Komprehensif & Matrix Rekomendasi Prioritas Perbaikan.",
    impact: "Memetakan akar permasalahan riil sehingga solusi yang diambil tepat sasaran tanpa asumsi sepihak."
  },
  {
    phase: "02",
    title: "Studi Kelayakan RS (Feasibility Study) Terdokumentasi",
    subtitle: "Kajian Finansial, Pasar & Regulasi Akurat",
    description: "Menyusun studi kelayakan yang valid dan dapat dipertanggungjawabkan di hadapan instansi perizinan, investor, maupun perbankan, memastikan setiap rupiah investasi memiliki kalkulasi yang rasional.",
    keyActivities: [
      "Analisis demografi wilayah, pola penyakit (epidemiologi), dan peta kompetisi rumah sakit sekitar.",
      "Proyeksi kebutuhan tempat tidur, poli spesialis prioritas, dan segmentasi kelas perawatan.",
      "Kajian proyeksi keuangan lengkap: Capital Expenditure (CAPEX), Operational Expenditure (OPEX), Payback Period, Net Present Value (NPV), dan Internal Rate of Return (IRR)."
    ],
    deliverable: "Dokumen Resmi Studi Kelayakan (Feasibility Study) RS Teruji & Terdokumentasi.",
    impact: "Menghindarkan investor dari jebakan investasi salah arah dan mempercepat persetujuan pembiayaan."
  },
  {
    phase: "03",
    title: "Perencanaan Sistem Manajemen Awal & Efisien",
    subtitle: "Blueprint Operasional & Tata Kelola",
    description: "Merancang kerangka tata kelola rumah sakit yang efisien, ramping, dan efektif, menghindari birokrasi gemuk yang membebani kas operasional sejak hari pertama pendirian.",
    keyActivities: [
      "Perancangan struktur organisasi rumah sakit dan rasio ketenagaan optimal.",
      "Penyusunan kebijakan operasional, tarif layanan rasional, dan paket tindakan medis.",
      "Pemilihan teknologi perangkat keras medis (alkes) dan perangkat lunak (SIMRS) sesuai kelas RS."
    ],
    deliverable: "Dokumen Blueprint Sistem Manajemen RS & Pedoman Operasional Awal.",
    impact: "Memberikan kepastian arah operasional bagi jajaran direksi dan manajemen pelaksana."
  },
  {
    phase: "04",
    title: "Realisasi Pelaksanaan Studi Kelayakan di Lapangan",
    subtitle: "Eksekusi Nyata & Pendampingan Konstruksi",
    description: "Mengawal langsung realisasi fisik dan teknis di lapangan agar selaras 100% dengan dokumen studi kelayakan dan regulasi standar keselamatan perumahsakitan.",
    keyActivities: [
      "Supervisi penataan ruang medis (zonasi infeksius vs steril, lebar koridor brankar, tata udara isolasi).",
      "Pendampingan pengadaan dan uji fungsi (commissioning test) alat-alat kesehatan esensial.",
      "Pengawalan proses perizinan operasional rumah sakit ke Dinas Kesehatan dan instansi terkait."
    ],
    deliverable: "Laporan Verifikasi Kesiapan Fisik & Fasilitas Medis Siap Operasional.",
    impact: "Mencegah pembongkaran gedung akibat salah desain alur medis dan memastikan izin terbit tepat waktu."
  },
  {
    phase: "05",
    title: "Penyusunan Master Plan & Aplikasi Sistem",
    subtitle: "Peta Jalan Strategis Jangka Panjang",
    description: "Menyusun Rencana Induk Pengembangan (Master Plan) jangka pendek (1 tahun), menengah (5 tahun), dan panjang (10 tahun) serta menerapkannya secara melekat di dalam sistem manajemen RS.",
    keyActivities: [
      "Pemetaan rencana ekspansi layanan unggulan (Center of Excellence seperti Ibu & Anak, Jantung, Trauma).",
      "Penerapan sistem monitoring target pencapaian revenue dan efisiensi bulanan.",
      "Integrasi master plan ke dalam rencana kerja anggaran tahunan rumah sakit (RKA-RS)."
    ],
    deliverable: "Buku Master Plan Pengembangan Rumah Sakit & Roadmap Implementasi Terukur.",
    impact: "Rumah sakit memiliki panduan pertumbuhan yang jelas, terukur, dan tidak rentan goncangan pasar."
  },
  {
    phase: "06",
    title: "Pengawasan (Supervisory & Controlling) Berkala",
    subtitle: "Pengawalan Kinerja & Kualitas Melekat",
    description: "Melakukan fungsi pengawasan independen dan pendampingan sistem secara berkala untuk memastikan standar mutu tetap terjaga dan efisiensi biaya berjalan konsisten.",
    keyActivities: [
      "Audit berkala indikator mutu klinis nasional (INM) dan indikator mutu unit.",
      "Monitoring performa keuangan, cash flow, dan rasio klaim BPJS bersama dewan direksi.",
      "Evaluasi berkala kepatuhan staf terhadap SOP dan clinical pathway."
    ],
    deliverable: "Laporan Pengawasan Eksekutif Triwulanan Langsung ke Meja Pemilik Modal.",
    impact: "Pemilik modal mendapatkan ketenangan pikiran dengan kontrol penuh atas kepatuhan dan profitabilitas."
  },
  {
    phase: "07",
    title: "Akademi & Sistem Pelatihan Terpadu Karyawan",
    subtitle: "Penguatan Kualitas SDM Medis & Non-Medis",
    description: "Membangun sistem pelatihan berkelanjutan (hospital in-house training) guna membentuk karakter insan rumah sakit yang berdedikasi tinggi, ramah, dan sigap melayani.",
    keyActivities: [
      "Penyusunan modul pelatihan berkala (on-boarding staf baru, refresher service excellence).",
      "Simulasi penanganan kegawatdaruratan, evakuasi bencana, dan penanganan komplain kritis.",
      "Pelatihan kepemimpinan klinis bagi kepala ruang, kepala instalasi, dan manajer departemen."
    ],
    deliverable: "Sistem Kurikulum Pelatihan Karyawan RS Mandiri & Bank Materi Edukasi Terpadu.",
    impact: "Membentuk budaya kerja unggul yang tidak bergantung pada individu tertentu, menciptakan stabilitas layanan."
  }
];

export const corporateValues: CorporateValue[] = [
  {
    target: "Pelanggan (Pasien & Keluarga)",
    title: "Pelayanan Prima & Keselamatan Terdepan",
    badge: "Pilar Nilai 01",
    description: "Pasien dan keluarga bukan sekadar konsumen, melainkan amanah kemanusiaan yang membutuhkan pertolongan medis terbaik, kenyamanan psikologis, dan kepastian informasi.",
    commitments: [
      "Menjamin pelayanan medis yang hangat, empatik, cepat tanggap, dan tanpa diskriminasi.",
      "Penerapan standar keselamatan pasien tertinggi untuk meminimalkan risiko kejadian tidak diharapkan.",
      "Transparansi penuh atas rincian tindakan medis, biaya pengobatan, dan estimasi waktu pemulihan."
    ]
  },
  {
    target: "Perusahaan (Stakeholder & Karyawan)",
    title: "Ekosistem Kerja Harmonis & Profesional",
    badge: "Pilar Nilai 02",
    description: "Menciptakan lingkungan kerja yang sehat, adil, kondusif, dan menghargai dedikasi seluruh insan medis maupun tenaga penunjang sebagai aset terpenting rumah sakit.",
    commitments: [
      "Membangun komunikasi antar-profesi medis yang solid, transparan, dan saling menghormati.",
      "Menyediakan program pengembangan karir, pelatihan berkelanjutan, dan sistem remunerasi yang objektif.",
      "Kepatuhan ketat terhadap norma hukum ketenagakerjaan, K3RS, serta etika kedokteran dan keperawatan."
    ]
  },
  {
    target: "Pemilik Perusahaan (Owner / Investor)",
    title: "Akuntabilitas Finansial & Nilai Aset Berkelanjutan",
    badge: "Pilar Nilai 03",
    description: "Menjaga amanah modal investasi agar bertumbuh secara sehat, menghasilkan imbal hasil yang optimal, dan terlindungi dari segala bentuk kecurangan operasional.",
    commitments: [
      "Penyampaian laporan kinerja keuangan dan operasional secara rutin, jujur, dan akuntabel.",
      "Pengawasan ketat terhadap efisiensi belanja modal (CAPEX) dan pengeluaran operasional (OPEX).",
      "Perlindungan reputasi brand institusi rumah sakit sebagai aset investasi prestisius jangka panjang."
    ]
  }
];

export const businessImpacts: BusinessImpact[] = [
  {
    number: "01",
    title: "Pelaporan Rutin & Transparan Perkembangan RS ke Pemilik",
    category: "Tata Kelola & Transparansi",
    description: "Pemilik modal tidak perlu khawatir kehilangan kendali. Kami merancang sistem pelaporan eksekutif berkala yang merangkum performa finansial, utilisasi tempat tidur, arus kas, hingga kepatuhan regulasi secara ringkas, akurat, dan mudah dipahami.",
    keyMetric: "Laporan Berkala Tepat Waktu",
    tacticalAction: "Penyusunan Executive Dashboard Bulanan & Pertemuan Evaluasi Strategis Rutin."
  },
  {
    number: "02",
    title: "Perencanaan Hardware & Software Tepat Guna",
    category: "Investasi Infrastruktur Cerdas",
    description: "Mencegah jebakan pembelian alat medis berharga miliaran rupiah yang ternyata tidak sesuai dengan kebutuhan demografi lokal atau sulit dioperasikan. Kami memilihkan spesifikasi alat medis dan SIMRS yang tepat guna, efisien, dan memiliki return on asset (ROA) tinggi.",
    keyMetric: "Efisiensi Belanja CAPEX 20-30%",
    tacticalAction: "Analisis Kelayakan Alat Medis (HTA) & Uji Kompatibilitas Sistem SIMRS."
  },
  {
    number: "03",
    title: "Peningkatan Efisiensi Manajemen & Pemangkasan Kebocoran",
    category: "Optimalisasi Operasional",
    description: "Mengidentifikasi dan menutup seluruh celah inefisiensi, mulai dari pemborosan obat di farmasi, tagihan billing yang tidak tertagih, alur kerja nakes yang tumpang tindih, hingga penggunaan utilitas energi yang berlebihan.",
    keyMetric: "Penghematan OPEX hingga 35%",
    tacticalAction: "Audit Formularium Obat, Optimalisasi Roster Shift, dan Kontrol Inventori Real-Time."
  },
  {
    number: "04",
    title: "Maksimasi Tingkat Keuntungan & Pendapatan Berkelanjutan",
    category: "Profitabilitas & Growth",
    description: "Membantu mendiversifikasi sumber pendapatan rumah sakit melalui perancangan layanan unggulan (Center of Excellence), klinik rawat jalan eksekutif, paket medical check-up korporasi, hingga optimalisasi tarif layanan umum dan bridging klaim BPJS tanpa dispute.",
    keyMetric: "Peningkatan Net Margin 15-25%",
    tacticalAction: "Strategi Unit Costing & Penetapan Tarif Layanan Unggulan Kompetitif."
  },
  {
    number: "05",
    title: "Konsultan Service Excellence, Public Speaking & Patient Safety",
    category: "Mutu Layanan & Reputasi",
    description: "Membangun citra rumah sakit sebagai fasilitas kesehatan berkelas dengan tenaga medis yang ramah, komunikatif, dan terampil menyampaikan edukasi medis kepada keluarga pasien. Memastikan keselamatan pasien menjadi standar operasional tanpa kompromi.",
    keyMetric: "Zero Fatal Medical Error",
    tacticalAction: "Workshop Komunikasi Terapeutik Dokter-Perawat & Pembentukan Komite Keselamatan Pasien."
  },
  {
    number: "06",
    title: "Menjaga Kepuasan Pasien Selaku Pelanggan Jangka Panjang",
    category: "Loyalitas & Customer Journey",
    description: "Pasien yang puas akan menjadi duta terbaik rumah sakit. Kami mendesain seluruh titik sentuh pasien (customer touchpoint) agar terasa nyaman, mulai dari kemudahan reservasi, keramahan kasir, hingga program tindak lanjut pasca-rawat (home-care / telemedicine follow-up).",
    keyMetric: "Net Promoter Score (NPS) > 85%",
    tacticalAction: "Survei Kepuasan Pasien Digital Otomatis & Standar Pelayanan Minimal (SPM) Terpadu."
  }
];

export const faqList: FAQItem[] = [
  {
    category: "Pendirian RS",
    question: "Berapa lama proses pembuatan Studi Kelayakan (Feasibility Study) dan Master Plan RS?",
    answer: "Untuk rumah sakit baru (tipe D, C, atau B), proses penyusunan Studi Kelayakan komprehensif umumnya memakan waktu 4 hingga 8 minggu kerja tergantung pada ketersediaan data lahan dan demografi wilayah. Master Plan arsitektur medis dan sistem operasional disusun secara simultan untuk memastikan kesiapan fisik selaras dengan rencana bisnis."
  },
  {
    category: "Investor",
    question: "Saya seorang investor tanpa latar belakang medis. Bagaimana konsultan mengawal investasi saya?",
    answer: "Peran utama kami adalah menjembatani pemilik modal dengan kompleksitas teknis operasional perumahsakitan. Kami mengelola seluruh aspek teknis, mulai dari perizinan, perencanaan alat medis, perekrutan nakes, hingga SOP operasional. Pemilik modal menerima laporan eksekutif berkala yang transparan mengenai performa keuangan dan kepatuhan, sehingga dapat mengambil keputusan strategis tanpa terbebani operasional harian."
  },
  {
    category: "Teknologi",
    question: "Apakah sistem SIMRS yang direkomendasikan sudah terintegrasi SatuSehat Kemenkes dan BPJS?",
    answer: "Ya, 100%. Seluruh arsitektur SIMRS dan Rekam Medis Elektronik (RME) yang kami rekomendasikan dan dampingi telah memenuhi standar variabel data SatuSehat Kementerian Kesehatan RI serta bridging resmi V-Claim dan I-Care BPJS Kesehatan, lengkap dengan protokol perlindungan data pasien sesuai UU PDP."
  },
  {
    category: "Akreditasi",
    question: "Apakah pendampingan mencakup persiapan Akreditasi Rumah Sakit (KARS / LAM-KPRS)?",
    answer: "Tentu. Setiap rancang bangun SOP, clinical pathway, program PPI, K3RS, dan keselamatan pasien (patient safety) yang kami susun telah disesuaikan langsung dengan standar Instrumen Akreditasi Rumah Sakit Kementerian Kesehatan (STARKES). Kami juga menyelenggarakan bimbingan teknis dan mock survey (simulasi audit) sebelum survei resmi."
  },
  {
    category: "RS Eksisting",
    question: "Rumah sakit kami sudah berjalan namun sering merugi dan antrean panjang. Bisakah dibantu?",
    answer: "Sangat bisa. Kami memiliki program Restrukturisasi & Turnaround Manajemen. Langkah awal dimulai dengan Diagnostic Audit untuk mendeteksi akar masalah kebocoran biaya, inefisiensi alur antrean, utilisasi kamar operasi, atau keterlambatan klaim BPJS, diikuti dengan implementasi intervensi lean healthcare terukur."
  },
  {
    category: "Kerjasama",
    question: "Bagaimana mekanisme penugasan konsultan dan apakah ada perjanjian kerahasiaan (NDA)?",
    answer: "Seluruh diskusi awal dan penyerahan data didahului dengan penandatanganan Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) resmi untuk melindungi kerahasiaan rencana investasi dan data keuangan klien. Mekanisme kerjasama dapat berupa Project-Based (untuk studi kelayakan/pendirian) atau Retainer Advisory (pendampingan operasional berkelanjutan)."
  }
];

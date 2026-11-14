export interface ComproSlide {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  imageFileName: string;
  aliasImage: string;
  visi?: string;
  misi?: string[];
  tataNilai?: string;
  points?: string[];
  description?: string;
}

export const comproSlides: ComproSlide[] = [
  {
    id: 1,
    slug: "target-kebutuhan-konsultan",
    title: "SIAPA SAJA YANG MEMBUTUHKAN KONSULTAN MANAJEMEN RUMAH SAKIT ?",
    shortTitle: "Kebutuhan Konsultan",
    category: "Peluang & Investor",
    imageFileName: "WhatsApp Image 2026-11-14 at 11.24.43 (1).jpeg",
    aliasImage: "/compro/slide1_target.jpg",
    points: [
      "Bisnis perumahsakitan saat ini adalah bisnis yang sangat menjanjikan apabila dijalankan dengan benar tanpa melupakan sisi sosialnya.",
      "Bisnis ini sangat menjanjikan bagi para pemilik modal/investor yang berminat tanpa memikirkan tehnis pengelolaan dilapangan. Para pemilik modal tinggal hanya tinggal melakukan komunikasi dan pengawasan bersama konsultan rumah sakit."
    ],
    description: "Panduan strategis bagi pemilik modal dan investor institusi kesehatan untuk mewujudkan rumah sakit yang profitable, patuh regulasi, dan berorientasi sosial."
  },
  {
    id: 2,
    slug: "seberapa-pentingkah-peran",
    title: "SEBERAPA PENTINGKAH PERAN KONSULTAN MANAJEMEN RUMAH SAKIT ?",
    shortTitle: "Peran Konsultan",
    category: "Urgensi & Solusi",
    imageFileName: "WhatsApp Image 2026-11-14 at 11.24.43.jpeg",
    aliasImage: "/compro/slide2_peran.jpg",
    points: [
      "Konsultan RS adalah ahli di bidang perumahsakitan pada semua aspek dari awal baik perencanaan, realisasi dilapangan serta pengawasan dalam Strategi Bisnis RS.",
      "Rumah Sakit didirikan bukan hanya sekedar penyiapan modal dana akan tetapi perencanaan yang benar dan efisien harus diutamakan.",
      "Konsultan RS menganalisa masalah dan menawarkan solusi yang permanen dan terbaik sesuai aturan pemerintah dan keilmuan."
    ],
    description: "Menghubungkan aspek permodalan dengan keahlian manajerial spesifik rumah sakit agar setiap investasi berjalan aman, terarah, dan berkelanjutan."
  },
  {
    id: 3,
    slug: "layanan-dan-ruang-lingkup",
    title: "LAYANAN & RUANG LINGKUP MANAJEMEN OPERASIONAL RUMAH SAKIT",
    shortTitle: "Ruang Lingkup Layanan",
    category: "Layanan Unggulan",
    imageFileName: "WhatsApp Image 2026-11-14 at 11.24.42 (2).jpeg",
    aliasImage: "/compro/slide3_layanan.jpg",
    points: [
      "Memberi jasa konsultasi manajemen, serta membantu membangun manajemen operasional rumah sakit yang modern dan efisien.",
      "Menciptakan inovasi baru di bidang manajemen operasional rumah sakit yang dapat diterapkan dan dioperasionalkan di institusi kesehatan/rumah sakit.",
      "Menciptakan manajemen berupa teknologi informasi yang inovatif bagi institusi kesehatan/rumah sakit.",
      "Pendampingan dan workshop bagi institusi kesehatan/rumah sakit."
    ],
    description: "Pendampingan komprehensif mulai dari rancang bangun sistem operasional modern, digitalisasi SIMRS terintegrasi, hingga workshop peningkatan mutu SDM medis dan non-medis."
  },
  {
    id: 4,
    slug: "visi-dan-misi",
    title: "VISI & MISI",
    shortTitle: "Visi & Misi",
    category: "Arah Strategis",
    imageFileName: "WhatsApp Image 2026-11-14 at 11.24.42.jpeg",
    aliasImage: "/compro/slide4_visi_misi.jpg",
    visi: "Membantu melakukan konsultasi dalam perencanaan, pelaksanaan, pengorganisasian serta pengawasan manajemen RS secara benar dan efisien",
    misi: [
      "Melakukan inventarisasi masalah dan analisa masalah",
      "Melakukan studi kelayakan RS yang terdokumentasi secara benar",
      "Melakukan perencanaan sistim manajemen awal /revisi secara efisien dan efektif",
      "Melaksanakan realisasi pelaksanaan Studi Kelayakan dilapangan",
      "Menyusun master plan dan mengaplikasikan di dalam sistim manajemen RS.",
      "Pengawasan / controling dan pendampingan sistem manajemen RS.",
      "Menyusun sistim pelatihan karyawan RS."
    ],
    description: "Komitmen jangka panjang untuk mengawal setiap tahap pendirian dan optimalisasi rumah sakit melalui metodologi teruji dan pengawasan melekat."
  },
  {
    id: 5,
    slug: "tata-nilai-perusahaan",
    title: "TATA NILAI PERUSAHAAN",
    shortTitle: "Tata Nilai",
    category: "Nilai & Etika",
    imageFileName: "WhatsApp Image 2026-11-14 at 11.24.42 (1).jpeg",
    aliasImage: "/compro/slide5_tata_nilai.jpg",
    tataNilai: 'Tim mempunyai Tata Nilai Perusahaan, yakni "Bahwa setiap karyawan Rumah Sakit senantiasa memberikan pelayanan yang terbaik kepada pelanggan dan Perusahaan (stakeholder) serta Pemilik Perusahaan (Owner)"',
    points: [
      "Pelayanan Prima Kepada Pelanggan (Pasien & Keluarga)",
      "Nilai Tambah Berkelanjutan bagi Perusahaan (Stakeholder)",
      "Akuntabilitas & Return on Investment bagi Pemilik Perusahaan (Owner)"
    ],
    description: "Pondasi budaya kerja profesional yang menyelaraskan keselamatan pasien, kepuasan kerja staf, dan profitabilitas pemilik sarana kesehatan."
  },
  {
    id: 6,
    slug: "kontribusi-untuk-bisnis-rs",
    title: "KONTRIBUSI KONSULTAN MANAJEMEN RUMAH SAKIT UNTUK BISNIS RUMAH SAKIT",
    shortTitle: "Kontribusi Bisnis",
    category: "Dampak & Hasil",
    imageFileName: "WhatsApp Image 2026-11-14 at 11.24.43 (2).jpeg",
    aliasImage: "/compro/slide6_kontribusi.jpg",
    points: [
      "Melaporkan secara rutin perkembangan RS kepada pemilik",
      "Merencanakan serta menyiapkan perangkat keras dan perangkat lunak RS",
      "Meningkatkan efisiensi manajemen RS",
      "Memaksimalkan tingkat keuntungan RS",
      "Konsultan dalam Service Excellent, Public Speaking dan Pasien Safety RS",
      "Menjaga kepuasan pasien selaku Customer"
    ],
    description: "Enam dampak nyata yang kami berikan untuk memastikan kesinambungan finansial, kepuasan pasien, dan tata kelola rumah sakit kelas unggul."
  }
];

"use client";

import React, { useState } from "react";
import {
  HospitalIcon,
  StethoscopeIcon,
  CheckBoxIcon,
  CheckCircle2Icon,
  TrendingUpIcon,
  UsersIcon,
  ShieldCheckIcon,
  LaptopIcon,
  AwardIcon,
  PresentationIcon,
  ActivityIcon,
  BuildingIcon,
  ChartBarIcon,
  ScaleIcon,
  ChevronDownIcon,
  LockIcon,
  SparklesIcon,
  ClockIcon,
  ArrowRightBoldIcon,
} from "./Icons";
import {
  servicesData,
  methodologyPhases,
  corporateValues,
  businessImpacts,
  clientProfiles,
  faqList,
  corporateOverview,
} from "../data/comproData";

export default function InteractiveSections() {
  // Service tabs state
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  // Methodology active phase state
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  // FAQ accordion open state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Interactive Scope Advisor state
  const [advisorFacilityType, setAdvisorFacilityType] = useState<"baru" | "eksisting" | "upgrade">("baru");
  const [advisorBedScale, setAdvisorBedScale] = useState<"kecil" | "menengah" | "besar">("menengah");

  // Consultation form state
  const [clientType, setClientType] = useState("Investor / Pemilik Modal RS");
  const [hospitalScope, setHospitalScope] = useState("Pendirian RS Baru (Studi Kelayakan & Master Plan)");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientNotes, setClientNotes] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Tim Konsultan Manajemen Rumah Sakit, saya ingin berkonsultasi:\n\n*Nama/Instansi:* ${clientName || "-"}\n*Kota/Daerah:* ${clientCity || "-"}\n*Kategori Klien:* ${clientType}\n*Kebutuhan Jasa:* ${hospitalScope}\n*No Kontak:* ${clientPhone || "-"}\n*Catatan Tambahan:* ${clientNotes || "-"}\n\nMohon informasi jadwal diskusi awal dan proposal pendampingan. Terima kasih.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, "_blank");
  };

  const getAdvisorRecommendation = () => {
    if (advisorFacilityType === "baru") {
      return {
        title: "Paket Pendirian RS Komprehensif (End-to-End)",
        milestones: [
          "Penyusunan Studi Kelayakan (Feasibility Study) & Analisis Pasar Medis",
          "Perancangan Master Plan Arsitektur Tata Ruang Medis Sesuai Regulasi Kemenkes",
          "Penyusunan Struktur Organisasi, Tata Kelola (Hospital Bylaws) & Rekrutmen Medis",
          "Pemilihan Spesifikasi Alat Medis (Alkes) & Implementasi SIMRS Terintegrasi",
          "Pendampingan Izin Operasional dan Persiapan Soft Opening RS"
        ],
        estimatedDuration: "4 - 8 Bulan (Tergantung Kesiapan Bangunan)",
        priorityFocus: "Mitigasi Risiko Pemborosan CAPEX & Percepatan Izin Operasional"
      };
    } else if (advisorFacilityType === "eksisting") {
      return {
        title: "Paket Turnaround Operasional & Optimalisasi Margin RS",
        milestones: [
          "Diagnostic Audit & Time-Motion Study Alur Pelayanan Pasien",
          "Penerapan Lean Healthcare untuk Memangkas Antrean Poli & Farmasi",
          "Integrasi Rekam Medis Elektronik (RME) SatuSehat & Bridging BPJS Tanpa Dispute",
          "Restrukturisasi Tarif Layanan & Unit Costing Departemen Unggulan",
          "Bimbingan Teknis Standar Akreditasi KARS / LAM-KPRS Paripurna"
        ],
        estimatedDuration: "3 - 6 Bulan Pendampingan Lapangan",
        priorityFocus: "Peningkatan BOR, Pemangkasan Kebocoran Biaya & Kepuasan Pasien"
      };
    } else {
      return {
        title: "Paket Upgrade Status: Klinik Utama Menjadi RS Tipe D/C",
        milestones: [
          "Gap Analysis Persyaratan Teknis Minimal RS Tipe D/C Kemenkes",
          "Feasibility Study Penambahan Kapasitas Rawat Inap & Kamar Operasi",
          "Penataan Zonasi Sanitasi, Limbah B3, dan Pencegahan Infeksi (PPI)",
          "Migrasi Sistem Informasi Klinik ke SIMRS Terintegrasi Rumah Sakit",
          "Pelatihan Standar Pelayanan Rumah Sakit bagi Dokter & Tenaga Medis"
        ],
        estimatedDuration: "3 - 5 Bulan",
        priorityFocus: "Kepatuhan Zonasi Medis & Kelancaran Peningkatan Izin Operasional"
      };
    }
  };

  const recommendation = getAdvisorRecommendation();

  return (
    <div className="bg-neutral-950 text-neutral-100 divide-y divide-neutral-900">
      
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: URGENSI & PELUANG STRATEGIS INVESTOR & DIREKSI */}
      {/* ------------------------------------------------------------- */}
      <section id="urgensi-bisnis" className="py-24 lg:py-32 relative overflow-hidden bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3.5">
              <span>Peluang &amp; Urgensi Strategis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              Siapa yang Membutuhkan Konsultan Manajemen RS?
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Bisnis perumahsakitan saat ini adalah investasi yang sangat menjanjikan apabila dijalankan dengan benar tanpa melupakan sisi sosial kemanusiaannya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Box 1: Bagi Pemilik Modal / Investor */}
            <div className="lg:col-span-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between hover:border-lime-500/40 transition-all shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 blur-3xl pointer-events-none" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-lime-500/10 text-lime-400 border border-lime-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <TrendingUpIcon className="w-7 h-7" />
                </div>
                
                <span className="text-xs font-extrabold uppercase tracking-widest text-lime-400 block mb-2">
                  Segmen 01 • Investor &amp; Pemilik Modal
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  Investasi Prospektif Tanpa Beban Teknis Operasional Lapangan
                </h3>
                
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  &quot;Bisnis ini sangat menjanjikan bagi para pemilik modal/investor yang berminat tanpa memikirkan teknis pengelolaan di lapangan. Para pemilik modal tinggal melakukan komunikasi dan pengawasan strategis bersama konsultan rumah sakit.&quot;
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">
                      <strong>Proteksi Aset Modal:</strong> Menghindarkan pembelian fasilitas dan alat medis yang over-budget atau tidak tepat guna.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">
                      <strong>Pelaporan Transparan Rutin:</strong> Pemantauan kinerja finansial, cashflow, dan occupancy rate secara berkala tanpa intervensi teknis harian.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">
                      <strong>Keseimbangan Bisnis &amp; Sosial:</strong> Memastikan rumah sakit profitable namun tetap menjunjung tinggi misi kemanusiaan dan kepatuhan perizinan.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-lime-400 font-semibold">
                <span>Manajemen Terarah &amp; Akuntabel</span>
                <span className="text-neutral-500 font-mono">01 / INVESTOR</span>
              </div>
            </div>

            {/* Box 2: Peran Krusial & Urgensi Manajemen Ahli */}
            <div className="lg:col-span-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between hover:border-lime-500/40 transition-all shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <HospitalIcon className="w-7 h-7" />
                </div>
                
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block mb-2">
                  Segmen 02 • Peran Krusial &amp; Urgensi
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  Keahlian Menyeluruh dari Perencanaan Hingga Pengawasan
                </h3>
                
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  &quot;Konsultan RS adalah ahli di bidang perumahsakitan pada semua aspek dari awal, baik perencanaan, realisasi di lapangan, serta pengawasan dalam Strategi Bisnis RS. Rumah Sakit didirikan bukan sekadar penyiapan modal dana, melainkan perencanaan yang benar dan efisien harus diutamakan.&quot;
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">
                      <strong>Solusi Permanen Sesuai Regulasi:</strong> Menganalisa akar masalah dan menawarkan solusi terbaik sesuai aturan pemerintah dan kaidah keilmuan perumahsakitan.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">
                      <strong>Standarisasi Mutu &amp; Patient Safety:</strong> Menjamin keselamatan pasien sebagai pilar utama untuk reputasi institusi jangka panjang.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">
                      <strong>Integrasi Teknologi SIMRS &amp; Nakes:</strong> Menggabungkan keandalan sistem digital dengan etos pelayanan tenaga medis berstandar tinggi.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>Kepatuhan Standar Kemenkes RI</span>
                <span className="text-neutral-500 font-mono">02 / DIREKSI &amp; RS</span>
              </div>
            </div>

          </div>

          {/* 4 Risk Badges Mencegah Kesalahan Fatal */}
          <div className="mt-12 bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 text-center sm:text-left">
              Mitigasi 4 Risiko Fatal yang Sering Terjadi Tanpa Pendampingan Konsultan Ahli:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <span className="text-red-400 font-black text-sm block mb-1">01. Salah Desain Alur Medis</span>
                <p className="text-xs text-neutral-400 leading-snug">
                  Zonasi steril tercampur zonasi infeksius mengakibatkan izin operasional ditolak Dinas Kesehatan.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <span className="text-amber-400 font-black text-sm block mb-1">02. Pembelian Alkes Keliru</span>
                <p className="text-xs text-neutral-400 leading-snug">
                  Membeli alat medis berharga mahal yang utilisasinya sangat rendah karena tidak sesuai pola penyakit lokal.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <span className="text-blue-400 font-black text-sm block mb-1">03. Kegagalan Bridging SIMRS</span>
                <p className="text-xs text-neutral-400 leading-snug">
                  Sistem SIMRS mandek tidak bisa bridging dengan SatuSehat dan BPJS, memicu dispute klaim ratusan juta.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <span className="text-purple-400 font-black text-sm block mb-1">04. Tingginya Komplain Pasien</span>
                <p className="text-xs text-neutral-400 leading-snug">
                  Ketiadaan SOP hospitality dan komunikasi dokter-perawat memicu keluhan viral yang merusak reputasi RS.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: RUANG LINGKUP LAYANAN TERPADU */}
      {/* ------------------------------------------------------------- */}
      <section id="layanan" className="py-24 lg:py-32 relative bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3.5">
              <span>Solusi Manajemen Komprehensif</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              Ruang Lingkup Layanan Konsultasi RS
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Empat pilar intervensi strategis untuk membangun operasional rumah sakit yang modern, efisien, terintegrasi teknologi, dan siap bersaing di era digital.
            </p>
          </div>

          {/* Interactive Service Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {servicesData.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActiveServiceId(svc.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  activeServiceId === svc.id
                    ? "bg-neutral-900 border-lime-500 shadow-xl shadow-lime-500/10"
                    : "bg-neutral-950/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${
                      activeServiceId === svc.id ? "text-lime-400" : "text-neutral-500"
                    }`}>
                      {svc.number}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      activeServiceId === svc.id ? "bg-lime-400" : "bg-neutral-700"
                    }`} />
                  </div>
                  <h3 className={`text-sm font-bold leading-snug ${
                    activeServiceId === svc.id ? "text-white" : "text-neutral-300"
                  }`}>
                    {svc.shortTitle}
                  </h3>
                </div>
                <div className={`mt-3 text-[11px] font-semibold flex items-center gap-1 ${
                  activeServiceId === svc.id ? "text-lime-400" : "text-neutral-500"
                }`}>
                  <span>Pelajari Detail</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Service Showcase Card */}
          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Descriptions and Scope */}
              <div className="lg:w-7/12 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-lime-500/10 text-lime-400 border border-lime-500/25">
                    {activeService.badge}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    Layanan Unggulan
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                  {activeService.title}
                </h3>

                <p className="text-base text-lime-300 font-medium mb-4 leading-relaxed">
                  {activeService.tagline}
                </p>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  {activeService.description}
                </p>

                {/* Scope Coverage */}
                <div className="bg-neutral-950 p-4 sm:p-5 rounded-2xl border border-neutral-800 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-400 block mb-2">
                    Cakupan Area Kerja:
                  </span>
                  <div className="space-y-1.5">
                    {activeService.scopeDetails.map((scope, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <span className="text-lime-400 font-bold shrink-0">•</span>
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                    Manfaat Strategis &amp; Peningkatan Mutu:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeService.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2Icon className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Deliverables Box */}
              <div className="lg:w-5/12 w-full flex flex-col justify-between h-full bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-inner">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Dokumen &amp; Deliverables Nyata
                    </span>
                    <span className="text-[10px] text-lime-400 font-mono">Tersertifikasi</span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                    Setiap pendampingan menghasilkan luaran konkret yang terdokumentasi rapi untuk menjadi aset intelektual dan operasional permanen rumah sakit:
                  </p>

                  <div className="space-y-3">
                    {activeService.deliverables.map((del, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800/80 hover:border-lime-500/30 transition-all flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-md bg-lime-500/10 text-lime-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-neutral-200 leading-snug">
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col gap-3">
                  <a
                    href="#konsultasi"
                    className="w-full py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-bold text-center text-xs sm:text-sm shadow-md transition-all"
                  >
                    Konsultasikan Modul Layanan Ini →
                  </a>
                  <span className="text-[11px] text-neutral-500 text-center">
                    Pendampingan langsung on-site &amp; remote seluruh Indonesia
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: METODOLOGI KERJA 7 TAHAP */}
      {/* ------------------------------------------------------------- */}
      <section id="metodologi" className="py-24 lg:py-32 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3.5">
              <span>Metodologi Teruji</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              7 Tahapan Implementasi Manajemen RS
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Peta jalan pelaksanaan terstruktur dan sistematis, mengawal proses sejak audit awal, studi kelayakan, pengawasan lapangan, hingga rumah sakit beroperasi secara mandiri.
            </p>
          </div>

          {/* Stepper Selector */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 border-b border-neutral-800 scrollbar-thin">
            {methodologyPhases.map((phase, idx) => (
              <button
                key={phase.phase}
                onClick={() => setActivePhaseIndex(idx)}
                className={`px-4 py-3 rounded-xl whitespace-nowrap text-left shrink-0 transition-all flex items-center gap-3 border ${
                  activePhaseIndex === idx
                    ? "bg-lime-500 text-neutral-950 border-lime-400 font-bold shadow-lg"
                    : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800"
                }`}
              >
                <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center ${
                  activePhaseIndex === idx ? "bg-neutral-950 text-lime-400" : "bg-neutral-800 text-neutral-400"
                }`}>
                  {phase.phase}
                </span>
                <span className="text-xs sm:text-sm font-semibold truncate max-w-[160px] sm:max-w-none">
                  {phase.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive */}
          {(() => {
            const currentPhase = methodologyPhases[activePhaseIndex];
            return (
              <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-10 shadow-2xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 rounded-xl bg-lime-500/10 text-lime-400 font-black flex items-center justify-center text-sm border border-lime-500/20">
                        {currentPhase.phase}
                      </span>
                      <span className="text-xs font-mono uppercase text-lime-400 font-bold tracking-wider">
                        Tahap {currentPhase.phase} dari 07
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-snug">
                      {currentPhase.title}
                    </h3>
                    
                    <span className="text-sm font-semibold text-emerald-400 block mb-4">
                      {currentPhase.subtitle}
                    </span>

                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                      {currentPhase.description}
                    </p>

                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                        Aktivitas Kunci di Lapangan:
                      </span>
                      {currentPhase.keyActivities.map((act, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                          <span className="w-5 h-5 rounded-full bg-lime-500/10 text-lime-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-neutral-200">
                            {act}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-4 bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400 block mb-1">
                        Luaran Dokumen (Deliverable):
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                        {currentPhase.deliverable}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                        Dampak Bagi Bisnis RS:
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                        {currentPhase.impact}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between items-center text-xs text-neutral-400 mb-2">
                        <span>Progres Roadmap</span>
                        <span className="text-lime-400 font-mono font-bold">
                          {Math.round(((activePhaseIndex + 1) / 7) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-lime-400 h-full rounded-full transition-all duration-300"
                          style={{ width: `${((activePhaseIndex + 1) / 7) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between gap-2">
                      <button
                        onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
                        disabled={activePhaseIndex === 0}
                        className="px-3 py-2 rounded-lg bg-neutral-800 text-xs font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-700 transition-all flex-1 text-center"
                      >
                        ← Sebelumnya
                      </button>
                      <button
                        onClick={() => setActivePhaseIndex((prev) => Math.min(6, prev + 1))}
                        disabled={activePhaseIndex === 6}
                        className="px-3 py-2 rounded-lg bg-lime-500 text-neutral-950 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-lime-400 transition-all flex-1 text-center"
                      >
                        Selanjutnya →
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: TATA NILAI PERUSAHAAN (THREE-PILLAR EXCELLENCE) */}
      {/* ------------------------------------------------------------- */}
      <section id="tata-nilai" className="py-24 lg:py-32 relative bg-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3.5">
              <span>Filosofi &amp; Budaya Pelayanan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              Tata Nilai Perusahaan
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Komitmen fundamental yang menyelaraskan kepuasan pasien, integritas organisasi, dan keamanan investasi pemilik sarana kesehatan.
            </p>
          </div>

          {/* Highlight Master Quote */}
          <div className="max-w-4xl mx-auto mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#244310] via-[#1a340a] to-[#122406] border border-lime-500/30 shadow-2xl text-center relative overflow-hidden">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-300 bg-black/30 px-3 py-1 rounded-full border border-lime-500/20 inline-block mb-4">
              Pernyataan Nilai Utama (Corporate Value)
            </span>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed italic">
              &quot;Bahwa setiap karyawan Rumah Sakit senantiasa memberikan pelayanan yang terbaik kepada Pelanggan dan Perusahaan (Stakeholder) serta Pemilik Perusahaan (Owner)&quot;
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-lime-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2Icon className="w-4 h-4 text-lime-400" /> Pelayanan Prima (Customer First)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2Icon className="w-4 h-4 text-lime-400" /> Kepedulian Stakeholder
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2Icon className="w-4 h-4 text-lime-400" /> Akuntabilitas Pemilik Modal
              </span>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateValues.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-lime-500/40 transition-all shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-lime-400 bg-lime-500/10 px-2.5 py-1 rounded-md border border-lime-500/20">
                      {val.badge}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {val.target}
                  </h3>
                  <span className="text-xs font-semibold text-lime-300 block mb-3">
                    {val.title}
                  </span>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {val.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-neutral-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Komitmen Nyata:
                    </span>
                    {val.commitments.map((cmt, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="text-lime-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{cmt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800 text-[11px] text-neutral-500 font-mono">
                  Standar Etika Layanan Kesehatan
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: KONTRIBUSI STRATEGIS UNTUK BISNIS RUMAH SAKIT */}
      {/* ------------------------------------------------------------- */}
      <section id="dampak-bisnis" className="py-24 lg:py-32 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3.5">
              <span>Hasil Terukur &amp; Dampak Nyata</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              6 Kontribusi Konsultan untuk Bisnis RS
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Mewujudkan akselerasi performa keuangan, efisiensi operasional harian, kepatuhan hukum, dan loyalitas pasien secara berkesinambungan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessImpacts.map((impact) => (
              <div
                key={impact.number}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/40 transition-all flex flex-col justify-between shadow-lg relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-lime-400 font-mono">
                      {impact.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-700">
                      {impact.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {impact.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {impact.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Target Dampak:</span>
                    <span className="font-bold text-lime-400">{impact.keyMetric}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950 text-[11px] text-neutral-300 border border-neutral-800/80">
                    <span className="text-lime-300 font-semibold block mb-0.5">Aksi Taktis:</span>
                    {impact.tacticalAction}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: INTERACTIVE SCOPE ADVISOR (ESTIMASI KEBUTUHAN) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 relative bg-neutral-900/40 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20 inline-block mb-3">
              Kalkulator Rekomendasi Jasa
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
              Konsultasi Disesuaikan dengan Tahapan Rumah Sakit Anda
            </h2>
            <p className="mt-2 text-neutral-400 text-xs sm:text-sm">
              Pilih karakteristik fasilitas Anda untuk melihat rangkuman fokus modul konsultasi dan tahapan kerja awal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Controls */}
            <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-3">
                  1. Status &amp; Kondisi Fasilitas:
                </label>
                <div className="space-y-2 mb-6">
                  {[
                    { id: "baru", label: "Pendirian RS Baru (Dari Nol)", desc: "Mulai dari tanah, perizinan, dan studi kelayakan" },
                    { id: "eksisting", label: "Rumah Sakit Berjalan (Eksisting)", desc: "Restrukturisasi, efisiensi biaya & bridging digital" },
                    { id: "upgrade", label: "Peningkatan Klinik ke RS (Upgrade)", desc: "Klinik Pratama/Utama menuju RS Tipe D/C" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAdvisorFacilityType(item.id as any)}
                      className={`w-full p-3 rounded-xl text-left transition-all border flex items-start gap-3 ${
                        advisorFacilityType === item.id
                          ? "bg-lime-500/10 border-lime-400 text-white"
                          : "bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                        advisorFacilityType === item.id ? "border-lime-400" : "border-neutral-600"
                      }`}>
                        {advisorFacilityType === item.id && <div className="w-2 h-2 rounded-full bg-lime-400" />}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                        <div className="text-[11px] text-neutral-400">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-3">
                  2. Kapasitas / Skala Fasilitas:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "kecil", label: "< 50 Bed", sub: "Tipe D / Klinik" },
                    { id: "menengah", label: "50 - 150 Bed", sub: "Tipe C" },
                    { id: "besar", label: "> 150 Bed", sub: "Tipe B / A" },
                  ].map((scale) => (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setAdvisorBedScale(scale.id as any)}
                      className={`p-2.5 rounded-xl text-center border transition-all ${
                        advisorBedScale === scale.id
                          ? "bg-lime-500 text-neutral-950 font-bold border-lime-400"
                          : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                      }`}
                    >
                      <div className="text-xs font-bold">{scale.label}</div>
                      <div className="text-[10px] opacity-80">{scale.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
                <LockIcon className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Seluruh estimasi bersifat adaptif sesuai regulasi wilayah.</span>
              </div>
            </div>

            {/* Right Recommendation Output */}
            <div className="lg:col-span-7 bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-lime-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/5 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                  <span className="text-xs font-mono uppercase text-lime-400 font-bold">
                    Rekomendasi Paket Konsultasi
                  </span>
                  <span className="text-xs text-neutral-400">
                    Durasi: <strong>{recommendation.estimatedDuration}</strong>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  {recommendation.title}
                </h3>

                <div className="inline-block bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-md text-xs font-semibold text-lime-300 mb-5">
                  Fokus Utama: {recommendation.priorityFocus}
                </div>

                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    Tahapan Milestone yang Disarankan:
                  </span>
                  {recommendation.milestones.map((m, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2Icon className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Siap mendiskusikan TOR &amp; Proposal resmi.
                </span>
                <a
                  href="#konsultasi"
                  className="px-6 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 text-xs sm:text-sm font-bold shadow-md transition-all shrink-0"
                >
                  Ajukan Proposal Paket Ini →
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: FAQ (PERTANYAAN UMUM) */}
      {/* ------------------------------------------------------------- */}
      <section id="faq" className="py-24 lg:py-32 relative bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3.5">
              <span>Tanya Jawab Kunci</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base">
              Jawaban transparan atas pertanyaan utama pemilik modal, yayasan, dan jajaran direksi rumah sakit.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-lime-400 bg-lime-500/10 px-2.5 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white">
                        {item.question}
                      </span>
                    </div>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-neutral-400 transition-transform ${
                      isOpen ? "rotate-180 text-lime-400" : ""
                    }`}>
                      <ChevronDownIcon className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 bg-neutral-950/40">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: FORMULIR KONSULTASI & INISIASI PROYEK RS */}
      {/* ------------------------------------------------------------- */}
      <section id="konsultasi" className="py-24 lg:py-32 relative bg-neutral-900/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 blur-[100px] pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
                Inisiasi Kerjasama &amp; Penjadwalan
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                Konsultasi Perencanaan &amp; Manajemen RS
              </h2>
              <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Silakan lengkapi formulir di bawah ini untuk memulai sesi diskusi awal. Diskusi bersifat konfidensial dan langsung terhubung dengan tim konsultan senior kami via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Profil Anda / Institusi
                  </label>
                  <select
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
                  >
                    <option value="Investor / Pemilik Modal RS">Investor / Pemilik Modal Rumah Sakit</option>
                    <option value="Direktur / Manajemen RS Eksisting">Direktur / Manajemen Rumah Sakit Eksisting</option>
                    <option value="Yayasan / Korporasi Kesehatan">Yayasan / Korporasi Kesehatan</option>
                    <option value="Pemilik Klinik / Rencana Naik Kelas RS">Pemilik Klinik / Rencana Naik Kelas ke RS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Ruang Lingkup Kebutuhan Jasa
                  </label>
                  <select
                    value={hospitalScope}
                    onChange={(e) => setHospitalScope(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
                  >
                    <option value="Pendirian RS Baru (Studi Kelayakan & Master Plan)">
                      Pendirian RS Baru (Studi Kelayakan &amp; Master Plan)
                    </option>
                    <option value="Restrukturisasi & Peningkatan Efisiensi Operasional RS">
                      Restrukturisasi &amp; Peningkatan Efisiensi Operasional RS
                    </option>
                    <option value="Implementasi Hardware & Software SIMRS / RME SatuSehat">
                      Implementasi Hardware &amp; Software SIMRS / RME SatuSehat
                    </option>
                    <option value="Workshop Service Excellence, SDM & Pasien Safety">
                      Workshop Service Excellence, SDM &amp; Pasien Safety
                    </option>
                    <option value="Pendampingan Persiapan Akreditasi KARS / LAM-KPRS">
                      Pendampingan Persiapan Akreditasi KARS / LAM-KPRS
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Hendra (PT Medika Sejahtera)"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Kota / Wilayah Lokasi RS
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Surabaya / Jakarta / Balikpapan / Makassar"
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Nomor WhatsApp / Telepon Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Catatan Khusus / Ringkasan Kebutuhan (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan kapasitas tempat tidur, target waktu pembukaan RS, atau kendala spesifik yang sedang dihadapi..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
                  />
                </div>

              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-neutral-400 text-center sm:text-left">
                  <LockIcon className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>
                    Seluruh informasi dijamin kerahasiaannya dengan standar <strong>Non-Disclosure Agreement (NDA)</strong>.
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-bold text-sm shadow-xl shadow-lime-500/20 transition-all shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Kirim via WhatsApp Langsung</span>
                  <ArrowRightBoldIcon className="w-4 h-4 text-neutral-950" />
                </button>
              </div>
            </form>

          </div>

        </div>
      </section>

    </div>
  );
}

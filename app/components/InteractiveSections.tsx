"use client";

import React, { useState } from "react";
import Image from "next/image";
import { comproSlides } from "../data/comproData";
import {
  HospitalIcon,
  CheckBoxIcon,
  TrendingUpIcon,
  UsersIcon,
  ShieldCheckIcon,
  LaptopIcon,
  AwardIcon,
  PresentationIcon,
  DiagonalSketchLines,
} from "./Icons";

export default function InteractiveSections() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  // Form state for consultation generator
  const [clientType, setClientType] = useState("Investor / Pemilik Modal");
  const [hospitalScope, setHospitalScope] = useState("Pendirian RS Baru (Studi Kelayakan & Master Plan)");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCity, setClientCity] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Tim Konsultan Manajemen Rumah Sakit, saya ingin berkonsultasi:\n\n*Nama:* ${clientName || "-"}\n*Kota/Daerah:* ${clientCity || "-"}\n*Kategori:* ${clientType}\n*Kebutuhan Jasa:* ${hospitalScope}\n*No Kontak:* ${clientPhone || "-"}\n\nMohon informasi jadwal diskusi dan konsultasi lebih lanjut. Terima kasih!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-neutral-950 text-neutral-100 divide-y divide-neutral-900">
      
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: SIAPA SAJA YANG MEMBUTUHKAN KONSULTAN MANAJEMEN RS */}
      {/* (Slide 1) */}
      {/* ------------------------------------------------------------- */}
      <section id="urgensi" className="py-20 lg:py-28 relative overflow-hidden bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Slide 1 • Target & Kebutuhan Investor
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              SIAPA SAJA YANG MEMBUTUHKAN KONSULTAN MANAJEMEN RUMAH SAKIT ?
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Menjembatani visi investasi pemilik modal dengan keahlian teknis operasional perumahsakitan modern.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column: Modern Hospital */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
                <Image
                  src="/compro/slide1_target.jpg"
                  alt="Modern Hospital Architecture"
                  fill
                  className="object-cover object-left group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-md p-3 rounded-xl border border-neutral-700">
                    <span className="text-xs font-bold text-lime-400 uppercase tracking-wide block">
                      Aset Investasi Kesehatan
                    </span>
                    <p className="text-xs text-neutral-300 mt-1">
                      Perpaduan fasilitas kesehatan modern dan manajemen tata kelola berbasis hasil.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Points: Direct from Slide 1 with Arrows */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Point 1 Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/40 transition-all shadow-lg flex items-start gap-4">
                <span className="text-2xl sm:text-3xl font-black text-lime-400 leading-none shrink-0 mt-1">⇒</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Bisnis Berkelanjutan dengan Nilai Sosial Tinggi
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    &quot;Bisnis perumahsakitan saat ini adalah bisnis yang sangat menjanjikan apabila dijalankan dengan benar tanpa melupakan sisi sosialnya.&quot;
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-lime-400">
                    <ShieldCheckIcon className="w-4 h-4" />
                    Keseimbangan Profitabilitas & Tanggung Jawab Sosial Kesehatan
                  </div>
                </div>
              </div>

              {/* Point 2 Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/40 transition-all shadow-lg flex items-start gap-4">
                <span className="text-2xl sm:text-3xl font-black text-lime-400 leading-none shrink-0 mt-1">⇒</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Kenyamanan & Kepastian Bagi Pemilik Modal / Investor
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    &quot;Bisnis ini sangat menjanjikan bagi para pemilik modal/investor yang berminat tanpa memikirkan tehnis pengelolaan dilapangan. Para pemilik modal tinggal hanya tinggal melakukan komunikasi dan pengawasan bersama konsultan rumah sakit.&quot;
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-lime-400">
                    <TrendingUpIcon className="w-4 h-4" />
                    Pengawasan Transparan &amp; Pelaporan Berkala Rutin
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: SEBERAPA PENTINGKAH PERAN KONSULTAN MANAJEMEN RS */}
      {/* (Slide 2) */}
      {/* ------------------------------------------------------------- */}
      <section id="peran" className="py-20 lg:py-28 relative bg-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Slide 2 • Urgensi Konsultan RS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              SEBERAPA PENTINGKAH PERAN KONSULTAN MANAJEMEN RUMAH SAKIT ?
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Menghilangkan risiko kesalahan fatal dalam pendirian dan pengelolaan sarana kesehatan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-lime-500/50 transition-all shadow-md group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckBoxIcon className="w-7 h-7 text-lime-400" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-lime-400 mb-2">Pilar 01</div>
                <h3 className="text-lg font-bold text-white mb-3">Keahlian Menyeluruh Semua Aspek</h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  &quot;Konsultan RS adalah ahli di bidang perumahsakitan pada semua aspek dari awal baik perencanaan, realisasi dilapangan serta pengawasan dalam Strategi Bisnis RS.&quot;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 font-medium">
                Meliputi klinis, non-klinis, regulasi, dan akreditasi KARS/JCI.
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-lime-500/50 transition-all shadow-md group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckBoxIcon className="w-7 h-7 text-lime-400" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-lime-400 mb-2">Pilar 02</div>
                <h3 className="text-lg font-bold text-white mb-3">Perencanaan Matang & Efisien</h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  &quot;Rumah Sakit didirikan bukan hanya sekedar penyiapan modal dana akan tetapi perencanaan yang benar dan efisien harus diutamakan.&quot;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 font-medium">
                Mencegah pemborosan CAPEX & OPEX akibat alur pelayanan yang keliru.
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-lime-500/50 transition-all shadow-md group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckBoxIcon className="w-7 h-7 text-lime-400" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-lime-400 mb-2">Pilar 03</div>
                <h3 className="text-lg font-bold text-white mb-3">Solusi Permanen Sesuai Regulasi</h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  &quot;Konsultan RS menganalisa masalah dan menawarkan solusi yang permanen dan terbaik sesuai aturan pemerintah dan keilmuan.&quot;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 font-medium">
                Patuh regulasi Kementerian Kesehatan & standar keselamatan pasien.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: LAYANAN & RUANG LINGKUP JASA */}
      {/* (Slide 3) */}
      {/* ------------------------------------------------------------- */}
      <section id="layanan" className="py-20 lg:py-28 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Slide 3 • Ruang Lingkup Layanan
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              LAYANAN KONSULTASI &amp; MANAJEMEN OPERASIONAL RUMAH SAKIT
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Empat pilar intervensi strategis untuk membangun operasional modern, terintegrasi teknologi, dan siap bersaing.
            </p>
          </div>

          {/* Feature Showcase Grid replicating Slide 3 points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#46731d] transition-all relative overflow-hidden group shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#46731d]/20 text-lime-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <HospitalIcon className="w-7 h-7 text-lime-400" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-lime-400 uppercase tracking-wider mb-2">
                <span>☑ Layanan Utama 01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Membangun Manajemen Operasional RS Modern & Efisien
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                &quot;Memberi jasa konsultasi manajemen, serta membantu membangun manajemen operasional rumah sakit yang modern dan efisien.&quot;
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Penyusunan SOP, Alur Pelayanan (Clinical Pathways), dan KPI RS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Restrukturisasi organisasi dan job description tenaga medis &amp; non-medis
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#46731d] transition-all relative overflow-hidden group shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#46731d]/20 text-lime-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <TrendingUpIcon className="w-7 h-7 text-lime-400" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-lime-400 uppercase tracking-wider mb-2">
                <span>☑ Layanan Utama 02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Inovasi Baru Manajemen Operasional Siap Terap
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                &quot;Menciptakan inovasi baru di bidang manajemen operasional rumah sakit yang dapat diterapkan dan dioperasionalkan di institusi kesehatan/rumah sakit.&quot;
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Metode lean healthcare untuk pemangkasan waktu tunggu pasien
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Optimalisasi utilisasi ruang rawat inap, IGD, dan kamar operasi (OK)
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#46731d] transition-all relative overflow-hidden group shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#46731d]/20 text-lime-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <LaptopIcon className="w-7 h-7 text-lime-400" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-lime-400 uppercase tracking-wider mb-2">
                <span>☑ Layanan Utama 03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Teknologi Informasi &amp; SIMRS Inovatif
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                &quot;Menciptakan manajemen berupa teknologi informasi yang inovatif bagi institusi kesehatan/rumah sakit.&quot;
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Integrasi Rekam Medis Elektronik (RME) &amp; SatuSehat Kemenkes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Sistem billing, bridging BPJS Kesehatan, dan inventory farmasi otomatis
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#46731d] transition-all relative overflow-hidden group shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#46731d]/20 text-lime-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <PresentationIcon className="w-7 h-7 text-lime-400" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-lime-400 uppercase tracking-wider mb-2">
                <span>☑ Layanan Utama 04</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Pendampingan &amp; Workshop Berkala Bagi Nakes &amp; Staf
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                &quot;Pendampingan dan workshop bagi institusi kesehatan/rumah sakit.&quot;
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Workshop Service Excellence, Komunikasi Efektif &amp; Public Speaking RS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Pelatihan Patient Safety, Mutu Klinis, dan Simulasi Akreditasi
                </li>
              </ul>
            </div>

          </div>

          {/* Banner Olive Style reference */}
          <div className="mt-12 bg-[#46731d] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-lime-200 mb-1">
                Jaminan Kualitas Konsultasi
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Solusi Manajemen Terstruktur Dari Awal Hingga Rumah Sakit Mandiri
              </h3>
              <p className="text-sm text-lime-100 mt-1 max-w-2xl">
                Pendampingan langsung di lapangan oleh tim konsultan senior dengan rekam jejak puluhan RS di seluruh Indonesia.
              </p>
            </div>
            <a
              href="#konsultasi"
              className="px-6 py-3 rounded-xl bg-white text-[#2a4d0f] font-black hover:bg-lime-100 transition-all text-sm shrink-0 shadow-md"
            >
              Ajukan Diskusi Layanan
            </a>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: VISI & MISI */}
      {/* (Slide 4) */}
      {/* ------------------------------------------------------------- */}
      <section id="visi-misi" className="py-20 lg:py-28 relative bg-neutral-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Olive Badge Header like Slide 4 */}
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Slide 4 • Arah Strategis
            </div>
            <div className="bg-[#46731d] text-white px-8 sm:px-12 py-2 text-xl sm:text-3xl font-black tracking-wider uppercase shadow-xl border border-[#395e17] rounded-md">
              VISI &amp; MISI
            </div>
          </div>

          {/* Visi Showcase Box */}
          <div className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-lime-500/30 shadow-2xl relative">
            <div className="text-xs font-bold uppercase tracking-wider text-lime-400 mb-2">VISI UTAMA :</div>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed text-center">
              &quot;Membantu melakukan konsultasi dalam perencanaan, pelaksanaan, pengorganisasian serta pengawasan manajemen RS secara benar dan efisien&quot;
            </p>
          </div>

          {/* 7 Misi Roadmap */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-800">
              <span className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                7 MISI PELAKSANAAN (ROADMAP KERJA) :
              </span>
              <span className="text-xs text-lime-400 font-mono">Tahap 01 s/d 07</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { no: "01", text: "Melakukan inventarisasi masalah dan analisa masalah", desc: "Audit awal menyeluruh terhadap seluruh kesiapan legalitas, fisik, SDM, dan keuangan." },
                { no: "02", text: "Melakukan studi kelayakan RS yang terdokumentasi secara benar", desc: "Feasibility Study komprehensif mencakup demografi, proyeksi pasien, dan analisa finansial." },
                { no: "03", text: "Melakukan perencanaan sistim manajemen awal /revisi secara efisien dan efektif", desc: "Penyusunan tata kelola baru atau perbaikan sistem eksisting agar efisien." },
                { no: "04", text: "Melaksanakan realisasi pelaksanaan Studi Kelayakan dilapangan", desc: "Eksekusi langsung di lapangan memastikan hasil studi kelayakan terwujud nyata." },
                { no: "05", text: "Menyusun master plan dan mengaplikasikan di dalam sistim manajemen RS.", desc: "Perancangan rencana induk jangka pendek, menengah, dan panjang secara sistemik." },
                { no: "06", text: "Pengawasan / controling dan pendampingan sistem manajemen RS.", desc: "Monitoring berkala untuk menjaga standar mutu, kepatuhan, dan efisiensi anggaran." },
                { no: "07", text: "Menyusun sistim pelatihan karyawan RS.", desc: "Kurikulum terpadu untuk meningkatkan kompetensi, hospitality, dan etos kerja seluruh staf." },
              ].map((misi) => (
                <div
                  key={misi.no}
                  className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#46731d] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md">
                    {misi.no}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-lime-400 text-xs font-semibold mb-1">
                      <span>☑</span>
                      <span>Misi Terarah</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                      {misi.text}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {misi.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: TATA NILAI PERUSAHAAN */}
      {/* (Slide 5) */}
      {/* ------------------------------------------------------------- */}
      <section id="tata-nilai" className="py-20 lg:py-28 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Slide 5 • Filosofi & Nilai Kerja
            </div>
            
            {/* Header styled with vibrant blue shadow matching slide 5 */}
            <h2 className="text-3xl sm:text-5xl font-black text-blue-500 tracking-tight uppercase drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]">
              TATA NILAI PERUSAHAAN
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base">
              Pondasi etika dan dedikasi dalam setiap pelayanan kesehatan.
            </p>
          </div>

          {/* Central Olive Green Card as shown in Slide 5 */}
          <div className="max-w-4xl mx-auto bg-[#46731d] text-white p-8 sm:p-14 rounded-2xl shadow-2xl border border-[#395e17] relative">
            <div className="absolute top-4 right-4 text-xs font-mono uppercase tracking-widest text-lime-200 bg-[#355815] px-3 py-1 rounded">
              Core Corporate Value
            </div>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-relaxed text-center sm:text-left">
              Tim mempunyai Tata Nilai Perusahaan, yakni:
            </p>
            <p className="mt-4 text-base sm:text-xl md:text-2xl font-bold leading-relaxed text-lime-100 italic bg-black/20 p-5 rounded-xl border border-white/10">
              &quot;Bahwa setiap karyawan Rumah Sakit senantiasa memberikan pelayanan yang terbaik kepada pelanggan dan Perusahaan (stakeholder) serta Pemilik Perusahaan (Owner)&quot;
            </p>

            {/* 3 Pillars breakdown */}
            <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-xs font-bold uppercase text-lime-300 mb-1">01. Pelanggan</div>
                <div className="text-xs text-neutral-100">Pasien &amp; keluarga mendapatkan perawatan ramah, aman, dan memuaskan.</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-xs font-bold uppercase text-lime-300 mb-1">02. Perusahaan</div>
                <div className="text-xs text-neutral-100">Seluruh stakeholder memiliki lingkungan kerja yang profesional &amp; kondusif.</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-xs font-bold uppercase text-lime-300 mb-1">03. Pemilik (Owner)</div>
                <div className="text-xs text-neutral-100">Investasi bertumbuh secara sehat, akuntabel, dan berkesinambungan.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: KONTRIBUSI UNTUK BISNIS RUMAH SAKIT */}
      {/* (Slide 6) */}
      {/* ------------------------------------------------------------- */}
      <section id="kontribusi" className="py-20 lg:py-28 relative bg-neutral-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Slide 6 • Dampak Nyata
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              KONTRIBUSI KONSULTAN MANAJEMEN RUMAH SAKIT UNTUK BISNIS RUMAH SAKIT
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Menghasilkan akselerasi kinerja finansial, operasional, dan kepuasan pasien secara simultan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 6 Core Contributions */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              {[
                {
                  title: "Melaporkan secara rutin perkembangan RS kepada pemilik",
                  desc: "Laporan bulanan/triwulan transparan mengenai performa keuangan, occupancy rate, utilisasi ruang, dan cashflow.",
                  badge: "Transparansi"
                },
                {
                  title: "Merencanakan serta menyiapkan perangkat keras dan perangkat lunak RS",
                  desc: "Spesifikasi tepat guna alat kesehatan medis (hardware) dan SIMRS terintegrasi (software) tanpa pemborosan.",
                  badge: "Infrastruktur"
                },
                {
                  title: "Meningkatkan efisiensi manajemen RS",
                  desc: "Pemberantasan kebocoran operasional, efisiensi alur rantai pasok obat/alkes, dan optimalisasi shift nakes.",
                  badge: "Efisiensi Biaya"
                },
                {
                  title: "Memaksimalkan tingkat keuntungan RS",
                  desc: "Strategi tarif yang kompetitif, optimalisasi layanan unggulan (Center of Excellence), dan diversifikasi pendapatan.",
                  badge: "Profitabilitas"
                },
                {
                  title: "Konsultan dalam Service Excellent, Public Speaking dan Pasien Safety RS",
                  desc: "Membentuk budaya kerja humanis, komunikasi terapeutik dokter-perawat, dan zero medical negligence.",
                  badge: "Mutu & Standar"
                },
                {
                  title: "Menjaga kepuasan pasien selaku Customer",
                  desc: "Menciptakan customer journey yang nyaman sehingga pasien loyal dan merekomendasikan rumah sakit.",
                  badge: "Loyalitas Pasien"
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/40 transition-all flex items-start gap-4 shadow-sm"
                >
                  <span className="text-xl sm:text-2xl font-black text-lime-400 leading-none shrink-0 mt-1">•</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-lime-300 bg-[#46731d]/40 px-2 py-0.5 rounded shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Graphic Card based on Slide 6 visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 p-6 shadow-2xl">
                <div className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-2">
                  Grafik Pertumbuhan Bisnis RS
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Pertumbuhan Terakselerasi &amp; Terkendali
                </h3>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-700 bg-white">
                  <Image
                    src="/compro/slide6_kontribusi.jpg"
                    alt="Business Growth Chart"
                    fill
                    className="object-cover object-right-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-black/70 p-2.5 rounded backdrop-blur-md">
                    Diagram tren kenaikan pendapatan, efisiensi operasional, dan kepuasan pasien secara simultan.
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-neutral-300">Efisiensi Biaya Operasional</span>
                      <span className="text-lime-400">+35%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-lime-400 h-full rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-neutral-300">Indeks Kepuasan Pasien (CSI)</span>
                      <span className="text-emerald-400">96.4%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: "96%" }} />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: GALERI DOKUMEN ASLI (FOLDER COMPRO) */}
      {/* ------------------------------------------------------------- */}
      <section id="galeri-dokumen" className="py-20 lg:py-28 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Arsip &amp; Bukti Visual
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              GALERI MATERI SLIDE ASLI (APP/COMPRO)
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Klik gambar untuk melihat dokumen asli yang menjadi acuan utama perancangan company profile ini.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comproSlides.map((slideItem) => (
              <div
                key={slideItem.id}
                onClick={() => setSelectedDoc(slideItem.aliasImage)}
                className="group cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-lime-400 transition-all overflow-hidden flex flex-col shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full bg-neutral-950 overflow-hidden">
                  <Image
                    src={slideItem.aliasImage}
                    alt={slideItem.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-[10px] text-lime-400 font-bold px-2 py-0.5 rounded border border-neutral-700">
                    Slide {slideItem.id}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
                      {slideItem.category}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1 line-clamp-2">
                      {slideItem.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-lime-400 font-semibold">
                    <span>Perbesar Gambar</span>
                    <span>↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Lightbox */}
        {selectedDoc && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedDoc(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute -top-12 right-0 text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-1.5 rounded-lg text-sm font-bold"
              >
                ✕ Tutup
              </button>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-neutral-700">
                <Image
                  src={selectedDoc}
                  alt="Dokumen Compro Terpilih"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: FORMULIR KONSULTASI & INISIASI PROYEK RS */}
      {/* ------------------------------------------------------------- */}
      <section id="konsultasi" className="py-20 lg:py-28 relative bg-neutral-900/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 blur-[90px] pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
                Inisiasi Kerjasama
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                KONSULTASI PERENCANAAN &amp; MANAJEMEN RS
              </h2>
              <p className="mt-3 text-neutral-400 text-sm sm:text-base">
                Siap mendampingi pemilik modal, yayasan, dan jajaran direksi mewujudkan rumah sakit impian.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Profil Anda
                  </label>
                  <select
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400"
                  >
                    <option value="Investor / Pemilik Modal">Investor / Pemilik Modal RS</option>
                    <option value="Direktur / Manajemen RS">Direktur / Manajemen Rumah Sakit</option>
                    <option value="Yayasan / Korporasi Kesehatan">Yayasan / Korporasi Kesehatan</option>
                    <option value="Pemilik Klinik / Rencana Naik Kelas RS">Pemilik Klinik / Rencana Naik Kelas ke RS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Ruang Lingkup Kebutuhan
                  </label>
                  <select
                    value={hospitalScope}
                    onChange={(e) => setHospitalScope(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400"
                  >
                    <option value="Pendirian RS Baru (Studi Kelayakan & Master Plan)">
                      Pendirian RS Baru (Studi Kelayakan &amp; Master Plan)
                    </option>
                    <option value="Restrukturisasi & Peningkatan Efisiensi Operasional RS">
                      Restrukturisasi &amp; Peningkatan Efisiensi Operasional RS
                    </option>
                    <option value="Implementasi Hardware & Software SIMRS / RME">
                      Implementasi Hardware &amp; Software SIMRS / RME
                    </option>
                    <option value="Workshop Service Excellence, SDM & Pasien Safety">
                      Workshop Service Excellence, SDM &amp; Pasien Safety
                    </option>
                    <option value="Audit Kesiapan Akreditasi KARS / Kemenkes">
                      Audit Kesiapan Akreditasi KARS / Kemenkes
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
                    placeholder="Contoh: Bpk. Hendra (PT Medika Jaya)"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Kota / Wilayah Lokasi RS
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Surabaya / Jakarta / Balikpapan"
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Nomor WhatsApp / Telepon
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400 text-center sm:text-left">
                  Diskusi awal bersifat <strong>konfidensial (NDA)</strong> dan bebas biaya komitmen.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-bold text-sm shadow-xl shadow-lime-500/20 transition-all"
                >
                  Kirim via WhatsApp Langsung →
                </button>
              </div>
            </form>

          </div>

        </div>
      </section>

    </div>
  );
}

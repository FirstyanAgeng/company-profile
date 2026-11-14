"use client";

import React, { useState } from "react";
import {
  HospitalIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
  ActivityIcon,
  CheckCircle2Icon,
  ArrowRightBoldIcon,
  BuildingIcon,
  LockIcon,
} from "./Icons";
import { corporateOverview } from "../data/comproData";

export default function HeroSection() {
  const [activeAudience, setActiveAudience] = useState<"investor" | "direksi" | "yayasan">("investor");

  const audienceInsights = {
    investor: {
      badge: "Peluang Investor & Pemilik Modal",
      headline: "Bisnis Perumahsakitan yang Menjanjikan Tanpa Beban Teknis",
      text: "Bisnis perumahsakitan saat ini adalah investasi yang sangat prospektif apabila dijalankan dengan benar tanpa melupakan sisi sosialnya. Pemilik modal cukup fokus pada fungsi pengawasan dan komunikasi strategis bersama konsultan tanpa terbebani kerumitan teknis di lapangan.",
      tag: "Pengawasan Transparan & ROI Sehat"
    },
    direksi: {
      badge: "Direksi & Manajemen Rumah Sakit",
      headline: "Optimalisasi Operasional, Efisiensi Biaya & Kepatuhan Mutu",
      text: "Mendiagnosis inefisiensi, memangkas antrean, menstandarisasi SOP dan Clinical Pathway, serta mengintegrasikan SIMRS/RME berstandar SatuSehat Kemenkes dan BPJS Kesehatan guna meningkatkan mutu layanan dan kepuasan pasien.",
      tag: "Lean Healthcare & Zero Error"
    },
    yayasan: {
      badge: "Yayasan & Peningkatan Status Klinik",
      headline: "Studi Kelayakan & Roadmap Naik Kelas Menuju RS Tipe D/C",
      text: "Mendampingi proses perizinan, kesesuaian tata ruang medis, pemenuhan rasio ketenagaan minimal, serta perancangan master plan 5 tahun agar proses peningkatan status berjalan mulus dan minim risiko.",
      tag: "Master Plan & Feasibility Study"
    }
  };

  const current = audienceInsights[activeAudience];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-24 right-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Value Propositions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/25 mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span>Healthcare Management Advisory &amp; Hospital Development</span>
            </div>

            {/* Main Powerful Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Mitra Strategis <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-green-400">Perencanaan &amp; Tata Kelola</span> Rumah Sakit
            </h1>

            {/* Subtitle / Core Vision */}
            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Membantu melakukan konsultasi dalam <span className="text-lime-300 font-semibold">perencanaan, pelaksanaan, pengorganisasian, serta pengawasan manajemen RS</span> secara benar, efisien, dan berkelanjutan tanpa melupakan sisi sosial kemanusiaan.
            </p>

            {/* Interactive Audience Switcher */}
            <div className="mt-8 w-full max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center justify-between">
                <span>Pilih Fokus Kebutuhan Anda:</span>
                <span className="text-[11px] text-lime-400 font-mono">Solusi Disesuaikan</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-neutral-900/90 rounded-xl border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setActiveAudience("investor")}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeAudience === "investor"
                      ? "bg-lime-500 text-neutral-950 shadow-md"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
                  }`}
                >
                  Investor &amp; Owner
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAudience("direksi")}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeAudience === "direksi"
                      ? "bg-lime-500 text-neutral-950 shadow-md"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
                  }`}
                >
                  Direksi RS Eksisting
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAudience("yayasan")}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeAudience === "yayasan"
                      ? "bg-lime-500 text-neutral-950 shadow-md"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
                  }`}
                >
                  Yayasan / Upgrade
                </button>
              </div>

              {/* Dynamic Insight Box */}
              <div className="mt-3.5 p-4 sm:p-5 rounded-xl bg-neutral-900/90 border border-neutral-800/90 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-lime-400 uppercase tracking-wide">
                    {current.badge}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                    {current.tag}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                  {current.headline}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {current.text}
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 items-center w-full">
              <a
                href="#konsultasi"
                className="px-7 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-bold text-sm sm:text-base shadow-lg shadow-lime-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Jadwalkan Konsultasi Awal</span>
                <ArrowRightBoldIcon className="w-4 h-4 text-neutral-950" />
              </a>

              <a
                href="#layanan"
                className="px-6 py-3.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base border border-neutral-700/80 transition-all flex items-center gap-2"
              >
                <span>Ruang Lingkup Jasa</span>
              </a>

              <a
                href="#metodologi"
                className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-neutral-800/40 text-neutral-300 hover:text-lime-400 text-sm font-semibold transition-all"
              >
                <span>Metodologi 7 Tahap →</span>
              </a>
            </div>

            {/* Confidentiality notice */}
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
              <LockIcon className="w-3.5 h-3.5 text-lime-400 shrink-0" />
              <span>Diskusi awal dilindungi Perjanjian Kerahasiaan (NDA) &amp; tanpa biaya komitmen.</span>
            </div>

            {/* Performance Metrics Stats */}
            <div className="mt-10 pt-6 border-t border-neutral-800/90 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              {corporateOverview.stats.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-lime-400 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-bold text-neutral-200 mt-0.5">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Architectural Executive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow backdrop behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 via-emerald-500/10 to-teal-500/20 rounded-3xl blur-xl" />

              <div className="relative rounded-2xl bg-neutral-900 border border-neutral-700/80 p-6 sm:p-7 shadow-2xl flex flex-col gap-6">
                
                {/* Header of card */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lime-500/10 text-lime-400 border border-lime-500/20 flex items-center justify-center">
                      <HospitalIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white leading-tight">
                        Tata Kelola Manajemen Terpadu
                      </h2>
                      <span className="text-[11px] text-lime-400 font-mono">
                        Hospital Operating System
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Standar Paripurna
                  </span>
                </div>

                {/* Core Corporate Value Statement Box */}
                <div className="bg-gradient-to-br from-[#274811] to-[#152e08] text-white p-5 rounded-xl border border-lime-600/30 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-lime-300 mb-2">
                    <span>Tata Nilai Perusahaan (Core Value)</span>
                    <ShieldCheckIcon className="w-4 h-4 text-lime-300" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed italic text-lime-50">
                    &quot;Setiap insan Rumah Sakit senantiasa memberikan pelayanan yang terbaik kepada Pelanggan, Perusahaan (Stakeholder), serta Pemilik Perusahaan (Owner).&quot;
                  </p>
                </div>

                {/* 3 Pillars Overview */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    3 Pilar Integrasi Ekosistem RS:
                  </span>

                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-lime-500/10 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                      <UsersIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">01. Pelanggan (Pasien)</span>
                        <span className="text-[10px] text-lime-400 font-semibold">Service Excellence</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                        Fokus keselamatan pasien, keramahan nakes, empati, dan kepastian tarif.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">02. Stakeholder (Nakes &amp; Tim)</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">SOP &amp; Budaya Kerja</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                        Lingkungan kerja profesional, sistem remunerasi adil, dan continuous training.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUpIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">03. Pemilik Modal (Owner)</span>
                        <span className="text-[10px] text-cyan-400 font-semibold">Akuntabilitas Finansial</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                        Pelaporan berkala transparan, efisiensi CAPEX/OPEX, dan imbal hasil sehat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom capability indicators */}
                <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2Icon className="w-4 h-4 text-lime-400" />
                    <span>Feasibility Study Teruji</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2Icon className="w-4 h-4 text-lime-400" />
                    <span>SatuSehat Ready</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2Icon className="w-4 h-4 text-lime-400" />
                    <span>Akreditasi KARS</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

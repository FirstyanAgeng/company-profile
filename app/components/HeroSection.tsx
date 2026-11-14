import React from "react";
import Image from "next/image";
import { HospitalIcon, CheckBoxIcon, TrendingUpIcon, ShieldCheckIcon } from "./Icons";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-lime-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading and Value Propositions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#46731d]/30 text-lime-400 border border-[#46731d] mb-4">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              Company Profile Resmi Konsultan RS
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              KONSULTAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-green-400">MANAJEMEN</span> RUMAH SAKIT
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Membantu melakukan konsultasi dalam <span className="text-lime-300 font-semibold">perencanaan, pelaksanaan, pengorganisasian, serta pengawasan manajemen RS</span> secara benar, efisien, dan menguntungkan tanpa melupakan sisi sosialnya.
            </p>

            {/* Quick Core Highlights from Slides */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
              <div className="flex items-start gap-2.5 bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
                <span className="text-lime-400 text-lg leading-none shrink-0 font-bold">⇒</span>
                <span className="text-xs sm:text-sm text-neutral-200">
                  <strong>Peluang Menjanjikan:</strong> Pemilik modal/investor fokus pengawasan tanpa beban teknis operasional lapangan.
                </span>
              </div>

              <div className="flex items-start gap-2.5 bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
                <span className="text-lime-400 text-lg leading-none shrink-0 font-bold">⇒</span>
                <span className="text-xs sm:text-sm text-neutral-200">
                  <strong>Solusi Permanen:</strong> Pendampingan menyeluruh sesuai standar aturan pemerintah dan kaidah keilmuan.
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#slide-viewer"
                className="px-6 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-bold text-sm sm:text-base shadow-lg shadow-lime-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Lihat 6 Slide Compro Asli</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#layanan"
                className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm sm:text-base border border-neutral-700 transition-all flex items-center gap-2"
              >
                <span>Ruang Lingkup Jasa</span>
              </a>

              <a
                href="#konsultasi"
                className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-neutral-900 text-lime-400 border border-lime-400/40 font-semibold text-sm sm:text-base transition-all"
              >
                <span>Mulai Konsultasi</span>
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="mt-10 pt-6 border-t border-neutral-800/80 w-full grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-lime-400">100%</div>
                <div className="text-[11px] sm:text-xs text-neutral-400">Kepatuhan Regulasi RS</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">7 Tahap</div>
                <div className="text-[11px] sm:text-xs text-neutral-400">Roadmap Master Plan</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">End-to-End</div>
                <div className="text-[11px] sm:text-xs text-neutral-400">Hardware, SIMRS & SDM</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card Showcase referencing slide 1 & slide 2 */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame styled after the lime slide palette */}
              <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-[#77db2c] via-[#a8f152] to-[#efffe1] shadow-2xl shadow-green-950/40">
                <div className="bg-neutral-900 rounded-[14px] p-5 sm:p-6 text-neutral-100 flex flex-col gap-4">
                  
                  {/* Top hospital preview banner */}
                  <div className="relative h-48 w-full rounded-xl overflow-hidden border border-neutral-700">
                    <Image
                      src="/compro/slide1_target.jpg"
                      alt="Modern Hospital Architecture"
                      fill
                      className="object-cover object-left"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-white bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                        Rancang Bangun & Manajemen RS
                      </span>
                      <span className="text-[10px] font-mono text-lime-400 bg-lime-950/80 border border-lime-800 px-2 py-0.5 rounded">
                        Dokumen Compro
                      </span>
                    </div>
                  </div>

                  {/* Highlight card in signature olive green */}
                  <div className="bg-[#46731d] text-white p-4 rounded-xl shadow-md border border-[#395e17]">
                    <div className="text-xs uppercase font-extrabold tracking-wider text-lime-200 mb-1">
                      Tata Nilai Perusahaan
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed italic">
                      &quot;Setiap karyawan Rumah Sakit senantiasa memberikan pelayanan yang terbaik kepada pelanggan dan Perusahaan (stakeholder) serta Pemilik Perusahaan (Owner)&quot;
                    </p>
                  </div>

                  {/* 3 Pillars Quick List */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <div className="w-4 h-4 text-lime-400 shrink-0">
                        <CheckBoxIcon className="w-full h-full" />
                      </div>
                      <span>Studi Kelayakan RS yang Terdokumentasi Benar</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <div className="w-4 h-4 text-lime-400 shrink-0">
                        <CheckBoxIcon className="w-full h-full" />
                      </div>
                      <span>Sistem Operasional & SIMRS Modern Terintegrasi</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <div className="w-4 h-4 text-lime-400 shrink-0">
                        <CheckBoxIcon className="w-full h-full" />
                      </div>
                      <span>Workshop & Pendampingan Patient Safety & Akreditasi</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 bg-neutral-900 border border-lime-500/50 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold">
                  <TrendingUpIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Efisiensi & Profitabilitas</div>
                  <div className="text-[11px] text-neutral-400">Pertumbuhan Rumah Sakit Terukur</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

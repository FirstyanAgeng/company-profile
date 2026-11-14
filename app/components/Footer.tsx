import React from "react";
import Link from "next/link";
import { HospitalIcon, LockIcon, ShieldCheckIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          
          {/* Col 1: Identity & Vision (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2d5212] via-[#48831c] to-[#71cb29] flex items-center justify-center text-white shadow-md border border-lime-500/30">
                  <HospitalIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-base font-black tracking-tight text-white block leading-tight">
                    KONSULTAN MANAJEMEN RS
                  </span>
                  <span className="text-xs text-lime-400 font-semibold tracking-wider uppercase">
                    Healthcare Advisory &amp; Hospital Development Group
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed max-w-md mb-5">
                Mitra konsultasi komprehensif bagi pemilik modal, investor, yayasan, dan jajaran direksi rumah sakit di seluruh Indonesia. Menghadirkan solusi perumahsakitan modern, efisien, berorientasi hasil, dan patuh regulasi Kementerian Kesehatan.
              </p>

              <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl max-w-md">
                <span className="text-[11px] font-bold text-lime-400 uppercase tracking-wider block mb-1">
                  Visi Pokok Perusahaan :
                </span>
                <p className="text-xs text-neutral-300 italic leading-relaxed">
                  &quot;Membantu melakukan konsultasi dalam perencanaan, pelaksanaan, pengorganisasian serta pengawasan manajemen RS secara benar dan efisien.&quot;
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400">
              <LockIcon className="w-4 h-4 text-lime-400" />
              <span>Seluruh keterlibatan proyek dilindungi Non-Disclosure Agreement (NDA).</span>
            </div>
          </div>

          {/* Col 2: Ruang Lingkup Layanan (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Ruang Lingkup Layanan
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#layanan" className="hover:text-lime-400 transition-colors block">
                  Rancang Bangun Manajemen Operasional
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-lime-400 transition-colors block">
                  Inovasi Efisiensi &amp; Lean Healthcare
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-lime-400 transition-colors block">
                  Digitalisasi SIMRS &amp; RME SatuSehat
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-lime-400 transition-colors block">
                  Workshop Hospitality &amp; Service Excellence
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-lime-400 transition-colors block">
                  Patient Safety Culture &amp; Mitigasi Risiko
                </a>
              </li>
              <li>
                <a href="#metodologi" className="hover:text-lime-400 transition-colors block">
                  Pendampingan Akreditasi KARS / LAM-KPRS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Metodologi & Navigasi (2 cols) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#urgensi-bisnis" className="hover:text-lime-400 transition-colors block">
                  Urgensi &amp; Peluang Investor
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-lime-400 transition-colors block">
                  Layanan &amp; Solusi Terpadu
                </a>
              </li>
              <li>
                <a href="#metodologi" className="hover:text-lime-400 transition-colors block">
                  Metodologi Kerja 7 Tahap
                </a>
              </li>
              <li>
                <a href="#tata-nilai" className="hover:text-lime-400 transition-colors block">
                  Tata Nilai Perusahaan
                </a>
              </li>
              <li>
                <a href="#dampak-bisnis" className="hover:text-lime-400 transition-colors block">
                  6 Kontribusi Bisnis RS
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-lime-400 transition-colors block">
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan Konsultasi & Kontak (2 cols) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Konsultasi &amp; Kontak
            </h4>
            <div className="space-y-3 text-xs">
              <p className="text-neutral-300">
                <strong>Jangkauan Layanan:</strong>
                <br />
                Seluruh Wilayah Indonesia (On-site &amp; Hybrid)
              </p>
              <p className="text-neutral-300">
                <strong>Waktu Konsultasi:</strong>
                <br />
                Senin - Sabtu (08.00 - 17.00 WIB)
              </p>
              <div className="pt-2">
                <a
                  href="#konsultasi"
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-950 bg-lime-400 hover:bg-lime-300 px-3.5 py-2 rounded-xl transition-all shadow-md shadow-lime-500/10"
                >
                  <span>Mulai Konsultasi</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom regulatory compliance & copyright bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Konsultan Manajemen Rumah Sakit. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1 text-lime-400">
              <ShieldCheckIcon className="w-3.5 h-3.5" /> Standar Kemenkes RI
            </span>
            <span>•</span>
            <span>STARKES KARS Compliant</span>
            <span>•</span>
            <span>SatuSehat Ready</span>
            <span>•</span>
            <span>Kerahasiaan Medis &amp; Finansial Terjamin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

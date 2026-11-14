import React from "react";
import Link from "next/link";
import { HospitalIcon, DiagonalSketchLines } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 relative overflow-hidden">
      {/* Decorative Diagonal Sketch Lines in footer corner */}
      <div className="absolute bottom-2 right-2 opacity-20 pointer-events-none">
        <DiagonalSketchLines className="w-40 h-40 text-neutral-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b6519] to-[#6fcb27] flex items-center justify-center text-white shadow-md">
                <HospitalIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-white block">
                  KONSULTAN MANAJEMEN RUMAH SAKIT
                </span>
                <span className="text-xs text-lime-400 font-semibold tracking-wider uppercase">
                  Hospital Management Consulting Group
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md mb-4">
              Mitra konsultasi komprehensif bagi pemilik modal, investor, dan pengelola rumah sakit di Indonesia. Menghadirkan solusi perumahsakitan modern, efisien, patuh regulasi, dan berorientasi pada kepuasan pasien.
            </p>

            <div className="inline-block bg-[#46731d]/20 border border-[#46731d] px-3.5 py-1.5 rounded-lg text-xs text-lime-300">
              Visi: &quot;Perencanaan, pelaksanaan, pengorganisasian &amp; pengawasan manajemen RS benar &amp; efisien&quot;
            </div>
          </div>

          {/* Col 2: Navigasi Materi Compro */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Materi Slide Compro
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#slide-viewer" className="hover:text-lime-400 transition-colors">
                  Slide 1: Target Pasar &amp; Investor
                </a>
              </li>
              <li>
                <a href="#peran" className="hover:text-lime-400 transition-colors">
                  Slide 2: Urgensi &amp; Peran Konsultan
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-lime-400 transition-colors">
                  Slide 3: Ruang Lingkup Layanan RS
                </a>
              </li>
              <li>
                <a href="#visi-misi" className="hover:text-lime-400 transition-colors">
                  Slide 4: Visi &amp; 7 Misi Pelaksanaan
                </a>
              </li>
              <li>
                <a href="#tata-nilai" className="hover:text-lime-400 transition-colors">
                  Slide 5: Tata Nilai Perusahaan
                </a>
              </li>
              <li>
                <a href="#kontribusi" className="hover:text-lime-400 transition-colors">
                  Slide 6: Kontribusi untuk Bisnis RS
                </a>
              </li>
              <li>
                <a href="#galeri-dokumen" className="hover:text-lime-400 transition-colors">
                  Galeri Dokumen Asli
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hubungi Konsultan */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Layanan Konsultasi
            </h4>
            <div className="space-y-3 text-xs">
              <p className="text-neutral-300">
                <strong>Konsultasi &amp; Penjadwalan:</strong>
                <br />
                Senin - Sabtu (08.00 - 17.00 WIB)
              </p>
              <p className="text-neutral-300">
                <strong>Pendampingan:</strong>
                <br />
                Seluruh Wilayah Indonesia (On-site &amp; Remote)
              </p>
              <div className="pt-2">
                <a
                  href="#konsultasi"
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-950 bg-lime-400 hover:bg-lime-300 px-3.5 py-2 rounded-lg transition-all"
                >
                  <span>Mulai Konsultasi Online</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © 2026 Konsultan Manajemen Rumah Sakit. Berdasarkan materi company profile resmi.
          </div>
          <div className="flex gap-4">
            <span>Privasi &amp; Kerahasiaan (NDA Terjamin)</span>
            <span>•</span>
            <span>Kemenkes RI Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

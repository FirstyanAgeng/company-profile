"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HospitalIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Slide Asli (Replika)", href: "#slide-viewer", highlight: true },
    { name: "Urgensi Investor", href: "#urgensi" },
    { name: "Peran Konsultan", href: "#peran" },
    { name: "Layanan", href: "#layanan" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Tata Nilai", href: "#tata-nilai" },
    { name: "Kontribusi", href: "#kontribusi" },
    { name: "Galeri Asli", href: "#galeri-dokumen" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-neutral-800 py-3"
          : "bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b6519] to-[#6fcb27] flex items-center justify-center text-white shadow-md shadow-green-900/30 group-hover:scale-105 transition-transform">
              <HospitalIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white leading-tight">
                KONSULTAN RS
              </span>
              <span className="text-[10px] sm:text-xs text-lime-400 font-semibold tracking-wider uppercase">
                Hospital Management Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  link.highlight
                    ? "bg-lime-500/10 text-lime-400 border border-lime-400/30 hover:bg-lime-500 hover:text-neutral-950"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#konsultasi"
              className="px-4 py-2 rounded-lg bg-lime-500 hover:bg-lime-400 text-neutral-950 text-xs sm:text-sm font-bold shadow-md shadow-lime-500/20 transition-all hover:scale-102"
            >
              Konsultasi Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800"
              aria-label="Buka navigasi"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-800 flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  link.highlight
                    ? "bg-lime-500/10 text-lime-400 font-bold"
                    : "text-neutral-200 hover:bg-neutral-800"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-neutral-800">
              <a
                href="#konsultasi"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-lg bg-lime-500 text-neutral-950 font-bold text-sm"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HospitalIcon, ArrowRightBoldIcon } from "./Icons";

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
    { name: "Urgensi & Peluang", href: "#urgensi-bisnis" },
    { name: "Layanan Utama", href: "#layanan" },
    { name: "Metodologi 7 Tahap", href: "#metodologi" },
    { name: "Tata Nilai", href: "#tata-nilai" },
    { name: "Dampak Bisnis", href: "#dampak-bisnis" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-md shadow-xl border-b border-neutral-800/80 py-3"
          : "bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2d5212] via-[#48831c] to-[#71cb29] flex items-center justify-center text-white shadow-md shadow-green-950/40 group-hover:scale-105 transition-transform border border-lime-500/30">
              <HospitalIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight text-white leading-tight">
                KONSULTAN MANAJEMEN RS
              </span>
              <span className="text-[10px] text-lime-400 font-semibold tracking-wider uppercase">
                Healthcare Advisory &amp; Development
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#konsultasi"
              className="px-4 py-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 text-xs sm:text-sm font-bold shadow-md shadow-lime-500/20 transition-all hover:scale-102 flex items-center gap-1.5"
            >
              <span>Jadwalkan Konsultasi</span>
              <ArrowRightBoldIcon className="w-3.5 h-3.5 text-neutral-950" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900"
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
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-800 flex flex-col gap-1 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg text-neutral-200 hover:bg-neutral-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-neutral-800">
              <a
                href="#konsultasi"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-xl bg-lime-500 text-neutral-950 font-bold text-sm"
              >
                Jadwalkan Konsultasi
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

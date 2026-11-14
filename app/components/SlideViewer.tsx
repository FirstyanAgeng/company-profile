"use client";

import React, { useState } from "react";
import Image from "next/image";
import { comproSlides } from "../data/comproData";
import { DiagonalSketchLines, CheckBoxIcon, ArrowRightBoldIcon } from "./Icons";

export default function SlideViewer() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showOriginal, setShowOriginal] = useState(false);
  const [compareMode, setCompareMode] = useState(false);

  const slide = comproSlides[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % comproSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + comproSlides.length) % comproSlides.length);
  };

  return (
    <section id="slide-viewer" className="py-12 bg-neutral-900 text-neutral-100 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3">
              Mode Replika Presisi
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Presentasi Company Profile (Slide Asli)
            </h2>
            <p className="mt-2 text-neutral-400 max-w-2xl text-sm sm:text-base">
              Replika visual 1:1 dari materi presentasi <span className="text-lime-400 font-semibold">Konsultan Manajemen Rumah Sakit</span> di folder compro.
            </p>
          </div>

          {/* Control Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 border ${
                compareMode
                  ? "bg-lime-500 text-neutral-950 border-lime-400 shadow-lg shadow-lime-500/20"
                  : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700"
              }`}
            >
              <span>Side-by-Side Asli vs Digital</span>
              <span className={`w-2 h-2 rounded-full ${compareMode ? "bg-neutral-950" : "bg-neutral-500"}`} />
            </button>

            <button
              onClick={() => setShowOriginal(!showOriginal)}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-all"
            >
              {showOriginal ? "Tampilkan Versi Digital" : "Tampilkan Foto Dokumen"}
            </button>
          </div>
        </div>

        {/* Slide Selector Tabs */}
        <div className="flex overflow-x-auto pb-3 mb-6 gap-2 border-b border-neutral-800 scrollbar-thin">
          {comproSlides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                currentSlideIndex === idx
                  ? "bg-lime-500 text-neutral-950 font-bold shadow-md"
                  : "bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                currentSlideIndex === idx ? "bg-neutral-950 text-lime-400" : "bg-neutral-700 text-neutral-300"
              }`}>
                {s.id}
              </span>
              <span>{s.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Stage Container */}
        <div className={`grid gap-6 ${compareMode ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
          {/* Digital High-Fidelity Slide Replica */}
          {(!showOriginal || compareMode) && (
            <div className="flex flex-col">
              <div className="text-xs font-semibold text-lime-400 mb-2 flex items-center justify-between">
                <span>DIGITAL REPLICA (HTML & CSS) - SLIDE #{slide.id} OF 6</span>
                <span className="text-neutral-400 font-mono">{slide.category}</span>
              </div>

              {/* The Slide Canvas */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl border border-neutral-700 bg-gradient-to-br from-[#77db2c] via-[#a8f152] to-[#efffe1] text-neutral-900 select-none p-4 sm:p-7 flex flex-col justify-between">
                
                {/* SLIDE 1 REPLICA */}
                {slide.id === 1 && (
                  <div className="h-full flex flex-col justify-between">
                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-center text-[#183908] tracking-tight mb-3 uppercase leading-snug">
                      SIAPA SAJA YANG MEMBUTUHKAN KONSULTAN MANAJEMEN RUMAH SAKIT ?
                    </h3>

                    <div className="flex-1 grid grid-cols-12 gap-3 sm:gap-6 items-center">
                      {/* Left: Hospital Photo */}
                      <div className="col-span-5 h-[90%] relative rounded-lg overflow-hidden shadow-lg border border-black/10 bg-neutral-900">
                        <Image
                          src={slide.aliasImage}
                          alt="Modern Hospital Building"
                          fill
                          className="object-cover object-left"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 text-[10px] sm:text-xs text-white font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                          Institusi Rumah Sakit Modern
                        </div>
                      </div>

                      {/* Right: Content with arrows */}
                      <div className="col-span-7 flex flex-col justify-center space-y-3 sm:space-y-6 text-[#153406]">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-lg sm:text-2xl font-black text-[#1c480a] leading-none shrink-0 mt-0.5">⇒</span>
                          <p className="text-xs sm:text-base md:text-lg font-medium leading-relaxed">
                            Bisnis perumahsakitan saat ini adalah bisnis yang sangat menjanjikan apabila dijalankan dengan benar tanpa melupakan sisi sosialnya.
                          </p>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-lg sm:text-2xl font-black text-[#1c480a] leading-none shrink-0 mt-0.5">⇒</span>
                          <p className="text-xs sm:text-base md:text-lg font-medium leading-relaxed">
                            Bisnis ini sangat menjanjikan bagi para pemilik modal/investor yang berminat tanpa memikirkan tehnis pengelolaan dilapangan. Para pemilik modal tinggal hanya tinggal melakukan komunikasi dan pengawasan bersama konsultan rumah sakit.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom sketch lines */}
                    <div className="absolute bottom-3 right-3 opacity-80 pointer-events-none">
                      <DiagonalSketchLines className="w-20 h-20 sm:w-28 sm:h-28 text-neutral-800" />
                    </div>
                  </div>
                )}

                {/* SLIDE 2 REPLICA */}
                {slide.id === 2 && (
                  <div className="h-full flex flex-col justify-between">
                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-center text-[#183908] tracking-tight mb-3 uppercase leading-snug">
                      SEBERAPA PENTINGKAH PERAN KONSULTAN MANAJEMEN RUMAH SAKIT ?
                    </h3>

                    <div className="flex-1 grid grid-cols-12 gap-3 sm:gap-6 items-center">
                      {/* Left: Checklist Content */}
                      <div className="col-span-8 flex flex-col justify-center space-y-3 sm:space-y-4 text-[#153406]">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-[#2d5914]">
                            <CheckBoxIcon className="w-full h-full" />
                          </div>
                          <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                            Konsultan RS adalah ahli di bidang perumahsakitan pada semua aspek dari awal baik perencanaan, realisasi dilapangan serta pengawasan dalam Strategi Bisnis RS.
                          </p>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-[#2d5914]">
                            <CheckBoxIcon className="w-full h-full" />
                          </div>
                          <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                            Rumah Sakit didirikan bukan hanya sekedar penyiapan modal dana akan tetapi perencanaan yang benar dan efisien harus diutamakan.
                          </p>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-1 text-[#2d5914]">
                            <CheckBoxIcon className="w-full h-full" />
                          </div>
                          <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                            Konsultan RS menganalisa masalah dan menawarkan solusi yang permanen dan terbaik sesuai aturan pemerintah dan keilmuan.
                          </p>
                        </div>
                      </div>

                      {/* Right: Meeting Silhouette & Consultants badge */}
                      <div className="col-span-4 h-[85%] relative flex flex-col items-center justify-center">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50 shadow-md border border-neutral-300">
                          <Image
                            src={slide.aliasImage}
                            alt="Hospital Consultants Discussion"
                            fill
                            className="object-cover object-right"
                          />
                        </div>
                        <span className="mt-1 text-xs sm:text-sm font-black text-neutral-800 tracking-wider">
                          Consultants
                        </span>
                      </div>
                    </div>

                    {/* Bottom sketch lines */}
                    <div className="absolute bottom-3 right-3 opacity-80 pointer-events-none">
                      <DiagonalSketchLines className="w-20 h-20 sm:w-28 sm:h-28 text-neutral-800" />
                    </div>
                  </div>
                )}

                {/* SLIDE 3 REPLICA */}
                {slide.id === 3 && (
                  <div className="h-full flex flex-col justify-center items-center relative">
                    {/* Olive green big card */}
                    <div className="w-full bg-[#46731d] text-white p-4 sm:p-8 rounded-none shadow-xl border border-[#375e14] z-10">
                      <div className="space-y-3 sm:space-y-5">
                        {slide.points?.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-4">
                            <span className="text-base sm:text-xl font-bold leading-none shrink-0 mt-0.5 text-lime-200">
                              ☑
                            </span>
                            <p className="text-xs sm:text-base md:text-lg font-medium leading-snug sm:leading-relaxed">
                              {pt}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom sketch lines */}
                    <div className="absolute bottom-3 right-3 opacity-80 pointer-events-none">
                      <DiagonalSketchLines className="w-20 h-20 sm:w-28 sm:h-28 text-neutral-800" />
                    </div>
                  </div>
                )}

                {/* SLIDE 4 REPLICA */}
                {slide.id === 4 && (
                  <div className="h-full flex flex-col justify-between">
                    {/* Centered Olive Badge Header */}
                    <div className="flex justify-center mb-2">
                      <div className="bg-[#46731d] text-white px-8 sm:px-12 py-1 sm:py-2 text-base sm:text-2xl font-black tracking-wider uppercase shadow-md">
                        VISI & MISI
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-3 sm:space-y-4 text-[#153406] max-w-3xl mx-auto w-full">
                      {/* Visi */}
                      <div>
                        <div className="text-sm sm:text-xl font-extrabold text-[#1a4409] mb-1">
                          VISI :
                        </div>
                        <p className="text-xs sm:text-base md:text-lg font-bold text-center text-[#183c07] leading-tight px-4">
                          {slide.visi}
                        </p>
                      </div>

                      {/* Misi */}
                      <div className="pt-1">
                        <div className="text-sm sm:text-xl font-extrabold text-[#1a4409] mb-1">
                          MISI :
                        </div>
                        <div className="grid grid-cols-1 gap-1 sm:gap-1.5 pl-2 sm:pl-4">
                          {slide.misi?.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-xs sm:text-sm font-bold text-[#2d5914] shrink-0 mt-0.5">☑</span>
                              <span className="text-[11px] sm:text-sm md:text-base font-medium leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Diagonal sketch lines sweeping across */}
                    <div className="absolute bottom-2 right-2 opacity-80 pointer-events-none">
                      <DiagonalSketchLines className="w-24 h-24 sm:w-36 sm:h-36 text-neutral-800" />
                    </div>
                  </div>
                )}

                {/* SLIDE 5 REPLICA */}
                {slide.id === 5 && (
                  <div className="h-full flex flex-col justify-center items-center relative">
                    {/* Blue Title with Glow/Shadow */}
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-[#1d3ea8] drop-shadow-[0_2px_4px_rgba(29,62,168,0.35)] tracking-wide mb-6 uppercase text-center">
                      TATA NILAI PERUSAHAAN
                    </h3>

                    {/* Large Olive Green Card */}
                    <div className="w-full bg-[#46731d] text-white p-5 sm:p-10 rounded-none shadow-2xl border border-[#375e14] z-10 max-w-3xl">
                      <p className="text-sm sm:text-xl md:text-2xl font-bold leading-relaxed text-center sm:text-left">
                        {slide.tataNilai}
                      </p>
                    </div>

                    {/* Decorative base edge line */}
                    <div className="w-full mt-4 h-1 border-t border-neutral-400/40" />

                    {/* Bottom sketch line */}
                    <div className="absolute bottom-3 right-6 opacity-70 pointer-events-none">
                      <svg className="w-20 h-20 text-neutral-800" viewBox="0 0 100 100" fill="none">
                        <line x1="90" y1="20" x2="20" y2="90" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* SLIDE 6 REPLICA */}
                {slide.id === 6 && (
                  <div className="h-full flex flex-col justify-between">
                    <h3 className="text-xs sm:text-base md:text-xl font-black text-left text-[#183908] tracking-tight uppercase leading-snug max-w-xl">
                      KONTRIBUSI KONSULTAN MANAJEMEN RUMAH SAKIT UNTUK BISNIS RUMAH SAKIT
                    </h3>

                    <div className="flex-1 grid grid-cols-12 gap-3 sm:gap-4 items-center">
                      {/* Left: 6 bullet points */}
                      <div className="col-span-8 flex flex-col justify-center space-y-1.5 sm:space-y-3 text-[#153406]">
                        {slide.points?.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-sm sm:text-lg font-black text-[#1d470b] shrink-0 leading-none mt-0.5">•</span>
                            <span className="text-[11px] sm:text-sm md:text-base font-semibold leading-tight sm:leading-snug">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Right: Growth Chart & Businessman Silhouette */}
                      <div className="col-span-4 h-[85%] relative flex flex-col items-center justify-center">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-white/70 shadow-md border border-neutral-300">
                          <Image
                            src={slide.aliasImage}
                            alt="Hospital Business Growth Chart"
                            fill
                            className="object-cover object-right-top"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom sketch lines */}
                    <div className="absolute bottom-2 right-2 opacity-80 pointer-events-none">
                      <DiagonalSketchLines className="w-20 h-20 sm:w-28 sm:h-28 text-neutral-800" />
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* Original Scanned Slide from WhatsApp Image */}
          {(showOriginal || compareMode) && (
            <div className="flex flex-col">
              <div className="text-xs font-semibold text-lime-400 mb-2 flex items-center justify-between">
                <span>DOKUMEN ASLI (WHATSAPP JPEG DI APP/COMPRO)</span>
                <span className="text-neutral-400 font-mono text-[10px] truncate max-w-[200px]">
                  {slide.imageFileName}
                </span>
              </div>

              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl border border-neutral-700 bg-neutral-950 flex items-center justify-center">
                <Image
                  src={slide.aliasImage}
                  alt={`Slide Asli ${slide.id} - ${slide.title}`}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md text-[11px] px-2.5 py-1 rounded text-neutral-200 border border-neutral-700">
                  Slide {slide.id}/6 Original
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Slide Navigation Footbar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-800/60 p-4 rounded-xl border border-neutral-700">
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Navigasi:</span>
            <div className="flex gap-1.5">
              {comproSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlideIndex === i ? "bg-lime-400 w-8" : "bg-neutral-600 hover:bg-neutral-500"
                  }`}
                  aria-label={`Pindah ke slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
            >
              ← Sebelumnya
            </button>
            <span className="text-xs sm:text-sm font-mono text-neutral-300 px-2">
              {currentSlideIndex + 1} / {comproSlides.length}
            </span>
            <button
              onClick={nextSlide}
              className="px-4 py-2 rounded-lg bg-lime-500 hover:bg-lime-400 text-neutral-950 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5"
            >
              Selanjutnya →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

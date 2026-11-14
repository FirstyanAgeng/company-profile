import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InteractiveSections from "./components/InteractiveSections";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 font-sans selection:bg-lime-400 selection:text-neutral-950 text-neutral-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <InteractiveSections />
      </main>
      <Footer />
    </div>
  );
}

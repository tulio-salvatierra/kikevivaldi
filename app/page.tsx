'use client';

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Albums from "@/components/Albums";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function KikeVivaldyLanding() {
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Media Section */}
      <Albums />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

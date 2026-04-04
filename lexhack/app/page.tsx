"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

// Easter egg: Konami code triggers glitch overlay
const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

export default function Home() {
  useEffect(() => {
    // Console easter egg
    console.log(
      "%c👾 LexHack '26",
      "color: #7C3AED; font-size: 24px; font-weight: bold; font-family: monospace;"
    );
    console.log(
      "%cTechnically impressive BUT Fundamentally unnecessary.",
      "color: #10B981; font-size: 14px; font-family: monospace;"
    );
    console.log(
      "%c\nYou found the console. You're already a hacker.\nRegister at lexhack.com (coming soon)\n",
      "color: #A1A1AA; font-family: monospace;"
    );

    // Konami code easter egg
    let sequence: number[] = [];
    const handleKey = (e: KeyboardEvent) => {
      sequence = [...sequence, e.keyCode].slice(-KONAMI.length);
      if (sequence.join(",") === KONAMI.join(",")) {
        triggerGlitchExplosion();
      }
    };

    const triggerGlitchExplosion = () => {
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999; pointer-events: none;
        background: rgba(124, 58, 237, 0.15);
        animation: none;
      `;

      const msg = document.createElement("div");
      msg.textContent = "YOU FOUND THE EASTER EGG 👾";
      msg.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        z-index: 10000; font-family: monospace; font-size: clamp(16px, 4vw, 32px);
        font-weight: bold; color: #10B981; text-align: center; pointer-events: none;
        text-shadow: 0 0 20px #10B981, 0 0 40px #10B981;
        animation: pulse 0.5s ease-in-out infinite alternate;
      `;

      const style = document.createElement("style");
      style.textContent = `@keyframes pulse { from { opacity: 0.6; transform: translate(-50%, -50%) scale(0.98); } to { opacity: 1; transform: translate(-50%, -50%) scale(1.02); } }`;

      document.head.appendChild(style);
      document.body.appendChild(overlay);
      document.body.appendChild(msg);

      setTimeout(() => {
        overlay.remove();
        msg.remove();
        style.remove();
      }, 3000);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <About />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      <Schedule />

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      <Prizes />

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      <FAQ />

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      <Sponsors />

      <Footer />
    </main>
  );
}

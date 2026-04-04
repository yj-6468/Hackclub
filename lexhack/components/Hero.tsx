"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("./Countdown"), { ssr: false });

const floatingSymbols = [
  { text: "{}", x: "8%", y: "20%", delay: 0, cls: "float-1" },
  { text: "</>", x: "88%", y: "15%", delay: 1, cls: "float-2" },
  { text: "//", x: "5%", y: "70%", delay: 2, cls: "float-3" },
  { text: "=>", x: "92%", y: "65%", delay: 0.5, cls: "float-1" },
  { text: "[];", x: "15%", y: "85%", delay: 1.5, cls: "float-2" },
  { text: "404", x: "82%", y: "80%", delay: 2.5, cls: "float-3" },
  { text: "&&", x: "50%", y: "90%", delay: 0.8, cls: "float-1" },
  { text: "∞", x: "70%", y: "10%", delay: 3, cls: "float-2" },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg scanline">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Floating symbols */}
      {floatingSymbols.map((s, i) => (
        <div
          key={i}
          className={`absolute font-mono text-lg sm:text-2xl text-purple-500/20 select-none pointer-events-none ${s.cls}`}
          style={{ left: s.x, top: s.y, animationDelay: `${s.delay}s` }}
        >
          {s.text}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          Lexington&apos;s First High School Hackathon
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1
            className="glitch font-grotesk font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none tracking-tighter"
            data-text="LexHack"
          >
            <span className="gradient-text">LexHack</span>
          </h1>
          <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-white/80 mt-1">
            &apos;26
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-grotesk text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-4 italic"
        >
          &ldquo;Technically impressive BUT Fundamentally unnecessary.&rdquo;
        </motion.p>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-base sm:text-lg mb-4 max-w-2xl mx-auto"
        >
          48 hours. Infinite ideas.
        </motion.p>

        {/* Date & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-4 mb-10 text-sm"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
            <span>📅</span> June 2026 · Saturday–Sunday
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
            <span>📍</span> Cary Memorial Library, Lexington, MA
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] font-semibold">
            <span>🎟</span> Completely Free
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://forms.gle/32xyrnJxHYpWm1937"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-grotesk font-bold text-lg transition-all duration-200 glow-purple text-center"
          >
            Register Now — It&apos;s Free
          </a>
          <a
            href="mailto:lexhack26@gmail.com"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-grotesk font-semibold text-lg transition-all duration-200 text-center"
          >
            Become a Sponsor →
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest">
            Hacking begins in
          </p>
          <Countdown />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.button>
    </section>
  );
}

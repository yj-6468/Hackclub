"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PIZZA_EMOJIS = ["🍕", "🍕", "🍕", "🍕", "🍕", "🍕", "🍕", "🍕", "🍕", "🍕"];

interface PizzaPiece {
  id: number;
  x: number;
  delay: number;
  size: number;
  rotation: number;
}

export default function Hero() {
  const [pizzaRain, setPizzaRain] = useState<PizzaPiece[]>([]);
  const [clickCount, setClickCount] = useState(0);

  // Konami code easter egg
  useEffect(() => {
    const KONAMI = [
      "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
      "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
      "b","a",
    ];
    let idx = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[idx]) {
        idx++;
        if (idx === KONAMI.length) {
          triggerPizzaRain();
          idx = 0;
        }
      } else {
        idx = 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function triggerPizzaRain() {
    const pieces: PizzaPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      delay: Math.random() * 0.8,
      size: 1.5 + Math.random() * 2,
      rotation: Math.random() * 360,
    }));
    setPizzaRain(pieces);
    setTimeout(() => setPizzaRain([]), 3000);
  }

  function handlePizzaClick() {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 5) {
      triggerPizzaRain();
      setClickCount(0);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-amber-50/30 pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-50/30 rounded-full blur-3xl" />
      </div>

      {/* Pizza rain easter egg */}
      {pizzaRain.map((p) => (
        <motion.div
          key={p.id}
          className="fixed pointer-events-none z-[100] select-none"
          style={{ left: `${p.x}vw`, top: "-60px", fontSize: `${p.size}rem` }}
          initial={{ y: "-60px", rotate: p.rotation, opacity: 1 }}
          animate={{ y: "110vh", rotate: p.rotation + 360, opacity: 0 }}
          transition={{ duration: 1.5, delay: p.delay, ease: "easeIn" }}
        >
          🍕
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-1.5 text-sm font-body font-medium text-[#EC3750] shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#EC3750] animate-pulse" />
          Part of the national Hack Club network
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
        >
          <span className="text-[#EC3750]">Hack Club</span>
          <br />
          <span className="text-gray-800">@ Lexington High</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-semibold text-2xl sm:text-3xl text-gray-700 mb-4"
        >
          Build stuff. Learn stuff.{" "}
          <button
            onClick={handlePizzaClick}
            className="text-[#EC3750] cursor-pointer hover:scale-110 transition-transform inline-block"
            title={`Click ${5 - clickCount} more times...`}
            aria-label="Pizza emoji - click for a surprise!"
          >
            Eat free food.
          </button>
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg text-gray-500 mb-10 max-w-xl mx-auto"
        >
          Every Thursday, 3:20–4:30 PM in Room 215.{" "}
          <span className="font-semibold text-gray-700">No experience needed.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/#join"
            className="px-8 py-4 bg-[#EC3750] text-white rounded-xl font-body font-semibold text-lg hover:bg-[#d42f45] transition-all hover:scale-105 shadow-lg shadow-red-200"
          >
            Join Us 👋
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 bg-white text-gray-800 rounded-xl font-body font-semibold text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:scale-105 shadow-sm"
          >
            See Our Work →
          </Link>
        </motion.div>

        {/* Visual placeholder card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="bg-gradient-to-br from-[#EC3750]/10 via-amber-50 to-purple-50 rounded-2xl p-8 border border-red-100 shadow-xl">
            <div className="flex items-center justify-center gap-6 text-4xl">
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.6 }}
              >
                👋
              </motion.span>
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                💻
              </motion.span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                ⚙️
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                🍕
              </motion.span>
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
              >
                🚀
              </motion.span>
            </div>
            <p className="font-mono text-sm text-gray-400 mt-6 text-center">
              <span className="text-[#EC3750]">const</span> club = &#123;{" "}
              <span className="text-purple-600">food</span>: <span className="text-green-600">&quot;free&quot;</span>,{" "}
              <span className="text-purple-600">experience</span>: <span className="text-green-600">&quot;optional&quot;</span>,{" "}
              <span className="text-purple-600">vibes</span>: <span className="text-green-600">&quot;immaculate&quot;</span>{" "}
              &#125;;
            </p>
          </div>
          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 text-sm font-body font-semibold text-gray-700"
          >
            🍕 Free food!
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 text-sm font-body font-semibold text-gray-700"
          >
            👾 No experience needed
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

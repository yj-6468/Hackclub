"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HackathonSpotlight() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 sm:p-12 text-white"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#EC3750]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(236,55,80,0.08)_0%,_transparent_70%)]" />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#EC3750]/20 border border-[#EC3750]/30 rounded-full px-4 py-1.5 text-sm font-body font-semibold text-[#EC3750] mb-6">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    🚀
                  </motion.span>
                  Coming June 2026
                </div>
                <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
                  LexHack &apos;26
                </h2>
                <p className="font-display font-semibold text-xl text-gray-300 mb-2">
                  Lexington&apos;s First-Ever Hackathon
                </p>
                <p className="font-body text-gray-400 text-lg mb-1">
                  48 hours. Infinite ideas.
                </p>
                <p className="font-body text-gray-500 text-sm">
                  June 2026 · Cary Memorial Library, Lexington MA
                </p>
              </div>

              <div className="flex flex-col gap-4 md:min-w-[200px]">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "48", label: "Hours" },
                    { val: "1st time", label: "In Lexington" },
                    { val: "∞", label: "Food" },
                    { val: "Free", label: "Always" },
                  ].map(({ val, label }) => (
                    <div key={label} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                      <div className="font-display font-bold text-2xl text-white">{val}</div>
                      <div className="font-body text-xs text-gray-400">{label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="https://lexhack.hackclublhs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 bg-[#EC3750] text-white rounded-xl font-body font-semibold text-center hover:bg-[#d42f45] transition-all hover:scale-105 shadow-lg shadow-red-900/30"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

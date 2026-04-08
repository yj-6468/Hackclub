"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const prizes = [
  {
    emoji: "🏆",
    title: "Grand Prize",
    desc: "The ultimate honor. Your project is so gloriously useless it transcends all reason. Sponsor-funded hardware awaits.",
    highlight: true,
    badge: "Grand Prize TBA 👀",
  },
  {
    emoji: "📱",
    title: "Most Likely to Go Viral",
    desc: "The project that, when shown to anyone, causes them to immediately try it out.",
    highlight: false,
  },
  {
    emoji: "😂",
    title: "Best Demo Performance",
    desc: "Judging day is a performance. You brought the energy, the bit, the chaos.",
    highlight: false,
  },
  {
    emoji: "🌟",
    title: "Best First-Time Hacker",
    desc: "Your first hackathon, your first project, your first taste of building something real. We celebrate the beginning.",
    highlight: false,
  },
];

function PrizeCard({ prize, index }: { prize: typeof prizes[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group ${
        prize.highlight
          ? "border-[#7C3AED]/40 bg-[#7C3AED]/5 col-span-full sm:col-span-1"
          : ""
      }`}
    >
      {prize.highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#10B981]/5 pointer-events-none" />
      )}

      <div>
        <span className="text-4xl group-hover:scale-110 transition-transform duration-200 inline-block">
          {prize.emoji}
        </span>
      </div>

      <div>
        <h3 className={`font-grotesk font-bold text-lg text-white mb-0.5 ${prize.highlight ? "text-xl" : ""}`}>
          {prize.title}
        </h3>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed flex-1">{prize.desc}</p>

      {prize.badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#9F67FF] text-xs font-mono font-semibold">
          {prize.badge}
        </div>
      )}
    </motion.div>
  );
}

export default function Prizes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#7C3AED]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-[#10B981] tracking-widest uppercase mb-4 block">
            // prizes
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Win Things for Building{" "}
            <span className="gradient-text">Useless Things</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Hardware, cloud credits, software licenses, and more — all for your deliberately terrible creations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          {prizes.map((prize, i) => (
            <PrizeCard key={prize.title} prize={prize} index={i} />
          ))}
        </div>

        {/* Sponsor note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center p-6 rounded-2xl border border-white/8 bg-white/2"
        >
          <p className="text-zinc-400 text-sm sm:text-base">
            <span className="text-white font-medium">Prize pool is sponsor-funded.</span>{" "}
            The more sponsors we get, the better the prizes.{" "}
            <a
              href="mailto:lexhackclub@gmail.com"
              className="text-[#7C3AED] hover:text-[#9F67FF] underline underline-offset-2 transition-colors"
            >
              Want to be a sponsor?
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

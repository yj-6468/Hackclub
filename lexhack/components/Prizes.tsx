"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const prizes = [
  {
    title: "Grand Prize",
    description:
      "Best combination of real-world impact and technical execution.",
    note: "Grand Prize TBA",
    magnitude: "M 0.0",
    tint: "#fcd34d",
    featured: true,
  },
  {
    title: "Most Creative Solution",
    description: "Unexpected approach to the problem.",
    magnitude: "M 1.2",
    tint: "#c4b5fd",
  },
  {
    title: "Best First-Time Hacker",
    description: "Remarkable first hackathon, first project, first step.",
    magnitude: "M 1.4",
    tint: "#7dd3fc",
  },
  {
    title: "Best Presentation",
    description: "The demo that had the whole room engaged.",
    magnitude: "M 1.6",
    tint: "#fda4af",
  },
  {
    title: "People's Choice",
    description: "Voted by all participants.",
    magnitude: "M 1.8",
    tint: "#a5f3fc",
  },
];

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="prizes"
      className="relative py-28 sm:py-36 bg-background overflow-hidden"
      ref={ref}
    >
      <StarField count={60} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(252,211,77,0.05), transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
            — The recognition
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.05] tracking-tight">
            <em className="font-[family-name:var(--font-italic)] italic text-accent">Prizes</em>.
          </h2>
          <p className="mt-6 text-lg text-text-body">
            Recognition for outstanding work across five categories.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`relative p-8 rounded-2xl bg-card-bg backdrop-blur-sm border border-card-border hover:border-white/20 transition-colors overflow-hidden ${
                prize.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* big star illustration */}
              <div className="relative h-20 flex items-center justify-start">
                <div
                  className="absolute w-40 h-40 rounded-full blur-3xl -left-8 -top-8 opacity-20"
                  style={{ background: prize.tint }}
                />
                <svg width="52" height="52" viewBox="0 0 52 52" className="relative" aria-hidden>
                  <path
                    d="M26 2 L29 22 L50 26 L29 30 L26 50 L23 30 L2 26 L23 22 Z"
                    fill={prize.tint}
                    opacity={prize.featured ? 1 : 0.9}
                  />
                </svg>
              </div>

              <div className="mt-4 flex items-baseline justify-between font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-text-muted">
                <span>Magnitude</span>
                <span style={{ color: prize.tint }}>{prize.magnitude}</span>
              </div>
              <div className="mt-3 h-px bg-card-border" />

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-normal text-foreground tracking-tight">
                {prize.title}
              </h3>
              <p className="mt-3 text-text-body leading-relaxed">
                {prize.description}
              </p>
              {prize.note && (
                <p className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em]" style={{ color: prize.tint }}>
                  {prize.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center text-sm text-text-muted"
        >
          Prize pool is sponsor-funded. Want to contribute?{" "}
          <a
            href="mailto:lexhackclub@gmail.com"
            className="text-primary hover:text-primary-light font-medium underline underline-offset-4 transition-colors"
          >
            Email us
          </a>
        </motion.p>
      </div>
    </section>
  );
}

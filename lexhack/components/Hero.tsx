"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";

/** Multi-layer nebula + milky-way background. */
function Sky() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #15132a 0%, #0a0d18 40%, #05070d 100%)",
        }}
      />
      {/* nebulae */}
      <div
        className="absolute"
        style={{
          left: "20%",
          top: "35%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(196,181,253,0.18) 0%, rgba(196,181,253,0) 55%)",
          filter: "blur(20px)",
          animation: "nebula-drift 40s ease-in-out infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          right: "15%",
          top: "55%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(253,164,175,0.14) 0%, rgba(253,164,175,0) 60%)",
          filter: "blur(20px)",
          animation: "nebula-drift 60s ease-in-out infinite reverse",
        }}
      />
      {/* milky way streak */}
      <div
        className="absolute inset-x-0"
        style={{
          top: "40%",
          height: 260,
          background:
            "linear-gradient(105deg, transparent 0%, rgba(196,181,253,0.1) 35%, rgba(253,164,175,0.12) 55%, transparent 85%)",
          filter: "blur(30px)",
          transform: "rotate(-8deg)",
          opacity: 0.8,
          animation: "aurora 14s ease-in-out infinite",
        }}
      />
    </div>
  );
}

const stats = [
  { k: "Jun 6 + 13", v: "Two Saturdays" },
  { k: "30–40", v: "Students" },
  { k: "1 week", v: "Build window" },
  { k: "Free", v: "No cost" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <Sky />
      <StarField count={180} />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* top dateline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-text-muted"
        >
          <span className="w-8 h-px bg-primary/60" />
          <span>Lexington · Massachusetts</span>
          <span className="opacity-40">◦</span>
          <span>Coords 42.447° N, 71.224° W</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-10 font-[family-name:var(--font-display)] font-normal leading-[0.92] tracking-[-0.03em] text-foreground text-[clamp(3rem,9vw,9rem)]"
        >
          Build
          <br />
          for{" "}
          <em className="font-[family-name:var(--font-italic)] italic text-accent">
            someone
          </em>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg sm:text-xl text-text-body leading-relaxed"
        >
          LexHack &rsquo;26 is Lexington&rsquo;s first hackathon. Pick a real
          person or imagine one. Understand their problem. Spend a week
          building something just for them.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="https://forms.gle/32xyrnJxHYpWm1937"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-background bg-foreground hover:bg-primary rounded-full transition-colors"
          >
            Register
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="mailto:lexhackclub@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground border border-card-border hover:border-foreground rounded-full transition-colors"
          >
            Become a Sponsor
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-5 max-w-xl text-sm text-text-muted leading-relaxed"
        >
          <p>
            US based High school students only (grades 9–12). Free to attend.
          </p>
          <p className="mt-1.5">
            After you register, you&rsquo;ll get a confirmation email with Day 1
            details, the Discord invite, and the Devpost submission deadline.
          </p>
        </motion.div>

        {/* stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-card-border pt-8 max-w-4xl"
        >
          {stats.map((s) => (
            <div key={s.k}>
              <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-normal text-foreground tracking-tight">
                {s.k}
              </div>
              <div className="mt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-text-muted">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

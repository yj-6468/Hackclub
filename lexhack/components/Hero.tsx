"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";

const badges = [
  { icon: "📅", text: "June 6 & 13, 2026" },
  { icon: "📍", text: "Lexington Community Center" },
  { icon: "🎟", text: "Free" },
  { icon: "👥", text: "30–40 students" },
];

/* Constellation SVG: two people connected by lines to a central laptop/project node */
function HeroConstellation() {
  return (
    <motion.svg
      viewBox="0 0 500 300"
      fill="none"
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      aria-hidden="true"
    >
      {/* Person 1 silhouette constellation */}
      <motion.circle cx="120" cy="80" r="3" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity, delay: 0 }} />
      <motion.circle cx="120" cy="120" r="2" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
      <motion.circle cx="100" cy="160" r="2" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
      <motion.circle cx="140" cy="160" r="2" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.3 }} />
      <motion.circle cx="105" cy="140" r="1.5" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 0.7 }} />
      <motion.circle cx="135" cy="140" r="1.5" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1.2 }} />

      {/* Person 1 lines */}
      <motion.line x1="120" y1="80" x2="120" y2="120" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.2 }} transition={{ duration: 1.5, delay: 0.5 }} />
      <motion.line x1="120" y1="120" x2="105" y2="140" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.2 }} transition={{ duration: 1, delay: 1 }} />
      <motion.line x1="120" y1="120" x2="135" y2="140" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.2 }} transition={{ duration: 1, delay: 1.2 }} />
      <motion.line x1="105" y1="140" x2="100" y2="160" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1, delay: 1.5 }} />
      <motion.line x1="135" y1="140" x2="140" y2="160" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1, delay: 1.5 }} />

      {/* Central project node — laptop shape */}
      <motion.circle cx="250" cy="130" r="4" fill="#C4B5FD" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0.5, 1, 0.5], scale: 1 }} transition={{ opacity: { duration: 3, repeat: Infinity }, scale: { duration: 0.8, delay: 2 } }} />
      <motion.rect x="235" y="140" width="30" height="18" rx="2" stroke="#C4B5FD" strokeWidth="1" fill="none" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.2, duration: 1 }} />
      <motion.line x1="230" y1="158" x2="270" y2="158" stroke="#C4B5FD" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 2.5, duration: 0.8 }} />

      {/* Connection lines: person 1 → project */}
      <motion.line x1="140" y1="120" x2="235" y2="130" stroke="#C4B5FD" strokeWidth="0.6" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1.5, delay: 2.5 }} />

      {/* Person 2 silhouette constellation */}
      <motion.circle cx="380" cy="85" r="3" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }} />
      <motion.circle cx="380" cy="125" r="2" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2 }} />
      <motion.circle cx="360" cy="165" r="2" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }} />
      <motion.circle cx="400" cy="165" r="2" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 5, repeat: Infinity, delay: 0.6 }} />
      <motion.circle cx="365" cy="145" r="1.5" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} />
      <motion.circle cx="395" cy="145" r="1.5" fill="#F5F5F5" initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 0.4 }} />

      {/* Person 2 lines */}
      <motion.line x1="380" y1="85" x2="380" y2="125" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.2 }} transition={{ duration: 1.5, delay: 0.8 }} />
      <motion.line x1="380" y1="125" x2="365" y2="145" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1, delay: 1.3 }} />
      <motion.line x1="380" y1="125" x2="395" y2="145" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1, delay: 1.5 }} />
      <motion.line x1="365" y1="145" x2="360" y2="165" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1, delay: 1.8 }} />
      <motion.line x1="395" y1="145" x2="400" y2="165" stroke="#F5F5F5" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1, delay: 1.8 }} />

      {/* Connection lines: person 2 → project */}
      <motion.line x1="360" y1="125" x2="270" y2="130" stroke="#C4B5FD" strokeWidth="0.6" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.15 }} transition={{ duration: 1.5, delay: 2.8 }} />

      {/* Scattered ambient stars */}
      {[
        [50, 50], [450, 40], [30, 200], [470, 220], [200, 30], [320, 250],
        [80, 250], [420, 60], [170, 220], [350, 30], [250, 260], [60, 130],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={i % 3 === 0 ? 1.5 : 1}
          fill="#F5F5F5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-alt" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl" />

      <StarField count={100} />

      {/* Hero constellation art */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-3xl h-[300px] relative">
          <HeroConstellation />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tight">
            Build for
            <span className="block text-primary drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              someone
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl text-text-body max-w-2xl mx-auto leading-relaxed"
        >
          LexHack &rsquo;26 is Lexington&rsquo;s first hackathon.
          <br />
          Pick a real person or imagine one. Understand their problem.
          <br />
          Spend a week building something just for them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-body bg-card-bg/60 backdrop-blur-sm rounded-full border border-card-border shadow-sm"
            >
              <span>{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://forms.gle/32xyrnJxHYpWm1937"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-background bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Register Free
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="mailto:lexhackclub@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-primary border-2 border-primary/30 hover:border-primary hover:bg-primary/10 rounded-full transition-all duration-300"
          >
            Become a Sponsor
          </a>
        </motion.div>

      </div>
    </section>
  );
}

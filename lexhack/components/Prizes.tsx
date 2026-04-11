"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const prizes = [
  {
    icon: "🏆",
    title: "Grand Prize",
    description: "Best combination of real-world impact and technical execution.",
    note: "Grand Prize TBA 👀",
    constellation: [[8, 6], [20, 4], [28, 12], [22, 22], [10, 18]] as [number, number][],
    glowColor: "rgba(245, 158, 11, 0.12)",
  },
  {
    icon: "💡",
    title: "Most Creative Solution",
    description: "Unexpected approach to the problem.",
    constellation: [[10, 8], [22, 5], [30, 15], [18, 22]] as [number, number][],
    glowColor: "rgba(168, 85, 247, 0.12)",
  },
  {
    icon: "🌟",
    title: "Best First-Time Hacker",
    description: "Remarkable first hackathon, first project, first step.",
    constellation: [[12, 10], [25, 6], [32, 18], [20, 24], [8, 20]] as [number, number][],
    glowColor: "rgba(34, 211, 238, 0.12)",
  },
  {
    icon: "🎤",
    title: "Best Presentation",
    description: "The demo that had the whole room engaged.",
    constellation: [[10, 5], [24, 8], [30, 20], [16, 24]] as [number, number][],
    glowColor: "rgba(251, 113, 133, 0.12)",
  },
  {
    icon: "👀",
    title: "People's Choice",
    description: "Voted by all participants.",
    constellation: [[8, 8], [18, 4], [28, 10], [24, 22], [12, 20]] as [number, number][],
    glowColor: "rgba(74, 222, 128, 0.12)",
  },
];

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="prizes"
      className="relative py-24 sm:py-32 bg-background overflow-hidden"
      ref={ref}
    >
      <StarField count={50} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Prizes
          </h2>
          <p className="mt-4 text-lg text-text-body">
            Recognition for outstanding work across five categories.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px -12px ${prize.glowColor}`,
                transition: { duration: 0.2 },
              }}
              className={`relative p-6 rounded-2xl bg-card-bg border border-card-border cursor-default overflow-hidden group ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Constellation pattern unique to each prize */}
              <svg
                className="absolute top-2 right-2 w-10 h-8 opacity-15 group-hover:opacity-30 transition-opacity"
                viewBox="0 0 35 28"
                aria-hidden="true"
              >
                {prize.constellation.map(([cx, cy], j) => (
                  <circle key={j} cx={cx} cy={cy} r="1.2" fill="#F5F5F5" />
                ))}
                {prize.constellation.slice(0, -1).map(([x1, y1], j) => {
                  const [x2, y2] = prize.constellation[j + 1];
                  return (
                    <line
                      key={`l${j}`}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="#F5F5F5"
                      strokeWidth="0.4"
                      opacity="0.5"
                    />
                  );
                })}
                {/* Close the constellation */}
                <line
                  x1={prize.constellation[prize.constellation.length - 1][0]}
                  y1={prize.constellation[prize.constellation.length - 1][1]}
                  x2={prize.constellation[0][0]}
                  y2={prize.constellation[0][1]}
                  stroke="#F5F5F5"
                  strokeWidth="0.4"
                  opacity="0.3"
                />
              </svg>

              <div className="relative">
                <div className="absolute -inset-1 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: prize.glowColor }} />
                <div className="relative w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-2xl border border-white/5">
                  {prize.icon}
                </div>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                {prize.title}
              </h3>
              <p className="mt-2 text-sm text-text-body leading-relaxed">
                {prize.description}
              </p>
              {prize.note && (
                <p className="mt-3 text-sm font-semibold text-primary">
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
            className="text-primary hover:text-primary-light font-medium underline underline-offset-2 transition-colors"
          >
            Email us
          </a>
        </motion.p>
      </div>
    </section>
  );
}

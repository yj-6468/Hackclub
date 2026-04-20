"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const criteria = [
  { label: "Impact / Usefulness", weight: 30, color: "#c4b5fd" },
  { label: "Technical Execution", weight: 25, color: "#7dd3fc" },
  { label: "Creativity", weight: 20, color: "#fda4af" },
  { label: "Design / UX", weight: 15, color: "#fcd34d" },
  { label: "Presentation", weight: 10, color: "#a5f3fc" },
];

export default function Judging() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 sm:py-36 bg-background-alt overflow-hidden" ref={ref}>
      <StarField count={40} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
            — The measure
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.05] tracking-tight">
            <em className="font-[family-name:var(--font-italic)] italic text-accent">Judging</em>.
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="space-y-4"
          >
            <div className="p-6 bg-card-bg backdrop-blur-sm rounded-2xl border border-card-border">
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                Format
              </div>
              <p className="text-text-body leading-relaxed">
                Every team presents for{" "}
                <strong className="text-foreground">7 minutes</strong>: 5-minute
                demo + 2-minute Q&amp;A from judges.
              </p>
            </div>
            <div className="p-6 bg-card-bg backdrop-blur-sm rounded-2xl border border-card-border">
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                Scoring
              </div>
              <p className="text-text-body leading-relaxed">
                Final scores:{" "}
                <strong className="text-foreground">60% from 4 judges</strong> +{" "}
                <strong className="text-foreground">40% participant vote</strong>.
                You can&rsquo;t vote for yourself.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-text-muted mb-5">
              Criteria
            </div>
            <div className="space-y-5">
              {criteria.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  <div className="flex justify-between items-baseline text-sm mb-2">
                    <span className="text-foreground">{item.label}</span>
                    <span className="font-[family-name:var(--font-mono)] font-bold" style={{ color: item.color }}>
                      {item.weight}%
                    </span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.weight * 3.33}%` } : { width: 0 }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                      className="h-full rounded-full"
                      style={{ background: item.color, maxWidth: "100%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

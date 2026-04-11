"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const criteria = [
  { label: "Impact / Usefulness", weight: 30, color: "bg-primary" },
  { label: "Technical Execution", weight: 25, color: "bg-blue-500" },
  { label: "Creativity", weight: 20, color: "bg-teal-100" },
  { label: "Design / UX", weight: 15, color: "bg-cyan-500" },
  { label: "Presentation", weight: 10, color: "bg-emerald-500" },
];

export default function Judging() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 bg-background-alt overflow-hidden" ref={ref}>
      <StarField count={30} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Judging
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-card-bg rounded-xl border border-card-border">
                <span className="text-lg mt-0.5">🎤</span>
                <p className="text-text-body">
                  Every team presents for{" "}
                  <strong className="text-foreground">7 minutes</strong>: 5-minute
                  demo + 2-minute Q&A from judges.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card-bg rounded-xl border border-card-border">
                <span className="text-lg mt-0.5">🍀</span>
                <p className="text-text-body">
                  Final scores:{" "}
                  <strong className="text-foreground">60% from 4 judges</strong> +{" "}
                  <strong className="text-foreground">40% from participant vote</strong>.
                  You can&rsquo;t vote for yourself.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Judging Criteria
              </h3>
              {criteria.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="font-bold text-text-muted">
                      {item.weight}%
                    </span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${item.weight}%` } : { width: 0 }
                      }
                      transition={{
                        delay: 0.3 + i * 0.1,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className={`h-full ${item.color} rounded-full`}
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

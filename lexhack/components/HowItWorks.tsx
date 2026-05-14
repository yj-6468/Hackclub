"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

type Step = {
  number: string;
  title: string;
  dateLabel: string;
  location: string;
  description: string;
  constellation: [number, number][];
};

const steps: Step[] = [
  {
    number: "01",
    title: "Find your person",
    dateLabel: "Sat Jun 6",
    location: "Community Center · 9 AM – 2 PM",
    description:
      "Pick who you're building for. Already have someone? Call or text them to interview. Building for a persona? Sketch out their life and frustrations.",
    constellation: [
      [20, 15],
      [30, 25],
      [25, 35],
    ],
  },
  {
    number: "02",
    title: "Build the solution",
    dateLabel: "Jun 7 – 12",
    location: "From Home · Discord",
    description:
      "You have a full week. Work from home, coordinate on Discord, share prototypes with your person (or test with people who fit your persona). Helpers are available all week.",
    constellation: [
      [15, 12],
      [28, 8],
      [35, 20],
      [22, 30],
      [10, 25],
      [30, 32],
    ],
  },
  {
    number: "03",
    title: "Demo Day",
    dateLabel: "Sat Jun 13",
    location: "Community Center · 9 AM – 2 PM",
    description:
      "Submit on Devpost by Friday, June 12 at 10:00 PM EST. On Day 2, present your project, explain who your person is, and show the working product. If your person came — they join you on stage. If not — share their reaction. Judges score every team; participants vote for People's Choice.",
    constellation: [
      [12, 10],
      [25, 5],
      [38, 12],
      [40, 28],
      [30, 35],
      [18, 32],
      [8, 22],
      [20, 20],
      [33, 20],
    ],
  },
];

function StepCard({
  step,
  index,
  inView,
}: {
  step: Step;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="relative p-8 sm:p-10 bg-card-bg backdrop-blur-sm rounded-2xl border border-card-border hover:border-white/20 transition-colors overflow-hidden group"
    >
      {/* Constellation illustration */}
      <svg className="w-full h-28" viewBox="0 0 50 40" aria-hidden>
        {step.constellation.slice(0, -1).map(([x1, y1], j) => {
          const [x2, y2] = step.constellation[j + 1];
          return (
            <motion.line
              key={`l${j}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#c4b5fd"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ delay: index * 0.2 + j * 0.15 + 0.4, duration: 0.7 }}
            />
          );
        })}
        {step.constellation.map(([cx, cy], j) => (
          <motion.g
            key={j}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.2 + j * 0.1, duration: 0.5 }}
          >
            {j === 0 && (
              <circle cx={cx} cy={cy} r="4" fill="#c4b5fd" opacity="0.2" />
            )}
            <path
              d={`M ${cx} ${cy - 2} L ${cx + 0.5} ${cy - 0.5} L ${cx + 2} ${cy} L ${cx + 0.5} ${cy + 0.5} L ${cx} ${cy + 2} L ${cx - 0.5} ${cy + 0.5} L ${cx - 2} ${cy} L ${cx - 0.5} ${cy - 0.5} Z`}
              fill={j === 0 ? "#c4b5fd" : "#ffffff"}
            />
          </motion.g>
        ))}
      </svg>

      {/* Step number + divider */}
      <div className="mt-6 flex items-baseline justify-between font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-text-muted">
        <span>Step {step.number}</span>
        <span className="text-primary">{step.dateLabel}</span>
      </div>
      <div className="mt-3 h-px bg-card-border" />

      <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-normal text-foreground tracking-tight leading-tight">
        {step.title}
      </h3>
      <p className="mt-3 text-sm text-text-muted font-[family-name:var(--font-mono)]">
        {step.location}
      </p>
      <p className="mt-4 text-text-body leading-relaxed">{step.description}</p>
    </motion.article>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 bg-background overflow-hidden"
      ref={ref}
    >
      <StarField count={70} />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,181,253,0.06), transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl"
        >
          <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
            — The arc
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.05] tracking-tight">
            How it{" "}
            <em className="font-[family-name:var(--font-italic)] italic text-accent">works</em>.
          </h2>
          <p className="mt-6 text-lg text-text-body">
            Two Saturdays. One week. One person&rsquo;s problem, solved.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

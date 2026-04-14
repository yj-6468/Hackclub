"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const steps = [
  {
    number: "01",
    title: "Find Your Person",
    date: "Saturday, June 6 · Community Center · 9 AM–2 PM",
    description:
      "Pick who you're building for. Already have someone? Call or text them to interview. Building for a persona? Sketch out their life and frustrations.",
    constellation: [
      [20, 15], [30, 25], [25, 35],
    ] as [number, number][],
    starCount: 1,
  },
  {
    number: "02",
    title: "Build the Solution",
    date: "June 7–12 · From Home · Discord",
    description:
      "You have a full week. Work from home, coordinate on Discord, share prototypes with your person (or test with people who fit your persona). Helpers are available all week.",
    constellation: [
      [15, 12], [28, 8], [35, 20], [22, 30], [10, 25], [30, 32],
    ] as [number, number][],
    starCount: 3,
  },
  {
    number: "03",
    title: "Demo Day",
    date: "Saturday, June 13 · Community Center · 9 AM–2 PM",
    description:
      "Present your project. Explain who your person is. Show the working product. If your person came — they join you on stage. If not — share their reaction. Then judges and participants vote.",
    constellation: [
      [12, 10], [25, 5], [38, 12], [40, 28], [30, 35], [18, 32],
      [8, 22], [20, 20], [33, 20],
    ] as [number, number][],
    starCount: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-background overflow-hidden"
      ref={sectionRef}
    >
      <StarField count={60} />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-blue-500/[0.02] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            How it works
          </h2>
          <p className="mt-4 text-lg text-text-body">
            Two Saturdays. One week. One person&rsquo;s problem, solved.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Vertical constellation line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full w-px bg-card-border" />
            <motion.div
              className="absolute top-0 left-0 w-px bg-gradient-to-b from-primary via-primary-light to-primary rounded-full"
              style={{ height: lineHeight }}
            />
            {/* Star dots along timeline */}
            {[0, 33, 66, 100].map((pos, i) => (
              <div
                key={i}
                className={`absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-star star-twinkle-${(i % 3) + 1}`}
                style={{ top: `${pos}%`, animationDelay: `${i * 1.2}s` }}
              />
            ))}
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.7,
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Center star node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-14 h-14 rounded-full bg-card-bg border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                    <span className="font-display text-lg font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    i % 2 === 1
                      ? "md:col-start-2 md:text-left"
                      : "md:text-right"
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="inline-flex md:hidden items-center gap-2 mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                    Step {step.number}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {step.date}
                  </p>
                  <p className="mt-4 text-text-body leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>

                {/* Constellation card */}
                <div
                  className={`mt-6 md:mt-0 ${
                    i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 16px 48px -12px rgba(245, 158, 11, 0.12)" }}
                    className="relative p-8 rounded-2xl bg-card-bg border border-card-border overflow-hidden"
                  >
                    {/* Constellation art inside card */}
                    <svg
                      className="w-full h-24"
                      viewBox="0 0 50 40"
                      aria-hidden="true"
                    >
                      {step.constellation.map(([cx, cy], j) => (
                        <motion.circle
                          key={j}
                          cx={cx}
                          cy={cy}
                          r={j === 0 ? 2.5 : 1.5}
                          fill={j === 0 ? "#C4B5FD" : "#F5F5F5"}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={
                            isInView
                              ? { opacity: j === 0 ? 0.9 : 0.6, scale: 1 }
                              : {}
                          }
                          transition={{ delay: i * 0.3 + j * 0.1, duration: 0.5 }}
                        />
                      ))}
                      {step.constellation.slice(0, -1).map(([x1, y1], j) => {
                        const [x2, y2] = step.constellation[j + 1];
                        return (
                          <motion.line
                            key={`l${j}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#F5F5F5"
                            strokeWidth="0.4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={
                              isInView
                                ? { pathLength: 1, opacity: 0.25 }
                                : {}
                            }
                            transition={{
                              delay: i * 0.3 + j * 0.15 + 0.3,
                              duration: 0.6,
                            }}
                          />
                        );
                      })}
                    </svg>
                    <p className="mt-4 text-sm font-medium text-text-muted text-center">
                      {step.date}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

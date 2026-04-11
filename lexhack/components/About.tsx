"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const personCards = [
  {
    icon: "👩‍🏫",
    title: "A teacher",
    description: "who spends 3 hours a week on attendance paperwork",
    constellation: [
      { x: 10, y: 10 },
      { x: 30, y: 5 },
      { x: 45, y: 18 },
      { x: 25, y: 30 },
    ],
  },
  {
    icon: "🏪",
    title: "A small business owner",
    description: "who tracks inventory with sticky notes",
    constellation: [
      { x: 8, y: 15 },
      { x: 20, y: 5 },
      { x: 40, y: 10 },
      { x: 35, y: 28 },
      { x: 15, y: 25 },
    ],
  },
  {
    icon: "👨‍👧",
    title: "A parent",
    description: "juggling 4 kids' schedules across 3 different apps",
    constellation: [
      { x: 15, y: 8 },
      { x: 35, y: 5 },
      { x: 42, y: 22 },
      { x: 20, y: 28 },
    ],
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-background-alt overflow-hidden">
      <StarField count={50} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Every project starts
              <span className="text-primary"> with a person</span>
            </h2>
            <p className="mt-6 text-lg text-text-body leading-relaxed">
              Every team picks one real person&mdash;someone they know, or a
              realistic persona&mdash;and builds a custom tool for their specific
              problem. Your mom who manages schedules on sticky notes. Your
              teacher who spends hours on attendance. A freelancer who loses
              track of invoices. The project has a real user before a single line
              of code is written.
            </p>
          </motion.div>

          {/* Two Paths */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid md:grid-cols-2 gap-6"
          >
            <div className="relative p-8 bg-card-bg rounded-2xl border border-card-border hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                Path A
              </div>
              <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-foreground">
                Build for someone you know
              </h3>
              <p className="mt-3 text-text-body leading-relaxed">
                Pick a real person in your life&mdash;a parent, teacher, coach,
                neighbor&mdash;and build for their exact problem. They don&rsquo;t
                have to come to the event, but they&rsquo;re welcome to show up
                on Demo Day to see what you built.
              </p>
              {/* Star accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/40 star-twinkle-1" />
            </div>

            <div className="relative p-8 bg-card-bg rounded-2xl border border-card-border hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 rounded-full">
                Path B
              </div>
              <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-foreground">
                Build for a persona
              </h3>
              <p className="mt-3 text-text-body leading-relaxed">
                Don&rsquo;t have a specific person? That&rsquo;s fine. Define a
                realistic persona&mdash;&ldquo;a college student who can never
                find study rooms&rdquo; or &ldquo;an elderly person who
                struggles with grocery apps.&rdquo; Ground it in reality. The
                more specific the person feels, the better the project.
              </p>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400/40 star-twinkle-2" />
            </div>
          </motion.div>

          {/* Equal Validity Note */}
          <motion.div
            variants={fadeUp}
            className="mt-8 px-6 py-4 bg-primary/8 border-l-4 border-primary rounded-r-xl"
          >
            <p className="text-text-body font-medium">
              Both paths are equally valid. Judges care about whether you deeply
              understood a human problem and built a thoughtful solution.
            </p>
          </motion.div>

          {/* Person Cards with constellation patterns */}
          <motion.div variants={fadeUp} className="mt-16">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Who might you build for?
            </h3>

            {/* Connecting line SVG */}
            <div className="relative">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
                aria-hidden="true"
              >
                {/* Central team node */}
                <circle cx="50%" cy="50%" r="4" fill="#C4B5FD" opacity="0.4" />
                <circle cx="50%" cy="50%" r="8" fill="none" stroke="#C4B5FD" strokeWidth="0.5" opacity="0.2" />
              </svg>

              <div className="grid sm:grid-cols-3 gap-4">
                {personCards.map((card) => (
                  <motion.div
                    key={card.title}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 12px 40px -8px rgba(245, 158, 11, 0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative p-6 rounded-2xl bg-card-bg border border-card-border cursor-default overflow-hidden group"
                  >
                    {/* Mini constellation pattern */}
                    <svg
                      className="absolute top-0 right-0 w-12 h-10 opacity-20 group-hover:opacity-40 transition-opacity"
                      viewBox="0 0 50 35"
                      aria-hidden="true"
                    >
                      {card.constellation.map((pt, i) => (
                        <circle key={i} cx={pt.x} cy={pt.y} r="1.5" fill="#F5F5F5" />
                      ))}
                      {card.constellation.slice(0, -1).map((pt, i) => (
                        <line
                          key={`l${i}`}
                          x1={pt.x}
                          y1={pt.y}
                          x2={card.constellation[i + 1].x}
                          y2={card.constellation[i + 1].y}
                          stroke="#F5F5F5"
                          strokeWidth="0.5"
                          opacity="0.4"
                        />
                      ))}
                    </svg>

                    {/* Star glow behind icon */}
                    <div className="relative">
                      <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative text-3xl">{card.icon}</span>
                    </div>
                    <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-sm text-text-body leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

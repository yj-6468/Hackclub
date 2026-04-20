"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function PathCard({
  letter,
  title,
  body,
  accent,
}: {
  letter: string;
  title: string;
  body: React.ReactNode;
  accent: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="relative p-8 bg-card-bg backdrop-blur-sm rounded-2xl border border-card-border hover:border-white/20 transition-colors overflow-hidden"
    >
      <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em]" style={{ color: accent }}>
        Path {letter}
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-normal text-foreground tracking-tight leading-tight">
        {title}
      </h3>
      <p className="mt-4 text-text-body leading-relaxed">{body}</p>
      {/* decorative star */}
      <svg className="absolute top-5 right-5" width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <path
          d="M8 0 L9 6.5 L16 8 L9 9.5 L8 16 L7 9.5 L0 8 L7 6.5 Z"
          fill={accent}
          opacity={0.85}
        />
      </svg>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-background-alt overflow-hidden">
      <StarField count={60} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,181,253,0.08), transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
            — The premise
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.05] tracking-tight"
          >
            Every project starts with a{" "}
            <em className="font-[family-name:var(--font-italic)] italic text-accent">person</em>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg text-text-body leading-relaxed"
          >
            Every team picks one real person &mdash; someone they know, or a
            realistic persona &mdash; and builds a tool for their specific
            problem. The project has a real user before a single line of code
            is written.
          </motion.p>

          {/* Two Paths */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <PathCard
              letter="A"
              title="Build for someone you know"
              accent="#c4b5fd"
              body={
                <>
                  Pick a real person in your life (a parent, teacher, coach,
                  neighbor) and build for their exact problem. They don&rsquo;t
                  have to come to the event, but they&rsquo;re welcome to show
                  up on Demo Day to see what you built.
                </>
              }
            />
            <PathCard
              letter="B"
              title="Build for a persona"
              accent="#7dd3fc"
              body={
                <>
                  Don&rsquo;t have a specific person? That&rsquo;s fine. Define
                  a realistic persona &mdash; &ldquo;a college student who can
                  never find study rooms&rdquo; or &ldquo;an elderly person who
                  struggles with grocery apps.&rdquo; Ground it in reality. The
                  more specific the person feels, the better the project.
                </>
              }
            />
          </div>

          {/* Equal Validity Note */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-start gap-4 px-6 py-5 bg-primary/[0.06] border-l-2 border-primary rounded-r-xl max-w-4xl"
          >
            <span className="font-[family-name:var(--font-display)] text-2xl italic text-accent leading-none mt-1">&ldquo;</span>
            <p className="text-text-body leading-relaxed">
              Both paths are equally valid. Judges care about whether you
              deeply understood a human problem and built a thoughtful solution.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

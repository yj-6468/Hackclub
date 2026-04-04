"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cursedProjects = [
  { emoji: "🧮", title: "Always Wrong Calculator", desc: "Off by a random amount every time. Mathematically cursed." },
  { emoji: "🌦", title: "Yesterday's Weather App", desc: "Hyper-accurate. Just 24 hours late. Every single time." },
  { emoji: "✅", title: "Infinite To-Do List", desc: "Completing a task adds two more. You will never be done." },
  { emoji: "🌿", title: "Houseplant Social Network", desc: "Fern just posted. Cactus liked it. Orchid is having drama." },
  { emoji: "🎵", title: "1.1x Spotify Clone", desc: "Every song, slightly too fast. Nobody asked for this." },
  { emoji: "🗺", title: "Navigation That Argues", desc: "It knows the way. It just disagrees with your route." },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-[#10B981] tracking-widest uppercase mb-4 block">
              // what is this?
            </span>
            <h2 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              What is{" "}
              <span className="gradient-text">LexHack</span>?
            </h2>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              A <strong className="text-white">hackathon</strong> is a collaborative event where you build a software
              project from scratch in a set amount of time. LexHack takes that premise and adds one twist:{" "}
              <strong className="text-[#10B981]">your project must be as absurd as possible.</strong>
            </p>
          </div>
        </FadeIn>

        {/* Two-column explainer */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="font-grotesk font-bold text-2xl text-white mb-3">
                The Engineering is Real
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                We&apos;re talking actual code, actual databases, actual APIs. Judges evaluate your
                technical execution — architecture, code quality, implementation difficulty. This
                isn&apos;t a Scratch project. This is real software engineering.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-8 h-full border-[#10B981]/20">
              <div className="text-4xl mb-4">🤡</div>
              <h3 className="font-grotesk font-bold text-2xl text-white mb-3">
                The Purpose is Deliberately Absurd
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                But it has to be useless. Gloriously, intentionally useless. No startup pitches.
                No &quot;it solves a real problem.&quot; We&apos;re here for chaos, creativity, and cursed ideas
                executed with technical excellence.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* History badge */}
        <FadeIn delay={0.1}>
          <div className="relative rounded-2xl border border-[#7C3AED]/40 bg-[#7C3AED]/5 p-8 mb-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 via-transparent to-[#10B981]/5 pointer-events-none" />
            <span className="text-4xl block mb-3">🏛</span>
            <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-white mb-2">
              You&apos;re Making History
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              This is Lexington&apos;s{" "}
              <strong className="text-white">first-ever hackathon.</strong>{" "}
              Participants of LexHack &apos;26 are founding something that could become a Lexington tradition
              for years to come. No pressure.{" "}
              <span className="text-[#10B981]">(okay, some pressure)</span>
            </p>
          </div>
        </FadeIn>

        {/* Cursed project ideas */}
        <FadeIn>
          <div className="text-center mb-10">
            <h3 className="font-grotesk font-bold text-3xl sm:text-4xl text-white mb-3">
              Example Projects{" "}
              <span className="font-mono text-[#10B981] text-2xl">(from our cursed imagination)</span>
            </h3>
            <p className="text-zinc-500">Your submission should be at least this deranged.</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cursedProjects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.07}>
              <div className="glass-card rounded-xl p-6 group cursor-default">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {p.emoji}
                </div>
                <h4 className="font-grotesk font-semibold text-white mb-2">{p.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarField from "./StarField";


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
              realistic persona&mdash;and builds a tool for their specific
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
                Pick a real person in your life (a parent, teacher, coach,
                neighbor) and build for their exact problem. They don&rsquo;t
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



        </motion.div>
      </div>
    </section>
  );
}

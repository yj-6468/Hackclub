"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import StarField from "./StarField";

const faqs = [
  { q: "What is a hackathon?", a: "A collaborative event where you build a software project from scratch. No prior experience needed." },
  { q: "Do I need coding experience?", a: "No! Beginners welcome. Workshops and helpers will help you get started." },
  { q: "Do I have to find a real person to build for?", a: "No. You can build for someone you know (Path A) or create a realistic persona representing someone who would benefit from your tool (Path B). Both are equally valid." },
  { q: "What if I want to bring my person to the event?", a: "They're welcome! If your person wants to show up on Day 1, Day 2, or both, that's great. But it's not required." },
  { q: "How do teams work?", a: "Teams of 2–4. Come with a team or form one at the event." },
  { q: "What should I bring?", a: "Laptop and charger. We provide food, WiFi, and everything else." },
  { q: "Is it really free?", a: "Yes, completely." },
  { q: "Do I need to be available all week?", a: "The build week is flexible. Work at your own pace. Discord check-ins are optional." },
  { q: "Is AI allowed?", a: "Yes. AI is fully allowed and encouraged. AI tools are part of how people build software now. Use any tools you want. Teams that use AI thoughtfully might score higher as well." },
  { q: "Where is the hackathon?", a: "Both days are at the Lexington Community Center, 39 Marrett Rd, Lexington, MA 02421. Same venue, same time (9 AM–2 PM) both Saturdays." },
  { q: "I'm a parent — is this safe?", a: "Absolutely. The Lexington Community Center is a trusted public space. Adult organizers and volunteers (helpers) are present at all times. We follow Hack Club's Code of Conduct." },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
      className="border-b border-card-border last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-text-muted pt-1.5 w-8 shrink-0">
          {num}
        </span>
        <span className="flex-1 font-[family-name:var(--font-display)] text-lg sm:text-xl font-normal text-foreground group-hover:text-primary transition-colors leading-snug">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-7 h-7 flex items-center justify-center text-text-muted text-xl font-light"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-[52px] pr-12 text-text-body leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-background overflow-hidden" ref={ref}>
      <StarField count={40} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
            — Questions
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.05] tracking-tight">
            Ask{" "}
            <em className="font-[family-name:var(--font-italic)] italic text-accent">anything</em>.
          </h2>
        </motion.div>

        <div className="mt-12">
          {isInView && faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center text-sm text-text-muted"
        >
          Still have questions?{" "}
          <a
            href="mailto:lexhackclub@gmail.com"
            className="text-primary hover:text-primary-light font-medium underline underline-offset-4 transition-colors"
          >
            Email us
          </a>{" "}
          or{" "}
          <a
            href="https://discord.gg/bmu6FukEtS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light font-medium underline underline-offset-4 transition-colors"
          >
            join our Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
}

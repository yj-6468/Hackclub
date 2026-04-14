"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import StarField from "./StarField";

const faqs = [
  {
    q: "What is a hackathon?",
    a: "A collaborative event where you build a software project from scratch. No prior experience needed.",
  },
  {
    q: "Do I need coding experience?",
    a: "No! Beginners welcome. Workshops and helpers will help you get started.",
  },
  {
    q: "Do I have to find a real person to build for?",
    a: "No. You can build for someone you know (Path A) or create a realistic persona representing someone who would benefit from your tool (Path B). Both are equally valid.",
  },
  {
    q: "What if I want to bring my person to the event?",
    a: "They're welcome! If your person wants to show up on Day 1, Day 2, or both, that's great. But it's not required.",
  },
  {
    q: "How do teams work?",
    a: "Teams of 2–4. Come with a team or form one at the event.",
  },
  {
    q: "What should I bring?",
    a: "Laptop and charger. We provide food, WiFi, and everything else.",
  },
  {
    q: "Is it really free?",
    a: "Yes, completely.",
  },
  {
    q: "Do I need to be available all week?",
    a: "The build week is flexible. Work at your own pace. Discord check-ins are optional.",
  },
  {
    q: "Is AI allowed?",
    a: "Yes. AI is fully allowed and encouraged. AI tools are part of how people build software now. Use any tools you want. Teams that use AI thoughtfully might score higher as well.",
  },
  {
    q: "Where is the hackathon?",
    a: "Both days are at the Lexington Community Center, 39 Marrett Rd, Lexington, MA 02421. Same venue, same time (9 AM–2 PM) both Saturdays.",
  },
  {
    q: "I'm a parent — is this safe?",
    a: "Absolutely. The Lexington Community Center is a trusted public space. Adult organizers and volunteers (helpers) are present at all times. We follow Hack Club's Code of Conduct.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="border-b border-card-border last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 pr-4">
          {/* Star dot indicator */}
          <div
            className={`shrink-0 w-2 h-2 rounded-full transition-all duration-300 ${
              open
                ? "bg-primary shadow-sm shadow-primary/50"
                : "bg-text-muted/30 group-hover:bg-primary/50"
            }`}
          />
          <span className="font-display text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {faq.q}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-card-border flex items-center justify-center text-text-muted text-lg font-light"
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
            <p className="pb-5 pl-5 text-text-body leading-relaxed pr-12">
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
    <section id="faq" className="relative py-24 sm:py-32 bg-background overflow-hidden" ref={ref}>
      <StarField count={35} />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Questions?
          </h2>
          <p className="mt-4 text-lg text-text-body">
            Everything you need to know about LexHack &rsquo;26.
          </p>
        </motion.div>

        <div className="mt-12">
          {isInView &&
            faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-text-muted text-sm">
            Still have questions?{" "}
            <a
              href="mailto:lexhackclub@gmail.com"
              className="text-primary hover:text-primary-light font-medium underline underline-offset-2 transition-colors"
            >
              Email us
            </a>{" "}
            or{" "}
            <a
              href="https://discord.gg/bmu6FukEtS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light font-medium underline underline-offset-2 transition-colors"
            >
              join our Discord
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

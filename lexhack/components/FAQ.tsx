"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    q: "What is a hackathon?",
    a: "A collaborative event where you build a software project from scratch in a set amount of time. Teams of 1–4 people compete to create something impressive over 48 hours. No prior experience needed — we have workshops, mentors, and snacks.",
  },
  {
    q: "Do I need coding experience?",
    a: "Nope! We genuinely welcome complete beginners. We'll have workshops to get you started and mentors available throughout the event. The best first-time projects are often the most creative — not the most complex.",
  },
  {
    q: "What should I bring?",
    a: "Your laptop, your charger, and your curiosity. We provide food, WiFi, power strips, and good vibes. Some people bring a second monitor or a mechanical keyboard.",
  },
  {
    q: "How do teams work?",
    a: "Teams are 1–4 people. You can come with a team already formed, or come solo and form one at the event during our team formation session at 10:15 AM on Day 1. Going solo is also completely valid — some of the best projects are built by one determined person.",
  },
  {
    q: "Is it really free?",
    a: "Yes. Completely free. Food, swag, workshops, mentorship — all included, no cost to you. LexHack is organized by Hack Club @ Lexington High School and fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit and other companies as well.",
  },
  {
    q: "What's the 'cursed' theme about?",
    a: "You build apps that are technically complicated but deliberately pointless or absurd. The goal is creative engineering.",
  },
  {
    q: "Do I need to stay overnight?",
    a: "No! The library closes at 5 PM each day. Between Day 1 and Day 2, you can continue hacking from home via our Discord server, attend a virtual check-in, and join the Midnight Cursed Hour. Or, you know, sleep. We won't judge.",
  },
  {
    q: "I'm a parent — is this safe?",
    a: "Absolutely. We have adult organizers present at all times, follow Hack Club's Code of Conduct, and the event is held at Cary Memorial Library — a trusted, public space. Your student is in good hands. Also they'll probably learn more in 48 hours here than in a month of most classes.",
  },
  {
    q: "Is the use of AI allowed?",
    a: "AI is fully allowed and encouraged. AI tools are part of how people build software now. There are no restrictions on AI usage at LexHack. We care about what you ship, not how you ship it",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border border-white/8 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/3 transition-colors duration-200 group"
        aria-expanded={open}
      >
        <span className="font-grotesk font-semibold text-white group-hover:text-[#9F67FF] transition-colors duration-200">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-500 group-hover:text-[#7C3AED] transition-colors flex-shrink-0 text-xl font-light"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-sm text-[#10B981] tracking-widest uppercase mb-4 block">
            // faq
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-zinc-400">
            Things people actually want to know, answered honestly.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Still have questions?{" "}
            <a
              href="mailto:lexhack26@gmail.com"
              className="text-[#7C3AED] hover:text-[#9F67FF] underline underline-offset-2 transition-colors"
            >
              Email us
            </a>{" "}
            or reach out on{" "}
            <a
              href="#"
              className="text-[#7C3AED] hover:text-[#9F67FF] underline underline-offset-2 transition-colors"
            >
              Discord
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

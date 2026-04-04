"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "I'd never coded before Hack Club. Now I've built my own website and deployed it — something I never thought I could do.",
    name: "Member Name",
    year: "Class of 20XX",
    color: "bg-red-50 border-red-100",
    accent: "text-[#EC3750]",
  },
  {
    text: "The free pizza alone is worth it. The coding skills are a bonus. But seriously — best snacks of any club at LHS.",
    name: "Member Name",
    year: "Class of 20XX",
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-600",
  },
  {
    text: "Best club at LHS. No contest. We actually build stuff that works — not just theory. And Daniel always orders extra cheese.",
    name: "Member Name",
    year: "Class of 20XX",
    color: "bg-purple-50 border-purple-100",
    accent: "text-purple-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Don&apos;t Just Take Our Word For It
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
            Hear from students who showed up not knowing a thing — and left building real stuff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className={`rounded-2xl p-6 border ${q.color} transition-shadow hover:shadow-md`}
            >
              <div className={`text-2xl font-display font-bold mb-4 ${q.accent}`}>&ldquo;</div>
              <p className="font-body text-gray-700 text-base leading-relaxed mb-6">
                {q.text}
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full border-2 ${q.color} flex items-center justify-center text-xl`}>
                  👤
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-gray-800">{q.name}</div>
                  <div className="font-body text-xs text-gray-500">{q.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

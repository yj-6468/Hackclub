"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "🚀",
    title: "Make Anything",
    description:
      "Websites, games, apps, AI tools, hardware. If you can dream it, you can build it. Each week you'll work on whatever excites you most.",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    emoji: "🍕",
    title: "Free Food",
    description:
      "Pizza, snacks, and drinks are on us every Thursday. Show up hungry, leave with a full stomach and new skills.",
    bg: "bg-red-50",
    border: "border-red-100",
    iconBg: "bg-red-100",
  },
  {
    emoji: "💻",
    title: "Ship It Live",
    description:
      "Everything you build goes live on the real internet. Build a portfolio of projects you actually made.",
    bg: "bg-purple-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    emoji: "🤝",
    title: "No Experience Needed",
    description:
      "Never touched code before? Great. Some of our best members started that way. We'll get you building on day one.",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
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
            What We Do
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
            Every Thursday is a mix of learning, building, and eating.<br />Here&apos;s what you can expect.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`rounded-2xl p-6 border ${f.bg} ${f.border} transition-shadow hover:shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center text-2xl mb-4`}>
                {f.emoji}
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const details = [
  { icon: "📅", label: "Every Thursday" },
  { icon: "🕒", label: "3:20 PM – 4:30 PM" },
  { icon: "📍", label: "Room 215, Lexington High School" },
  { icon: "🍕", label: "Free food" },
  { icon: "💡", label: "No experience required, ever" },
];

export default function JoinSection() {
  return (
    <section id="join" className="py-24 bg-gradient-to-br from-red-50 via-amber-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl mb-6">👋</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Ready to Join?
          </h2>
          <p className="font-body text-xl text-gray-500 mb-12 max-w-xl mx-auto">
            No sign-up needed. No experience needed. Just show up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 mb-8 text-left max-w-lg mx-auto"
        >
          <h3 className="font-display font-bold text-xl text-gray-900 mb-6 text-center">
            Meeting Info
          </h3>
          <div className="space-y-4">
            {details.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-2xl w-8 flex-shrink-0">{icon}</span>
                <span className="font-body text-base text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
<div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="https://discord.gg/bmu6FukEtS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-xl font-body font-semibold hover:bg-gray-800 transition-colors"
            >
              Join our Discord
            </a>
            <a
              href="https://www.instagram.com/lhshackclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-gray-800 rounded-xl font-body font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const day1 = [
  { time: "9:00 AM", event: "Doors open, check-in", icon: "🚪", type: "logistics" },
  { time: "9:30 AM", event: "Opening Ceremony", icon: "🎤", type: "ceremony" },
  { time: "10:15 AM", event: "Team formation + brainstorming", icon: "🤝", type: "logistics" },
  { time: "10:45 AM", event: "Hacking begins!", icon: "⚡", type: "milestone" },
  { time: "11:30 AM", event: "Workshop 1: Getting Started", icon: "📚", type: "workshop" },
  { time: "12:30 PM", event: "Lunch", icon: "🍕", type: "food" },
  { time: "1:15 PM", event: "Workshop 2: Technical Deep-Dive", icon: "🔬", type: "workshop" },
  { time: "2:00 PM", event: "Mentor office hours", icon: "💬", type: "mentorship" },
  { time: "3:30 PM", event: "Snacks + energy break", icon: "🍫", type: "food" },
  { time: "5:00 PM", event: "Day 1 ends at library — continue from home via Discord", icon: "🏠", type: "logistics" },
  { time: "8:00 PM", event: "Virtual check-in on Discord", icon: "💻", type: "virtual" },
  { time: "11:00 PM", event: "Midnight Cursed Hour on Discord", icon: "🌙", type: "virtual" },
];

const day2 = [
  { time: "9:00 AM", event: "Doors open, breakfast", icon: "🍳", type: "food" },
  { time: "10:00 AM", event: "Final hacking sprint", icon: "🏃", type: "milestone" },
  { time: "12:00 PM", event: "Lunch", icon: "🍕", type: "food" },
  { time: "1:30 PM", event: "Submissions close (Devpost)", icon: "🔒", type: "milestone" },
  { time: "1:45 PM", event: "Judging begins (science-fair style)", icon: "⚖️", type: "ceremony" },
  { time: "3:30 PM", event: "Closing Ceremony + prizes", icon: "🏆", type: "ceremony" },
  { time: "5:00 PM", event: "Event ends", icon: "👋", type: "logistics" },
];

const typeColors: Record<string, string> = {
  milestone: "border-l-[#7C3AED] bg-[#7C3AED]/10",
  ceremony: "border-l-[#10B981] bg-[#10B981]/10",
  workshop: "border-l-blue-500 bg-blue-500/10",
  food: "border-l-orange-400 bg-orange-400/10",
  virtual: "border-l-pink-500 bg-pink-500/10",
  logistics: "border-l-zinc-600 bg-zinc-800/30",
  mentorship: "border-l-yellow-400 bg-yellow-400/10",
};

function TimelineItem({ item, index }: { item: (typeof day1)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`flex gap-4 p-4 rounded-xl border-l-2 ${typeColors[item.type]} transition-all duration-200 hover:scale-[1.01]`}
    >
      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span className="font-grotesk font-semibold text-white text-sm sm:text-base">
            {item.event}
          </span>
          <span className="font-mono text-xs text-zinc-500 flex-shrink-0">
            {item.time}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = activeDay === 1 ? day1 : day2;

  return (
    <section id="schedule" className="py-24 sm:py-32 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm text-[#10B981] tracking-widest uppercase mb-4 block">
            // schedule
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-4">
            48 Hours of{" "}
            <span className="gradient-text">Organized Chaos</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Every minute is accounted for. (The chaos is scheduled too.)
          </p>
        </motion.div>

        {/* Day toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex rounded-xl bg-white/5 p-1 mb-8 border border-white/10"
        >
          {([1, 2] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-1 py-3 px-4 rounded-lg font-grotesk font-semibold text-sm transition-all duration-200 ${
                activeDay === day
                  ? "bg-[#7C3AED] text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Day {day} — {day === 1 ? "Saturday" : "Sunday"}
              {day === 1 && (
                <span className="ml-2 text-xs font-mono opacity-70">(+ virtual night)</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-2">
          {items.map((item, i) => (
            <TimelineItem key={`${activeDay}-${i}`} item={item} index={i} />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 text-center"
        >
          <p className="text-zinc-500 text-sm">
            <span className="text-zinc-300 font-medium">Note:</span> The library closes at 5 PM each day. Overnight hacking continues via Discord — or you can sleep like a normal person. We won&apos;t judge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

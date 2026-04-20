"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import StarField from "./StarField";

type TabKey = "day1" | "buildweek" | "day2";

const tabs: { key: TabKey; label: string; date: string; location: string }[] = [
  { key: "day1", label: "Day 1", date: "Sat Jun 6", location: "Community Center" },
  { key: "buildweek", label: "Build Week", date: "Jun 7 – 12", location: "Remote · Discord" },
  { key: "day2", label: "Day 2 · Demo", date: "Sat Jun 13", location: "Community Center" },
];

const scheduleData: Record<TabKey, { time: string; event: string; highlight?: boolean }[]> = {
  day1: [
    { time: "9:00 AM", event: "Organizers arrive, setup" },
    { time: "9:30 AM", event: "Doors open, check-in, name tags, swag, snacks" },
    { time: "10:00 AM", event: "Opening Ceremony", highlight: true },
    { time: "10:30 AM", event: "Team formation + person selection" },
    { time: "11:15 AM", event: "Lunch" },
    { time: "11:45 AM", event: "Each team presents their person's problem (1 min each)", highlight: true },
    { time: "12:00 PM", event: "Planning session: sketch solution, choose tech stack" },
    { time: "12:30 PM", event: "Workshop: Getting Started (Git, APIs, deployment)" },
    { time: "1:15 PM", event: "Hacking begins", highlight: true },
    { time: "1:45 PM", event: "Snacks and wrap-up" },
    { time: "2:00 PM", event: "Day 1 ends, continue building from home" },
  ],
  buildweek: [
    { time: "Mon 7 PM", event: "Discord check-in (optional)" },
    { time: "Wed 7 PM", event: "Midweek check-in (optional)" },
    { time: "Fri 7 PM", event: "Final check-in before Demo Day (optional)", highlight: true },
    { time: "All week", event: "Helpers available on Discord" },
  ],
  day2: [
    { time: "9:00 AM", event: "Doors open, breakfast, final polish" },
    { time: "10:00 AM", event: "Submissions close", highlight: true },
    { time: "10:45 AM", event: "Presentations begin (7 min per team: 5 min demo + 2 min Q&A)", highlight: true },
    { time: "12:15 PM", event: "Lunch" },
    { time: "12:45 PM", event: "Feedback round (persons present give live feedback; for remote persons, teams share their reaction)" },
    { time: "1:15 PM", event: "Voting (60% judges + 40% participants)", highlight: true },
    { time: "1:45 PM", event: "Closing Ceremony: winners, prizes, group photo", highlight: true },
    { time: "2:00 PM", event: "Event ends" },
  ],
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState<TabKey>("day1");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="schedule"
      className="relative py-28 sm:py-36 bg-background-alt overflow-hidden"
      ref={ref}
    >
      <StarField count={50} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-primary">
            — The itinerary
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.05] tracking-tight">
            <em className="font-[family-name:var(--font-italic)] italic text-accent">Schedule</em>.
          </h2>
          <p className="mt-6 text-lg text-text-body">
            Two Saturdays in person, one week building remotely.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-12 grid sm:grid-cols-3 gap-3"
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 py-5 rounded-xl text-left transition-all duration-300 border overflow-hidden ${
                  active
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card-bg border-card-border hover:border-white/20 text-foreground"
                }`}
              >
                <div className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] ${active ? "opacity-60" : "text-text-muted"}`}>
                  {tab.date}
                </div>
                <div className="mt-1.5 font-[family-name:var(--font-display)] text-xl font-normal tracking-tight">
                  {tab.label}
                </div>
                <div className={`mt-0.5 text-xs ${active ? "opacity-70" : "text-text-muted"}`}>
                  {tab.location}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Schedule Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="relative">
            <div className="absolute left-[calc(5rem+6px)] sm:left-[calc(5.5rem+6px)] top-2 bottom-2 w-px bg-card-border" />

            <div className="space-y-0">
              {scheduleData[activeTab].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="relative flex items-start gap-4 sm:gap-6 py-3 group"
                >
                  <span className="w-20 sm:w-24 pt-0.5 text-right font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-text-muted shrink-0">
                    {item.time}
                  </span>

                  <div className="relative shrink-0 mt-[3px]">
                    {item.highlight ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                        <path
                          d="M7 0 L8 5.5 L14 7 L8 8.5 L7 14 L6 8.5 L0 7 L6 5.5 Z"
                          fill="#c4b5fd"
                        />
                      </svg>
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-card-border bg-background-alt group-hover:border-primary/50 transition-colors" />
                    )}
                  </div>

                  <div className="flex-1 pb-1">
                    <span
                      className={`text-base ${
                        item.highlight ? "font-medium text-foreground" : "text-text-body"
                      }`}
                    >
                      {item.event}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

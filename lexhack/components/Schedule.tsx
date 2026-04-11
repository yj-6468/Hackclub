"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import StarField from "./StarField";

type TabKey = "day1" | "buildweek" | "day2";

const tabs: { key: TabKey; label: string; date: string; location: string }[] = [
  {
    key: "day1",
    label: "Day 1",
    date: "Sat, June 6",
    location: "Cary Memorial Library",
  },
  {
    key: "buildweek",
    label: "Build Week",
    date: "June 7–12",
    location: "Remote via Discord",
  },
  {
    key: "day2",
    label: "Day 2",
    date: "Sat, June 13",
    location: "Community Center",
  },
];

const scheduleData: Record<TabKey, { time: string; event: string; highlight?: boolean }[]> = {
  day1: [
    { time: "11:30 AM", event: "Doors open, check-in, breakfast snacks" },
    { time: "12:00 PM", event: "Opening Ceremony", highlight: true },
    {
      time: "12:30 PM",
      event: "Team formation + person selection",
    },
    { time: "1:15 PM", event: "Lunch" },
    {
      time: "1:45 PM",
      event: "Each team finds their person's problem to solve",
      highlight: true,
    },
    {
      time: "2:00 PM",
      event: "Planning session: sketch solution, choose tech stack",
    },
    {
      time: "2:30 PM",
      event: "Workshop: Getting Started (Git, APIs, deployment)",
    },
    { time: "3:15 PM", event: "Hacking begins", highlight: true },
    { time: "4:15 PM", event: "Snacks and wrap-up" },
    { time: "4:30 PM", event: "Day 1 ends, continue building from home" },
  ],
  buildweek: [
    { time: "Mon 7 PM", event: "Discord check-in (optional)" },
    { time: "Wed 7 PM", event: "Midweek check-in (optional)" },
    {
      time: "Fri 7 PM",
      event: "Final check-in before Demo Day (optional)",
      highlight: true,
    },
    { time: "All week", event: "Helpers available on Discord" },
  ],
  day2: [
    { time: "9:00 AM", event: "Doors open, breakfast, final polish" },
    { time: "10:00 AM", event: "Submissions close", highlight: true },
    {
      time: "10:45 AM",
      event: "Presentations begin (7 min per team: 5 min demo + 2 min Q&A)",
      highlight: true,
    },
    { time: "12:15 PM", event: "Lunch" },
    {
      time: "12:45 PM",
      event:
        "Feedback round (persons present give live feedback; for remote persons, teams share their reaction)",
    },
    {
      time: "1:15 PM",
      event: "Voting (60% judges + 40% participants)",
      highlight: true,
    },
    {
      time: "1:45 PM",
      event: "Closing Ceremony: winners, prizes, group photo",
      highlight: true,
    },
    { time: "2:00 PM", event: "Event ends" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState<TabKey>("day1");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="schedule"
      className="relative py-24 sm:py-32 bg-background-alt overflow-hidden"
      ref={ref}
    >
      <StarField count={40} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Schedule
          </h2>
          <p className="mt-4 text-lg text-text-body">
            Two Saturdays in-person, one week building remotely.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 flex flex-col sm:flex-row gap-3 justify-center"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-4 rounded-xl text-left sm:text-center transition-all duration-300 border ${
                activeTab === tab.key
                  ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5"
                  : "bg-card-bg border-card-border hover:border-primary/20 hover:bg-card-bg/80"
              }`}
            >
              {/* Star indicator for active tab */}
              {activeTab === tab.key && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/50" />
              )}
              <span
                className={`block font-display text-lg font-bold ${
                  activeTab === tab.key ? "text-primary" : "text-foreground"
                }`}
              >
                {tab.label}
              </span>
              <span className="block text-sm text-text-muted mt-0.5">
                {tab.date} · {tab.location}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Schedule Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-10"
        >
          <div className="relative">
            {/* Constellation timeline line */}
            <div className="absolute left-[7px] sm:left-[88px] top-2 bottom-2 w-px bg-card-border">
              {/* Dim star dots along line */}
              {scheduleData[activeTab].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-star/30"
                  style={{
                    top: `${(i / (scheduleData[activeTab].length - 1)) * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="space-y-0">
              {scheduleData[activeTab].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="relative flex items-start gap-4 sm:gap-6 py-3 group"
                >
                  {/* Time */}
                  <span className="hidden sm:block w-20 text-right text-sm font-medium text-text-muted shrink-0 pt-0.5">
                    {item.time}
                  </span>

                  {/* Star dot */}
                  <div className="relative shrink-0 mt-1.5">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        item.highlight
                          ? "border-primary bg-primary/30 shadow-sm shadow-primary/30"
                          : "border-card-border bg-card-bg group-hover:border-primary/40"
                      }`}
                    />
                    {item.highlight && (
                      <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-primary/20 animate-ping" />
                    )}
                  </div>

                  {/* Event */}
                  <div className="flex-1 pb-1">
                    <span className="sm:hidden text-xs font-medium text-text-muted block mb-1">
                      {item.time}
                    </span>
                    <span
                      className={`text-base ${
                        item.highlight
                          ? "font-semibold text-foreground"
                          : "text-text-body"
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

"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-06-20T09:00:00-04:00"); // June 20, 2026 9AM EDT

interface TimeUnit {
  value: number;
  label: string;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [units, setUnits] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hours" },
    { value: 0, label: "Mins" },
    { value: 0, label: "Secs" },
  ]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = Date.now();
      const diff = TARGET_DATE.getTime() - now;
      if (diff <= 0) {
        setUnits([
          { value: 0, label: "Days" },
          { value: 0, label: "Hours" },
          { value: 0, label: "Mins" },
          { value: 0, label: "Secs" },
        ]);
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setUnits([
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: mins, label: "Mins" },
        { value: secs, label: "Secs" },
      ]);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[56px] sm:min-w-[72px] text-center">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {pad(unit.value)}
              </span>
            </div>
            <span className="text-xs text-zinc-500 mt-1.5 font-medium tracking-widest uppercase">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-2xl font-mono text-zinc-600 -mt-5 select-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

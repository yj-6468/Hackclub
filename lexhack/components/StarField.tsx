"use client";

import { useMemo } from "react";

interface StarFieldProps {
  count?: number;
  className?: string;
}

export default function StarField({ count = 80, className = "" }: StarFieldProps) {
  const stars = useMemo(() => {
    const seed = 42;
    const rng = (i: number) => {
      const x = Math.sin(seed + i * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };

    const r = (v: number) => Math.round(v * 10000) / 10000;

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: r(rng(i * 3) * 100),
      y: r(rng(i * 3 + 1) * 100),
      size: rng(i * 3 + 2) < 0.15 ? 3.5 : rng(i * 3 + 2) < 0.4 ? 2.5 : 1.5,
      twinkleClass:
        rng(i * 7) < 0.33
          ? "star-twinkle-1"
          : rng(i * 7) < 0.66
          ? "star-twinkle-2"
          : "star-twinkle-3",
      delay: r(rng(i * 11) * 6),
      opacity: rng(i * 13) < 0.3 ? 1 : rng(i * 13) < 0.6 ? 0.9 : 0.7,
    }));
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-star ${star.twinkleClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

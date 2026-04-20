"use client";

import { useMemo } from "react";

interface StarFieldProps {
  count?: number;
  className?: string;
}

/**
 * Sparkle-style star field: four-point stars with soft halo + jittered dots.
 */
export default function StarField({ count = 80, className = "" }: StarFieldProps) {
  const stars = useMemo(() => {
    const seed = 42;
    const rng = (i: number) => {
      const x = Math.sin(seed + i * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    const r = (v: number) => Math.round(v * 10000) / 10000;

    return Array.from({ length: count }, (_, i) => {
      const t = rng(i * 3 + 2);
      const isSparkle = t < 0.18;
      const isColored = rng(i * 19) < 0.08;
      const colorPick = rng(i * 23);
      const color = isColored
        ? colorPick < 0.5
          ? "#c4b5fd"
          : colorPick < 0.8
          ? "#fda4af"
          : "#7dd3fc"
        : "#ffffff";
      return {
        id: i,
        x: r(rng(i * 3) * 100),
        y: r(rng(i * 3 + 1) * 100),
        size: isSparkle ? 6 : t < 0.4 ? 2.5 : 1.5,
        sparkle: isSparkle,
        color,
        twinkleClass:
          rng(i * 7) < 0.33 ? "star-twinkle-1" : rng(i * 7) < 0.66 ? "star-twinkle-2" : "star-twinkle-3",
        delay: r(rng(i * 11) * 6),
        opacity: rng(i * 13) < 0.3 ? 1 : rng(i * 13) < 0.6 ? 0.85 : 0.6,
      };
    });
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {stars.map((star) =>
        star.sparkle ? (
          <svg
            key={star.id}
            className={star.twinkleClass}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              transform: "translate(-50%, -50%)",
            }}
            viewBox="0 0 10 10"
          >
            <path
              d="M5 0 L5.8 4.2 L10 5 L5.8 5.8 L5 10 L4.2 5.8 L0 5 L4.2 4.2 Z"
              fill={star.color}
            />
          </svg>
        ) : (
          <div
            key={star.id}
            className={`absolute rounded-full ${star.twinkleClass}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: star.color,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
            }}
          />
        ),
      )}
    </div>
  );
}

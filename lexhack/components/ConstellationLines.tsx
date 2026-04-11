"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ConstellationLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const starsRef = useRef<{ x: number; y: number; vx: number; vy: number; size: number }[]>([]);
  const frameRef = useRef<number>(0);

  const initStars = useCallback((w: number, h: number) => {
    const count = Math.min(60, Math.floor((w * h) / 15000));
    starsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() < 0.2 ? 2 : 1,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    if (!isMobile) {
      canvas.addEventListener("mousemove", handleMouse);
      canvas.addEventListener("mouseleave", handleLeave);
    }

    const connectionDist = 120;
    const mouseDist = 180;

    const animate = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;

      // Update positions
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > w) s.vx *= -1;
        if (s.y < 0 || s.y > h) s.vy *= -1;
      }

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.strokeStyle = `rgba(245, 245, 245, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse connections (desktop only)
      if (!isMobile) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        for (const s of stars) {
          const dx = s.x - mx;
          const dy = s.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseDist) {
            const alpha = (1 - dist / mouseDist) * 0.25;
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
            ctx.lineWidth = 0.5;
          }
        }
      }

      // Draw stars
      for (const s of stars) {
        ctx.fillStyle = "rgba(245, 245, 245, 0.7)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      if (!isMobile) {
        canvas.removeEventListener("mousemove", handleMouse);
        canvas.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, [initStars]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-0"
      aria-hidden="true"
    />
  );
}

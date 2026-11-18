"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./Providers";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
};

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.trim().replace("#", "");
  const value =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;
  const parsed = Number.parseInt(value, 16);
  if (Number.isNaN(parsed)) {
    return [255, 107, 26];
  }
  return [(parsed >> 16) & 255, (parsed >> 8) & 255, parsed & 255];
}

export function EmberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    const [red, green, blue] = hexToRgb(accent);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let last = performance.now();
    let inView = true;
    let visible = !document.hidden;

    const buildParticles = () => {
      const count = width < 640 ? 14 : 34;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.7 + Math.random() * 1.7,
        speed: 0.08 + Math.random() * 0.22,
        drift: 4 + Math.random() * 14,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.12 + Math.random() * 0.28,
      }));
    };

    const draw = (now: number) => {
      const delta = Math.min(2, (now - last) / 16.667);
      last = now;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reduceMotion) {
          particle.y -= particle.speed * delta;
          particle.x +=
            Math.sin(now / 2600 + particle.phase) * 0.06 * delta;
          if (particle.y < -8) {
            particle.y = height + 8;
            particle.x = Math.random() * width;
          }
          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${particle.alpha})`;
        context.fill();
      }

      if (!reduceMotion) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      buildParticles();
      if (reduceMotion) {
        draw(performance.now());
      }
    };

    const start = () => {
      if (reduceMotion) {
        draw(performance.now());
        return;
      }
      if (frame !== 0 || !inView || !visible) return;
      last = performance.now();
      frame = window.requestAnimationFrame(draw);
    };

    const stop = () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) {
        start();
      } else {
        stop();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0 },
    );

    resize();
    observer.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);
    start();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

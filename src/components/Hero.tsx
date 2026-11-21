"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";
import { withBasePath } from "@/lib/utils";
import hefestotechShot from "@/assets/images/hefestotech-home.webp";
import { copy, site } from "@/data/site";
import { TypingRole } from "./TypingRole";
import { useLocale } from "./Providers";

const EASE = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const { locale } = useLocale();
  const reduce = useReducedMotionSafe();
  const nameRef = useRef<HTMLHeadingElement>(null);

  // The pointer heats the name; the hot spot follows with inertia (lerp).
  useEffect(() => {
    const el = nameRef.current;
    if (!el || reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let tx = 78;
    let ty = 30;
    let x = tx;
    let y = ty;
    let raf = 0;

    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
      raf =
        Math.abs(tx - x) + Math.abs(ty - y) > 0.05
          ? requestAnimationFrame(tick)
          : 0;
    };

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      tx = ((event.clientX - rect.left) / rect.width) * 100;
      ty = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--heat-opacity", "1");
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.15 : 0.5,
      delay: reduce ? 0 : delay,
      ease: EASE,
    },
  });

  const works = [
    {
      n: "01",
      name: "HefestoTech",
      meta: copy.hero.workHefesto[locale],
      href: "#proyectos",
    },
    {
      n: "02",
      name: "POS Multi",
      meta: copy.hero.workPos[locale],
      href: "#proyectos",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-[calc(var(--nav-height)+2rem)]"
    >
      <div className="container-page relative z-10">
        <motion.p
          {...fade(0)}
          className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-1"
        >
          <span className="text-text">
            {copy.hero.availability[locale]}
          </span>
          <span>{copy.hero.location[locale]}</span>
        </motion.p>

        <h1
          ref={nameRef}
          className="heat mt-6 font-display text-[clamp(4.5rem,17vw,14rem)] font-bold leading-[0.86] tracking-[-0.045em]"
        >
          <span className="mask-line">
            <span className="name-rise" data-text="Isaias">Isaias</span>
          </span>
          <span className="mask-line">
            <span className="name-rise" data-text="Duran.">Duran.</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="hero-enter max-w-[34rem]">
            <div className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-0.5 font-mono text-sm text-accent"
              >
                &gt;
              </span>
              <TypingRole key={locale} />
            </div>
            <p className="lead mt-5">{copy.hero.lead[locale]}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#proyectos" className="btn btn-primary">
                {copy.hero.ctaProjects[locale]}
              </a>
              <a href="#contacto" className="btn btn-secondary">
                {copy.hero.ctaContact[locale]}
              </a>
              <a
                href={withBasePath(site.cv)}
                download
                className="btn btn-ghost px-3"
                aria-label={copy.hero.cv[locale]}
              >
                <DownloadSimple size={17} weight="bold" aria-hidden="true" />
                <span>CV</span>
              </a>
            </div>
          </div>

          <motion.div
            {...fade(0.7)}
            className="grid gap-6 sm:grid-cols-[1fr_11rem] lg:items-end"
          >
            <nav aria-label={copy.hero.worksLabel[locale]}>
              {works.map((work) => (
                <a key={work.n} href={work.href} className="work-row">
                  <span className="mono-meta">{work.n}</span>
                  <span className="font-display text-xl font-semibold">
                    {work.name}
                  </span>
                  <span className="mono-meta inline-flex items-center gap-1.5">
                    {work.meta}
                    <ArrowUpRight
                      className="arrow shrink-0"
                      size={13}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
              <div className="border-t border-border-strong" />
            </nav>

            <motion.div
              initial={
                reduce ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }
              }
              animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }}
              transition={{
                duration: reduce ? 0.15 : 0.9,
                delay: reduce ? 0 : 0.8,
                ease: EASE,
              }}
              className="hidden sm:block"
            >
              <a
                href="https://hefestotech.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/4] overflow-hidden border border-border-strong bg-surface-2"
              >
                <Image
                  src={hefestotechShot}
                  alt={copy.hero.shotAlt[locale]}
                  fill
                  priority
                  sizes="176px"
                  className="object-cover object-left-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

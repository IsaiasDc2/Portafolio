"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";
import { withBasePath } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
} from "@phosphor-icons/react";
import hefestotechShot from "@/assets/images/hefestotech-home.webp";
import { copy, site } from "@/data/site";
import { EmberBackground } from "./EmberBackground";
import { TypingRole } from "./TypingRole";
import { useLocale } from "./Providers";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const reducedItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.15 } },
};

export function Hero() {
  const { locale } = useLocale();
  const reduce = useReducedMotionSafe();
  const variants = reduce ? reducedItem : item;

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-[calc(var(--nav-height)+2.5rem)] sm:pb-20 lg:pb-24"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-bg" />
      <div aria-hidden="true" className="absolute inset-0 ember-glow" />
      <EmberBackground />
      <div aria-hidden="true" className="noise absolute inset-0" />

      <div className="container-page relative z-10 grid items-center gap-12 py-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[36rem]"
        >
          <motion.div
            variants={variants}
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="inline-flex items-center gap-2.5 text-sm font-medium text-text">
              <span aria-hidden="true" className="status-dot" />
              {copy.hero.availability[locale]}
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
            <span className="mono-meta">{copy.hero.location[locale]}</span>
          </motion.div>

          <motion.h1 variants={variants} className="display-1 mt-6 text-text">
            Isaias <span className="text-ember">Duran</span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.div
            variants={variants}
            className="mt-4 flex items-start gap-2.5"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 font-mono text-sm text-accent"
            >
              &gt;
            </span>
            <TypingRole key={locale} />
          </motion.div>

          <motion.p variants={variants} className="lead mt-6">
            {copy.hero.lead[locale]}
          </motion.p>

          <motion.p
            variants={variants}
            className="mt-4 max-w-[34rem] text-sm leading-relaxed text-muted"
          >
            {copy.hero.support[locale]}
          </motion.p>

          <motion.div
            variants={variants}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#proyectos" className="btn btn-primary">
              {copy.hero.ctaProjects[locale]}
              <ArrowRight size={17} weight="bold" aria-hidden="true" />
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
              <span className="sm:hidden">CV</span>
              <span className="hidden sm:inline">{copy.hero.cv[locale]}</span>
            </a>
          </motion.div>

          <motion.div
            variants={variants}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5"
          >
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <GithubLogo size={18} aria-hidden="true" />
              {copy.hero.github[locale]}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <EnvelopeSimple size={18} aria-hidden="true" />
              {copy.hero.email[locale]}
            </a>
            <span className="mono-meta ml-auto hidden text-[11px] xl:block">
              {copy.hero.stack}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0.15 : 0.7,
            delay: reduce ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[28px] bg-accent/5 blur-2xl"
          />
          <a
            href="https://hefestotech.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-[18px]"
          >
            <div className="browser-frame">
              <div className="browser-bar" aria-hidden="true">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </span>
                <span className="browser-url">hefestotech.vercel.app</span>
                <span className="browser-live inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Live
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <Image
                  src={hefestotechShot}
                  alt={copy.hero.shotAlt[locale]}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, (min-width: 640px) 80vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  placeholder="blur"
                />
              </div>
            </div>
          </a>

          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-sm font-semibold text-text">
                HefestoTech
              </p>
              <p className="mono-meta mt-1 text-[11px]">
                {copy.hero.shotNote[locale]}
              </p>
            </div>
            <a
              href="https://hefestotech.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.hero.shotLabel[locale]} - HefestoTech`}
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              {copy.projects.demo[locale]}
              <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import portrait from "@/assets/images/portrait.webp";
import { copy, site } from "@/data/site";
import { useLocale } from "./Providers";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { locale } = useLocale();

  const facts = [
    {
      label: copy.about.locationLabel[locale],
      value: copy.about.location[locale],
    },
    {
      label: copy.about.languagesLabel[locale],
      value: copy.about.languages[locale],
    },
    {
      label: copy.about.focusLabel[locale],
      value: copy.about.focus[locale],
    },
    {
      label: copy.about.nowLabel[locale],
      value: copy.about.now[locale],
    },
  ];

  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index={copy.sections.about.index}
            title={copy.sections.about.title[locale]}
            note={copy.sections.about.note[locale]}
            id="sobre-mi-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <Reveal>
            <figure className="mx-auto w-full max-w-[340px] lg:sticky lg:top-[calc(var(--nav-height)+2rem)] lg:mx-0">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-[var(--shadow-frame)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={portrait}
                    alt={copy.about.photoAlt[locale]}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 340px, 75vw"
                    className="object-cover object-top"
                    placeholder="blur"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 font-mono text-[11px] text-white/90">
                  <span>{copy.about.photoCaption[locale]}</span>
                  <span className="inline-flex items-center gap-1.5 text-white/70">
                    <MapPin size={12} weight="fill" aria-hidden="true" />
                    AR
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-[62ch]">
              <p className="text-lg leading-relaxed text-text">
                {copy.about.p1[locale]}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {copy.about.p2[locale]}
              </p>

              <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="mono-label text-[11px]">{fact.label}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-text">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <p className="text-sm leading-relaxed text-muted">
                  {copy.about.looking[locale]}
                </p>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-text transition-colors hover:text-accent"
                >
                  GitHub
                  <ArrowUpRight
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

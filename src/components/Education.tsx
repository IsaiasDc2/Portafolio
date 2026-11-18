"use client";

import {
  Briefcase,
  DownloadSimple,
  GraduationCap,
  Kanban,
} from "@phosphor-icons/react";
import { copy, site } from "@/data/site";
import { timeline, type TimelineItem } from "@/data/education";
import { cn, withBasePath } from "@/lib/utils";
import { useLocale } from "./Providers";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const kindIcon: Record<TimelineItem["kind"], typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  project: Kanban,
};

export function Education() {
  const { locale } = useLocale();

  return (
    <section
      id="formacion"
      aria-labelledby="formacion-title"
      className="section pt-0"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index={copy.sections.education.index}
            title={copy.sections.education.title[locale]}
            note={copy.sections.education.note[locale]}
            id="formacion-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <Reveal>
            <ol className="ml-1">
              {timeline.map((item) => {
                const IconComponent = kindIcon[item.kind];
                return (
                  <li key={item.id} className="timeline-item">
                    <span className="timeline-dot" aria-hidden="true" />
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-surface text-muted">
                        <IconComponent
                          size={15}
                          weight="bold"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-text">
                          {item.title[locale]}
                        </h3>
                        <p className="mono-meta mt-1 text-[11px]">
                          {item.meta[locale]}
                        </p>
                        <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-muted">
                          {item.description[locale]}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={0.08}>
            <aside
              className={cn(
                "card p-5 lg:sticky lg:top-[calc(var(--nav-height)+2rem)]",
              )}
            >
              <p className="mono-label text-accent">
                {locale === "es" ? "Currículum" : "Résumé"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {locale === "es"
                  ? "Una página con la formación, el stack y los proyectos, lista para descargar o imprimir."
                  : "One page with education, stack and projects, ready to download or print."}
              </p>
              <a
                href={withBasePath(site.cv)}
                download
                className="btn btn-secondary mt-4 w-full"
              >
                <DownloadSimple size={17} weight="bold" aria-hidden="true" />
                {copy.nav.cv[locale]}
              </a>
              <p className="mono-meta mt-3 text-[11px]">PDF · 1 página</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

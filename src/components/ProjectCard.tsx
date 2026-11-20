"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { copy } from "@/data/site";
import type { FeaturedProject } from "@/data/types";
import { cn } from "@/lib/utils";
import { ProjectLinks } from "./ProjectLinks";
import { useLocale } from "./Providers";
import { Reveal } from "./Reveal";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: FeaturedProject;
  index: number;
  onOpen: (trigger: HTMLButtonElement) => void;
}) {
  const { locale } = useLocale();
  const reversed = index % 2 === 1;
  const isDiagram = project.image.kind === "diagram";
  const browserUrl =
    project.browserUrl ?? (isDiagram ? "pos-multi / arquitectura" : "hefestotech.vercel.app");
  const imageBadge =
    project.imageLabel?.[locale] ??
    (isDiagram ? copy.projects.diagram[locale] : copy.projects.demo[locale]);

  return (
    <article className="grid min-w-0 gap-7 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-14">
      <Reveal
        y={28}
        className={cn("min-w-0", reversed && "lg:order-2")}
      >
        <button
          type="button"
          onClick={(event) => onOpen(event.currentTarget)}
          className="group block w-full min-w-0 max-w-full rounded-[18px] text-left"
          aria-label={`${copy.projects.openCase[locale]}: ${project.name}`}
        >
          <div className="browser-frame transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <div className="browser-bar">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
              </span>
              <span className="browser-url">{browserUrl}</span>
              <span className="browser-live hidden shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider sm:inline-flex">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                {imageBadge}
              </span>
            </div>
            <div
              className={cn(
                "relative aspect-[16/10] overflow-hidden",
                isDiagram ? "bg-[#f6f1e8] p-3 sm:p-5" : "bg-surface-2",
              )}
            >
              <Image
                src={project.image.src}
                alt={project.image.alt[locale]}
                fill
                sizes="(min-width: 1024px) 580px, (min-width: 640px) 85vw, 100vw"
                className={cn(
                  isDiagram
                    ? "object-contain"
                    : "object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]",
                )}
                placeholder="blur"
              />
            </div>
          </div>
        </button>
      </Reveal>

      <Reveal delay={0.08} className={cn("min-w-0", reversed && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-accent">
            {project.index}
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
          <span className="mono-meta text-[11px]">{project.year}</span>
          <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
          <span className="mono-meta text-[11px]">{project.context[locale]}</span>
        </div>

        <h3 className="display-2 mt-3 text-text">
          <button
            type="button"
            onClick={(event) => onOpen(event.currentTarget)}
            className="text-left transition-colors duration-200 hover:text-accent"
          >
            {project.name}
          </button>
        </h3>

        <p className="mt-3 text-base font-medium leading-relaxed text-text">
          {project.tagline[locale]}
        </p>
        <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted">
          {project.pitch[locale]}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <span className="tag">{tech}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <ProjectLinks links={project.links} compact />
        </div>

        <button
          type="button"
          onClick={(event) => onOpen(event.currentTarget)}
          className="group/cta mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-2"
        >
          {copy.projects.caseStudy[locale]}
          <ArrowRight
            size={16}
            weight="bold"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </button>
      </Reveal>
    </article>
  );
}

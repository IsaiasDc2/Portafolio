"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { copy, site } from "@/data/site";
import { otherProjects } from "@/data/projects";
import { useLocale } from "./Providers";
import { ProjectLinks } from "./ProjectLinks";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function OtherProjects() {
  const { locale } = useLocale();

  return (
    <section id="otros" aria-labelledby="otros-title" className="section pt-0">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index={copy.sections.other.index}
            title={copy.sections.other.title[locale]}
            note={copy.sections.other.note[locale]}
            id="otros-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <article className="card group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt[locale]}
                    fill
                    sizes="(min-width: 768px) 520px, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    placeholder="blur"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="display-3 text-text">{project.name}</h3>
                    <span className="mono-meta shrink-0 text-[11px]">
                      {project.year}
                    </span>
                  </div>
                  <p className="mono-meta mt-1 text-[11px]">
                    {project.context[locale]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.summary[locale]}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <span className="tag">{tech}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    <ProjectLinks links={project.links} compact />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              {copy.other.note[locale]}
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-text transition-colors hover:text-accent"
            >
              {copy.other.allGithub[locale]}
              <ArrowUpRight
                size={15}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

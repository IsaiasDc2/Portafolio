"use client";

import { useRef, useState } from "react";
import { copy } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import type { FeaturedProject } from "@/data/types";
import { useLocale } from "./Providers";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  const { locale } = useLocale();
  const [active, setActive] = useState<FeaturedProject | null>(null);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const show = (project: FeaturedProject, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(project);
    setOpen(true);
  };

  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="section"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index={copy.sections.projects.index}
            title={copy.sections.projects.title[locale]}
            note={copy.sections.projects.note[locale]}
            id="proyectos-title"
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-14 sm:mt-14 lg:gap-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={(trigger) => show(project, trigger)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={active ?? featuredProjects[0]}
        open={open && active !== null}
        onOpenChange={setOpen}
        returnFocusRef={triggerRef}
      />
    </section>
  );
}

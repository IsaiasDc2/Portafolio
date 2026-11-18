"use client";

import {
  Browser,
  Code,
  Database,
  HardDrives,
  Plugs,
  Wrench,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { copy } from "@/data/site";
import { skillGroups, type SkillGroup } from "@/data/skills";
import { useLocale } from "./Providers";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<SkillGroup["icon"], Icon> = {
  code: Code,
  browser: Browser,
  server: HardDrives,
  database: Database,
  plugs: Plugs,
  wrench: Wrench,
};

export function Skills() {
  const { locale } = useLocale();

  return (
    <section id="skills" aria-labelledby="skills-title" className="section pt-0">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index={copy.sections.skills.index}
            title={copy.sections.skills.title[locale]}
            note={copy.sections.skills.note[locale]}
            id="skills-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const IconComponent = icons[group.icon];
            return (
              <Reveal key={group.id} delay={index * 0.05}>
                <div className="card h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-[10px] border border-border bg-surface-2 text-accent">
                      <IconComponent size={18} weight="bold" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-text">
                      {group.title[locale]}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <span className="tag">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-baseline sm:gap-2">
            <span className="mono-label text-accent">
              {copy.skills.learningLabel[locale]}
            </span>
            <span>{copy.skills.learning[locale]}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

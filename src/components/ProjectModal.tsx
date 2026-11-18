"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  X,
} from "@phosphor-icons/react";
import { copy } from "@/data/site";
import type { FeaturedProject } from "@/data/types";
import { ProjectLinks } from "./ProjectLinks";
import { useLocale } from "./Providers";

const flow: Record<string, string> = {
  hefestotech: "React 19 → FastAPI → Supabase Postgres",
  "pos-multi":
    "Cliente → Server Action → Zod → Servicio → Repositorio → PostgreSQL (RLS)",
};

function Block({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-9 border-t border-border pt-6">
      <h3 className="mono-label text-accent">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: FeaturedProject;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { locale } = useLocale();
  const c = project.caseStudy;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-[rgba(5,5,8,0.78)] backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-3 sm:p-6 md:items-center md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: 8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
                >
                  <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 px-5 py-4 backdrop-blur-md sm:px-7">
                    <div>
                      <p className="mono-meta text-[11px]">
                        {project.index} / {project.year}
                      </p>
                      <Dialog.Title className="display-3 mt-1 text-text">
                        {project.name}
                      </Dialog.Title>
                      <Dialog.Description className="sr-only">
                        {project.tagline[locale]}
                      </Dialog.Description>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="icon-btn -mr-1 shrink-0"
                        aria-label={copy.projects.close[locale]}
                      >
                        <X size={20} weight="bold" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="max-h-[calc(100svh-9rem)] overflow-y-auto">
                    <div
                      className={
                        project.image.kind === "diagram"
                          ? "relative aspect-[16/10] border-b border-border bg-[#f6f1e8] p-4 sm:p-6"
                          : "relative aspect-[16/9] border-b border-border bg-surface-2"
                      }
                    >
                      <Image
                        src={project.image.src}
                        alt={project.image.alt[locale]}
                        fill
                        sizes="(min-width: 768px) 720px, 100vw"
                        className={
                          project.image.kind === "diagram"
                            ? "object-contain"
                            : "object-cover object-top"
                        }
                      />
                    </div>

                    <div className="px-5 py-6 sm:px-7 sm:py-8">
                      <p className="text-lg font-medium leading-relaxed text-text">
                        {project.tagline[locale]}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {project.context[locale]}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <ProjectLinks links={project.links} />
                      </div>

                      <Block title={copy.projects.problem[locale]}>
                        <p className="body-copy">{c.problem[locale]}</p>
                      </Block>

                      <Block title={copy.projects.solution[locale]}>
                        <ol className="space-y-3">
                          {c.solution[locale].map((item, index) => (
                            <li
                              key={item}
                              className="grid grid-cols-[1.6rem_1fr] gap-2 text-sm leading-relaxed text-muted"
                            >
                              <span className="font-mono text-[11px] text-accent">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ol>
                      </Block>

                      <Block title={copy.projects.role[locale]}>
                        <p className="body-copy">{c.role[locale]}</p>
                      </Block>

                      <Block title={copy.projects.architecture[locale]}>
                        <p className="body-copy">{c.architecture[locale]}</p>
                        <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-bg px-3.5 py-3 font-mono text-[11px] leading-relaxed text-muted">
                          <span className="text-accent">flujo</span>
                          <span className="mx-2 text-border-strong">/</span>
                          {flow[project.id] ?? "Cliente → API → Base de datos"}
                        </div>
                      </Block>

                      <Block title={copy.projects.challenges[locale]}>
                        <ol className="space-y-6">
                          {c.challenges.map((challenge, index) => (
                            <li
                              key={challenge.title[locale]}
                              className="grid grid-cols-[1.6rem_1fr] gap-2"
                            >
                              <span className="font-mono text-[11px] text-accent">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <div>
                                <h4 className="text-sm font-semibold text-text">
                                  {challenge.title[locale]}
                                </h4>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                  {challenge.detail[locale]}
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-muted">
                                  <span className="font-medium text-accent">
                                    {copy.projects.learned[locale]}:
                                  </span>{" "}
                                  {challenge.learned[locale]}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </Block>

                      <Block title={copy.projects.results[locale]}>
                        <ul className="space-y-2.5">
                          {c.results[locale].map((result) => (
                            <li
                              key={result}
                              className="flex gap-2.5 text-sm leading-relaxed text-muted"
                            >
                              <CheckCircle
                                size={17}
                                weight="fill"
                                className="mt-0.5 shrink-0 text-success"
                                aria-hidden="true"
                              />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </Block>

                      <Block title={copy.projects.improvements[locale]}>
                        <ul className="space-y-2.5">
                          {c.improvements[locale].map((item) => (
                            <li
                              key={item}
                              className="flex gap-2.5 text-sm leading-relaxed text-muted"
                            >
                              <ArrowRight
                                size={15}
                                weight="bold"
                                className="mt-1 shrink-0 text-accent"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Block>

                      {c.note ? (
                        <p className="mt-8 rounded-xl border border-border bg-surface-2 px-4 py-3 text-xs leading-relaxed text-muted">
                          {c.note[locale]}
                        </p>
                      ) : null}

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                        {project.links.find((link) => link.kind === "demo") ? (
                          <a
                            href={
                              project.links.find((link) => link.kind === "demo")
                                ?.href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            {copy.projects.demo[locale]}
                            <ArrowUpRight
                              size={16}
                              weight="bold"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          <a
                            href={`mailto:isaduran644@gmail.com?subject=${encodeURIComponent(project.name)}`}
                            className="btn btn-primary"
                          >
                            {copy.projects.requestDemo[locale]}
                            <ArrowUpRight
                              size={16}
                              weight="bold"
                              aria-hidden="true"
                            />
                          </a>
                        )}
                        <Dialog.Close asChild>
                          <button type="button" className="btn btn-ghost">
                            {copy.projects.close[locale]}
                          </button>
                        </Dialog.Close>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}

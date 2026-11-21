"use client";

import {
  ArrowUpRight,
  Clock,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react";
import { copy, site } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { useLocale } from "./Providers";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { locale } = useLocale();

  const rows = [
    {
      icon: EnvelopeSimple,
      label: copy.contact.emailLabel[locale],
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: GithubLogo,
      label: copy.contact.githubLabel[locale],
      value: `github.com/${site.githubHandle}`,
      href: site.github,
      external: true,
    },
    {
      icon: LinkedinLogo,
      label: copy.contact.linkedinLabel[locale],
      value: `linkedin.com/in/${site.linkedinHandle}`,
      href: site.linkedin,
      external: true,
    },
    {
      icon: MapPin,
      label: copy.contact.locationLabel[locale],
      value: copy.contact.location[locale],
    },
    {
      icon: Clock,
      label: copy.contact.availabilityLabel[locale],
      value: copy.contact.availability[locale],
    },
  ];

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="section pt-0"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index={copy.sections.contact.index}
            title={copy.sections.contact.title[locale]}
            note={copy.sections.contact.note[locale]}
            id="contacto-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-[calc(var(--nav-height)+2rem)]">
              <p className="max-w-[42ch] text-lg leading-relaxed text-text">
                {copy.contact.intro[locale]}
              </p>

              <ul className="mt-8 divide-y divide-border border-y border-border">
                {rows.map((row) => {
                  const IconComponent = row.icon;
                  return (
                    <li
                      key={row.label}
                      className="group relative flex min-h-16 items-center gap-3 py-3"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface text-muted">
                        <IconComponent
                          size={16}
                          weight="bold"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="min-w-0">
                        <span className="mono-label block text-[10px]">
                          {row.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm text-text">
                          {row.href ? (
                            <a
                              href={row.href}
                              {...(row.external
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  }
                                : {})}
                              className="transition-colors after:absolute after:inset-0 after:content-[''] hover:text-accent"
                            >
                              {row.value}
                            </a>
                          ) : (
                            row.value
                          )}
                        </span>
                      </div>
                      {row.href ? (
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className="ml-auto shrink-0 text-muted transition-colors group-hover:text-accent"
                        />
                      ) : null}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 text-xs leading-relaxed text-muted">
                {copy.contact.response[locale]}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

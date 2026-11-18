"use client";

import {
  ArrowUp,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
} from "@phosphor-icons/react";
import { copy, site } from "@/data/site";
import { Logo } from "./Logo";
import { useLocale } from "./Providers";

const footerLinks = [
  { href: "#proyectos", label: copy.nav.projects },
  { href: "#sobre-mi", label: copy.nav.about },
  { href: "#skills", label: copy.nav.skills },
  { href: "#formacion", label: { es: "Formación", en: "Education" } },
  { href: "#contacto", label: copy.nav.contact },
] as const;

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="relative border-t border-border">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex rounded-lg"
              aria-label={`${site.name} - ${copy.nav.home[locale]}`}
            >
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {copy.footer.tagline[locale]}
            </p>
          </div>

          <nav aria-label={copy.nav.navLabel[locale]}>
            <p className="mono-label">{locale === "es" ? "Secciones" : "Sections"}</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono-label">{locale === "es" ? "Contacto" : "Contact"}</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <EnvelopeSimple size={15} aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <GithubLogo size={15} aria-hidden="true" />
                  github.com/{site.githubHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.cv}
                  download
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <DownloadSimple size={15} aria-hidden="true" />
                  {copy.nav.cv[locale]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.year} {site.name}. {copy.footer.rights[locale]}.
          </p>
          <p>{copy.footer.built[locale]}</p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-text"
          >
            {copy.footer.backToTop[locale]}
            <ArrowUp size={13} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

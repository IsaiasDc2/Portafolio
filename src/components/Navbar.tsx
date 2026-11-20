"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, DownloadSimple, List, X } from "@phosphor-icons/react";
import { copy, site } from "@/data/site";
import { cn, withBasePath } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";
import { useLocale } from "./Providers";

const sectionIds = [
  "inicio",
  "proyectos",
  "otros",
  "sobre-mi",
  "skills",
  "formacion",
  "contacto",
] as const;

const navLinks = [
  { id: "proyectos", href: "#proyectos", label: copy.nav.projects },
  { id: "sobre-mi", href: "#sobre-mi", label: copy.nav.about },
  { id: "skills", href: "#skills", label: copy.nav.skills },
  { id: "contacto", href: "#contacto", label: copy.nav.contact },
] as const;

export function Navbar() {
  const { locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -58% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isActive = (id: string) =>
    active === id || (id === "proyectos" && active === "otros");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <a
          href="#inicio"
          className="rounded-lg"
          aria-label={`${site.name} - ${copy.nav.home[locale]}`}
        >
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={copy.nav.navLabel[locale]}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={isActive(link.id) ? "location" : undefined}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm transition-colors duration-200",
                isActive(link.id)
                  ? "text-text"
                  : "text-muted hover:text-text",
              )}
            >
              {link.label[locale]}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300",
                  isActive(link.id) ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <a
            href={withBasePath(site.cv)}
            download
            className="btn btn-secondary hidden h-10 px-3 text-sm md:inline-flex"
          >
            <DownloadSimple size={16} weight="bold" aria-hidden="true" />
            <span className="hidden xl:inline">{copy.nav.cv[locale]}</span>
            <span className="xl:hidden">CV</span>
          </a>
          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="icon-btn lg:hidden"
                aria-label={copy.nav.menu[locale]}
              >
                <List size={21} weight="bold" />
              </button>
            </Dialog.Trigger>
            <AnimatePresence>
              {menuOpen ? (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild forceMount>
                    <motion.div
                      className="fixed inset-0 z-50 bg-[rgba(11,11,15,0.72)] backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild forceMount>
                    <motion.div
                      className="fixed inset-y-0 right-0 z-50 flex h-svh w-[min(88vw,380px)] flex-col border-l border-border bg-surface p-6 shadow-2xl"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="mono-label">
                          {copy.nav.menuTitle[locale]}
                        </Dialog.Title>
                        <Dialog.Close asChild>
                          <button
                            type="button"
                            className="icon-btn"
                            aria-label={copy.nav.close[locale]}
                          >
                            <X size={20} weight="bold" />
                          </button>
                        </Dialog.Close>
                      </div>
                      <Dialog.Description className="sr-only">
                        {copy.nav.navLabel[locale]}
                      </Dialog.Description>

                      <nav
                        className="mt-10 flex flex-col gap-1"
                        aria-label={copy.nav.navLabel[locale]}
                      >
                        {navLinks.map((link, index) => (
                          <a
                            key={link.id}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="group flex items-center justify-between border-b border-border py-4 text-2xl font-semibold tracking-tight text-text"
                          >
                            <span className="flex items-baseline gap-3">
                              <span className="font-mono text-[11px] font-medium text-muted">
                                0{index + 1}
                              </span>
                              {link.label[locale]}
                            </span>
                            <ArrowUpRight
                              size={19}
                              className="text-muted transition-colors group-hover:text-accent"
                              aria-hidden="true"
                            />
                          </a>
                        ))}
                      </nav>

                      <div className="mt-auto flex flex-col gap-4 pt-8">
                        <LanguageToggle />
                        <a
                          href={withBasePath(site.cv)}
                          download
                          onClick={() => setMenuOpen(false)}
                          className="btn btn-primary w-full"
                        >
                          <DownloadSimple size={18} weight="bold" />
                          {copy.nav.cv[locale]}
                        </a>
                        <a
                          href={`mailto:${site.email}`}
                          onClick={() => setMenuOpen(false)}
                          className="mono-meta text-center text-sm text-muted hover:text-text"
                        >
                          {site.email}
                        </a>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              ) : null}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />
    </header>
  );
}

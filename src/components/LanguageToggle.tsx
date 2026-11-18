"use client";

import { copy } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLocale } from "./Providers";

const locales: readonly Locale[] = ["es", "en"];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex h-10 items-center rounded-full border border-border bg-surface p-0.5",
        className,
      )}
      role="group"
      aria-label={copy.nav.language[locale]}
    >
      {locales.map((item) => {
        const active = locale === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item)}
            aria-pressed={active}
            className={cn(
              "inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2 font-mono text-[11px] font-medium uppercase tracking-wider transition-colors duration-200",
              active
                ? "bg-accent text-accent-contrast"
                : "text-muted hover:text-text",
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

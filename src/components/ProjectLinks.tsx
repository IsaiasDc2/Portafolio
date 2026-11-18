"use client";

import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LockSimple,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import type { ProjectLink } from "@/data/types";
import { useLocale } from "./Providers";

export function ProjectLinks({
  links,
  compact = false,
  className,
}: {
  links: readonly ProjectLink[];
  compact?: boolean;
  className?: string;
}) {
  const { locale } = useLocale();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        compact ? "gap-1.5" : "gap-2.5",
        className,
      )}
    >
      {links.map((link) => {
        if (link.kind === "private" || !link.href) {
          return (
            <span
              key={link.kind}
              className={cn(
                "inline-flex items-center gap-2 border border-border bg-surface-2 text-muted",
                compact
                  ? "min-h-10 rounded-lg px-2.5 text-xs"
                  : "min-h-11 rounded-btn px-3.5 text-sm",
              )}
            >
              <LockSimple size={compact ? 14 : 16} aria-hidden="true" />
              {link.label[locale]}
            </span>
          );
        }

        const Icon =
          link.kind === "code"
            ? GithubLogo
            : link.kind === "email"
              ? EnvelopeSimple
              : ArrowUpRight;
        const external = link.href.startsWith("http");

        return (
          <a
            key={`${link.kind}-${link.href}`}
            href={link.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
              compact
                ? "inline-flex min-h-10 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-muted transition-colors hover:bg-surface-2 hover:text-text"
                : "btn btn-secondary",
            )}
          >
            <Icon
              size={compact ? 14 : 16}
              weight={compact ? "regular" : "bold"}
              aria-hidden="true"
            />
            {link.label[locale]}
          </a>
        );
      })}
    </div>
  );
}

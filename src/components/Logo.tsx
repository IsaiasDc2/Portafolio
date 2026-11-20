import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  showName?: boolean;
};

export function Logo({ className, showName = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-border bg-surface-2"
      >
        <svg viewBox="0 0 64 64" className="h-6 w-6">
          <rect width="64" height="64" rx="14" fill="var(--paper-900)" />
          <path
            d="M18 20v24"
            stroke="var(--paper-50)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M30 20h6c8 0 13 5 13 12s-5 12-13 12h-6V20Z"
            fill="none"
            stroke="var(--paper-50)"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="16" r="3.5" fill="var(--heat)" />
        </svg>
      </span>
      {showName ? (
        <span className="font-display text-[15px] font-semibold tracking-tight text-text">
          {site.name}
        </span>
      ) : null}
    </span>
  );
}

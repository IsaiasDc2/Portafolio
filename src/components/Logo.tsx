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
          <path
            d="M14 4 H50 L60 14 V50 L50 60 H14 L4 50 V14 Z"
            fill="var(--paper-900)"
          />
          <path
            d="M16 7 H48 L57 16 V48 L48 57 H16 L7 48 V16 Z"
            fill="none"
            stroke="var(--paper-50)"
            strokeWidth="1"
            opacity="0.16"
          />
          <path d="M21 20 H27 V44 H21 Z" fill="var(--paper-50)" />
          <path
            d="M33 20 H38 C45 20 50 25 50 32 C50 39 45 44 38 44 H33 Z"
            fill="var(--paper-50)"
          />
          <path
            d="M52 6.5 L53.6 9.4 L56.5 11 L53.6 12.6 L52 15.5 L50.4 12.6 L47.5 11 L50.4 9.4 Z"
            fill="var(--heat)"
          />
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

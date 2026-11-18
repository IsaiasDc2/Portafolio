import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  title: string;
  note: string;
  id?: string;
  className?: string;
};

export function SectionHeading({
  index,
  title,
  note,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 border-t border-border pt-6 md:flex-row md:items-end md:justify-between md:gap-12",
        className,
      )}
    >
      <div className="flex items-baseline gap-3 sm:gap-4">
        <span
          aria-hidden="true"
          className="font-mono text-[11px] font-medium tracking-[0.18em] text-accent"
        >
          {index}
        </span>
        <h2 id={id} className="display-2 text-text">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-muted md:text-right">
        {note}
      </p>
    </div>
  );
}

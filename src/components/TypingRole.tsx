"use client";

import { useEffect, useState } from "react";
import { copy } from "@/data/site";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";
import { useLocale } from "./Providers";

export function TypingRole() {
  const { locale } = useLocale();
  const phrases = copy.hero.typed[locale];
  const reduce = useReducedMotionSafe();
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const phrase = phrases[phraseIndex % phrases.length];

  useEffect(() => {
    if (reduce) {
      return;
    }

    let delay = deleting ? 28 : 58;
    if (!deleting && text === phrase) delay = 1800;
    if (deleting && text === "") delay = 280;

    const timer = window.setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }
      setText((current) =>
        deleting
          ? phrase.slice(0, Math.max(0, current.length - 1))
          : phrase.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, phrase, phrases.length, reduce]);

  return (
    <span className="inline-flex min-h-7 flex-wrap items-baseline font-mono text-[13px] leading-relaxed text-muted sm:text-[15px]">
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden="true">{reduce ? phrase : text}</span>
      <span aria-hidden="true" className="caret" />
    </span>
  );
}

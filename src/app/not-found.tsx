"use client";

import Link from "next/link";
import { ArrowLeft, Compass } from "@phosphor-icons/react";
import { copy } from "@/data/site";
import { useLocale } from "@/components/Providers";

export default function NotFound() {
  const { locale } = useLocale();

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pb-20 pt-[calc(var(--nav-height)+3rem)]">
      <div aria-hidden="true" className="absolute inset-0 grid-bg" />
      <div aria-hidden="true" className="absolute inset-0 ember-glow" />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-accent">
            <Compass size={22} weight="bold" aria-hidden="true" />
          </span>
          <p className="mono-label mt-6">Error 404</p>
          <h1 className="display-1 mt-3 text-text">
            {copy.notFound.heading[locale]}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            {copy.notFound.copy[locale]}
          </p>
          <Link href="/" className="btn btn-primary mt-8">
            <ArrowLeft size={16} weight="bold" aria-hidden="true" />
            {copy.notFound.cta[locale]}
          </Link>
        </div>
      </div>
    </section>
  );
}

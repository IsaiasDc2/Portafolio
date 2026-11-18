"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Copy,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { copy, site } from "@/data/site";
import { useLocale } from "./Providers";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

export function ContactForm() {
  const { locale } = useLocale();
  const id = useId();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current) {
        window.clearTimeout(copyTimer.current);
      }
    };
  }, []);

  const update = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) {
      next.name = copy.contact.errors.name[locale];
    }
    if (!values.email.trim()) {
      next.email = copy.contact.errors.emailRequired[locale];
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = copy.contact.errors.emailInvalid[locale];
    }
    if (values.message.trim().length < 20) {
      next.message = copy.contact.errors.message[locale];
    }
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot.trim()) {
      setSent(true);
      return;
    }

    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      if (next.name) {
        nameRef.current?.focus();
      } else if (next.email) {
        emailRef.current?.focus();
      } else {
        messageRef.current?.focus();
      }
      return;
    }

    const subject = `${copy.contact.formTitle[locale]} · ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const reset = () => {
    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setHoneypot("");
    setSent(false);
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(site.email);
      } else {
        const area = document.createElement("textarea");
        area.value = site.email;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
      }
      setCopied(true);
      if (copyTimer.current) {
        window.clearTimeout(copyTimer.current);
      }
      copyTimer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-7">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-soft text-accent">
          <CheckCircle size={24} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="display-3 mt-4 text-text">
          {copy.contact.successTitle[locale]}
        </h3>
        <p role="status" className="mt-2 text-sm leading-relaxed text-muted">
          {copy.contact.success[locale]}
        </p>

        <div className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[13px] text-text">{site.email}</span>
          <button
            type="button"
            onClick={copyEmail}
            className="btn btn-secondary h-10 px-3 text-xs"
          >
            <Copy size={15} weight="bold" aria-hidden="true" />
            {copied ? copy.contact.copied[locale] : copy.contact.copy[locale]}
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-2"
          >
            <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
            {copy.contact.direct[locale]}
          </a>
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
          >
            {copy.contact.again[locale]}
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-7"
    >
      <h3 className="display-3 text-text">{copy.contact.formTitle[locale]}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {copy.contact.formNote[locale]}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${id}-name`}
            className="mono-label mb-2 block text-[11px] text-text"
          >
            {copy.contact.name[locale]}
          </label>
          <input
            ref={nameRef}
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            className="input-field"
            placeholder={copy.contact.namePlaceholder[locale]}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            required
          />
          {errors.name ? (
            <p
              id={`${id}-name-error`}
              className="mt-1.5 text-xs text-danger"
              role="alert"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${id}-email`}
            className="mono-label mb-2 block text-[11px] text-text"
          >
            {copy.contact.email[locale]}
          </label>
          <input
            ref={emailRef}
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className="input-field"
            placeholder={copy.contact.emailPlaceholder[locale]}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            required
          />
          {errors.email ? (
            <p
              id={`${id}-email-error`}
              className="mt-1.5 text-xs text-danger"
              role="alert"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor={`${id}-message`}
          className="mono-label mb-2 block text-[11px] text-text"
        >
          {copy.contact.message[locale]}
        </label>
        <textarea
          ref={messageRef}
          id={`${id}-message`}
          name="message"
          rows={5}
          className="input-field resize-y"
          placeholder={copy.contact.messagePlaceholder[locale]}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${id}-message-error` : `${id}-message-hint`
          }
          required
        />
        <p id={`${id}-message-hint`} className="sr-only">
          {copy.contact.errors.message[locale]}
        </p>
        {errors.message ? (
          <p
            id={`${id}-message-error`}
            className="mt-1.5 text-xs text-danger"
            role="alert"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor={`${id}-company`}>{copy.contact.honeypot[locale]}</label>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary">
          {copy.contact.submit[locale]}
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-text"
        >
          <Copy size={14} weight="bold" aria-hidden="true" />
          {copied ? copy.contact.copied[locale] : copy.contact.copy[locale]}
        </button>
      </div>
    </form>
  );
}

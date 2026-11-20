"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { MotionConfig } from "motion/react";
import type { Locale } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const LOCALE_EVENT = "portafolio:locale";

function subscribeLocale(callback: () => void) {
  window.addEventListener(LOCALE_EVENT, callback);
  return () => window.removeEventListener(LOCALE_EVENT, callback);
}

function getLocaleSnapshot(): Locale {
  try {
    return window.localStorage.getItem("locale") === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function getLocaleServerSnapshot(): Locale {
  return "es";
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside Providers");
  }
  return context;
}

export function Providers({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot,
  );

  const setLocale = useCallback((next: Locale) => {
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem("locale", next);
    } catch {
      // Storage can be unavailable in private mode. The language still changes.
    }
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, []);

  const localeValue = useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={localeValue}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LocaleContext.Provider>
  );
}

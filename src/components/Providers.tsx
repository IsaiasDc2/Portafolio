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

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const LocaleContext = createContext<LocaleContextValue | null>(null);

const THEME_EVENT = "portafolio:theme";
const LOCALE_EVENT = "portafolio:locale";

function subscribeTheme(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getThemeSnapshot(): Theme {
  return "light";
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

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

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside Providers");
  }
  return context;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside Providers");
  }
  return context;
}

export function Providers({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot,
  );

  const toggleTheme = useCallback(() => {
    // Solo se usa el tema claro.
  }, []);

  const setLocale = useCallback((next: Locale) => {
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem("locale", next);
    } catch {
      // Storage can be unavailable in private mode. The language still changes.
    }
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, []);

  const themeValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );
  const localeValue = useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale],
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

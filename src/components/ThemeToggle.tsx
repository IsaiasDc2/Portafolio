"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { copy } from "@/data/site";
import { useLocale, useTheme } from "./Providers";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();
  const { locale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn relative overflow-hidden"
      aria-label={copy.nav.theme[locale]}
      title={copy.nav.theme[locale]}
    >
      <span className="theme-icon theme-icon-sun pointer-events-none">
        <Sun size={19} weight="bold" />
      </span>
      <span className="theme-icon theme-icon-moon pointer-events-none">
        <Moon size={19} weight="bold" />
      </span>
    </button>
  );
}

export type Locale = "es" | "en";

export type L10n = Record<Locale, string>;
export type L10nList = Record<Locale, readonly string[]>;

export function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

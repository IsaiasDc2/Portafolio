"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(query).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Hydration-safe reduced-motion preference.
 * The server and the first client render agree on `false`, then React
 * re-renders with the real value after hydration. Using Motion's hook
 * directly changes initial styles between server and client and breaks
 * hydration when the visitor has reduced motion enabled.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

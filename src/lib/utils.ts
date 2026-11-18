import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const basePath = process.env.NODE_ENV === "production" ? "/Portafolio" : "";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}

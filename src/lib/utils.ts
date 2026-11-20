import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a public-folder path with the deployment base path.
 * Next.js handles basePath for <Link>, <Image> and static imports;
 * plain hrefs such as /cv.pdf need this helper.
 */
export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  if (!basePath) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}

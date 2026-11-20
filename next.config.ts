import type { NextConfig } from "next";

const repoName = "Portafolio";
const basePath =
  process.env.NODE_ENV === "production" ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages.
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,

  // GitHub Pages cannot run the Next.js image optimizer.
  images: {
    unoptimized: true,
  },

  // Expose the prefix to plain <a href> values in the browser.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

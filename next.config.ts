import type { NextConfig } from "next";

const repoName = "NOMBRE-DE-TU-REPOSITORIO";

const nextConfig: NextConfig = {
  // Generar una versión estática para GitHub Pages
  output: "export",

  // Configuración para el subdirectorio de GitHub Pages
  basePath:
    process.env.NODE_ENV === "production"
      ? `/${repoName}`
      : undefined,

  trailingSlash: true,

  // Desactivar optimización de imágenes del servidor
  images: {
    unoptimized: true,
  },

  // Conservar tu configuración de Tailwind y Turbopack
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
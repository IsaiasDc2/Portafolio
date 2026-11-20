import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/utils";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | Portafolio`,
    short_name: site.name,
    description: "Portafolio de Isaias Duran, desarrollador full stack junior.",
    start_url: withBasePath("/"),
    scope: withBasePath("/"),
    display: "standalone",
    background_color: "#f3efe6",
    theme_color: "#f3efe6",
    lang: "es",
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: withBasePath("/apple-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

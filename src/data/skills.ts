import type { L10n } from "@/lib/i18n";

export type SkillGroup = {
  id: string;
  title: L10n;
  icon: "code" | "browser" | "server" | "database" | "plugs" | "wrench";
  skills: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "languages",
    title: { es: "Lenguajes", en: "Languages" },
    icon: "code",
    skills: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    icon: "browser",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Zustand",
      "Motion",
      "Radix UI",
    ],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    icon: "server",
    skills: [
      "Node.js",
      "FastAPI",
      "Server Actions",
      "REST",
      "Zod",
      "Supabase Auth",
    ],
  },
  {
    id: "data",
    title: { es: "Bases de datos", en: "Databases" },
    icon: "database",
    skills: ["PostgreSQL", "Supabase", "Drizzle ORM", "MySQL", "PGlite"],
  },
  {
    id: "integrations",
    title: { es: "Integraciones", en: "Integrations" },
    icon: "plugs",
    skills: [
      "Mercado Pago",
      "ARCA WSFEv1",
      "Gemini",
      "Supabase Storage",
      "GitHub Actions",
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    icon: "wrench",
    skills: [
      "Git",
      "Vitest",
      "Playwright",
      "pytest",
      "Docker",
      "Vercel",
      "Render",
      "ESLint",
      "Prettier",
    ],
  },
];

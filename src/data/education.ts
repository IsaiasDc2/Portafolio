import type { L10n } from "@/lib/i18n";

export type TimelineItem = {
  id: string;
  title: L10n;
  meta: L10n;
  description: L10n;
  kind: "work" | "education" | "project";
};

export const timeline: readonly TimelineItem[] = [
  {
    id: "pos-multi",
    title: {
      es: "POS Multi-Sucursal · Proyecto personal",
      en: "Multi-Branch POS · Personal project",
    },
    meta: { es: "2026 · Desarrollo activo", en: "2026 · Active development" },
    description: {
      es: "Diseñé y desarrollé un punto de venta multi-sucursal con Next.js 16, PostgreSQL y RLS. Escribí 9 ADRs, pruebas de permisos y la documentación base.",
      en: "I designed and built a multi-branch point of sale with Next.js 16, PostgreSQL and RLS. I wrote 9 ADRs, permission tests and the base documentation.",
    },
    kind: "project",
  },
  {
    id: "hefestotech",
    title: {
      es: "Práctica Profesionalizante II · HefestoTech",
      en: "Professional Practice II · HefestoTech",
    },
    meta: { es: "2026 · Equipo de 4", en: "2026 · Team of 4" },
    description: {
      es: "Construimos una tienda online completa en siete semanas. Me encargué del frontend, el checkout, el panel, el tema, la traducción y la interfaz del asistente. Entregas semanales con documentación.",
      en: "We built a complete online store in seven weeks. I handled the frontend, checkout, admin panel, theme, translation and assistant interface. Weekly deliverables with documentation.",
    },
    kind: "work",
  },
  {
    id: "forja-gym",
    title: {
      es: "Prácticas de desarrollo web · Forja Gym",
      en: "Web development practice · Forja Gym",
    },
    meta: { es: "2026 · 10 entregas", en: "2026 · 10 assignments" },
    description: {
      es: "Recorrí HTML, Bootstrap, JavaScript, PHP/MySQL y Laravel MVC en un mismo proyecto: un sitio de gimnasio con planes, clases y contacto.",
      en: "I worked through HTML, Bootstrap, JavaScript, PHP/MySQL and Laravel MVC in one project: a gym site with plans, classes and contact.",
    },
    kind: "project",
  },
  {
    id: "technician",
    title: {
      es: "Técnico en Informática Profesional y Personal",
      en: "Professional and Personal IT Technician",
    },
    meta: { es: "Formación técnica · Argentina", en: "Technical education · Argentina" },
    description: {
      es: "Base en programación, bases de datos, redes y sistemas. El título con el que empecé a buscar trabajo en desarrollo.",
      en: "Foundations in programming, databases, networks and systems. The qualification I started job hunting with.",
    },
    kind: "education",
  },
];

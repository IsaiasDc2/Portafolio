import type { StaticImageData } from "next/image";
import type { L10n, L10nList } from "@/lib/i18n";

export type ProjectLink = {
  kind: "demo" | "code" | "email" | "private";
  label: L10n;
  href?: string;
};

export type CaseStudy = {
  problem: L10n;
  solution: L10nList;
  role: L10n;
  architecture: L10n;
  challenges: readonly {
    title: L10n;
    detail: L10n;
    learned: L10n;
  }[];
  results: L10nList;
  improvements: L10nList;
  note?: L10n;
};

export type ProjectImage = {
  src: StaticImageData;
  alt: L10n;
  kind: "screenshot" | "diagram";
};

export type FeaturedProject = {
  id: string;
  index: string;
  name: string;
  year: string;
  context: L10n;
  tagline: L10n;
  pitch: L10n;
  stack: readonly string[];
  image: ProjectImage;
  links: readonly ProjectLink[];
  caseStudy: CaseStudy;
};

export type OtherProject = {
  id: string;
  name: string;
  year: string;
  context: L10n;
  summary: L10n;
  stack: readonly string[];
  image: ProjectImage;
  links: readonly ProjectLink[];
};

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { OtherProjects } from "@/components/OtherProjects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <OtherProjects />
      <About />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

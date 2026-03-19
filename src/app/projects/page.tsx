"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import SectionReveal from "@/components/ui/SectionReveal";
import { FEATURED_PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <h1 className="text-sm font-medium tracking-widest text-accent-light uppercase mb-2">
            Projects
          </h1>
          <p className="text-3xl font-bold text-text-primary mb-12">
            What I&apos;ve been building
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

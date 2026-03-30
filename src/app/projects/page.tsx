"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectDeepDive from "@/components/ui/ProjectDeepDive";
import SectionReveal from "@/components/ui/SectionReveal";
import { FEATURED_PROJECTS, type Project } from "@/lib/constants";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
              Projects
            </p>
            <h1 className="text-3xl font-bold text-gt-gold mb-14 sm:text-4xl">
              What I&apos;ve been building
            </h1>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <ProjectDeepDive
            key={selected.title}
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group relative rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface"
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-accent/[0.04] to-teal/[0.02]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-300 group-hover:via-accent/40" />

      <div className="relative">
        <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background px-3 py-0.5 text-[11px] font-medium text-text-muted transition-colors group-hover:border-accent/20 group-hover:text-accent/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-text-muted hover:text-accent transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub &rarr;
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-text-muted hover:text-teal transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              Live &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

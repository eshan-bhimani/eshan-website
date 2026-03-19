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
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-light"
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-accent-glow" />

      <div className="relative">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent-light transition-colors"
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
              className="text-sm text-text-secondary hover:text-accent-light transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

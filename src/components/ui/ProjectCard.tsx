"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: "0 0 28px rgba(56, 189, 248, 0.13), 0 0 0 1px rgba(56, 189, 248, 0.2)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      onClick={onClick}
      className="group relative rounded-xl border border-border bg-surface/60 p-6 cursor-pointer transition-colors duration-300 hover:border-accent/40 hover:bg-surface"
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      {/* Top accent glow line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-300 group-hover:via-accent/50" />

      {/* Glassmorphism shimmer on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-accent/[0.05] via-transparent to-teal/[0.03]" />

      {/* Screenshot thumbnail — shared layout morph with deep dive hero */}
      {project.image && (
        <motion.div
          layoutId={`${project.title}-image`}
          layout
          className="relative mb-5 overflow-hidden rounded-lg border border-border/60 aspect-video"
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      <div className="relative">
        {/* Title — shared layout morph with deep dive heading */}
        <motion.h3
          layoutId={`${project.title}-title`}
          layout
          className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300"
        >
          {project.title}
        </motion.h3>

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

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-text-muted hover:text-accent transition-colors"
              >
                GitHub &rarr;
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-text-muted hover:text-teal transition-colors"
              >
                Live &rarr;
              </a>
            )}
          </div>

          <span className="text-[11px] text-text-muted/40 group-hover:text-accent/60 transition-colors select-none">
            Deep Dive →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

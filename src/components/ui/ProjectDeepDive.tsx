"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/constants";

interface Props {
  project: Project;
  onClose: () => void;
}

/* ─── Inline SVG icons ─── */
function IconArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10 3L5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 3L13 13M13 3L3 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2 12L12 2M12 2H6M12 2V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8M7 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Code block ─── */
function CodeBlock({ code }: { code: string }) {
  return (
    <div className="mt-4 rounded-lg border border-border bg-background overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface/80">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-[11.5px] leading-relaxed text-text-secondary whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

/* ─── Staggered fade helper ─── */
function fadeIn(i: number) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.18 + i * 0.07, duration: 0.4, ease: "easeOut" as const },
  };
}

/* ─── Main component ─── */
export default function ProjectDeepDive({ project, onClose }: Props) {
  const { deepDive } = project;

  /* Scroll lock + Escape key */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-[59] bg-background/75 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        key="panel"
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-4 sm:inset-6 z-[60] flex flex-col rounded-2xl border border-border/70 bg-surface overflow-hidden"
        style={{
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(56,189,248,0.07)",
        }}
      >
        {/* ─── Sticky header ─── */}
        <div className="flex-shrink-0 flex items-center justify-between px-5 py-3.5 border-b border-border/60 bg-surface/95 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
          >
            <IconArrowLeft />
            Back to Projects
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted hover:text-text-primary hover:border-border-light transition-colors"
              >
                <IconGithub />
                GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-accent/10 border border-accent/25 px-3.5 py-1.5 text-xs font-semibold text-accent hover:bg-accent/20 hover:border-accent/40 transition-colors"
              >
                Visit Live Site
                <IconExternal />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-light transition-colors"
              aria-label="Close"
            >
              <IconX />
            </button>
          </div>
        </div>

        {/* ─── Scrollable body ─── */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero image — shared layout morph from card thumbnail */}
          {project.image && (
            <motion.div
              layoutId={`${project.title}-image`}
              layout
              className="relative w-full h-48 sm:h-64 md:h-80 border-b border-border/40 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
            </motion.div>
          )}

          {/* Content */}
          <div className="px-6 py-8 lg:px-10 lg:py-10 max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-3 lg:gap-14">

              {/* ── Left: main content (2/3) ── */}
              <div className="lg:col-span-2 space-y-10">

                {/* Title + tagline + overview */}
                <motion.div {...fadeIn(0)}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {/* Title morphs from card h3 */}
                    <motion.h1
                      layoutId={`${project.title}-title`}
                      layout
                      className="text-3xl font-bold text-text-primary sm:text-4xl"
                    >
                      {project.title}
                    </motion.h1>
                    {deepDive && (
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold tracking-wider border ${
                          project.link
                            ? "bg-teal/10 text-teal border-teal/20"
                            : "bg-accent/10 text-accent border-accent/20"
                        }`}
                      >
                        {project.link ? "● Live" : "◎ In Dev"}
                      </span>
                    )}
                  </div>

                  {deepDive && (
                    <p className="font-mono text-sm text-text-muted mb-5 tracking-wide">
                      {deepDive.tagline}
                    </p>
                  )}

                  <p className="text-text-secondary leading-relaxed">
                    {deepDive?.overview ?? project.description}
                  </p>
                </motion.div>

                {/* Engineering challenges */}
                {deepDive && (
                  <motion.div {...fadeIn(1)}>
                    <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-7">
                      Key Engineering Challenges
                    </p>

                    <div className="space-y-9">
                      {deepDive.challenges.map((ch, i) => (
                        <div key={i} className="relative pl-6">
                          {/* Timeline connector */}
                          <div className="absolute left-0 top-2 -translate-x-[4px] h-2.5 w-2.5 rounded-full bg-accent/20 border border-accent/40" />
                          {i < deepDive.challenges.length - 1 && (
                            <div className="absolute left-[4.5px] top-5 bottom-[-20px] w-px bg-gradient-to-b from-border-light to-transparent" />
                          )}

                          <h3 className="text-sm font-semibold text-text-primary mb-2">
                            {ch.title}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {ch.body}
                          </p>
                          {ch.code && <CodeBlock code={ch.code} />}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* ── Right: sidebar (1/3) ── */}
              <div className="mt-10 lg:mt-0 space-y-8">

                {/* Performance metrics */}
                {deepDive && (
                  <motion.div {...fadeIn(2)}>
                    <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-4">
                      Performance Metrics
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      {deepDive.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-border bg-background/60 p-4"
                        >
                          <div className="text-2xl font-bold font-mono text-text-primary leading-none">
                            {m.value}
                          </div>
                          <div className="text-xs font-semibold text-text-secondary mt-1.5">
                            {m.label}
                          </div>
                          {m.sub && (
                            <div className="text-[11px] text-text-muted mt-0.5">
                              {m.sub}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Technical stack */}
                {deepDive && (
                  <motion.div {...fadeIn(3)}>
                    <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-4">
                      Technical Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {deepDive.stack.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-text-secondary"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: tech.color }}
                          />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Links */}
                <motion.div {...fadeIn(4)}>
                  <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-4">
                    Links
                  </p>
                  <div className="space-y-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-text-secondary hover:border-accent/30 hover:text-text-primary transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <IconGithub />
                          View Source
                        </span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                          <IconArrowRight />
                        </span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-accent hover:bg-accent/10 hover:border-accent/40 transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <IconExternal />
                          Visit Live Site
                        </span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                          <IconArrowRight />
                        </span>
                      </a>
                    )}
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

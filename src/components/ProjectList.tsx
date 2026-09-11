"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/constants";

const ALL = "all";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>(ALL);

  // ASCII sort so uppercase acronyms (AR, RL) lead, then lowercase tags
  const categories = Array.from(
    new Set(projects.flatMap((p) => p.categories))
  ).sort();

  const visible =
    active === ALL
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  const chip = (label: string) => {
    const selected = active === label;
    return (
      <button
        key={label}
        type="button"
        onClick={() => setActive(label)}
        aria-pressed={selected}
        className={`rounded-full border px-3.5 py-1 font-mono text-sm transition-colors ${
          selected
            ? "border-ink text-ink"
            : "border-rule text-ink-muted hover:border-ink-muted hover:text-ink-soft"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {chip(ALL)}
        {categories.map(chip)}
      </div>

      <ol className="mt-14 divide-y divide-rule">
        {visible.map((project) => (
          <li key={project.slug} className="py-8 first:pt-0">
            <h2 className="display text-2xl">
              <Link href={`/projects/${project.slug}`} className="hover:underline">
                {project.title}
              </Link>
              {project.status === "wip" && (
                <span className="ml-3 align-middle font-mono text-xs uppercase text-ink-muted">
                  wip
                </span>
              )}
            </h2>
            <p className="mt-2 text-ink-soft">{project.summary}</p>
            <p className="mt-2 flex flex-wrap gap-x-3 font-mono text-sm text-ink-muted">
              {project.categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className="hover:text-ink"
                >
                  {c}
                </button>
              ))}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}

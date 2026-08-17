import type { Metadata } from "next";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects built by Eshan Bhimani — full-stack, AI, and systems work with engineering write-ups.",
};

export default function ProjectsPage() {
  return (
    <article className="pt-16 sm:pt-24">
      <h1 className="display text-4xl sm:text-5xl">Projects</h1>
      <p className="mt-3 text-ink-soft">
        Things I&apos;ve built, with notes on the engineering problems that made
        them interesting.
      </p>

      <ol className="mt-14 space-y-16">
        {FEATURED_PROJECTS.map((project) => (
          <li key={project.title}>
            <h2 className="display text-3xl">{project.title}</h2>
            {project.deepDive && (
              <p className="mt-1 font-serif text-lg italic text-ink-soft">
                {project.deepDive.tagline}
              </p>
            )}

            <p className="mt-4">{project.description}</p>

            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prose-link"
                >
                  Live site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prose-link"
                >
                  Source
                </a>
              )}
              <span className="text-ink-muted">{project.tags.join(" · ")}</span>
            </p>

            {project.deepDive && (
              <div className="mt-6 border-l border-rule pl-5 sm:pl-7">
                <p className="text-ink-soft">{project.deepDive.overview}</p>

                {project.deepDive.metrics.length > 0 && (
                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                    {project.deepDive.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="display text-2xl">{metric.value}</dt>
                        <dd className="text-sm text-ink-muted">
                          {metric.label}
                          {metric.sub ? ` — ${metric.sub}` : ""}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {project.deepDive.challenges.map((challenge) => (
                  <div key={challenge.title} className="mt-8">
                    <h3 className="eyebrow">{challenge.title}</h3>
                    <p className="mt-2 text-ink-soft">{challenge.body}</p>
                    {challenge.code && (
                      <pre className="mt-3 overflow-x-auto border border-rule bg-paper-deep p-4 font-mono text-[13px] leading-relaxed">
                        <code>{challenge.code}</code>
                      </pre>
                    )}
                  </div>
                ))}

                <p className="mt-6 text-sm text-ink-muted">
                  Stack: {project.deepDive.stack.map((s) => s.name).join(" · ")}
                </p>
              </div>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-16">
        <Link href="/" className="prose-link">
          ← Back home
        </Link>
      </p>
    </article>
  );
}

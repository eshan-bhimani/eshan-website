import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_PROJECTS } from "@/lib/constants";

type Params = { slug: string };

function formatDate(iso: string) {
  // Parsed as UTC so the displayed date never shifts by timezone
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function generateStaticParams(): Params[] {
  return FEATURED_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const sections = [
    { heading: "What it is", body: project.whatItIs },
    ...(project.whyItMatters
      ? [{ heading: "Why it matters", body: project.whyItMatters }]
      : []),
    ...(project.inspiration
      ? [{ heading: "Inspiration", body: project.inspiration }]
      : []),
    ...(project.process ? [{ heading: "Process", body: project.process }] : []),
  ];

  return (
    <article className="pt-16 sm:pt-24">
      {project.date && (
        <p className="font-mono text-sm text-ink-muted">
          <time dateTime={project.date}>{formatDate(project.date)}</time>
        </p>
      )}
      <h1 className="display mt-2 text-4xl sm:text-5xl">
        {project.title}
        {project.status === "wip" && (
          <span className="ml-3 align-middle font-mono text-sm uppercase text-ink-muted">
            wip
          </span>
        )}
      </h1>

      <p className="mt-4 flex flex-wrap gap-2">
        {project.categories.map((c) => (
          <span
            key={c}
            className="rounded-full bg-paper-deep px-3 py-0.5 font-mono text-sm text-ink-soft"
          >
            {c}
          </span>
        ))}
      </p>

      <p className="mt-10 text-lg">{project.description}</p>

      {sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="display text-3xl">{section.heading}</h2>
          <p className="mt-4 text-ink-soft">{section.body}</p>
        </section>
      ))}

      <section className="mt-12">
        <h2 className="display text-3xl">Stack</h2>
        <p className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-rule px-3 py-0.5 font-mono text-sm text-ink-soft"
            >
              {s}
            </span>
          ))}
        </p>
      </section>

      {(project.github || project.link || project.video) && (
        <p className="mt-12 flex flex-wrap gap-x-5 text-sm">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="prose-link">
              {project.githubLabel ?? "View on GitHub →"}
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="prose-link">
              {project.linkLabel ?? "Live site →"}
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer" className="prose-link">
              {project.videoLabel ?? "Watch demo video →"}
            </a>
          )}
        </p>
      )}

      <p className="mt-16">
        <Link href="/projects" className="prose-link">
          ← All projects
        </Link>
      </p>
    </article>
  );
}

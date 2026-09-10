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

      {(project.link || project.github) && (
        <p className="mt-4 flex flex-wrap gap-x-4 text-sm">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="prose-link">
              Live site
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="prose-link">
              Source
            </a>
          )}
        </p>
      )}

      {project.sections?.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="display text-3xl">{section.heading}</h2>
          <p className="mt-4 text-ink-soft">{section.body}</p>
        </section>
      ))}

      {project.deepDive && (
        <section className="mt-12">
          <h2 className="display text-3xl">Under the hood</h2>
          <p className="mt-1 font-serif text-lg italic text-ink-soft">
            {project.deepDive.tagline}
          </p>
          <p className="mt-4 text-ink-soft">{project.deepDive.overview}</p>

          {project.deepDive.metrics.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
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
        </section>
      )}

      <p className="mt-16">
        <Link href="/projects" className="prose-link">
          ← All projects
        </Link>
      </p>
    </article>
  );
}

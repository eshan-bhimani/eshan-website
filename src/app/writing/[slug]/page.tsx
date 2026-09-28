import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WRITING_ITEMS } from "@/lib/constants";

type Params = { slug: string };

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function renderInline(text: string) {
  return text.split(/(\*[^*]+\*)/).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>
    ) : (
      part
    )
  );
}

export function generateStaticParams(): Params[] {
  return WRITING_ITEMS.flatMap((item) =>
    item.slug ? [{ slug: item.slug }] : []
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = WRITING_ITEMS.find((entry) => entry.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function WritingArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = WRITING_ITEMS.find((entry) => entry.slug === slug);
  if (!item?.sections) notFound();

  return (
    <article className="pt-16 sm:pt-24">
      <time dateTime={item.date} className="font-mono text-sm text-ink-muted">
        {formatDate(item.date)}
      </time>
      <h1 className="display mt-3 text-4xl sm:text-5xl">{item.title}</h1>

      <div className="mt-12 space-y-12">
        {item.sections.map((section, sectionIndex) => (
          <section key={section.heading ?? `introduction-${sectionIndex}`}>
            {section.heading && (
              <h2 className="display text-3xl">{section.heading}</h2>
            )}
            <div className={`${section.heading ? "mt-4" : ""} space-y-5 text-ink-soft`}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{renderInline(paragraph)}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16">
        <Link href="/writing" className="prose-link">
          ← All writing
        </Link>
      </p>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NEWS_ITEMS, type NewsItem } from "@/lib/constants";

export const metadata: Metadata = {
  title: "News",
  description:
    "Notes from Eshan Bhimani on events, talks, and things worth writing down.",
};

function formatDate(iso: string) {
  // Parsed as UTC so the displayed date never shifts by timezone
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function NewsPage() {
  const items: NewsItem[] = [...NEWS_ITEMS].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <article className="pt-16 sm:pt-24">
      <h1 className="display text-4xl sm:text-5xl">News</h1>
      <p className="mt-3 text-ink-soft">
        Events I&apos;ve been to, things I&apos;ve shipped, and the occasional
        note worth keeping. Newest first.
      </p>

      {items.length === 0 ? (
        <p className="mt-14 text-ink-muted">Nothing posted yet — check back.</p>
      ) : (
        <ol className="mt-14 space-y-12">
          {items.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <p className="eyebrow">
                <time dateTime={item.date}>{formatDate(item.date)}</time>
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <h2 className="display mt-2 text-2xl">{item.title}</h2>
              <p className="mt-2 text-ink-soft">{item.body}</p>
              {item.images && (
                <div className="mt-4 flex flex-wrap items-start gap-3">
                  {item.images.map((img) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="h-32 w-auto rounded border border-rule object-cover sm:h-40"
                    />
                  ))}
                </div>
              )}
              {item.link && (
                <p className="mt-2 text-sm">
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    {item.link.label}
                  </a>
                </p>
              )}
            </li>
          ))}
        </ol>
      )}

      <p className="mt-16">
        <Link href="/" className="prose-link">
          ← Back home
        </Link>
      </p>
    </article>
  );
}

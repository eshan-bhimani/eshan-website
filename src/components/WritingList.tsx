"use client";

import { useState } from "react";
import type { WritingItem } from "@/lib/constants";

const ALL = "all";

function formatMonth(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function WritingList({ items }: { items: WritingItem[] }) {
  const [active, setActive] = useState(ALL);
  const categories = Array.from(
    new Set(items.flatMap((item) => item.categories))
  ).sort();
  const visible =
    active === ALL
      ? items
      : items.filter((item) => item.categories.includes(active));

  return (
    <>
      <div
        className="mt-10 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter writing by topic"
      >
        {[ALL, ...categories].map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={selected}
              className={`rounded-full border px-4 py-1 font-mono text-sm transition-colors ${
                selected
                  ? "border-ink text-ink"
                  : "border-rule text-ink-muted hover:border-ink-muted hover:text-ink-soft"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ol className="mt-14 space-y-10">
        {visible.map((item) => (
          <li key={item.href}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <h2 className="display text-2xl">
                <a href={item.href} className="hover:underline">
                  {item.title}
                </a>
              </h2>
              <time
                dateTime={item.date}
                className="shrink-0 font-mono text-sm text-ink-muted"
              >
                {formatMonth(item.date)}
              </time>
            </div>
            <p className="mt-2 text-ink-soft">{item.summary}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import WritingList from "@/components/WritingList";
import { WRITING_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing and research from Eshan Bhimani on AI, systems, markets, and building software.",
};

export default function WritingPage() {
  const items = [...WRITING_ITEMS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <article className="pt-16 sm:pt-24">
      <h1 className="display text-4xl sm:text-5xl">Writing</h1>
      <p className="mt-3 text-ink-soft">
        Notes and research on AI, systems, markets, and building software.
      </p>

      <WritingList items={items} />

      <p className="mt-16">
        <Link href="/" className="prose-link">
          ← Back home
        </Link>
      </p>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/constants";
import ProjectList from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects built by Eshan Bhimani — full-stack, AI, and systems work with engineering write-ups.",
};

export default function ProjectsPage() {
  return (
    <article className="pt-16 sm:pt-24">
      <h1 className="display text-4xl sm:text-5xl">Projects</h1>
      <p className="mt-3 text-ink-soft">Things I&apos;ve built or am building.</p>

      <ProjectList projects={FEATURED_PROJECTS} />

      <p className="mt-16">
        <Link href="/" className="prose-link">
          ← Back home
        </Link>
      </p>
    </article>
  );
}

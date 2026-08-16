import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Eshan Bhimani — CS student at Georgia Tech, builder, and aspiring entrepreneur.",
};

export default function AboutPage() {
  return (
    <article className="pt-16 sm:pt-24">
      <h1 className="display text-4xl sm:text-5xl">A bit about me</h1>

      <div className="mt-10 space-y-5">
        <p>
          I&apos;m a junior CS major at Georgia Tech, with threads in
          Intelligence and Systems &amp; Architecture, and I anticipate
          graduating in May 2028.
        </p>
        <p>
          I&apos;m currently a Software Engineer Intern at NCR Atleos at their
          Global HQ in Atlanta, where I&apos;m working on creating AI agents and
          systems over data layers.
        </p>
        <p>
          I love building things that solve daily inconveniences — products that
          people actually want to use. Whether it&apos;s a tool that saves
          someone five minutes a day or a platform that fundamentally changes
          how people interact with a system, I&apos;m drawn to practical,
          impactful work.
        </p>
        <p>
          My long-term goal is to start a company in NYC or SF that builds a
          bridge between AI, tech, and the software development industries. I
          believe there&apos;s enormous untapped potential at that intersection,
          and I want to be the one building there.
        </p>
      </div>

      <p className="mt-12">
        <Link href="/" className="prose-link">
          ← Back home
        </Link>
      </p>
    </article>
  );
}

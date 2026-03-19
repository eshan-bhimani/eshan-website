import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Eshan Bhimani — CS student at Georgia Tech, builder, and aspiring entrepreneur.",
};

export default function AboutPage() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
          About
        </p>
        <h1 className="text-3xl font-bold text-text-primary mb-10 sm:text-4xl">
          A bit about me
        </h1>

        <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
          <p>
            I&apos;m currently a junior CS major at Georgia Tech, with threads
            in Intelligence and People. I transferred from UGA after my
            sophomore year in Summer 2026, and I anticipate graduating in May
            2028.
          </p>
          <p>
            I love building things that solve daily inconveniences — products
            that people actually want to use. Whether it&apos;s a tool that
            saves someone five minutes a day or a platform that fundamentally
            changes how people interact with a system, I&apos;m drawn to
            practical, impactful work.
          </p>
          <p>
            My long-term goal is to start a company in NYC or SF that builds a
            bridge between AI, tech, and the financial industries. I believe
            there&apos;s enormous untapped potential at that intersection, and
            I want to be the one building there.
          </p>
        </div>
      </div>
    </section>
  );
}

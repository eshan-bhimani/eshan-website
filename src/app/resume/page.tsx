import type { Metadata } from "next";
import Link from "next/link";
import YellowJacket from "@/components/YellowJacket";
import {
  EDUCATION,
  RESUME_EXPERIENCE,
  FEATURED_PROJECTS,
  SKILLS,
  AWARDS,
  INTERESTS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Education, experience, projects, and skills — Eshan Bhimani, CS at Georgia Tech.",
};

export default function ResumePage() {
  const projects = FEATURED_PROJECTS.slice(0, 4);

  return (
    <article className="pt-16 sm:pt-24">
      <h1 className="display text-4xl sm:text-5xl">Resume</h1>
      <p className="mt-3 text-ink-soft">
        A snapshot of the journey so far.{" "}
        <a href="/resume.pdf" className="prose-link">
          Download the PDF
        </a>
        .
      </p>

      {/* ── Education ── */}
      <Section title="Education">
        <div className="flex items-start gap-4">
          <YellowJacket size={64} className="mt-1 shrink-0" />
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="display text-2xl">{EDUCATION.school}</h3>
              <span className="text-sm text-ink-muted">{EDUCATION.grad}</span>
            </div>
            <p className="mt-0.5 text-ink-soft">
              {EDUCATION.degree} · GPA {EDUCATION.gpa}
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          <Bullet>Concentration: {EDUCATION.concentration}</Bullet>
          <Bullet>Honors: {EDUCATION.honors}</Bullet>
          <Bullet>Relevant coursework: {EDUCATION.courses.join(", ")}</Bullet>
        </ul>
      </Section>

      {/* ── Experience ── */}
      <Section title="Experience">
        <ul className="space-y-8">
          {RESUME_EXPERIENCE.map((exp) => (
            <li key={exp.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="display text-2xl">{exp.company}</h3>
                <span className="text-sm text-ink-muted">{exp.period}</span>
              </div>
              <p className="mt-0.5 text-ink-soft">
                {exp.role} · {exp.location}
              </p>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((bullet) => (
                  <Bullet key={bullet}>{bullet}</Bullet>
                ))}
              </ul>
              <p className="mt-3 text-sm text-ink-muted">
                {exp.tags.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Projects ── */}
      <Section title="Projects">
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.title}>
              <h3 className="display text-2xl">{project.title}</h3>
              <p className="mt-1 text-ink-soft">{project.description}</p>
              <p className="mt-2 text-sm text-ink-muted">
                {project.tags.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-7">
          <Link href="/projects" className="prose-link">
            All {FEATURED_PROJECTS.length} projects, with engineering write-ups
          </Link>
        </p>
      </Section>

      {/* ── Skills ── */}
      <Section title="Technical skills">
        <dl className="space-y-4">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <dt className="eyebrow">{category}</dt>
              <dd className="mt-1">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Awards & interests ── */}
      <Section title="Awards & interests">
        <dl className="space-y-4">
          <div>
            <dt className="eyebrow">Awards</dt>
            <dd className="mt-1">{AWARDS.join(", ")}</dd>
          </div>
          <div>
            <dt className="eyebrow">Interests</dt>
            <dd className="mt-1">{INTERESTS.join(", ")}</dd>
          </div>
        </dl>
      </Section>

      <p className="mt-16">
        <Link href="/" className="prose-link">
          ← Back home
        </Link>
      </p>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 sm:mt-16">
      <h2 className="display mb-6 text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden className="select-none text-ink-muted">
        •
      </span>
      <span>{children}</span>
    </li>
  );
}

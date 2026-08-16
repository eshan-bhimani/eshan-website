import Link from "next/link";
import Image from "next/image";
import {
  EXPERIENCE,
  FEATURED_PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
  EDUCATION,
} from "@/lib/constants";

export default function Home() {
  const featured = FEATURED_PROJECTS.slice(0, 4);

  return (
    <article className="pt-16 sm:pt-24">
      {/* ── Masthead ── */}
      <header className="flex items-start justify-between gap-8">
        <div>
          <h1 className="display text-5xl sm:text-6xl">Eshan Bhimani</h1>
          <p className="mt-3 text-ink-soft">
            Building at the intersection of AI, systems, and software.
          </p>
        </div>
        <Image
          src="/profile.jpg"
          alt="Eshan Bhimani"
          width={104}
          height={104}
          priority
          className="hidden h-26 w-26 shrink-0 rounded-full object-cover object-top grayscale sm:block"
        />
      </header>

      {/* ── Intro ── */}
      <section className="mt-12 space-y-5">
        <p>
          I&apos;m a Computer Science student at{" "}
          <span className="font-medium">Georgia Tech</span> — Presidential
          Scholar, Dean&apos;s List, and Zell Miller Scholar — with threads in
          Intelligence and Systems &amp; Architecture, graduating May 2028. I
          transferred from the University of Georgia after my sophomore year.
        </p>
        <p>
          Right now I&apos;m a Software Engineer Intern at{" "}
          <span className="font-medium">NCR Atleos</span>, where I&apos;m
          building an enterprise knowledge graph in Neo4j — 10K+ nodes, Graph
          RAG Q&amp;A pipelines, and an AI semantic layer engine that cuts Power
          BI scaffolding time by roughly 60%.
        </p>
        <p>
          I like building things that remove friction from someone&apos;s day:
          tools people actually reach for, not demos. Long term, I want to start
          a company at the intersection of AI, technology, and software —
          turning hard engineering problems into simple, productive
          experiences.
        </p>
      </section>

      {/* ── Experience ── */}
      <Section id="experience" title="Where I've worked">
        <ul className="space-y-8">
          {EXPERIENCE.map((exp) => (
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
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Projects ── */}
      <Section id="projects" title="Selected work">
        <ul className="space-y-7">
          {featured.map((project) => (
            <li key={project.title}>
              <h3 className="display text-2xl">{project.title}</h3>
              <p className="mt-1 text-ink-soft">{project.description}</p>
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    Live site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    Source
                  </a>
                )}
                <span className="text-ink-muted">{project.tags.join(" · ")}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/projects" className="prose-link">
            All {FEATURED_PROJECTS.length} projects, with engineering write-ups
          </Link>
        </p>
      </Section>

      {/* ── Education ── */}
      <Section id="education" title="Education">
        <p className="display text-2xl">{EDUCATION.school}</p>
        <p className="mt-1 text-ink-soft">
          {EDUCATION.degree} · GPA {EDUCATION.gpa} · {EDUCATION.grad}
        </p>
        <ul className="mt-3 space-y-2">
          <Bullet>Concentration: {EDUCATION.concentration}</Bullet>
          <Bullet>Honors: {EDUCATION.honors}</Bullet>
          <Bullet>Coursework: {EDUCATION.courses.join(", ")}</Bullet>
        </ul>
        <p className="mt-4 text-ink-soft">
          Previously: University of Georgia, Computer Science (2024 – 2026).
        </p>
      </Section>

      {/* ── Skills ── */}
      <Section id="skills" title="Toolkit">
        <dl className="space-y-4">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <dt className="eyebrow">{category}</dt>
              <dd className="mt-1">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Contact ── */}
      <Section id="contact" title="Get in touch">
        <p>
          I&apos;m always open to interesting conversations, opportunities, and
          collaborations. Email me at{" "}
          <a href={SOCIAL_LINKS.email} className="prose-link">
            bhimanieshan@gmail.com
          </a>
          , or find me on{" "}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link"
          >
            LinkedIn
          </a>
          , and{" "}
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link"
          >
            X
          </a>
          .
        </p>
        <p className="mt-4">
          Based in Atlanta, GA.{" "}
          <a href="/resume.pdf" className="prose-link">
            Download my resume (PDF)
          </a>
          .
        </p>
      </Section>

      {/* ── Muted closing note ── */}
      <hr className="mt-16" />
      <section className="mt-8 text-ink-muted">
        <p>– Outside of work</p>
        <p className="mt-1">
          Tennis (2021 state champion), weightlifting, running, basketball,
          pickleball, poker, and investing.
        </p>
      </section>
    </article>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-16 sm:mt-20">
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

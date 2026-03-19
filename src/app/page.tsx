"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/constants";

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          <span className="text-text-primary">Eshan</span>{" "}
          <span className="bg-gradient-to-r from-accent to-teal bg-clip-text text-transparent">
            Bhimani
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted"
        >
          <svg
            className="h-3.5 w-3.5 text-teal"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Atlanta, GA — Georgia Tech
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          CS student at{" "}
          <span className="text-text-primary font-medium">Georgia Tech</span>{" "}
          building products at the intersection of{" "}
          <span className="text-text-primary font-medium">
            AI, technology &amp; finance
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group relative rounded-full bg-accent/10 px-8 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10"
          >
            <span className="relative z-10">View My Work</span>
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text-secondary transition-all hover:border-border-light hover:text-text-primary"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-border-light flex items-start justify-center pt-1.5"
        >
          <div className="h-1.5 w-0.5 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Education Trajectory ─── */
function EducationSection() {
  const milestones = [
    {
      period: "2024 – Spring 2026",
      school: "University of Georgia",
      detail: "Computer Science · Athens, GA",
      badge: "Foundation",
    },
    {
      period: "Summer 2026 – 2028",
      school: "Georgia Institute of Technology",
      detail: "CS · Intelligence & People Threads · Atlanta, GA",
      badge: "Current",
      highlight: true,
    },
  ];

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
            Education
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-16 sm:text-4xl">
            The trajectory
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border-light to-transparent" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <SectionReveal key={m.period} delay={i * 0.12}>
                <div className="flex gap-6">
                  {/* Dot */}
                  <div className="relative mt-1.5 flex-shrink-0">
                    <div
                      className={`h-[15px] w-[15px] rounded-full border-2 ${
                        m.highlight
                          ? "border-teal bg-teal/20"
                          : "border-accent/50 bg-background"
                      }`}
                    />
                    {m.highlight && (
                      <div className="absolute inset-0 h-[15px] w-[15px] rounded-full bg-teal/30 animate-ping" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-text-muted">
                        {m.period}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          m.highlight
                            ? "bg-teal/10 text-teal"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {m.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {m.school}
                    </h3>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {m.detail}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About Preview ─── */
function AboutPreview() {
  return (
    <section className="px-6 py-28 border-t border-border/40">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-8 sm:text-4xl">
            A bit about me
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-lg leading-relaxed text-text-secondary">
            I&apos;m a junior CS major at Georgia Tech with threads in{" "}
            <span className="text-text-primary font-medium">Intelligence</span>{" "}
            and{" "}
            <span className="text-text-primary font-medium">People</span>. I
            transferred from UGA in Summer 2026, and I&apos;m on track to
            graduate in May 2028.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            I believe the best products come from deeply understanding people
            and their pain points. My long-term goal is to build a startup in
            NYC or SF that bridges the{" "}
            <span className="text-text-primary font-medium">
              AI, tech, and financial industries
            </span>
            .
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            Read more
            <span className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Featured Projects ─── */
function FeaturedProjects() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-14 sm:text-4xl">
            Things I&apos;ve built
          </h2>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              View all projects &rarr;
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Contact CTA ─── */
function CTASection() {
  return (
    <section className="px-6 py-28 border-t border-border/40">
      <div className="mx-auto max-w-xl text-center">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-teal uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="text-text-secondary mb-10 text-lg">
            I&apos;m always open to interesting conversations and
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border border-accent/30 bg-accent/10 px-10 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
          >
            Say Hello
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <AboutPreview />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}

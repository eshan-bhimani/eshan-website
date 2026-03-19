"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/constants";

function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-start/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-end/8 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium tracking-widest text-accent-light uppercase"
        >
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            Eshan Bhimani
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          CS student at{" "}
          <span className="text-text-primary font-medium">Georgia Tech</span>{" "}
          building products that solve everyday problems.
          <br className="hidden sm:block" />
          Passionate about the intersection of{" "}
          <span className="text-text-primary font-medium">
            technology &amp; finance
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
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <h2 className="text-sm font-medium tracking-widest text-accent-light uppercase mb-8">
            About Me
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
              tech and financial industries
            </span>
            .
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm text-accent-light hover:text-accent transition-colors"
          >
            Read more about me &rarr;
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="px-6 py-24 bg-surface/30">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="text-sm font-medium tracking-widest text-accent-light uppercase mb-2">
            Featured Projects
          </h2>
          <p className="text-2xl font-semibold text-text-primary mb-12">
            Things I&apos;ve built
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="text-sm text-accent-light hover:text-accent transition-colors"
            >
              View all projects &rarr;
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-text-secondary mb-8">
            I&apos;m always open to interesting conversations and
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Say Hello
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}

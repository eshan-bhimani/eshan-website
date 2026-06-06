"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import CounterAnimation from "@/components/ui/CounterAnimation";
import {
  FEATURED_PROJECTS,
  HERO_TAGS,
  ROTATING_TITLES,
  IMPACT_METRICS,
  EXPERIENCE,
  SKILLS,
  SOCIAL_LINKS,
} from "@/lib/constants";

/* ─── Skill icon map ─── */
const SKILL_ICONS: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "D3.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  Neo4j: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  PyTorch: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  SQLAlchemy: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  "Azure OpenAI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  Gymnasium: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  pybind11: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
};

/* ─── Typing hook ─── */
function useTypingAnimation(text: string, speed = 90, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(iv);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(iv);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ─── Rotating subtitle ─── */
function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_TITLES.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 overflow-hidden flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-lg font-medium bg-gradient-to-r from-accent to-teal bg-clip-text text-transparent sm:text-xl"
        >
          {ROTATING_TITLES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/* ─── Hero ─── */
function HeroSection() {
  const { displayed, done } = useTypingAnimation("Hi, I'm Eshan Bhimani", 80, 400);
  const showSub = displayed.length >= 10;

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6">
      {/* Radial geometric pattern — shifted left to center on text */}
      <div className="absolute inset-0 pointer-events-none" style={{ left: "-15%" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-[0.05]"
            viewBox="0 0 900 900"
            fill="none"
          >
            <defs>
              <radialGradient id="bloom" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#a78bfa" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#080c14" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="450" cy="450" r="180" fill="url(#bloom)" />
            {[90, 150, 220, 300, 380, 440].map((r) => (
              <circle key={r} cx="450" cy="450" r={r} stroke="#38bdf8" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 24 }).map((_, i) => {
              const a = (i * 15 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1="450" y1="450"
                  x2={(450 + 440 * Math.cos(a)).toFixed(2)}
                  y2={(450 + 440 * Math.sin(a)).toFixed(2)}
                  stroke="#38bdf8"
                  strokeWidth="0.4"
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl w-full">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-12">
          {/* Left: text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Status tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap justify-center md:justify-start gap-2"
            >
              {HERO_TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm px-3.5 py-1 text-xs font-medium text-text-secondary"
                >
                  {tag.label}
                </span>
              ))}
            </motion.div>

            {/* Name with "Hi, I'm" prefix */}
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl lg:text-6xl">
              <span className="text-text-primary">{displayed.slice(0, 8)}</span>
              <span className="bg-gradient-to-r from-accent via-accent-light to-teal bg-clip-text text-transparent">
                {displayed.slice(8)}
              </span>
              <motion.span
                className="inline-block w-[3px] h-[0.85em] align-middle bg-gradient-to-b from-accent to-teal rounded-full ml-1"
                animate={{ opacity: done ? [0.6, 0, 0.6] : [1, 1, 0, 0] }}
                transition={{
                  duration: done ? 1.4 : 0.8,
                  repeat: Infinity,
                  times: done ? undefined : [0, 0.49, 0.5, 1],
                }}
              />
            </h1>

            {/* Rotating subtitle */}
            <AnimatePresence>
              {showSub && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3"
                >
                  <RotatingTitle />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bio + CTAs */}
            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                    CS student at{" "}
                    <span className="text-text-primary font-medium">Georgia Tech</span>{" "}
                    building at the intersection of{" "}
                    <span className="text-text-primary font-medium">AI, technology & software</span>.
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
                    <a
                      href="#projects"
                      className="rounded-full bg-accent/10 border border-accent/30 px-7 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                    >
                      View My Work →
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-border px-7 py-2.5 text-sm font-semibold text-text-secondary transition-all hover:border-border-light hover:text-text-primary"
                    >
                      Contact Me
                    </a>
                  </div>

                  <div className="mt-7 flex items-center justify-center md:justify-start gap-3 text-base text-text-muted">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-text-secondary">Atlanta, GA</span>
                    <span className="opacity-40">·</span>
                    <span>Expected May 2028</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: profile photo with GT badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex shrink-0 items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-teal/20 to-transparent blur-2xl scale-110" />
              {/* Photo */}
              <div className="relative h-56 w-56 rounded-full border-2 border-accent/30 overflow-hidden bg-surface">
                <Image
                  src="/Users/eshanbhimani/Downloads/Eshan_Headshot-compressed.png"
                  alt="Eshan Bhimani"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating GT badge at 2 o'clock */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-[#B3A369] shadow-lg shadow-[#B3A369]/30 flex items-center justify-center"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white font-bold text-sm tracking-tight">GT</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── About + Metrics ─── */
function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border/30">
      <div className="mx-auto max-w-4xl">
        {/* Animated counters */}
        <SectionReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {IMPACT_METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-5 text-center"
              >
                <p className="text-3xl font-bold text-accent tabular-nums sm:text-4xl">
                  <CounterAnimation
                    target={m.target}
                    suffix={m.suffix}
                    decimals={m.decimals}
                  />
                </p>
                <p className="mt-1 text-xs text-text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Bio + education side by side */}
        <div className="grid gap-12 md:grid-cols-[1fr_220px]">
          <div>
            <SectionReveal>
              <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
                About
              </p>
              <h2 className="text-3xl font-bold text-text-primary mb-6 sm:text-4xl">
                About Me
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-base leading-relaxed text-text-secondary mb-4">
                I&apos;m a CS major at{" "}
                <span className="text-text-primary font-medium">Georgia Tech</span>{" "}
                — Presidential Scholar, Dean&apos;s List, and Zell Miller Scholar — with
                threads in Systems & Architecture and Intelligence, graduating May 2028.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <p className="text-base leading-relaxed text-text-secondary mb-4">
                Right now I&apos;m building an enterprise knowledge graph at{" "}
                <span className="text-text-primary font-medium">NCR Atleos</span>{" "}
                — 10K+ nodes, Graph RAG Q&A pipelines, and an AI semantic layer engine
                that cuts Power BI scaffolding time by 60%.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-base leading-relaxed text-text-secondary">
                Long term, I want to build a startup at the intersection of{" "}
                <span className="text-text-primary font-medium">AI, technology & software</span>{" "}
                — turning hard engineering problems into simple, productive experiences.
              </p>
            </SectionReveal>
          </div>

          {/* Education mini-timeline */}
          <SectionReveal delay={0.12}>
            <div>
              <p className="text-xs font-mono font-medium tracking-widest text-teal uppercase mb-5">
                Education
              </p>
              <div className="relative space-y-7">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border-light to-transparent" />
                {[
                  { period: "2024 – 2026", school: "Univ. of Georgia", detail: "Computer Science", current: false },
                  { period: "2026 – 2028", school: "Georgia Tech", detail: "CS · Systems & Architecture + Intelligence", current: true },
                ].map((edu) => (
                  <div key={edu.school} className="flex gap-4">
                    <div className="relative mt-1.5 shrink-0">
                      <div className={`h-3.5 w-3.5 rounded-full border-2 ${edu.current ? "border-teal bg-teal/20" : "border-accent/50 bg-[var(--color-background)]"}`} />
                      {edu.current && <div className="absolute inset-0 h-3.5 w-3.5 rounded-full bg-teal/30 animate-ping" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-muted block mb-0.5">{edu.period}</span>
                      <p className="text-sm font-semibold text-text-primary">{edu.school}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{edu.detail}</p>
                      {edu.current && (
                        <span className="mt-1 inline-block rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-border/30">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-14 sm:text-4xl">
            Where I&apos;ve Worked
          </h2>
        </SectionReveal>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent/30 via-border to-transparent" />
          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <SectionReveal key={exp.company} delay={i * 0.08}>
                  <div className="md:grid md:grid-cols-[1fr_32px_1fr] md:gap-0 items-start">
                    <div className={isLeft ? "md:pr-8" : "md:pr-8 md:invisible"}>
                      {isLeft && <ExperienceCard exp={exp} />}
                    </div>
                    <div className="hidden md:flex justify-center pt-6">
                      <div className="h-3 w-3 rounded-full border-2 border-accent bg-[var(--color-background)] relative z-10" />
                    </div>
                    <div className={!isLeft ? "md:pl-8" : "md:pl-8 md:invisible"}>
                      {!isLeft && <ExperienceCard exp={exp} />}
                    </div>
                    <div className="md:hidden">
                      <ExperienceCard exp={exp} />
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: typeof EXPERIENCE[0] }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-6 hover:border-border-light transition-colors">
      <div className="mb-3">
        <h3 className="font-semibold text-text-primary">{exp.company}</h3>
        <p className="text-sm text-accent mt-0.5">{exp.role}</p>
        <p className="text-xs text-text-muted mt-0.5">{exp.location} · {exp.period}</p>
      </div>
      <ul className="space-y-1.5 mb-4">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <svg className="mt-1 shrink-0 h-3 w-3 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-text-muted">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Projects ─── */
function ProjectsSection() {
  const featured = FEATURED_PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="px-6 py-24 border-t border-border/30">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-3 sm:text-4xl">
            Featured Work
          </h2>
          <p className="text-text-secondary mb-12 text-sm max-w-lg">
            A selection of things I&apos;ve built. Click any card for the full engineering deep dive.
          </p>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.07}>
              <ProjectCard project={project} index={i} onClick={() => {}} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.25}>
          <div className="mt-10 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              View all {FEATURED_PROJECTS.length} projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─── Skills with logos ─── */
function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border/30">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-12 sm:text-4xl">
            Technical Expertise
          </h2>
        </SectionReveal>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <SectionReveal key={category} delay={i * 0.08}>
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-4">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/50 px-3 py-1.5 text-xs font-mono text-text-secondary hover:border-border-light hover:text-text-primary transition-colors cursor-default"
                    >
                      {SKILL_ICONS[skill] && (
                        <img
                          src={SKILL_ICONS[skill]}
                          alt=""
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-border/30">
      <div className="mx-auto max-w-xl text-center">
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-teal uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="text-text-secondary mb-10">
            I&apos;m always open to interesting conversations, opportunities, and collaborations.
          </p>

          <a
            href={SOCIAL_LINKS.email}
            className="inline-block rounded-full border border-accent/30 bg-accent/10 px-10 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 mb-10"
          >
            Say Hello →
          </a>

          <div className="flex items-center justify-center gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
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
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}

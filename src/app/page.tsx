"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/constants";

/* ─── Typing animation hook ─── */
function useTypingAnimation(text: string, speed = 90, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ─── Hero ─── */
function HeroSection() {
  const { displayed, done } = useTypingAnimation("Eshan Bhimani", 100, 500);
  // Delay the rest of the hero content until typing finishes or nearly finishes
  const showContent = displayed.length >= 6;

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">
      {/* Radial geometric pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-[0.06]"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central bloom/glow */}
          <defs>
            <radialGradient id="bloom" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="30%" stopColor="#2dd4bf" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0b0f1a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="450" cy="450" r="180" fill="url(#bloom)" />

          {/* Concentric circles */}
          {[90, 150, 220, 300, 380, 440].map((r) => (
            <circle
              key={r}
              cx="450"
              cy="450"
              r={r}
              stroke="#38bdf8"
              strokeWidth="0.5"
            />
          ))}

          {/* Spokes – 24 lines radiating from center */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x2 = (450 + 440 * Math.cos(angle)).toFixed(2);
            const y2 = (450 + 440 * Math.sin(angle)).toFixed(2);
            return (
              <line
                key={`spoke-${i}`}
                x1="450"
                y1="450"
                x2={x2}
                y2={y2}
                stroke="#38bdf8"
                strokeWidth="0.4"
              />
            );
          })}

          {/* Arcs at mid-radii */}
          {[180, 260, 350].map((r, ri) =>
            [0, 60, 120, 180, 240, 300].map((startDeg) => {
              const start = (startDeg * Math.PI) / 180;
              const end = ((startDeg + 40) * Math.PI) / 180;
              const x1 = (450 + r * Math.cos(start)).toFixed(2);
              const y1 = (450 + r * Math.sin(start)).toFixed(2);
              const x2 = (450 + r * Math.cos(end)).toFixed(2);
              const y2 = (450 + r * Math.sin(end)).toFixed(2);
              return (
                <path
                  key={`arc-${ri}-${startDeg}`}
                  d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                  stroke="#2dd4bf"
                  strokeWidth="0.6"
                  fill="none"
                />
              );
            })
          )}
        </svg>
      </div>

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

        <h1 className="text-5xl font-bold tracking-tight leading-[1.1] sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-accent to-teal bg-clip-text text-transparent">
            {displayed}
          </span>
          <motion.span
            className="inline-block w-[3px] h-[0.85em] align-middle bg-gradient-to-b from-accent to-teal rounded-full ml-1"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.49, 0.5, 1] }}
            style={{ display: done ? "none" : undefined }}
          />
          {/* Persistent subtle cursor after typing finishes */}
          {done && (
            <motion.span
              className="inline-block w-[3px] h-[0.85em] align-middle bg-gradient-to-b from-accent/60 to-teal/60 rounded-full ml-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          )}
        </h1>

        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="mt-3 text-lg font-medium tracking-wide text-text-secondary sm:text-xl">
                Building for the future
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted">
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
                Atlanta, GA — <span className="text-gt-gold font-medium">Georgia Tech</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                CS student at{" "}
                <span className="text-gt-gold font-medium">Georgia Tech</span>{" "}
                building products at the intersection of{" "}
                <span className="text-gt-gold font-medium">
                  AI, technology &amp; finance
                </span>
                .
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
          <h2 className="text-3xl font-bold text-gt-gold mb-16 sm:text-4xl">
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
          <h2 className="text-3xl font-bold text-gt-gold mb-8 sm:text-4xl">
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
          <h2 className="text-3xl font-bold text-gt-gold mb-14 sm:text-4xl">
            Things I&apos;ve built
          </h2>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onClick={() => {}} />
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
          <h2 className="text-3xl font-bold text-gt-gold mb-4 sm:text-4xl">
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

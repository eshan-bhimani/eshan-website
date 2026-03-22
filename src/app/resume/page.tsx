"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";

/* ─── Data ─── */
const EDUCATION = {
  school: "Georgia Institute of Technology",
  degree: "Bachelors of Science, Computer Science",
  gpa: "3.83 / 4.0",
  grad: "May 2028",
  concentration: "Intelligence & People",
  honors: "Presidential Scholar, Dean's List, Zell Miller Scholarship",
  courses: [
    "Data Structures",
    "Algorithms",
    "Database Mgmt.",
    "Software Development",
    "Linear Algebra",
    "Discrete Math",
  ],
};

const EXPERIENCE = [
  {
    company: "ConventionConnection",
    role: "Software Engineer Intern",
    location: "Atlanta, GA",
    period: "December 2025 - Present",
    bullets: [
      "Engineering an AI-powered image processing pipeline using OpenCV and FastAPI to automate card photo cropping, reducing manual processing time by 75% and managing 1,000+ images via Google Photos API on GCP",
      "Architecting pricing engine and auction monitor in Python with 20 rules and real-time bid tracking across marketplaces",
      "Developing full-stack features with React frontend and FastAPI backend services, deployed on Render and Vercel",
    ],
  },
  {
    company: "University of Georgia",
    role: "Undergraduate Researcher",
    location: "Athens, GA",
    period: "September 2025 - Present",
    bullets: [
      "Developing high-performance spectral preprocessing algorithms in Python for signal normalization and noise reduction, optimizing computational throughput by 25% across high-dimensional datasets for downstream ML models",
      "Architecting robust, modular data pipelines to automate raw spectral data transformation into analysis-ready formats",
      "Implementing programmatic verification systems using NumPy, SciPy to validate signal accuracy across data lifecycle",
    ],
  },
  {
    company: "Algoverse AI",
    role: "Software Engineer (Research) Intern",
    location: "Remote",
    period: "September 2025 - March 2026",
    bullets: [
      "Developed a novel multi-task benchmark evaluating LLMs' vision-based tool use capabilities in geolocation reasoning tasks, architected evaluation frameworks that test spatial reasoning; preparing paper for submission to COLM 2026",
      "Built an automated data collection and experimentation pipeline using Python, Selenium, and Google Street View API, processing 300+ diverse global locations with programmatic verification systems for benchmark question validation",
      "Refactored prototype codebase into a production-ready repository with CI/CD integration, implemented 50+ automated tests and type checks that reduced setup time by 20% and enabled reproducible one-command execution",
    ],
  },
];

const PROJECTS = [
  {
    name: "Switch",
    tagline: "Multi-AI Model Platform",
    date: "February 2026",
    bullets: [
      "Built a full-stack multi-AI model site that enables users to switch between different AI models without losing context",
      "Developed a unified backend routing system using Next.js and TypeScript to standardize disparate API schemas; implemented custom middleware to transition and maintain consistent message formatting across model switches",
      "Engineered a scalable PostgreSQL schema via Supabase to manage nested chat hierarchies and message metadata; implemented efficient indexing to ensure low-latency retrieval of conversation histories across persistent user sessions",
    ],
  },
  {
    name: "VesselNav",
    tagline: "Full-Stack Educational Platform",
    date: "October 2025",
    bullets: [
      "Developed a web platform with React and D3.js visualization for cardiovascular anatomy study with interactive search",
      "Implemented bidirectional BFS algorithm using PostgreSQL recursive CTEs for shortest path calculations through vascular network graphs, optimizing complexity with cycle detection across 200+ vessel connections",
      "Built production Spring Boot REST API with PostgreSQL, JPA for entity mapping, Flyway for schema versioning, and Docker containerization; deployed to Vercel with automated CI/CD achieving sub-200ms response times",
    ],
  },
];

const SKILLS = {
  Languages: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
  Frameworks: [
    "React",
    "Next.js",
    "Streamlit",
    "FastAPI",
    "JavaFX",
    "Flask",
    "MongoDB",
    "Node.js",
    "D3.js",
  ],
  "Tools/Libraries": [
    "Git",
    "GitHub",
    "Linux/Unix",
    "CI/CD",
    "AWS",
    "Vercel",
    "Docker",
    "OpenCV",
    "PostgreSQL",
    "Maven",
    "PyTorch",
    "JUnit",
  ],
  Awards: [
    "Presidential Scholar (4.0 GPA)",
    "Dean's List",
    "AP Scholar Award",
    "NHS",
    "2021 Tennis State Championship",
  ],
  Interests: [
    "Tennis",
    "Weightlifting",
    "Running",
    "Basketball",
    "Pickleball",
    "Poker",
    "Investing",
  ],
};

/* ─── Animations ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

/* ─── Components ─── */
function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <SectionReveal>
      <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-text-primary mb-10 sm:text-3xl">
        {title}
      </h2>
    </SectionReveal>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const displayBullets = expanded ? item.bullets : item.bullets.slice(0, 2);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative rounded-xl border border-border bg-surface/40 p-6 transition-all hover:border-border-light hover:bg-surface/70"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {item.company}
          </h3>
          <p className="text-sm text-accent font-medium">{item.role}</p>
          <p className="text-xs text-text-muted mt-0.5">{item.location}</p>
        </div>
        <span className="text-xs font-mono text-text-muted whitespace-nowrap sm:mt-1">
          {item.period}
        </span>
      </div>

      <ul className="space-y-2">
        {displayBullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-text-secondary leading-relaxed"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gt-gold/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {item.bullets.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-medium text-accent hover:text-accent-light transition-colors"
        >
          {expanded ? "Show less" : `+${item.bullets.length - 2} more`}
        </button>
      )}
    </motion.div>
  );
}

function ProjectCard({
  item,
  index,
}: {
  item: (typeof PROJECTS)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const displayBullets = expanded ? item.bullets : item.bullets.slice(0, 2);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative rounded-xl border border-border bg-surface/40 p-6 transition-all hover:border-border-light hover:bg-surface/70"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {item.name}
          </h3>
          <p className="text-sm text-teal font-medium">{item.tagline}</p>
        </div>
        <span className="text-xs font-mono text-text-muted whitespace-nowrap sm:mt-1">
          {item.date}
        </span>
      </div>

      <ul className="space-y-2">
        {displayBullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-text-secondary leading-relaxed"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {item.bullets.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-medium text-teal hover:text-teal-dim transition-colors"
        >
          {expanded ? "Show less" : `+${item.bullets.length - 2} more`}
        </button>
      )}
    </motion.div>
  );
}

/* ─── Page ─── */
export default function ResumePage() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        {/* Page Title */}
        <SectionReveal>
          <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
            Resume
          </p>
          <h1 className="text-3xl font-bold text-gt-gold mb-4 sm:text-4xl">
            Education &amp; Experience
          </h1>
          <p className="text-text-secondary mb-16 text-lg">
            A snapshot of my journey so far.
          </p>
        </SectionReveal>

        {/* ── Education ── */}
        <div className="mb-20">
          <SectionHeading label="Education" title="Georgia Institute of Technology" />

          <SectionReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface/40 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                <div>
                  <p className="text-lg font-semibold text-text-primary">
                    {EDUCATION.degree}
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    <span className="text-accent font-medium">Concentration:</span>{" "}
                    {EDUCATION.concentration}
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    <span className="text-accent font-medium">Honors:</span>{" "}
                    {EDUCATION.honors}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="rounded-full bg-gt-gold/10 px-3 py-1 text-xs font-semibold text-gt-gold">
                    GPA {EDUCATION.gpa}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {EDUCATION.grad}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                  Relevant Courses
                </p>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.courses.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* ── Experience ── */}
        <div className="mb-20">
          <SectionHeading label="Experience" title="Where I've worked" />
          <div className="space-y-4">
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard key={exp.company} item={exp} index={i} />
            ))}
          </div>
        </div>

        {/* ── Projects ── */}
        <div className="mb-20">
          <SectionHeading label="Projects" title="What I've built" />
          <div className="space-y-4">
            {PROJECTS.map((proj, i) => (
              <ProjectCard key={proj.name} item={proj} index={i} />
            ))}
          </div>
        </div>

        {/* ── Skills & Interests ── */}
        <div>
          <SectionHeading label="Technical Skills & Interests" title="My toolkit" />

          <div className="space-y-8">
            {Object.entries(SKILLS).map(([category, items], ci) => (
              <SectionReveal key={category} delay={ci * 0.08}>
                <div>
                  <p className="text-sm font-semibold text-text-muted mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 max-w-[20px] bg-border-light" />
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:border-gt-gold/40 hover:text-gt-gold cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
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

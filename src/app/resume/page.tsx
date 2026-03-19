import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Eshan Bhimani's resume — education, experience, and skills.",
};

export default function ResumePage() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-mono font-medium tracking-widest text-accent uppercase mb-3">
          Resume
        </p>
        <h1 className="text-3xl font-bold text-text-primary mb-14 sm:text-4xl">
          Education &amp; Experience
        </h1>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">
              Education
            </h2>
            <div className="border-l border-border-light pl-6 space-y-8">
              <div>
                <p className="text-xs font-mono text-accent">
                  2026 — 2028 (expected)
                </p>
                <p className="font-semibold text-text-primary mt-1">
                  Georgia Institute of Technology
                </p>
                <p className="text-sm text-text-secondary mt-0.5">
                  B.S. Computer Science — Intelligence &amp; People threads
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-teal">2024 — 2026</p>
                <p className="font-semibold text-text-primary mt-1">
                  University of Georgia
                </p>
                <p className="text-sm text-text-secondary mt-0.5">
                  Computer Science (transferred to Georgia Tech)
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Python",
                "Java",
                "Node.js",
                "SQL",
                "Git",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

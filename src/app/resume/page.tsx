import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Eshan Bhimani's resume — education, experience, and skills.",
};

export default function ResumePage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-sm font-medium tracking-widest text-accent-light uppercase mb-2">
          Resume
        </h1>
        <h2 className="text-3xl font-bold text-text-primary mb-12">
          Education &amp; Experience
        </h2>

        <div className="space-y-10">
          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Education
            </h3>
            <div className="border-l-2 border-border pl-6 space-y-6">
              <div>
                <p className="text-sm text-accent-light">2026 — 2028 (expected)</p>
                <p className="font-medium text-text-primary">
                  Georgia Institute of Technology
                </p>
                <p className="text-sm text-text-secondary">
                  B.S. Computer Science — Intelligence &amp; People threads
                </p>
              </div>
              <div>
                <p className="text-sm text-accent-light">2024 — 2026</p>
                <p className="font-medium text-text-primary">
                  University of Georgia
                </p>
                <p className="text-sm text-text-secondary">
                  Computer Science (transferred to Georgia Tech)
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Skills
            </h3>
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
                  className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light"
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

import type { Metadata } from "next";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Eshan Bhimani.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-mono font-medium tracking-widest text-teal uppercase mb-3">
          Contact
        </p>
        <h1 className="text-3xl font-bold text-text-primary mb-6 sm:text-4xl">
          Let&apos;s connect
        </h1>
        <p className="text-lg text-text-secondary mb-10">
          Whether you have a project idea, an opportunity, or just want to say
          hi — I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={SOCIAL_LINKS.email}
            className="inline-block rounded-full border border-accent/30 bg-accent/10 px-10 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
          >
            Send an Email
          </a>

          <div className="flex gap-8 mt-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

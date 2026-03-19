import type { Metadata } from "next";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Eshan Bhimani.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-sm font-medium tracking-widest text-accent-light uppercase mb-2">
          Contact
        </h1>
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          Let&apos;s connect
        </h2>
        <p className="text-lg text-text-secondary mb-10">
          Whether you have a project idea, an opportunity, or just want to say
          hi — I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={SOCIAL_LINKS.email}
            className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Send an Email
          </a>

          <div className="flex gap-6 mt-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-light transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-light transition-colors"
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

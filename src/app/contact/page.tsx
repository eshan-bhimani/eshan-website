import type { Metadata } from "next";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Eshan Bhimani.",
};

export default function ContactPage() {
  return (
    <article className="pt-16 sm:pt-24">
      <h1 className="display text-4xl sm:text-5xl">Let&apos;s connect</h1>

      <div className="mt-10 space-y-5">
        <p>
          Whether you have a project idea, an opportunity, or just want to say
          hi — I&apos;d love to hear from you. The fastest way to reach me is
          email:{" "}
          <a href={SOCIAL_LINKS.email} className="prose-link">
            bhimanieshan@gmail.com
          </a>
          .
        </p>
        <p>
          You can also find me on{" "}
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
          . I&apos;m based in Atlanta, GA and San Francisco, CA.
        </p>
        <p>
          <a href="/resume.pdf" className="prose-link">
            Download my resume (PDF)
          </a>
        </p>
      </div>

      <p className="mt-12">
        <Link href="/" className="prose-link">
          ← Back home
        </Link>
      </p>
    </article>
  );
}

import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule py-10 text-sm text-ink-muted sm:mt-32">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link"
          >
            X
          </a>
          <a href={SOCIAL_LINKS.email} className="prose-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

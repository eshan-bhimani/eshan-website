import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text-primary mb-1">
              {SITE_CONFIG.name}
            </p>
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-xs font-medium text-text-muted hover:text-accent transition-colors"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

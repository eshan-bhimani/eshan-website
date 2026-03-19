import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent-light transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent-light transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-sm text-text-secondary hover:text-accent-light transition-colors"
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

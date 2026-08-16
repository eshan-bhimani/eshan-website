import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="pt-14 sm:pt-20">
      <nav
        className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted"
        aria-label="Main navigation"
      >
        <ThemeToggle />
        <Link href="/" className="prose-link no-underline text-ink">
          Eshan Bhimani
        </Link>
        <span className="ml-auto flex flex-wrap gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="prose-link">
              {link.label}
            </Link>
          ))}
        </span>
      </nav>
    </header>
  );
}

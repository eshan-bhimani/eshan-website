export const SITE_CONFIG = {
  name: "Eshan Bhimani",
  title: "Eshan Bhimani — Builder & CS Student",
  description:
    "CS student at Georgia Tech focused on building products that solve real problems. Interested in the intersection of AI, technology, and finance.",
  url: "https://eshanbhimani.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/eshan-bhimani",
  linkedin: "https://linkedin.com/in/eshan-bhimani",
  email: "mailto:eshan@example.com",
} as const;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Project One",
    description:
      "A tool that solves a daily inconvenience — placeholder for your real project.",
    tags: ["React", "TypeScript", "Node.js"],
    github: "#",
  },
  {
    title: "Project Two",
    description:
      "Something people actually want — placeholder for your real project.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    github: "#",
  },
  {
    title: "Project Three",
    description:
      "Bridging AI, tech, and finance — placeholder for your real project.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    github: "#",
  },
];

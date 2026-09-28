export const SITE_CONFIG = {
  name: "Eshan Bhimani",
  title: "Eshan Bhimani — Builder & CS Student",
  description:
    "CS student at Georgia Tech focused on building products that solve real problems. Interested in the intersection of AI, technology, and software development.",
  url: "https://eshanbhimani.com",
} as const;

export const NAV_LINKS = [
  { label: "News", href: "/news" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/eshan-bhimani",
  linkedin: "https://linkedin.com/in/eshan-bhimani",
  twitter: "https://x.com/im_eshanb",
  email: "mailto:bhimanieshan@gmail.com",
} as const;

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  homepageDescription: string;
  link?: { label: string; href: string };
  bullets: string[];
  tags: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "NCR Atleos",
    role: "Software Engineer Intern",
    period: "May 2026 – August 2026",
    location: "Atlanta, GA",
    homepageDescription:
      "Developing AI Agents and AI automation pipelines over the data lake to drive informed business decision-making",
    bullets: [
      "Built a Graph RAG query system for the Data & AI Team on Microsoft Fabric using LangChain, Neo4j, and LLM-generated Cypher queries, reducing agent response latency 70% and improving answer accuracy 50%",
      "Developed an agentic schema-recommendation engine with Azure OpenAI that profiled raw SQL tables and generated Power BI-ready semantic models, reducing setup time ~60% and automating schema scaffolding",
      "Architected a Neo4j-backed data layer integrating 5+ internal data sources and 10M+ relationships into a unified graph backend, reducing multi-hop retrieval latency 50%",
    ],
    tags: ["Neo4j", "LangChain", "Azure OpenAI", "Microsoft Fabric", "Graph RAG"],
  },
  {
    company: "Convention Connection",
    role: "Software Engineer Intern",
    period: "December 2025 – July 2026",
    location: "Atlanta, GA",
    homepageDescription:
      "Lead Software Engineer at startup working to revolutionize the Sports memorabilia & Sports Convention industries",
    bullets: [
      "Engineered an AI-powered image processing pipeline using OpenCV and FastAPI to automate card photo cropping, reducing manual processing time by 75% and managing 1,000+ images via Google Photos API on GCP",
      "Built a Python pricing engine with real-time marketplace bid monitoring, automating valuation across inventory",
      "Built a trade matching engine with weighted scoring across grade, set, and company to rank comparable sales",
    ],
    tags: ["OpenCV", "FastAPI", "Python", "GCP", "Google Photos API"],
  },
  {
    company: "Algoverse AI",
    role: "AI Researcher",
    period: "September 2025 – March 2026",
    location: "Palo Alto, CA",
    homepageDescription:
      "Engineered a production-grade benchmark using GeoGuessr to evaluate agentic reasoning and vision-based navigation in LLMs. Submitted to COLM 2026.",
    link: {
      label: "Read the research paper",
      href: "/research/geoguesser-bench.pdf",
    },
    bullets: [
      "Developed a novel multi-task benchmark evaluating LLMs' vision-based capabilities on geolocation reasoning and tool use; designed spatial reasoning evaluations and submitted the work to COLM 2026",
      "Automated collection and validation of 300+ geolocation samples using Python, Selenium, and the GSV API",
      "Productionized the research codebase with CI/CD and 50+ automated tests and type checks, reducing setup time 20% and enabling one-command reproducible evaluation",
    ],
    tags: ["Python", "Selenium", "Street View API", "CI/CD", "LLMs"],
  },
  {
    company: "Switch",
    role: "Co-Founder",
    period: "February 2026 – May 2026",
    location: "Atlanta, GA",
    homepageDescription:
      "Building the most effective and efficient routing intelligence layer for AI models and Agents",
    bullets: [],
    tags: ["Next.js", "TypeScript", "Supabase", "pgvector", "OpenAI", "Anthropic"],
  },
];

export const SKILLS: Record<string, string[]> = {
  Languages: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "Linux"],
  "AI Tools": [
    "LangChain",
    "LangGraph",
    "Agno Agent",
    "Claude Code",
    "Azure OpenAI",
    "pgvector",
    "MCP",
    "Antigravity",
    "GitHub Copilot",
  ],
  Frameworks: [
    "React",
    "Next.js",
    "FastAPI",
    "Django",
    "PyTorch",
    "Node.js",
    "D3.js",
    "Spring Boot",
  ],
  "Tools & Libraries": [
    "Git",
    "Docker",
    "CI/CD",
    "AWS",
    "Vercel",
    "Neo4j",
    "PostgreSQL",
    "Supabase",
    "Redis",
    "OpenCV",
    "pybind11",
  ],
};

export interface NewsItem {
  /** ISO date (YYYY-MM-DD) — used for sorting and for the displayed date */
  date: string;
  title: string;
  /** A sentence or two. Plain text. */
  body: string;
  /** Optional: where it happened */
  location?: string;
  /** Optional: a future event — rendered with a "Coming soon" label and an end date */
  upcoming?: boolean;
  /** Optional: ISO end date for multi-day events */
  endDate?: string;
  /** Optional: a link out — write-up, photos, the event page */
  link?: { label: string; href: string };
  /** Optional: small photos, rendered as a thumbnail row. Put files in public/news/. */
  images?: { src: string; alt: string; width: number; height: number }[];
}

/*
  ── How to post news ──
  Add a new object to the TOP of this array and redeploy. Only `date`,
  `title`, and `body` are required; `location` and `link` are optional.
  Entries render newest-first automatically, so order here doesn't matter —
  but keeping newest on top makes the file easy to scan.

  {
    date: "2026-09-14",
    title: "Something cool I did",
    body: "A sentence or two about it.",
    location: "Atlanta, GA",
    link: { label: "Write-up", href: "https://example.com" },
  },
*/
export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2026-09-25",
    endDate: "2026-09-27",
    upcoming: true,
    title: "HackGT 13 — Seaside Market",
    body: "Heading to HackGT 13 at Georgia Tech, planning to compete in the AI/ML/Data Visualization track.",
    location: "Atlanta, GA",
    link: { label: "HackGT", href: "https://hack.gt" },
  },
  {
    date: "2026-08-20",
    title: "Finished building Overflow",
    body: "Wrapped up Overflow, a multi-agent fleet oversight environment on Meta's OpenEnv where an LLM agent supervises a grid of scripted cars and is rewarded for what doesn't happen. Getting agents to coordinate without causing incidents taught me how much reinforcement learning matters when the goal is safety rather than task completion. I also just got FSD on my Tesla, and watching it handle odd merges and unprotected turns has me thinking about how to feed my agent the same kind of edge cases so it learns from the rare situations, not just the common ones.",
    link: { label: "Project write-up", href: "/projects/overflow" },
  },
  {
    date: "2026-08-15",
    title: "Invited to the YC Startup Internship Expo",
    body: "Spent the day at Y Combinator meeting founders and teams hiring student interns.",
    location: "San Francisco, CA",
    images: [
      {
        src: "/news/yc-badge.jpg",
        alt: "My YC Startup Internship Expo badge",
        width: 644,
        height: 1000,
      },
      {
        src: "/news/yc-office.jpg",
        alt: "Y Combinator sign at their office",
        width: 1000,
        height: 750,
      },
    ],
  },
  {
    date: "2026-08-13",
    title: "MongoDB Buildfest and Hackathon",
    body: "Two days of building with the MongoDB team in San Francisco.",
    location: "San Francisco, CA",
  },
  {
    date: "2026-08-06",
    title: "Wrapped up my summer on the Data & AI team at NCR Atleos",
    body: "Shipped a Graph RAG question-answering layer on Microsoft Fabric and a Neo4j data layer unifying 5+ internal sources across 10M+ node relationships. Three months of building agentic systems on top of enterprise data.",
    location: "Atlanta, GA",
  },
  {
    date: "2026-03-20",
    title: "Submitted our geolocation reasoning benchmark to COLM 2026",
    body: "Six months of research at Algoverse AI on how well LLMs actually use vision-based tools for spatial reasoning — a new multi-task benchmark built from 300+ globally sampled locations.",
  },
];

export const EDUCATION = {
  school: "Georgia Institute of Technology",
  degree: "B.S. in Computer Science",
  gpa: "3.94 / 4.0",
  grad: "Expected May 2028",
  threads: "Systems & Architecture, Intelligence",
  honors: "Presidential Scholar, Zell Miller Scholar, Dean’s List",
  courses: [
    "Data Structures",
    "Algorithms",
    "Computer Organization",
    "AI",
    "Machine Learning",
    "Database",
  ],
} as const;

/*
  Full resume history, reverse-chronological. Derived from EXPERIENCE so the
  shared roles never drift between the home page and the resume page.
*/
export const RESUME_EXPERIENCE: Experience[] = [
  EXPERIENCE[0],
  EXPERIENCE[1],
  EXPERIENCE[2],
];

export const AWARDS = [
  "Presidential Scholar (4.0 GPA)",
  "Dean's List",
  "AP Scholar Award",
  "National Honor Society",
  "2021 Tennis State Championship",
] as const;

export const INTERESTS = [
  "Tennis",
  "Weightlifting",
  "Running",
  "Basketball",
  "Pickleball",
  "Poker",
  "Investing",
] as const;

export interface Project {
  title: string;
  /** URL segment for the project's detail page, e.g. /projects/overflow */
  slug: string;
  /** Whether this project appears in Selected work on the home page */
  showOnHomepage?: boolean;
  /** Ordering and résumé-specific detail for projects featured on the résumé page */
  resumeOrder?: number;
  resumeTitle?: string;
  resumePeriod?: string;
  resumeStack?: string[];
  resumeBullets?: string[];
  /** One-line summary shown in the projects list */
  summary: string;
  /** Concise 1–2 sentence intro shown at the top of the detail page and on the home page */
  description: string;
  /** Display tags (proper-cased) used on the home page */
  tags: string[];
  /** Lowercase filter tags — domain, AI type, and stack — shown on /projects */
  categories: string[];
  /** ISO date (YYYY-MM-DD) shown on the detail page */
  date?: string;
  status?: "wip";
  link?: string;
  /** Optional override for the live-site link text (defaults to "Live site →") */
  linkLabel?: string;
  github?: string;
  /** Optional override for the GitHub link text (defaults to "View on GitHub →") */
  githubLabel?: string;
  image?: string;
  whatItIs: string;
  whyItMatters?: string;
  inspiration?: string;
  /** Optional: list mapping each screen/feature to the user story number(s) it satisfies */
  userStories?: { feature: string; stories: string }[];
  /** Optional: how you worked — methodology, approach, how doubts were navigated */
  process?: string;
  /** Optional: URL to a demo video (YouTube/Loom/Drive share link) */
  video?: string;
  /** Optional override for the video link text (defaults to "Watch demo video →") */
  videoLabel?: string;
  stack: string[];
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Overflow",
    slug: "overflow",
    showOnHomepage: true,
    date: "2026-08-01",
    summary:
      "Multi-agent RL environment for autonomous vehicle fleet oversight, built on Meta's OpenEnv.",
    categories: ["RL", "multi-agent", "autonomous-vehicles", "python", "openenv"],
    description:
      "An autonomous vehicle fleet oversight environment for OpenEnv — Meta's open framework for RL environments.",
    tags: ["Python", "OpenEnv", "Reinforcement Learning", "Multi-Agent", "LLM Agents"],
    whatItIs:
      "A 2D road grid with N cars. Car 0 is controlled by an LLM agent; the rest follow simple scripted driving rules. An observer detects crashes and near-misses on every step and computes rewards based on safety. The agent chooses among accelerate, brake, lane_change_left, lane_change_right, and maintain, and has to justify its decision in natural language. A hybrid reward combines rule-based safety scoring with LLM reasoning, and Python evaluation tooling benchmarks agent safety across simulated scenarios — reducing the crash/incident rate by 80%.",
    whyItMatters:
      "Most RL agent benchmarks reward task completion. Fleet oversight is the inverse: the agent's job is to not cause incidents while staying useful. Overflow makes that the reward function — what an LLM would actually need to do if it were the supervisor of a Waymo-style fleet rather than the driver.",
    stack: ["Python", "OpenEnv", "LLM Agents"],
  },
  {
    title: "Switch",
    slug: "switch",
    showOnHomepage: true,
    resumeOrder: 2,
    resumeTitle: "Switch: AI Model Routing Platform",
    resumePeriod: "February 2026",
    resumeStack: ["TypeScript", "Next.js", "pgvector", "LangGraph"],
    resumeBullets: [
      "Launched an AI model-router that directs prompts to the best-fit model for each task, serving 1,000+ users",
      "Built and fine-tuned a prompt-routing classifier that split traffic 70/30 between economy and premium models; unified 4 provider APIs behind middleware for consistent streaming, model fallback, and request handling",
      "Engineered Cortex, a persistent memory system using Supabase PostgreSQL and pgvector, enabling low-latency semantic retrieval of user context and conversation history supporting 13K+ daily database requests across LLMs",
    ],
    date: "2026-02-01",
    summary:
      "Multi-model AI chat platform — switch between OpenAI and Anthropic mid-conversation without losing context.",
    categories: ["llm", "nextjs", "typescript", "supabase", "pgvector", "streaming"],
    description:
      "A full-stack multi-model AI platform serving 1,000+ users and 13K+ daily database requests. Switch between models mid-conversation without losing context.",
    tags: ["Next.js", "TypeScript", "Supabase", "pgvector", "OpenAI", "Anthropic"],
    link: "https://theswitchai.com",
    github: "https://github.com/importgabriel/switch",
    image: "/projects/switch.png",
    whatItIs:
      "A chat platform that treats OpenAI and Anthropic as interchangeable behind a single normalized message schema, so a thread can hop between models with full continuity. A custom prompt-routing classifier splits traffic 70/30 between economy and premium models, and Cortex — a persistent memory system on Supabase Postgres with pgvector embeddings — gives every conversation low-latency semantic recall across 13K+ daily database requests.",
    whyItMatters:
      "Every provider has a different API shape, token budget, and streaming protocol, so people end up locked into one model and one context window. Switch removes that fragmentation: pick the best model for each message and keep the conversation intact.",
    inspiration:
      "Constantly copy-pasting the same conversation between ChatGPT and Claude to compare answers, and losing the thread every time.",
    stack: ["Next.js 14", "TypeScript", "Supabase", "pgvector", "OpenAI SDK", "Anthropic SDK", "Tailwind CSS"],
  },
  {
    title: "GT Movies Store",
    slug: "gt-movies-store",
    date: "2026-09-13",
    summary:
      "Full-stack Django movie store with reviews, cart, orders, and an admin panel, built for Georgia Tech's CS 2340.",
    categories: ["django", "python", "sqlite", "bootstrap", "ecommerce"],
    description:
      "A full-stack Django web application for browsing movies, reading and writing reviews, and placing orders, built for Georgia Tech's CS 2340 Objects and Design course.",
    tags: ["Django", "Python", "SQLite", "Bootstrap"],
    link: "https://eshanb.pythonanywhere.com",
    linkLabel: "Live App Link: https://eshanb.pythonanywhere.com",
    github: "https://github.com/eshan-bhimani/moviesstore",
    githubLabel: "GitHub Link: https://github.com/eshan-bhimani/moviesstore",
    video:
      "https://gtvault-my.sharepoint.com/:v:/g/personal/ebhimani3_gatech_edu/IQDe23BSveS-T47FkyueNPj-AXblgN-v-wRYrnvbJB-sXuY?e=zqYlZN&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
    videoLabel: "Movies Store Demo Video →",
    whatItIs:
      "Each screen maps to a user story from the course spec. The home page introduces the store, the movie list and search page lets a user browse the full catalog or search by title, and a movie detail page shows full movie information alongside its reviews. On that page, signed-in users can create, edit, and delete their own reviews, and report reviews that are inappropriate or offensive; a report immediately removes the review from the page. A shopping cart lets a user add movies, view cart contents, and clear the cart entirely before checking out. An accounts flow covers registration and login, and an order history page lists a user's past orders. An administrative panel, restricted to staff, gives full create, read, update, and delete control over users, movies, reviews, and orders. The whole app is deployed on PythonAnywhere with a responsive Bootstrap layout that adapts across screen sizes.",
    userStories: [
      { feature: "Home page", stories: "US 1 — view information about the store" },
      { feature: "Registration and login", stories: "US 2, 3 — register an account, log in" },
      { feature: "Movie list and search", stories: "US 4, 5 — view list of movies, search by title" },
      { feature: "Shopping cart", stories: "US 6, 7, 9 — access cart, add items, remove all items" },
      { feature: "Movie reviews", stories: "US 8, 10, 11, 12 — create, edit, delete, view reviews" },
      { feature: "Movie detail page", stories: "US 13 — view movie details" },
      { feature: "Order history", stories: "US 14 — view list of past orders" },
      { feature: "Cross-browser desktop access", stories: "US 15" },
      { feature: "Responsive layout", stories: "US 16 — Bootstrap-based responsive GUI" },
      { feature: "Admin panel: user management", stories: "US 17" },
      { feature: "Admin panel: movie management", stories: "US 18" },
      { feature: "Admin panel: review management", stories: "US 19" },
      { feature: "Admin panel: order management", stories: "US 20" },
      {
        feature: "Report review feature",
        stories: "US 21 — report inappropriate reviews, removes them from the page",
      },
    ],
    process:
      "I worked through Django 5 for the Impatient chapter by chapter, structuring development in dependency order. I built templates and static files first, then the movie catalog, accounts, reviews, cart, and orders, with deployment last, so each new feature could build on ones that already worked. I documented each session as I went, which made it easier to isolate bugs instead of guessing at fixes across a tangle of half-finished features. Two bugs stood out. Before I'd written any application code, running startapp threw an import error, because Django wasn't installed in the active environment since the virtual environment was deactivated. That was a good early reminder to check the basics before assuming something more complex was wrong. Later, while building the review form, a POST request was hitting a 404, and the URL in the error message was the literal text of a Django template tag rather than a rendered URL, meaning the tag was never being evaluated. Tracing it back to a quoting mismatch in the form's action attribute was a useful lesson in how easily template syntax errors can masquerade as routing problems. I ran into many issues recording through Microsoft Teams. The share screen function would often continuously unshare while I was working, and I reference it a good amount in my video recordings; I will go to office hours to discuss it with Professor. My laptop also crashed frequently due to RAM issues, which I will also discuss with Professor.",
    stack: ["Django", "Python", "SQLite", "Bootstrap", "PythonAnywhere"],
  },
  {
    title: "AutoTenant",
    slug: "autotenant",
    date: "2025-11-01",
    summary:
      "AI-powered property management — listing, tenant screening, leases, and payments in one dashboard.",
    categories: ["llm", "nextjs", "fastapi", "postgresql", "stripe", "proptech"],
    description:
      "An AI-powered property management platform that automates the rental workflow end to end — listing optimization, tenant screening, lease generation, and payment processing.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Stripe", "Zillow API", "Framer Motion"],
    link: "https://autotennant.com",
    github: "https://github.com/eshan-bhimani/autotennant",
    image: "/projects/autotenant.png",
    whatItIs:
      "A single dashboard with separate landlord and tenant portals. When a tenant applies, the backend runs credit, background, income, and employment checks concurrently, normalizes the results into one applicant profile, and produces a 0–100 confidence score. Leases are generated and signed through DocuSign, rent flows through Stripe, and listings sync with Zillow — all with real-time status tracking.",
    whyItMatters:
      "Landlords juggle Zillow for listings, TransUnion for screening, DocuSign for leases, and Stripe for payments, re-entering the same data at every step. AutoTenant collapses that stack into one pipeline so a unit goes from listing to lease in days, not weeks.",
    stack: ["Next.js 14", "FastAPI", "PostgreSQL", "Stripe", "Zillow API", "Framer Motion", "Zustand", "Redis"],
  },
  {
    title: "CollectHub",
    slug: "collecthub",
    date: "2026-01-01",
    summary:
      "Computer-vision pipeline that auto-crops trading card photos and tracks auction prices.",
    categories: ["computer-vision", "python", "opencv", "fastapi", "nextjs", "google-cloud"],
    description:
      "Crop, grade, track, and trade — an entire baseball card collection managed in one place, with PSA-ready auto-cropping and auction intelligence across Fanatics, Goldin, and PWCC.",
    tags: ["Next.js", "FastAPI", "OpenCV", "Python", "Google Cloud"],
    github: "https://github.com/eshan-bhimani/CollectHub",
    image: "/projects/collecthub.png",
    whatItIs:
      "A FastAPI service runs a multi-stage OpenCV pipeline — edge detection, contour filtering, perspective correction, and aspect-ratio validation — to find a card in any photo and store a clean canonical crop. A Next.js front end manages the collection, exports in Vault format, and monitors live auctions to surface pricing across marketplaces.",
    whyItMatters:
      "Cataloguing thousands of cards means hours of manual cropping and orientation fixes on a phone. CollectHub turns that into seconds per card and pairs it with real market data, so the collection is both organized and priced.",
    inspiration:
      "Automating card photo processing at Convention Connection, where the same cropping problem showed up at a scale of 1,000+ images.",
    stack: ["Next.js", "FastAPI", "OpenCV 4.9", "Python 3.11", "Google Cloud", "PostgreSQL"],
  },
  {
    title: "SwiftTrust",
    slug: "swifttrust",
    date: "2025-09-01",
    summary:
      "Escrow marketplace for peer-to-peer deals — state-machine lifecycle, Stripe Connect payouts, shareable trust links.",
    categories: ["marketplace", "nextjs", "typescript", "supabase", "stripe"],
    description:
      "Hold. Verify. Release. SwiftTrust holds funds in escrow until the buyer confirms delivery — built for Discord communities, ticket trades, and P2P software sales.",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript", "Resend"],
    github: "https://github.com/eshan-bhimani/SwiftTrust",
    image: "/projects/swifttrust.png",
    whatItIs:
      "Each deal moves through a deterministic state machine — locked, funded, delivered, released — with Stripe Connect holding the payment until the buyer explicitly confirms receipt or a timeout escalates to dispute. Sellers share a short trust link to start a deal, and both sides get email updates at every transition. A 3% fee applies only on completed deals.",
    whyItMatters:
      "Peer-to-peer digital trades run on trusting a stranger to deliver after you pay. SwiftTrust replaces that with a protocol: both sides trust the state machine, not the person.",
    inspiration:
      "Watching people get scammed in Discord ticket and software trades with no recourse.",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Stripe Connect", "Resend", "nanoid"],
  },
  {
    title: "VesselNav",
    slug: "vesselnav",
    date: "2025-04-01",
    summary:
      "Interactive force-graph explorer of the human vascular system with pathfinding and animated blood flow.",
    categories: ["visualization", "react", "typescript", "d3", "spring-boot", "postgresql"],
    description:
      "A cyber-medical discovery platform for the human vascular system — a physics-based force graph, a ⌘K pathfinder, and animated blood flow along any route.",
    tags: ["React", "TypeScript", "D3.js", "Framer Motion", "Spring Boot", "PostgreSQL"],
    link: "https://vessel-nav-nu.vercel.app",
    github: "https://github.com/eshan-bhimani/vaso-map",
    image: "/projects/vesselnav-v2.png",
    whatItIs:
      "A dark glassmorphism dashboard where vessels are nodes in a D3 force graph with per-type SVG glow filters. A ⌘K command palette lets you pick two vessels and BFS finds the route between them, then a particle system animates blood flow along the path. A Vessel Deep Dive panel covers anatomy, common conditions, connected body systems, and an animated segment preview. The graph is served by Spring Boot from a Flyway-seeded PostgreSQL database.",
    whyItMatters:
      "Anatomy references are static diagrams. Treating the vascular system as a graph makes it explorable — you can ask how blood gets from A to B and watch the answer.",
    stack: ["React 18", "TypeScript", "D3.js v7", "Framer Motion", "Zustand", "Tailwind CSS", "Spring Boot 3", "PostgreSQL 15", "Flyway"],
  },
  {
    title: "Polymarket HFT Bot",
    slug: "polymarket-hft-bot",
    showOnHomepage: true,
    resumeOrder: 1,
    resumeTitle: "Polymarket HFT Bot: Low Latency Systems",
    resumePeriod: "April 2026",
    resumeStack: ["C++23", "Python", "PyTorch", "pybind11", "Goldsky"],
    resumeBullets: [
      "Engineered a high-frequency trading framework in C++ and Python targeting Polymarket BTC 15-minute prediction markets, integrating Polymarket CLOB API and Goldsky for real-time on-chain market data ingestion",
      "Implemented cross-venue arbitrage detection across Polymarket, Kalshi, and Binance using a Log-Normal probability model with a PPO reinforcement learning agent and LSTM actor-critic network built in PyTorch",
      "Bridged C++23 execution engine with Python ML inference via pybind11 for sub-millisecond order routing",
    ],
    date: "2025-12-01",
    summary:
      "C++/Python market-making bot for Polymarket with an LSTM actor-critic trained via recurrent PPO.",
    categories: ["RL", "trading", "cpp", "python", "pytorch"],
    description:
      "A low-latency hybrid C++/Python trading framework for Polymarket BTC 15-minute prediction markets, pairing a C++23 execution engine with a PPO agent through pybind11.",
    tags: ["C++23", "Python", "PyTorch", "Goldsky", "pybind11", "Polymarket CLOB"],
    github: "https://github.com/eshan-bhimani/polymarket-hft-bot",
    whatItIs:
      "The C++ layer ingests Polymarket CLOB and Binance aggTrade WebSocket feeds with sub-millisecond latency, maintaining a thread-safe L2 order book with live micro-price and volatility estimates. A log-normal probability model prices the contracts fairly and flags cross-venue arbitrage across Polymarket, Kalshi, and Binance. The Python layer runs a PPO agent with an LSTM actor-critic that learns entry and exit timing across the 15-minute contract lifecycle, with reward shaping for fees, gas, and inventory risk.",
    whyItMatters:
      "Short-dated prediction markets are thin, fast, and mispriced relative to spot — but exploiting that needs both microsecond execution and a policy that adapts to the contract's lifecycle. Splitting the system across C++ and Python gets both without compromising either.",
    stack: ["C++23", "Python 3.11", "PyTorch", "Gymnasium", "boost::beast", "pybind11", "scipy", "py-clob-client"],
  },
  {
    title: "FolioTrust",
    slug: "foliotrust",
    date: "2025-07-01",
    summary:
      "Two-portal fund management app — allocations, live P&L, withdrawals, and PDF statements with Postgres RLS.",
    categories: ["fintech", "nextjs", "typescript", "supabase"],
    description:
      "A two-portal personal fund management web app — a manager portal for running the fund and investor portals for tracking it.",
    tags: ["Next.js", "TypeScript", "Supabase", "Alpaca API", "Coinbase API", "React-PDF", "Resend"],
    github: "https://github.com/eshan-bhimani/FolioTrust",
    image: "/projects/foliotrust.png",
    whatItIs:
      "Managers add investors, create allocations across stocks, ETFs, and crypto, approve withdrawals, and generate PDF reports. Investors see their holdings and real-time P&L, request withdrawals, and download statements. Prices come from Alpaca and Coinbase, and every row is protected end to end with Postgres Row Level Security.",
    whyItMatters:
      "Running a small fund for friends and family usually means spreadsheets and screenshots. FolioTrust gives each investor a real, permissioned view of their money without the manager building reports by hand.",
    stack: ["Next.js", "TypeScript", "Supabase", "Alpaca API", "Coinbase API", "React-PDF", "Resend"],
  },
  {
    title: "Order Book Simulator",
    slug: "order-book-simulator",
    date: "2025-10-01",
    summary:
      "Real-time limit order book with price-time matching, an OU market simulator, and WebSocket streaming.",
    categories: ["finance", "python", "fastapi", "websockets", "redis"],
    description:
      "A real-time limit order book simulator with a price-time priority matching engine, WebSocket streaming, Redis persistence, and a live web dashboard.",
    tags: ["Python", "FastAPI", "WebSockets", "Redis", "Finance"],
    github: "https://github.com/eshan-bhimani/order-book-simulator",
    whatItIs:
      "A central limit order book built from scratch: price-time priority matching, limit/market/IOC/FOK orders, cancellation and amendment, and self-trade prevention. A synthetic market driven by an Ornstein-Uhlenbeck process and three agent archetypes — market makers, noise traders, momentum traders — generates realistic microstructure. Depth, trade, and order events stream over WebSockets to a dashboard with a depth ladder, trade tape, and manual order entry, with Redis handling persistence and pub/sub.",
    whyItMatters:
      "Exchange matching engines are black boxes. Building one end to end — and a market to feed it — is the clearest way to understand how liquidity, priority, and order types actually interact.",
    stack: ["Python 3.11", "FastAPI", "WebSockets", "Redis", "Pydantic", "asyncio"],
  },
];

export interface WritingItem {
  title: string;
  summary: string;
  date: string;
  categories: string[];
  href: string;
}

export const WRITING_ITEMS: WritingItem[] = [
  {
    title: "GeoGuesser Bench: Benchmarking Vision–Language Agents on Interactive Geolocation",
    summary:
      "A benchmark for evaluating how vision-language agents navigate, reason, and use tools in interactive Google Street View environments.",
    date: "2026-03-20",
    categories: ["agentic-ai", "ai/ml", "research"],
    href: "/research/geoguesser-bench.pdf",
  },
];

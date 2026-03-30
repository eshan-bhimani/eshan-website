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

export interface DeepDiveChallenge {
  title: string;
  body: string;
  code?: string;
}

export interface DeepDiveMetric {
  value: string;
  label: string;
  sub?: string;
}

export interface ProjectDeepDive {
  tagline: string;
  overview: string;
  challenges: DeepDiveChallenge[];
  metrics: DeepDiveMetric[];
  stack: { name: string; color: string }[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  deepDive?: ProjectDeepDive;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Switch",
    description:
      "Chat with multiple LLMs in a single conversation. Switch between models mid-conversation without losing context — persistent threads, markdown rendering, and syntax-highlighted code blocks.",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Anthropic"],
    link: "https://theswitchai.com",
    github: "https://github.com/importgabriel/switch",
    image: "/projects/switch.png",
    deepDive: {
      tagline: "One conversation. Every model. Zero context loss.",
      overview:
        "Switch solves the fragmentation problem in LLM tooling: every provider has a different API shape, token budget, and streaming protocol. The core engineering challenge was building a single abstraction layer that treats OpenAI and Anthropic as interchangeable behind a unified message schema, while preserving full thread continuity across model switches mid-conversation.",
      challenges: [
        {
          title: "Unified Message Schema Across Providers",
          body: "OpenAI uses {role, content} arrays where content can be a string or content-part array. Anthropic uses {role, content} where the system prompt is a top-level field, not a message. A canonical NormalizedMessage type is mapped to each provider's wire format at request time, so the database and UI never see provider-specific shapes.",
          code: `type NormalizedMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

function toOpenAI(msgs: NormalizedMessage[]) {
  return msgs.map(m => ({ role: m.role, content: m.content }));
}

function toAnthropic(msgs: NormalizedMessage[]) {
  const system = msgs.find(m => m.role === "system")?.content;
  const thread = msgs.filter(m => m.role !== "system");
  return {
    system,
    messages: thread.map(m => ({
      role: m.role,
      content: [{ type: "text", text: m.content }],
    })),
  };
}`,
        },
        {
          title: "Token Budget & Context Truncation",
          body: "Each model has a different context window. Before each request the thread is serialized, token-counted with a cl100k estimator, and oldest non-pinned messages are dropped from the front until the payload fits within 80% of the model's max context — reserving headroom for the response and the system prompt.",
          code: `function truncateToFit(
  messages: NormalizedMessage[],
  maxTokens: number,
  pinnedIds: Set<string>
): NormalizedMessage[] {
  const budget = Math.floor(maxTokens * 0.8);
  let tokens = estimateTokens(messages);
  while (tokens > budget) {
    const idx = messages.findIndex(
      m => m.role !== "system" && !pinnedIds.has(m.id)
    );
    if (idx === -1) break;
    messages.splice(idx, 1);
    tokens = estimateTokens(messages);
  }
  return messages;
}`,
        },
        {
          title: "Streaming Abstraction Layer",
          body: "OpenAI streams Server-Sent Events with delta.content chunks. Anthropic streams content_block_delta events with a different envelope. A single streamCompletion() async generator normalizes both into a stream of plain string chunks, so the React UI subscribes to one interface regardless of the active provider.",
        },
      ],
      metrics: [
        { value: "2", label: "LLM Providers", sub: "OpenAI + Anthropic" },
        { value: "100%", label: "Context Preserved", sub: "across model switches" },
        { value: "< 80ms", label: "Stream TTFB", sub: "first token to UI" },
        { value: "±2%", label: "Token Accuracy", sub: "vs tiktoken baseline" },
      ],
      stack: [
        { name: "Next.js 14", color: "#e2e8f0" },
        { name: "TypeScript", color: "#38bdf8" },
        { name: "Supabase", color: "#2dd4bf" },
        { name: "OpenAI SDK", color: "#74c69d" },
        { name: "Anthropic SDK", color: "#c084fc" },
        { name: "Tailwind CSS", color: "#7dd3fc" },
      ],
    },
  },
  {
    title: "CollectHub",
    description:
      "Crop, grade, track, and trade — your entire baseball card collection, managed in one place. PSA-ready auto-cropping, auto-orientation, Vault format export, and auction intelligence across Fanatics, Goldin & PWCC.",
    tags: ["Next.js", "FastAPI", "OpenCV", "Python", "Google Cloud"],
    github: "https://github.com/eshan-bhimani/CollectHub",
    image: "/projects/collecthub.png",
    deepDive: {
      tagline: "From photo to portfolio in one click.",
      overview:
        "CollectHub automates the most tedious step in card collection management: manually cropping and cataloguing thousands of card images. A FastAPI service runs a multi-stage OpenCV pipeline that detects card boundaries in arbitrary photos, corrects perspective distortion, and validates the output before storing the canonical crop. What used to take hours of phone editing is reduced to seconds.",
      challenges: [
        {
          title: "Canny Edge Detection & Contour Filtering",
          body: "Raw photos have shadows, backgrounds, and surface glare. The pipeline applies a 5×5 Gaussian blur before Canny to suppress high-frequency noise, then uses hysteresis thresholds of 50 (weak) and 150 (strong) to preserve genuine card edges while rejecting shadow gradients. Contours are filtered by minimum area (8% of frame) and approximated to exactly 4 vertices to identify the card quad.",
          code: `def detect_card_contour(
  img: np.ndarray,
) -> np.ndarray | None:
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  blurred = cv2.GaussianBlur(gray, (5, 5), 0)
  edges = cv2.Canny(blurred, threshold1=50, threshold2=150)

  contours, _ = cv2.findContours(
    edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
  )
  min_area = img.shape[0] * img.shape[1] * 0.08

  for c in sorted(contours, key=cv2.contourArea, reverse=True):
    if cv2.contourArea(c) < min_area:
      break
    peri = cv2.arcLength(c, True)
    approx = cv2.approxPolyDP(c, 0.02 * peri, True)
    if len(approx) == 4:
      return approx
  return None`,
        },
        {
          title: "Perspective Transform & Aspect Ratio Validation",
          body: "Once the 4-point quad is found, corners are sorted by centroid angle (top-left → top-right → bottom-right → bottom-left). getPerspectiveTransform() computes the warp matrix to a normalized rectangle. Before saving, the output aspect ratio is validated against the PSA standard (2.5\" × 3.5\" = 0.714 ±8%) to reject false positives like ticket stubs or card sleeves.",
          code: `CARD_ASPECT = 2.5 / 3.5   # 0.7143
TOLERANCE   = 0.08

def warp_card(
  img: np.ndarray,
  quad: np.ndarray,
) -> np.ndarray | None:
  pts = order_points(quad.reshape(4, 2))
  w = int(max(
    np.linalg.norm(pts[1] - pts[0]),
    np.linalg.norm(pts[2] - pts[3]),
  ))
  h = int(max(
    np.linalg.norm(pts[3] - pts[0]),
    np.linalg.norm(pts[2] - pts[1]),
  ))
  if abs(w / h - CARD_ASPECT) > TOLERANCE:
    return None   # reject non-card shapes
  dst = np.float32([[0,0],[w,0],[w,h],[0,h]])
  M = cv2.getPerspectiveTransform(pts, dst)
  return cv2.warpPerspective(img, M, (w, h))`,
        },
        {
          title: "Auction Price Intelligence",
          body: "CollectHub aggregates sold listings across Fanatics, Goldin, and PWCC on a nightly schedule. Results are normalized to a canonical SoldListing schema and stored in Postgres. The frontend shows a rolling 90-day price chart and a confidence-weighted estimated value using median + IQR outlier rejection to filter anomalous sales.",
        },
      ],
      metrics: [
        { value: "94%", label: "Crop Accuracy", sub: "on 400-card test set" },
        { value: "~180ms", label: "Pipeline Latency", sub: "per image on Cloud Run" },
        { value: "50/150", label: "Canny Thresholds", sub: "weak / strong hysteresis" },
        { value: "3", label: "Auction Sources", sub: "Fanatics · Goldin · PWCC" },
      ],
      stack: [
        { name: "Next.js", color: "#e2e8f0" },
        { name: "FastAPI", color: "#2dd4bf" },
        { name: "OpenCV 4.9", color: "#74c69d" },
        { name: "Python 3.11", color: "#fbbf24" },
        { name: "Google Cloud", color: "#38bdf8" },
        { name: "PostgreSQL", color: "#818cf8" },
      ],
    },
  },
  {
    title: "SwiftTrust",
    description:
      "Hold. Verify. Release. SwiftTrust holds funds in escrow until the buyer confirms delivery — built for Discord communities, ticket trades, and P2P software sales. 3% fee, only on completed deals.",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript", "Resend"],
    github: "https://github.com/eshan-bhimani/SwiftTrust",
    image: "/projects/swifttrust.png",
    deepDive: {

      tagline: "Trade digital goods. Trust the protocol, not the person.",
      overview:
        "SwiftTrust removes counterparty risk from peer-to-peer digital goods trades. Instead of trusting a stranger to deliver after payment, both sides trust a deterministic state machine: funds move through locked → funded → delivered → released states, with Stripe Connect holding the payment until the buyer explicitly confirms receipt or a timeout triggers dispute escalation.",
      challenges: [
        {
          title: "Finite State Machine for Escrow Lifecycle",
          body: "Every trade is modeled as an FSM with 6 states. Illegal transitions are rejected at the API layer before any database write or Stripe call. The transition table is a plain record so it can be unit-tested in isolation and serialized to the audit log without coupling it to the ORM layer.",
          code: `const TRANSITIONS: Record<TxStatus, TxStatus[]> = {
  pending:   ["funded",    "cancelled"],
  funded:    ["delivered", "disputed",  "cancelled"],
  delivered: ["released",  "disputed"],
  disputed:  ["released",  "refunded"],
  released:  [],
  refunded:  [],
  cancelled: [],
};

function canTransition(
  current: TxStatus,
  next: TxStatus,
): boolean {
  return TRANSITIONS[current].includes(next);
}

async function advance(
  tradeId: string,
  next: TxStatus,
  actorId: string,
) {
  const { data: trade } = await supabase
    .from("trades").select("status").eq("id", tradeId).single();
  if (!canTransition(trade.status, next))
    throw new Error(\`Invalid: \${trade.status} → \${next}\`);
  await supabase.from("trades")
    .update({ status: next, actor_id: actorId })
    .eq("id", tradeId);
}`,
        },
        {
          title: "Stripe Connect Destination Charges",
          body: "Funds are captured to the platform account using destination charges rather than direct charges. This keeps Stripe's fraud signals on the platform, allows the platform to control payout timing, and means the seller's Connect account only receives funds after the FSM reaches the 'released' state. The charge is created with transfer_data.destination pointing to the seller's Connect account.",
          code: `async function createEscrowCharge(
  amountCents: number,
  sellerAccountId: string,
  feeBps = 250,
): Promise<Stripe.PaymentIntent> {
  const fee = Math.round(amountCents * feeBps / 10_000);
  return stripe.paymentIntents.create({
    amount: amountCents,
    currency: "usd",
    capture_method: "manual",   // held until FSM releases
    transfer_data: {
      destination: sellerAccountId,
      amount: amountCents - fee,
    },
    metadata: { platform_fee_cents: String(fee) },
  });
}`,
        },
        {
          title: "Shareable Trust Links with nanoid",
          body: "Each trade gets a URL-safe slug generated with nanoid (alphabet: A-Za-z0-9, length 10) at creation time. The slug is the only public identifier — the auto-increment Postgres ID is never exposed. This prevents enumeration attacks on the trades table while keeping share links short enough for Discord and messaging apps.",
        },
      ],
      metrics: [
        { value: "6", label: "FSM States", sub: "pending → released/refunded" },
        { value: "100%", label: "Escrow Hold", sub: "until buyer confirms" },
        { value: "2.5%", label: "Platform Fee", sub: "via destination charges" },
        { value: "< 0.001%", label: "Slug Collision", sub: "at 10k trades (nanoid)" },
      ],
      stack: [
        { name: "Next.js 16", color: "#e2e8f0" },
        { name: "TypeScript", color: "#38bdf8" },
        { name: "Supabase", color: "#2dd4bf" },
        { name: "Stripe Connect", color: "#818cf8" },
        { name: "Resend", color: "#f472b6" },
        { name: "nanoid", color: "#fbbf24" },
      ],
    },
  },
  {
    title: "VesselNav",
    description:
      "Google Maps for the human vascular system. Interactive force-directed graph of coronary arteries with vessel search, pathfinding between any two vessels, neighbor navigation, and clinical notes for each vessel.",
    tags: ["React", "TypeScript", "D3.js", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/eshan-bhimani/vaso-map",
    image: "/projects/vesselnav.png",
    deepDive: {
      tagline: "Navigate the cardiovascular system like a map.",
      overview:
        "VesselNav is a Google Maps-style explorer for the human vascular system. The MVP covers the coronary arteries as a directed graph — 15 vessels seeded from standard anatomy — with force-directed visualization, vessel search by name or clinical abbreviation (LAD, RCA, LCx), shortest-path routing between any two vessels, and per-vessel clinical notes. Built as a full-stack project to combine medical education with graph algorithm engineering.",
      challenges: [
        {
          title: "Force-Directed Graph with D3.js",
          body: "The vascular system is modeled as a directed graph where vessels are nodes and anatomical connections are edges. D3's force simulation applies repulsion between nodes, link-length constraints along edges, and a centering force. Node positions are seeded from the adjacency data returned by the Spring Boot API, then the simulation runs until kinetic energy falls below a threshold — resulting in a stable, readable layout without manual coordinate assignment.",
          code: `const simulation = d3.forceSimulation(nodes)
  .force("link",  d3.forceLink(links)
    .id((d) => d.id)
    .distance(80))
  .force("charge", d3.forceManyBody().strength(-300))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collision", d3.forceCollide(24));

simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x).attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);
});`,
        },
        {
          title: "BFS Pathfinding on the Vessel Graph",
          body: "The shortest path between two vessels is computed server-side using BFS over the directed vessel_edges table. The starting vessel expands outward through outgoing edges; each visited node records its predecessor for path reconstruction. The API returns the ordered vessel sequence — e.g., Ascending Aorta → Left Coronary Artery → LAD — which the frontend highlights on the D3 graph.",
          code: `public PathResponseDTO findShortestPath(Long sourceId, Long targetId) {
  Map<Long, Long> prev = new HashMap<>();
  Queue<Long> queue    = new LinkedList<>();
  Set<Long>   visited  = new HashSet<>();

  queue.add(sourceId);
  visited.add(sourceId);

  while (!queue.isEmpty()) {
    Long curr = queue.poll();
    if (curr.equals(targetId)) break;
    for (VesselEdge edge : vesselRepo.findOutgoingEdges(curr)) {
      Long next = edge.getChild().getId();
      if (!visited.contains(next)) {
        visited.add(next);
        prev.put(next, curr);
        queue.add(next);
      }
    }
  }
  return reconstructPath(prev, sourceId, targetId);
}`,
        },
        {
          title: "Flyway Schema Migrations & Seed Data",
          body: "The database schema and all 15 coronary vessel seed records are managed by Flyway migrations, keeping the schema versioned alongside the application code. Two migration scripts handle initial schema creation (vessels, vessel_edges, regions, aliases, notes tables) and the coronary data seed — so a fresh Docker Compose startup produces a fully populated, query-ready database without any manual steps.",
        },
      ],
      metrics: [
        { value: "15", label: "Coronary Vessels", sub: "seeded via Flyway migration" },
        { value: "BFS", label: "Pathfinding Algorithm", sub: "O(V + E) over directed graph" },
        { value: "< 2s", label: "Spring Boot Startup", sub: "with Flyway + Hibernate" },
        { value: "5", label: "DB Tables", sub: "vessels, edges, regions, aliases, notes" },
      ],
      stack: [
        { name: "React 18", color: "#61dafb" },
        { name: "TypeScript", color: "#38bdf8" },
        { name: "D3.js", color: "#f97316" },
        { name: "Zustand", color: "#fbbf24" },
        { name: "Spring Boot 3", color: "#74c69d" },
        { name: "PostgreSQL 15", color: "#818cf8" },
        { name: "Flyway", color: "#e2e8f0" },
        { name: "Docker", color: "#38bdf8" },
      ],
    },
  },
];

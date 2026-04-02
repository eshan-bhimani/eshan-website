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
      "A Cyber-Medical discovery platform for the human vascular system. Dark glassmorphism dashboard with a physics-based force graph, ⌘K command palette pathfinder, particle flow simulation, and a Vessel Deep Dive panel with conditions, connected systems, and an animated 3D-style segment preview.",
    tags: ["React", "TypeScript", "D3.js", "Framer Motion", "Spring Boot", "PostgreSQL"],
    link: "https://vessel-nav-nu.vercel.app",
    github: "https://github.com/eshan-bhimani/vaso-map",
    image: "/projects/vesselnav-v2.png",
    deepDive: {
      tagline: "Explore the cardiovascular system. Visualize blood flow in real time.",
      overview:
        "VesselNav is a premium Cyber-Medical discovery platform for the human vascular system. Beyond the core graph and pathfinding, the UI was overhauled into a full dark glassmorphism dashboard: per-vessel-type SVG glow filters, a RAF-driven particle system that animates blood flow along any found path, a ⌘K command palette for search-to-select pathfinding, and a four-tab Vessel Deep Dive panel covering anatomy, common conditions, connected body systems, and an animated Canvas 2D vessel segment. Built full-stack with Spring Boot + Flyway-seeded PostgreSQL and a React/D3 frontend.",
      challenges: [
        {
          title: "SVG Glow Filters & Physics Force Graph",
          body: "Each vessel type (artery, vein, capillary) has a dedicated SVG feGaussianBlur + feMerge filter applied to both its glow halo and solid core circle. Node physics were tuned to charge −380, link distance 110, and collision radius 26 for organic spacing. Path-highlighted edges get the CSS dash-flow animation and cyan glow; normal edges stay at 12% white opacity to reduce visual noise.",
          code: `const createGlow = (id: string, color: string) => {
  const f = defs.append("filter").attr("id", id)
    .attr("x", "-50%").attr("y", "-50%")
    .attr("width", "200%").attr("height", "200%");
  f.append("feGaussianBlur")
    .attr("in", "colorized").attr("stdDeviation", "5")
    .attr("result", "blurred");
  const merge = f.append("feMerge");
  merge.append("feMergeNode").attr("in", "blurred");
  merge.append("feMergeNode").attr("in", "SourceGraphic");
};

createGlow("glow-artery",    "#e11d48");
createGlow("glow-vein",      "#2563eb");
createGlow("glow-capillary", "#7c3aed");`,
        },
        {
          title: "RAF Particle Flow Along Path Edges",
          body: "When 'Simulate Flow' is toggled, a requestAnimationFrame loop animates D3-managed circle elements along each highlighted edge. Node positions are cached in a Map<id, {x,y}> on every simulation tick. Each frame, particle t-position is computed as (phase + phaseOffset) % 1 and linearly interpolated between source and target coordinates — giving a smooth, continuous blood-flow effect without any WebGL.",
          code: `// Store positions on each D3 tick
simulation.on("tick", () => {
  nodes.forEach(n => {
    if (n.x !== undefined)
      nodePositionsRef.current.set(n.id, { x: n.x!, y: n.y! });
  });
});

// RAF loop updates particle positions
const animate = () => {
  phase = (phase + 0.006) % 1;
  g.selectAll(".flow-particle")
    .attr("cx", (d) => {
      const src = nodePositionsRef.current.get(pathHighlight[d.edgeIdx]);
      const tgt = nodePositionsRef.current.get(pathHighlight[d.edgeIdx + 1]);
      const t = (phase + d.phaseOffset) % 1;
      return src!.x + (tgt!.x - src!.x) * t;
    });
  rafRef.current = requestAnimationFrame(animate);
};`,
        },
        {
          title: "BFS Pathfinding & Flyway-Seeded Graph",
          body: "Shortest-path routing is computed server-side via BFS over the directed vessel_edges table in Spring Boot. The full schema and all 15 coronary vessel records are managed by two Flyway migrations — so a fresh Docker Compose startup produces a fully populated, query-ready database. The API returns the ordered vessel sequence which the frontend highlights and animates.",
        },
      ],
      metrics: [
        { value: "15", label: "Coronary Vessels", sub: "seeded via Flyway" },
        { value: "3×", label: "Particles per Edge", sub: "staggered phase offsets" },
        { value: "4", label: "Deep Dive Tabs", sub: "overview · 3D · conditions · systems" },
        { value: "BFS", label: "Pathfinding", sub: "O(V + E) server-side" },
      ],
      stack: [
        { name: "React 18", color: "#61dafb" },
        { name: "TypeScript", color: "#38bdf8" },
        { name: "D3.js v7", color: "#f97316" },
        { name: "Framer Motion", color: "#a78bfa" },
        { name: "Zustand", color: "#fbbf24" },
        { name: "Tailwind CSS", color: "#7dd3fc" },
        { name: "Spring Boot 3", color: "#74c69d" },
        { name: "PostgreSQL 15", color: "#818cf8" },
        { name: "Flyway", color: "#e2e8f0" },
      ],
    },
  },
  {
    title: "Polymarket Trading Bot",
    description:
      "A hybrid Python/C++ high-frequency trading framework for Polymarket BTC 15-minute prediction markets. Identifies cross-venue arbitrage between Polymarket, Kalshi, and Binance using a Log-Normal probability model, and executes trades via a PPO reinforcement learning agent with an LSTM actor-critic network.",
    tags: ["Python", "C++20", "PyTorch", "Gymnasium", "boost::beast", "pybind11"],
    github: "https://github.com/eshan-bhimani/polymarket-hft-bot",
    deepDive: {
      tagline: "Quantitative trading meets reinforcement learning on prediction markets.",
      overview:
        "A production-grade framework that fuses a C++20 execution engine with a Python RL loop. The C++ layer handles sub-millisecond WebSocket ingestion from Polymarket's CLOB and Binance aggTrade feeds, maintaining a thread-safe L2 order book with real-time micro-price and volatility estimation. The Python layer runs a PPO agent with LSTM actor-critic architecture that learns optimal entry/exit timing across the 15-minute contract lifecycle, with reward shaping that accounts for fees, gas costs, and inventory risk.",
      challenges: [
        {
          title: "Log-Normal Fair Pricing & Bregman Divergence",
          body: "The probability engine computes the theoretical fair price of a 'BTC > $X' binary contract using P(S_T > K) = Phi([ln(S0/K) + (mu - 0.5*sigma^2)*T] / (sigma*sqrt(T))). Realized volatility is estimated from a 60-second rolling window of Binance ticks. The Bregman (KL) divergence between this model price and the market price feeds directly into the RL observation space, giving the agent a continuous signal for mispricing.",
          code: `def fair_price(self, strike, time_to_expiry_sec=None):
    s0, sigma = self.spot(), self.realised_vol()
    T = (time_to_expiry_sec or self.contract_sec) / (365.25 * 86400)
    d = (math.log(s0 / strike) + (self.mu - 0.5 * sigma**2) * T) / (sigma * math.sqrt(T))
    return float(norm.cdf(d))`,
        },
        {
          title: "LSTM Actor-Critic with Recurrent PPO",
          body: "Standard PPO loses temporal context across the 15-minute window. The LSTM trunk preserves hidden state across rollout steps, and a dual-mode forward pass enables single-step inference during trading and full-sequence evaluation during PPO updates. Per-timestep logits and values are computed in sequence_mode for correct advantage estimation.",
          code: `if sequence_mode:
    features = lstm_out.squeeze(0)     # (seq_len, hidden)
    logits = self.actor(features)      # (seq_len, n_actions)
    values = self.critic(features).squeeze(-1)
    dist = Categorical(logits=logits)
else:
    last = lstm_out[:, -1, :]          # (batch, hidden)
    logits = self.actor(last)
    value = self.critic(last).squeeze(-1)
    dist = Categorical(logits=logits)`,
        },
        {
          title: "C++/Python Bridge via pybind11",
          body: "The C++ execution engine runs WebSocket feeds on dedicated threads with boost::beast, using shared_mutex for lock-free reads on the order book. pybind11 exposes the engine to Python with GIL-released blocking calls, so the RL loop on the main thread can query micro-prices and volatility at native speed without serialization overhead.",
        },
      ],
      metrics: [
        { value: "< 1ms", label: "Tick-to-Signal", sub: "C++ micro-price latency" },
        { value: "3", label: "Venue Arbitrage", sub: "Polymarket + Kalshi + Binance" },
        { value: "8-dim", label: "State Space", sub: "prob, divergence, OB, gas, time, pos, PnL, spread" },
        { value: "PPO", label: "RL Algorithm", sub: "LSTM actor-critic (128 hidden)" },
      ],
      stack: [
        { name: "Python 3.11", color: "#fbbf24" },
        { name: "C++20", color: "#38bdf8" },
        { name: "PyTorch", color: "#f97316" },
        { name: "Gymnasium", color: "#a78bfa" },
        { name: "boost::beast", color: "#74c69d" },
        { name: "pybind11", color: "#e2e8f0" },
        { name: "scipy", color: "#818cf8" },
        { name: "py-clob-client", color: "#2dd4bf" },
      ],
    },
  },
  {
    title: "Order Book Simulator",
    description:
      "Real-time limit order book simulator with a price-time priority matching engine, WebSocket streaming, Redis persistence, and a live web dashboard.",
    tags: ["Python", "FastAPI", "WebSockets", "Redis", "Finance"],
    github: "https://github.com/eshan-bhimani/order-book-simulator",
    deepDive: {
      tagline: "A full-stack CLOB matching engine with synthetic market data",
      overview:
        "Built a production-style central limit order book (CLOB) from scratch — featuring price-time priority matching, limit/market/IOC/FOK orders, order cancellation and amendment, self-trade prevention, and a synthetic market simulator driven by an Ornstein-Uhlenbeck mean-reverting price process. The system streams real-time depth, trade, and order events over WebSockets to a live dark-themed dashboard with a depth ladder, trade tape, and manual order entry. Redis provides persistence for orders, trade logs, OHLCV candle aggregation, and pub/sub event broadcast.",
      challenges: [
        {
          title: "Price-Time Priority Matching Engine",
          body: "Implemented a CLOB that matches incoming orders against resting liquidity using strict price-time priority. Each price level maintains a FIFO queue, and the engine sweeps through levels to fill aggressive orders — handling partial fills, IOC/FOK semantics, and self-trade prevention via trader ID checks. Thread-safe with reader-writer locking to support concurrent simulator and manual order submission.",
        },
        {
          title: "Ornstein-Uhlenbeck Market Simulator",
          body: "Designed a synthetic market data generator using a mean-reverting OU stochastic process with Poisson-distributed order arrivals. Three agent archetypes — market makers (tight spread quoting), noise traders (random aggression), and momentum traders (trend-following) — create realistic microstructure dynamics with configurable volatility, speed, and order rate.",
        },
        {
          title: "Real-Time WebSocket Streaming Architecture",
          body: "Engineered an event-driven architecture where book mutations trigger callbacks that broadcast depth snapshots, trade fills, and order status updates to all connected WebSocket clients simultaneously. The FastAPI server supports both REST API for CRUD operations and WebSocket for live streaming, with Redis pub/sub enabling horizontal scaling across server instances.",
        },
      ],
      metrics: [
        { value: "~1ms", label: "Order Matching", sub: "single order latency" },
        { value: "3", label: "Agent Types", sub: "MM / noise / momentum" },
        { value: "5", label: "Order Types", sub: "limit / market / IOC / FOK / cancel" },
        { value: "Real-Time", label: "Dashboard", sub: "depth ladder + trade tape" },
      ],
      stack: [
        { name: "Python 3.11", color: "#fbbf24" },
        { name: "FastAPI", color: "#22d3ee" },
        { name: "WebSockets", color: "#a78bfa" },
        { name: "Redis", color: "#ef4444" },
        { name: "Pydantic", color: "#38bdf8" },
        { name: "asyncio", color: "#74c69d" },
      ],
    },
  },
];

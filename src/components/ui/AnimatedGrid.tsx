"use client";

export default function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* ── Radial sci-fi grid (celestial navigation map) ── */}
      <svg
        className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        {/* Concentric rings */}
        {[120, 220, 340, 480, 600].map((r) => (
          <circle
            key={r}
            cx="600"
            cy="600"
            r={r}
            stroke="rgba(56,189,248,0.6)"
            strokeWidth="0.5"
          />
        ))}
        {/* Radial lines — every 30° */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x2 = 600 + 600 * Math.cos(angle);
          const y2 = 600 + 600 * Math.sin(angle);
          return (
            <line
              key={i}
              x1="600"
              y1="600"
              x2={x2}
              y2={y2}
              stroke="rgba(56,189,248,0.4)"
              strokeWidth="0.5"
            />
          );
        })}
        {/* Small crosshair at center */}
        <circle
          cx="600"
          cy="600"
          r="3"
          fill="none"
          stroke="rgba(45,212,191,0.5)"
          strokeWidth="0.5"
        />
      </svg>

      {/* ── Vertical aurora streaks ── */}
      {/* Streak 1 — left of center, teal */}
      <div
        className="absolute animate-pulse"
        style={{
          left: "22%",
          top: "-5%",
          width: "1.5px",
          height: "110%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(45,212,191,0.06) 20%, rgba(45,212,191,0.12) 45%, rgba(56,189,248,0.06) 70%, transparent 100%)",
          filter: "blur(3px)",
          animationDuration: "8s",
        }}
      />

      {/* Streak 2 — right of center, cyan */}
      <div
        className="absolute animate-pulse"
        style={{
          left: "68%",
          top: "-5%",
          width: "2px",
          height: "110%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(56,189,248,0.05) 15%, rgba(56,189,248,0.10) 40%, rgba(45,212,191,0.05) 65%, transparent 100%)",
          filter: "blur(4px)",
          animationDuration: "11s",
        }}
      />

      {/* Streak 3 — far left, very faint */}
      <div
        className="absolute animate-pulse"
        style={{
          left: "8%",
          top: "-5%",
          width: "1px",
          height: "110%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(45,212,191,0.04) 30%, rgba(56,189,248,0.07) 55%, transparent 100%)",
          filter: "blur(2px)",
          animationDuration: "14s",
        }}
      />

      {/* Streak 4 — far right, very faint */}
      <div
        className="absolute animate-pulse"
        style={{
          left: "85%",
          top: "-5%",
          width: "1px",
          height: "110%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(56,189,248,0.03) 25%, rgba(45,212,191,0.06) 50%, transparent 100%)",
          filter: "blur(2px)",
          animationDuration: "12s",
        }}
      />

      {/* Streak 5 — center-left, wider diffuse glow */}
      <div
        className="absolute animate-pulse"
        style={{
          left: "38%",
          top: "-5%",
          width: "3px",
          height: "110%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(45,212,191,0.03) 20%, rgba(56,189,248,0.06) 50%, rgba(45,212,191,0.03) 80%, transparent 100%)",
          filter: "blur(8px)",
          animationDuration: "10s",
        }}
      />

      {/* Streak 6 — center-right, wider diffuse glow */}
      <div
        className="absolute animate-pulse"
        style={{
          left: "55%",
          top: "-5%",
          width: "2px",
          height: "110%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(56,189,248,0.04) 25%, rgba(45,212,191,0.08) 50%, rgba(56,189,248,0.03) 75%, transparent 100%)",
          filter: "blur(6px)",
          animationDuration: "13s",
        }}
      />

      {/* ── Subtle top vignette (ambient atmosphere) ── */}
      <div
        className="absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.03) 0%, transparent 70%)",
        }}
      />

      {/* ── Noise grain texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}

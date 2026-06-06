"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function AnimatedGrid() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const ringColor = isLight ? "rgba(148,163,184,0.35)" : "rgba(56,189,248,0.6)";
  const lineColor = isLight ? "rgba(148,163,184,0.25)" : "rgba(56,189,248,0.4)";
  const crosshairColor = isLight ? "rgba(124,58,237,0.3)" : "rgba(167,139,250,0.5)";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* ── Radial sci-fi grid — shifted left to center on text column ── */}
      <svg
        className="absolute top-[30%] -translate-y-1/2"
        style={{ left: "25%", transform: "translateX(-50%) translateY(-50%)" }}
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        {[120, 220, 340, 480, 600].map((r) => (
          <circle key={r} cx="600" cy="600" r={r} stroke={ringColor} strokeWidth="0.5" />
        ))}
        {([
          [1200, 600],
          [1119.6152422706632, 900],
          [900, 1119.6152422706632],
          [600, 1200],
          [300.00000000000006, 1119.6152422706632],
          [80.38475772933691, 900.0000000000001],
          [0, 600.0000000000001],
          [80.38475772933674, 300.00000000000006],
          [299.9999999999999, 80.38475772933691],
          [599.9999999999998, 0],
          [900, 80.38475772933674],
          [1119.615242270663, 299.9999999999999],
        ] as const).map(([x2, y2], i) => (
          <line key={i} x1="600" y1="600" x2={x2} y2={y2} stroke={lineColor} strokeWidth="0.5" />
        ))}
        <circle cx="600" cy="600" r="3" fill="none" stroke={crosshairColor} strokeWidth="0.5" />
      </svg>

      {/* ── Vertical aurora streaks — purple tones ── */}
      <div
        className="absolute animate-pulse"
        style={{
          left: "15%",
          top: "-5%",
          width: "1.5px",
          height: "110%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(167,139,250,0.06) 20%, rgba(139,92,246,0.12) 45%, rgba(56,189,248,0.06) 70%, transparent 100%)",
          filter: "blur(3px)",
          animationDuration: "8s",
        }}
      />
      <div
        className="absolute animate-pulse"
        style={{
          left: "48%",
          top: "-5%",
          width: "2px",
          height: "110%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(56,189,248,0.05) 15%, rgba(167,139,250,0.10) 40%, rgba(56,189,248,0.05) 65%, transparent 100%)",
          filter: "blur(4px)",
          animationDuration: "11s",
        }}
      />
      <div
        className="absolute animate-pulse"
        style={{
          left: "5%",
          top: "-5%",
          width: "1px",
          height: "110%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.04) 30%, rgba(56,189,248,0.07) 55%, transparent 100%)",
          filter: "blur(2px)",
          animationDuration: "14s",
        }}
      />
      <div
        className="absolute animate-pulse"
        style={{
          left: "55%",
          top: "-5%",
          width: "1px",
          height: "110%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(56,189,248,0.03) 25%, rgba(167,139,250,0.06) 50%, transparent 100%)",
          filter: "blur(2px)",
          animationDuration: "12s",
        }}
      />
      <div
        className="absolute animate-pulse"
        style={{
          left: "30%",
          top: "-5%",
          width: "3px",
          height: "110%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.03) 20%, rgba(56,189,248,0.06) 50%, rgba(167,139,250,0.03) 80%, transparent 100%)",
          filter: "blur(8px)",
          animationDuration: "10s",
        }}
      />

      {/* ── Subtle top vignette ── */}
      <div
        className="absolute inset-x-0 top-0 h-[500px]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 35% 0%, rgba(56,189,248,0.03) 0%, transparent 70%)",
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

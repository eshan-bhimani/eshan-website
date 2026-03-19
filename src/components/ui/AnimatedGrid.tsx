"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Ambient teal/cyan glow — left edge */}
      <motion.div
        animate={{
          opacity: [0.18, 0.3, 0.18],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[350px] top-[10%] h-[800px] w-[600px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(45,212,191,0.15) 0%, rgba(56,189,248,0.08) 50%, transparent 80%)",
        }}
      />

      {/* Ambient cyan glow — right edge */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -right-[350px] top-[30%] h-[800px] w-[600px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, rgba(45,212,191,0.06) 50%, transparent 80%)",
        }}
      />

      {/* Subtle top-center accent wash */}
      <motion.div
        animate={{
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-[200px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.10) 0%, rgba(45,212,191,0.05) 60%, transparent 90%)",
        }}
      />

      {/* Bottom ambient glow */}
      <motion.div
        animate={{
          opacity: [0.06, 0.12, 0.06],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute -bottom-[250px] left-1/2 -translate-x-1/2 h-[500px] w-[1000px] rounded-full blur-[200px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(45,212,191,0.08) 0%, rgba(56,189,248,0.04) 60%, transparent 90%)",
        }}
      />

      {/* Noise grain texture — more visible for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}

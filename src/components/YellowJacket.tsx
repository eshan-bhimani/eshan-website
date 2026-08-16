/**
 * A stylized yellow jacket in Georgia Tech's palette — an original mark drawn
 * for this site rather than the licensed Buzz athletic logo.
 */
export default function YellowJacket({
  size = 30,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Georgia Tech yellow jacket"
      className={className}
    >
      {/* Wings */}
      <ellipse
        cx="21"
        cy="22"
        rx="12"
        ry="7"
        transform="rotate(-32 21 22)"
        fill="#9ecfe8"
        fillOpacity="0.75"
        stroke="#003057"
        strokeWidth="1.6"
      />
      <ellipse
        cx="43"
        cy="22"
        rx="12"
        ry="7"
        transform="rotate(32 43 22)"
        fill="#9ecfe8"
        fillOpacity="0.75"
        stroke="#003057"
        strokeWidth="1.6"
      />

      {/* Antennae */}
      <path
        d="M28 18 C25 11, 21 8, 18 7"
        stroke="#003057"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 18 C39 11, 43 8, 46 7"
        stroke="#003057"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="6.5" r="2.6" fill="#B3A369" stroke="#003057" strokeWidth="1.4" />
      <circle cx="46.5" cy="6.5" r="2.6" fill="#B3A369" stroke="#003057" strokeWidth="1.4" />

      {/* Body */}
      <path
        d="M32 15 C41 15, 46 22, 46 33 C46 47, 39 58, 32 58 C25 58, 18 47, 18 33 C18 22, 23 15, 32 15 Z"
        fill="#B3A369"
        stroke="#003057"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Stripes */}
      <path d="M19.4 28 H44.6" stroke="#003057" strokeWidth="4.4" strokeLinecap="round" />
      <path d="M20.6 38 H43.4" stroke="#003057" strokeWidth="4.4" strokeLinecap="round" />
      <path d="M24.6 48 H39.4" stroke="#003057" strokeWidth="4.4" strokeLinecap="round" />

      {/* Head */}
      <circle cx="32" cy="16" r="8" fill="#003057" />
      <circle cx="28.8" cy="14.6" r="1.9" fill="#B3A369" />
      <circle cx="35.2" cy="14.6" r="1.9" fill="#B3A369" />
    </svg>
  );
}

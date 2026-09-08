export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crochet stylisé avec fil */}
      <g transform="translate(5, 5)">
        {/* Tête du crochet avec courbe élégante */}
        <path
          d="M12 2 C 18 2, 22 6, 22 12 C 22 18, 18 22, 12 22 C 6 22, 2 18, 2 12 C 2 8, 4 5, 7 3"
          fill="none"
          stroke="#d4a5a5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Manche du crochet */}
        <path
          d="M12 22 L 12 35"
          stroke="#d4a5a5"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Pointe du crochet avec courbe */}
        <path
          d="M12 35 Q 15 38, 18 40"
          stroke="#d4a5a5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Fil de laine stylisé avec boucles */}
        <path
          d="M22 12 Q 30 16, 28 24 Q 26 32, 32 36"
          fill="none"
          stroke="#c5d4c5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Petite boucle de fil */}
        <circle
          cx="32"
          cy="36"
          r="2"
          fill="#c5d4c5"
        />
      </g>

      {/* Texte "Human Hands" avec typographie élégante */}
      <text
        x="45"
        y="32"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="400"
        fill="#2d2d2d"
        letterSpacing="1"
        fontStyle="italic"
      >
        Human
      </text>
      <text
        x="45"
        y="46"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="400"
        fill="#d4a5a5"
        letterSpacing="1"
        fontStyle="italic"
      >
        Hands
      </text>
    </svg>
  );
}

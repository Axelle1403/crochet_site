export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 400 120"
        className="w-64 h-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#e91e63',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#ff4081',stopOpacity:1}} />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.2"/>
          </filter>
        </defs>
        <text
          x="200"
          y="70"
          fontFamily="Arial, sans-serif"
          fontSize="64"
          fontWeight="bold"
          fill="#0d0d0d"
          textAnchor="middle"
          letterSpacing="4"
          filter="url(#shadow)"
        >
          Les <tspan fill="url(#logoGradient)">2H</tspan>
        </text>
      </svg>
      <svg
        viewBox="0 0 400 30"
        className="w-64 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="200"
          y="22"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="500"
          fill="#4a4a4a"
          textAnchor="middle"
          letterSpacing="3"
        >
          L'AUTHENTICITÉ AU BOUT DES DOIGTS
        </text>
      </svg>
    </div>
  );
}

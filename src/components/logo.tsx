export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 200 60"
        className="w-48 h-14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="100"
          y="35"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="#1a1a1a"
          textAnchor="middle"
          letterSpacing="2"
        >
          Les <tspan fill="#c41e3a">2H</tspan>
        </text>
      </svg>
      <svg
        viewBox="0 0 200 20"
        className="w-48 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="100"
          y="15"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fontWeight="normal"
          fill="#6b6b6b"
          textAnchor="middle"
          letterSpacing="1"
        >
          Humans Hand's
        </text>
      </svg>
    </div>
  );
}

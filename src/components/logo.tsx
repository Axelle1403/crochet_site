export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src="/logo.jpeg"
        alt="HUMAN HANDS - L'authenticité au bout des doigts"
        className="w-auto h-full"
      />
    </div>
  );
}

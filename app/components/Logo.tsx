export function VMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M6 6c3 2 6 9 9 17s6 13 7 15c1-4 3-13 7-22 2-5 4-8 7-10" />
      <path d="M4 10c4 0 8 3 11 8" />
      <path d="M28 4l1.5 3 3 1.5-3 1.5L28 13l-1.5-3-3-1.5 3-1.5z" strokeWidth="0.9" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <VMark className="h-[30px] w-[28px]" />
      <span className="text-[17px] font-normal tracking-[0.04em]">VELINA</span>
    </div>
  );
}

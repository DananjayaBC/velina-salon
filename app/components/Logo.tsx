export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/salon-apsa-logo.jpg"
      alt="Salon Apsa"
      width={640}
      height={640}
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-[52px] w-[52px]" />
      <span className="text-[17px] font-normal tracking-[0.04em]">SALON APSA</span>
    </div>
  );
}

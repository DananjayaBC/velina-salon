import Headline from "./Headline";

const ArrowUpRight = () => (
  <svg viewBox="0 0 10 10" className="h-[8px] w-[8px]" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M2 8L8 2M3 2h5v5" />
  </svg>
);

export default function Cta() {
  return (
    <section className="relative h-screen min-h-[480px] w-full overflow-hidden text-white">
      <img
        src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1600&q=80"
        alt="Two black salon chairs under arched mirrors"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/50" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-[22px] lg:px-[1.72vw] text-center lg:top-[32%] lg:translate-y-0 lg:px-0">
        <Headline
          as="h2"
          text="{R}ESERVE YO{U}R|MOMEN{T} OF BEAUTY|& R{E}LAXATION"
          className="text-3xl sm:text-5xl lg:text-[clamp(60px,5.3vw,128px)] lg:leading-[1.09] lg:whitespace-nowrap"
        />
        <div className="mt-[40px] flex flex-col items-center justify-center gap-[20px] sm:flex-row sm:gap-[46px] lg:mt-[5.2vw]">
          <a href="#" className="tiny-link flex items-center gap-1">
            Book a appointment <ArrowUpRight />
          </a>
          <a href="#" className="tiny-link flex items-center gap-1">
            Contact our team <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

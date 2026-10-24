import Headline from "./Headline";

const Arrow = ({ dir }: { dir: "l" | "r" }) => (
  <svg viewBox="0 0 16 10" className="h-[12px] w-[19px] md:h-[10px] md:w-[16px]" fill="none" stroke="currentColor" strokeWidth="1">
    {dir === "l" ? <path d="M15 5H1M5 1L1 5l4 4" /> : <path d="M1 5h14M11 1l4 4-4 4" />}
  </svg>
);

export default function Transformations() {
  return (
    <section className="flex w-full flex-col justify-center px-[22px] py-[40px] md:min-h-screen md:py-[5vh] lg:px-[1.72vw]">
      <div className="relative h-[520px] w-full border border-ink/60 sm:h-[600px] md:h-[90vh]">
        <p className="tiny absolute left-0 right-0 top-[36px] text-center md:top-[8%]">Real transformations</p>

        <button
          aria-label="Previous"
          className="absolute left-[20px] top-[30px] sm:top-1/2 sm:-translate-y-1/2 md:left-[1.5vw] md:top-[49%] md:translate-y-0"
        >
          <Arrow dir="l" />
        </button>
        <button
          aria-label="Next"
          className="absolute right-[20px] top-[30px] sm:top-1/2 sm:-translate-y-1/2 md:right-[1.5vw] md:top-[49%] md:translate-y-0"
        >
          <Arrow dir="r" />
        </button>

        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80"
          alt="Woman holding a white flower"
          className="absolute left-1/2 top-[90px] aspect-[378/412] w-[64%] max-w-[378px] -translate-x-1/2 object-cover sm:top-[110px] sm:w-[50%] md:top-[19%] md:h-[61%] md:w-auto md:max-w-none"
        />

        <Headline
          text="{Y}OU CAN SEE {&} FEEL"
          className="absolute left-0 right-0 top-[236px] text-center text-[clamp(24px,7vw,48px)] whitespace-nowrap sm:top-[274px] sm:text-5xl md:top-[44%] md:text-[min(5.8vw,8vh)] md:leading-[1.15] [&_.swash]:text-accent"
        />

        <div className="absolute inset-x-[20px] bottom-[28px] grid grid-cols-2 gap-x-[16px] md:inset-x-auto md:left-[33.5%] md:bottom-[7.5%] md:grid-cols-[23.8vw_1fr] md:gap-x-0">
          <div className="tiny">
            95%
            <br />
            Client satisfaction rate
          </div>
          <div className="tiny">
            5K+
            <br />
            Transformations completed
          </div>
        </div>
      </div>
    </section>
  );
}

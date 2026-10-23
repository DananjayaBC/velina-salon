import Headline from "./Headline";

const Arrow = ({ dir }: { dir: "l" | "r" }) => (
  <svg viewBox="0 0 16 10" className="h-[10px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1">
    {dir === "l" ? <path d="M15 5H1M5 1L1 5l4 4" /> : <path d="M1 5h14M11 1l4 4-4 4" />}
  </svg>
);

export default function Transformations() {
  return (
    <section className="px-[22px] pb-[110px] lg:pb-[180px]">
      <div className="relative h-[520px] border border-ink/60 sm:h-[600px] lg:h-[672px]">
        <p className="tiny absolute left-0 right-0 top-[36px] text-center lg:top-[56px]">Real transformations</p>

        <button
          aria-label="Previous"
          className="absolute left-[20px] top-[30px] sm:top-1/2 sm:-translate-y-1/2 lg:top-[328px] lg:translate-y-0"
        >
          <Arrow dir="l" />
        </button>
        <button
          aria-label="Next"
          className="absolute right-[20px] top-[30px] sm:top-1/2 sm:-translate-y-1/2 lg:top-[328px] lg:translate-y-0"
        >
          <Arrow dir="r" />
        </button>

        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80"
          alt="Woman holding a white flower"
          className="absolute left-1/2 top-[90px] aspect-[378/412] w-[64%] max-w-[378px] -translate-x-1/2 object-cover sm:top-[110px] sm:w-[50%] lg:top-[130px] lg:aspect-auto lg:h-[412px] lg:w-[378px]"
        />

        <Headline
          text="{Y}OU CAN SEE {&} FEEL"
          className="absolute left-0 right-0 top-[236px] text-center text-[24px] whitespace-nowrap sm:top-[274px] sm:text-5xl lg:top-[296px] lg:text-[68px] lg:leading-[80px] [&_.swash]:text-accent"
        />

        <div className="absolute inset-x-[20px] bottom-[28px] grid grid-cols-2 gap-x-[16px] lg:inset-x-auto lg:left-[376px] lg:bottom-[52px] lg:grid-cols-[188px_1fr] lg:gap-x-0">
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

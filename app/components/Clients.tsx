import Headline from "./Headline";

const stats = [
  ["4.9★", "Average client rating"],
  ["5K+", "Happy clients served"],
  ["92%", "Returning client rate"],
  ["15+", "Certified beauty specialists"],
];

const quotes = [
  {
    text: "“From the moment I walked into Velina, everything felt calming, elegant, and incredibly professional. The attention to detail, personalized care, and final results exceeded every expectation.”",
    name: "Sophia Bennett",
    role: "Bridal Makeup Client",
    img: "photo-1494790108377-be9c29b29330",
  },
  {
    text: "“The atmosphere is absolutely beautiful, and the team truly understands how to create a luxury experience that feels personal and comfortable.”",
    name: "Emma Collins",
    role: "Skin Treatment Client",
    img: "photo-1544005313-94ddf0286df2",
  },
];

const Arrow = ({ dir }: { dir: "l" | "r" }) => (
  <svg viewBox="0 0 16 10" className="h-[10px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1">
    {dir === "l" ? <path d="M15 5H1M5 1L1 5l4 4" /> : <path d="M1 5h14M11 1l4 4-4 4" />}
  </svg>
);

export default function Clients() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-[22px] py-[64px] lg:px-[1.72vw] lg:py-[4vw]">
      <div className="grid grid-cols-1 gap-y-[20px] lg:grid-cols-[32.3%_1fr] lg:gap-y-0">
        <p className="tiny pt-[10px]">Client experiences</p>
        <div>
          <Headline
            text="{W}HO VALUE {L}UXURY|{&} CARE"
            className="text-3xl sm:text-5xl lg:text-[clamp(60px,5.3vw,128px)] lg:leading-[1.09] lg:whitespace-nowrap lg:-ml-[4px]"
          />
          <p className="tiny mt-[24px] max-w-[760px] lg:max-w-[60%] text-muted lg:mt-[30px]">
            From personalized beauty treatments to relaxing salon experiences, our clients trust Velina for results
            that feel elegant, effortless, and confidence-boosting.
          </p>
        </div>
      </div>

      <div className="mt-[44px] grid grid-cols-1 gap-y-[40px] lg:mt-[4.4vw] lg:grid-cols-[32.3%_1fr] lg:gap-y-0">
        <div className="relative">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[32px] pt-[10px] lg:grid-cols-[50%_1fr] lg:gap-x-0 lg:gap-y-[7.5vw]">
            {stats.map(([n, l]) => (
              <div key={l} className="tiny">
                {n}
                <br />
                {l}
              </div>
            ))}
          </div>
          <div className="mt-[28px] flex items-center gap-[28px] lg:absolute lg:bottom-[0px] lg:left-[4px] lg:mt-0">
            <button aria-label="Previous">
              <Arrow dir="l" />
            </button>
            <button aria-label="Next">
              <Arrow dir="r" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 border border-ink/60 md:grid-cols-2 lg:aspect-[789/694]">
          {quotes.map((q, i) => (
            <div
              key={q.name}
              className={`relative px-[20px] pt-[26px] pb-[104px] lg:px-[28px] lg:pt-[34px] lg:pb-0 ${
                i === 0 ? "border-b border-ink/60 md:border-b-0 md:border-r" : ""
              }`}
            >
              <div className="tiny flex items-center gap-[8px]">
                <span className="tracking-[0.15em]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>4.9/ Average rating</span>
              </div>
              <p className="mt-[22px] text-[13px] leading-[18px] uppercase fluid-13">{q.text}</p>
              <div className="absolute inset-x-[20px] bottom-[60px] border-t border-ink/40 lg:inset-x-[28px]" />
              <div className="absolute bottom-[26px] left-[20px] flex items-center gap-[10px] lg:left-[28px]">
                <img
                  src={`https://images.unsplash.com/${q.img}?w=200&q=80`}
                  alt={q.name}
                  className="h-[30px] w-[30px] rounded-full object-cover"
                />
                <div className="tiny">
                  {q.name}
                  <br />
                  {q.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

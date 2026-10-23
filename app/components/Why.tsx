import Headline from "./Headline";

const rows = [
  "Personalized Beauty Care",
  "Certified Beauty Specialists",
  "Luxury Salon Atmosphere",
  "Premium Beauty Products",
  "Comfort & Hygiene First",
];

export default function Why() {
  return (
    <section className="flex w-full flex-col justify-center px-[22px] py-[40px] md:min-h-screen md:py-[5vh] lg:px-[1.72vw]">
      <div className="grid w-full grid-cols-1 gap-y-[48px] md:min-h-[90vh] md:grid-cols-2 md:gap-x-[24px] lg:grid-cols-[32.3%_16.1%_16.3%_1fr] lg:gap-0">
        <div className="flex flex-col md:justify-between lg:col-span-2 lg:pr-[3vw]">
          <div>
            <Headline
              text="{E}LEVATED|BEAUT{Y}|E{X}PERIENCE"
              className="text-3xl sm:text-5xl md:text-[min(5.8vw,8vh)] md:leading-[1.06] md:whitespace-nowrap lg:-ml-[4px]"
            />
            <p className="tiny mt-[28px] md:mt-[3vh]">Why Velina</p>
            <p className="tiny mt-[20px] text-muted md:mt-[2vh]">
              Every detail at Velina is intentionally designed to create a beauty experience that feels refined,
              relaxing, and deeply personal. From our expert artists to our thoughtfully curated interior, luxury is
              felt in every moment.
            </p>
          </div>

          <ul className="mt-[48px] border-t border-ink/50 md:mt-[4vh]">
            {rows.map((r, i) => (
              <li
                key={r}
                className="flex h-[53px] items-center justify-between border-b border-ink/50 pr-[12px] md:h-[7vh]"
              >
                <span className="text-[13px] uppercase fluid-13">{r}</span>
                <span className="tiny">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1400&q=80"
            alt="Woman with voluminous dark wavy hair"
            className="aspect-[4/5] w-full object-cover md:aspect-auto md:h-[90vh]"
          />
        </div>
      </div>
    </section>
  );
}

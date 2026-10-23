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
    <section className="px-[22px] pb-[110px] lg:pb-[200px]">
      <div className="grid grid-cols-1 gap-y-[48px] md:grid-cols-2 md:gap-x-[24px] lg:grid-cols-[376px_188px_190px_1fr] lg:gap-0">
        <div className="lg:col-span-2 lg:pr-[10px]">
          <Headline
            text="{E}LEVATED|BEAUT{Y}|E{X}PERIENCE"
            className="text-3xl sm:text-5xl lg:text-[68px] lg:leading-[72px] lg:whitespace-nowrap lg:-ml-[4px]"
          />
          <p className="tiny mt-[28px] lg:mt-[36px]">Why Velina</p>
          <p className="tiny mt-[20px] text-muted lg:mt-[26px]">
            Every detail at Velina is intentionally designed to create a beauty experience that feels refined,
            relaxing, and deeply personal. From our expert artists to our thoughtfully curated interior, luxury is
            felt in every moment.
          </p>

          <ul className="mt-[48px] border-t border-ink/50 lg:mt-[86px]">
            {rows.map((r, i) => (
              <li
                key={r}
                className="flex h-[53px] items-center justify-between border-b border-ink/50 pr-[12px]"
              >
                <span className="text-[13px] uppercase">{r}</span>
                <span className="tiny">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2 lg:pl-[6px]">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&q=80"
            alt="Woman with voluminous dark wavy hair"
            className="aspect-[4/5] w-full object-cover md:aspect-auto md:h-full lg:h-[672px]"
          />
        </div>
      </div>
    </section>
  );
}

import Headline from "./Headline";

const stats = [
  ["10+", "Years of Beauty Excellence"],
  ["5K+", "Satisfied Clients Served"],
  ["15+", "Certified Beauty Specialists"],
  ["4.9★", "Average Client Rating"],
];

export default function About() {
  return (
    <section className="px-[22px] lg:px-[1.72vw] pt-[64px] pb-[110px] lg:pt-[7.5vw] lg:pb-[15.6vw]">
      <div className="grid grid-cols-1 gap-y-[20px] lg:grid-cols-[32.3%_1fr] lg:gap-y-0">
        <p className="tiny pt-[10px]">Who we are</p>
        <div>
          <Headline
            text="A {L}UXURY {B}EAUTY|EXPERIENCE|{D}ESIGNED {A}ROUND|YOU"
            className="text-3xl sm:text-5xl lg:text-[clamp(60px,5.3vw,128px)] lg:leading-[1.09] lg:whitespace-nowrap lg:-ml-[4px]"
          />
          <p className="tiny mt-[32px] max-w-[760px] lg:max-w-[60%] text-muted lg:mt-[3.75vw]">
            At Velina, we believe beauty is deeply personal. Every appointment is thoughtfully tailored to enhance
            confidence, elevate self-care, and create a relaxing experience that feels effortlessly luxurious from
            beginning to end.
          </p>
          <a href="#" className="tiny-link mt-[24px] inline-block lg:mt-[32px]">
            Read more about us
          </a>

          <div className="mt-[36px] grid grid-cols-1 lg:grid-cols-[23.8%_24.1%_1fr]">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=80"
              alt="Stylist and client in a dark salon"
              className="aspect-[378/404] w-full max-w-[378px] object-cover lg:col-span-2 lg:max-w-none"
            />
          </div>

          <div className="mt-[40px] grid grid-cols-2 gap-x-[16px] gap-y-[32px] lg:grid-cols-[50%_1fr] lg:gap-x-0 lg:gap-y-[3.4vw]">
            {stats.map(([n, l]) => (
              <div key={l} className="tiny">
                <div>{n}</div>
                <div>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

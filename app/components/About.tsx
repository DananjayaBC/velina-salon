import Headline from "./Headline";

const stats = [
  ["10+", "Years of Beauty Excellence"],
  ["5K+", "Satisfied Clients Served"],
  ["15+", "Certified Beauty Specialists"],
  ["4.9★", "Average Client Rating"],
];

export default function About() {
  return (
    <section className="flex min-h-screen w-full flex-col justify-center px-[22px] py-[64px] lg:px-[1.72vw] lg:py-[5vh]">
      <div className="grid w-full grid-cols-1 gap-y-[20px] lg:grid-cols-[32.3%_1fr] lg:gap-y-0">
        <p className="tiny pt-[10px]">Who we are</p>
        <div className="flex w-full flex-col lg:min-h-[90vh] lg:justify-between">
          <div>
            <Headline
              text="A {L}UXURY {B}EAUTY|EXPERIENCE|{D}ESIGNED {A}ROUND|YOU"
              className="text-3xl sm:text-5xl lg:text-[min(5.8vw,8vh)] lg:leading-[1.06] lg:whitespace-nowrap lg:-ml-[4px]"
            />
            <p className="tiny mt-[32px] max-w-[760px] text-muted lg:mt-[3vh] lg:max-w-none lg:pr-[4vw]">
              At Velina, we believe beauty is deeply personal. Every appointment is thoughtfully tailored to enhance
              confidence, elevate self-care, and create a relaxing experience that feels effortlessly luxurious from
              beginning to end.
            </p>
            <a href="#" className="tiny-link mt-[24px] inline-block lg:mt-[2.5vh]">
              Read more about us
            </a>
          </div>

          <div className="mt-[36px] grid w-full grid-cols-1 gap-y-[40px] lg:mt-[3vh] lg:grid-cols-[47.9%_1fr] lg:items-end lg:gap-y-0">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80"
              alt="Stylist and client in a dark salon"
              className="aspect-[378/404] w-full max-w-[378px] object-cover lg:aspect-auto lg:h-[36vh] lg:max-w-none"
            />
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[32px] lg:h-[36vh] lg:grid-cols-2 lg:content-between lg:gap-x-0 lg:gap-y-0 lg:pl-[3vw]">
              {stats.map(([n, l]) => (
                <div key={l} className="tiny">
                  <div>{n}</div>
                  <div>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

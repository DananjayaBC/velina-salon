import Headline from "./Headline";

const stats = [
  ["10+", "Years of Beauty Excellence"],
  ["5K+", "Satisfied Clients Served"],
  ["15+", "Certified Beauty Specialists"],
  ["4.9★", "Average Client Rating"],
];

export default function About() {
  return (
    <section className="flex w-full flex-col justify-center px-[22px] py-[40px] md:min-h-screen md:py-[5vh] lg:px-[1.72vw]">
      <div className="grid w-full grid-cols-1 gap-y-[20px] md:grid-cols-[32.3%_1fr] md:gap-y-0">
        <p className="tiny pt-[10px]">Who we are</p>
        <div className="flex w-full flex-col md:min-h-[90vh] md:justify-between">
          <div>
            <Headline
              text="A {L}UXURY {B}EAUTY|EXPERIENCE|{D}ESIGNED {A}ROUND|YOU"
              className="sm:text-5xl md:text-[min(5.8vw,8vh)] md:leading-[1.06] md:whitespace-nowrap lg:-ml-[4px]"
            />
            <p className="tiny mt-[32px] max-w-[760px] text-muted md:mt-[3vh] md:max-w-none md:pr-[4vw]">
              At Velina, we believe beauty is deeply personal. Every appointment is thoughtfully tailored to enhance
              confidence, elevate self-care, and create a relaxing experience that feels effortlessly luxurious from
              beginning to end.
            </p>
            <a href="#" className="tiny-link mt-[24px] inline-block md:mt-[2.5vh]">
              Read more about us
            </a>
          </div>

          <div className="mt-[36px] grid w-full grid-cols-1 gap-y-[40px] md:mt-[3vh] md:grid-cols-[47.9%_1fr] md:items-end md:gap-y-0">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80"
              alt="Stylist and client in a dark salon"
              className="aspect-[378/404] w-full max-w-[378px] object-cover md:aspect-auto md:h-[36vh] md:max-w-none"
            />
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[32px] md:h-[36vh] md:grid-cols-2 md:content-between md:gap-x-0 md:gap-y-0 md:pl-[3vw]">
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

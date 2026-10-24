import Headline from "./Headline";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden text-white">
      <img
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80"
        alt="Woman seated in a salon chair"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
      <div className="absolute inset-0 bg-[#3a2e20]/30" />

      {/* nav */}
      <Nav />

      {/* copy */}
      <div className="absolute inset-x-0 top-[150px] px-[22px] lg:px-[1.72vw] sm:top-[200px] lg:top-[38%]">
        <div className="grid grid-cols-1 gap-y-[18px] lg:grid-cols-[32.3%_1fr] lg:gap-y-0">
          <p className="tiny mt-[4px]">&ldquo;Now accepting new clients&rdquo;</p>
          <div>
            <Headline
              as="h1"
              text="{R}EVEAL Y{O}UR MOST|RADIANT {S}ELF"
              className="sm:text-5xl lg:text-[clamp(60px,5.3vw,128px)] lg:leading-[1.09] lg:whitespace-nowrap lg:-ml-[6px]"
            />
            <p className="tiny mt-[20px] max-w-[700px] lg:mt-[2.3vw]">
              At Salon Apsa, beauty is more than a service &mdash; it&rsquo;s a personalized luxury experience crafted to
              elevate confidence, elegance, and self-care.
            </p>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div className="absolute inset-x-0 bottom-0 bg-black/20 backdrop-blur-[1px] lg:h-[3.75vw]">
        <div className="grid grid-cols-1 gap-y-[12px] px-[22px] lg:px-[1.72vw] py-[14px] sm:grid-cols-3 sm:gap-y-0 lg:h-full lg:grid-cols-[32.3%_16.1%_16.3%_1fr] lg:items-center lg:py-0">
          <div>
            <div className="text-[13px] tracking-[0.15em] leading-[16px] md:text-[10px] md:leading-[12px]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className="tiny">Trusted by 5,000+ beauty lovers</div>
          </div>
          <div className="flex items-start gap-[10px] lg:col-span-2 lg:pl-[100px]">
            <span className="tiny pt-[6px]">Opening hours</span>
            <span className="h-[26px] w-px bg-white/40" />
            <div className="tiny">
              Mon &mdash; Sat
              <br />
              10:00 AM &mdash; 8:00 PM
            </div>
          </div>
          <div className="tiny sm:text-right">
            5K+ Happy Clients
            <br />
            10+ Years Experience
          </div>
        </div>
      </div>
    </section>
  );
}

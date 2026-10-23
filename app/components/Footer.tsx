import { VMark } from "./Logo";

const pages = ["Home", "About", "Services", "Gallery", "Testimonials", "Contact"];
const services = ["Services", "Hair Artistry", "Bridal Beauty", "Skin Rituals", "Nail Care", "Luxury Treatments"];
const social = ["Social Links", "Instagram", "Facebook", "Pinterest", "Tiktok"];

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center px-[22px] py-[40px] md:min-h-screen md:py-[64px] lg:px-[1.72vw] lg:py-[4vw]">
      <div className="grid grid-cols-1 gap-y-[48px] lg:grid-cols-[32.3%_16.1%_16.3%_1fr] lg:gap-y-0">
        <div className="text-6xl font-light leading-[0.86] tracking-[-0.02em] sm:text-8xl lg:col-span-3 lg:-ml-[6px] lg:-mt-[14px] lg:text-[clamp(170px,15.3vw,370px)]">
          VELINA
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-[50%_1fr]">
          <div>
            <VMark className="h-[36px] w-[34px]" />
            <ul className="tiny mt-[32px] space-y-[5px] lg:mt-[8.1vw]">
              {pages.map((p) => (
                <li key={p}>
                  <a href="#">{p}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="tiny mt-[68px] space-y-[5px] lg:mt-[11vw]">
            {services.map((p) => (
              <li key={p}>
                <a href="#">{p}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-[56px] grid grid-cols-1 gap-y-[28px] sm:grid-cols-2 lg:mt-[6.9vw] lg:grid-cols-[32.3%_16.1%_16.3%_16.1%_1fr] lg:gap-y-0">
        <div className="flex items-start gap-[10px]">
          <span className="tiny">Opening hours</span>
          <span className="h-[24px] w-px bg-ink/50" />
          <div className="tiny">
            Mon &mdash; Sat
            <br />
            10:00 AM &mdash; 8:00 PM
          </div>
        </div>
        <div className="tiny lg:col-span-2">
          Saturday
          <br />
          10:00 AM &mdash; 7:00 PM
        </div>
        <ul className="tiny space-y-[5px]">
          {social.map((p) => (
            <li key={p}>
              <a href="#">{p}</a>
            </li>
          ))}
        </ul>
        <div className="tiny space-y-[5px]">
          <div>(+123) 3245-98612</div>
          <div>hello@velina.com</div>
          <div className="pt-[14px]">Address</div>
          <div className="lg:whitespace-nowrap">245 Madison Avenue, New York, NY</div>
        </div>
      </div>

      <div className="mt-[72px] flex flex-wrap gap-x-[32px] gap-y-[8px] lg:mt-[13.3vw] lg:grid lg:grid-cols-[20.4%_11.8%_1fr] lg:gap-0">
        <span className="tiny">&copy; 2026 Velina. All rights reserved.</span>
        <a href="#" className="tiny">
          Privacy Policy
        </a>
        <a href="#" className="tiny">
          Terms &amp; Condition
        </a>
      </div>
    </footer>
  );
}

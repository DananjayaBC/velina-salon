import Headline from "./Headline";

const services = [
  {
    n: "01",
    name: "Bridal Beauty",
    meta: ["Bridal Glam", "Event Makeup", "Hair Styling"],
    img: "photo-1509967419530-da38b4704bc6",
    alt: "Bride with white flowers in her hair",
  },
  {
    n: "02",
    name: "Hair Artistry",
    meta: ["Haircut", "Balayage", "Blowout"],
    img: "photo-1470259078422-826894b933aa",
    alt: "Long wavy hair with yellow flowers",
  },
  {
    n: "03",
    name: "Skin Rituals",
    meta: ["Facials", "Hydration", "Skin Therapy"],
    img: "photo-1581182800629-7d90925ad072",
    alt: "Woman with eyes closed, glowing skin",
  },
  {
    n: "04",
    name: "Nail & Beauty Care",
    meta: ["Manicure", "Pedicure", "Nail Design"],
    img: "photo-1604654894610-df63bc536371",
    alt: "Hand with orange and yellow nail art",
  },
];

function Card({ s }: { s: (typeof services)[number] }) {
  return (
    <div>
      <div className="tiny mb-[6px]">{s.n}</div>
      <img
        src={`https://images.unsplash.com/${s.img}?w=900&q=80`}
        alt={s.alt}
        className="aspect-[378/416] w-full object-cover lg:aspect-auto lg:h-[416px] lg:w-[378px]"
      />
      <div className="mt-[16px] grid grid-cols-2 lg:grid-cols-[188px_1fr]">
        <div className="text-[13px] leading-[16px] uppercase">{s.name}</div>
        <div className="tiny">
          {s.meta.map((m) => (
            <div key={m}>{m}</div>
          ))}
          <a href="#" className="tiny-link mt-[12px] inline-block">
            Explore service
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="px-[22px] pb-[100px] lg:pb-[170px]">
      <div className="grid grid-cols-1 gap-y-[20px] lg:grid-cols-[376px_1fr] lg:gap-y-0">
        <p className="tiny pt-[10px]">Signature services</p>
        <Headline
          text="{C}URATED {B}EAUTY|SERVIC{E}S"
          className="text-3xl sm:text-5xl lg:text-[68px] lg:leading-[74px] lg:whitespace-nowrap lg:-ml-[4px]"
        />
      </div>

      <div className="mt-[44px] grid grid-cols-1 gap-y-[56px] sm:grid-cols-2 sm:gap-x-[24px] lg:mt-[66px] lg:grid-cols-[376px_188px_190px_1fr] lg:gap-x-0 lg:gap-y-[90px]">
        <Card s={services[0]} />
        <div className="hidden lg:col-span-2 lg:block" />
        <Card s={services[1]} />
        <Card s={services[2]} />
        <div className="hidden lg:col-span-2 lg:block" />
        <Card s={services[3]} />
      </div>
    </section>
  );
}

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
        className="aspect-[378/416] w-full object-cover md:aspect-auto md:h-[20vh] lg:h-[44vh]"
      />
      <div className="mt-[16px] grid grid-cols-2 md:mt-[1.5vh] lg:grid-cols-[50%_1fr]">
        <div className="text-[13px] leading-[16px] uppercase fluid-13">{s.name}</div>
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
    <section className="flex min-h-screen w-full flex-col justify-center px-[22px] py-[64px] md:py-[4vh] lg:px-[1.72vw]">
      <div className="flex w-full flex-col md:min-h-[92vh] md:justify-between">
        <div className="grid grid-cols-1 gap-y-[20px] lg:grid-cols-[32.3%_1fr] lg:gap-y-0">
          <p className="tiny pt-[10px]">Signature services</p>
          <Headline
            text="{C}URATED {B}EAUTY|SERVIC{E}S"
            className="text-3xl sm:text-5xl md:text-[min(5.8vw,7vh)] md:leading-[1.06] lg:text-[min(5.8vw,8vh)] lg:whitespace-nowrap lg:-ml-[4px]"
          />
        </div>

        <div className="mt-[44px] grid grid-cols-1 gap-y-[56px] sm:grid-cols-2 sm:gap-x-[24px] md:mt-[3vh] md:gap-y-[3vh] lg:grid-cols-4 lg:gap-x-[1.5vw] lg:gap-y-0">
          {services.map((s) => (
            <Card key={s.n} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

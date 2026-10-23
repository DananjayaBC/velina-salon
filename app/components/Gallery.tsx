import Headline from "./Headline";

const imgs = [
  "photo-1508214751196-bcfd4ca60f91",
  "photo-1544005313-94ddf0286df2",
  "photo-1534528741775-53994a69daeb",
  "photo-1506863530036-1efeddceb993",
  "photo-1524504388940-b1c1722653e1",
  "photo-1438761681033-6461ffad8d80",
];

export default function Gallery() {
  return (
    <section className="px-[22px] lg:px-[1.72vw] pb-[110px] lg:pb-[14vw]">
      <div className="grid grid-cols-1 gap-y-[20px] lg:grid-cols-[32.3%_1fr] lg:gap-y-0">
        <p className="tiny pt-[10px]">Inside Velina</p>
        <Headline
          text="M{O}MENTS OF|{B}EAUTY, {E}LEGANCE"
          className="text-3xl sm:text-5xl lg:text-[clamp(60px,5.3vw,128px)] lg:leading-[1.09] lg:whitespace-nowrap lg:-ml-[4px]"
        />
      </div>

      <div className="mt-[48px] grid grid-cols-2 items-end gap-[12px] sm:grid-cols-3 lg:mt-[6.7vw] lg:grid-cols-6 lg:gap-[0.8vw]">
        {imgs.map((id, i) => {
          const tall = i === 2;
          return (
            <div key={id} className="w-full">
              <div className="tiny mb-[8px]">
                0{i + 1}
                {tall && (
                  <>
                    <br />
                    Luxury hair styling experience
                  </>
                )}
              </div>
              <img
                src={`https://images.unsplash.com/${id}?w=600&q=80`}
                alt={`Gallery ${i + 1}`}
                className={`aspect-[180/215] w-full object-cover lg:aspect-auto ${
                  tall ? "lg:aspect-[180/248]" : "lg:aspect-[180/215]"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

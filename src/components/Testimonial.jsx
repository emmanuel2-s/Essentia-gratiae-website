import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function Testimonial() {
  const testimonials = [
    {
      name: "Emily Carter",
      role: "London",
      text: "ASTER has completely changed how I begin my mornings. Lighting one candle instantly creates calm before my day starts.",
    },
    {
      name: "Sarah Thompson",
      role: "Manchester",
      text: "Every package feels like opening a luxury gift. Beautiful scents, beautiful quality.",
    },
    {
      name: "Olivia James",
      role: "Birmingham",
      text: "The affirmation cards and candles have become part of my nightly ritual. Absolutely worth every penny.",
    },
  ];

  return (
    <>
      <section className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[0.45em] text-[#C5AE86]">
              Kind Words
            </p>

            <h2 className="font-serif text-6xl mt-4 text-[#342D28]">
              Loved by our community
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            loop
            spaceBetween={30}
            className="mt-20"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="bg-[#F8F5EE] rounded-[35px] p-14 text-center">
                  <p className="text-3xl text-[#C5AE86]">⭐⭐⭐⭐⭐</p>

                  <p className="leading-9 italic mt-8 text-[#5C554D]">
                    "{item.text}"
                  </p>

                  <div className="mt-10">
                    <h4 className="font-serif text-3xl">{item.name}</h4>

                    <p className="uppercase tracking-[0.3em] text-sm mt-2 text-[#B89B5E]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

import { heroSlides } from "../utils/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

function Hero() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="relative h-screen">
              <img
                src={slide.image}
                alt={slide.alt}
                className=" absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 flex items-center justify-center h-full text-center">
                <div>
                  <h1 className="text-6xl md:text-8xl text-white">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-white uppercase tracking-[0.3em]">
                    {slide.subtitle}
                  </p>

                  <button className=" btn-custom">{slide.button}</button>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;

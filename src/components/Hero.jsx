import imgd from "/aster-logo-removebg-preview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import LuxuryBackground from "../components/LuxuryBackground";
// import { SwiperSlide } from "swiper/react";
// import "../App.css";

export default function Hero() {
  const heroSlides = [
    {
      id: 1,
      title: "The Essence of Grace\nLives Within You",
      subtitle:
        "Create moments of stillness with handcrafted rituals designed to restore balance, invite peace, and awaken the beauty already within.",
      button: "Begin Your Ritual",
    },

    {
      id: 2,
      title: "Light the Flame.\nQuiet the Mind.",
      subtitle:
        "Hand-poured candles, mindful journals, and intentional rituals created to transform ordinary moments into sacred experiences.",
      button: "Explore the Collection",
    },

    {
      id: 3,
      title: "Every Ritual\nBegins With Intention",
      subtitle:
        "Whether it's the first light of morning or the calm of evening, discover thoughtful pieces that encourage presence, gratitude, and self-connection.",
      button: "Discover More",
    },

    {
      id: 4,
      title: "Return to\nYour Inner Sanctuary",
      subtitle:
        "Surround yourself with calming fragrances, mindful rituals, and timeless essentials that help you slow down and reconnect with what truly matters.",
      button: "Shop the Rituals",
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="">
        <LuxuryBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="flex justify-center pt-12">
          <img src={imgd} alt="" />
        </div>

        <div className="max-w-7xl mx-auto h-full">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop
            speed={2000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex h-[75vh] items-center justify-center text-center">
                  <div>
                    <h1 className="text-white text-6xl md:text-8xl whitespace-pre-line">
                      {slide.title}
                    </h1>

                    <p className="mt-6 text-white uppercase tracking-[0.3em]">
                      {slide.subtitle}
                    </p>

                    <button className="btn-custom mt-10">{slide.button}</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

import LuxuryBackground from "../components/LuxuryBackground";

import logo from "/aster-logo-removebg-preview.png";
// import heroImage from "../assets/images/hero-imgs/Luxury_amber_candle_on_soft_cream_linen_fabric_with_label_name_Aster_warm_mornin-0.jpg";

const slides = [
  {
    title: "The Essence\nof Grace",
    subtitle:
      "Create intentional rituals through luxurious candles, affirmation cards and mindful living essentials.",
    button: "Shop Collection",
  },
  {
    title: "Light.\nBreathe.\nReturn.",
    subtitle:
      "Designed to slow your mind, soften your space and reconnect you with yourself.",
    button: "Explore Rituals",
  },
  {
    title: "Luxury\nMeets Stillness",
    subtitle:
      "Every candle is hand-poured in small batches using premium soy wax and fine fragrance oils.",
    button: "Discover More",
  },
  {
    title: "Create\nSacred Moments",
    subtitle:
      "Beautiful rituals crafted to bring grace, peace and presence into everyday life.",
    button: "Begin Your Ritual",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden pt-30">
      <LuxuryBackground />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-20 flex h-full flex-col">
        {/* Logo */}

        {/* <div className="pt-10 flex justify-center">
          <img src={logo} alt="" className="w-52" />
        </div> */}

        {/* Hero */}

        <div className="flex-1">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            className="h-full"
            loop
            speed={1800}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="!h-full">
                <div className="mx-auto grid h-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
                  {/* LEFT */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -60,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    <p className="hidden md:flex uppercase tracking-[0.5em] text-[#C5AE86] text-sm">
                      Handcrafted Rituals
                    </p>

                    <h1 className="hidden md:flex mt-6 whitespace-pre-line font-serif text-5xl leading-none text-white md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>

                    <p className="hidden md:flex mt-10 max-w-xl text-lg leading-9 text-[#F7F2EB]">
                      {slide.subtitle}
                    </p>

                    <button className="hidden md:flex mt-12 rounded-full bg-[#C5AE86] px-10 py-5 uppercase tracking-[0.25em] text-[#342d28] transition hover:bg-white">
                      {slide.button}
                    </button>
                  </motion.div>

                  {/* RIGHT */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="justify-center flex"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="w-[400px] rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,.45)]"
                    />
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

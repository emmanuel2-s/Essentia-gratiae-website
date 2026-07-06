import Hero from "../components/Hero";
import storyImg from "../assets/images/hero-imgs/Luxury_amber_candle_on_soft_cream_linen_fabric_with_label_name_Aster_warm_mornin-0.jpg";
import f1 from "../assets/images/featured-imgs/f1.jfif";
import f2 from "../assets/images/featured-imgs/f2.jfif";
import f3 from "../assets/images/featured-imgs/f3.jfif";
import ritual from "../assets/images/create-imgs/create-3.jfif";
import img1 from "../assets/images/create-imgs/create-5.jfif";
import img2 from "../assets/images/insta-img2.jfif";
import img3 from "../assets/images/lucid-origin_A_peaceful_circle_of_women_gathered_for_a_mindfulness_and_self-care_workshop_jou-0.jpg";
import FadeUp from "../utils/fadeUp";
import FlyIn from "../utils/flyIn";
import InstaSection from "../components/InstaSection";
import MissionSection from "../components/aboutSections/MissionPreview";
// import { motion } from "framer-motion";
// import Loader from "../components/Loader";
import ScrollButton from "../utils/ScrollButton";
import FounderStory from "../components/FounderStory";
import { toast } from "react-toastify";
import { useEffect } from "react";
// import imgd from "/aster-logo-removebg-preview.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css/effect-fade";
// import LuxuryBackground from "../components/LuxuryBackground";
// import { SwiperSlide } from "swiper/react";
// import "../App.css";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      toast.success(`has been added to your ritual basket.`);
    }, 5000);
  }, []);
  // const heroSlides = [
  //   {
  //     id: 1,
  //     title: "The Essence of Grace\nLives Within You",
  //     subtitle:
  //       "Create moments of stillness with handcrafted rituals designed to restore balance, invite peace, and awaken the beauty already within.",
  //     button: "Begin Your Ritual",
  //   },

  //   {
  //     id: 2,
  //     title: "Light the Flame.\nQuiet the Mind.",
  //     subtitle:
  //       "Hand-poured candles, mindful journals, and intentional rituals created to transform ordinary moments into sacred experiences.",
  //     button: "Explore the Collection",
  //   },

  //   {
  //     id: 3,
  //     title: "Every Ritual\nBegins With Intention",
  //     subtitle:
  //       "Whether it's the first light of morning or the calm of evening, discover thoughtful pieces that encourage presence, gratitude, and self-connection.",
  //     button: "Discover More",
  //   },

  //   {
  //     id: 4,
  //     title: "Return to\nYour Inner Sanctuary",
  //     subtitle:
  //       "Surround yourself with calming fragrances, mindful rituals, and timeless essentials that help you slow down and reconnect with what truly matters.",
  //     button: "Shop the Rituals",
  //   },
  // ];
  return (
    <>
      {/* <Loader /> */}
      <div>
        <Hero />

        {/* <LuxuryBackground /> */}

        {/* <section>
        <div className=" flex justify-center pt-12">
          <img src={imgd} alt="" />
        </div>
        <div className="max-w-7xl mx-auto">
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
                <section className="">
                  <div className="flex items-center justify-center h-full text-center">
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
      </section> */}

        {/* STORY SECTION START */}
        <section className="section ">
          <div className="container-custom">
            <div className="story-grid">
              <div className="story-text">
                <div className="small-heading">Our Story</div>
                <FadeUp>
                  <h2 className="main-title text-[#1E3A34]">
                    A return to what
                    <br />
                    truly matters.
                  </h2>
                </FadeUp>
                <FadeUp>
                  <div className="line"></div>

                  <p className="pb-4">
                    Aster was created for moments that ask you to slow down. For
                    mornings that begin gently. For evenings that invite
                    reflection. For the quiet return to yourself.
                  </p>

                  <a
                    href="#"
                    className="bg-[#1E3A34] px-4 py-4 text-white hover:bg-transparent border-2 border-[#1E3A34] hover:text-black duration-700 ease-in-out"
                  >
                    {" "}
                    Discover The Philosophy{" "}
                  </a>
                </FadeUp>
              </div>
              <FadeUp>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to left, black 65%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to left, black 65%, transparent 100%)",
                  }}
                >
                  <img src={storyImg} className="w-full h-full object-cover" />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
        {/* STORY SECTION END */}

        <MissionSection />
        {/* FEATURED SECTION START */}

        <section className="section-1 center">
          <div className="container-custom">
            <div className="small-heading">Featured Rituals</div>

            <h2 className="main-title text-[#1E3A34]">
              Rituals for every part of you.
            </h2>

            <div className="cards">
              <div className="card bg-[#FDFBF8] rounded-3xl shadow hover:-translate-y-3 hover:shadow-xl duration-500 text-center">
                <FlyIn direction="right">
                  <div className="card-img">
                    <img src={f1} loading="lazy" className="rounded-t-xl" />
                  </div>
                  <h3>Stillness</h3>
                  <p>For quiet evenings and grounded thoughts</p>
                </FlyIn>
              </div>

              <div className="card bg-[#FDFBF8] rounded-3xl shadow hover:-translate-y-3 hover:shadow-xl duration-500 text-center">
                <FlyIn direction="right">
                  <div className="card-img">
                    <img src={f2} loading="lazy" className="rounded-t-xl" />
                  </div>
                  <h3>Clarity</h3>
                  <p>For focus, intention and inner alignment</p>
                </FlyIn>
              </div>

              <div className="card bg-[#FDFBF8] rounded-3xl  shadow hover:-translate-y-3 hover:shadow-xl duration-500 text-center">
                <FlyIn direction="left">
                  <div className="card-img">
                    <img src={f3} loading="lazy" className="rounded-t-xl" />
                  </div>
                  <h3>Soul Rest</h3>
                  <p>For deep reflection and emotional reset</p>
                </FlyIn>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURED SECTION END */}

        {/* RITUAL SECTION START */}
        <section className="section-2">
          <div className="container-custom">
            <div className="ritual-grid">
              <FadeUp>
                <div className="ritual-img ">
                  <img src={ritual} loading="lazy" className="rounded-xl" />
                </div>
              </FadeUp>
              <FlyIn direction="right">
                <div className="">
                  <div className="small-heading">Create Your Moment</div>

                  <h2 className="main-title text-[#1E3A34]">
                    Make it a ritual.
                  </h2>

                  <div className="line"></div>

                  <ul className="ritual-list">
                    <li>✦ Light the flame.</li>
                    <li>✦ Put the world down.</li>
                    <li>✦ Breathe deeply.</li>
                    <li>✦ Return gently.</li>
                  </ul>

                  <a
                    href="#"
                    className="bg-[#1E3A34] px-6 py-4 text-white hover:bg-transparent border-2 border-[#1E3A34] hover:text-black duration-700 ease-in-out"
                  >
                    {" "}
                    Explore Rituals{" "}
                  </a>
                </div>
              </FlyIn>
            </div>
          </div>
        </section>
        {/* RITUAL SECTION END */}

        <section className="section-3 center">
          <div className="container-custom">
            <div className="small-heading">Rituals For The Soul</div>

            <h2 className="main-title text-[#1E3A34]">
              Guidance for your journey within.
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="journal-card flex items-center shadow bg-white p-2 rounded-2xl hover:-translate-y-3 hover:ease-in-out duration-500 hover:shadow-xl">
                <img src={img1} className="rounded-xl" loading="lazy" />
                <div>
                  <h4>Morning Grounding Ritual</h4>
                  <p>Begin your day with presence and intention.</p>
                </div>
              </div>

              <div className="journal-card flex items-center shadow bg-white p-2 rounded-2xl hover:-translate-y-3 hover:ease-in-out duration-500 hover:shadow-xl">
                <img src={img2} className="rounded-xl" loading="lazy" />
                <div>
                  <h4>Journaling Prompts</h4>
                  <p>Words that help you release, reflect and realign.</p>
                </div>
              </div>

              <div className="journal-card flex items-center shadow bg-white p-2 rounded-2xl hover:-translate-y-3 hover:ease-in-out duration-500 hover:shadow-xl">
                <img src={img3} className="rounded-xl" loading="lazy" />
                <div>
                  <h4>Evening Candle Meditation</h4>
                  <p>A quiet meditation to help you unwind gently.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FounderStory />
        <InstaSection />

        <div id="whatsapp-container">
          <a
            href="https://wa.me/+447939437939"
            target="_blank"
            id="whatsapp-float"
          >
            <span class="chat-text">Need help? Chat with us!</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
              alt="Chat on WhatsApp"
            />
          </a>
        </div>
        <ScrollButton />
      </div>
    </>
  );
}

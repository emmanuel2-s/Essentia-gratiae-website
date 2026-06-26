// import Hero from "../components/Hero";
import storyImg from "../assets/images/story-img.jfif";
import f1 from "../assets/images/featured-imgs/f1.jfif";
import f2 from "../assets/images/featured-imgs/f2.jfif";
import f3 from "../assets/images/featured-imgs/f3.jfif";
import ritual from "../assets/images/create-imgs/create-3.jfif";
import img1 from "../assets/images/create-imgs/create-5.jfif";
import img2 from "../assets/images/insta-img2.jfif";
import img3 from "../assets/images/image-2.jfif";
import FadeUp from "../utils/fadeUp";
import FlyIn from "../utils/flyIn";
import InstaSection from "../components/InstaSection";
import imgd from "/aster-logo-removebg-preview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import LuxuryBackground from "../components/LuxuryBackground";
// import { SwiperSlide } from "swiper/react";
// import "../App.css";

export default function Home() {
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
    <div>
      {/* <Hero /> */}
      <LuxuryBackground />

      <section>
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
      </section>

      {/* STORY SECTION START */}
      <section className="section ">
        <div className="container-custom">
          <div className="story-grid">
            <FadeUp>
              <div className="story-img ">
                <img src={storyImg} loading="lazy" className="rounded" />
              </div>
            </FadeUp>

            <div className="story-text">
              <div className="small-heading-1">Our Story</div>
              <FadeUp>
                <h2 className="main-title text-white">
                  A return to what
                  <br />
                  truly matters.
                </h2>
              </FadeUp>
              <FadeUp>
                <div className="line"></div>

                <p>
                  Aster was created for moments that ask you to slow down. For
                  mornings that begin gently. For evenings that invite
                  reflection. For the quiet return to yourself.
                </p>

                <a href="#" className="btn-sage">
                  {" "}
                  Discover The Philosophy{" "}
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
      {/* STORY SECTION END */}

      {/* FEATURED SECTION START */}

      <section className="section-1 center">
        <div className="container-custom">
          <div className="small-heading-1">Featured Rituals</div>

          <h2 className="main-title text-white">
            Rituals for every part of you.
          </h2>

          <div className="cards">
            <div className="card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <FlyIn direction="right">
                <div className="card-img">
                  <img src={f1} loading="lazy" className="rounded-xl" />
                </div>
                <h3>Stillness</h3>
                <p>For quiet evenings and grounded thoughts</p>
              </FlyIn>
            </div>

            <div className="card  bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <FlyIn direction="right">
                <div className="card-img">
                  <img src={f2} loading="lazy" className="rounded-xl" />
                </div>
                <h3>Clarity</h3>
                <p>For focus, intention and inner alignment</p>
              </FlyIn>
            </div>

            <div className="card  bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <FlyIn direction="left">
                <div className="card-img">
                  <img src={f3} loading="lazy" className="rounded-xl" />
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
                <div className="small-heading-1">Create Your Moment</div>

                <h2 className="main-title text-white">Make it a ritual.</h2>

                <div className="line"></div>

                <ul className="ritual-list">
                  <li>✦ Light the flame.</li>
                  <li>✦ Put the world down.</li>
                  <li>✦ Breathe deeply.</li>
                  <li>✦ Return gently.</li>
                </ul>

                <a href="#" className="btn-sage">
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
          <div className="small-heading-1">Rituals For The Soul</div>

          <h2 className="main-title text-white">
            Guidance for your journey within.
          </h2>

          <div className="journal-grid">
            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <img src={img1} className="rounded-xl" loading="lazy" />
              <h4>Morning Grounding Ritual</h4>
              <p>Begin your day with presence and intention.</p>
            </div>

            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <img src={img2} className="rounded-xl" loading="lazy" />
              <h4>Journaling Prompts</h4>
              <p>Words that help you release, reflect and realign.</p>
            </div>

            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <img src={img3} className="rounded-xl" loading="lazy" />
              <h4>Evening Candle Meditation</h4>
              <p>A quiet meditation to help you unwind gently.</p>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

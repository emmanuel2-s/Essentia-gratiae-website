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
import ScrollButton from "../utils/ScrollButton";
import FounderStory from "../components/FounderStory";
import SupabaseTest from "../components/supaBaseTest";
// import { toast } from "react-toastify";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     toast.success(`has been added to your ritual basket.`);
  //   }, 5000);
  // }, []);

  const rituals = [
    {
      image: img1,
      title: "Morning Grounding Ritual",
      text: "Begin your day with presence and intention.",
    },
    {
      image: img2,
      title: "Journaling Prompts",
      text: "Words that help you release, reflect and realign.",
    },
    {
      image: img3,
      title: "Evening Candle Meditation",
      text: "A quiet meditation to help you unwind gently.",
    },
  ];

  const featuredRituals = [
    {
      id: 1,
      image: f1,
      title: "Stillness",
      text: "For quiet evenings and grounded thoughts.",
    },

    {
      id: 2,
      image: f2,
      title: "Clarity",
      text: "For focus, intention and inner alignment.",
    },

    {
      id: 3,
      image: f3,
      title: "Soul Rest",
      text: "For deep reflection and emotional reset.",
    },
  ];
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
        <SupabaseTest />

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
                <div className="small-heading tracking-[0.4em]">Our Story</div>
                <FadeUp>
                  <h2 className="text-4xl md:text-7xl lead-[1.5] capitalize mb-10 text-[#1E3A34]">
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
            <div className="small-heading tracking-[0.4em]">
              Featured Rituals
            </div>
            <h2 className="text-4xl md:text-7xl lead-[1.5] capitalize mb-10 text-[#1E3A34]">
              Rituals for every part of you.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredRituals.map((ritual, index) => (
                <FlyIn
                  key={ritual.id}
                  direction={index === 2 ? "left" : "right"}
                >
                  <div className="group overflow-hidden rounded-3xl bg-[#FDFBF8] shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                    {/* Image */}
                    <div className="h-[320px] overflow-hidden">
                      <img
                        src={ritual.image}
                        alt={ritual.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex min-h-[180px] flex-col items-center justify-center px-8 py-8 text-center">
                      <h3 className="font-serif text-4xl text-[#1E3A34]">
                        {ritual.title}
                      </h3>

                      <p className="mt-4 leading-8 text-[#6E6258]">
                        {ritual.text}
                      </p>
                    </div>
                  </div>
                </FlyIn>
              ))}
            </div>{" "}
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

                  <h2 className="text-4xl md:text-7xl lead-[1.5] capitalize mb-10 text-[#1E3A34]">
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
            <h2 className="text-4xl md:text-7xl lead-[1.5] capitalize mb-10 text-[#1E3A34]">
              Guidance for your journey within.
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-16">
              {rituals.map((ritual, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-[42%] h-full md:h-[300px] overflow-hidden">
                      <img
                        src={ritual.image}
                        alt={ritual.title}
                        className="w-full  md:h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 p-6 md:p-8 text-center md:text-left">
                      <h3 className="font-serif text-3xl md:text-4xl text-[#1E3A34] leading-tight">
                        {ritual.title}
                      </h3>

                      <p className="mt-5 leading-8 text-[#6E6258]">
                        {ritual.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
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

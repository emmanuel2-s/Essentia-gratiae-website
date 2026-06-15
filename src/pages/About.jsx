import { motion } from "framer-motion";
import heroImage from "../assets/images/about/hero-image.jpg";
import storyImg from "../assets/images/section-imgs/section-img1.jfif";
import ctaImg from "../assets/images/section-imgs/section-img1.jfif";

import FadeUp from "../utils/fadeUp";
import Mission from "../components/aboutSections/Mission";
import Values from "../components/aboutSections/Values";
import Experience from "../components/aboutSections/Experience";
function About() {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Essentia Gratia Wellness"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl text-center text-white"
          >
            {/* Small Label */}
            <p className="uppercase tracking-[0.4em] text-sm mb-6 text-[#E7D8C3]">
              About Us
            </p>

            {/* Heading */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-lg">
              A return to yourself.
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-gray-100">
              Born from resilience, healing, and the belief that grace can be
              found in life's quietest moments.
            </p>

            {/* Button */}
            <button className="btn-custom">Discover Our Journey</button>
          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000000] to-transparent"></div>
      </section>

      {/* STORY SECTION START */}
      <section className="section">
        <div className="container-custom">
          <div className="story-grid">
            <FadeUp>
              <div className="story-img ">
                <img src={storyImg} />
              </div>
            </FadeUp>

            <div className="story-text">
              <div className="small-heading">Our Story</div>
              <FadeUp>
                <h2 className="main-title">
                  The beginning of
                  <br />
                  Essentia Gratia.
                </h2>
              </FadeUp>
              <FadeUp>
                <div className="line"></div>

                <p>
                  Life can be demanding. Balancing responsibilities, navigating
                  personal challenges, and finding moments of peace often feels
                  impossible. As a single mother, I understand what it means to
                  give so much of yourself to others while leaving little space
                  to simply breathe. I have felt the weight of exhaustion, the
                  pressure of expectations, and the deep longing for something
                  grounding and healing. Essentia Gratia was born from that
                  journey — a gentle reminder that your well-being matters and
                  that grace can always be found within.
                </p>

                {/* <a href="#" className="btn-sage">
                  {" "}
                  Discover The Philosophy{" "}
                </a> */}
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
      {/* STORY SECTION END */}

      <Mission />
      <Values />
      <Experience />

      <section className="cta">
        <img src={ctaImg} />
        <div className="cta-overlay"></div>

        <FadeUp>
          <div className="cta-content">
            <h2>Return to yourself.</h2>
            <p>Your rituals begin here.</p>

            <a href="#" className="btn-custom text-decoration-none">
              Begin Your Ritual
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
export default About;

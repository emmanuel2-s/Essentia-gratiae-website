// import React from 'react'

import Hero from "../components/Hero";
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
import "../App.css";

export default function Home() {
  return (
    <div>
      <Hero />
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
          <div className="small-heading">Featured Rituals</div>

          <h2 className="main-title">Rituals for every part of you.</h2>

          <div className="cards">
            <div className="card">
              <FlyIn direction="right">
                <div className="card-img">
                  <img src={f1} loading="lazy" />
                </div>
                <h3>Stillness</h3>
                <p>For quiet evenings and grounded thoughts</p>
              </FlyIn>
            </div>

            <div className="card">
              <FlyIn direction="right">
                <div className="card-img">
                  <img src={f2} loading="lazy" />
                </div>
                <h3>Clarity</h3>
                <p>For focus, intention and inner alignment</p>
              </FlyIn>
            </div>

            <div className="card">
              <FlyIn direction="left">
                <div className="card-img">
                  <img src={f3} loading="lazy" />
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
                <img src={ritual} loading="lazy" />
              </div>
            </FadeUp>
            <FlyIn direction="right">
              <div className="">
                <div className="small-heading">Create Your Moment</div>

                <h2 className="main-title">Make it a ritual.</h2>

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
          <div className="small-heading">Rituals For The Soul</div>

          <h2 className="main-title">Guidance for your journey within.</h2>

          <div className="journal-grid">
            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <img src={img1} className="rounded" />
              <h4>Morning Grounding Ritual</h4>
              <p>Begin your day with presence and intention.</p>
            </div>

            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <img src={img2} className="rounded" />
              <h4>Journaling Prompts</h4>
              <p>Words that help you release, reflect and realign.</p>
            </div>

            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300">
              <img src={img3} className="rounded" />
              <h4>Evening Candle Meditation</h4>
              <p>A quiet meditation to help you unwind gently.</p>
            </div>
          </div>
        </div>
      </section>

      <InstaSection />
    </div>
  );
}

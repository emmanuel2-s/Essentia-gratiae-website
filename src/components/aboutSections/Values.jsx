import FadeUp from "../../utils/fadeUp";
import missionImg from "../../assets/images/lucid-origin_A_peaceful_circle_of_women_gathered_for_a_mindfulness_and_self-care_workshop_jou-0.jpg";
import { Bird, Flower2, Feather } from "lucide-react";
export default function Values() {
  return (
    <>
      <section className="section">
        <div className="container-custom ">
          <div className="small-heading center">Our Values</div>

          {/* <h2 className="main-title">Guidance for your journey within.</h2> */}

          <div className="journal-grid">
            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300 shadow border-b-4 border-[#7d8770]">
              <div className="flex gap-5 items-center px-5">
                <Bird size={60} strokeWidth={1.2} />
                <h4>Still</h4>
              </div>
              <p>
                Creating moments to slow down, breathe deeply, and reconnect
                with yourself.
              </p>
            </div>

            <div className="journal-card bg-white p-4 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300 shadow border-b-4 border-[#7d8770]">
              <div className="flex gap-5 items-center px-5">
                <Flower2 size={60} strokeWidth={1.2} />
                <h4>Healing</h4>
              </div>
              <p>
                Supporting personal growth through intentional rituals and
                mindful practices.
              </p>
            </div>

            <div className="journal-card bg-white p-2 rounded-2xl hover:-translate-y-2 hover:ease-in-out duration-300 shadow border-b-4 border-[#7d8770]">
              <div className="flex gap-5 items-center px-5">
                <Feather size={60} strokeWidth={1.2} />
                <h4>Grace</h4>
              </div>

              <p>
                Encouraging a softer, kinder relationship with yourself and your
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION START */}
      <section className="section">
        <div className="container-custom">
          <div className="story-grid">
            <FadeUp>
              <div className="story-img ">
                <img src={missionImg} loading="lazy" className="rounded-xl" />
              </div>
            </FadeUp>

            <div className="story-text">
              <div className="small-heading">A Community of Healing</div>
              <FadeUp>
                <h2 className="text-4xl md:text-6xl">
                  Healing is not meant to be walked alone.
                </h2>
              </FadeUp>
              <FadeUp>
                <div className="line"></div>

                <p>
                  In a world that celebrates constant productivity, many people
                  silently carry stress, anxiety, and emotional burdens. At
                  Essentia Gratia, we are committed to creating a supportive
                  community where individuals feel seen, understood, and
                  encouraged. Whether you are seeking calm after a demanding day
                  or beginning a new chapter of healing, our mission is to
                  create tools that support and uplift you.
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
      {/* COMMUNITY SECTION END */}
    </>
  );
}

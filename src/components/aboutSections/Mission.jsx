import FadeUp from "../../utils/fadeUp";
import missionImg from "../../assets/images/create-imgs/create-3.jfif";

export default function Mission() {
  return (
    <>
      <section className="section-3 ">
        <div className="container-custom">
          <div className="small-heading center">Our Mission</div>

          <h2 className="main-title center">More than a brand. A sanctuary.</h2>
          <div className="story-grid">
            <div className="story-text bg-white p-20 rounded shadow">
              <div className="small-heading">Our Mission</div>
              <FadeUp>
                <h2 className="text-5xl">More than a brand. A sanctuary.</h2>
              </FadeUp>
              <FadeUp>
                <div className="line"></div>

                <p>
                  Essentia Gratia invites you to pause, reconnect, and nourish
                  your well-being. Through hand-poured soy candles, mindfulness
                  journals, affirmation cards, and intentional rituals, we
                  create tools that encourage stillness and self-connection.
                  Because self-care is not a luxury. It is a necessity.
                </p>

                {/* <a href="#" className="btn-sage">
                       {" "}
                       Discover The Philosophy{" "}
                     </a> */}
              </FadeUp>
            </div>

            <FadeUp>
              <div className="story-img ">
                <img src={missionImg} loading="lazy" className="rounded-xl" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

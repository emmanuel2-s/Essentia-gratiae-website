import img1 from "../../assets/images/lucid-origin_A_peaceful_circle_of_women_gathered_for_a_mindfulness_and_self-care_workshop_jou-0.jpg";
import img2 from "../../assets/images/hero-imgs/hero-1.avif";
import img3 from "../../assets/images/hero-imgs/Luxury_amber_candle_on_soft_cream_linen_fabric_with_label_name_Aster_warm_mornin-0.jpg";
import FadeUp from "../../utils/fadeUp";
import FlyIn from "../../utils/flyIn";

function Experience() {
  return (
    <>
      <section className="section-3">
        <div className="container-custom ">
          <FadeUp>
            <div className="small-heading center">Our Experience</div>
            <div className="line mx-auto"></div>

            <p className="center">
              We believe self-care extends beyond what you purchase. Through
              monthly market experiences and immersive candle-making workshops,
              we create opportunities for connection, creativity, and meaningful
              reflection. These moments are designed to help you slow down,
              express yourself, and share space with others on similar journeys.
            </p>
          </FadeUp>

          <div className="journal-grid">
            <FlyIn direction="left">
              <div className="journal-card hover:-translate-y-2 hover:ease-in-out duration-300 shadow">
                <img src={img1} className="rounded" />

                {/* <h4>Still</h4>
              <p>
                Creating moments to slow down, breathe deeply, and reconnect
                with yourself.
              </p> */}
              </div>
            </FlyIn>
            <FlyIn direction="right">
              <div className="journal-card hover:-translate-y-2 hover:ease-in-out duration-300 shadow">
                <img src={img2} alt="" className="rounded" />
                {/* <h4>Healing</h4>
              <p>
                Supporting personal growth through intentional rituals and
                mindful practices.
              </p> */}
              </div>
            </FlyIn>
            <FlyIn direction="right">
              <div className="journal-card hover:-translate-y-2 hover:ease-in-out duration-300 shadow">
                <img
                  src={img3}
                  alt="Luxury_amber_candle_on_soft_cream_linen_fabric_with_label_name_Aster_warm_mornin-0.jpg"
                  className="rounded"
                />

                {/* <h4>Grace</h4>
              <p>
                Encouraging a softer, kinder relationship with yourself and your
                journey.
              </p> */}
              </div>
            </FlyIn>
          </div>
        </div>
        <div className="mt-5">
          <FadeUp>
            <div className="bg-white rounded shadow my-4 center w-75 mx-auto">
              <p className="p-4 ">
                ‘‘ You deserve moments of peace. You deserve healing. And most
                importantly, you deserve to prioritise yourself without guilt.ˮ
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
      {/* <section className="section-3"></section> */}
    </>
  );
}

export default Experience;

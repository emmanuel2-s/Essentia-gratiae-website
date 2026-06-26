import img1 from "../assets/images/insta-img1.jfif";
import img2 from "../assets/images/insta-img2.jfif";
import img3 from "../assets/images/insta-img3.jfif";
import img4 from "../assets/images/insta-img4.jfif";
import img5 from "../assets/images/hero-imgs/hero-bg-2.jfif";
import img6 from "../assets/images/hero-imgs/Luxury_amber_candle_on_soft_cream_linen_fabric_with_label_name_Aster_warm_mornin-0.jpg";
import ctaImg from "../assets/images/create-imgs/create-2.jfif";
import "../App.css";
import FlyIn from "../utils/flyIn";
import FadeUp from "../utils/fadeUp";

export default function InstaSection() {
  return (
    <>
      <section>
        <div className="container-custom-insta">
          <div className="insta-link">
            <div className="moments">
              <h5>MOMENTS OF GRACE</h5>
              <h3>
                Follow along <em>@aster.rituals</em>
              </h3>
            </div>

            <a className="view-btn" href="#">
              VIEW ON INSTAGRAM →{" "}
            </a>
          </div>
        </div>
        <FlyIn direction="left">
          <div className="insta-grid">
            <img src={img1} loading="lazy" />
            <img src={img2} loading="lazy" />
            <img src={img3} loading="lazy" />
            <img src={img4} loading="lazy" />
            <img src={img5} loading="lazy" />
            <img src={img6} loading="lazy" />
          </div>
        </FlyIn>
      </section>

      <section className="cta">
        <img src={ctaImg} loading="lazy" />
        <div className="cta-overlay"></div>

        <FadeUp>
          <div className="cta-content">
            <h2>Return to yourself.</h2>
            <p className="pb-10 text-xl italic">Your rituals begin here.</p>

            <a href="#" className="btn-custom text-decoration-none">
              Begin Your Ritual
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

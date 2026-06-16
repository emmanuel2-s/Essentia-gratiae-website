import FadeUp from "../../utils/fadeUp";
import beyondImg from "../../assets/images/hero-imgs/lucid-origin_Elegant_woman_lighting_candle_sage_green_and_cream_color_palette_luxury_wellness-0.jpg";

function BeyondProduct() {
  return (
    <>
      {/* COMMUNITY SECTION START */}
      <section className="section">
        <div className="container-custom">
          <div className="story-grid">
            <FadeUp>
              <div className="story-img ">
                <img src={beyondImg} />
              </div>
            </FadeUp>

            <div className="story-text">
              <div className="small-heading">Beyond the Products</div>
              {/* <FadeUp>
                <h2 className="">Healing is not meant to be walked alone.</h2>
              </FadeUp> */}
              <FadeUp>
                <div className="line"></div>

                <p>
                  Beyond our e-commerce store, we are building real connections
                  through monthly market stalls and immersive candle-making
                  workshops—because self-care isn’t just about what you buy;
                  it’s about the experiences you create. These workshops provide
                  a space to unwind, express yourselves, and connect with others
                  on similar paths. You deserve moments of peace. You deserve
                  healing. And most importantly, you deserve to prioritize
                  yourself without guilt. Let Essentia Gratia be a gentle
                  reminder that your well-being matters.
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

export default BeyondProduct;

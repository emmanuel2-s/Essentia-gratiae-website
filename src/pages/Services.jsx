import heroImage from "../assets/images/contact/lucid-origin_Luxury_wellness_studio_interior_with_warm_natural_sunlight_elegant_woman_writing-0.jpg";
import FAQ from "../components/contactSection/Faqs";
import NewsletterSection from "../components/contactSection/NewsLetter";
import Category from "../components/serviceSection/Category";
import FeaturedProducts from "../components/serviceSection/FeaturedProducts";
import Testimoinal from "../components/serviceSection/Testimoinal";
import FadeUp from "../utils/fadeUp";
import FlyIn from "../utils/flyIn";

function Services() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] overflow-hidden bg-cover bg-center">
        <img
          src={heroImage}
          alt="Contact Essentia Gratiae"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[6px] text-amber-400 text-sm">
              Luxury Candles
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white">
              Handmade Candles Crafted For Your Peace
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Discover premium scented candles designed to elevate every moment,
              creating warmth, comfort and unforgettable experiences.
            </p>

            <div className="mt-5 flex justify-center gap-4">
              <button className="btn-custom">Shop Collection</button>

              <button className="btn-custom">Explore More</button>
            </div>
          </div>
        </div>
      </section>

      <Category />
      <FeaturedProducts />

      {/* WHY CHOOSE US */}
      <section className="py-4 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0ff?w=800"
            className="rounded-3xl"
          />

          <div>
            <h2 className="text-5xl font-bold mt-4">Why Choose Our Candles?</h2>

            <div className="space-y-5 mt-4">
              <div>
                <h3 className="font-bold text-xl">100% Natural Soy Wax</h3>
                <p className="text-gray-600">
                  Clean-burning candles made with eco-friendly ingredients.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">Handcrafted</h3>
                <p className="text-gray-600">
                  Each candle is poured by hand with attention to every detail.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">Long Lasting</h3>
                <p className="text-gray-600">
                  Enjoy over 60 hours of luxurious fragrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="py-4 mb-3 bg-black text-white">
        <div className="max-w-7xl mx-auto px-5">
          <FlyIn direction="left">
            <h2 className="text-4xl text-center font-bold mb-5">
              How It Works
            </h2>
          </FlyIn>

          <div className="grid md:grid-cols-3 gap-10">
            <FadeUp>
              <div>
                <span className="text-6xl text-amber-500">01</span>
                <h3 className="mt-4 text-2xl font-bold">Choose</h3>
                <p className="mt-3 text-gray-300">
                  Browse our premium collection.
                </p>
              </div>
            </FadeUp>
            <FadeUp>
              <div>
                <span className="text-6xl text-amber-500">02</span>
                <h3 className="mt-4 text-2xl font-bold">Order</h3>
                <p className="mt-3 text-gray-300">
                  Secure checkout with fast delivery.
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span className="text-6xl text-amber-500">03</span>
                <h3 className="mt-4 text-2xl font-bold">Relax</h3>
                <p className="mt-3 text-gray-300">
                  Enjoy beautiful scents in your home.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}

      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-5">Collections</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FlyIn direction="left">
              <div className="rounded-3xl border p-4 hover:-translate-y-2 hover:ease-in-out duration-300">
                <h3 className="text-3xl font-bold">Classic</h3>
                <p className="text-5xl mt-5">$29</p>

                <ul className="space-y-3 mt-5">
                  <li>✔ Handmade</li>
                  <li>✔ Soy Wax</li>
                  <li>✔ Cotton Wick</li>
                </ul>

                <button className="mt-5 w-full bg-black text-white rounded-full py-3">
                  Buy Now
                </button>
              </div>
            </FlyIn>
            <FlyIn direction="right">
              <div className="rounded-3xl bg-black text-white p-5 scale-105 hover:-translate-y-2 hover:ease-in-out duration-300">
                <h3 className="text-3xl font-bold">Premium</h3>
                <p className="text-5xl mt-5">$45</p>

                <ul className="space-y-3 mt-4">
                  <li>✔ Luxury Jar</li>
                  <li>✔ Essential Oils</li>
                  <li>✔ Gift Box</li>
                </ul>

                <button className="mt-5 w-full bg-amber-500 rounded-full py-3">
                  Buy Now
                </button>
              </div>
            </FlyIn>
            <FlyIn direction="right">
              <div className="rounded-3xl border p-4 hover:-translate-y-2 hover:ease-in-out duration-300">
                <h3 className="text-3xl font-bold">Luxury</h3>
                <p className="text-5xl mt-5">$69</p>

                <ul className="space-y-3 mt-5">
                  <li>✔ Premium Glass</li>
                  <li>✔ Signature Fragrance</li>
                  <li>✔ VIP Packaging</li>
                </ul>

                <button className="mt-5 w-full bg-black text-white rounded-full py-3">
                  Buy Now
                </button>
              </div>
            </FlyIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <Testimoinal />
      <FAQ />
      <NewsletterSection />
    </>
  );
}

export default Services;

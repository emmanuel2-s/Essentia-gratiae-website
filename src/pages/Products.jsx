import ProductCard from "../components/products/ProductCard";
import StillnessImage from "../assets/images/products/lucid-origin_Large_hero_image_of_the_candle_on_white_linen_with_eucalyptus_and_soft_morning_l-0.jpg";
import { candles } from "../utils/Products";

function Products() {
  return (
    <>
      <section className="bg-[#F8F5EE] min-h-screen">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Product Image */}
          <div className="relative">
            <img
              src={StillnessImage}
              alt="Stillness Candle"
              className="w-full h-full object-cover p-4 rounded-3xl"
            />
          </div>

          {/* Product Details */}
          <div className="flex items-center px-8 lg:px-20 py-16">
            <div className="max-w-xl">
              <p className="uppercase tracking-[0.4em] text-[#B89B5E] text-sm">
                Essentia Gratia
              </p>

              <h1 className="font-serif text-6xl text-[#1E3A34] mt-4">
                STILLNESS
              </h1>

              <p className="text-xl text-[#3D3A36] mt-4 italic">
                Quiet the mind. Return to peace.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <p className="text-3xl font-light text-[#1E3A34]">£34.00</p>

                <span className="text-[#6b6b6b]">
                  220g | Approx. 45-Hour Burn Time
                </span>
              </div>

              <p className="mt-8 leading-8 text-[#3D3A36]">
                A graceful blend created for moments of restoration and calm.
                Soft lavender and herbaceous clary sage open the experience,
                while delicate gardenia blooms at the heart, resting upon warm
                cedarwood for a grounding finish.
              </p>

              <p className="mt-6 leading-8 text-[#3D3A36]">
                Designed to transform your space into a sanctuary, Stillness
                invites you to slow down, breathe deeply, and embrace the beauty
                of being present.
              </p>

              <button className="mt-10 bg-[#1E3A34] text-white px-10 py-4 tracking-widest hover:bg-[#142822] transition-all">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* FRAGRANCE NOTES */}
        <section className="py-24 px-8 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl text-center text-[#1E3A34]">
              Fragrance Notes
            </h2>

            <div className="grid md:grid-cols-3 gap-10 mt-16">
              <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-[#7d8770]">
                <p className="uppercase tracking-widest text-[#B89B5E]">Top</p>
                <h3 className="mt-4 text-2xl font-serif">Clary Sage</h3>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-[#7d8770]">
                <p className="uppercase tracking-widest text-[#B89B5E]">
                  Heart
                </p>
                <h3 className="mt-4 text-2xl font-serif">Gardenia</h3>
                <h3 className="mt-2 text-2xl font-serif">Lavender</h3>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-[#7d8770]">
                <p className="uppercase tracking-widest text-[#B89B5E]">Base</p>
                <h3 className="mt-4 text-2xl font-serif">Cedarwood</h3>
              </div>
            </div>
          </div>
        </section>

        {/* MOOD + AFFIRMATION */}
        <section className="bg-[#1E3A34] text-white py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl">Mood</h2>

            <p className="mt-6 text-xl">Spa-like serenity and gentle calm.</p>

            <div className="w-24 h-[1px] bg-[#B89B5E] mx-auto my-12"></div>

            <h2 className="font-serif text-4xl">Daily Affirmation</h2>

            <p className="mt-6 text-2xl italic leading-relaxed">
              "I release what no longer serves me and welcome peace into my
              spirit."
            </p>
          </div>
        </section>

        {/* CANDLE RITUAL */}
        <section className="py-24 px-8 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl text-center text-[#1E3A34]">
              Candle Ritual
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-16">
              <div className="bg-white p-8 shadow-sm rounded-lg">
                Trim wick to ¼ inch before each burn.
              </div>

              <div className="bg-white p-8 shadow-sm rounded-lg">
                Allow the wax to melt evenly across the surface.
              </div>

              <div className="bg-white p-8 shadow-sm rounded-lg">
                Burn for no longer than four hours at a time.
              </div>

              <div className="bg-white p-8 shadow-sm rounded-lg">
                Extinguish with intention and gratitude.
              </div>
            </div>
          </div>
        </section>

        {/* CRAFTED WITH CARE */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl text-center text-[#1E3A34]">
              Crafted With Care
            </h2>

            <div className="grid md:grid-cols-5 gap-6 mt-16">
              <div className="text-center">✓ Natural soy wax blend</div>
              <div className="text-center">✓ Cotton wick</div>
              <div className="text-center">✓ Phthalate-free fragrance oils</div>
              <div className="text-center">✓ Hand-poured in small batches</div>
              <div className="text-center">✓ Vegan & Cruelty-Free</div>
            </div>
          </div>
        </section>

        {/* COMPLETE YOUR RITUAL */}
        <section className="py-24 px-8 bg-[#F8F5EE]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl text-center text-[#1E3A34]">
              Complete Your Ritual
            </h2>

            <div className="grid md:grid-cols-3 gap-10 mt-16">
              {candles.map((candle) => (
                <ProductCard
                  key={candle.title}
                  image={candle.image}
                  title={candle.title}
                  subtitle={candle.subtitle}
                  price={candle.price}
                  link={candle.link}
                />
              ))}
            </div>
          </div>
        </section>
      </section>

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
    </>
  );
}

export default Products;

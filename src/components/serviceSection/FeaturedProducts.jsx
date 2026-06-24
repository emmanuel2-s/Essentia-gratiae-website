import lavenderCandle from "../../assets/images/category/luma-candles.jpg";
import vanillaCandle from "../../assets/images/hero-imgs/lucid-origin_Luxury_amber_candle_on_soft_cream_linen_fabric_warm_morning_sunlight_shallow_dep-0.jpg";
import oceanCandle from "../../assets/images/hero-imgs/Luxury_amber_candle_on_soft_cream_linen_fabric_with_label_name_Aster_warm_mornin-0.jpg";

function FeaturedProducts() {
  const products = [
    {
      name: "Lavender Calm",
      price: "$35",
      image: lavenderCandle,
    },
    {
      name: "Vanilla Bliss",
      price: "$40",
      image: vanillaCandle,
    },
    {
      name: "Ocean Breeze",
      price: "$38",
      image: oceanCandle,
    },
  ];
  return (
    <>
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
              >
                <img
                  src={item.image}
                  loading="loading"
                  className="h-80 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>

                  <p className="mt-3 text-amber-600 font-bold">{item.price}</p>

                  <button className="mt-4 w-full rounded-full bg-black py-3 text-white">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;

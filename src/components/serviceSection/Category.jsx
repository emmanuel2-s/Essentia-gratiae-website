import luxuryCandle from "../../assets/images/category/luma-candles.jpg";
import giftCandle from "../../assets/images/category/candle-gift-set.jpg";
import homeCandle from "../../assets/images/hero-imgs/hero-1.avif";

function Category() {
  const categories = [
    {
      title: "Luxury Candles",
      image: luxuryCandle,
    },
    {
      title: "Gift Sets",
      image: giftCandle,
    },
    {
      title: "Home Fragrance",
      image: homeCandle,
    },
  ];

  return (
    <div>
      <section className="py-5 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold">Browse Categories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-[450px]"
              >
                <img
                  src={item.image}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 duration-500"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-10 left-8">
                  <h3 className="text-3xl text-white font-bold">
                    {item.title}
                  </h3>

                  <a
                    href="/services"
                    className="mt-4 text-white underline animate-bounce"
                  >
                    Shop →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;

import FounderStory from "../components/FounderStory";
import ProductCard from "../components/products/ProductCard";
import { candles } from "../utils/Products";

export default function Testing() {
  return (
    <>
      <FounderStory />
      <section className="py-32 bg-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[0.4em] text-[#B89B5E]">
              Featured Collection
            </p>

            <h2 className="font-serif text-6xl mt-5">Discover Your Ritual</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-20">
            {candles.slice(0, 3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

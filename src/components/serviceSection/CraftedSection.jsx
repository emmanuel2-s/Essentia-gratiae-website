import { Leaf, Flame, HeartHandshake, Package } from "lucide-react";

const items = [
  {
    icon: <Leaf size={45} />,
    title: "Natural Soy Wax",
    text: "Clean-burning soy wax crafted from renewable sources.",
  },
  {
    icon: <Flame size={45} />,
    title: "Cotton Wicks",
    text: "Lead-free cotton wicks for a gentle, even burn.",
  },
  {
    icon: <HeartHandshake size={45} />,
    title: "Hand Poured",
    text: "Every candle is poured in small batches with care.",
  },
  {
    icon: <Package size={45} />,
    title: "Luxury Packaging",
    text: "Beautifully wrapped to elevate every ritual.",
  },
];

export default function Testing() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-[#B89B5E]">
            Crafted With Intention
          </p>

          <h2 className="font-serif text-6xl mt-5 text-[#342D28]">
            Handmade for mindful living.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] bg-[#F8F5EE] shadow p-10 hover:-translate-y-3 duration-500 hover:shadow-2xl"
            >
              <div className="text-[#B89B5E]">{item.icon}</div>

              <h3 className="font-serif text-3xl mt-8">{item.title}</h3>

              <p className="leading-8 mt-5 text-[#6D655E]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

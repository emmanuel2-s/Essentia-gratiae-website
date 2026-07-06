import { Leaf, Heart, Flower2, Sun } from "lucide-react";

const cards = [
  {
    title: "Intentional Living",
    icon: <Flower2 size={45} />,
    text: "We believe in slowing down and embracing beautiful rituals.",
  },

  {
    title: "Clean & Conscious",
    icon: <Leaf size={45} />,
    text: "Natural soy wax and premium fragrance oils in every candle.",
  },

  {
    title: "Made With Grace",
    icon: <Heart size={45} />,
    text: "Every piece is lovingly hand-poured in small batches.",
  },

  {
    title: "Holistic Wellbeing",
    icon: <Sun size={45} />,
    text: "Designed to nourish your mind, body and everyday rituals.",
  },
];

export default function MissionSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[0.45em] text-center text-[#B89B5E]">
          OUR MISSION
        </p>

        <h2 className="font-serif text-center text-[#342D28] text-6xl mt-5">
          Helping You Create Beautiful Rituals
        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-center leading-8 text-[#6E655D]">
          To inspire intentional moments of peace through luxurious candles,
          affirmation cards and holistic wellbeing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FDFBF8] rounded-3xl p-10 shadow hover:-translate-y-3 hover:shadow-xl duration-500 text-center"
            >
              <div className="text-[#B89B5E] flex justify-center">
                {card.icon}
              </div>

              <h3 className="font-serif text-3xl mt-6">{card.title}</h3>

              <p className="mt-5 leading-8 text-[#6E655D]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

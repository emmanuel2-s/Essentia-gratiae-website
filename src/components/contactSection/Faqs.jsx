import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeUp from "../../utils/fadeUp";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 1–3 business days. Delivery times vary depending on your location, and you'll receive tracking information once your order has been dispatched.",
  },
  {
    question: "Do you offer workshops?",
    answer:
      "Yes! We host candle-making, wellness, and mindfulness workshops throughout the year. Keep an eye on our Events page or subscribe to our newsletter for upcoming dates.",
  },
  {
    question: "Can I collaborate with your brand?",
    answer:
      "Absolutely. We love working with creators, wellness practitioners, and like-minded brands. Reach out through our contact form, and we'll be happy to discuss opportunities.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F4EE] py-5">
      <div className="max-w-4xl mx-auto px-5">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-[#7D8770] text-sm">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#2E2A27]">
              We're Here to Help
            </h2>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
              Find answers to some of our most common questions. If you don't
              see what you're looking for, we'd be happy to hear from you.
            </p>
          </div>
        </FadeUp>

        {/* FAQ Items */}
        <div className="space-y-5 py-5">
          {faqs.map((faq, index) => (
            <>
              <FadeUp>
                <div
                  key={index}
                  className="bg-white rounded shadow-sm border border-gray-100 mb-2 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-4 py-4 text-left"
                  >
                    <h3 className="text-2xl font-bold text-[#2E2A27]">
                      {faq.question}
                    </h3>

                    {activeIndex === index ? (
                      <Minus size={20} className="text-[#7D8770]" />
                    ) : (
                      <Plus size={20} className="text-[#7D8770]" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-3 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeUp>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

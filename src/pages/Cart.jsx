import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// import candle from "../assets/images/products/candle.jpg";
// import journal from "../assets/images/products/journal.jpg";

export default function CartPage() {
  return (
    <section className="min-h-screen bg-[#f7f2eb] pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#c5ae86] text-xs">
            Ritual Basket
          </p>

          <h1 className="mt-4 text-6xl text-[#342d28]">Your Cart</h1>

          <p className="mt-6 max-w-xl text-[#6f6358] leading-8">
            Every ritual begins with intention. Review your selected essentials
            before continuing to checkout.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          {/* Cart */}

          <div>
            {/* Product */}

            <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-8 md:flex-row">
                <img
                  src={"candle"}
                  className="h-44 w-44 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-3xl">Serenity Candle</h3>

                  <p className="mt-2 text-[#7b6e63]">Amber • Sage • Vanilla</p>

                  <p className="mt-6 text-2xl text-[#7d8770]">£45</p>

                  <div className="mt-8 flex items-center gap-4">
                    <button className="rounded-full border p-2">
                      <Minus size={16} />
                    </button>

                    <span>1</span>

                    <button className="rounded-full border p-2">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <button>
                    <Trash2 size={20} />
                  </button>

                  <h3 className="text-3xl">£45</h3>
                </div>
              </div>
            </div>

            {/* Second Product */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-8 md:flex-row">
                <img
                  src={"journal"}
                  className="h-44 w-44 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-3xl">Ritual Journal</h3>

                  <p className="mt-2 text-[#7b6e63]">Linen Cover</p>

                  <p className="mt-6 text-2xl text-[#7d8770]">£30</p>

                  <div className="mt-8 flex items-center gap-4">
                    <button className="rounded-full border p-2">
                      <Minus size={16} />
                    </button>

                    <span>2</span>

                    <button className="rounded-full border p-2">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <button>
                    <Trash2 size={20} />
                  </button>

                  <h3 className="text-3xl">£60</h3>
                </div>
              </div>
            </div>

            <Link
              to="/shop"
              className="mt-10 inline-flex items-center gap-3 text-[#7d8770]"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>

          {/* Summary */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-36 rounded-3xl bg-white p-10 shadow">
              <h2 className="text-4xl">Order Summary</h2>

              <div className="mt-10 space-y-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£105</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>£0</span>
                </div>
              </div>

              <div className="my-8 h-px bg-gray-200" />

              <div className="flex justify-between text-3xl">
                <span>Total</span>

                <span className="text-[#7d8770]">£105</span>
              </div>

              <input
                placeholder="Gift Code"
                className="mt-10 w-full rounded-full border border-[#ddd] p-4 outline-none"
              />

              <button className="mt-5 w-full rounded-full bg-[#7d8770] py-4 text-white transition hover:bg-[#6d7564]">
                Apply Code
              </button>

              <button className="mt-5 w-full rounded-full bg-[#342d28] py-5 text-white text-lg transition hover:bg-black">
                Secure Checkout
              </button>

              <div className="mt-8 text-center text-sm text-[#8c7f74]">
                Secure payments with Visa • Mastercard • Stripe
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

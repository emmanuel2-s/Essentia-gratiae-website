import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../components/hooks/useCart";

export default function CartPage() {
  const {
    cart,
    removeItem,
    increaseQty,
    decreaseQty,
    subtotal,
    shipping,
    total,
  } = useCart();

  // Empty Cart
  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-[#f7f2eb] pt-40 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center"
        >
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg">
            <ShoppingBag size={45} className="text-[#7d8770]" />
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-[#342d28]">
            Your Ritual Basket Awaits
          </h1>

          <p className="mt-6 leading-8 text-[#6f6358]">
            It looks like your basket is still empty. Explore our thoughtfully
            crafted rituals and discover products designed to bring calm,
            balance, and beauty into your everyday life.
          </p>

          <Link
            to="/service"
            className="mt-10 inline-flex rounded-full bg-[#7d8770] px-10 py-4 text-white transition hover:bg-[#697260]"
          >
            Begin Your Ritual
          </Link>
        </motion.div>
      </section>
    );
  }

  // Cart has items
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
          <p className="text-xs uppercase tracking-[0.4em] text-[#c5ae86]">
            Ritual Basket
          </p>

          <h1 className="mt-4 font-serif text-6xl text-[#342d28]">Your Cart</h1>

          <p className="mt-6 max-w-xl leading-8 text-[#6f6358]">
            Every ritual begins with intention. Review your selected essentials
            before continuing to checkout.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          {/* Left Side */}

          <div>
            {cart.map((item) => (
              <motion.div
                key={item?.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-8 rounded-3xl bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-8 md:flex-row">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="h-44 w-44 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-serif text-3xl">{item?.name}</h3>

                    <p className="mt-2 text-[#7b6e63]">
                      Amber • Sage • Vanilla
                    </p>

                    <p className="mt-6 text-2xl text-[#7d8770]">
                      £{item?.price}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <button
                        onClick={() => decreaseQty(item?.id)}
                        className="rounded-full border p-2"
                      >
                        <Minus size={16} />
                      </button>

                      <span>{item?.quantity}</span>

                      <button
                        onClick={() => increaseQty(item?.id)}
                        className="rounded-full border p-2"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <button onClick={() => removeItem(item?.id)}>
                      <Trash2 size={20} />
                    </button>

                    <h3 className="text-3xl font-serif">
                      £{(item?.price * item?.quantity).toFixed(2)}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}

            <Link
              to="/service"
              className="mt-10 inline-flex items-center gap-3 text-[#7d8770] hover:text-[#5e6756]"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-36 rounded-3xl bg-white p-10 shadow-lg">
              <h2 className="font-serif text-4xl">Order Summary</h2>

              <div className="mt-10 space-y-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>£0.00</span>
                </div>
              </div>

              <div className="my-8 h-px bg-gray-200" />

              <div className="flex justify-between font-serif text-3xl">
                <span>Total</span>

                <span className="text-[#7d8770]">£{total.toFixed(2)}</span>
              </div>

              <input
                type="text"
                placeholder="Gift Code"
                className="mt-10 w-full rounded-full border border-gray-300 p-4 outline-none focus:border-[#7d8770]"
              />

              <button className="mt-5 w-full rounded-full bg-[#7d8770] py-4 text-white transition hover:bg-[#697260]">
                Apply Code
              </button>

              <button className="mt-5 w-full rounded-full bg-[#342d28] py-5 text-lg text-white transition hover:bg-black">
                Secure Checkout
              </button>

              <p className="mt-8 text-center text-sm text-[#8c7f74]">
                Secure payments with Visa • Mastercard • Stripe
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

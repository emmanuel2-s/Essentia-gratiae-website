import { useState } from "react";
import newsletterImage from "../../assets/images/contact/lucid-origin_Luxury_wellness_flat_lay_with_elegant_candles_dried_flowers_ceramic_tea_cup_open-0.jpg";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // Replace with EmailJS, Mailchimp, Formspree, etc.
    alert(`Thank you for subscribing, ${email}!`);

    setEmail("");
  };

  return (
    <section className="relative py-5 overflow-hidden">
      {/* Background Image */}
      <img
        src={newsletterImage}
        alt="Newsletter"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <p className="uppercase tracking-[0.35em] text-[#CBB48A] text-sm mb-4">
          Stay Connected
        </p>

        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Join Our Wellness Community
        </h2>

        <p className="mt-6 text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Be the first to discover new collections, mindful rituals, exclusive
          workshops, and inspiration for intentional living— delivered gently to
          your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 max-w-lg px-4 py-3 rounded bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CBB48A]"
          />

          <button
            type="submit"
            className="px-4 py-3 rounded bg-[#7D8770] hover:bg-[#69745F] transition duration-300 font-medium"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-300">
          We respect your privacy. No spam, just thoughtful inspiration.
        </p>
      </div>
    </section>
  );
}

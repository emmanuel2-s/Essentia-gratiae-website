import { motion } from "framer-motion";
import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import heroImage from "../assets/images/contact/lucid-origin_Luxury_wellness_studio_interior_with_warm_natural_sunlight_elegant_woman_writing-0.jpg";
import newsletterImage from "../assets/images/contact/lucid-origin_Luxury_wellness_flat_lay_with_elegant_candles_dried_flowers_ceramic_tea_cup_open-0.jpg";

import FAQ from "../components/contactSection/Faqs";
import NewsletterSection from "../components/contactSection/NewsLetter";
import FlyIn from "../utils/flyIn";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
export default function ContactUs() {
  const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY",
  //     );

  //     alert("Message sent successfully!");
  //     e.target.reset();
  //   };

  return (
    <>
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Essentia Gratiae"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white max-w-4xl"
          >
            <p className="uppercase tracking-[0.4em] text-[#E7D8C3] mb-4">
              Let's Talk
            </p>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight">
              We'd Love
              <br />
              To Hear From You
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Whether you have a question, a collaboration idea, or simply wish
              to connect, our door is always open.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8F4EE] py-5">
        <div className="container-custom">
          <div className="story-grid">
            <div className="">
              <h2 className="font-serif text-5xl">
                Let's Start A Conversation
              </h2>
              <h3 className="text-4xl md:text-5xl text-[#2E2A27]">
                Every conversation begins with connection.
              </h3>

              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                Whether you're curious about our products, workshops, wholesale
                opportunities, or simply want to share your experience, we'd be
                honoured to hear from you.
              </p>
            </div>

            <div className="max-w-6xl mx-auto px-6">
              {/* <div className="grid lg:grid-cols-2 gap-16"> */}
              {/* Left */}

              {/* Form */}
              <form
                ref={form}
                onSubmit={"sendEmail"}
                className="bg-white rounded p-4"
              >
                <div>
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Fill out the form and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border-b border-gray-300 py-4 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full border-b border-gray-300 py-4 outline-none"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full border-b border-gray-300 py-4 outline-none"
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full border-b border-gray-300 py-4 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="bg-[#7D8770] text-white px-8 py-4 hover:bg-[#66705d] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className=" py-10 relative overflow-hidden">
        {/* Background Image */}
        <img
          src={newsletterImage}
          loading="lazy"
          alt="Newsletter"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className=" relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <FlyIn direction="left">
            <div className="bg-white p-2 text-center shadow-sm rounded hover:-translate-y-2 hover:ease-in-out duration-300 border-b-4 border-[#7d8770]">
              <div className="flex items-center gap-2 justify-center">
                <MdMarkEmailUnread size={25} />
                <h3 className="text-2xl ">Email</h3>
              </div>
              <p className="mt-4 text-gray-600 capitalize">
                General Inquiries & Support
              </p>

              <p className="mt-4 text-gray-600">info@essentiagratiae.com</p>
            </div>
          </FlyIn>
          <FlyIn direction="left">
            <div className="bg-white p-2 text-center shadow-sm rounded hover:-translate-y-2 hover:ease-in-out duration-300 border-b-4 border-[#7d8770]">
              <div className="flex items-center justify-center gap-2">
                <FaInstagram size={25} />
                <h3 className="text-2xl ">Instagram</h3>
              </div>
              <p className="mt-4 text-gray-600 capitalize">
                for daily inspiration, ritual tips
              </p>
              <p className="mt-4 text-gray-600">@essentiagratia</p>
            </div>
          </FlyIn>
          <FlyIn direction="right">
            <div className="bg-white p-2 text-center shadow-sm rounded hover:-translate-y-2 hover:ease-in-out duration-300 border-b-4 border-[#7d8770]">
              <div className="flex items-center gap-2 justify-center">
                <FaWhatsapp size={25} />
                <h3 className="text-2xl ">WhatsApp</h3>
              </div>
              <p className="mt-4 text-gray-600 capitalize">
                General Inquiries & Support
              </p>
              <p className="mt-4 text-gray-600">+44 7939 437939</p>
            </div>
          </FlyIn>
        </div>
      </section>
      <FAQ />
      <NewsletterSection />

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

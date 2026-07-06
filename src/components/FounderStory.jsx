import { motion } from "framer-motion";
import founder from "../assets/images/story-img.jfif";

export default function FounderStory() {
  return (
    <section className="bg-[#F8F5EE] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={founder}
              className="rounded-[35px] shadow-2xl w-full h-[700px] object-cover"
            />
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.45em] text-[#B89B5E]">
              A Letter From Our Founder
            </p>

            <h2 className="font-serif text-6xl mt-5 text-[#342D28]">
              Grace begins
              <br />
              with stillness.
            </h2>

            <div className="w-24 h-[2px] bg-[#C5AE86] my-10"></div>

            <p className="leading-9 text-[#655C54]">
              ASTER was born during a season when life felt overwhelmingly busy.
              Like many women balancing family, work, and personal growth, I
              found myself longing for moments that felt peaceful again.
            </p>

            <p className="leading-9 mt-8 text-[#655C54]">
              Lighting a candle became more than a routine. It became a ritual—a
              gentle reminder to pause, breathe deeply, and reconnect with
              myself.
            </p>

            <p className="leading-9 mt-8 text-[#655C54]">
              Every candle, journal, and ritual created by ASTER carries that
              same intention: to help you return home to yourself.
            </p>

            <div className="mt-12">
              <h4 className="font-serif text-4xl">Emma Grace</h4>

              <p className="uppercase tracking-[0.3em] text-sm mt-2 text-[#B89B5E]">
                Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

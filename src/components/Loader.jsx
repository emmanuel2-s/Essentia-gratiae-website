import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed inset-0 bg-[#1E3A34] z-[99999] flex justify-center items-center"
    >
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>{" "}
    </motion.div>
  );
}

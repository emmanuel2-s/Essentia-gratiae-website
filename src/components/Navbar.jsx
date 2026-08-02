import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo/aster-logo-removebg-preview.png";
import useCart from "../components/hooks/useCart";
import { motion } from "framer-motion";

export default function Navbar({ scrolled }) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hideMobileNav = () => {
    setNav(false);
  };

  const { cart } = useCart();

  const count = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 bg-black/30 backdrop-blur-md  transition-all duration-500 ${
          scrolled ? "top-0" : "top:0 lg:top-12"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 h-24">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-white uppercase tracking-widest hover:text-gray-300 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white uppercase tracking-widest hover:text-gray-300 transition"
            >
              About
            </Link>

            <Link
              to="/service"
              className="text-white uppercase tracking-widest hover:text-gray-300 transition"
            >
              Services
            </Link>

            <Link
              to="/products"
              className="text-white uppercase tracking-widest hover:text-gray-300 transition"
            >
              Products
            </Link>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/contactus"
              className="border border-white text-white px-6 py-2 uppercase tracking-widest hover:bg-white hover:text-black transition duration-300"
            >
              Let's Talk
            </Link>
            <motion.span
              key={count}
              initial={{
                scale: 0.5,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Link
                to="/cart"
                className="relative text-2xl text-white hover:scale-110 transition"
              >
                👜
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#7d8770] text-xs text-white">
                  {count}
                </span>
              </Link>
            </motion.span>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="block md:hidden text-white cursor-pointer z-50"
            onClick={handleNav}
          >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 ${
          nav ? "left-0" : "-left-full"
        } w-72 h-screen bg-black/30 backdrop-blur-md  transition-all duration-500 ease-in-out z-40 md:hidden`}
      >
        {/* Logo */}
        <div className="flex justify-center py-8 border-b border-gray-200">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Links */}
        <div className="flex flex-col p-8 space-y-6 text-white uppercase tracking-widest">
          <Link
            to="/"
            onClick={hideMobileNav}
            className="border-b border-gray-200 pb-3"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={hideMobileNav}
            className="border-b border-gray-200 pb-3"
          >
            About
          </Link>

          <Link
            to="/service"
            onClick={hideMobileNav}
            className="border-b border-gray-200 pb-3"
          >
            Services
          </Link>

          <Link
            to="/rituals"
            onClick={hideMobileNav}
            className="border-b border-gray-200 pb-3"
          >
            Rituals
          </Link>

          <Link
            to="/contactus"
            onClick={hideMobileNav}
            className="border-b border-gray-200 pb-3"
          >
            Let's Talk
          </Link>

          <Link
            to="/cart"
            onClick={hideMobileNav}
            className=" relative text-2xl border-b border-gray-200 pb-3"
          >
            👜 Cart
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#7d8770] text-xs text-white">
              {count}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

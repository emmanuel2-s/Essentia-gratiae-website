import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo/aster-logo-removebg-preview.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hideMobileNav = () => {
    setNav(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
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
              to="/rituals"
              className="text-white uppercase tracking-widest hover:text-gray-300 transition"
            >
              Rituals
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

            <Link
              to="/cart"
              className="text-2xl text-white hover:scale-110 transition"
            >
              👜
            </Link>
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
        } w-72 h-screen bg-black transition-all duration-500 ease-in-out z-40 md:hidden`}
      >
        {/* Logo */}
        <div className="flex justify-center py-8 border-b border-gray-700">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Links */}
        <div className="flex flex-col p-8 space-y-6 text-white uppercase tracking-widest">
          <Link to="/" onClick={hideMobileNav}>
            Home
          </Link>

          <Link to="/about" onClick={hideMobileNav}>
            About
          </Link>

          <Link to="/service" onClick={hideMobileNav}>
            Services
          </Link>

          <Link to="/rituals" onClick={hideMobileNav}>
            Rituals
          </Link>

          <Link to="/contactus" onClick={hideMobileNav}>
            Let's Talk
          </Link>

          <Link to="/cart" onClick={hideMobileNav} className="text-2xl">
            👜 Cart
          </Link>
        </div>
      </div>
    </>
  );
}

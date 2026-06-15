// import React from 'react'
import "../App.css";
import "../index.css";
import logo from "../assets/logo/logo3.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar-custom">
        <div class="logo">
          <img src={logo} alt="logo" />
        </div>

        <div class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Rituals</Link>
        </div>

        <div class="nav-links">
          <Link to="/">Let's Talk</Link>
          <Link to="/" className="text-xl">
            👜
          </Link>
        </div>
      </nav>
    </div>
  );
}

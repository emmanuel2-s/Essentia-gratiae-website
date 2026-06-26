// import React from 'react'

import { Link } from "react-router-dom";

export default function ProductCard({ image, title, subtitle, price, link }) {
  return (
    <Link
      to={link}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-serif text-3xl text-[#1E3A34]">{title}</h3>

        <p className="mt-3 text-gray-500 italic">{subtitle}</p>

        <div className="flex items-center justify-between mt-8">
          <span className="text-xl font-light text-[#1E3A34]">{price}</span>

          <span className="uppercase tracking-[0.2em] text-sm text-[#B89B5E] group-hover:translate-x-2 transition">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}

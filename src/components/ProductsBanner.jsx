import React from "react";
import trimmer from "../assets/images/3.png"; // chỉnh đúng đường dẫn

export default function ProductsBanner() {
  return (
    <section className="relative h-[450px] flex items-center justify-center bg-[#071c1f] overflow-hidden">
      {/* Background image */}
      <img
        src={trimmer}
        alt="Trimmer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay text */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-[#ffb400] text-[17px] font-semibold mb-4 uppercase tracking-wide">
          Versatile. Powerful. Perfect.
        </p>
        <h1 className="text-6xl font-bold mb-6">ABC LC991 Trimmer</h1>
       <a href="#" className="relative group inline-flex items-center justify-center h-[60px] w-[155px] overflow-hidden bg-[#ffb400] border-1 border-transparent hover:border-black transition-all duration-300">
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="relative z-10 font-semibold text-white group-hover:text-black transition-colors duration-300">
            View More
            </span>
        </a> 
      </div>
    </section>
  );
}

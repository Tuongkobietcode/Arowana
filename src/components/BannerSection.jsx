import React from "react";
import justStartingLeft from "../assets/images/10.png";
import justStartingRight from "../assets/images/11.webp";


const BannerSection = () => {
  return (
     <div className="flex justify-center gap-8 bg-[#f2f6f7] ">
      {/* Card 1 */}
      <div className="relative w-[590px] h-[410px]">
        <img
          src={justStartingLeft}
          alt="Just Starting Left"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start py-10">
          <p className="text-black text-base mb-2">Grow it</p>
          <h2 className="text-black text-4xl font-bold mb-6 leading-tight">
            Just <br /> Starting?
          </h2>
          <a href="#" className="relative group inline-flex items-center justify-center h-[60px] w-[155px] overflow-hidden bg-[#ffb400] border-1 border-transparent hover:border-black transition-all duration-300">
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="relative z-10 font-semibold text-white group-hover:text-black transition-colors duration-300">
            Shop Now
            </span>
          </a>
        </div>
      </div>
      {/* Card 2 */}
      <div className="relative w-[590px] h-[410px]">
        <img
          src={justStartingRight}
          alt="Just Starting Right"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end px-10 text-right">
          <p className="text-black text-base mb-2">Grow it</p>
          <h2 className="text-black text-4xl font-bold mb-6 leading-tight">
            Just <br /> Starting?
          </h2>
          <a href="#" className="relative group inline-flex items-center justify-center h-[60px] w-[155px] overflow-hidden bg-yellow-500 border-1 border-transparent hover:border-black transition-all duration-300">
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="relative z-10 font-semibold text-white group-hover:text-black transition-colors duration-300">
            Shop Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default BannerSection;

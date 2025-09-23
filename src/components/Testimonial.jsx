import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";

const text = [
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates consequuntur obcaecati nisi similique ipsum molestiae sit sequi quam odit odio."`,
    author: "Liam Mason",
  },
  {
    text: `"Quisquam doloremque perspiciatis alias omnis adipisci corrupti non voluptate libero pariatur numquam saepe, harum vel animi laborum."`,
    author: "Sarah Johnson",
  },
  {
    text: `"Excepturi, molestias! Labore, itaque? Dolores deserunt quibusdam officia voluptates molestiae."`,
    author: "Michael Smith",
  },
];

const TextCarousel = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevEl && nextEl) {
      swiperRef.current.params.navigation = {
        ...swiperRef.current.params.navigation,
        prevEl,
        nextEl,
      };
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevEl, nextEl]);

  return (
    <div className="relative max-w-6xl mx-auto group">
      {/* Prev button */}
      <button
        ref={(el) => setPrevEl(el)}
        className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white border-1 border-gray-100 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#ffb400]
        opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <ChevronLeft className="w-7 h-7 text-black" />
      </button>
      {/* Nút Next */}
      <button
        ref={(el) => setNextEl(el)}
        className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white border-1 border-gray-100 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#ffb400]
        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <ChevronRight className="w-7 h-7 text-gray-800" />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        slidesPerView={1}
        loop
      >
        {text.map((item, idx) => (
          <SwiperSlide key={idx} className="!min-h-0">
            <div className="text-center px-5 py-5">
              <span className="text-[#ffb400] text-7xl mb-4 inline-block">❞</span>
              <p className="text-3xl text-gray-800 font-serif">{item.text}</p>
              <p className="text-xl mt-6 font-semibold text-gray-900">__ {item.author} __</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default TextCarousel;

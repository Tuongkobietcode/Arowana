import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import product1 from "../assets/productImages/1.webp";
import product2 from "../assets/productImages/2.webp";
import product3 from "../assets/productImages/3.webp";
import product4 from "../assets/productImages/4.webp";
import product5 from "../assets/productImages/5.webp";
import product6 from "../assets/productImages/6.webp";
import product7 from "../assets/productImages/7.webp";
import product8 from "../assets/productImages/8.webp";

const products = [
  { id: 1, name: "H. c d product", price: 39, oldPrice: 60, img: product1, discount: "-35%" },
  { id: 2, name: "F. v w s product", price: 55, oldPrice: 75, img: product2, discount: "-27%" },
  { id: 3, name: "D. s o product", price: 33, oldPrice: 59, img: product3, soldOut: true },
  { id: 4, name: "C. v product", price: 70, oldPrice: 85, img: product4, discount: "-18%" },
  { id: 5, name: "A. n/s product title", price: 42, oldPrice: 60, img: product5, discount:"-15%" },
  { id: 6, name: "M. Product Media", price: 49, oldPrice: 70, img: product6, discount:"-15%" },
  { id: 7, name: "O. v product", price: 30, oldPrice: 55, img: product7, discount:"-18%" },
  { id: 8, name: "P. s o product", price: 65, oldPrice: 90, img: product8, soldOut: true },
];

const ProductCarousel2 = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const swiperRef = useRef(null);

  // when swiper instance and both nav elements exist, wire navigation
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (prevEl && nextEl) {
      // assign elements
      swiper.params.navigation = {
        ...swiper.params.navigation,
        prevEl,
        nextEl,
      };
      // re-init navigation to ensure binding
      // destroy first if exists to avoid duplicates
      try {
        if (swiper.navigation && swiper.navigation.destroy) swiper.navigation.destroy();
      } catch (e) {
        // ignore
      }
      try {
        swiper.navigation.init();
        swiper.navigation.update();
      } catch (e) {
        // ignore
      }
    }
    // rerun when activeTab changes too (Swiper may be re-created)
  }, [prevEl, nextEl]);

  return (
    <section className="py-25 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tiêu đề */}
        <h2 className="text-[45px] font-semibold text-black">Grooming Tools</h2>
        <p className="text-xl font-serif text-black mt-2">
          Choose your best grooming tools from the new collection.
        </p>

        {/* Carousel */}
        <div className="relative mt-[20px] group">
          

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Autoplay]}
            spaceBetween={5}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="relative overflow-hidden border-2 border-gray-100 hover:shadow-xl transition h-[400px] bg-white">
                  {/* Badge */}
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-[#ffb400] text-white text-xs font-bold px-2 py-1">
                      {product.discount}
                    </span>
                  )}
                  {product.soldOut && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1">
                      SOLDOUT
                    </span>
                  )}

                  {/* Ảnh */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-80 w-[270px] mx-auto object-contain"
                  />

                  {/* Nội dung */}
                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="font-semibold text-gray-800 mt">{product.name}</h3>
                    <div className="">
                      <span className="text-[#ffb400] font-bold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-[#ffb400] line-through ml-2">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Nút Prev */}
          <button
            ref={(el) => setPrevEl(el)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white border-1 border-gray-100 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#ffb400]
            opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            <ChevronLeft className="w-7 h-7 text-black" />
          </button>

          {/* Nút Next */}
          <button
            ref={(el) => setNextEl(el)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white border-1 border-gray-100 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#ffb400]
            opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            <ChevronRight className="w-7 h-7 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel2;

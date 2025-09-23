import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css';
import productTonerImage1 from '../assets/images/11_600x.webp';
import productTonerImage2 from '../assets/images/1-1_600x.webp';

// 5. Tạo mảng dữ liệu cho các slide
const slideData = [
  {
    subtitle: 'Welcome to our shop',
    title: 'Explore Top Brand Face Toner!',
    description: 'Predictive analytics is drastically changing the real estate industry. in the past, providing data for quick',
    image: productTonerImage1,
    alt: 'Makeup Remover with Orange',
    reverse: false
  },
  {
    subtitle: 'Natural & Organic',
    title: 'Moisturizing & Restorative Toner',
    description: 'Our new Raspberry + Mint toner helps to restore skin balance and provides deep hydration.',
    image: productTonerImage2,
    alt: 'Face Toner with Raspberry and Mint',
    reverse: true
  }
];

const HeroSlider = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    console.log(isHovered);
  return (
    <section className="hero-slider">
      <Swiper
        // 6. Kích hoạt các module Navigation và Pagination
        modules={[Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
      >
        {/* 7. Dùng map() để tự động tạo các slide từ mảng dữ liệu */}
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`hero-container  ${
              slide.reverse ? "flex-row-reverse" : ""}`}>
              <div className="hero-content">
                <p className="hero-subtitle slide-animated delay-1">{slide.subtitle}</p>
                <h1 className="hero-title slide-animated delay-2">{slide.title}</h1>
                <p className="hero-description slide-animated delay-3">{slide.description}</p>
                <a href="#" className="relative group inline-flex items-center justify-center h-[60px] w-[155px] overflow-hidden bg-[#ffb400] border-1 border-transparent hover:border-black transition-all duration-300 slide-animated delay-4">
                    <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    <span className="relative z-10 font-semibold text-white group-hover:text-black transition-colors duration-300">
                        Shop Now
                    </span>
                </a>
              </div>
              <div className="hero-image-wrapper">
                <img src={slide.image} alt={slide.alt} className="hero-product-image animate-orbit" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 8. Tạo các nút điều hướng tùy chỉnh */}
      <div className="swiper-button-prev-custom"></div>
      <div className="swiper-button-next-custom"></div>
    </section>
  );
};

export default HeroSlider;
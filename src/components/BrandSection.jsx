import React from "react";

// Logo mẫu (bạn thay bằng ảnh trong /assets/images của bạn)
import logo1 from "../assets/brandlogo/1_medium.png";
import logo2 from "../assets/brandlogo/2_medium.png";
import logo3 from "../assets/brandlogo/3_f12ee468-0803-421a-ae79-b7ff40f85b68_medium.png";
import logo4 from "../assets/brandlogo/4_134x.png";
import logo5 from "../assets/brandlogo/5_134x.png";

const BrandSection = () => {
  const brands = [
    { src: logo1, alt: "Brand 1" },
    { src: logo2, alt: "Brand 2" },
    { src: logo3, alt: "Brand 3" },
    { src: logo4, alt: "Brand 4" },
    { src: logo5, alt: "Brand 5" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-20 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-110 hover:opacity-100 opacity-60"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

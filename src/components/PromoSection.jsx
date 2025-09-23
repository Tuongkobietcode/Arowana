import React from "react";
import img1 from "../assets/images/1_0538b377-b5b5-484d-babd-f60d6cf5780a_300x.jpg";
import img2 from "../assets/images/2_71f6208e-96d4-4a4c-8e76-fcca0573d817_300x.jpg";

const PromoSection = () => {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto flex justify-center gap-7 px-6">
        {/* Card 1 */}
        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src={img1}
            alt="Beard Oil"
            className="w-[580px] h-[340px]  object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
          />
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src={img2}
            alt="Beard Oil"
            className="w-[580px] h-[340px]  object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

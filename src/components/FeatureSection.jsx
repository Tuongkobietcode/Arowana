import React from 'react';
import beardOilImage from '../assets/images/6_570x.webp';

const FeatureSection = () => {
  return (
    <section className="py-30 px-5 bg-white">
      <div className="container mx-auto px-40 flex flex-col md:flex-row items-center gap-8">
        {/* Cột nội dung */}
        <div className="md:w-1/2">
          <p className="font-semibold">Provide the best</p>
          <h2 className="text-4xl font-bold my-4">Beard Oil For You</h2>
          <p className="text-black leading-7 mb-8">
            We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that...
            <br /><br />
            Some of our customer say’s that they trust us and buy our product without any hasitation because they belive us and always happy.
          </p>
          <a href="#" className="relative group inline-flex items-center justify-center h-[60px] w-[155px] overflow-hidden bg-[#ffb400] border-1 border-transparent hover:border-black transition-all duration-300">
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="relative z-10 font-semibold text-white group-hover:text-black transition-colors duration-300">
            View More
            </span>
          </a>
        </div>
        {/* Cột hình ảnh */}
        <div className="md:w-1/2">
          <img src={beardOilImage} alt="Beard Oil Kit" className="" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
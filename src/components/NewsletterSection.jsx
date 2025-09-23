import React from "react";
import bgPattern from "../assets/images/61769.jpg"; // đổi path cho đúng

const NewsletterSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background pattern */}
      <img
        src={bgPattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-4">
          We make your inbox better
        </h2>

        {/* Description */}
        <p className="text-black mb-8">
          Sign up to our newsletter to receive grooming tips, style inspiration, <br />
          exclusive access to pre-launch product pricing and more.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center max-w-4xl w-full">
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full px-6 py-4 border-2 border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#ffb400]"
          />
          <a href="#" className="relative group inline-flex items-center justify-center h-[60px] w-[155px] overflow-hidden bg-[#ffb400] border-1 border-transparent hover:border-black transition-all duration-300">
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="relative z-10 font-semibold text-white group-hover:text-black transition-colors duration-300">
            Subscribe
            </span>
          </a>
        </form>
      </div>
    </section>
  );
}
export default NewsletterSection;
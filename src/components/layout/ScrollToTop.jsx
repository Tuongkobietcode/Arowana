import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // icon mũi tên lên

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-18 right-12 p-3 shadow-2xl bg-[#f2f6f7] hover:bg-[#ffb400] text-black transition-all duration-300 transform rotate-45"
        >
          <ChevronUp className="w-4 h-4 transform -rotate-45" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton

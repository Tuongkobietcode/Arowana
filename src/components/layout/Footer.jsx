import {
  FaTruck,
  FaAward,
  FaUndoAlt,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaVimeo,
} from "react-icons/fa";
import React from "react";

export default function Footer() {
  const features = [
    {
      icon: <FaTruck className="text-5xl text-gray-700" />,
      title: "Free home delivery",
      desc: "Provide free home delivery for all product over $100",
    },
    {
      icon: <FaAward className="text-5xl text-yellow-500" />,
      title: "Quality Products",
      desc: "We ensure the product quality that is our main goal",
    },
    {
      icon: <FaUndoAlt className="text-5xl text-gray-700" />,
      title: "3 Days Return",
      desc: "Return product within 3 days for any product you buy",
    },
    {
      icon: <FaHeadset className="text-5xl text-gray-700" />,
      title: "Online Support",
      desc: "We ensure the product quality that you can trust easily",
    },
  ];

  return (
    <footer className="bg-[#f2f6f7] text-[#071c1f] relative pt-[120px]">
      {/* ===== Features Section ===== */}
      <div className="bg-white grid grid-cols-4 py-10 px-6 w-[95%] mx-auto shadow-xl absolute -top-20 inset-x-0">
        {features.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 px-6 ${
              i !== features.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            {item.icon}
            <div className="text-left">
              <h4 className="font-semibold text-xl">{item.title}</h4>
              <p className="text-md text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Footer Links ===== */}
      <div className="py-12 px-10 gap-x-16 gap-y-14 max-w-8xl mx-auto grid grid-cols-5 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">Arowana</h2>
          <p className="text-base mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> Brooklyn, New York, United
            States
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" /> +0123-456789
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" /> example@example.com
          </div>
          <div className="flex space-x-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaVimeo />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-4 text-2xl text-black">Company</h4>
          <ul className="space-y-5 text-md">
            <li>About</li>
            <li>Blog</li>
            <li>All Products</li>
            <li>Locations Map</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4 text-2xl text-black">Services</h4>
          <ul className="space-y-5 text-md">
            <li>Order tracking</li>
            <li>Wish List</li>
            <li>Login</li>
            <li>My account</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-bold mb-4 text-2xl text-black">Customer Care</h4>
          <ul className="space-y-5 text-md">
            <li>Login</li>
            <li>My account</li>
            <li>Wish List</li>
            <li>Order tracking</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4 text-2xl text-black">Newsletter</h4>
          <p className="text-md mb-4">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none"
            />
            <button className="bg-yellow-500 px-4 py-2 text-white font-bold">
              →
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold">We Accept</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="payments"
              className="h-6 mt-2"
            />
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="bg-[#071c1f] text-white text-sm flex flex-col md:flex-row justify-between items-center py-9 px-6">
        <p>Copyright ©Arowana All Right Reserved.</p>
        <div className="flex space-x-6">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}

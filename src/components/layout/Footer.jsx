import { FaTruck, FaAward, FaUndoAlt, FaHeadset, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaVimeo } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f2f6f7] text-[#071c1f]">
      {/* ===== Features Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <FaTruck className="text-4xl text-gray-700 mb-2" />
          <h4 className="font-semibold">Free home delivery</h4>
          <p className="text-sm">Provide free home delivery for all product over $100</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaAward className="text-4xl text-yellow-500 mb-2" />
          <h4 className="font-semibold">Quality Products</h4>
          <p className="text-sm">We ensure the product quality that is our main goal</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaUndoAlt className="text-4xl text-gray-700 mb-2" />
          <h4 className="font-semibold">3 Days Return</h4>
          <p className="text-sm">Return product within 3 days for any product you buy</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaHeadset className="text-4xl text-gray-700 mb-2" />
          <h4 className="font-semibold">Online Support</h4>
          <p className="text-sm">We ensure the product quality that you can trust easily</p>
        </div>
      </div>

      {/* ===== Footer Links ===== */}
      <div className=" py-12 px-10 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">Arowana</h2>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> Brooklyn, New York, United States
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
          <h4 className="font-semibold mb-4 text-black">Company</h4>
          <ul className="space-y-2 text-sm">
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
          <h4 className="font-semibold mb-4 text-black">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Order tracking</li>
            <li>Wish List</li>
            <li>Login</li>
            <li>My account</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-semibold mb-4 text-black">Customer Care</h4>
          <ul className="space-y-2 text-sm">
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
          <h4 className="font-semibold mb-4 text-black">Newsletter</h4>
          <p className="text-sm mb-4">
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
      <div className="bg-gray-900 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center py-4 px-6">
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

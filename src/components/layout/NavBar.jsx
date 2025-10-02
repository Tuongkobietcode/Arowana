// File: src/components/layout/NavBar.jsx
import React from 'react';
import { IoChevronDownOutline, IoSearchOutline, IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import logo from '../../assets/images/logo_150x@2x.png';


const navLinks = [
  { name: 'Home', href: '#', hasDropdown: "simple" },
  { name: 'Shop', href: '#', hasDropdown: "mega" },
  { name: 'Product', href: '#', hasDropdown: "simple" },
  { name: 'News', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
];

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="scale-50" />

        {/* Navigation Links */}
        <ul className="nav-links flex font-semibold text-[#071c1f]">
          {navLinks.map((link) => (
            <li key={link.name} className="flex items-center hover:text-[#ffb400] transition-colors">
              <a href={link.href} className="flex items-center">
                <span>{link.name}</span>
                {link.hasDropdown && <span className="-ml-[3px]">+</span>}
              </a>
           
        {/* Dropdown: Simple */}
              {link.hasDropdown === "simple" && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {link.name} 1
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {link.name} 2
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {link.name} 3
                    </li>
                  </ul>
                </div>
              )}
        {/* Dropdown: Mega Menu (Shop) */}
              {link.hasDropdown === "mega" && (
                <div className="absolute left-0 mt-2 w-[600px] bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 grid grid-cols-3 gap-6 z-50">
                  <div>
                    <h4 className="font-bold mb-3">Category 1</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 1
                      </li>
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 2
                      </li>
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 3
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Category 2</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 4
                      </li>
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 5
                      </li>
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 6
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Category 3</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 7
                      </li>
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 8
                      </li>
                      <li className="hover:text-[#ffb400] cursor-pointer">
                        Item 9
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul> 
        {/* Right Icons */}
        <div className="navbar-icons">
          <button>
            USD <IoChevronDownOutline style={{ display: 'inline' }} size={14} />
          </button>
          <button>
            <IoSearchOutline size={22} />
          </button>
          <button>
            <IoPersonOutline size={22} />
          </button>
          <button>
            <IoCartOutline size={24} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
// File: src/components/layout/NavBar.jsx
import React from 'react';
import { IoChevronDownOutline, IoSearchOutline, IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import logo from '../../assets/images/logo_150x@2x.png';


const navLinks = [
  { name: 'Home', href: '#', hasDropdown: true },
  { name: 'Shop', href: '#', hasDropdown: true },
  { name: 'Product', href: '#', hasDropdown: true },
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
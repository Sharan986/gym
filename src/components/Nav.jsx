import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Workout-Guide", path: "/WorkoutGuide" },
    { name: "Classes", path: "/Gallery" },
    { name: "Supplement", path: "/Supplement" },
    { name: "Contact", path: "/JoinUs" }
  ];

  return (
    <nav className="bg-[#010101] text-white px-3 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="z-50">
        <img
          src={logo}
          alt="Logo"
          className="w-28  pl-2 md:w-28 hover:scale-105 transition-transform duration-200 cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation: show only for lg and up */}
      <div className="hidden lg:flex items-center space-x-2 lg:space-x-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-base lg:text-4xl cursor-pointer font-One hover:text-[#48D3A3] transition-colors duration-300 relative group px-2"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#48D3A3] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button: sm & md */}
      <div className={`lg:hidden z-50 ${isOpen ? 'hidden' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-1 focus:outline-none hover:text-[#48D3A3] transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="w-8 h-8 md:w-12 md:h-12" />
          ) : (
            <FiMenu className="w-8 h-8 md:w-12 md:h-12" />
          )}
        </button>
      </div>

      {/* Fullscreen Mobile Menu: slide from the right */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#070915] z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out lg:hidden`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 hover:text-[#48D3A3] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <FiX className="w-8 h-8 md:w-12 md:h-12" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-One hover:text-[#48D3A3] transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

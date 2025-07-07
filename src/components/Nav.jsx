import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

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
    <nav className="bg-[#010101] text-white px-6 flex justify-between items-center relative z-50 pb-1">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="w-32" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 font-M">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:text-[#48D3A3] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="focus:outline-none text-4xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#070915] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-start px-6 space-y-6 font-M">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-One hover:text-[#48D3A3] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
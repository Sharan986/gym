import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Classes", href: "#" },
    { name: "Trainers", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <div className="relative">
      {/* Logo in top-left corner */}
      <div className=" top-4 left-4 z-50">
        <img
          src={logo}
          alt="FightSchool Logo"
          className="w-52 md:w-44 hover:scale-105 transition-transform"
        />
      </div>

      {/* Menu button in top-right corner for mobile */}
      <div className=" top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-3 shadow-lg hover:bg-[#48D3A3] transition-colors"
        >
          {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
        </button>
      </div>

      {/* Desktop Navigation - Top-right */}
      <div className="hidden md:flex absolute top-4 right-4 z-50 items-center gap-6 bg-[#070915]/90 backdrop-blur-sm px-6 py-3 shadow-lg">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white hover:text-[#48D3A3] font-medium transition-colors text-5xl"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu - Slides from right */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-[#070915] z-50 shadow-xl md:hidden">
            <div className="p-4 border-b border-[#48D3A3]/30 flex justify-between items-center">
              <img
                src={logo}
                alt="FightSchool Logo"
                className="w-32"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
              >
                <FiX size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-white text-3xl hover:bg-[#48D3A3]/10 hover:text-[#48D3A3] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
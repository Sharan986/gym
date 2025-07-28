import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      // Unlock scroll
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    // Cleanup function to ensure scroll is unlocked when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Workout-Guide", path: "/WorkoutGuide" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Supplement", path: "/Supplement" },
    { name: "Contact", path: "/JoinUs" }
  ];

  return (
    <nav className="bg-black backdrop-blur-sm text-white px-4 sm:px-6 lg:px-8 flex justify-between items-center relative shadow-lg z-50">
      {/* Logo */}
      <Link to="/" className="z-50 group">
        <img
          src={logo}
          alt="OneRepMaax Gym Logo"
          className="w-24 sm:w-28 md:w-32 pl-2 hover:scale-110 transition-all duration-300 cursor-pointer drop-shadow-lg group-hover:drop-shadow-xl"
        />
      </Link>

      {/* Desktop Navigation: show only for lg and up */}
      <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-xl lg:text-4xl cursor-pointer font-One hover:text-[#48D3A3] transition-all duration-300 relative group px-4 py-2 rounded-lg hover:bg-[#48D3A3]/10"
          >
            {link.name}
            <span className="absolute bottom-0 lg:text-4xl left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#48D3A3] to-[#FCDE3B] transition-all duration-300 group-hover:w-full group-hover:left-0 "></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button: sm & md */}
      <div className="lg:hidden z-50 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 sm:p-3 focus:outline-none hover:text-[#48D3A3] transition-all duration-300 cursor-pointer hover:bg-[#48D3A3]/10 rounded-lg border border-transparent hover:border-[#48D3A3]/30"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 hover:scale-110" />
          ) : (
            <FiMenu className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 hover:scale-110" />
          )}
        </button>
      </div>

      {/* Fullscreen Mobile Menu: slide from the right */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-xl z-[60] transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out lg:hidden overflow-hidden`}
        onClick={(e) => {
          // Close menu when clicking on backdrop (not on menu content)
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/5 via-transparent to-[#FCDE3B]/5 pointer-events-none"></div>
        
        {/* Floating Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white p-3 hover:text-[#48D3A3] transition-all duration-300 cursor-pointer hover:bg-[#48D3A3]/10 rounded-full border border-transparent hover:border-[#48D3A3]/30 hover:rotate-90 z-[70]"
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8" />
        </button>
        
        <div 
          className="h-full w-full flex flex-col relative z-10"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on menu content
        >
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8 sm:space-y-10 px-4 sm:px-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-One hover:text-[#48D3A3] transition-all duration-300 py-4 sm:py-5 px-8 sm:px-10 rounded-xl hover:bg-[#48D3A3]/10 border border-transparent hover:border-[#48D3A3]/30 relative group overflow-hidden w-full max-w-md text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#48D3A3]/0 via-[#48D3A3]/5 to-[#FCDE3B]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

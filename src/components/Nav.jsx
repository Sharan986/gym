import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (but not if mobile menu is open)
      else if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      // Lock scroll and always show navbar when menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
      setIsVisible(true);
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
    <nav className={`fixed top-0 left-0 right-0 bg-black/95 text-white px-4 sm:px-6 lg:px-8 h-20 sm:h-22 lg:h-24 flex justify-between items-center z-50 transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Logo */}
      <Link to="/" className="z-50 group flex items-center pl-4 sm:pl-6 lg:pl-8">
        <img
          src={logo}
          alt="OneRepMaax Gym Logo"
          className="h-20 sm:h-24 lg:h-28 w-auto hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation: show only for lg and up */}
      <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-lg xl:text-xl font-One cursor-pointer hover:text-[#48D3A3] transition-all duration-300 relative group px-2 py-1"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48D3A3] to-[#FCDE3B] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button: sm & md */}
      <div className="lg:hidden flex items-center space-x-2">
        {/* Gallery Button */}
        <Link
          to="/Gallery"
          className="text-xs font-One bg-gradient-to-r from-[#48D3A3] to-[#FCDE3B] text-black px-2 py-2 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer font-medium"
          aria-label="View gym gallery"
        >
          FACILITIES
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="z-50 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-3 focus:outline-none hover:text-[#48D3A3] transition-all duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <FiMenu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu: slide from the right */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-black z-[60] transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-out lg:hidden overflow-hidden`}
        onClick={(e) => {
          // Close menu when clicking on backdrop (not on menu content)
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        {/* Minimalist Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-[#48D3A3] transition-all duration-300 cursor-pointer z-[70]"
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8" />
        </button>
        
        <div 
          className="h-full w-full flex flex-col relative z-10"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on menu content
        >
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center space-y-10 px-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl sm:text-4xl font-One hover:text-[#48D3A3] transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#48D3A3] to-[#FCDE3B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* JOIN NOW Button */}
            <Link
              to="/JoinUs"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-gradient-to-r from-[#48D3A3] to-[#FCDE3B] text-black px-8 py-3 rounded-md font-One text-xl sm:text-2xl font-bold hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${navLinks.length * 100}ms` }}
            >
              JOIN NOW
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

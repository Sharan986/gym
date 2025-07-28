import React from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const establishedYear = 2025;

  return (
    <>
      <footer 
        className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 w-full font-DM text-lg text-gray-800 bg-gradient-to-br from-gray-900/95 via-black/80 to-gray-800/90 backdrop-blur-sm shadow-2xl"
        role="contentinfo"
        aria-label="Footer navigation and contact information"
      >
        
        <div className="mb-10 text-center p-8 max-w-7xl mx-auto">
          <div className=" w-32 h-32 mx-auto mb-6 flex items-center justify-center ">
            <img 
              src={logo} 
              alt="OneRepMaax Gym Logo - Premier Fitness Center Jamshedpur" 
              className="w-20 sm:w-20 md:w-24"
              loading="lazy"
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-DM text-gray-300 font-semibold max-w-2xl mx-auto leading-relaxed">
            Transform your fitness journey at Jamshedpur's premier gym. Professional training, modern equipment, and a supportive community since 2025.
          </p>
        </div>

        <div className="grid gap-10 md:gap-12 lg:gap-16 text-gray-400 font-DM px-8 max-w-7xl mx-auto">

          <div className="md:flex md:space-x-10 lg:space-x-16">
            {/* COMPANY */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50  p-6 border border-gray-700/30">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent font-One uppercase">
                Company
              </h2>
              <nav aria-label="Company navigation">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <li>
                    <Link 
                      to="/About" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Learn about OneRepMaax Gym"
                    >
                      About Us
                    </Link>
                  </li>
        
                  <li>
                    <Link 
                      to="/Supplement" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Fitness supplements and nutrition"
                    >
                      Supplements
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/Gallery" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Gym photos and facility gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/JoinUs" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Contact OneRepMaax Gym"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/WorkoutGuide" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Workout guides and fitness tips"
                    >
                      Workout Guide
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CONTACT US */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800/50 to-gray-900/50  p-6 border border-gray-700/30">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent font-One uppercase">
                Contact Us
              </h2>
              <address className="not-italic">
                <ul className="space-y-6">
                  <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex gap-4 items-start bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-3  border border-gray-600/30 hover:border-[#48D3A3]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#48D3A3] to-[#3BC493] ll p-2">
                      <img 
                        src="https://framerusercontent.com/images/3Gjs31lJXDq4ZvzvREIv8CQ0H08.svg" 
                        alt="Phone icon" 
                        className="w-4 h-4 flex-shrink-0 filter brightness-0 invert" 
                        loading="lazy"
                      />
                    </div>
                    <a 
                      href="tel:+919204057290" 
                      className="hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Call OneRepMaax Gym"
                    >
                      +91 9204057290
                    </a>
                  </li>
                  <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex gap-4 items-start bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-3 border border-gray-600/30 hover:border-[#48D3A3]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#48D3A3] to-[#3BC493] p-2">
                      <img 
                        src="https://framerusercontent.com/images/h6wGZ0hxbQPDpnwFJ25d2ZMHicQ.svg" 
                        alt="Email icon" 
                        className="w-4 h-4 flex-shrink-0 filter brightness-0 invert" 
                        loading="lazy"
                      />
                    </div>
                    <a 
                      href="mailto:onerepmaaxgym@gmail.com" 
                      className="hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Email OneRepMaax Gym"
                    >
                      onerepmaax@gmail.com
                    </a>
                  </li>
                  <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex gap-4 items-start bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-3 border border-gray-600/30 hover:border-[#48D3A3]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#48D3A3] to-[#3BC493] p-2">
                      <img 
                        src="https://framerusercontent.com/images/RmsksdVnRfJJKfOFy4VJv85AXLo.svg" 
                        alt="Location icon" 
                        className="w-4 h-4 flex-shrink-0 filter brightness-0 invert" 
                        loading="lazy"
                      />
                    </div>
                    <span>
                      One Rep Maax Gym, Dimna Rd, Shankoshai, 
                      Mango, 
                      Jamshedpur, 
                      Jharkhand 
                      831018
                    </span>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          {/* OPERATIONAL HOURS */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 border border-gray-700/30">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent font-One uppercase">
              Operating Hours
            </h2>
            <ul className="space-y-6">
              <li>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-3 border border-gray-600/30 hover:border-[#48D3A3]/50 transition-all duration-300">
                  <span className="text-[#FCDE3B] text-lg sm:text-xl lg:text-2xl font-One font-bold min-w-[120px]">
                    Mon - Sat:
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                    05:00 AM - <span className="text-[#48D3A3]">11:00 PM</span>
                  </span>
                </div>
              </li>
              <li>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-3 border border-gray-600/30 hover:border-[#48D3A3]/50 transition-all duration-300">
                  <span className="text-[#FCDE3B] text-lg sm:text-xl lg:text-2xl font-One font-bold min-w-[120px]">
                    Sunday:
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                    08:00 AM - <span className="text-[#48D3A3]">06:00 PM</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* GOOGLE MAPS */}
          <div className="mt-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50  p-6 border border-gray-700/30">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent font-One uppercase">
              Find Us in Dimna, Mango
            </h3>
            <div className="bg-gradient-to-br from-[#48D3A3]/10 to-[#3BC493]/10 p-2  border border-[#48D3A3]/30">
              <iframe 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px]  shadow-lg hover:shadow-xl transition-shadow duration-300"
                title="OneRepMaax Gym Location - Dimna Road, Mango, Jamshedpur"
                width="100%"
                height="400"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=One+Rep+Maax+Gym,+Dimna+Road,+Jamshedpur&output=embed"
                aria-label="Google Maps showing OneRepMaax Gym location at Dimna Road, Mango, Jamshedpur"
              />
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-12 pt-8 bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30  p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-DM">
                  © {currentYear} OneRepMaax Gym. All rights reserved. | Established {establishedYear}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 font-DM mt-1">
                  Premier fitness center in Dimna, Mango - Jamshedpur, Jharkhand
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link 
                  to="/privacy-policy" 
                  className="text-sm sm:text-base lg:text-lg text-gray-400 hover:text-[#48D3A3] transition-colors duration-300 font-DM"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </Link>
                <span className="hidden sm:inline text-gray-600">|</span>
                <Link 
                  to="/terms-of-service" 
                  className="text-sm sm:text-base lg:text-lg text-gray-400 hover:text-[#48D3A3] transition-colors duration-300 font-DM"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

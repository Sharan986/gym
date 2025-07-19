import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const establishedYear = 2025;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Gym",
              "name": "OneRepMaax Gym",
              "description": "Premier fitness center in Jamshedpur offering professional training, modern equipment, and comprehensive fitness solutions since 2025.",
              "url": "https://onerepmaaxgym.in",
              "logo": "https://onerepmaaxgym.in/logo.png",
              "image": "https://onerepmaaxgym.in/gym-image.jpg",
              "foundingDate": "2025-01-07",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dimna Rd, Shankoshai",
                "addressLocality": "Mango, Jamshedpur",
                "addressRegion": "Jharkhand",
                "postalCode": "831018",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.7868",
                "longitude": "86.2029"
              },
              "telephone": "+91 9204057290",
              "email": "onerepmaaxgym@gmail.com",
              "openingHours": [
                "Mo-Sa 05:00-23:00",
                "Su 08:00-18:00"
              ],
              "priceRange": "₹₹",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "60",
                "bestRating": "5",
                "worstRating": "1"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Personal Training",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Group Classes",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Modern Equipment",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Supplement Store",
                  "value": true
                }
              ],
              "sameAs": [
                "https://www.google.com/maps/place/OneRepMaax+Gym",
                "https://www.facebook.com/onerepmaax",
                "https://www.instagram.com/onerepmaax"
              ]
            }
          `}
        </script>
      </Helmet>

      <footer 
        className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 lg:mx-32 mx-8 mb-16 font-DM text-lg text-gray-800"
        role="contentinfo"
        aria-label="Footer navigation and contact information"
        itemScope
        itemType="https://schema.org/Gym"
      >
        
        <div className="mb-10 text-center">
          <img 
            src={logo} 
            alt="OneRepMaax Gym Logo - Premier Fitness Center Jamshedpur" 
            className="w-24 sm:w-24 md:w-28 mb-4 mx-auto"
            itemProp="logo"
            loading="lazy"
          />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-DM text-gray-300 font-semibold max-w-2xl mx-auto leading-relaxed" itemProp="description">
            Transform your fitness journey at Jamshedpur's premier gym. Professional training, modern equipment, and a supportive community since 2025.
          </p>
        </div>

        <div className="grid gap-10 md:gap-12 lg:gap-16 text-gray-400 font-DM">

          <div className="md:flex md:space-x-10 lg:space-x-16">
            {/* COMPANY */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-[#48D3A3] font-One uppercase" itemProp="name">
                Company
              </h2>
              <nav aria-label="Company navigation">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4" itemScope itemType="https://schema.org/SiteNavigationElement">
                  <li itemProp="name">
                    <Link 
                      to="/About" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Learn about OneRepMaax Gym"
                      itemProp="url"
                    >
                      About Us
                    </Link>
                  </li>
                  <li itemProp="name">
                    <Link 
                      to="/ServicesDetail" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Our fitness services and programs"
                      itemProp="url"
                    >
                      Services
                    </Link>
                  </li>
                  <li itemProp="name">
                    <Link 
                      to="/Supplement" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Fitness supplements and nutrition"
                      itemProp="url"
                    >
                      Supplements
                    </Link>
                  </li>
                  <li itemProp="name">
                    <Link 
                      to="/Gallery" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Gym photos and facility gallery"
                      itemProp="url"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li itemProp="name">
                    <Link 
                      to="/JoinUs" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Contact OneRepMaax Gym"
                      itemProp="url"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li itemProp="name">
                    <Link 
                      to="/WorkoutGuide" 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Workout guides and fitness tips"
                      itemProp="url"
                    >
                      Workout Guide
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CONTACT US */}
            <div className="w-full md:w-1/2" itemScope itemType="https://schema.org/ContactPoint">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-[#48D3A3] font-One uppercase">
                Contact Us
              </h2>
              <address className="not-italic">
                <ul className="space-y-6">
                  <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex gap-4 items-start">
                    <img 
                      src="https://framerusercontent.com/images/3Gjs31lJXDq4ZvzvREIv8CQ0H08.svg" 
                      alt="Phone icon" 
                      className="mt-1 w-5 h-5 flex-shrink-0" 
                      loading="lazy"
                    />
                    <a 
                      href="tel:+919204057290" 
                      className="hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Call OneRepMaax Gym"
                      itemProp="telephone"
                    >
                      +91 9204057290
                    </a>
                  </li>
                  <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex gap-4 items-start">
                    <img 
                      src="https://framerusercontent.com/images/h6wGZ0hxbQPDpnwFJ25d2ZMHicQ.svg" 
                      alt="Email icon" 
                      className="mt-1 w-5 h-5 flex-shrink-0" 
                      loading="lazy"
                    />
                    <a 
                      href="mailto:onerepmaaxgym@gmail.com" 
                      className="hover:text-[#48D3A3] transition-colors duration-300 focus:text-[#48D3A3] focus:outline-none"
                      aria-label="Email OneRepMaax Gym"
                      itemProp="email"
                    >
                      onerepmaaxgym@gmail.com
                    </a>
                  </li>
                  <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex gap-4 items-start">
                    <img 
                      src="https://framerusercontent.com/images/RmsksdVnRfJJKfOFy4VJv85AXLo.svg" 
                      alt="Location icon" 
                      className="mt-1 w-5 h-5 flex-shrink-0" 
                      loading="lazy"
                    />
                    <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <span itemProp="streetAddress">One Rep Maax Gym, Dimna Rd, Shankoshai</span>, 
                      <span itemProp="addressLocality"> Mango</span>, 
                      <span itemProp="addressLocality"> Jamshedpur</span>, 
                      <span itemProp="addressRegion"> Jharkhand</span> 
                      <span itemProp="postalCode">831018</span>
                    </span>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          {/* OPERATIONAL HOURS */}
          <div itemScope itemType="https://schema.org/OpeningHoursSpecification">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-[#48D3A3] font-One uppercase">
              Operating Hours
            </h2>
            <ul className="space-y-6">
              <li>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-yellow-400 text-lg sm:text-xl lg:text-2xl font-One font-bold min-w-[120px]">
                    Mon - Sat:
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300" itemProp="opens" content="05:00">
                    05:00 AM - <span itemProp="closes" content="23:00">11:00 PM</span>
                  </span>
                </div>
                <div className="border-t border-gray-600 mt-4" />
              </li>
              <li>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-yellow-400 text-lg sm:text-xl lg:text-2xl font-One font-bold min-w-[120px]">
                    Sunday:
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300" itemProp="opens" content="08:00">
                    08:00 AM - <span itemProp="closes" content="18:00">06:00 PM</span>
                  </span>
                </div>
                <div className="border-t border-gray-600 mt-4" />
              </li>
            </ul>
          </div>

          {/* GOOGLE MAPS */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-[#48D3A3] font-One uppercase">
              Find Us in Dimna, Mango
            </h3>
            <iframe 
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] border-2 border-[#48D3A3] shadow-lg hover:shadow-xl transition-shadow duration-300"
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

          {/* FOOTER BOTTOM */}
          <div className="mt-12 pt-8 border-t border-gray-600">
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

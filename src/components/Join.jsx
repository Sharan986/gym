import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Join = () => {
  return (
    <>
      <Helmet>
        <style>
          {`
            /* Custom responsive breakpoints and utilities */
            @media (max-width: 375px) {
              .xs\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
              .xs\\:text-base { font-size: 1rem; line-height: 1.5rem; }
              .xs\\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
              .xs\\:gap-2 { gap: 0.5rem; }
              .xs\\:p-4 { padding: 1rem; }
              .xs\\:inline { display: inline; }
              .xs\\:hidden { display: none; }
              .xs\\:whitespace-normal { white-space: normal; }
            }
            
            @media (min-width: 376px) {
              .xs\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
              .xs\\:text-base { font-size: 1rem; line-height: 1.5rem; }
              .xs\\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
              .xs\\:gap-2 { gap: 0.5rem; }
              .xs\\:p-4 { padding: 1rem; }
              .xs\\:inline { display: inline; }
              .xs\\:hidden { display: none; }
              .xs\\:whitespace-normal { white-space: normal; }
            }

            @media (min-width: 1920px) {
              .\\33xl\\:text-8xl { font-size: 6rem; line-height: 1; }
              .\\33xl\\:text-6xl { font-size: 3.75rem; line-height: 1; }
            }

            /* Gradient radial utility */
            .bg-gradient-radial {
              background-image: radial-gradient(var(--tw-gradient-stops));
            }

            /* Custom animations for better performance */
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            /* Enhanced responsive typography */
            @media (max-width: 320px) {
              .text-responsive-sm {
                font-size: 1.25rem;
                line-height: 1.75rem;
              }
            }

            @media (min-width: 321px) and (max-width: 640px) {
              .text-responsive-sm {
                font-size: 1.5rem;
                line-height: 2rem;
              }
            }

            /* Ultra-wide screen optimizations */
            @media (min-width: 2560px) {
              .section-ultra-wide {
                max-width: 2400px;
                margin-left: auto;
                margin-right: auto;
              }
            }
          `}
        </style>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Action",
              "name": "Join OneRepMaax Gym Workout Program",
              "description": "Transform your fitness routine with expert workout guidance at OneRepMaax Gym Jamshedpur",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://onerepmaaxgym.in/workout-guide",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "ExerciseAction",
                "name": "Structured Workout Program",
                "description": "Access to beginner, intermediate, and advanced workout routines designed by K11 certified trainers"
              },
              "agent": {
                "@type": "Organization",
                "name": "OneRepMaax Gym",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Dimna Rd, Shankoshai",
                  "addressLocality": "Mango, Jamshedpur",
                  "addressRegion": "Jharkhand",
                  "postalCode": "831018",
                  "addressCountry": "India"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <section 
        className="bg-gradient-to-br from-[#FCDE3B] via-[#F5D632] to-[#E8C547] flex flex-col lg:flex-row justify-between items-center font-One mt-16 sm:mt-20 md:mt-24 lg:mx-24 mx-6 shadow-lg sm:shadow-xl md:shadow-2xl relative overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]" 
        itemScope 
        itemType="https://schema.org/Action"
        aria-labelledby="join-heading"
        role="banner"
      >
        {/* Animated background elements - responsive sizing */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" aria-hidden="true"></div>
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-radial from-white/20 to-transparent rounded-full animate-bounce" aria-hidden="true"></div>
        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-radial from-[#070915]/10 to-transparent rounded-full animate-pulse" aria-hidden="true"></div>
        
        <div className="flex flex-col justify-center items-center lg:items-start relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full lg:w-3/5 xl:w-2/3">
          <h2 
            id="join-heading" 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl px-1 sm:px-2 py-2 sm:py-4 text-center lg:text-left font-One font-bold text-[#070915] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight drop-shadow-sm"
            itemProp="name"
          >
            Ready to Transform Your 
            <span className="block text-[#2D5016] font-One font-extrabold animate-pulse mt-1 sm:mt-2">Workout Routine?</span>
          </h2>
          <p 
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-[#070915]/80 text-center lg:text-left mt-2 sm:mt-3 md:mt-4 font-M font-medium leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            itemProp="description"
          >
            Join Jamshedpur's premier fitness community with expert-designed workout programs
          </p>
          
          {/* Mobile star rating - positioned above button */}
          <div className="block lg:hidden mt-4 mb-2 text-center">
            <div className="inline-flex items-center bg-[#070915]/90 text-[#FCDE3B] px-3 py-2 font-M font-medium backdrop-blur-sm border border-[#FCDE3B]/30">
              <span className="animate-pulse mr-2 text-lg">⭐</span>
              <span className="text-sm font-M font-bold">4.9★ Rated Workout Programs</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end w-full lg:w-2/5 xl:w-1/3 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 relative z-10">
          <Link 
            to="/WorkoutGuide" 
            className="w-full sm:w-auto lg:w-full xl:w-auto group max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-lg"
            itemProp="target"
            aria-label="Access workout guide and training programs at OneRepMaax Gym"
          >
            <button 
              className="relative border-2 sm:border-3 md:border-4 border-[#070915] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl bg-[#070915] text-[#FCDE3B] p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10 w-full font-One font-bold uppercase tracking-wider transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl overflow-hidden"
              type="button"
              itemProp="instrument"
            >
              {/* Button gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070915] via-[#1a1a2e] to-[#070915] group-hover:from-[#2D5016] group-hover:via-[#3a6b1f] group-hover:to-[#2D5016] transition-all duration-500" aria-hidden="true"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCDE3B]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-1 xs:gap-2 sm:gap-3 group-hover:text-white transition-colors duration-300">
                <span className="animate-pulse text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" aria-hidden="true">🏋️</span>
                <span className="whitespace-nowrap xs:whitespace-normal">Explore Workout Guide</span>
                <span className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" aria-hidden="true"></span>
              </span>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#FCDE3B] via-[#F5D632] to-[#FCDE3B] group-hover:h-1 sm:group-hover:h-2 transition-all duration-300" aria-hidden="true"></div>
            </button>
          </Link>
        </div>
        
        {/* Desktop CTA benefits - hidden on mobile, positioned for desktop */}
        <div className="hidden lg:block absolute bottom-3 right-3 text-sm md:text-base bg-[#070915]/90 text-[#FCDE3B] px-4 py-2 font-M font-medium backdrop-blur-sm border border-[#FCDE3B]/30" aria-hidden="true">
          <span className="animate-pulse mr-2">⭐</span>
          <span className="font-M font-bold">4.9★ Rated Programs</span>
        </div>
      </section>
    </>
  );
};

export default Join;

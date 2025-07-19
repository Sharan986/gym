import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';
import Icon from "../components/Icon";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";


const MembershipSection = () => {
  const sliderRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const holdTimeoutRef = useRef(null);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    useCSS: true,
    useTransform: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 500,
          cssEase: 'ease-in-out',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          speed: 500,
          cssEase: 'ease-in-out',
          waitForAnimate: false,
        },
      },
    ],
  };


  const handleButtonMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleButtonMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const handleCardHoldStart = () => {
    // Start the hold timer (require 500ms hold)
    holdTimeoutRef.current = setTimeout(() => {
      // Clear any existing pause timeout
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      
      // Pause the carousel after successful hold
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
      
      // Resume after 5 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 5000);
    }, 500); // Require 500ms hold
  };

  const handleCardHoldEnd = () => {
    // Cancel the hold timer if released too early
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
  };

  // Cleanup timeouts on component unmount
  React.useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }
    };
  }, []);

  const slidesData = [
    {
      title: "Membership",
      durations: ["1 Month", "3 Months", "6 Months", "9 Months", "12 Months"],
      prices: ["₹1,200", "₹2,700", "₹5,100", "₹6,800", "₹7,500"],
    },
    {
      title: "Locker Facility",
      durations: ["1 Month", "3 Months", "6 Months", "9 Months", "12 Months"],
      prices: ["₹400", "₹1,000", "₹2,500", "₹3,800", "₹5,000"],
    },
    {
      title: "Personal Training",
      durations: ["1 Month", "3 Months", "", "", ""],
      prices: ["₹5,000", "₹10,000", "", "", ""],
    },
    {
      title: "GROUP PT",
      durations: ["2 Persons", "3 Persons", "4 Persons", "", ""],
      prices: ["₹8,000", "₹12,000", "₹3,500/each", "", ""],
    },
  ];

  const membershipBenefits = [
    "PERSONAL TRAINING AVAILABLE",
    "ZUMBA & FITNESS CLASSES",
    "YOGA SESSIONS",
    "NUTRITION CONSULTATION ₹1000/Month",
    "FREE WIFI & COFFEE",
    "SEPARATE CHANGING ROOMS",
    "LOCKER FACILITY & PARKING",
  ];

  return (
    <>
      <Helmet>
        <title>Cheapest Gym Membership Jamshedpur ₹1200 | OneRepMaax Gym Plans 2025</title>
        <meta 
          name="description" 
          content="Cheapest gym membership in Jamshedpur! OneRepMaax Gym: Monthly ₹1,200, Annual ₹7,500. Personal training ₹5,000, Group PT ₹3,500/person. Flexible payment plans, membership pause facility, locker facility. 4.9★ rated with 61 Google reviews!" 
        />
        <meta 
          name="keywords" 
          content="cheapest gym membership Jamshedpur, gym fees Jamshedpur 2025, affordable gym membership Mango, gym membership cost Dimna Road, gym membership plans Jamshedpur, best gym membership deals, flexible payment gym, gym membership near me, OneRepMaax membership, fitness membership Jamshedpur, monthly gym membership, annual gym membership" 
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="OneRepMaax Gym Jamshedpur" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Jamshedpur" />
        <meta name="geo.position" content="22.8046;86.2029" />
        <meta name="ICBM" content="22.8046, 86.2029" />
        <meta property="og:title" content="Cheapest Gym Membership Jamshedpur ₹1200 | OneRepMaax Plans 2025" />
        <meta property="og:description" content="Jamshedpur's most affordable gym membership! Starting ₹1,200/month. Personal training, yoga, Zumba included. Flexible payments & pause facility. 4.9★ rated!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onerepmaax.com/membership" />
        <meta property="og:site_name" content="OneRepMaax Gym Jamshedpur" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:author" content="OneRepMaax Gym" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheapest Gym Membership Jamshedpur ₹1200" />
        <meta name="twitter:description" content="Most affordable gym membership in Jamshedpur starting ₹1,200/month. Flexible plans with pause facility. 4.9★ rated!" />
        <link rel="canonical" href="https://onerepmaax.com/membership" />
        <link rel="alternate" hreflang="en-IN" href="https://onerepmaax.com/membership" />
        <link rel="alternate" hreflang="hi-IN" href="https://onerepmaax.com/hi/membership" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MembershipOrganization",
              "name": "OneRepMaax Gym Membership",
              "description": "Affordable fitness membership plans with flexible payment options and pause facility",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dimna Rd, Shankoshai",
                "addressLocality": "Mango, Jamshedpur",
                "addressRegion": "Jharkhand",
                "postalCode": "831018",
                "addressCountry": "India"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "61"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Monthly Gym Membership",
                  "description": "1 month gym membership with all facilities",
                  "price": "1200",
                  "priceCurrency": "INR",
                  "category": "Gym Membership",
                  "validFrom": "2025-01-01",
                  "availability": "InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Annual Gym Membership",
                  "description": "12 month gym membership with pause facility",
                  "price": "7500",
                  "priceCurrency": "INR",
                  "category": "Gym Membership",
                  "validFrom": "2025-01-01",
                  "availability": "InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Personal Training",
                  "description": "One-on-one personal training with K11 certified trainers",
                  "price": "5000",
                  "priceCurrency": "INR",
                  "category": "Personal Training",
                  "validFrom": "2025-01-01",
                  "availability": "InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Group Personal Training",
                  "description": "Small group personal training sessions",
                  "price": "3500",
                  "priceCurrency": "INR",
                  "category": "Group Training",
                  "validFrom": "2025-01-01",
                  "availability": "InStock"
                }
              ],
              "amenityFeature": [
                "Personal Training Available",
                "Zumba & Fitness Classes", 
                "Yoga Sessions",
                "Nutrition Consultation",
                "Free WiFi & Coffee",
                "Separate Changing Rooms",
                "Locker Facility & Parking"
              ]
            }
          `}
        </script>
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the gym membership fees at OneRepMaax?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym membership starts at ₹1,200 for 1 month, ₹2,700 for 3 months, ₹5,100 for 6 months, and ₹7,500 for 12 months. We offer flexible payment plans and competitive rates in Jamshedpur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer flexible payment plans for gym membership?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, OneRepMaax Gym offers flexible payment plans for all membership durations. We also provide membership pause facility for 9-month and 12-month memberships for your convenience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is included in OneRepMaax gym membership?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our gym membership includes access to all equipment, Zumba & yoga classes, free WiFi & coffee, separate changing rooms, and parking. Personal training and nutrition consultation available at additional cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I pause my gym membership at OneRepMaax?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, OneRepMaax Gym offers membership pause facility for 9-month and 12-month memberships. This flexible option allows you to temporarily suspend your membership when needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does personal training cost at OneRepMaax?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Personal training at OneRepMaax costs ₹5,000 for 1 month or ₹10,000 for 3 months. Group personal training is available at ₹3,500 per person. All sessions are conducted by K11 certified trainers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes OneRepMaax gym membership affordable in Jamshedpur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax offers the most competitive gym membership rates in Jamshedpur with transparent pricing, no hidden charges, flexible payment plans, and membership pause facility for long-term plans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What facilities are included in OneRepMaax gym membership?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax gym membership includes personal training availability, Zumba & fitness classes, yoga sessions, free WiFi & coffee, separate changing rooms for men and women, locker facility, and parking."
                  }
                }
              ]
            }
          `}
        </script>
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "PriceSpecification",
              "name": "OneRepMaax Gym Membership Pricing",
              "description": "Comprehensive gym membership pricing for all durations",
              "priceCurrency": "INR",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "1 Month Gym Membership",
                  "price": "1200",
                  "priceCurrency": "INR",
                  "availability": "InStock",
                  "validFrom": "2025-01-01",
                  "category": "Fitness Membership",
                  "description": "Monthly gym access with all basic facilities"
                },
                {
                  "@type": "Offer", 
                  "name": "3 Month Gym Membership",
                  "price": "2700",
                  "priceCurrency": "INR",
                  "availability": "InStock",
                  "validFrom": "2025-01-01",
                  "category": "Fitness Membership",
                  "description": "Quarterly gym membership with cost savings"
                },
                {
                  "@type": "Offer",
                  "name": "6 Month Gym Membership", 
                  "price": "5100",
                  "priceCurrency": "INR",
                  "availability": "InStock",
                  "validFrom": "2025-01-01",
                  "category": "Fitness Membership",
                  "description": "Half-yearly membership with significant savings"
                },
                {
                  "@type": "Offer",
                  "name": "9 Month Gym Membership",
                  "price": "6800", 
                  "priceCurrency": "INR",
                  "availability": "InStock",
                  "validFrom": "2025-01-01",
                  "category": "Fitness Membership",
                  "description": "9-month membership with pause facility"
                },
                {
                  "@type": "Offer",
                  "name": "12 Month Gym Membership",
                  "price": "7500",
                  "priceCurrency": "INR", 
                  "availability": "InStock",
                  "validFrom": "2025-01-01",
                  "category": "Fitness Membership",
                  "description": "Annual membership with maximum savings and pause facility"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="membership" aria-labelledby="membership-heading" itemScope itemType="https://schema.org/MembershipOrganization">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="membership-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            <h1 itemProp="name">OUR MEMBERSHIP</h1>
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase" itemProp="description">
          Affordable Fitness Plans Starting ₹1,200/Month
        </h2>
        <p className="w-full text-gray-300 lg:text-2xl font-DM text-lg mt-3 mb-4" itemProp="description">
          Join OneRepMaax Gym with flexible membership plans, pause facility for long-term memberships, 
          and comprehensive fitness amenities. Serving Jamshedpur with 4.9★ rated fitness services since 2020.
        </p>
        
        <div itemScope itemType="https://schema.org/ItemList" aria-label="Gym Membership Benefits">
          <h3 className="sr-only">Membership Benefits and Facilities</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 font-One text-2xl md:text-3xl" itemProp="itemListElement">
            {membershipBenefits.map((item, idx) => (
              <li key={idx} className="flex" itemScope itemType="https://schema.org/Service" itemProp="itemListElement">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-9 text-[#48D3A3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-300 lg:text-4xl" itemProp="name">{item}</span>
              </li>
            ))}
          </ul>
        </div>
          
          <div className="mt-8 p-4 bg-gray-900/50 border border-gray-700" itemScope itemType="https://schema.org/Service">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-yellow-400 text-lg" aria-hidden="true">💰</span>
              <h4 className="text-[#48D3A3] font-One text-lg" itemProp="name">Flexible Payment Options</h4>
            </div>
            <div className="text-sm text-gray-300 space-y-1 font-DM" itemProp="description">
              <p>✓ Flexible payment plans available for all membership durations</p>
              <p>✓ Membership pause facility for 9-month & 12-month plans</p>
              <p>✓ Most competitive rates in Jamshedpur fitness market</p>
              <p>✓ No hidden charges - transparent pricing policy</p>
            </div>
          </div>

        <div className="w-full mt-8" itemScope itemType="https://schema.org/ItemList">
          <h3 className="sr-only">Gym Membership Plans and Pricing</h3>
          <div className="px-0" role="region" aria-label="Membership plans carousel">
            <style>
              {`
                .slick-slide > div {
                  margin: 0 4px;
                }
                .slick-list {
                  margin: 0 -4px;
                  overflow: visible;
                  padding: 20px 0;
                }
                .slick-dots {
                  bottom: -80px;
                  text-align: center;
                }
                .slick-dots li {
                  margin: 0 8px;
                }
                .slick-dots li button {
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  background: linear-gradient(45deg, #48D3A3, #3BC493);
                  border: 2px solid transparent;
                  outline: none;
                }
                .slick-dots li button:before {
                  display: none;
                }
                .slick-dots li.slick-active button {
                  background: linear-gradient(45deg, #FCDE3B, #F59E0B);
                  transform: scale(1.3);
                  box-shadow: 0 0 15px rgba(252, 222, 59, 0.5);
                }
                .slick-dots li button:hover {
                  transform: scale(1.1);
                  transition: all 0.3s ease;
                }
                
                /* Advanced carousel animations */
                .slick-slide {
                  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                  transform-origin: center;
                  will-change: transform, opacity;
                }
                .slick-slide.slick-active {
                  transform: scale(1.03) translateY(-5px);
                  z-index: 10;
                }
                .slick-slide:not(.slick-active) {
                  opacity: 0.6;
                  transform: scale(0.95);
                }
                
                /* 3D perspective */
                .slick-track {
                  perspective: 1000px;
                  transform-style: preserve-3d;
                }
                
                /* Enhanced Mobile optimizations */
                @media (max-width: 1400px) {
                  .slick-slide > div {
                    margin: 0 4px;
                  }
                  .slick-list {
                    margin: 0 -4px;
                  }
                }
                
                @media (max-width: 1200px) {
                  .slick-slide > div {
                    margin: 0 4px;
                  }
                  .slick-list {
                    margin: 0 -4px;
                  }
                }
                
                @media (max-width: 768px) {
                  .slick-slide {
                    transition: all 0.3s ease-out;
                    will-change: transform, opacity;
                  }
                  .slick-slide.slick-active {
                    transform: scale(1.02) translateY(-3px);
                  }
                  .slick-slide:not(.slick-active) {
                    opacity: 0.7;
                    transform: scale(0.97);
                  }
                  .slick-list {
                    padding: 15px 0;
                    margin: 0 -2px;
                  }
                  .slick-slide > div {
                    margin: 0 2px;
                  }
                  .slick-dots {
                    bottom: -60px;
                  }
                  .slick-track {
                    transform-style: flat;
                  }
                }
                
                @media (max-width: 480px) {
                  .slick-slide {
                    transition: all 0.25s ease-out;
                    will-change: transform, opacity;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                  }
                  .slick-slide.slick-active {
                    transform: scale(1.01) translateY(-2px) translateZ(0);
                  }
                  .slick-slide:not(.slick-active) {
                    opacity: 0.8;
                    transform: scale(0.98) translateZ(0);
                  }
                  .slick-list {
                    padding: 10px 0;
                    margin: 0 -1px;
                    transform: translateZ(0);
                    -webkit-transform: translateZ(0);
                  }
                  .slick-slide > div {
                    margin: 0 1px;
                  }
                  .slick-dots {
                    bottom: -50px;
                  }
                  .slick-dots li {
                    margin: 0 6px;
                  }
                  .slick-dots li button {
                    width: 10px;
                    height: 10px;
                  }
                  .slick-track {
                    transform-style: flat;
                    perspective: none;
                  }
                }
                
                /* Gradient animations */
                @keyframes gradientShift {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                }
                
                .group:hover .relative {
                  animation: gradientShift 3s ease infinite;
                  background-size: 200% 200%;
                }
              `}
            </style>
            <Slider {...sliderSettings} ref={sliderRef}>
              {slidesData.map((slide, idx) => (
                <div key={idx} className="p-0" itemScope itemType="https://schema.org/Product" itemProp="itemListElement">
                  <article 
                    className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95 border border-gray-600/50 h-[480px] sm:h-[460px] md:h-[480px] lg:h-[500px] flex flex-col transition-all duration-500 hover:border-[#48D3A3]/70 hover:shadow-[0_0_40px_rgba(72,211,163,0.25)] group overflow-hidden mx-1"
                    onTouchStart={handleCardHoldStart}
                    onTouchEnd={handleCardHoldEnd}
                    onMouseDown={handleCardHoldStart}
                    onMouseUp={handleCardHoldEnd}
                    onMouseLeave={handleCardHoldEnd}
                  >
                    
                    {/* Animated background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/5 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true"></div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-radial from-[#48D3A3]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000" aria-hidden="true"></div>
                    
                    {/* Premium badge for all items with responsive design */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-20" aria-label={`${slide.title === "Membership" ? "Popular" : slide.title === "Personal Training" ? "Premium" : slide.title === "GROUP PT" ? "Team" : "Secure"} plan`}>
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-[10px] sm:text-xs font-One font-bold px-2 py-0.5 sm:px-3 sm:py-1 transform rotate-12 shadow-lg">
                        {slide.title === "Membership" && "POPULAR"}
                        {slide.title === "Personal Training" && "PREMIUM"}
                        {slide.title === "GROUP PT" && "TEAM"}
                        {slide.title === "Locker Facility" && "SECURE"}
                      </div>
                    </div>
                    
                    {/* Header with clean gradient */}
                    <header className="relative bg-gradient-to-r from-[#48D3A3] via-[#48D3A3] to-[#3BC493] text-black p-5 text-center border-b border-white/10">
                      <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
                      <div className="relative z-10">
                        <h3 className="font-One text-xl lg:text-2xl font-bold uppercase tracking-wider drop-shadow-sm" itemProp="name">
                          {slide.title}
                        </h3>
                        {slide.title === "Membership" && (
                          <div className="text-[10px] sm:text-xs mt-1 font-DM font-semibold flex items-center justify-center gap-1 opacity-90">
                            <span className="animate-pulse" aria-hidden="true">⭐</span> 
                            <span className="hidden sm:inline">Most Popular Choice</span>
                            <span className="sm:hidden">Popular</span>
                            <span className="animate-pulse" aria-hidden="true">⭐</span>
                          </div>
                        )}
                        {slide.title === "Personal Training" && (
                          <div className="text-[10px] sm:text-xs mt-1 font-DM font-semibold flex items-center justify-center gap-1 opacity-90">
                            <span className="animate-bounce" aria-hidden="true">💪</span> 
                            <span className="hidden sm:inline">Premium K11 Certified</span>
                            <span className="sm:hidden">K11 Certified</span>
                            <span className="animate-bounce" aria-hidden="true">💪</span>
                          </div>
                        )}
                        {slide.title === "GROUP PT" && (
                          <div className="text-[10px] sm:text-xs mt-1 font-DM font-semibold flex items-center justify-center gap-1 opacity-90">
                            <span className="animate-pulse" aria-hidden="true">👥</span> 
                            <span className="hidden sm:inline">Team Training Sessions</span>
                            <span className="sm:hidden">Team Training</span>
                            <span className="animate-pulse" aria-hidden="true">👥</span>
                          </div>
                        )}
                        {slide.title === "Locker Facility" && (
                          <div className="text-[10px] sm:text-xs mt-1 font-DM font-semibold flex items-center justify-center gap-1 opacity-90">
                            <span className="animate-bounce" aria-hidden="true">🔐</span> 
                            <span className="hidden sm:inline">Secure & Convenient</span>
                            <span className="sm:hidden">Secure Storage</span>
                            <span className="animate-bounce" aria-hidden="true">🔐</span>
                          </div>
                        )}
                      </div>
                    </header>
                    
                    {/* Content with enhanced styling */}
                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col relative z-10" itemScope itemType="https://schema.org/Offer">
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 flex-1">
                        {/* Duration/Group Size Column */}
                        <div className="space-y-1">
                          <h4 className="font-One text-[#48D3A3] text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 md:mb-4 uppercase tracking-widest border-b border-gradient-to-r from-[#48D3A3] to-transparent pb-1 sm:pb-2 relative">
                            {slide.title === "GROUP PT" ? "Group Size" : "Duration"}
                            <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-[#48D3A3] to-yellow-400" aria-hidden="true"></div>
                          </h4>
                          <div className="space-y-2 sm:space-y-3">
                            {slide.durations.map((duration, i) => (
                              duration && (
                                <div key={i} className="flex items-center text-gray-200 font-DM text-xs sm:text-sm lg:text-base hover:text-white transition-colors duration-300 group/item">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] mr-2 sm:mr-3 flex-shrink-0 transition-transform group-hover/item:scale-125" aria-hidden="true"></div>
                                  <span className="group-hover/item:translate-x-1 transition-transform text-xs sm:text-sm lg:text-base">{duration}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>

                        {/* Price Column */}
                        <div className="space-y-1">
                          <h4 className="font-One text-[#48D3A3] text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 md:mb-4 uppercase tracking-widest border-b border-gradient-to-r from-[#48D3A3] to-transparent pb-1 sm:pb-2 relative">
                            Price
                            <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-[#48D3A3]" aria-hidden="true"></div>
                          </h4>
                          <div className="space-y-2 sm:space-y-3">
                            {slide.prices.map((price, i) => (
                              price && (
                                <div key={i} className="flex items-center group/price hover:scale-105 transition-transform duration-300">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mr-2 sm:mr-3 flex-shrink-0 group-hover/price:animate-pulse" aria-hidden="true"></div>
                                  <span className="font-DM text-xs sm:text-sm lg:text-base font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent group-hover/price:from-yellow-300 group-hover/price:to-yellow-400 transition-all duration-300" itemProp="price">
                                    {price}
                                  </span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced CTA Button */}
                      <Link to="/JoinUs" className="mt-4 sm:mt-6 md:mt-8" aria-label={`Join ${slide.title} plan`}>
                        <button 
                          className="relative w-full py-3 sm:py-4 px-4 sm:px-6 font-One text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 group/btn overflow-hidden" 
                          type="button"
                          onMouseEnter={handleButtonMouseEnter}
                          onMouseLeave={handleButtonMouseLeave}
                        >
                          {/* Button background with animated gradient */}
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 group-hover/btn:from-[#48D3A3] group-hover/btn:via-[#3BC493] group-hover/btn:to-[#48D3A3] transition-all duration-500" aria-hidden="true"></div>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" aria-hidden="true"></div>
                          
                          {/* Button content */}
                          <span className="relative z-10 text-black group-hover/btn:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                            Join Now 
                            <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                          </span>
                        </button>
                      </Link>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-[#48D3A3] to-transparent group-hover:via-yellow-400 transition-all duration-500" aria-hidden="true"></div>
                  </article>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipSection;

import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '../components/Icon';
import { Helmet } from 'react-helmet';
import {FITNESS_IMAGES, FACILITY_IMAGES} from '../config/imageConfig';

const Services = () => {
  const mobileSliderRef = useRef(null);
  const tabletSliderRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const holdTimeoutRef = useRef(null);
  
  const handleCardHoldStart = () => {
    // Clear any existing timeouts
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Start the hold timer (require 500ms hold)
    holdTimeoutRef.current = setTimeout(() => {
      // Pause both sliders
      if (mobileSliderRef.current) {
        mobileSliderRef.current.slickPause();
      }
      if (tabletSliderRef.current) {
        tabletSliderRef.current.slickPause();
      }
      
      // Resume after 5 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        if (mobileSliderRef.current) {
          mobileSliderRef.current.slickPlay();
        }
        if (tabletSliderRef.current) {
          tabletSliderRef.current.slickPlay();
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

  const handleButtonMouseEnter = () => {
    if (mobileSliderRef.current) {
      mobileSliderRef.current.slickPause();
    }
    if (tabletSliderRef.current) {
      tabletSliderRef.current.slickPause();
    }
  };

  const handleButtonMouseLeave = () => {
    if (mobileSliderRef.current) {
      mobileSliderRef.current.slickPlay();
    }
    if (tabletSliderRef.current) {
      tabletSliderRef.current.slickPlay();
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

  const services = [ 
    {
      id: 1,
      img: FITNESS_IMAGES[0], // Personal training image
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Personal Training",
      description: "K11 certified personal trainers in Jamshedpur with proven weight loss transformations",
      keywords: "personal trainer Jamshedpur, one-on-one training, K11 certified",
      price: "Starting from ₹5,000/month"
    },
    {
      id: 2,
      img: FITNESS_IMAGES[1], // Weight loss/cardio image
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Weight Loss Programs",
      description: "Proven weight loss transformations with nutrition consultation and certified guidance",
      keywords: "weight loss Jamshedpur, fat loss program, nutrition consultation",
      price: "Customized plans available"
    },
    {
      id: 3,
      img: FACILITY_IMAGES[7], // Strength training equipment image
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Strength Training",
      description: "Build muscle and strength with state-of-the-art equipment and expert guidance",
      keywords: "strength training Jamshedpur, muscle building, powerlifting",
      price: "Included in membership"
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

  return (
    <>
      <Helmet>
        <title>Best Fitness Services Jamshedpur | Personal Training ₹5000 | OneRepMaax Gym</title>
        <meta 
          name="description" 
          content="Top fitness services in Jamshedpur at OneRepMaax Gym: K11 certified personal training ₹5,000/month, proven weight loss programs, strength training, yoga classes, Zumba fitness, nutrition consultation by certified nutritionist. 4.9★ rated with 61 Google reviews!" 
        />
        <meta 
          name="keywords" 
          content="best fitness services Jamshedpur, personal training cost Jamshedpur, weight loss programs Mango, strength training services, yoga classes Jamshedpur, Zumba fitness Dimna Road, nutrition consultation Jamshedpur, K11 certified trainer services, gym services near me, fitness center Jamshedpur, personal trainer fees, OneRepMaax services" 
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="OneRepMaax Gym Jamshedpur" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Jamshedpur" />
        <meta name="geo.position" content="22.8046;86.2029" />
        <meta name="ICBM" content="22.8046, 86.2029" />
        <meta property="og:title" content="Best Fitness Services Jamshedpur | Personal Training ₹5000" />
        <meta property="og:description" content="Top fitness services: K11 certified personal training, weight loss programs, yoga, Zumba & nutrition consultation. Starting ₹5,000/month. 4.9★ rated!" />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://onerepmaaxgym.in/services" />
        <meta property="og:site_name" content="OneRepMaax Gym Jamshedpur" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:author" content="OneRepMaax Gym" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Fitness Services Jamshedpur | Personal Training ₹5000" />
        <meta name="twitter:description" content="K11 certified personal training, weight loss programs, yoga & nutrition consultation starting ₹5,000/month in Jamshedpur." />
        <link rel="canonical" href="https://onerepmaaxgym.in/services" />
        <link rel="alternate" hreflang="en-IN" href="https://onerepmaaxgym.in/services" />
        <link rel="alternate" hreflang="hi-IN" href="https://onerepmaaxgym.in/hi/services" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "OneRepMaax Gym Fitness Services",
              "description": "Professional fitness services offered at OneRepMaax Gym Jamshedpur",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "Personal Training",
                  "description": "K11 certified personal trainers in Jamshedpur with proven weight loss transformations",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Dimna Rd, Shankoshai",
                      "addressLocality": "Mango, Jamshedpur",
                      "addressRegion": "Jharkhand",
                      "postalCode": "831018",
                      "addressCountry": "India"
                    }
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "5000",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "5000",
                      "priceCurrency": "INR",
                      "unitText": "monthly"
                    }
                  },
                  "serviceType": "Personal Fitness Training",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 2,
                  "name": "Weight Loss Programs",
                  "description": "Proven weight loss transformations with nutrition consultation and certified guidance",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Weight Loss Program",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 3,
                  "name": "Strength Training",
                  "description": "Build muscle and strength with state-of-the-art equipment and expert guidance",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Strength Training",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 4,
                  "name": "Yoga Classes",
                  "description": "Improve flexibility and mindfulness with professional yoga instruction",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Yoga Class",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 5,
                  "name": "Zumba Fitness",
                  "description": "Fun cardio workout with energetic Zumba sessions in Mango, Jamshedpur",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Zumba Class",
                  "areaServed": ["Jamshedpur", "Mango"]
                },
                {
                  "@type": "Service",
                  "position": 6,
                  "name": "Nutrition Consultation",
                  "description": "Professional nutrition guidance by certified nutritionist Aditya Singh",
                  "provider": {
                    "@type": "Person",
                    "name": "Aditya Singh",
                    "jobTitle": "Certified Nutritionist",
                    "hasCredential": ["Certified Nutritionist", "K11 Certified Trainer"],
                    "worksFor": {
                      "@type": "Gym",
                      "name": "OneRepMaax Gym"
                    }
                  },
                  "serviceType": "Nutrition Consultation",
                  "areaServed": "Jamshedpur"
                }
              ]
            }
          `}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What fitness services are available at OneRepMaax Gym Jamshedpur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OneRepMaax Gym offers comprehensive fitness services including K11 certified personal training (₹5,000/month), proven weight loss programs, strength training, yoga classes, Zumba fitness, and nutrition consultation by certified nutritionist Aditya Singh."
                }
              },
              {
                "@type": "Question",
                "name": "How much does personal training cost at OneRepMaax Gym?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Personal training at OneRepMaax Gym costs ₹5,000 per month. Our trainers are K11 certified with proven track records in weight loss transformations and strength training programs."
                }
              },
              {
                "@type": "Question",
                "name": "Are yoga and Zumba classes included in gym membership?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, yoga classes and Zumba fitness sessions are included with your OneRepMaax Gym membership. We offer professional instruction for flexibility, mindfulness, and cardio workouts."
                }
              },
              {
                "@type": "Question",
                "name": "Who provides nutrition consultation at OneRepMaax Gym?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nutrition consultation is provided by Aditya Singh, our founder who is a certified nutritionist, K11 certified trainer, and REPS India member with expertise in weight loss and fitness nutrition."
                }
              },
              {
                "@type": "Question",
                "name": "What makes OneRepMaax fitness services different in Jamshedpur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OneRepMaax offers K11 certified trainers, proven weight loss transformations, comprehensive services under one roof, certified nutrition consultation, and 4.9★ rating with 61 Google reviews - making us Jamshedpur's top-rated fitness center."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="services" aria-labelledby="services-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="services-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            <h1 itemProp="name">OUR SERVICES</h1>
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase" itemProp="description">
          Premium Fitness Services in Jamshedpur
        </h2>
        <p className="w-full text-gray-300 lg:text-2xl font-DM text-lg mt-3 mb-4" itemProp="description">
          Comprehensive fitness services at OneRepMaax Gym including K11 certified personal training starting ₹5,000/month, 
          proven weight loss programs, strength training, yoga classes, Zumba fitness, and nutrition consultation by certified professionals.
        </p>

        {/* ✅ Mobile Slider */}
        <div className="md:hidden mt-10">
          <Slider {...settings} ref={mobileSliderRef}>
            {services.map((service) => (
              <article key={service.id} className="px-2">
                <div 
                  className="border-2 border-gray-600 overflow-hidden h-[36rem] flex flex-col"
                  onTouchStart={handleCardHoldStart}
                  onTouchEnd={handleCardHoldEnd}
                  onMouseDown={handleCardHoldStart}
                  onMouseUp={handleCardHoldEnd}
                  onMouseLeave={handleCardHoldEnd}
                >
                  <div className="h-[22rem] overflow-hidden">
                    <img
                      src={service.img}
                      alt={`${service.title} at OneRepMaax Gym Jamshedpur - ${service.description}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <img 
                        src={service.logo} 
                        alt={`${service.title} icon`} 
                        className="w-12 h-12 mx-auto mb-2" 
                        loading="lazy"
                      />
                      <h3 className="text-xl font-One mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-3 font-DM">{service.description}</p>
                    </div>
                    <div className="text-xs text-gray-400 mt-auto font-DM">
                      <p className="text-[#48D3A3] font-semibold">{service.price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>

        {/* ✅ Tablet Slider */}
        <div className="hidden md:block lg:hidden mt-10">
          <Slider {...settings} ref={tabletSliderRef}>
            {services.map((service) => (
              <article key={service.id} className="p-3">
                <div 
                  className="border-2 border-gray-600 overflow-hidden h-[48rem] flex flex-col"
                  onTouchStart={handleCardHoldStart}
                  onTouchEnd={handleCardHoldEnd}
                  onMouseDown={handleCardHoldStart}
                  onMouseUp={handleCardHoldEnd}
                  onMouseLeave={handleCardHoldEnd}
                >
                  <div className="h-[32rem] overflow-hidden">
                    <img
                      src={service.img}
                      alt={`${service.title} at OneRepMaax Gym Jamshedpur - ${service.description}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <img 
                        src={service.logo} 
                        alt={`${service.title} icon`} 
                        className="w-16 h-16 mx-auto mb-2" 
                        loading="lazy"
                      />
                      <h3 className="text-2xl font-One mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-4 font-DM">{service.description}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-auto font-DM">
                      <p className="text-[#48D3A3] font-semibold">{service.price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>

        {/* ✅ Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {services.map((service) => (
            <article key={service.id} className="border-2 border-gray-600 overflow-hidden transition-transform hover:scale-105">
              <div className="h-[28rem] overflow-hidden">
                <img
                  src={service.img}
                  alt={`${service.title} at OneRepMaax Gym Jamshedpur - ${service.description}`}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <img 
                  src={service.logo} 
                  alt={`${service.title} icon`} 
                  className="w-16 h-16 mx-auto mb-2" 
                  loading="lazy"
                />
                <h3 className="text-xl lg:text-2xl font-One mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed font-DM">{service.description}</p>
                <div className="text-sm text-gray-400 font-DM">
                  <p className="text-[#48D3A3] font-semibold">{service.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
    </section>
    </>
  );
};

export default Services;

import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '../components/Icon';
import {FITNESS_IMAGES, FACILITY_IMAGES} from '../config/imageConfig';
import{ DSC06200, DSC06244 } from "../Imgs/Imgs"; 
import {DSC06168} from '../Imgs/Imgs'; // Importing the specific image
import {DSC06120} from '../Imgs/Imgs'; // Importing the specific image
import {z1} from "../FT/ft.js"; // Importing the specific image
import {oow} from "../FT/ft.js"; // Importing the specific image



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
      img: z1, // Personal training image
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Personal Training",
      description: "K11 certified personal trainers in Jamshedpur with proven weight loss transformations",
      keywords: "personal trainer Jamshedpur, one-on-one training, K11 certified",
      price: "Starting from ₹5,000/month"
    },
    {
      id: 2,
      img: DSC06120, // Weight loss/cardio image
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Weight Loss Programs",
      description: "Proven weight loss transformations with nutrition consultation and certified guidance",
      keywords: "weight loss Jamshedpur, fat loss program, nutrition consultation",
      price: "Customized plans available"
    },

    {
      id: 4,
      img: oow, // Group fitness classes image
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Strength Training",
      description:   "Build muscle and strength with state-of-the-art equipment and expert guidance",
      keywords: "group fitness Jamshedpur, Zumba classes, yoga classes",
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
      
      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="services" aria-labelledby="services-heading">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="services-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            <h1>OUR SERVICES</h1>
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase">
          Premium Fitness Services in Jamshedpur
        </h2>
        <p className="w-full text-gray-300 lg:text-2xl font-DM text-lg mt-3 mb-4">
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

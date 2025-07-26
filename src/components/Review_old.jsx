import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import Icon from './Icon';

const Review_old = () => {
  const sliderRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const holdTimeoutRef = useRef(null);
  
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

  const reviews = [
    {
      id: 2,
      quote: "One of the best gyms around. Clean space, top-quality equipment, and trainers who actually care. Highly recommend!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Gurnake Singh",
      role: "Fitness Enthusiast",
      image: IMAGES.gurnakeSingh2,
      date: "2024-12-15"
    },
    {
      id: 3,
      quote: "It's Fabulous! Amazing equipment and professional trainers make every workout session incredible.",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Amarjeet Singh",
      role: "Community Athlete",
      image: IMAGES.amarjeetSingh2,
      date: "2024-12-10"
    },
    {
      id: 4,
      quote: "Well-equipped gym with good trainers and a really nice environment. Great place to work on your fitness!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Sagar Kumar",
      role: "Dedicated Lifter",
      image: IMAGES.sagarKumar,
      date: "2024-12-08"
    },
    {
      id: 1,
      quote: "Excellent gym with certified trainers. The atmosphere is motivating and the guidance is top-notch!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Jasbir Singh",
      role: "Active Member",
      image: IMAGES.jasbirSingh2,
      date: "2024-12-05"
    },
    {
      id: 6,
      quote: "My fitness journey started with OneRepMaax and it's still going strong. Great trainers and motivating environment!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Jasprit Singh",
      role: "Daily Grinder",
      image: IMAGES.jaspritSingh2,
      date: "2024-12-01"
    },
    {
      id: 5,
      quote: "Been with OneRepMaax since the beginning. Amazing experience with great trainers!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Sahil Kumar",
      role: "Regular Trainee",
      image: IMAGES.sahilKumar,
      date: "2024-11-28"
    }
  ];

  const settings = {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          speed: 500,
          cssEase: 'ease-in-out',
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

  return (
    <>

      <section 
        className="text-white text-xl mt-16 sm:mt-20 md:mt-24 lg:mx-24 mx-6 mb-16" 
        aria-labelledby="reviews-heading"
      >
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Icon />
          <header id="reviews-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-One text-[#48D3A3]">
            Our Reviews
          </header>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-One text-white mb-2 sm:mb-3 uppercase leading-tight">
          What Our Members Are Saying
        </h2>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-M max-w-full sm:max-w-2xl md:max-w-3xl leading-relaxed mb-4 sm:mb-0">
            Discover how our certified trainers and premium facilities transformed our members' fitness journeys at OneRepMaax Gym.
          </p>
          
          {/* Rating Summary */}
          <div className="flex flex-col items-start sm:items-end">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl md:text-3xl lg:text-4xl font-One text-yellow-400">4.9</span>
              <div className="flex text-yellow-400 text-lg md:text-xl lg:text-2xl">
                ★★★★★
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 font-M">
              Based on 60+ Google Reviews
            </p>
          </div>
        </div>

        <div className="review-slider">
        <Slider {...settings} ref={sliderRef}>
          {reviews.map((review) => (
            <div key={review.id} className="p-1 h-full">
              <div 
                className="p-4 border-2 border-[#53f0b8] shadow-2xl text-center flex flex-col justify-between h-full min-h-[24rem] md:min-h-96"
                onTouchStart={handleCardHoldStart}
                onTouchEnd={handleCardHoldEnd}
                onMouseDown={handleCardHoldStart}
                onMouseUp={handleCardHoldEnd}
                onMouseLeave={handleCardHoldEnd}
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-24 h-24 object-cover border-2 border-[#48D3A3] shadow-lg"
                    />
                  </div>

                  <div className="text-white font-M text-sm md:text-2xl px-10 flex items-center justify-center">
                    “{review.quote}”
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-yellow-400 text-2xl mb-2">{review.ratingStars}</div>
                  <p className="text-white text-2xl">{review.name}</p>
                  <p className="text-[#48D3A3] text-xl">{review.role}</p>
                </div>
              </div>
            </div>

          ))}
        </Slider>
        </div>
      </section>
    </>
  );
};

export default Review;

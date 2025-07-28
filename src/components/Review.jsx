import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGES } from '../config/imageConfig';
import Icon from '../components/Icon';

const Review = () => {
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
      
      // Pause the slider
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
      
      // Resume after 2 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 2000);
    }, 500); // 500ms hold requirement
  };

  const handleCardHoldEnd = () => {
    // Clear the hold timer if released before 500ms
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
    }
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
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
      id: 1,
      quote: "OneRepMaax has transformed my fitness journey completely. The trainers are knowledgeable and the equipment is top-notch!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Gurnake Singh",
      role: "Fitness Enthusiast",
      image: IMAGES.gurnakeSingh2,
      date: "2025-07-15"
    },
    {
      id: 2,
      quote: "Best gym in Jamshedpur! Excellent trainers, great atmosphere, and amazing results. Highly recommend OneRepMaax to everyone!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Amarjeet Singh",
      role: "Regular Member",
      image: IMAGES.amarjeetSingh2,
      date: "2025-07-10"
    },
    {
      id: 3,
      quote: "The personalized training approach at OneRepMaax is exceptional. I've achieved goals I never thought possible!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Jasbir Singh",
      role: "Daily Member",
      image: IMAGES.jasbirSingh2,
      date: "2025-07-05"
    },
    {
      id: 4,
      quote: "Clean facility, professional staff, and real results. OneRepMaax exceeded all my expectations for a premium gym experience.",
      rating: 4,
      ratingStars: "★★★★☆",
      name: "Sagar Kumar",
      role: "Member Since 2025",
      image: IMAGES.sagarKumar,
      date: "2025-06-28"
    },
    {
      id: 7,
      quote: "Amazing community and support system. OneRepMaax isn't just a gym, it's a fitness family that motivates you every day!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Sourav Kumar",
      role: "Community Member",
      image: IMAGES.souravKumar,
      date: "2025-06-20"
    },
    {
      id: 6,
      quote: "My fitness journey started with OneRepMaax and it's still going strong. Great trainers and motivating environment!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Jasprit Singh",
      role: "Personal Training Client",
      image: IMAGES.jaspritSingh2,
      date: "2025-06-15"
    },
    {
      id: 5,
      quote: "Been with OneRepMaax since the beginning. Amazing experience with great trainers! Truly inspiring. Highly recommended!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Sahil Kumar",
      role: "Charter Member",
      image: IMAGES.sahilKumar,
      date: "2025-01-15"
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
        className="text-white text-xl mt-16 sm:mt-20 md:mt-24 mb-16" 
        aria-labelledby="reviews-heading"
      >
        <div className="lg:mx-1 mx-1">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Icon />
            <header id="reviews-heading" className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-One text-[#48D3A3]">
              Our Reviews
            </header>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-One text-white mb-2 sm:mb-3 uppercase leading-tight">
            What Our Members Are Saying
          </h2>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-DM max-w-full sm:max-w-2xl md:max-w-3xl leading-relaxed mb-4 sm:mb-0">
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
              <p className="text-xs sm:text-sm md:text-base text-gray-400 font-DM">
                Based on 60+ Google Reviews
              </p>
            </div>
          </div>
        </div>

        <div className="review-slider">
          <Slider {...settings} ref={sliderRef}>
            {reviews.map((review, index) => (
              <div key={review.id} className="px-2 sm:px-3 h-full">
                <article 
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-600 hover:border-[#48D3A3] transition-all duration-300 shadow-xl hover:shadow-2xl text-center flex flex-col justify-between h-full min-h-[20rem] sm:min-h-[22rem] md:min-h-[24rem] lg:min-h-[26rem] xl:min-h-[28rem] 2xl:min-h-[30rem] p-4 sm:p-5 md:p-6 xl:p-8 max-w-full xl:max-w-[480px] 2xl:max-w-[520px] mx-auto relative overflow-hidden group "
                  onTouchStart={handleCardHoldStart}
                  onTouchEnd={handleCardHoldEnd}
                  onMouseDown={handleCardHoldStart}
                  onMouseUp={handleCardHoldEnd}
                  onMouseLeave={handleCardHoldEnd}
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Member Photo */}
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={`${review.name} - OneRepMaax Gym member`}
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover border-3 border-[#48D3A3] shadow-lg group-hover:scale-105 transition-transform duration-300 rounded-full"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-[#48D3A3] text-black text-xs sm:text-sm font-One font-bold px-2 py-1 shadow-lg rounded-lg">
                          ★{review.rating}
                        </div>
                      </div>
                    </div>

                    {/* Review Quote */}
                    <blockquote className="text-white font-DM text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 px-3 sm:px-4 flex items-center justify-center min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] relative">
                      <div className="relative text-center">
                        <span className="relative z-10">
                          {review.quote}
                        </span>
                      </div>
                    </blockquote>
                  </div>

                  {/* Rating and Member Info */}
                  <div className="relative z-10 mt-auto">
                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
                      <span className="sr-only">{review.rating}</span>
                      <span className="sr-only">5</span>
                      {review.ratingStars}
                    </div>
                    <div>
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-One font-bold mb-1">
                        {review.name}
                      </h3>
                      <p className="text-[#48D3A3] text-sm sm:text-base md:text-lg font-DM font-medium">
                        {review.role}
                      </p>
                    </div>
                    <time className="text-xs sm:text-sm text-gray-500 font-DM mt-2 block" dateTime={review.date}>
                      {new Date(review.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 pt-8 sm:pt-12 lg:mx-2 mx-2">
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-One mb-4 sm:mb-6">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-DM leading-relaxed px-2 sm:px-4">
              Join thousands of satisfied members who've achieved their fitness goals at OneRepMaax Gym. Your success story starts here!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-2 sm:px-4">
            <a 
              href="https://share.google/UOdSG9p48LGVfRTlC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#48D3A3] to-[#3BC493] text-white font-One font-bold py-4 sm:py-5 px-10 sm:px-12 md:px-16 hover:from-[#3BC493] hover:to-[#48D3A3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base sm:text-lg md:text-xl lg:text-2xl active:scale-95"
              aria-label="Leave a review for OneRepMaax Gym on Google"
            >
              <span className="flex items-center justify-center gap-2">
                <span>⭐</span>
                <span>LEAVE A REVIEW</span>
                <span>⭐</span>
              </span>
            </a>
            
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-DM mb-2">
                Share Your OneRepMaax Experience
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-DM">
                Help others discover their fitness potential
              </p>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-12 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-DM">
              <div className="flex items-center gap-3">
                <span className="text-[#48D3A3] text-lg sm:text-xl">✓</span>
                <span>60+ Google Reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#48D3A3] text-lg sm:text-xl">✓</span>
                <span>4.9★ Average Rating</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#48D3A3] text-lg sm:text-xl">✓</span>
                <span>Certified Trainers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .review-slider .slick-dots {
          bottom: -80px;
          text-align: center;
        }
        
        .review-slider .slick-dots li {
          margin: 0 6px;
        }
        
        .review-slider .slick-dots li button {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(45deg, #48D3A3, #3BC493);
          border: 2px solid transparent;
          outline: none;
          transition: all 0.3s ease;
        }
        
        .review-slider .slick-dots li button:before {
          display: none;
        }
        
        .review-slider .slick-dots li.slick-active button {
          background: linear-gradient(45deg, #FCDE3B, #F59E0B);
          transform: scale(1.4);
          box-shadow: 0 0 20px rgba(252, 222, 59, 0.6);
        }
        
        .review-slider .slick-dots li:hover button {
          transform: scale(1.2);
          box-shadow: 0 0 15px rgba(72, 211, 163, 0.4);
        }
        
        @media (max-width: 768px) {
          .review-slider .slick-dots {
            bottom: -70px;
          }
          
          .review-slider .slick-dots li {
            margin: 0 4px;
          }
          
          .review-slider .slick-dots li button {
            width: 12px;
            height: 12px;
          }
          
          .review-slider .slick-dots li.slick-active button {
            transform: scale(1.3);
          }
          
          .review-slider .slick-dots li:hover button {
            transform: scale(1.1);
          }
        }
        
        @media (max-width: 480px) {
          .review-slider .slick-dots {
            bottom: -60px;
          }
          
          .review-slider .slick-dots li button {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Review;

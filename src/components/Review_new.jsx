import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGES } from '../config/imageConfig';
import Icon from '../components/Icon';
import { Helmet } from 'react-helmet';

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
      date: "2024-12-15"
    },
    {
      id: 2,
      quote: "Best gym in Jamshedpur! Excellent trainers, great atmosphere, and amazing results. Highly recommend OneRepMaax to everyone!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Amarjeet Singh",
      role: "Regular Member",
      image: IMAGES.amarjeetSingh,
      date: "2024-12-12"
    },
    {
      id: 3,
      quote: "The personalized training approach at OneRepMaax is exceptional. I've achieved goals I never thought possible!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Jasbir Singh",
      role: "Personal Training Client",
      image: IMAGES.jasbirSingh2,
      date: "2024-12-10"
    },
    {
      id: 4,
      quote: "Clean facility, professional staff, and real results. OneRepMaax exceeded all my expectations for a premium gym experience.",
      rating: 4,
      ratingStars: "★★★★☆",
      name: "Sagar Kumar",
      role: "Member Since 2023",
      image: IMAGES.sagarKumar,
      date: "2024-12-08"
    },
    {
      id: 7,
      quote: "Amazing community and support system. OneRepMaax isn't just a gym, it's a fitness family that motivates you every day!",
      rating: 5,
      ratingStars: "★★★★★",
      name: "Sourav Kumar",
      role: "Community Member",
      image: IMAGES.souravKumar,
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
      <Helmet>
        <title>OneRepMaax Gym Reviews - Member Testimonials Jamshedpur | 4.9★ Rated</title>
        <meta 
          name="description" 
          content="Read authentic reviews from OneRepMaax Gym members in Jamshedpur. 4.9★ rated fitness center with 60+ Google reviews. Discover why our members love training with K11 certified trainers at Dimna Road." 
        />
        <meta 
          name="keywords" 
          content="OneRepMaax gym reviews, gym testimonials Jamshedpur, fitness center reviews Mango, gym member feedback, best gym reviews Dimna Road, OneRepMaax member experiences, certified trainer reviews, gym ratings Jamshedpur" 
        />
        <meta property="og:title" content="OneRepMaax Gym Reviews - 4.9★ Member Testimonials | Jamshedpur" />
        <meta property="og:description" content="Discover why OneRepMaax Gym members love our certified trainers and premium facilities. Read authentic reviews from our fitness community." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="OneRepMaax Gym Reviews - Member Testimonials" />
        <meta name="twitter:description" content="4.9★ rated gym with authentic member reviews and testimonials from Jamshedpur's premier fitness center." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "OneRepMaax Gym Member Reviews",
              "description": "Authentic testimonials from OneRepMaax Gym members showcasing their fitness journey experiences",
              "numberOfItems": ${reviews.length},
              "itemListElement": [
                ${reviews.map((review, index) => `
                  {
                    "@type": "Review",
                    "position": ${index + 1},
                    "reviewBody": "${review.quote}",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": ${review.rating},
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "datePublished": "${review.date}",
                    "author": {
                      "@type": "Person",
                      "name": "${review.name}"
                    },
                    "itemReviewed": {
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
                    }
                  }`).join(',')}
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "60",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </script>
      </Helmet>

      <section 
        className="text-white text-xl mt-16 sm:mt-20 md:mt-24 lg:mx-24 mx-6 mb-16" 
        aria-labelledby="reviews-heading"
        itemScope 
        itemType="https://schema.org/ItemList"
      >
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Icon />
          <header id="reviews-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-One text-[#48D3A3]" itemProp="name">
            Our Reviews
          </header>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-One text-white mb-2 sm:mb-3 uppercase leading-tight" itemProp="description">
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

        <div className="review-slider" itemProp="itemListElement">
          <Slider {...settings} ref={sliderRef}>
            {reviews.map((review, index) => (
              <div key={review.id} className="px-2 sm:px-3 h-full">
                <article 
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-600 hover:border-[#48D3A3] transition-all duration-300 shadow-xl hover:shadow-2xl text-center flex flex-col justify-between h-full min-h-[20rem] sm:min-h-[22rem] md:min-h-[24rem] lg:min-h-[26rem] p-4 sm:p-5 md:p-6 relative overflow-hidden group"
                  onTouchStart={handleCardHoldStart}
                  onTouchEnd={handleCardHoldEnd}
                  onMouseDown={handleCardHoldStart}
                  onMouseUp={handleCardHoldEnd}
                  onMouseLeave={handleCardHoldEnd}
                  itemScope
                  itemType="https://schema.org/Review"
                  itemProp="review"
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
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover border-3 border-[#48D3A3] shadow-lg group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          itemProp="image"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-[#48D3A3] text-black text-xs sm:text-sm font-One font-bold px-2 py-1 shadow-lg">
                          ★{review.rating}
                        </div>
                      </div>
                    </div>

                    {/* Review Quote */}
                    <blockquote className="text-white font-M text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-5 px-2 flex items-center justify-center min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]" itemProp="reviewBody">
                      <span className="relative">
                        <span className="absolute -left-3 -top-2 text-[#48D3A3] text-2xl sm:text-3xl font-One">"</span>
                        {review.quote}
                        <span className="absolute -right-1 -bottom-2 text-[#48D3A3] text-2xl sm:text-3xl font-One">"</span>
                      </span>
                    </blockquote>
                  </div>

                  {/* Rating and Member Info */}
                  <div className="relative z-10 mt-auto">
                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <span itemProp="ratingValue" className="sr-only">{review.rating}</span>
                      <span itemProp="bestRating" className="sr-only">5</span>
                      {review.ratingStars}
                    </div>
                    <div itemProp="author" itemScope itemType="https://schema.org/Person">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-One font-bold mb-1" itemProp="name">
                        {review.name}
                      </h3>
                      <p className="text-[#48D3A3] text-sm sm:text-base md:text-lg font-M font-medium" itemProp="jobTitle">
                        {review.role}
                      </p>
                    </div>
                    <time className="text-xs sm:text-sm text-gray-500 font-M mt-2 block" itemProp="datePublished" dateTime={review.date}>
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
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-M mb-4 sm:mb-6">
            Ready to start your own transformation story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="https://g.page/r/onerepmaax/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#48D3A3] to-[#3BC493] text-white font-One font-bold py-3 px-6 sm:py-4 sm:px-8 hover:from-[#3BC493] hover:to-[#48D3A3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base md:text-lg"
              aria-label="Leave a review for OneRepMaax Gym on Google"
            >
              Leave a Review
            </a>
            <span className="text-gray-400 font-M text-xs sm:text-sm">
              Share your OneRepMaax experience
            </span>
          </div>
        </div>
      </section>

      <style jsx>{`
        .review-slider .slick-dots {
          bottom: -50px;
          text-align: center;
        }
        
        .review-slider .slick-dots li {
          margin: 0 8px;
        }
        
        .review-slider .slick-dots li button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #48D3A3, #3BC493);
          border: 2px solid transparent;
          outline: none;
        }
        
        .review-slider .slick-dots li button:before {
          display: none;
        }
        
        .review-slider .slick-dots li.slick-active button {
          background: linear-gradient(45deg, #FCDE3B, #F59E0B);
          transform: scale(1.3);
          box-shadow: 0 0 15px rgba(252, 222, 59, 0.5);
        }
        
        @media (max-width: 768px) {
          .review-slider .slick-dots {
            bottom: -40px;
          }
          
          .review-slider .slick-dots li {
            margin: 0 4px;
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

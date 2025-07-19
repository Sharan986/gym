import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import One from "../assets/Trainers/ONE.jpg";
import Two from "../assets/Trainers/TWO.jpg";
import Three from "../assets/Trainers/THREE.jpg";
import FOUR from "../assets/Trainers/FOUR.jpg";
import FIVE from "../assets/Trainers/FIVE.jpg";
import SIX from "../assets/Trainers/SIX.jpg";
import Icon from '../components/Icon';
import { Helmet } from 'react-helmet';
import { TRAINER} from '../config/imageConfig';

const Trainers = () => {
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

  const trainers = [
       {
      id: 4,
      img: TRAINER[2],
      name: "ADITYA SINGH",
      title: "FOUNDER & K11 CERTIFIED TRAINER",
      description: "K11 certified trainer, REPS India member, and certified nutritionist with proven weight loss transformations",
      specializations: ["Personal Training", "Weight Loss", "Nutrition Consultation", "Strength Training"],
      experience: "10+ years",
      certifications: ["K11 Certified", "REPS India Member", "Certified Nutritionist", "CPR & AED Certified"]
    },

    {
      id: 1,
      img: TRAINER[3],
      name: "SMRITI ROY",
      title: "CO-FOUNDER & TRAINER",
      description: "Co-founder and experienced trainer specializing in women's fitness and functional training",
      specializations: ["Women's Fitness", "Functional Training", "Yoga", "Group Classes"],
      experience: "8+ years",
      certifications: ["Certified Fitness Trainer", "Yoga Instructor"]
    },
    {
      id: 2,
      img: TRAINER[1],
      name: "FAZAL RAHMAAN",
      title: "TRAINER",
      description: "Experienced trainer focused on strength training and muscle building programs",
      specializations: ["Strength Training", "Muscle Building", "Powerlifting", "Athletic Training"],
      experience: "6+ years",
      certifications: ["Certified Fitness Trainer", "Strength & Conditioning"]
    },
    {
      id: 3,
      img: TRAINER[0],
      name: "RAJ KUMAR",
      title: "TRAINER",
      description: "Professional trainer specializing in cardio workouts and endurance training",
      specializations: ["Cardio Training", "Endurance", "HIIT", "Circuit Training"],
      experience: "5+ years",
      certifications: ["Certified Fitness Trainer", "Cardio Specialist"]
    },
 
    {
      id: 5,
      img: TRAINER[4],
      name: "ABHISHEK KUMAR",
      title: "TRAINER",
      description: "Dedicated trainer with expertise in rehabilitation and injury prevention",
      specializations: ["Rehabilitation", "Injury Prevention", "Corrective Exercise", "Mobility Training"],
      experience: "4+ years",
      certifications: ["Certified Fitness Trainer", "Corrective Exercise Specialist"]
    },
    {
      id: 6,
      img: TRAINER[5],
      name: "ZAIN IBRAHIM",
      title: "TRAINER",
      description: "Dynamic trainer specializing in youth fitness and sports conditioning",
      specializations: ["Youth Fitness", "Sports Conditioning", "Agility Training", "Flexibility"],
      experience: "3+ years",
      certifications: ["Certified Fitness Trainer", "Youth Fitness Specialist"]
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
        <title>Best Personal Trainers Jamshedpur | K11 Certified Fitness Experts at OneRepMaax Gym</title>
        <meta 
          name="description" 
          content="Meet Jamshedpur's top fitness trainers at OneRepMaax Gym. K11 certified founder Aditya Singh, REPS India member & certified nutritionist. Expert trainers for weight loss, strength training, women's fitness & sports conditioning. 61 Google reviews - 4.9★ rated!" 
        />
        <meta 
          name="keywords" 
          content="best personal trainers Jamshedpur, K11 certified trainer, fitness trainers Mango, certified nutritionist Jamshedpur, REPS India member, women's fitness trainer, strength training coach Jamshedpur, OneRepMaax trainers, professional gym trainers Dimna Road, fitness experts Jamshedpur, personal training certification, weight loss trainer Jamshedpur" 
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="OneRepMaax Gym Jamshedpur" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Jamshedpur" />
        <meta name="geo.position" content="22.8046;86.2029" />
        <meta name="ICBM" content="22.8046, 86.2029" />
        <meta property="og:title" content="Best Personal Trainers Jamshedpur | K11 Certified Fitness Experts" />
        <meta property="og:description" content="Meet Jamshedpur's top fitness team led by K11 certified founder Aditya Singh. Expert trainers specializing in weight loss, strength training, women's fitness & personalized programs. 4.9★ rated!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onerepmaaxgym.in/#trainers" />
        <meta property="og:site_name" content="OneRepMaax Gym Jamshedpur" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:author" content="OneRepMaax Gym" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Personal Trainers Jamshedpur | K11 Certified Fitness Experts" />
        <meta name="twitter:description" content="Meet Jamshedpur's top fitness trainers. K11 certified, REPS India members with proven results in weight loss & strength training." />
        <link rel="canonical" href="https://onerepmaaxgym.in/trainers" />
        <link rel="alternate" hreflang="en-IN" href="https://onerepmaaxgym.in/trainers" />
        <link rel="alternate" hreflang="hi-IN" href="https://onerepmaaxgym.in/hi/trainers" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "OneRepMaax Gym Professional Trainers",
              "description": "Professional fitness trainers and certified specialists at OneRepMaax Gym Jamshedpur",
              "itemListElement": [
                {
                  "@type": "Person",
                  "position": 1,
                  "name": "Aditya Singh",
                  "jobTitle": "Founder & K11 Certified Trainer",
                  "description": "K11 certified trainer, REPS India member, and certified nutritionist with proven weight loss transformations",
                  "hasCredential": [
                    "K11 Certified Trainer",
                    "REPS India Member", 
                    "Certified Nutritionist",
                    "CPR & AED Certified"
                  ],
                  "knowsAbout": [
                    "Personal Training",
                    "Weight Loss",
                    "Nutrition Consultation",
                    "Strength Training"
                  ],
                  "worksFor": {
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
                  "memberOf": {
                    "@type": "Organization",
                    "name": "REPS India"
                  }
                },
                {
                  "@type": "Person",
                  "position": 2,
                  "name": "Smriti Roy",
                  "jobTitle": "Co-Founder & Trainer",
                  "description": "Co-founder and experienced trainer specializing in women's fitness and functional training",
                  "hasCredential": [
                    "Certified Fitness Trainer",
                    "Yoga Instructor"
                  ],
                  "knowsAbout": [
                    "Women's Fitness",
                    "Functional Training",
                    "Yoga",
                    "Group Classes"
                  ],
                  "worksFor": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  }
                },
                {
                  "@type": "Person",
                  "position": 3,
                  "name": "Fazal Rahmaan",
                  "jobTitle": "Fitness Trainer",
                  "description": "Experienced trainer focused on strength training and muscle building programs",
                  "hasCredential": [
                    "Certified Fitness Trainer",
                    "Strength & Conditioning Specialist"
                  ],
                  "knowsAbout": [
                    "Strength Training",
                    "Muscle Building",
                    "Powerlifting",
                    "Athletic Training"
                  ],
                  "worksFor": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  }
                },
                {
                  "@type": "Person",
                  "position": 4,
                  "name": "Raj Kumar",
                  "jobTitle": "Fitness Trainer",
                  "description": "Professional trainer specializing in cardio workouts and endurance training",
                  "hasCredential": [
                    "Certified Fitness Trainer",
                    "Cardio Specialist"
                  ],
                  "knowsAbout": [
                    "Cardio Training",
                    "Endurance Training",
                    "HIIT",
                    "Circuit Training"
                  ],
                  "worksFor": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  }
                },
                {
                  "@type": "Person",
                  "position": 5,
                  "name": "Abhishek Kumar",
                  "jobTitle": "Fitness Trainer",
                  "description": "Dedicated trainer with expertise in rehabilitation and injury prevention",
                  "hasCredential": [
                    "Certified Fitness Trainer",
                    "Corrective Exercise Specialist"
                  ],
                  "knowsAbout": [
                    "Rehabilitation",
                    "Injury Prevention",
                    "Corrective Exercise",
                    "Mobility Training"
                  ],
                  "worksFor": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  }
                },
                {
                  "@type": "Person",
                  "position": 6,
                  "name": "Zain Ibrahim",
                  "jobTitle": "Fitness Trainer",
                  "description": "Dynamic trainer specializing in youth fitness and sports conditioning",
                  "hasCredential": [
                    "Certified Fitness Trainer",
                    "Youth Fitness Specialist"
                  ],
                  "knowsAbout": [
                    "Youth Fitness",
                    "Sports Conditioning",
                    "Agility Training",
                    "Flexibility Training"
                  ],
                  "worksFor": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
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
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who are the best personal trainers in Jamshedpur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym has Jamshedpur's best trainers led by founder Aditya Singh (K11 certified, REPS India member, certified nutritionist), plus expert trainers specializing in women's fitness, strength training, cardio, rehabilitation, and youth fitness."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What certifications do OneRepMaax trainers have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our trainers hold prestigious certifications including K11 Certification, REPS India membership, Certified Nutritionist, CPR & AED Certified, Strength & Conditioning Specialist, Yoga Instructor, and specialized certifications in corrective exercise and youth fitness."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a female trainer available at OneRepMaax Gym?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Smriti Roy is our co-founder and experienced female trainer specializing in women's fitness, functional training, yoga, and group classes with 8+ years of experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What specializations do OneRepMaax trainers offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our trainers specialize in personal training, weight loss, nutrition consultation, strength training, women's fitness, functional training, powerlifting, cardio training, rehabilitation, injury prevention, youth fitness, and sports conditioning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How experienced are the trainers at OneRepMaax Gym?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our trainers have 3-10+ years of experience, with founder Aditya Singh having 10+ years as a K11 certified trainer and REPS India member, ensuring expert guidance for all fitness goals."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="trainers" aria-labelledby="trainers-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="trainers-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            <h1 itemProp="name">OUR TRAINERS</h1>
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase" itemProp="description">
          Expert Fitness Team in Jamshedpur
        </h2>
        <p className="w-full text-gray-300 lg:text-2xl font-DM text-lg mt-3 mb-4" itemProp="description">
          Meet Jamshedpur's most qualified fitness professionals at OneRepMaax Gym. Our team includes K11 certified trainers, 
          REPS India members, and certified nutritionists with proven track records in weight loss, strength training, and specialized fitness programs.
        </p>

        {/* ✅ Mobile Slider */}
        <div className="md:hidden mt-10">
          <Slider {...settings} ref={mobileSliderRef}>
            {trainers.map((trainer) => (
              <article key={trainer.id} className="px-2">
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
                      src={trainer.img}
                      alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-One mb-2">{trainer.name}</h3>
                      <p className="text-lg text-[#48D3A3] mb-2 font-DM">{trainer.title}</p>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-2 font-DM">{trainer.description}</p>
                    </div>
                    <div className="text-xs text-gray-400 mt-auto font-DM">
                      <p className="mb-1">Experience: {trainer.experience}</p>
                      <p>Specializations: {trainer.specializations.slice(0, 2).join(', ')}</p>
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
            {trainers.map((trainer) => (
              <article key={trainer.id} className="p-3">
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
                      src={trainer.img}
                      alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-One mb-2">{trainer.name}</h3>
                      <p className="text-lg text-[#48D3A3] mb-2 font-DM">{trainer.title}</p>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-3 font-DM">{trainer.description}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-auto font-DM">
                      <p className="mb-1">Experience: {trainer.experience}</p>
                      <p className="mb-1">Specializations: {trainer.specializations.slice(0, 3).join(', ')}</p>
                      <p>Certifications: {trainer.certifications.slice(0, 2).join(', ')}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>

        {/* ✅ Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {trainers.map((trainer) => (
            <article key={trainer.id} className="border-2 border-gray-600 overflow-hidden transition-transform hover:scale-105">
              <div className="h-[28rem] overflow-hidden">
                <img
                  src={trainer.img}
                  alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                  className="w-full h-full object-cover lg:object-top object-center transition-transform hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl lg:text-2xl font-One mb-2">{trainer.name}</h3>
                <p className="text-lg text-[#48D3A3] mb-2 font-DM">{trainer.title}</p>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed font-DM">{trainer.description}</p>
                <div className="text-sm text-gray-400 font-DM">
                  <p className="mb-1">Experience: {trainer.experience}</p>
                  <p className="mb-1">Specializations: {trainer.specializations.slice(0, 2).join(', ')}</p>
                  <p>Certifications: {trainer.certifications.slice(0, 2).join(', ')}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Trainers;

import React, { useRef} from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '../components/Icon';
import ResponsiveImage from '../components/ResponsiveImage';
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
      experience: "6+ years",
      certifications: ["K11 Certified", "REPS India Member", "Certified Nutritionist", "CPR & AED Certified"]
    },

    {
      id: 1,
      img: TRAINER[3],
      name: "SMRITI ROY",
      title: "CO-FOUNDER & TRAINER",
      description: "B.Tech Civil Engineer turned fitness expert, co-founder specializing in women's fitness and functional training with engineering precision",
      specializations: ["Women's Fitness", "Functional Training", "Yoga", "Group Classes"],
      experience: "3+ years",
      certifications: ["B.Tech Civil Engineering", "Certified Fitness Trainer"]
    },
    {
      id: 2,
      img: TRAINER[1],
      name: "FAZAL RAHMAAN",
      title: "K11 CERTIFIED TRAINER",
      description: "K11 certified fitness professional focused on strength training and muscle building programs with proven methodologies",
      specializations: ["Strength Training", "Muscle Building", "Powerlifting", "Athletic Training"],
      experience: "4+ years",
      certifications: ["K11 Certified", "Strength & Conditioning"]
    },
    {
      id: 3,
      img: TRAINER[6],
      name: "Md asif anwar",
      title: "TRAINER",
        description: "Professional trainer specializing in Arm Wrestling workouts and strength training programs",
      specializations: ["Arm Wrestling", "Endurance", "Strength", "Circuit Training"],
      experience: "1+ years",
      certifications: ["Gold's Gym Certified", "Cardio Specialist"]
    },
 
    {
      id: 5,
      img: TRAINER[4],
      name: "ABHISHEK KUMAR",
      title: "TRAINER",
      description: "Dedicated trainer with expertise in rehabilitation and injury prevention",
      specializations: ["Rehabilitation", "Injury Prevention", "Corrective Exercise", "Mobility Training"],
      experience: "2+ years",
      certifications: ["Certified Fitness Trainer", "Corrective Exercise Specialist"]
    },
    {
      id: 6,
      img: TRAINER[7],
      name: "NISHU KUMARI",
      title: "TRAINER",
      description: "Dynamic and passionate trainer specializing in youth fitness and sports conditioning with dedicated approach",
      specializations: ["Youth Fitness", "Sports Conditioning", "Agility Training", "Flexibility"],
      experience: "2+ years",
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
        <title>Professional Trainers Team - OneRepMaax Gym Jamshedpur | K11 Certified</title>
        <meta name="description" content="Meet Jamshedpur's most qualified fitness professionals at OneRepMaax Gym. K11 certified trainers, nutrition experts, and transformation specialists for personalized fitness programs." />
        <link rel="canonical" href="https://onerepmaax.com/our-trainers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Trainers Team - OneRepMaax Gym Jamshedpur | K11 Certified" />
        <meta property="og:description" content="Meet Jamshedpur's most qualified fitness professionals at OneRepMaax Gym. K11 certified trainers, nutrition experts, and transformation specialists for personalized fitness programs." />
        <meta property="og:url" content="https://onerepmaax.com/our-trainers" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Professional Trainers Team - OneRepMaax Gym Jamshedpur | K11 Certified" />
        <meta name="twitter:description" content="Meet Jamshedpur's most qualified fitness professionals at OneRepMaax Gym. K11 certified trainers, nutrition experts, and transformation specialists for personalized fitness programs." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Professional Trainers Team",
            "description": "K11 certified trainers and fitness professionals at OneRepMaax Gym Jamshedpur",
            "publisher": {
              "@type": "HealthClub",
              "name": "OneRepMaax Gym",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jamshedpur",
                "addressRegion": "Jharkhand",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>
      
      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="trainers" aria-labelledby="trainers-heading">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="trainers-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            <h1>OUR TRAINERS</h1>
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase">
          Expert Fitness Team in Jamshedpur
        </h2>
        <p className="w-full text-gray-300 lg:text-2xl font-DM text-lg mt-3 mb-4">
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
                    <ResponsiveImage
                      src={trainer.img}
                      alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                      className="w-full h-full object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                    <ResponsiveImage
                      src={trainer.img}
                      alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                      className="w-full h-full object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-One mb-2">{trainer.name}</h3>
                      <p className="text-lg text-[#48D3A3] mb-2 font-DM">{trainer.title}</p>
                      <p className="text-sm text-gray-300 mb-3 lg:text-xl leading-relaxed line-clamp-3 font-DM">{trainer.description}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-auto font-DM">
                      <p className="mb-1  lg:text-2xl">Experience: {trainer.experience}</p>
                      <p className="mb-1  lg:text-2xl">Specializations: {trainer.specializations.slice(0, 3).join(', ')}</p>
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
                <ResponsiveImage
                  src={trainer.img}
                  alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                  className="w-full h-full object-cover lg:object-top object-center transition-transform hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 33vw"
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

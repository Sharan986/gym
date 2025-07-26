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

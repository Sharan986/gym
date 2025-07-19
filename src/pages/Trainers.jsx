import React from 'react';
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

const Trainers = () => {
  const trainers = [
       {
      id: 4,
      img: FOUR,
      name: "ADITYA SINGH",
      title: "FOUNDER & K11 CERTIFIED TRAINER",
      description: "K11 certified trainer, REPS India member, and certified nutritionist with proven weight loss transformations",
      specializations: ["Personal Training", "Weight Loss", "Nutrition Consultation", "Strength Training"],
      experience: "10+ years",
      certifications: ["K11 Certified", "REPS India Member", "Certified Nutritionist", "CPR & AED Certified"]
    },

    {
      id: 1,
      img: One,
      name: "SMRITI ROY",
      title: "CO-FOUNDER & TRAINER",
      description: "Co-founder and experienced trainer specializing in women's fitness and functional training",
      specializations: ["Women's Fitness", "Functional Training", "Yoga", "Group Classes"],
      experience: "8+ years",
      certifications: ["Certified Fitness Trainer", "Yoga Instructor"]
    },
    {
      id: 2,
      img: Two,
      name: "FAZAL RAHMAAN",
      title: "TRAINER",
      description: "Experienced trainer focused on strength training and muscle building programs",
      specializations: ["Strength Training", "Muscle Building", "Powerlifting", "Athletic Training"],
      experience: "6+ years",
      certifications: ["Certified Fitness Trainer", "Strength & Conditioning"]
    },
    {
      id: 3,
      img: Three,
      name: "RAJ KUMAR",
      title: "TRAINER",
      description: "Professional trainer specializing in cardio workouts and endurance training",
      specializations: ["Cardio Training", "Endurance", "HIIT", "Circuit Training"],
      experience: "5+ years",
      certifications: ["Certified Fitness Trainer", "Cardio Specialist"]
    },
 
    {
      id: 5,
      img: FIVE,
      name: "ABHISHEK KUMAR",
      title: "TRAINER",
      description: "Dedicated trainer with expertise in rehabilitation and injury prevention",
      specializations: ["Rehabilitation", "Injury Prevention", "Corrective Exercise", "Mobility Training"],
      experience: "4+ years",
      certifications: ["Certified Fitness Trainer", "Corrective Exercise Specialist"]
    },
    {
      id: 6,
      img: SIX,
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
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Helmet>
        <title>Professional Trainers - OneRepMaax Gym Jamshedpur | K11 Certified Personal Trainers</title>
        <meta 
          name="description" 
          content="Meet our professional fitness trainers at OneRepMaax Gym Jamshedpur. Led by K11 certified founder Aditya Singh, REPS India member & certified nutritionist. Expert trainers for weight loss, strength training & specialized fitness programs. 61 Google reviews - 4.9★!" 
        />
        <meta 
          name="keywords" 
          content="personal trainers Jamshedpur, K11 certified trainer, fitness trainers Mango, certified nutritionist, REPS India member, women's fitness trainer, strength training coach, OneRepMaax trainers, professional gym trainers Dimna Road, 61 google reviews, 4.9 star rated trainers" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional Fitness Trainers - OneRepMaax Gym Jamshedpur" />
        <meta property="og:description" content="Meet our expert fitness team led by K11 certified founder Aditya Singh. Professional trainers specializing in weight loss, strength training, and personalized fitness programs in Jamshedpur." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onerepmaax.com/#trainers" />
        <link rel="canonical" href="https://onerepmaax.com/#trainers" />
        
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
      </Helmet>
      
      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="trainers" aria-labelledby="trainers-heading">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="trainers-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            OUR TRAINERS
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase">
          Expert Fitness Team in Jamshedpur
        </h2>

        {/* ✅ Mobile Slider */}
        <div className="md:hidden mt-10">
          <Slider {...settings}>
            {trainers.map((trainer) => (
              <article key={trainer.id} className="">
                <div className="border-2 border-gray-600 overflow-hidden h-[42rem] flex flex-col">
                  <div className="h-[28rem] overflow-hidden">
                    <img
                      src={trainer.img}
                      alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                      <p className="text-lg text-[#48D3A3] mb-2">{trainer.title}</p>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-2">{trainer.description}</p>
                    </div>
                    <div className="text-xs text-gray-400 mt-auto">
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
          <Slider {...settings}>
            {trainers.map((trainer) => (
              <article key={trainer.id} className="p-2">
                <div className="border-2 border-gray-600 overflow-hidden h-[58rem] flex flex-col">
                  <div className="h-[40rem] overflow-hidden">
                    <img
                      src={trainer.img}
                      alt={`${trainer.name} - ${trainer.title} at OneRepMaax Gym Jamshedpur`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{trainer.name}</h3>
                      <p className="text-lg text-[#48D3A3] mb-2">{trainer.title}</p>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-3">{trainer.description}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-auto">
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
                <h3 className="text-xl lg:text-2xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-lg text-[#48D3A3] mb-2">{trainer.title}</p>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">{trainer.description}</p>
                <div className="text-sm text-gray-400">
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

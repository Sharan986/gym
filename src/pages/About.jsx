import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { w3 } from "../assets/w3/w3";
import { Helmet } from "react-helmet-async";
import { TRAINER} from '../config/imageConfig';
import {DSC06177} from "../Imgs/Imgs";
import { SevenDaysIcon, PremiumIcon, ExerciseRoutineIcon } from '../config/PublicIconExports';


const About = () => {
  const Values = [
    {
      id: 1,
      title: "Premium Gym Facilities",
      description:
        "Cardio & strength equipment, group fitness studios, personal training areas, locker rooms, free WiFi, coffee, and ample parking - everything you need for fitness success in Jamshedpur.",
      imageUrl: PremiumIcon,
    },
    {
      id: 2,
      title: "Specialized Fitness Programs",
      description:
        "Expert-led Yoga classes, high-energy Zumba sessions, and functional training programs in Mango, Dimna designed to keep you motivated and engaged in your fitness journey.",
      imageUrl: ExerciseRoutineIcon,
    },
    {
      id: 3,
      title: "Open 7 Days a Week",
      description:
        "We're here when you need us! Open 7 days a week with separate changing rooms, showers, posing room, and certified personal trainers ready to support your fitness goals.",
      imageUrl: SevenDaysIcon,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "OneRepMaax Gym",
    "description": "Premier GYM in Jamshedpur offering gym, yoga, Zumba, personal training with K11 certified trainers. Located in Mango, Dimna serving Sankosai area.",
    "url": "https://onerepmaaxgym.in/about",
    "logo": "https://onerepmaaxgym.in/logo.png",
    "image": "https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png",
    "telephone": "+91-9204057290",
    "email": "info@onerepmaaxgym.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dimna Rd, Shankoshai, Mango",
      "addressLocality": "Jamshedpur",
      "addressRegion": "Jharkhand",
      "postalCode": "831018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7868",
      "longitude": "86.2029"
    },
    "openingHours": [
      "Mo-Su 05:00-23:00"
    ],
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Personal Training"},
      {"@type": "LocationFeatureSpecification", "name": "Yoga Classes"},
      {"@type": "LocationFeatureSpecification", "name": "Zumba Classes"},
      {"@type": "LocationFeatureSpecification", "name": "Yoga Classes"},
      {"@type": "LocationFeatureSpecification", "name": "Zumba Classes"},
      {"@type": "LocationFeatureSpecification", "name": "Strength Training"},
      {"@type": "LocationFeatureSpecification", "name": "Cardio Equipment"},
      {"@type": "LocationFeatureSpecification", "name": "Locker Rooms"},
      {"@type": "LocationFeatureSpecification", "name": "Free WiFi"},
      {"@type": "LocationFeatureSpecification", "name": "Parking"}
    ],
    "founder": {
      "@type": "Person",
      "name": "Aditya Singh",
      "jobTitle": "Founder & K11 Certified Trainer",
      "description": "K11 certified trainer, REPS India member, and certified nutritionist with 10+ years experience"
    },
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.facebook.com/onerepmaax",
      "https://www.instagram.com/onerepmaax"
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About OneRepMaax Gym Jamshedpur | Best GYM Mango Dimna | K11 Certified Trainers</title>
        <meta name="title" content="About OneRepMaax Gym Jamshedpur | Best GYM Mango Dimna | K11 Certified Trainers" />
        <meta name="description" content="Learn about OneRepMaax Gym - Jamshedpur's premier GYM in Mango, Dimna. Founded by K11 certified trainer Aditya Singh. Offering gym, yoga, Zumba, personal training in Sankosai area since 10+ years." />
        <meta name="keywords" content="OneRepMaax Gym, GYM Jamshedpur, gym Mango, personal trainer Dimna, yoga classes Jamshedpur, Zumba Sankosai, K11 certified trainer, Aditya Singh gym, best gym Jamshedpur, fitness Mango Dimna" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onerepmaaxgym.in/about" />
        <meta property="og:title" content="About OneRepMaax Gym Jamshedpur | Best GYM Mango Dimna" />
        <meta property="og:description" content="Discover OneRepMaax Gym - Jamshedpur's premier fitness destination in Mango, Dimna. K11 certified trainers, modern facilities, yoga, Zumba, personal training." />
        <meta property="og:image" content="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="OneRepMaax Gym" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://onerepmaaxgym.in/about" />
        <meta property="twitter:title" content="About OneRepMaax Gym Jamshedpur | Best GYM Mango Dimna" />
        <meta property="twitter:description" content="Discover OneRepMaax Gym - Jamshedpur's premier fitness destination in Mango, Dimna. K11 certified trainers, modern facilities, yoga, Zumba, personal training." />
        <meta property="twitter:image" content="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="OneRepMaax Gym" />
        <meta name="copyright" content="OneRepMaax Gym" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Jamshedpur, Jharkhand" />
        <meta name="geo.position" content="22.7868;86.2029" />
        <meta name="ICBM" content="22.7868, 86.2029" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://onerepmaaxgym.in/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

    <main className="min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
             <img
               src={DSC06177}
               alt=" ABOUT US - OneRepMaax Gym"
               className="w-full h-72 lg:h-[70vh] object-cover object-center opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-transparent"></div>
             <div className="absolute bottom-8 left-8 text-white z-10">
               <h1 className="text-5xl font-One lg:text-7xl bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-4">
                 ABOUT US
               </h1>
               <nav className="font-One text-lg lg:text-2xl flex items-center gap-2">
                 <Link to='/' className="hover:text-[#48D3A3] transition-colors duration-300">HOME</Link>
                 <span className="text-gray-400">/</span>
                 <span className="text-[#FCDE3B]">ABOUT US</span>
               </nav>
             </div>
           </div>

      {/* Founder's Message Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20" aria-labelledby="founder-message">
        <div className="bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90 backdrop-blur-sm border border-[#48D3A3]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
          <header className="text-center mb-8 sm:mb-12">
            <h2 id="founder-message" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-One text-white mb-4">
              A Message from Our Founder
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] mx-auto" aria-hidden="true"></div>
          </header>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <span className="text-4xl sm:text-5xl md:text-6xl text-[#48D3A3] opacity-50 absolute -top-2 sm:-top-4 -left-1 sm:-left-2" aria-hidden="true">"</span>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-DM italic leading-relaxed pl-6 sm:pl-8">
                <p className="mb-4 sm:mb-6">
                  We are here for your good health, fit body, and active mind. At OneRepMaax Gym Jamshedpur, we believe in the transformative power of holistic fitness. 
                  Our comprehensive approach combines strength training, mindful yoga practice, and energizing Zumba sessions - all under one roof in Mango, Dimna area.
                </p>
                <p>
                  As a K11 certified trainer and REPS India member with over 10 years of experience in Jamshedpur fitness industry, I've witnessed countless transformations. 
                  Come join our community in Dimna,Mango area and enhance yourself. Build not just physical strength, but unshakeable confidence. 
                  Your fitness journey in Jamshedpur starts here, and our certified trainers will be with you every step of the way.
                </p>
              </blockquote>
              <span className="text-4xl sm:text-5xl md:text-6xl text-[#48D3A3] opacity-50 float-right -mt-6 sm:-mt-8" aria-hidden="true">"</span>
            </div>
            
            <footer className="mt-6 sm:mt-8 text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:w-56 xl:h-40 bg-gradient-to-br from-[#48D3A3] to-[#3BC493] rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg" aria-hidden="true">
                <img src={TRAINER[2]} alt="Owners Image" className="w-22 h-22 sm:w-30 sm:h-30 md:w-38 md:h-30 lg:w-46 lg:h-34 xl:w-54 xl:h-38 object-cover object-top rounded-lg border-[#48D3A3]  transition-all duration-300" />
              </div>
              <cite className="not-italic">
                <p className="text-[#48D3A3] font-One text-lg sm:text-xl">Aditya Singh</p>
                <p className="text-white font-DM text-base sm:text-lg mb-2">Founder & K11 Certified Trainer</p>
              </cite>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 px-2" role="list" aria-label="Founder's Certifications">
                <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#48D3A3]/20 to-[#3BC493]/20 text-[#48D3A3] rounded-full text-xs sm:text-sm font-DM border border-[#48D3A3]/30" role="listitem">K11 Certified</span>
                <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#48D3A3]/20 to-[#3BC493]/20 text-[#48D3A3] rounded-full text-xs sm:text-sm font-DM border border-[#48D3A3]/30" role="listitem">REPS India Member</span>
                <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#48D3A3]/20 to-[#3BC493]/20 text-[#48D3A3] rounded-full text-xs sm:text-sm font-DM border border-[#48D3A3]/30" role="listitem">Certified Nutritionist</span>
                <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#48D3A3]/20 to-[#3BC493]/20 text-[#48D3A3] rounded-full text-xs sm:text-sm font-DM border border-[#48D3A3]/30" role="listitem">10+ Years Experience</span>
              </div>
            </footer>
          </div>
        </div>
      </section>
      {/* Tagline Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16" aria-labelledby="gym-tagline">
        <header className="text-center">
          <h2 id="gym-tagline" className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-One text-white mb-4">
            Sweat Now, Thank Us Later.
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#FCDE3B] to-[#F59E0B] mx-auto" aria-hidden="true"></div>
        </header>
      </section>

      {/* Mission & Vision Sections */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16" aria-labelledby="mission-vision">
        <h2 id="mission-vision" className="sr-only">Our Mission and Vision</h2>
        
        {/* Mission Section */}
        <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90 backdrop-blur-sm border border-[#48D3A3]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
              <span className="text-[#48D3A3] text-base sm:text-lg font-One mb-3 sm:mb-4 block">OUR MISSION</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-One text-white mb-4 sm:mb-6 leading-tight">
                EMPOWERING YOUR FITNESS JOURNEY IN JAMSHEDPUR
              </h3>
              <p className="text-gray-300 font-DM text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Empowering individuals across Jamshedpur, Mango, Dimna, and Sankosai to achieve their fitness goals with fun, support, and motivation. 
                We welcome all ages and fitness levels with customized workout plans and K11 certified personal trainers in our state-of-the-art GYM!
              </p>
              <ul className="space-y-3 sm:space-y-4" role="list">
                <li className="flex items-center" role="listitem">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#48D3A3] rounded-full flex items-center justify-center text-black font-bold mr-3 sm:mr-4 text-xs sm:text-sm" aria-hidden="true">01</div>
                  <span className="text-white font-One text-sm sm:text-base lg:text-lg">AGE-INCLUSIVE MEMBERSHIP</span>
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#48D3A3] rounded-full flex items-center justify-center text-black font-bold mr-3 sm:mr-4 text-xs sm:text-sm" aria-hidden="true">02</div>
                  <span className="text-white font-One text-sm sm:text-base lg:text-lg">CUSTOMIZED WORKOUT PLANS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-[#48D3A3]/20 rounded-xl sm:rounded-2xl transform rotate-2 sm:rotate-3" aria-hidden="true"></div>
              <img
                src={w3.i7}
                alt="OneRepMaax Gym member training with K11 certified trainer in Jamshedpur GYM"
                className="relative rounded-xl sm:rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        {/* Vision Section */}
        <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-[#FCDE3B]/20 rounded-xl sm:rounded-2xl transform -rotate-2 sm:-rotate-3" aria-hidden="true"></div>
              <img
                src={w3.i11}
                alt="Modern gym equipment and facilities at OneRepMaax GYM in Mango, Jamshedpur with yoga and Zumba studios"
                className="relative rounded-xl sm:rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90 backdrop-blur-sm border border-[#FCDE3B]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
              <span className="text-[#FCDE3B] text-base sm:text-lg font-One mb-3 sm:mb-4 block">OUR VISION</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-One text-white mb-4 sm:mb-6 leading-tight">
                STATE-OF-THE-ART GYM FOR EVERYONE
              </h3>
              <p className="text-gray-300 font-DM text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                To make fitness accessible to everyone in Jamshedpur by providing state-of-the-art facilities and services that cater to diverse needs and goals, 
                empowering individuals in Mango, Dimna, and Sankosai areas to achieve their full potential through our comprehensive fitness programs.
              </p>
              <ul className="space-y-3 sm:space-y-4" role="list">
                <li className="flex items-center" role="listitem">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FCDE3B] rounded-full flex items-center justify-center text-black font-bold mr-3 sm:mr-4 text-xs sm:text-sm" aria-hidden="true">01</div>
                  <span className="text-white font-One text-sm sm:text-base lg:text-lg">YOGA & ZUMBA STUDIOS</span>
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FCDE3B] rounded-full flex items-center justify-center text-black font-bold mr-3 sm:mr-4 text-xs sm:text-sm" aria-hidden="true">02</div>
                  <span className="text-white font-One text-sm sm:text-base lg:text-lg">K11 CERTIFIED TRAINERS</span>
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FCDE3B] rounded-full flex items-center justify-center text-black font-bold mr-3 sm:mr-4 text-xs sm:text-sm" aria-hidden="true">03</div>
                  <span className="text-white font-One text-sm sm:text-base lg:text-lg">FUNCTIONAL TRAINING AREAS</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20" aria-labelledby="gym-services">
        <header className="text-center mb-12 sm:mb-16">
          <span className="text-[#F97316] text-sm sm:text-base md:text-lg font-One mb-3 sm:mb-4 block">What We Offer at OneRepMaax Gym Jamshedpur</span>
          <h2 id="gym-services" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-One text-white mb-4 sm:mb-6 leading-tight px-2">
            STRENGTH. SUPPORT. SUCCESS. COMMUNITY.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-DM leading-relaxed max-w-4xl mx-auto px-2">
            From beginners to advanced fitness enthusiasts in Jamshedpur, Mango, Dimna, and Sankosai, we provide everything you need to succeed. 
            Our welcoming GYM caters to all ages and fitness levels with personalized support from K11 certified trainers.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
          {Values.map((value) => (
            <article key={value.id} className="bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90 backdrop-blur-sm border border-[#F97316]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-[#F97316]/20 transition-all duration-300 text-center hover:from-gray-800/90 hover:via-black/70 hover:to-gray-700/90" role="listitem">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#F97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg" aria-hidden="true">
                <img
                  src={value.imageUrl}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter brightness-0 invert"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-One text-[#F97316] mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 font-DM leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      
    </main>
    <Footer />
    </>
  );
};

export default About;

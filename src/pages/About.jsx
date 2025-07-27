import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Wbutton from "../components/Wbutton";
import { w3 } from "../assets/w3/w3";
import { Helmet } from "react-helmet";

const About = () => {
  const Values = [
    {
      id: 1,
      title: "Premium Gym Facilities",
      description:
        "Cardio & strength equipment, group fitness studios, personal training areas, locker rooms, free WiFi, coffee, and ample parking - everything you need for fitness success in Jamshedpur.",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
    },
    {
      id: 2,
      title: "Specialized Fitness Programs",
      description:
        "Expert-led Yoga classes, high-energy Zumba sessions, and functional training programs in Mango, Dimna designed to keep you motivated and engaged in your fitness journey.",
      imageUrl:
        "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
    },
    {
      id: 3,
      title: "Open 7 Days a Week",
      description:
        "We're here when you need us! Open 7 days a week with separate changing rooms, showers, posing room, and certified personal trainers ready to support your fitness goals.",
      imageUrl:
        "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "OneRepMaax Gym",
    "description": "Premier fitness center in Jamshedpur offering gym, yoga, Zumba, personal training with K11 certified trainers. Located in Mango, Dimna serving Sankosai area.",
    "url": "https://onerepmaax.com/about",
    "logo": "https://onerepmaax.com/logo.png",
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
        <title>About OneRepMaax Gym Jamshedpur | Best Fitness Center Mango Dimna | K11 Certified Trainers</title>
        <meta name="title" content="About OneRepMaax Gym Jamshedpur | Best Fitness Center Mango Dimna | K11 Certified Trainers" />
        <meta name="description" content="Learn about OneRepMaax Gym - Jamshedpur's premier fitness center in Mango, Dimna. Founded by K11 certified trainer Aditya Singh. Offering gym, yoga, Zumba, personal training in Sankosai area since 10+ years." />
        <meta name="keywords" content="OneRepMaax Gym, fitness center Jamshedpur, gym Mango, personal trainer Dimna, yoga classes Jamshedpur, Zumba Sankosai, K11 certified trainer, Aditya Singh gym, best gym Jamshedpur, fitness Mango Dimna" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onerepmaax.com/about" />
        <meta property="og:title" content="About OneRepMaax Gym Jamshedpur | Best Fitness Center Mango Dimna" />
        <meta property="og:description" content="Discover OneRepMaax Gym - Jamshedpur's premier fitness destination in Mango, Dimna. K11 certified trainers, modern facilities, yoga, Zumba, personal training." />
        <meta property="og:image" content="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="OneRepMaax Gym" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://onerepmaax.com/about" />
        <meta property="twitter:title" content="About OneRepMaax Gym Jamshedpur | Best Fitness Center Mango Dimna" />
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
        <link rel="canonical" href="https://onerepmaax.com/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <header className="relative h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-gray-900/50"></div>
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="OneRepMaax Gym Jamshedpur - Premium fitness center in Mango, Dimna with K11 certified trainers, yoga, Zumba classes"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-One text-white mb-6 drop-shadow-2xl">
            ABOUT US
          </h1>
          <nav className="flex items-center space-x-3 text-xl font-DM" aria-label="Breadcrumb">
            <Link to="/" className="text-[#48D3A3] hover:text-white transition-colors">
              HOME
            </Link>
            <span className="text-[#FCDE3B]" aria-hidden="true">/</span>
            <span className="text-white">ABOUT US</span>
          </nav>
        </div>
      </header>

      {/* Founder's Message Section */}
      <section className="container mx-auto px-6 py-20" aria-labelledby="founder-message">
        <div className="backdrop-blur-sm bg-white/5 border border-[#48D3A3]/30 rounded-2xl p-8 md:p-12 shadow-2xl">
          <header className="text-center mb-12">
            <h2 id="founder-message" className="text-4xl md:text-5xl font-One text-white mb-4">
              A Message from Our Founder
            </h2>
            <div className="w-24 h-1 bg-[#48D3A3] mx-auto" aria-hidden="true"></div>
          </header>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <span className="text-6xl text-[#48D3A3] opacity-50 absolute -top-4 -left-2" aria-hidden="true">"</span>
              <blockquote className="text-xl md:text-2xl text-gray-300 font-DM italic leading-relaxed pl-8">
                <p className="mb-6">
                  We are here for your good health, fit body, and active mind. At OneRepMaax Gym Jamshedpur, we believe in the transformative power of holistic fitness. 
                  Our comprehensive approach combines strength training, mindful yoga practice, and energizing Zumba sessions - all under one roof in Mango, Dimna area.
                </p>
                <p>
                  As a K11 certified trainer and REPS India member with over 10 years of experience in Jamshedpur fitness industry, I've witnessed countless transformations. 
                  Come join our community in Sankosai area and enhance yourself. Build not just physical strength, but unshakeable confidence. 
                  Your fitness journey in Jamshedpur starts here, and our certified trainers will be with you every step of the way.
                </p>
              </blockquote>
              <span className="text-6xl text-[#48D3A3] opacity-50 float-right -mt-8" aria-hidden="true">"</span>
            </div>
            
            <footer className="mt-8 text-center">
              <div className="w-20 h-20 bg-[#48D3A3] rounded-full mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <span className="text-2xl font-One text-black">AS</span>
              </div>
              <cite className="not-italic">
                <p className="text-[#48D3A3] font-One text-xl">Aditya Singh</p>
                <p className="text-white font-DM text-lg mb-2">Founder & K11 Certified Trainer</p>
              </cite>
              <div className="flex flex-wrap justify-center gap-2 mt-4" role="list" aria-label="Founder's Certifications">
                <span className="px-3 py-1 bg-[#48D3A3]/20 text-[#48D3A3] rounded-full text-sm font-DM" role="listitem">K11 Certified</span>
                <span className="px-3 py-1 bg-[#48D3A3]/20 text-[#48D3A3] rounded-full text-sm font-DM" role="listitem">REPS India Member</span>
                <span className="px-3 py-1 bg-[#48D3A3]/20 text-[#48D3A3] rounded-full text-sm font-DM" role="listitem">Certified Nutritionist</span>
                <span className="px-3 py-1 bg-[#48D3A3]/20 text-[#48D3A3] rounded-full text-sm font-DM" role="listitem">10+ Years Experience</span>
              </div>
            </footer>
          </div>
        </div>
      </section>
      {/* Tagline Section */}
      <section className="container mx-auto px-6 py-16" aria-labelledby="gym-tagline">
        <header className="text-center">
          <h2 id="gym-tagline" className="text-4xl md:text-6xl font-One text-white mb-4">
            Sweat Now, Thank Us Later.
          </h2>
          <div className="w-32 h-1 bg-[#FCDE3B] mx-auto" aria-hidden="true"></div>
        </header>
      </section>

      {/* Mission & Vision Sections */}
      <section className="container mx-auto px-6 py-12 space-y-16" aria-labelledby="mission-vision">
        <h2 id="mission-vision" className="sr-only">Our Mission and Vision</h2>
        
        {/* Mission Section */}
        <article className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="backdrop-blur-sm bg-white/5 border border-[#48D3A3]/30 rounded-2xl p-8 shadow-2xl">
              <span className="text-[#48D3A3] text-lg font-One mb-4 block">OUR MISSION</span>
              <h3 className="text-3xl md:text-4xl font-One text-white mb-6">
                EMPOWERING YOUR FITNESS JOURNEY IN JAMSHEDPUR
              </h3>
              <p className="text-gray-300 font-DM text-lg leading-relaxed mb-8">
                Empowering individuals across Jamshedpur, Mango, Dimna, and Sankosai to achieve their fitness goals with fun, support, and motivation. 
                We welcome all ages and fitness levels with customized workout plans and K11 certified personal trainers in our state-of-the-art fitness center!
              </p>
              <ul className="space-y-4" role="list">
                <li className="flex items-center" role="listitem">
                  <div className="w-8 h-8 bg-[#48D3A3] rounded-full flex items-center justify-center text-black font-bold mr-4" aria-hidden="true">01</div>
                  <span className="text-white font-One text-lg">AGE-INCLUSIVE MEMBERSHIP</span>
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-8 h-8 bg-[#48D3A3] rounded-full flex items-center justify-center text-black font-bold mr-4" aria-hidden="true">02</div>
                  <span className="text-white font-One text-lg">CUSTOMIZED WORKOUT PLANS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#48D3A3]/20 rounded-2xl transform rotate-3" aria-hidden="true"></div>
              <img
                src={w3.i7}
                alt="OneRepMaax Gym member training with K11 certified trainer in Jamshedpur fitness center"
                className="relative rounded-2xl shadow-2xl w-full max-w-md"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        {/* Vision Section */}
        <article className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FCDE3B]/20 rounded-2xl transform -rotate-3" aria-hidden="true"></div>
              <img
                src={w3.i11}
                alt="Modern gym equipment and facilities at OneRepMaax Fitness Center in Mango, Jamshedpur with yoga and Zumba studios"
                className="relative rounded-2xl shadow-2xl w-full max-w-md"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div className="backdrop-blur-sm bg-white/5 border border-[#FCDE3B]/30 rounded-2xl p-8 shadow-2xl">
              <span className="text-[#FCDE3B] text-lg font-One mb-4 block">OUR VISION</span>
              <h3 className="text-3xl md:text-4xl font-One text-white mb-6">
                STATE-OF-THE-ART FITNESS CENTER FOR EVERYONE
              </h3>
              <p className="text-gray-300 font-DM text-lg leading-relaxed mb-8">
                To make fitness accessible to everyone in Jamshedpur by providing state-of-the-art facilities and services that cater to diverse needs and goals, 
                empowering individuals in Mango, Dimna, and Sankosai areas to achieve their full potential through our comprehensive fitness programs.
              </p>
              <ul className="space-y-4" role="list">
                <li className="flex items-center" role="listitem">
                  <div className="w-8 h-8 bg-[#FCDE3B] rounded-full flex items-center justify-center text-black font-bold mr-4" aria-hidden="true">01</div>
                  <span className="text-white font-One text-lg">YOGA & ZUMBA STUDIOS</span>
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-8 h-8 bg-[#FCDE3B] rounded-full flex items-center justify-center text-black font-bold mr-4" aria-hidden="true">02</div>
                  <span className="text-white font-One text-lg">K11 CERTIFIED TRAINERS</span>
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-8 h-8 bg-[#FCDE3B] rounded-full flex items-center justify-center text-black font-bold mr-4" aria-hidden="true">03</div>
                  <span className="text-white font-One text-lg">FUNCTIONAL TRAINING AREAS</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20" aria-labelledby="gym-services">
        <header className="text-center mb-16">
          <span className="text-[#F97316] text-lg font-One mb-4 block">What We Offer at OneRepMaax Gym Jamshedpur</span>
          <h2 id="gym-services" className="text-4xl md:text-5xl font-One text-white mb-6">
            STRENGTH. SUPPORT. SUCCESS. COMMUNITY.
          </h2>
          <p className="text-xl text-gray-300 font-DM leading-relaxed max-w-4xl mx-auto">
            From beginners to advanced fitness enthusiasts in Jamshedpur, Mango, Dimna, and Sankosai, we provide everything you need to succeed. 
            Our welcoming fitness center caters to all ages and fitness levels with personalized support from K11 certified trainers.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {Values.map((value) => (
            <article key={value.id} className="backdrop-blur-sm bg-white/5 border border-[#F97316]/30 rounded-2xl p-8 shadow-2xl hover:shadow-[#F97316]/20 transition-all duration-300 text-center" role="listitem">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <img
                  src={value.imageUrl}
                  alt=""
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-One text-[#F97316] mb-4">{value.title}</h3>
              <p className="text-gray-300 font-DM leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
    </>
  );
};

export default About;

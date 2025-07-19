import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import MembershipSection from "./Membership";
import WkGuid from "../components/WkGuid";
import Icon from "../components/Icon";


const Facilities = () => {
  const FacilitiesData = [
    {
      id: 1,
      title: "Premium Cardio Equipment",
      description:
        "State-of-the-art cardio equipment including professional treadmills and stationary bikes in our 5000+ sq. feet air-conditioned facility.",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
      features: ["Professional Treadmills", "Stationary Bikes", "Air Conditioned", "Sanitized Equipment"]
    },
    {
      id: 2,
      title: "Complete Strength Training",
      description:
        "Professional Jaguar strength equipment with comprehensive free weights - we have 3 complete sets of every weight from 2.5kg up to 40kg, plus resistance machines and functional training tools for all fitness levels.",
      imageUrl:
        "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
      features: ["Triple Weight Sets (2.5-40kg)", "Every Weight x3 Sets", "Resistance Machines", "Beginner Friendly"]
    },
    {
      id: 3,
      title: "Group Classes & Yoga",
      description:
        "Diverse group fitness classes including yoga, Zumba, and HIIT in our spacious 5000+ sq. feet area, led by certified K11 trainers.",
      imageUrl:
        "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
      features: ["Yoga Classes", "Zumba Sessions", "HIIT Training", "Certified Instructors"]
    },
    {
      id: 4,
      title: "Personal Training",
      description:
        "Achieve your fitness goals with personalized workout plans from our K11 certified and REPS India member trainers including certified nutritionist guidance.",
      imageUrl:
        "https://framerusercontent.com/images/B8TSO75Dd4eD75lnadm9FGAXtE.svg",
      features: ["K11 Certified Trainers", "REPS India Members", "Nutrition Consultation", "Custom Programs"]
    },
    {
      id: 5,
      title: "Premium Amenities",
      description:
        "Enjoy locker facilities, free WiFi, complimentary coffee, ample parking, separate changing rooms, and posing room in our clean, sanitized environment.",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
      features: ["Locker Facility", "Free WiFi & Coffee", "Ample Parking", "Sanitized Environment"]
    },
    {
      id: 6,
      title: "Safety & Support",
      description:
        "First aid available, equipment sanitization, beginner-friendly environment, and dedicated workout guides available on our website for all fitness levels.",
      imageUrl:
        "https://framerusercontent.com/images/B8TSO75Dd4eD75lnadm9FGAXtE.svg",
      features: ["First Aid Available", "Sanitized Equipment", "Beginner Friendly", "Online Workout Guides"]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Premium Gym Facilities - OneRepMaax Jamshedpur | Jaguar Equipment, 5000+ Sq Ft</title>
        <meta
          name="description"
          content="Premium gym facilities at OneRepMaax Jamshedpur: 5000+ sq ft air-conditioned space with professional cardio equipment, Jaguar strength training, triple weight sets (2.5-40kg), K11 certified trainers, yoga classes, free WiFi, sanitized environment. 61 Google reviews - 4.9★!"
        />
        <meta
          name="keywords"
          content="gym facilities Jamshedpur, professional gym equipment, 5000 sq feet gym, air conditioned gym Mango, premium gym facilities, sanitized gym equipment, beginner friendly gym, K11 certified trainers, yoga classes Jamshedpur, free WiFi gym, locker facility, triple weight sets, gym near Sunrise Tiles, gym near Hero Showroom, better than Bodylyn gym, alternative to Iron Paradise gym, 61 google reviews gym, 4.9 star rated gym Jamshedpur"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="OneRepMaax Gym" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Jamshedpur" />
        <meta name="geo.position" content="22.8046;86.2029" />
        <meta name="ICBM" content="22.8046, 86.2029" />
        <meta property="og:title" content="Premium Gym Facilities - OneRepMaax Jamshedpur | 5000+ Sq Ft Space" />
        <meta property="og:description" content="Experience premium gym facilities with professional cardio equipment, Jaguar strength training, triple weight sets (2.5-40kg), K11 certified trainers, and 5000+ sq ft air-conditioned space in Jamshedpur." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onerepmaax.com/#facilities" />
        <meta property="og:image" content="https://onerepmaax.com/allPhotos/Header.webp" />
        <meta property="og:site_name" content="OneRepMaax Gym" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Gym Facilities - OneRepMaax Jamshedpur | 5000+ Sq Ft Space" />
        <meta name="twitter:description" content="Experience premium gym facilities with professional cardio equipment, Jaguar strength training, triple weight sets (2.5-40kg), K11 certified trainers in Jamshedpur." />
        <meta name="twitter:image" content="https://onerepmaax.com/allPhotos/Header.webp" />
        <meta name="apple-mobile-web-app-title" content="OneRepMaax Facilities" />
        <meta name="application-name" content="OneRepMaax Gym Facilities" />
        <meta name="theme-color" content="#48D3A3" />
        <link rel="canonical" href="https://onerepmaax.com/#facilities" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SportsFacility",
              "name": "OneRepMaax Gym Facilities",
              "description": "Premium gym facilities with Jaguar equipment in 5000+ sq ft air-conditioned space",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dimna Rd, Shankoshai",
                "addressLocality": "Mango, Jamshedpur",
                "addressRegion": "Jharkhand",
                "postalCode": "831018",
                "addressCountry": "India"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "61",
                "bestRating": "5",
                "worstRating": "1"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Cardio Equipment",
                  "value": "Professional Treadmills, Stationary Bikes"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Complete Weight Range",
                  "value": "3 complete sets of every weight from 2.5kg to 40kg"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Facility Size",
                  "value": "5000+ Square Feet"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Climate Control",
                  "value": "Air Conditioned"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Hygiene Standards",
                  "value": "Sanitized Equipment & Clean Environment"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Amenities",
                  "value": "Free WiFi, Locker Facility, Ample Parking, Free Coffee"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Safety",
                  "value": "First Aid Available, Beginner Friendly Environment"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Training Support",
                  "value": "K11 Certified Trainers, REPS India Members, Online Workout Guides"
                }
              ],
              "hasMap": "https://goo.gl/maps/onerepmaax-jamshedpur",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.8046",
                "longitude": "86.2029"
              },
              "openingHours": ["Mo-Sa 05:00-23:00", "Su 08:00-18:00"],
              "offers": {
                "@type": "Offer",
                "description": "Premium gym facilities with Jaguar equipment and professional training"
              }
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
                  "name": "What gym equipment does OneRepMaax have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym features professional treadmills, stationary bikes, Jaguar strength training equipment with 3 complete sets of every weight from 2.5kg to 40kg, resistance machines, and functional training tools in our 5000+ sq ft facility."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is OneRepMaax gym air conditioned?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, OneRepMaax Gym is fully air-conditioned across our entire 5000+ square feet facility. We maintain a comfortable temperature year-round with proper ventilation for optimal workout conditions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What amenities are available at OneRepMaax gym?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym offers locker facilities, free WiFi, complimentary coffee, ample parking, separate changing rooms for men and women, posing room, first aid facilities, and sanitized equipment in a clean environment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you have certified trainers at OneRepMaax?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, OneRepMaax has K11 certified trainers and REPS India members including certified nutritionist Aditya Singh. Our trainers provide personal training, nutrition consultation, and conduct group classes including yoga and Zumba."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is OneRepMaax gym beginner friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! OneRepMaax Gym is designed to be beginner-friendly with dedicated workout guides available on our website, supportive trainers, and equipment suitable for all fitness levels from 2.5kg to 40kg weights."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What safety measures does OneRepMaax gym have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym prioritizes safety with first aid availability, regular equipment sanitization, clean environment maintenance, proper ventilation, and trained staff to assist members with equipment usage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What do Google reviews say about OneRepMaax gym?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym has an outstanding 4.9-star rating from 61 Google reviews. Members consistently praise our professional trainers, clean facilities, modern equipment, supportive environment, and effective fitness programs."
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
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://onerepmaax.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Facilities",
                  "item": "https://onerepmaax.com/#facilities"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="facilities" aria-labelledby="facilities-heading">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="facilities-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            OUR FACILITIES
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase">
          Premium 5000+ Sq Ft Fitness Center in Jamshedpur
        </h2>
        <p className="w-full text-gray-300 lg:text-2xl font-DM text-lg mt-3 mb-4">
          Experience our state-of-the-art Jaguar equipment in a spacious, air-conditioned environment.
          Our mission has always been to create a welcoming and supportive space where everyone,
          regardless of their fitness level, can achieve their goals.
        </p>

        <div className="mb-4 p-4 bg-gray-900/50 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-white font-semibold ml-2">4.9/5</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">60+ Google Reviews</span>
          </div>
          <p className="text-sm text-gray-400">
            Join our community of satisfied members who've achieved their fitness goals at OneRepMaax!
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-300 mb-2">
            📋 Need workout guidance? Check out our comprehensive{" "}
            <Link
              to="/WorkoutGuide"
              className="text-[#48D3A3] hover:text-[#48D3A3]/80 underline font-semibold transition-colors"
              aria-label="Access workout guide section"
            >
              Workout Guide Section
            </Link>
            {" "}with programs for all fitness levels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-8">
          {FacilitiesData.map((facility) => (
            <article key={facility.id} className="font-One mb-6 p-4 flex flex-col border-2 border-gray-700 hover:border-[#48D3A3]/50 transition-colors">
              <img
                src={facility.imageUrl}
                alt={`${facility.title} at OneRepMaax Gym Jamshedpur`}
                className="h-16 w-16 object-cover mb-3"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl mb-3 text-[#48D3A3]">
                  {facility.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl font-DM text-gray-300 mb-4 leading-relaxed">
                  {facility.description}
                </p>
                <div className="mt-auto">
                  <h4 className="text-sm font-One text-white mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-xs md:text-sm text-gray-400 font-DM">
                    {facility.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-[#48D3A3] mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-7 text-[#48D3A3]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                          </svg> </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="mx-3 mb-8">
        <MembershipSection />
      </div>
    </>
  );
};

export default Facilities;

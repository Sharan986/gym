import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Join from "../components/Join";
const TrainersPage = () => {

     const TrainersDATA = [
    {
      id: 1,
      img: "https://framerusercontent.com/images/vJnrmBfjmxmme8eA8fHlxMFJ8.jpg",
      name: "John Smith",
      title: "Head Trainer",
    },
    {
      id: 2,
      img: "https://framerusercontent.com/images/8BuBcgGYvGQ79k9LHdgIEeOo2SY.jpg",
      name: "Michael Brown",
      title: "Fitness Consultant",
    },
    {
      id: 3,
      img: "https://framerusercontent.com/images/Gbfz6Welv7CmnyoiK6lTh9Xyc3s.jpg",
      name: "David Nguyen",
      title: "Yoga Instructor",
    },
    {
      id: 4,
      img: "https://framerusercontent.com/images/EA8cufF2IUoSVVweEVT4sNPHaI.jpg?scale-down-to=1024",
      name: "Jessica Garcia",
      title: "Nutritionist",
    },
     {
      id: 5,
      img: "https://framerusercontent.com/images/vJnrmBfjmxmme8eA8fHlxMFJ8.jpg",
      name: "John Smith",
      title: "Head Trainer",
    },
    {
      id: 6,
      img: "https://framerusercontent.com/images/8BuBcgGYvGQ79k9LHdgIEeOo2SY.jpg",
      name: "Michael Brown",
      title: "Fitness Consultant",
    },
    {
      id: 7,
      img: "https://framerusercontent.com/images/Gbfz6Welv7CmnyoiK6lTh9Xyc3s.jpg",
      name: "David Nguyen",
      title: "Yoga Instructor",
    },
    {
      id: 8,
      img: "https://framerusercontent.com/images/EA8cufF2IUoSVVweEVT4sNPHaI.jpg?scale-down-to=1024",
      name: "Jessica Garcia",
      title: "Nutritionist",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Expert Trainers - OneRepMaax Gym Jamshedpur | K11 Certified Professionals</title>
        <meta name="description" content="Meet our K11 certified trainers at OneRepMaax Gym Jamshedpur. Expert fitness professionals, nutritionists, and yoga instructors for personalized training programs." />
        <link rel="canonical" href="https://onerepmaax.com/trainers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Expert Trainers - OneRepMaax Gym Jamshedpur | K11 Certified Professionals" />
        <meta property="og:description" content="Meet our K11 certified trainers at OneRepMaax Gym Jamshedpur. Expert fitness professionals, nutritionists, and yoga instructors for personalized training programs." />
        <meta property="og:url" content="https://onerepmaax.com/trainers" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Expert Trainers - OneRepMaax Gym Jamshedpur | K11 Certified Professionals" />
        <meta name="twitter:description" content="Meet our K11 certified trainers at OneRepMaax Gym Jamshedpur. Expert fitness professionals, nutritionists, and yoga instructors for personalized training programs." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Expert Trainers",
            "description": "K11 certified trainers, nutritionists, and fitness professionals at OneRepMaax Gym",
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
      
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white ">
          <h1 className=" text-5xl font-One z-10">TRAINERS</h1>
          <h1 className="font-One text-2xl mt-9">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/TRAINERS</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center font-One">
        <div className="text-white pt-16 ml-6 mr-6  ">
          <header className="text-xl w-full text-[#48D3A3] italic ">
            Our Services
          </header>
          <p className="text-5xl mt-2  uppercase ">
            Skilled. Supportive. Certified. Motivated.
            <br />
          </p>
          <p className="max-w-screen text-gray-400 font-DM text-lg mt-6 mb-4">
            Our trainers are passionate about helping you achieve your fitness
            goals. They are certified professionals with extensive knowledge and
            training expertise. Always supportive, they provide personalized
            guidance tailored to your needs.
          </p>
        </div>
      </div>


             {TrainersDATA.map((Trainer) => (
          <div key={Trainer.id} className="px-3 text-white font-One">
            <div className="border-2 border-gray-600  overflow-hidden mx-9 mb-6">
              <img
                src={Trainer.img}
                alt={Trainer.name}
                className="w-full object-cover object-top"
              />
              <div className="p-4 text-center">
                <h1 className="text-2xl sm:text-4xl ">{Trainer.name}</h1>
                <p className="text-lg sm:text-2xl text-gray-400">{Trainer.title}</p>
              </div>
            </div>
          </div>
        ))};

        <Join />
      <Footer />
    </>
  );
};

export default TrainersPage;

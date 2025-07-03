import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MembershipSection = () => {
  const membershipOptions = [
    {
      name: "Starter",
      price: "$45/month",
      description: "Ideal for beginners",
      features: [
        "Access to all gym equipment",
        "Monthly fitness assessment",
        "Basic group classes included",
        "Free water bottle on signup",
        "Support & Mentoring"
      ]
    },
    {
      name: "Starter",
      price: "$45/month",
      description: "Ideal for beginners",
      features: [
        "Access to all gym equipment",
        "Monthly fitness assessment",
        "Basic group classes included",
        "Free water bottle on signup",
        "Support & Mentoring"
      ]
    },
    {
      name: "Starter",
      price: "$45/month",
      description: "Ideal for beginners",
      features: [
        "Access to all gym equipment",
        "Monthly fitness assessment",
        "Basic group classes included",
        "Free water bottle on signup",
        "Support & Mentoring"
      ]
    },
    {
      name: "Starter",
      price: "$45/month",
      description: "Ideal for beginners",
      features: [
        "Access to all gym equipment",
        "Monthly fitness assessment",
        "Basic group classes included",
        "Free water bottle on signup",
        "Support & Mentoring"
      ]
    },
 {
      name: "Starter",
      price: "$45/month",
      description: "Ideal for beginners",
      features: [
        "Access to all gym equipment",
        "Monthly fitness assessment",
        "Basic group classes included",
        "Free water bottle on signup",
        "Support & Mentoring"
      ]
    },
  ];

  const services = [
    "Personal Training",
    "Body Building",
    "Boxing Classes",
    "Specialized Workouts",
    "Cardio and More"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-[#070915] text-white p-8 mx-1">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-[#48D3A3] text-3xl font-bold mb-4 font-One">OUR MEMBERSHIP</h2>
          <p className="mb-8 text-white font-One text-3xl">
            Fight School has specialized in martial arts since 1986 and offers top-notch training programs.
          </p>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-center font-M">
                <span className="mr-2 text-[#48D3A3]">✓</span>
                <span className="text-gray-300">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <style>
            {`
              .slick-slide > div {
                margin: 0 10px; /* Adds space between slides */
              }
              .slick-list {
                margin: 0 -10px; /* Counteract the margin added to the slides */
              }
            `}
          </style>
          <Slider {...sliderSettings}>
            {membershipOptions.map((option, index) => (
              <div key={index} className="p-4 border-2 border-[#48D3A3] font-M transition-transform transform">
                <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-2xl">{option.name}</h2>
                <p className="text-2xl font-bold mb-2 text-yellow-400">{option.price}</p>
                <p className="mb-4 text-gray-400">{option.description}</p>
                <ul className="space-y-2 mb-4">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2 text-[#48D3A3]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full rounded hover:bg-yellow-500 transition-colors">
                  BOOK NOW
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const services = [
    {
      id: 1,
      img: "https://framerusercontent.com/images/T7EIUAZkFOhzzTjVuUeUIISwL0.jpg?scale-down-to=2048",
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Personal Training",
    },
    {
      id: 2,
      img: "https://framerusercontent.com/images/HUu49A9LHorraj7mMJcKONJ5r9A.jpg?scale-down-to=2048",
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Weight Loss",
    },
    {
      id: 3,
      img: "https://framerusercontent.com/images/IMhfAb34rENtjyBiaMvR2TSis.jpg?scale-down-to=2048",
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Group Fitness",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="text-white text-xl pt-16 px-4 font-One">
      <header className="text-xl lg:text-center sm:text-3xl text-[#48D3A3] italic mx-7">Our Services</header>
      <p className="text-4xl lg:text-center sm:text-6xl mt-4 mx-5 uppercase">
        What We Can Do Best For Our Clients
      </p>

      <div className="mt-12 mx-3">
        {isMobile ? (
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-4">
                <div className="flex flex-col items-center border-2 border-gray-600 font-One h-full">
                  <img src={service.logo} alt={service.title} className="w-20 h-20 sm:w-28 sm:h-28 p-2" />
                  <h1 className="text-3xl sm:text-4xl py-3">{service.title}</h1>
                  <img src={service.img} alt={service.title} className="w-full object-cover pt-4 rounded" />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex justify-between mx-2">
            {services.map((service) => (
              <div key={service.id} className="border-2 border-gray-600 h-140 overflow-hidden font-One w-1/3 mx-3">
                <div className="flex pt-6 md:pt-0 md:flex md:justify-start h-96 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover lg:object-top object-center" />
                </div>
                <div className="p-4 text-center">
                  <div className="flex justify-center">
                    <img src={service.logo} alt={service.title} className="w-60 h-10 sm:w-28 sm:h-28 md:w-20 md:h-20 p-2" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl py-3">{service.title}</h1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;

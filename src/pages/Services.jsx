import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s3 from "../assets/S3.jpeg";
import S2 from "../assets/S2.jpeg";
import sv4 from "../assets/sv4.jpeg";
import Icon from '../components/Icon';

const Services = () => {
  const services = [ 
    {
      id: 1,
      img: s3,
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Personal Training",
    },
    {
      id: 2,
      img: S2,
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Weight Loss",
    },
    {
      id: 3,
      img: sv4,
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Strength Training",
    },
  ];

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
    <div className="text-white text-xl pt-15 mx-4 font-One">
      <div className="flex pl-5 justfy-center items-center gap-2">
        <Icon/>
        <header className="text-2xl md:text-3xl lg:text-center text-[#48D3A3]">Our Services</header>

      </div>
      <p className="text-4xl md:text-6xl pl-5 lg:text-center sm:text-6xl mt-4 uppercase">
        What We Can Do Best For Our Clients
      </p>

      <div className="mt-12 mx-3">
        {/* Desktop View (lg and up) */}
        <div className="hidden lg:flex lg:flex-wrap lg:-mx-3">
          {services.map((service) => (
            <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="border-2 border-gray-600 overflow-hidden font-One h-[32rem] flex flex-col">
                <div className="h-2/3 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center flex flex-col items-center justify-center h-1/3">
                  <img src={service.logo} alt={service.title} className="w-full h-20 p-2" />
                  <h1 className="text-3xl py-2">{service.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet View (md only) */}
        <div className="hidden md:block lg:hidden">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-4">
                <div className="  border-2 border-gray-600 font-One  flex flex-col justify-between items-center">
                  <img src={service.logo} alt={service.title} className="w-24 h-24 p-2" />
                  <h1 className="text-3xl py-2">{service.title}</h1>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[28rem] object-cover pt-2 rounded"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile View (sm only) */}
        <div className="md:hidden">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="">
                <div className="border-2 border-gray-600 font-One h-[29rem] flex flex-col justify-between items-center">
                  <img src={service.logo} alt={service.title} className="w-20 h-20 p-2" />
                  <h1 className="text-3xl py-2">{service.title}</h1>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[29rem] object-cover pt-2"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;

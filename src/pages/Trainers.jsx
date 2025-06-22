import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import One from "../assets/1.jpeg"
import Two from "../assets/2.jpeg"
import Three from "../assets/3.jpeg";

const Trainers = () => {
  const Trainers = [
    {
      id: 1,
      img: One,
      name: "John Smith",
      title: "Head Trainer",
    },
    {
      id: 2,
      img: Two,
      name: "Michael Brown",
      title: "Fitness Consultant",
    },
    {
      id: 3,
      img:Three,
      name: "David Nguyen",
      title: "Yoga Instructor",
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
    <div className="text-white text-xl pt-16 mx-8 font-One">
      <header className="text-xl sm:text-3xl text-[#48D3A3] italic">
        Our Trainers
      </header>
      <p className="text-5xl w-fit sm:text-6xl mt-4 uppercase">
        Fitness team supporting goals
      </p>

     
      <div className="block md:hidden mt-10">
        <Slider {...settings}>
          {Trainers.map((trainer) => (
            <div key={trainer.id} className="md:h-96">
              <div className="border-2 overflow-hidden border-gray-600  ">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-80 object-cover  object-top"
                />
                <div className="p-4 text-center">
                  <h1 className="text-2xl">{trainer.name}</h1>
                  <p className="text-lg text-gray-400">{trainer.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
      <div className="hidden md:grid grid-cols-2 gap-6 mt-10">
        {Trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="border-2 border-gray-600 overflow-hidden"
          >
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-full h-60 object-cover object-top"
            />
            <div className="p-4 text-center">
              <h1 className="text-2xl">{trainer.name}</h1>
              <p className="text-lg text-gray-400">{trainer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;

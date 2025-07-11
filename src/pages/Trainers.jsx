import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import One from "../assets/Trainers/ONE.jpg";
import Two from "../assets/Trainers/TWO.jpg";
import Three from "../assets/Trainers/THREE.jpg";
import FOUR from "../assets/Trainers/FOUR.jpg";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      img: One,
      name: "SMRITI ROY",
      title: "CO-FOUNDER & TRAINER",
    },
    {
      id: 2,
      img: Two,
      name: "FAZAL RAHMAAN",
      title: "TRAINER",
    },
    {
      id: 3,
      img: Three,
      name: "RAJ KUMAR",
      title: "TRAINER",
    },
    {
      id: 4,
      img: FOUR,
      name: "ADITYA SINGH",
      title: "K11 CERTIFIED TRAINER",
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
      <div className="text-white text-xl pt-16 mx-7  font-One">
        <header className="text-2xl sm:text-3xl text-[#48D3A3] italic">
          Our Trainers
        </header>
        <p className="text-4xl  w-full mt-4 font-One uppercase">
          Fitness team supporting goals
        </p>

        {/* ✅ Mobile Slider */}
        <div className="block md:hidden mt-10">
          <Slider {...settings}>
            {trainers.map((trainer) => (
              <div key={trainer.id} className="p-2">
                <div className="border-2 border-gray-600 overflow-hidden max-w-md mx-auto">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-[18rem] object-cover object-top"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-xl sm:text-2xl">{trainer.name}</h1>
                    <p className="text-base sm:text-lg text-gray-400">{trainer.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ✅ Tablet Slider */}
        <div className="hidden md:block lg:hidden mt-10">
          <Slider {...settings}>
            {trainers.map((trainer) => (
              <div key={trainer.id} className="p-2">
                <div className="border-2 border-gray-600 overflow-hidden max-w-2xl mx-auto">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-[28rem] object-cover object-center"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-3xl">{trainer.name}</h1>
                    <p className="text-lg text-gray-400">{trainer.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ✅ Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="border-2 border-gray-600 overflow-hidden">
              <div className="h-[28rem] overflow-hidden">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover lg:object-top object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl sm:text-2xl lg:text-5xl">{trainer.name}</h1>
                <p className="text-base sm:text-lg text-gray-400">{trainer.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trainers;

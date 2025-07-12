import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Join from '../components/Join';
import { gallery } from '../assets/Gallery/gallery';

const ServicesDetail = () => {
  const servicesData = [
    {
      id: 1,
      img: gallery.ft4,
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Personal Training",
    },
    {
      id: 2,
      img: gallery.ft5,
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Weight Loss",
    },
    {
      id: 3,
     img: gallery.ft6,
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Group Fitness",
    },
    {
      id: 4,
     img: gallery.ft7,
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Strength Training",
    },
    {
      id: 5,
      img: gallery.ft8,
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Yoga Classes",
    },
    {
      id: 6,
      img: gallery.ft9,
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Cardio Training",
    },
    {
      id: 7,
     img: gallery.ft10,
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "CrossFit",
    },
    {
      id: 8,
      img: gallery.ft11,
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Nutrition Coaching",
    }
  ];

  return (
    <>
     <div className="relative overflow-hidden">
  <img
    src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
    alt="About Us Banner"
    className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
  />
  <div className="absolute bottom-8 left-8 text-white">
    <h1 className="text-5xl font-One lg:text-7xl z-10">SERVICES</h1>
    <h1 className="font-One text-2xl mt-4 lg:text-5xl">
      <Link to='/'>HOME</Link>
      <span className="text-yellow-300 lg:text-5xl">/Services</span>
    </h1>
  </div>
</div>

      <div className="flex justify-center flex-col items-start font-One">
        <div className="text-white pt-16 ml-6 mr-6">
          <header className="text-xl w-full text-[#48D3A3] italic">
            Our Services
          </header>
          <p className="text-5xl mt-2 uppercase">
            Our mission is to develop your fitness
          </p>
          <p className="max-w-screen text-gray-400 font-DM text-lg mt-6 mb-4">
            We are the un-corporation, dedicated to giving you the tools for your fitness goals in a vibrant gym. Unlike other clubs, you’ll stay because we care.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {servicesData.map((data) => (
          <div key={data.id} className="flex flex-col items-center border-2 border-gray-600 font-One mx-9 ">
            <img src={data.logo} alt={data.title} className="w-20 h-20 p-2" />
            <h1 className="text-2xl py-3 text-white text-center">{data.title}</h1>
            <img src={data.img} alt={data.title} className="w-full h-52 object-cover object-center " />
          </div>
        ))}
      </div>

      <Join />
      <Footer />
    </>
  );
};

export default ServicesDetail;

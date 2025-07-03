import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Join from '../components/Join';

const ServicesDetail = () => {
  const servicesData = [
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
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Strength Training",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2048&q=80",
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Yoga Classes",
    },
    {
      id: 6,
      img: "https://media.istockphoto.com/id/1007238912/photo/beautiful-sexy-athletic-muscular-young-girl-fitness-girl-trains-in-the-gym-doing-exercises.webp?a=1&s=612x612&w=0&k=20&c=O0c5IJ3TUTGV53rTYLM082jzLPVEv63BlTcxNkw7F1s=",
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Cardio Training",
    },
    {
      id: 7,
      img: "https://plus.unsplash.com/premium_photo-1700061655287-a721c05350d5?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "CrossFit",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=2048&q=80",
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
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">SERVICES</h1>
          <h1 className="font-One text-2xl mt-9">
            <Link to='/'>HOME</Link>
            <span className="text-yellow-300">/Services</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-3 gap-4 p-4">
        {servicesData.map((data) => (
          <div key={data.id} className="flex flex-col items-center border-2 border-gray-600 font-One p-4">
            <img src={data.logo} alt={data.title} className="w-20 h-20 p-2" />
            <h1 className="text-2xl py-3 text-white text-center">{data.title}</h1>
            <img src={data.img} alt={data.title} className="w-full h-48 object-cover pt-4" />
          </div>
        ))}
      </div>

      <Join />
      <Footer />
    </>
  );
};

export default ServicesDetail;

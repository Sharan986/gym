import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Join from '../components/Join';
import Membership from "../pages/Membership";
import {gallery} from "../assets/Gallery/gallery.js"; 


const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Facility');

  const tabs = ['Facility', 'Classes', 'Events', 'Members'];

  const facilityItems = [
    { id: 1, title: 'Strength Training Area', img: gallery.f1 },
    { id: 2, title: 'Cardio Equipment', img: gallery.f2 },
    { id: 3, title: 'Yoga Studio', img: gallery.f3 },
    { id: 4, title: 'Locker Rooms', img: gallery.f4 },
    { id: 5, title: 'Supplement Store', img: gallery.e5 },
    { id: 6, title: 'Reception Area', img: gallery.e6 },
    { id: 7, title: 'Free Weights Zone', img: gallery.e7 },
  ];

  const classesItems = [
    { id: 1, title: 'Boxing Class', img: gallery.ft1 },
    { id: 2, title: 'Yoga Session', img: gallery.ft2 },
    { id: 3, title: 'HIIT Workout', img: gallery.ft3 },
    { id: 4, title: 'Martial Arts', img: gallery.ft4 },
    { id: 5, title: 'Spin Class', img: gallery.ft5 },
    { id: 6, title: 'Zumba Class', img: gallery.ft6 },
    { id: 7, title: 'Pilates Class', img: gallery.ft7 },
    { id: 8, title: 'Dance Fitness', img: gallery.ft8 },
    { id: 9, title: 'Strength Training', img: gallery.ft9 },
    { id: 10, title: 'Functional Training', img: gallery.ft10 },
    { id: 11, title: 'Aqua Aerobics', img: gallery.ft11 },
    { id: 12, title: 'Meditation Class', img: gallery.ft12 },
    { id: 13, title: 'Core Strengthening', img: gallery.ft13 },
    
  ];

  const eventsItems = [
    { id: 1, title: 'Fitness Challenge', img: gallery.e1 },
    { id: 2, title: 'Annual Competition', img: gallery.e2 },
    { id: 3, title: 'Community Meetup', img: gallery.e3 },
    { id: 4, title: 'Wellness Workshop', img: gallery.e4 },
  ];

  const getItems = () => {
    switch (activeTab) {
      case 'Facility':
        return facilityItems;
      case 'Classes':
        return classesItems;
      case 'Events':
        return eventsItems;
      default:
        return [];
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="relative overflow-hidden">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-5xl font-One lg:text-7xl z-10">GALLERY</h1>
          <h1 className="font-One text-2xl mt-4 lg:text-5xl">
            <Link to='/'>HOME</Link>
            <span className="text-yellow-300 lg:text-5xl">/Gallery</span>
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center my-10 px-4 mx-4">
        <div className="inline-flex justify-center  bg-gray-200 p-1 w-full max-w-4xl lg:flex-nowrap overflow-hidden rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`lg:px-8 px-4 text-xl cursor-pointer md:text-3xl py-4 lg:text-4xl font-One transition-all duration-200
                ${activeTab === tab
                  ? 'bg-white text-[#070915] font-bold'
                  : 'text-gray-700 hover:bg-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'Members' ? (
        <Membership />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-8">
          {getItems().map((item) => (
            <div
              key={item.id}
              className="bg-white hover:bg-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow overflow-hidden">
                <h2 className="font-One text-black text-center text-2xl lg:text-3xl truncate">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}

      <Join className="mx-7" />
      <Footer />
    </>
  );
};

export default Gallery;
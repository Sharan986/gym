import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Join from '../components/Join';
import Membership from "../pages/Membership"; // ✅ Make sure this path is correct

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Facility');

  const tabs = ['Facility', 'Classes', 'Events', 'Members'];

  const facilityItems = [
    { id: 1, title: 'Strength Training Area', img: 'https://source.unsplash.com/400x300/?gym,strength' },
    { id: 2, title: 'Cardio Equipment', img: 'https://source.unsplash.com/400x300/?gym,cardio' },
    { id: 3, title: 'Yoga Studio', img: 'https://source.unsplash.com/400x300/?yoga,studio' },
    { id: 4, title: 'Locker Rooms', img: 'https://source.unsplash.com/400x300/?locker,room' },
    { id: 5, title: 'Supplement Store', img: 'https://source.unsplash.com/400x300/?supplements' },
    { id: 6, title: 'Reception Area', img: 'https://source.unsplash.com/400x300/?gym,reception' },
    { id: 7, title: 'Free Weights Zone', img: 'https://source.unsplash.com/400x300/?weights' },
    { id: 8, title: 'Stretching Area', img: 'https://source.unsplash.com/400x300/?stretching' },
  ];

  const classesItems = [
    { id: 1, title: 'Boxing Class', img: 'https://source.unsplash.com/400x300/?boxing,class' },
    { id: 2, title: 'Yoga Session', img: 'https://source.unsplash.com/400x300/?yoga,class' },
    { id: 3, title: 'HIIT Workout', img: 'https://source.unsplash.com/400x300/?hiit,training' },
    { id: 4, title: 'Martial Arts', img: 'https://source.unsplash.com/400x300/?martial,arts' },
    { id: 5, title: 'Spin Class', img: 'https://source.unsplash.com/400x300/?spinning' },
    { id: 6, title: 'Zumba Class', img: 'https://source.unsplash.com/400x300/?zumba' },
  ];

  const eventsItems = [
    { id: 1, title: 'Fitness Challenge', img: 'https://source.unsplash.com/400x300/?fitness,event' },
    { id: 2, title: 'Annual Competition', img: 'https://source.unsplash.com/400x300/?competition' },
    { id: 3, title: 'Community Meetup', img: 'https://source.unsplash.com/400x300/?community,meetup' },
    { id: 4, title: 'Wellness Workshop', img: 'https://source.unsplash.com/400x300/?wellness,workshop' },
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
      {/* ✅ Banner */}
      <div className="relative overflow-hidden">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="Gallery Banner"
          className="w-full h-60 object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-One">Our Gallery</h1>
          <h1 className="font-One text-2xl mt-4">
            <Link to="/" className="hover:underline">HOME</Link>
            <span className="text-yellow-300"> / Gallery</span>
          </h1>
        </div>
      </div>

      {/* ✅ Tabs */}
      <div className="flex flex-wrap justify-center gap-4 my-10 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-M text-xl sm:text-2xl cursor-pointer ${
              activeTab === tab
                ? 'bg-white text-green-600 font-One shadow'
                : 'bg-gray-200 text-green-600 font-One'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ Conditional: Grid or Membership */}
      {activeTab === 'Members' ? (
        <Membership />
      ) : (
        <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {getItems().map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md overflow-hidden flex flex-col justify-between"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="font-One text-black text-center text-2xl p-4">{item.title}</h2>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Join & Footer */}
      <Join />
      <Footer />
    </>
  );
};

export default Gallery;

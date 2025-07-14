import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Join from "../components/Join";
import Membership from "../pages/Membership";
import { gallery } from "../assets/Gallery/gallery.js";
import {w3} from "../assets/w3/w3.js"

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Facility");

  const tabs = ["Facility", "Classes", "Events", "Maaxed"];

  const facilityItems = [
    { id: 1, title: "Strength Training Area", img: gallery.f1 },
    { id: 2, title: "Cardio Equipment", img: gallery.f2 },
    { id: 3, title: "Yoga Studio", img: gallery.f3 },
    { id: 4, title: "Locker Rooms", img: gallery.f4 },
    { id: 5, title: "Supplement Store", img: gallery.e5 },
    { id: 6, title: "Reception Area", img: gallery.e6 },
    { id: 7, title: "Free Weights Zone", img: gallery.e7 },
  ];

  const classesItems = [
    { id: 1, title: "Boxing Class", img: gallery.ft1 },
    { id: 2, title: "Yoga Session", img: gallery.ft2 },
    { id: 3, title: "HIIT Workout", img: gallery.ft3 },
    { id: 4, title: "Martial Arts", img: gallery.ft4 },
    { id: 5, title: "Spin Class", img: gallery.ft5 },
    { id: 6, title: "Zumba Class", img: gallery.ft6 },
    { id: 7, title: "Pilates Class", img: gallery.ft7 },
    { id: 8, title: "Dance Fitness", img: gallery.ft8 },
    { id: 9, title: "Strength Training", img: gallery.ft9 },
    { id: 10, title: "Functional Training", img: gallery.ft10 },
    { id: 11, title: "Aqua Aerobics", img: gallery.ft11 },
    { id: 12, title: "Meditation Class", img: gallery.ft12 },
    { id: 13, title: "Core Strengthening", img: gallery.ft13 },
  ];

  const eventsItems = [
    { id: 1, title: "Fitness Challenge", img: gallery.e1 },
    { id: 2, title: "Annual Competition", img: gallery.e2 },
    { id: 3, title: "Community Meetup", img: gallery.e3 },
    { id: 4, title: "Wellness Workshop", img: gallery.e4 },
  ];

  const MaaxedItems = [
    { id: 1, title: "Amarjeet", img: w3.i1 },
    { id: 6, title: "Amarjeet 6", img: w3.i6 },
    { id: 11, title: "Gurnake Singh", img: w3.i11 },
    { id: 5, title: "Amarjeet 5", img: w3.i5 },
    { id: 12, title: "Jasprit Singh", img: w3.i12 },
    { id: 2, title: "Amarjeet 2", img: w3.i2 },
    { id: 13, title: "Jasprit Singh 2", img: w3.i13 },
    { id: 7, title: "Amarjeet Singh", img: w3.i7 },
    { id: 9, title: "Amarjeet Singh 3", img: w3.i9 },
    { id: 10, title: "Amarjeet Singh 4", img: w3.i10 },
    { id: 18, title: "Sagar Kumar", img: w3.i18 },
    { id: 2, title: "Amarjeet 2", img: w3.i2 },
    { id: 19, title: "Sahil Kumar", img: w3.i19 },
    { id: 3, title: "Amarjeet 3", img: w3.i3 },
    { id: 2, title: "Amarjeet 2", img: w3.i2 },
    { id: 20, title: "Sourav Kumar", img: w3.i20 },
    { id: 8, title: "Amarjeet Singh 2", img: w3.i8 },
  ];

  const getItems = () => {
    switch (activeTab) {
      case "Facility":
        return facilityItems;
      case "Classes":
        return classesItems;
      case "Events":
        return eventsItems;
      case "Maaxed":
        return MaaxedItems;
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
            <Link to="/">HOME</Link>
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
              className={`lg:px-8 px-4 text-sm cursor-pointer md:text-3xl py-4 lg:text-4xl font-One transition-all duration-200
                ${
                  activeTab === tab
                    ? "bg-white text-[#070915] font-bold"
                    : "text-gray-700 hover:bg-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === "Members" ? (
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
              loading="lazy"
             className="w-full h-92 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
/>

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

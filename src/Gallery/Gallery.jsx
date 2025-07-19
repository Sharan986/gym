import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Join from "../components/Join";
import Membership from "../pages/Membership";
import { gallery } from "../assets/Gallery/gallery.js";
import { w3 } from "../assets/w3/w3.js";
import { IMAGES } from "../config/imageConfig.js";


const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Facility");
  const [loading, setLoading] = useState(false);

  const tabs = ["Facility", "Classes", "Events", "Maaxed"];

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setLoading(true);
      setTimeout(() => {
        setActiveTab(tab);
        setLoading(false);
      }, 300); // Short delay to show loading state
    }
  };

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
    { id: 5, title: "Strength Training Area", img: gallery.f1 },
    { id: 6, title: "Cardio Equipment", img: gallery.f2 },
    { id: 7, title: "Yoga Studio", img: gallery.f3 },
    { id: 8, title: "Locker Rooms", img: gallery.f4 },
    { id: 9, title: "Supplement Store", img: gallery.e5 },
    { id: 10, title: "Reception Area", img: gallery.e6 },
    { id: 11, title: "Free Weights Zone", img: gallery.e7 },
  ];

  const MaaxedItems = [
    { id: 1, title: "Amarjeet Singh", img: IMAGES.amarjeetSingh },
    { id: 2, title: "Amarjeet 2", img: w3.i2 },
    { id: 3, title: "Gurnake Singh", img: w3.i11 },
    { id: 4, title: "Amarjeet Singh 4", img: IMAGES.amarjeetSingh4 },
    { id: 5, title: "Jasprit Singh", img: w3.i12 },
    { id: 6, title: "Sourav Kumar", img: IMAGES.souravKumar },
    { id: 7, title: "Amarjeet Singh 2", img: w3.i8 },
    { id: 8, title: "Sahil Kumar", img: IMAGES.sahilKumar },
    { id: 9, title: "Amarjeet 3", img: w3.i3 },
    { id: 10, title: "Amarjeet Singh 3", img: w3.i9 },
    { id: 11, title: "Gurnake Singh 2", img: IMAGES.gurnakeSingh },
    { id: 12, title: "Amarjeet", img: w3.i18 },
    { id: 13, title: "Amarjeet Singh 2", img: IMAGES.amarjeetSingh7 },
    { id: 14, title: "Jasprit Singh 2", img: w3.i13 },
    { id: 15, title: "Amarjeet Singh 6", img: IMAGES.amarjeetSingh6 },
    { id: 16, title: "Amarjeet Singh", img: w3.i7 },
    { id: 17, title: "Sagar Kumar", img: IMAGES.sagarKumar },
    { id: 18, title: "Amarjeet 6", img: w3.i6 },
    { id: 19, title: "Amarjeet Singh 4", img: w3.i10 },
    { id: 20, title: "Amarjeet Singh 3", img: IMAGES.amarjeetSingh3 },
    { id: 21, title: "Sagar Kumar", img: w3.i1 },
    { id: 22, title: "Jasprit Singh", img: IMAGES.jaspritSingh },
    { id: 23, title: "Amarjeet Singh 5", img: IMAGES.amarjeetSingh5 },
    { id: 24, title: "Gurnake Singh", img: IMAGES.gurnakeSingh },
    { id: 25, title: "Jasbir Singh 3", img: IMAGES.jasbirSingh3 },
    { id: 26, title: "Jasprit Singh 2", img: IMAGES.jaspritSingh3 },
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
      <div className="flex justify-center my-10 px-4 mx-4 ">
        <div className="inline-flex justify-center  bg-gray-200 p-1 w-full max-w-4xl lg:flex-nowrap overflow-hidden rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`lg:px-8 px-4 text-sm cursor-pointer md:text-3xl py-4 lg:text-4xl font-One transition-all duration-200
                ${activeTab === tab
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
      ) : loading ? (
        // Skeleton Loading
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:mx-24">
          {[...Array(6)].map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="bg-white shadow-lg overflow-hidden flex flex-col h-full animate-pulse"
            >
              <div className="bg-gray-300 w-full h-92 lg:h-80"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:mx-24">
          {getItems().map((item) => (
            <div
              key={`${activeTab}-${item.id}`}
              className="bg-white  hover:bg-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden flex flex-col h-full"
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

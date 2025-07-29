import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { w3 } from "../assets/w3/w3.js";
import { IMAGES } from "../config/imageConfig.js";
import { FTCollection } from "../FT/ft.js";
import { ImgsCollection } from "../Imgs/Imgs.js";
import { DSC06177 } from "../Imgs/Imgs.js";
import { MAAXED_IMAGES } from "../config/imageConfig.js";

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

  const classesItems = [
    
    { id: 2, title: "Yoga Session", img: FTCollection.z21 },
    { id: 3, title: "Boxing Class", img: FTCollection.z22 },
    { id: 4, title: "Boxing Class", img: FTCollection.z23 },
    { id: 5, title: "Boxing Class", img: FTCollection.z24 },
    { id: 6, title: "Boxing Class", img: FTCollection.z25 },
    { id: 7, title: "Boxing Class", img: FTCollection.z26 },
  ];

  const facilityItems = [
    { id: 2, title: "Yoga Session", img: FTCollection.z2 },
    { id: 3, title: "HIIT Workout", img: FTCollection.z3 },
    { id: 4, title: "Martial Arts", img: FTCollection.z4 },
    { id: 5, title: "Spin Class", img: FTCollection.z5 },
    { id: 30, title: "Dance Fitness", img: FTCollection.cc2 },
    { id: 6, title: "Zumba Class", img: FTCollection.z6 },
    { id: 7, title: "Pilates Class", img: FTCollection.z7 },
    { id: 8, title: "Dance Fitness", img: FTCollection.z8 },
    { id: 9, title: "Strength Training", img: FTCollection.z9 },
    { id: 10, title: "Functional Training", img: FTCollection.z10 },
    { id: 11, title: "Aqua Aerobics", img: FTCollection.z11 },
    { id: 12, title: "Meditation Class", img: FTCollection.z12 },
    { id: 13, title: "Core Strengthening", img: FTCollection.z13 },
    { id: 14, title: "Flexibility Training", img: FTCollection.z14 },
    { id: 15, title: "Balance and Stability", img: FTCollection.z15 },
    { id: 16, title: "Senior Fitness", img: FTCollection.z16 },
    { id: 17, title: "Kids Fitness", img: FTCollection.z17 },
    { id: 18, title: "Bootcamp Training", img: FTCollection.z18 },
    { id: 19, title: "Circuit Training", img: FTCollection.z19 },
    { id: 20, title: "Circuit Training", img: FTCollection.z27 },
    { id: 21, title: "Circuit Training", img: FTCollection.z28 },
    { id: 22, title: "Circuit Training", img: FTCollection.z29 },
    { id: 23, title: "Circuit Training", img: FTCollection.z30 },
  ];

  const eventsItems = [
    { id: 1, title: "Fitness Challenge", img: IMAGES.e1 },
    { id: 2, title: "Annual Competition", img: IMAGES.e2 },
    { id: 3, title: "Community Meetup", img: IMAGES.e3 },
    { id: 4, title: "Wellness Workshop", img: IMAGES.e4 },
    { id: 5, title: "Strength Training Area", img: IMAGES.e5 },
    { id: 6, title: "Cardio Equipment", img: IMAGES.e6 },
    { id: 7, title: "Yoga Studio", img: IMAGES.e7 },
    { id: 8, title: "Strength Training Area", img: IMAGES.f1 },
    { id: 9, title: "Cardio Equipment", img: IMAGES.f2 },
    { id: 10, title: "Yoga Studio", img: IMAGES.f3 },
    { id: 11, title: "Locker Rooms", img: IMAGES.f4 },
    { id: 12, title: "Supplement Store", img: IMAGES.e5 },
    { id: 13, title: "Reception Area", img: IMAGES.e6 },
    { id: 14, title: "Free Weights Zone", img: IMAGES.e7 },
    { id: 24, title: "Yoga Session", img: FTCollection.c2 },
    { id: 25, title: "HIIT Workout", img: FTCollection.c3 },
    { id: 26, title: "Martial Arts", img: FTCollection.c4 },
    { id: 27, title: "Spin Class", img: FTCollection.c5 },
    { id: 28, title: "Zumba Class", img: FTCollection.c6 },
    { id: 29, title: "Pilates Class", img: FTCollection.cc1 },

    { id: 31, title: "Boxing Class", img: FTCollection.c1 },
  ];

  const MaaxedItems = [
 
    { id: 102, title: "New Member 2", img: MAAXED_IMAGES.IMG_20250728_WA0006 },
    { id: 103, title: "New Member 3", img: MAAXED_IMAGES.IMG_20250728_WA0007 },
   
    { id: 44, title: "Gym Member 21", img: ImgsCollection.DSC06199 },
    { id: 30, title: "Gym Member 8", img: ImgsCollection.DSC06143 },
    { id: 88, title: "Sagar Kumar", img: w3.ow },
    { id: 25, title: "Gym Member 6", img: ImgsCollection.DSC06126 },
    { id: 41, title: "Gym Member 18", img: ImgsCollection.DSC06178 },
    { id: 1, title: "Amarjeet Singh", img: IMAGES.amarjeetSingh },
    { id: 40, title: "Sagar Kumar", img: w3.ow2 },
   
    
    { id: 42, title: "Gym Member 19", img: ImgsCollection.DSC06181 },
    { id: 26, title: "Jasprit Singh 2", img: IMAGES.jaspritSingh3 },
    { id: 13, title: "Amarjeet Singh 2", img: IMAGES.amarjeetSingh7 },
    { id: 17, title: "Gym Member 4", img: ImgsCollection.DSC06116 },
    { id: 3, title: "Gurnake Singh", img: w3.i11 },
    { id: 31, title: "Gym Member 9", img: ImgsCollection.DSC06146 },
    { id: 24, title: "Gurnake Singh", img: IMAGES.gurnakeSingh },
    { id: 33, title: "Gym Member 11", img: ImgsCollection.DSC06154 },
    { id: 16, title: "Amarjeet Singh", img: w3.i7 },
    { id: 32, title: "Gym Member 10", img: ImgsCollection.DSC06150 },
    { id: 2, title: "Amarjeet 2", img: w3.i2 },
   
    { id: 46, title: "Gym Member 23", img: ImgsCollection.DSC06204 },
    { id: 15, title: "Amarjeet Singh 6", img: IMAGES.amarjeetSingh6 },
    { id: 20, title: "Amarjeet Singh 3", img: IMAGES.amarjeetSingh3 },
    { id: 6, title: "Gym Member 1", img: ImgsCollection.DSC06105 },

    
    { id: 10, title: "Amarjeet Singh 3", img: w3.i9 },
    
    { id: 4, title: "Amarjeet Singh 4", img: IMAGES.amarjeetSingh4 },
    { id: 7, title: "Amarjeet Singh 2", img: w3.i8 },
   
    { id: 8, title: "Gym Member 2", img: ImgsCollection.DSC06109 },
    { id: 19, title: "Amarjeet Singh 4", img: w3.i10 },
    { id: 29, title: "Gym Member 7", img: ImgsCollection.DSC06141 },
    { id: 23, title: "Gym Member 5", img: ImgsCollection.DSC06120 },
    { id: 22, title: "Jasprit Singh", img: IMAGES.jaspritSingh },
    
    
    { id: 38, title: "Gym Member 16", img: ImgsCollection.DSC06176 },
   
    { id: 11, title: "Gym Member 3", img: ImgsCollection.DSC06113 },
    { id: 58, title: "Gym Member 35", img: ImgsCollection.DSC06236 },
    { id: 59, title: "Gym Member 36", img: ImgsCollection.DSC06244_1 },
    { id: 34, title: "Gym Member 12", img: ImgsCollection.DSC06166 },
    { id: 45, title: "Gym Member 22", img: ImgsCollection.DSC06200 },
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
    <div className=" min-h-screen">
      {/* Modern Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <img
          src={DSC06177}
          alt="Premium FitnessGALLERY - OneRepMaax Gym"
          className="w-full h-72 lg:h-[70vh] object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-5xl font-One lg:text-7xl bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-4">
            GALLERY
          </h1>
          <nav className="font-One text-lg lg:text-2xl flex items-center gap-2">
            <Link
              to="/"
              className="hover:text-[#48D3A3] transition-colors duration-300"
            >
              HOME
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FCDE3B]">GALLERY</span>
          </nav>
        </div>
      </div>

      {/* Modern Tabs */}
      <div className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm p-2 border border-gray-700">
            <div className="grid grid-cols-4 lg:grid-cols-4 gap-1 md:gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`py-3 md:py-4 px-2 md:px-6  font-One text-xs md:text-3xl lg:text-4xl transition-all duration-300 transform hover:scale-105
                    ${activeTab === tab
                      ? "bg-[#48D3A3] text-black font-bold shadow-lg"
                      : "text-white hover:bg-gray-800 hover:text-[#48D3A3]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Gallery Grid */}
      <div className="px-6 md:px-12 lg:px-20 pb-20">
        {loading ? (
          // Modern Skeleton Loading
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-gray-800  overflow-hidden animate-pulse border border-gray-700"
              >
                <div className="aspect-square bg-gray-700"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getItems().map((item) => (
              <div
                key={`${activeTab}-${item.id}`}
                className="group bg-gray-900  overflow-hidden border border-gray-700 hover:border-[#48D3A3]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#48D3A3]/10"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;

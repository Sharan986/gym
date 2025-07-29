import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {DSC06177,DSC06104,DSC06244,DSC06178} from "../Imgs/Imgs";



const WorkoutGuide = () => {
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One min-h-screen">
        {/* Modern Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
               <img
                 src={DSC06177}
                 alt="WORKOUT GUIDE- OneRepMaax Gym"
                 className="w-full h-72 lg:h-[70vh] object-cover object-center opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-transparent"></div>
               <div className="absolute bottom-8 left-8 text-white z-10">
                 <h1 className="text-5xl font-One lg:text-7xl bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-4">
                   WORKOUT GUIDE
                 </h1>
                 <nav className="font-One text-lg lg:text-2xl flex items-center gap-2">
                   <Link to='/' className="hover:text-[#48D3A3] transition-colors duration-300">HOME</Link>
                   <span className="text-gray-400">/</span>
                   <span className="text-[#FCDE3B]">WORKOUT GUIDE</span>
                 </nav>
               </div>
             </div>

        {/* Modern Content Section */}
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-One uppercase mb-6 sm:mb-8 text-white">
              Your Fitness Journey Starts Here!
            </h2>
            <p className="text-gray-400 font-M text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              Regular workouts offer numerous benefits for both body and mind. They strengthen muscles, improve cardiovascular health, and boost endurance, enhancing overall physical fitness.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Workout Cards Section */}
      <div className="bg-[#070915] px-6 sm:px-8 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Beginner Card */}
          <Link to="/WorkoutGuide/Beginner" className="group block">
            <div className="relative overflow-hidden  h-[420px] sm:h-[460px] transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:border-[#48D3A3]/40">
              {/* Background Image */}
              <img
                src={DSC06104}
                alt="Beginner workout"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Modern overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 text-white">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm font-M uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 bg-[#48D3A3] rounded-full mr-2"></span>
                    Level 1
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-One mb-4">
                  Beginner
                </h3>
                <p className="text-gray-300 font-M text-base sm:text-lg leading-relaxed mb-6">
                  Start your fitness journey with simple and effective routines designed for newcomers.
                </p>
                <div className="flex items-center text-[#48D3A3] font-M text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                  <span>Begin Your Journey</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Intermediate Card */}
          <Link to="/WorkoutGuide/Intermediate" className="group block">
            <div className="relative overflow-hidden  h-[420px] sm:h-[460px] transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:border-[#FCDE3B]/40">
              {/* Background Image */}
              <img
                src={DSC06244}
                alt="Intermediate workout"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Modern overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCDE3B]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 text-white">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-sm font-M uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 bg-[#FCDE3B] rounded-full mr-2"></span>
                    Level 2
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-One mb-4">
                  Intermediate
                </h3>
                <p className="text-gray-300 font-M text-base sm:text-lg leading-relaxed mb-6">
                  Take your workout to the next level with guided programs and advanced techniques.
                </p>
                <div className="flex items-center text-[#FCDE3B] font-M text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                  <span>Level Up</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Advanced Card */}
          <Link to="/WorkoutGuide/Advance" className="group block">
            <div className="relative overflow-hidden  h-[420px] sm:h-[460px] transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:border-orange-500/40">
              {/* Background Image */}
              <img
                src=  {DSC06178}
                alt="Advanced workout"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Modern overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 text-white">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-500 text-sm font-M uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Level 3
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-One mb-4">
                  Advanced
                </h3>
                <p className="text-gray-300 font-M text-base sm:text-lg leading-relaxed mb-6">
                  Push limits with intense and personalized training plans for elite performance.
                </p>
                <div className="flex items-center text-orange-500 font-M text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                  <span>Master Your Limits</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WorkoutGuide;

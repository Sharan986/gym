import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {DSC06177} from "../Imgs/Imgs";

const WorkoutGuide = () => {
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One min-h-screen">
        {/* Modern Hero Section */}
        <div className="relative">
          <img
            src={DSC06177}
            alt="Workout Guide Banner"
            className="w-full h-[50vh] sm:h-[60vh] lg:h-[60vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-One text-white leading-tight mb-4 sm:mb-6">
                WORKOUT GUIDE
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6 sm:mb-8">
                <Link 
                  to='/' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  HOME
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#FCDE3B]">WORKOUT GUIDE</span>
              </div>
             
            </div>
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
                src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=870&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1740&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1604335788369-94f349ae5243?q=80&w=870&auto=format&fit=crop"
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

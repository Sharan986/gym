import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const WorkoutGuide = () => {
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One min-h-screen">
        {/* Hero Section with Modern Overlay */}
        <div className="relative overflow-hidden">
          <img
            src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
            alt="Workout Guide Banner"
            className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover object-center"
          />
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-One text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up">
                WORKOUT GUIDE
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-One mb-6 sm:mb-8">
                <Link 
                  to='/' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  HOME
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#FCDE3B]">WORKOUT GUIDE</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-M max-w-3xl leading-relaxed">
                Transform your body, elevate your mind, and unleash your potential
              </p>
            </div>
          </div>
        </div>

        {/* Content Section with Glass Morphism */}
        <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 z-10">
          <div className="mx-6 sm:mx-8 lg:mx-16 xl:mx-24 pb-16 sm:pb-20 lg:pb-24">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-One uppercase mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-[#48D3A3] to-[#FCDE3B] bg-clip-text text-transparent">
                Your Fitness Journey Starts Here!
              </h2>
              <p className="text-gray-300 font-M text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl">
                Regular workouts offer numerous benefits for both body and mind. They strengthen muscles, improve cardiovascular health, and boost endurance, enhancing overall physical fitness. Exercise helps maintain a healthy weight by burning calories and increasing metabolism. It reduces stress and anxiety by releasing endorphins, promoting mental well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Workout Cards Section */}
      <div className="bg-[#070915] pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Beginner Card */}
            <Link to="/WorkoutGuide/Beginner" className="group block">
              <div className="relative overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#48D3A3]/20 to-[#48D3A3]/5 border border-[#48D3A3]/20 hover:border-[#48D3A3]/40 transition-all duration-500 h-[400px] sm:h-[450px] lg:h-[500px] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-[#48D3A3]/20">
                <img
                  src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=870&auto=format&fit=crop"
                  alt="Beginner workout"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-xs sm:text-sm font-M uppercase tracking-wider mb-4">
                      Level 1
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-One text-white mb-3 sm:mb-4 group-hover:text-[#48D3A3] transition-colors duration-300">
                    Beginner
                  </h3>
                  <p className="text-gray-300 font-M text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                    Start your fitness journey with simple and effective routines designed for newcomers.
                  </p>
                  <div className="flex items-center text-[#48D3A3] font-M text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300">
                    <span>Begin Your Journey</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Intermediate Card */}
            <Link to="/WorkoutGuide/Intermediate" className="group block">
              <div className="relative overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#FCDE3B]/20 to-[#FCDE3B]/5 border border-[#FCDE3B]/20 hover:border-[#FCDE3B]/40 transition-all duration-500 h-[400px] sm:h-[450px] lg:h-[500px] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-[#FCDE3B]/20">
                <img
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1740&auto=format&fit=crop"
                  alt="Intermediate workout"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-xs sm:text-sm font-M uppercase tracking-wider mb-4">
                      Level 2
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-One text-white mb-3 sm:mb-4 group-hover:text-[#FCDE3B] transition-colors duration-300">
                    Intermediate
                  </h3>
                  <p className="text-gray-300 font-M text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                    Take your workout to the next level with guided programs and advanced techniques.
                  </p>
                  <div className="flex items-center text-[#FCDE3B] font-M text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300">
                    <span>Level Up</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Advanced Card */}
            <Link to="/WorkoutGuide/Advance" className="group block">
              <div className="relative overflow-hidden backdrop-blur-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 h-[400px] sm:h-[450px] lg:h-[500px] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                <img
                  src="https://images.unsplash.com/photo-1604335788369-94f349ae5243?q=80&w=870&auto=format&fit=crop"
                  alt="Advanced workout"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-500 text-xs sm:text-sm font-M uppercase tracking-wider mb-4">
                      Level 3
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-One text-white mb-3 sm:mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    Advanced
                  </h3>
                  <p className="text-gray-300 font-M text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                    Push limits with intense and personalized training plans for elite performance.
                  </p>
                  <div className="flex items-center text-orange-500 font-M text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300">
                    <span>Master Your Limits</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WorkoutGuide;

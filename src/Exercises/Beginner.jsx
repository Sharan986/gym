import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Beginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Chest",
      path: "Chest",
      description: "Build upper body strength with targeted chest exercises",
      icon: "💪",
      difficulty: "Easy"
    },
    {
      id: 2,
      name: "Back",
      path: "Back",
      description: "Strengthen your back muscles for better posture",
      icon: "🔥",
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Legs",
      path: "Legs",
      description: "Develop lower body power and stability",
      icon: "🦵",
      difficulty: "Easy"
    },
    {
      id: 4,
      name: "Arms",
      path: "Arms",
      description: "Tone and strengthen your arm muscles",
      icon: "💪",
      difficulty: "Easy"
    },
    {
      id: 5,
      name: "Shoulders",
      path: "Shoulders",
      description: "Build strong, well-defined shoulder muscles",
      icon: "🔱",
      difficulty: "Easy"
    },
  ];
  
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One min-h-screen">
        {/* Hero Section with Modern Overlay */}
        <div className="relative overflow-hidden">
          <img
            src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
            alt="Beginner Workout Banner"
            className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] object-cover object-center"
          />
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4 sm:mb-6">
                Level 1 • Beginner
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-One text-white leading-tight mb-4 sm:mb-6">
                BEGINNER
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-One mb-6 sm:mb-8">
                <Link 
                  to='/WorkoutGuide' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  GUIDE
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#FCDE3B]">BEGINNER</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-M max-w-3xl leading-relaxed">
                Start your fitness journey with foundational exercises
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 z-10 pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
            {/* Section Header */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-One uppercase mb-4 sm:mb-6 bg-gradient-to-r from-[#48D3A3] to-[#FCDE3B] bg-clip-text text-transparent">
                Choose Your Muscle Group
              </h2>
              <p className="text-gray-300 font-M text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl">
                Select a muscle group to begin your workout. Each exercise is designed for beginners with proper form guidance and progressive difficulty.
              </p>
            </div>

            {/* Exercise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {exercises.map((exercise) => (
                <Link
                  key={exercise.id} 
                  to={`${exercise.path}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#48D3A3]/10 to-[#48D3A3]/5 border border-[#48D3A3]/20 hover:border-[#48D3A3]/40 transition-all duration-500 h-[280px] sm:h-[320px] lg:h-[350px] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-[#48D3A3]/20">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#48D3A3]/5 to-[#48D3A3]/10"></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                      {/* Header */}
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {exercise.icon}
                        </div>
                        <div className="inline-block px-3 py-1 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-xs sm:text-sm font-M uppercase tracking-wider mb-4">
                          {exercise.difficulty}
                        </div>
                      </div>

                      {/* Title */}
                      <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-One text-white mb-3 sm:mb-4 group-hover:text-[#48D3A3] transition-colors duration-300">
                          {exercise.name}
                        </h3>
                        <p className="text-gray-300 font-M text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                          {exercise.description}
                        </p>
                      </div>

                      {/* Call to Action */}
                      <div className="flex items-center justify-center text-[#48D3A3] font-M text-sm sm:text-base group-hover:translate-y-1 transition-transform duration-300">
                        <span>Start Workout</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#48D3A3]/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Beginner

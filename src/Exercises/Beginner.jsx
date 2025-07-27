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
      pattern: "squares",
      color: "from-[#48D3A3]/20 to-[#48D3A3]/10",
      difficulty: "Easy"
    },
    {
      id: 2,
      name: "Back",
      path: "Back",
      description: "Strengthen your back muscles for better posture",
      pattern: "dots",
      color: "from-[#48D3A3]/20 to-[#48D3A3]/10",
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Legs",
      path: "Legs",
      description: "Develop lower body power and stability",
      pattern: "lines",
      color: "from-[#48D3A3]/20 to-[#48D3A3]/10",
      difficulty: "Easy"
    },
    {
      id: 4,
      name: "Arms",
      path: "Arms",
      description: "Tone and strengthen your arm muscles",
      pattern: "triangles",
      color: "from-[#48D3A3]/20 to-[#48D3A3]/10",
      difficulty: "Easy"
    },
    {
      id: 5,
      name: "Shoulders",
      path: "Shoulders",
      description: "Build strong, well-defined shoulder muscles",
      pattern: "hexagons",
      color: "from-[#48D3A3]/20 to-[#48D3A3]/10",
      difficulty: "Easy"
    },
    
  ];
  
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One min-h-screen">
        {/* Modern Hero Section */}
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
            alt="Beginner Workout Banner"
            className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4 sm:mb-6">
                Level 1 • Beginner 
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-One text-white leading-tight mb-4 sm:mb-6">
                BEGINNER
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6 sm:mb-8">
                <Link 
                  to='/WorkoutGuide' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  GUIDE
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#FCDE3B]">BEGINNER</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Start your fitness journey with foundational exercises
              </p>
            </div>
          </div>
        </div>

        {/* Modern Content Section */}
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-One uppercase mb-6 sm:mb-8 text-white">
              Choose Your Muscle Group
            </h2>
            <p className="text-gray-400 font-M text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              Select a muscle group to begin your workout. Each exercise is designed for beginners with proper form guidance.
            </p>
          </div>
        </div>

        {/* Modern Exercise Cards Grid */}
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {exercises.map((exercise) => (
              <Link
                key={exercise.id} 
                to={`${exercise.path}`}
                className="group block"
              >
                <div className="relative  overflow-hidden h-72 sm:h-80 group-hover:scale-[1.02] transition-all duration-300 bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-[#48D3A3]/50 hover:shadow-lg hover:shadow-[#48D3A3]/10">
                  
                  {/* Simple Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exercise.color} opacity-60`}></div>
                  
                  {/* Minimal Geometric Element */}
                  <div className="absolute top-6 right-6">
                    <div className="w-3 h-3 bg-[#48D3A3] rounded-full opacity-80"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    {/* Top Badge */}
                    <div className="flex justify-start">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full">
                        <div className="w-1.5 h-1.5 bg-[#48D3A3] rounded-full"></div>
                        {exercise.difficulty}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="text-left">
                      <h3 className="text-2xl sm:text-3xl font-One text-white mb-3 group-hover:text-[#48D3A3] transition-colors duration-300">
                        {exercise.name}
                      </h3>
                      <p className="text-gray-300 font-M text-sm sm:text-base leading-relaxed mb-4">
                        {exercise.description}
                      </p>
                      
                      {/* Call to Action */}
                      <div className="flex items-center text-[#48D3A3] font-M text-sm group-hover:translate-x-1 transition-transform duration-300">
                        <span>Start Workout</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Beginner

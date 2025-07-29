import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {  DSC06120R } from '../Imgs/Imgs';


const Intermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Chest",
      path: "Chest",
      description: "Advanced chest exercises for muscle definition and strength",
      difficulty: "Medium"
    },
    {
      id: 2,
      name: "Back",
      path: "Back",
      description: "Intermediate back workouts for posture and power",
      difficulty: "Medium"
    },
    {
      id: 3,
      name: "Legs",
      path: "Legs",
      description: "Progressive leg training for enhanced performance",
      difficulty: "Medium"
    },
    {
      id: 4,
      name: "Arms",
      path: "Arms",
      description: "Intermediate arm exercises for size and definition",
      difficulty: "Medium"
    },
    {
      id: 5,
      name: "Shoulders",
      path: "Shoulders",
      description: "Advanced shoulder workouts for broader frame",
      difficulty: "Medium"
    },
  ];
  
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One min-h-screen">
        {/* Modern Hero Section */}
        <div className="relative">
          <img
            src={DSC06120R}
            alt="Intermediate Workout Banner"
            className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-sm sm:text-base font-M uppercase tracking-wider mb-4 sm:mb-6">
                Level 2 • Intermediate 
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-One text-white leading-tight mb-4 sm:mb-6">
                INTERMEDIATE
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6 sm:mb-8">
                <Link 
                  to='/WorkoutGuide' 
                  className="text-white hover:text-[#FCDE3B] transition-colors duration-300"
                >
                  GUIDE
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#FCDE3B]">INTERMEDIATE</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Take your fitness to the next level with progressive training
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
              Progress with intermediate exercises designed to challenge your limits and build serious strength.
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
                <div className="relative overflow-hidden h-72 sm:h-80 group-hover:scale-[1.02] transition-all duration-300 bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-[#FCDE3B]/50 hover:shadow-lg hover:shadow-[#FCDE3B]/10">
                  
                  {/* Yellow Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FCDE3B]/20 to-[#FCDE3B]/10 opacity-60"></div>
                  
                  {/* Minimal Geometric Element */}
                  <div className="absolute top-6 right-6">
                    <div className="w-3 h-3 bg-[#FCDE3B] rounded-full opacity-80"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    {/* Top Badge */}
                    <div className="flex justify-start">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full">
                        <div className="w-1.5 h-1.5 bg-[#FCDE3B] rounded-full"></div>
                        {exercise.difficulty}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="text-left">
                      <h3 className="text-2xl sm:text-3xl font-One text-white mb-3 group-hover:text-[#FCDE3B] transition-colors duration-300">
                        {exercise.name}
                      </h3>
                      <p className="text-gray-300 font-M text-sm sm:text-base leading-relaxed mb-4">
                        {exercise.description}
                      </p>
                      
                      {/* Call to Action */}
                      <div className="flex items-center text-[#FCDE3B] font-M text-sm group-hover:translate-x-1 transition-transform duration-300">
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

export default Intermediate

import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begSHOULDERS } from '../assets/assets';
import { interSHOULDERS } from '../assets/assets';

const ShouldersBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Machine Shoulder Press",
      video: begSHOULDERS.machinesholder,
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      instructions: [
        "Adjust seat height so handles align with shoulders",
        "Grip handles with palms facing forward",
        "Press upward until arms are nearly straight",
        "Lower slowly back to starting position",
        "Keep back flat against the pad"
      ],
      benefits: [
        "Provides stable movement path for beginners",
        "Reduces strain on lower back",
        "Allows controlled weight progression",
        "Isolates shoulder muscles effectively"
      ],
      tips: [
        "Don't lock elbows at the top",
        "Exhale while pressing up, inhale while lowering",
        "Use full range of motion without overextending",
        "Start with lighter weight to perfect form"
      ]
    },
    {
      id: 2,
      name: "Dumbbell Lateral Raises",
      video: begSHOULDERS.lateralraises,
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      instructions: [
        "Stand with dumbbells at sides, palms facing inward",
        "Keep slight bend in elbows",
        "Raise arms to shoulder height (forming a 'T')",
        "Pause briefly at the top",
        "Lower slowly with control"
      ],
      benefits: [
        "Builds shoulder width and definition",
        "Improves shoulder mobility",
        "Can be done with various equipment",
        "Enhances mind-muscle connection"
      ],
      tips: [
        "Imagine pouring water from cups",
        "Use lighter weights for proper form",
        "Avoid shrugging shoulders upward",
        "Control the descent (3-4 seconds)"
      ]
    },
    {
      id: 3,
      name: "Reverse Dumbbell Flys",
      video: interSHOULDERS.reverse,
      muscles: ["Rear Deltoids", "Rhomboids", "Trapezius"],
      instructions: [
        "Bend forward at hips about 45 degrees",
        "Hold dumbbells with palms facing each other",
        "Raise arms out to sides, squeezing shoulder blades",
        "Pause at top when arms parallel to floor",
        "Lower slowly to starting position"
      ],
      benefits: [
        "Targets often-neglected rear delts",
        "Improves posture and upper back strength",
        "Counters effects of rounded shoulders",
        "Enhances shoulder stability"
      ],
      tips: [
        "Keep slight bend in elbows",
        "Lead with elbows, not hands",
        "Maintain neutral spine position",
        "Use lighter weights for control"
      ]
    },
    {
      id: 4,
      name: "Front Raises",
      video: begSHOULDERS.frontraises,
      muscles: ["Anterior Deltoids", "Pectoralis Major"],
      instructions: [
        "Stand with dumbbells in front of thighs",
        "Keep slight bend in elbows",
        "Raise one arm straight forward to eye level",
        "Lower slowly and alternate arms",
        "Maintain controlled movement throughout"
      ],
      benefits: [
        "Isolates front shoulder muscles",
        "Improves shoulder flexion strength",
        "Can identify muscle imbalances",
        "Enhances shoulder definition"
      ],
      tips: [
        "Avoid swinging or using momentum",
        "Keep wrists neutral (not bent)",
        "Control the descent (2-3 seconds)",
        "Alternate arms or lift both together"
      ]
    },
    {
      id: 5,
      name: "Shrugs",
      video: begSHOULDERS.shrugs,
      muscles: ["Trapezius", "Levator Scapulae"],
      instructions: [
        "Stand with dumbbells at sides",
        "Keep arms straight, shoulders relaxed",
        "Elevate shoulders straight upward",
        "Squeeze traps at the top position",
        "Lower slowly to full stretch"
      ],
      benefits: [
        "Develops upper trap muscles",
        "Improves shoulder girdle stability",
        "Enhances neck support",
        "Can be done with various equipment"
      ],
      tips: [
        "Avoid rolling shoulders (move straight up/down)",
        "Hold contraction at top for 1-2 seconds",
        "Use straps if grip fails before traps",
        "Keep chin neutral (don't jut forward)"
      ]
    }
  ];

  return (
    <>
      <div className="bg-[#070915] min-h-screen font-One">
        {/* Modern Hero Section */}
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
            alt="Shoulders Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Beginner • Shoulders Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                SHOULDER TRAINING
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6">
                <Link 
                  to='/WorkoutGuide' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  GUIDE
                </Link>
                <span className="text-gray-400">/</span>
                <Link 
                  to='/Beginner' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  BEGINNER
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#48D3A3]">SHOULDERS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Build strong, well-defined shoulder muscles with foundational exercises
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#48D3A3]/30 transition-all duration-300">
                  
                  {/* Exercise Header */}
                  <div className="p-6 sm:p-8 border-b border-gray-700/50">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-One text-white mb-4">
                      {exercise.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-400 font-M">Targets:</span>
                      {exercise.muscles.map((muscle, i) => (
                        <span key={i} className="px-3 py-1 bg-[#48D3A3]/20 text-[#48D3A3] text-xs font-medium rounded-full">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video and Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
                    
                    {/* Video Section */}
                    <div className="order-2 lg:order-1">
                      <div className="bg-black/50 rounded-xl overflow-hidden border border-gray-600/30">
                        <video 
                          className="w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 object-cover" 
                          controls={false} 
                          preload="metadata" 
                          autoPlay 
                          muted 
                          loop
                          playsInline
                        >
                          <source src={exercise.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="order-1 lg:order-2 space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-One text-[#48D3A3] mb-4">
                          How to Perform
                        </h3>
                        <ol className="space-y-2">
                          {exercise.instructions.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base leading-relaxed">
                              <span className="flex-shrink-0 w-6 h-6 bg-[#48D3A3] text-black text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Benefits and Tips Grid */}
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 pt-0">
                    
                    {/* Benefits */}
                    <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-One text-[#FCDE3B] mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-2">
                        {exercise.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-[#FCDE3B] mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-br from-[#48D3A3]/10 to-[#48D3A3]/5 border border-[#48D3A3]/20 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-One text-[#48D3A3] mb-4">
                        Pro Tips
                      </h3>
                      <ul className="space-y-2">
                        {exercise.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-[#48D3A3] mt-1">★</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ShouldersBeginner;

import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {begARMS} from "../assets/assets"
import { interARMS } from '../assets/assets';
import { advSHOULDERS } from '../assets/assets';

const ArmsIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: " Tricep Overhead Extensions",
      muscles: ["Triceps (Long Head)", "Anconeus"],
      video: begARMS.cableoverhead,
      instructions: [
        "Sit on bench with back support, hold EZ bar with narrow overhand grip",
        "Press weight overhead until arms are fully extended",
        "Keeping elbows close to ears, lower bar behind head",
        "Pause when forearms reach parallel to floor",
        "Extend arms back to starting position"
      ],
      benefits: [
        "Targets the often underdeveloped long head of triceps",
        "Improves shoulder stability and mobility",
        "Enhances arm definition and strength",
        "Reduces wrist strain compared to straight bar"
      ],
      tips: [
        "Keep elbows pointing forward (don't flare outward)",
        "Move slowly through full range of motion (3 sec down, 1 sec up)",
        "Use lighter weight than you think for proper form",
        "Engage core to prevent back arching",
        "Focus on stretch at bottom of movement"
      ]
    },
    {
      id: 2,
      name: " Preacher Curls",
      muscles: ["Biceps Brachii (Short Head)", "Brachialis"],
      video: interARMS.preacher,
      instructions: [
        "Set preacher bench to support underarms comfortably",
        "Grip EZ bar with shoulder-width underhand grip",
        "Curl weight up until forearms are vertical",
        "Squeeze biceps hard at top position",
        "Lower slowly with control (3-4 second count)"
      ],
      benefits: [
        "Isolates biceps by eliminating body English",
        "Reduces shoulder and wrist strain",
        "Allows strict form and heavy weights",
        "Enhances bicep peak development"
      ],
      tips: [
        "Don't fully extend elbows at bottom (maintain tension)",
        "Keep back flat against pad throughout",
        "Use full range of motion without hyperextending",
        "Try different grip widths to target various angles",
        "Control the negative portion of the lift"
      ]
    },
    {
      id: 3,
      name: "Tricep Rope Pushdown",
      muscles: ["Triceps (All Heads)", "Anconeus"],
      video: advSHOULDERS.ropepushdown ,
      instructions: [
        "Attach rope to high pulley cable machine",
        "Stand with slight forward lean, elbows pinned to sides",
        "Push rope downward until arms fully extended",
        "At bottom, pull rope ends apart for extra contraction",
        "Control return to starting position"
      ],
      benefits: [
        "Isolates triceps with constant tension",
        "Improves arm definition and separation",
        "Allows varied hand positions for different emphasis",
        "Reduces joint stress compared to heavy presses"
      ],
      tips: [
        "Keep elbows stationary - only forearms should move",
        "Lean forward slightly for better muscle engagement",
        "Use moderate weight with perfect form",
        "Focus on squeezing at full extension",
        "Try single-arm variations for imbalances"
      ]
    },
    {
      id: 4,
      name: "Incline Dumbbell Curls",
      muscles: ["Biceps Brachii (Long Head)", "Brachialis"],
      video: begARMS.inclinecurl,
      instructions: [
        "Set incline bench to 45-60 degree angle",
        "Let arms hang straight down with dumbbells",
        "Curl weights while keeping elbows back",
        "Squeeze at top when palms face shoulders",
        "Lower slowly with control (3 second count)"
      ],
      benefits: [
        "Targets long head of biceps for peak development",
        "Provides greater stretch at bottom position",
        "Reduces cheating and body momentum",
        "Improves mind-muscle connection"
      ],
      tips: [
        "Keep shoulders back against bench",
        "Don't swing weights - controlled movement only",
        "Rotate palms up as you curl (supination)",
        "Pause for 1 second at peak contraction",
        "Alternate arms or lift simultaneously"
      ]
    },
    {
      id: 5,
      name: "Reverse Curls",
      muscles: ["Brachioradialis", "Brachialis", "Forearms"],
      video: interARMS.reversecurl,
      instructions: [
        "Attach straight bar to low pulley cable machine",
        "Grip bar with overhand grip (palms down)",
        "Keep elbows pinned to sides",
        "Curl bar up to shoulder height",
        "Squeeze forearms at top position",
        "Lower slowly with control"
      ],
      benefits: [
        "Develops forearm and brachialis muscles",
        "Improves grip strength",
        "Balances arm development",
        "Enhances elbow joint stability"
      ],
      tips: [
        "Use lighter weight than regular curls",
        "Keep wrists straight throughout",
        "Focus on squeezing at top of movement",
        "Control the eccentric (lowering) phase",
        "Try single-arm variations for imbalances"
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
            alt="Arms Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Intermediate • Arms Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                ARM TRAINING
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6">
                <Link 
                  to='/WorkoutGuide' 
                  className="text-white hover:text-[#FCDE3B] transition-colors duration-300"
                >
                  GUIDE
                </Link>
                <span className="text-gray-400">/</span>
                <Link 
                  to='/Intermediate' 
                  className="text-white hover:text-[#FCDE3B] transition-colors duration-300"
                >
                  INTERMEDIATE
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#FCDE3B]">ARMS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Progressive arm training with intermediate techniques and compound movements
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#FCDE3B]/30 transition-all duration-300">
                  
                  {/* Exercise Header */}
                  <div className="p-6 sm:p-8 border-b border-gray-700/50">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-One text-white mb-4">
                      {exercise.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-400 font-M">Targets:</span>
                      {exercise.muscles.map((muscle, i) => (
                        <span key={i} className="px-3 py-1 bg-[#FCDE3B]/20 text-[#FCDE3B] text-xs font-medium rounded-full">
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
                        <h3 className="text-xl sm:text-2xl font-One text-[#FCDE3B] mb-4">
                          How to Perform
                        </h3>
                        <ol className="space-y-2">
                          {exercise.instructions.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base leading-relaxed">
                              <span className="flex-shrink-0 w-6 h-6 bg-[#FCDE3B] text-black text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
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
                      <h3 className="text-lg sm:text-xl font-One text-orange-400 mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-2">
                        {exercise.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-orange-400 mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-br from-[#FCDE3B]/10 to-[#FCDE3B]/5 border border-[#FCDE3B]/20 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-One text-[#FCDE3B] mb-4">
                        Pro Tips
                      </h3>
                      <ul className="space-y-2">
                        {exercise.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-[#FCDE3B] mt-1">★</span>
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
  );
};

export default ArmsIntermediate;

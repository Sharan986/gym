import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begLEGS } from '../assets/assets';

import { interLEGS } from '../assets/assets';

const LegsIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Back Squats",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core", "Calves"],
      video: begLEGS.barbellsqt,
      instructions: [
        "Position barbell on upper back (not neck) with hands slightly wider than shoulder-width",
        "Stand with feet shoulder-width apart, toes slightly out",
        "Lower hips back and down like sitting in a chair",
        "Descend until thighs are parallel to floor (or lower)",
        "Drive through heels to return to standing position",
        "Keep chest up and back straight throughout"
      ],
      benefits: [
        "Builds overall leg strength and size",
        "Enhances core stability and balance",
        "Boosts testosterone and growth hormone production",
        "Improves functional movement patterns",
        "Increases bone density"
      ],
      tips: [
        "Use squat rack with safety bars for heavy sets",
        "Start with just the bar to perfect form",
        "Brace core before descending",
        "Keep knees tracking over toes",
        "Control the descent (2-3 seconds)"
      ]
    },
    {
      id: 2,
      name: "Leg Press Machine",
      muscles: ["Quadriceps", "Hamstrings", "Glutes"],
      video: interLEGS.leg_press,
      instructions: [
        "Sit on machine with back flat against pad",
        "Place feet shoulder-width apart on platform",
        "Release safety handles and lower weight slowly",
        "Bend knees to 90° (or comfortable range)",
        "Press through heels to extend legs",
        "Don't lock knees at top"
      ],
      benefits: [
        "Allows heavy loading with less spinal compression",
        "Good alternative for those with back issues",
        "Easier to focus on leg muscles without balance requirement",
        "Adjustable foot positions target different muscles",
        "Can safely train to failure"
      ],
      tips: [
        "Never lock knees at full extension",
        "Keep feet flat throughout movement",
        "Don't let knees collapse inward",
        "Control the negative (3 second descent)",
        "Try single-leg variations for imbalances"
      ]
    },
    {
      id: 3,
      name: "Romanian Deadlifts (RDL)",
      muscles: ["Hamstrings", "Glutes", "Erector Spinae"],
      video: interLEGS.RDL,
      instructions: [
        "Stand with feet hip-width apart holding barbell or dumbbells",
        "Keep slight bend in knees, push hips back",
        "Lower weight along front of legs",
        "Descend until stretch in hamstrings (usually mid-shin)",
        "Drive hips forward to return to standing",
        "Squeeze glutes at top"
      ],
      benefits: [
        "Develops posterior chain strength",
        "Improves hip hinge mechanics",
        "Enhances deadlift and squat performance",
        "Increases hamstring flexibility",
        "Reduces risk of hamstring injuries"
      ],
      tips: [
        "Maintain neutral spine - never round back",
        "Keep bar/dumbbells close to body",
        "Lead with hips, not shoulders",
        "Use straps if grip fails first",
        "Focus on hamstring stretch at bottom"
      ]
    },
    {
      id: 4,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: interLEGS.leg_extension,
      instructions: [
        "Adjust machine so knees align with rotation point",
        "Place ankles behind pad, legs at 90°",
        "Extend legs fully without locking knees",
        "Squeeze quads at top for 1 second",
        "Lower slowly back to starting position"
      ],
      benefits: [
        "Isolates quadriceps muscles",
        "Improves knee joint stability",
        "Helps develop teardrop quad shape",
        "Good for rehab after knee injuries",
        "Can train to complete muscle failure"
      ],
      tips: [
        "Avoid swinging or using momentum",
        "Use full range of motion",
        "Try single-leg variations for imbalances",
        "Don't use excessive weight that compromises form",
        "Keep back flat against pad"
      ]
    },
    {
      id: 5,
      name: "Standing & Seated Calf Raises",
      muscles: ["Gastrocnemius (standing)", "Soleus (seated)"],
      video: interLEGS.seatedcalf,
      instructions: [
        "Standing: Use machine or step with weights",
        "Stand on balls of feet, lower heels below step",
        "Raise up onto toes as high as possible",
        "Pause at top for 1-2 seconds",
        "Seated: Place knees under pad with toes on platform",
        "Lift weight by extending ankles"
      ],
      benefits: [
        "Develops calf size and definition",
        "Improves ankle stability and mobility",
        "Enhances jumping ability",
        "Helps prevent shin splints",
        "Balances lower leg development"
      ],
      tips: [
        "Use full range of motion",
        "Control the lowering phase (3 seconds)",
        "Try single-leg variations for imbalances",
        "Perform higher reps (15-20) for calves",
        "Stretch calves between sets"
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
            alt="Legs Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Intermediate • Legs Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                LEG TRAINING
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
                  to='/WorkoutGuide/Intermediate' 
                  className="text-white hover:text-[#FCDE3B] transition-colors duration-300"
                >
                  INTERMEDIATE
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#FCDE3B]">LEGS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Advanced leg development with compound movements and progressive overload
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50  overflow-hidden hover:border-[#FCDE3B]/30 transition-all duration-300">
                  
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

export default LegsIntermediate;

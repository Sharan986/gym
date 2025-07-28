import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begSHOULDERS } from '../assets/assets';
import { interSHOULDERS } from '../assets/assets';

const ShouldersIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Reverse Fly Machine",
      muscles: ["Rear Deltoids", "Trapezius", "Rhomboids"],
      video: begSHOULDERS.reardelt,
      instructions: [
        "Adjust seat height so handles are at shoulder level",
        "Sit with chest against pad and grip handles",
        "Keep slight bend in elbows throughout movement",
        "Squeeze shoulder blades together as you pull arms back",
        "Pause when arms are parallel to floor",
        "Control return to starting position"
      ],
      benefits: [
        "Isolates often-neglected rear delts",
        "Improves posture and shoulder health",
        "Counters effects of rounded shoulders",
        "Enhances upper back thickness"
      ],
      tips: [
        "Imagine squeezing a pencil between shoulder blades",
        "Use lighter weight with perfect form",
        "Keep movement slow and controlled",
        "Exhale during contraction phase",
        "Maintain neutral neck position"
      ]
    },
    {
      id: 2,
      name: "Dumbbell Lateral Raises",
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      video: interSHOULDERS.lateral,
      instructions: [
        "Stand with dumbbells at sides, palms facing inward",
        "Keep slight bend in elbows (10-15°)",
        "Raise arms to shoulder height forming 'T' shape",
        "Pause briefly at top (elbows slightly higher than hands)",
        "Lower slowly with control (3-4 second descent)"
      ],
      benefits: [
        "Builds shoulder width and definition",
        "Improves shoulder mobility",
        "Enhances mind-muscle connection",
        "Creates balanced shoulder development"
      ],
      tips: [
        "Imagine pouring water from cups",
        "Use lighter weights (12-15 rep range)",
        "Avoid shrugging shoulders upward",
        "Lean slightly forward to increase lateral delt activation",
        "Try alternating arms for better focus"
      ]
    },
    {
      id: 3,
      name: "Military Press (Barbell)",
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps", "Upper Chest"],
      video: interSHOULDERS.Military,
      instructions: [
        "Stand with feet shoulder-width apart",
        "Grip barbell slightly wider than shoulders",
        "Clean bar to front rack position",
        "Press bar overhead until arms are straight",
        "Lower bar to chin level with control",
        "Keep core braced throughout"
      ],
      benefits: [
        "Builds overall shoulder strength and size",
        "Improves overhead mobility",
        "Enhances core stability",
        "Develops functional pressing strength"
      ],
      tips: [
        "Use power rack with safety bars",
        "Don't arch back excessively",
        "Press bar slightly back (not straight up)",
        "Keep elbows slightly in front of bar",
        "Use wrist wraps for heavy sets"
      ]
    },
    {
      id: 4,
      name: "Upright Rows (Barbell or Cable)",
      muscles: ["Lateral Deltoids", "Trapezius", "Biceps"],
      video: interSHOULDERS.CABLE,
      instructions: [
        "Stand holding barbell with narrow grip (6-8 inches)",
        "Keep bar close to body as you pull upward",
        "Raise elbows to shoulder height",
        "Pause briefly at top position",
        "Lower slowly with control"
      ],
      benefits: [
        "Targets side delts and traps simultaneously",
        "Improves shoulder girdle strength",
        "Enhances upper body posture",
        "Can be done with various equipment"
      ],
      tips: [
        "Don't raise above collarbone (prevents impingement)",
        "Keep shoulders relaxed (don't shrug)",
        "Use moderate weight with strict form",
        "Try cable version for constant tension",
        "Warm up rotator cuffs first"
      ]
    },
    {
      id: 5,
      name: "Face Pulls (Rope)",
      muscles: ["Rear Deltoids", "Rotator Cuff", "Trapezius"],
      video: interSHOULDERS.ROPE,
      instructions: [
        "Attach rope to high pulley cable",
        "Grab ends with thumbs pointing back",
        "Pull rope towards forehead while flaring elbows",
        "Squeeze rear delts at peak contraction",
        "Control return to starting position"
      ],
      benefits: [
        "Improves shoulder health and posture",
        "Strengthens rotator cuff muscles",
        "Counters effects of pressing movements",
        "Enhances rear delt development"
      ],
      tips: [
        "Use light-to-moderate weight",
        "Imagine showing your biceps at peak",
        "Keep upper arms parallel to floor",
        "Perform as warm-up and finisher",
        "Focus on quality reps over weight"
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
              <div className="inline-block px-4 py-2 bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Intermediate • Shoulders Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                SHOULDER TRAINING
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
                <span className="text-[#FCDE3B]">SHOULDERS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Advanced shoulder development with compound movements and isolation techniques
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

export default ShouldersIntermediate;

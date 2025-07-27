import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { interBACK } from '../assets/assets';

const BackIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Pull-Ups (Assisted if needed)",
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids", "Trapezius"],
      video: interBACK.pullup,
      instructions: [
        "Grab pull-up bar with overhand grip (palms facing away)",
        "Hands slightly wider than shoulder-width",
        "Hang with arms fully extended, engage core",
        "Pull yourself up until chin clears the bar",
        "Lower slowly with control (3-4 second descent)",
        "Keep shoulders down (avoid shrugging)"
      ],
      benefits: [
        "Builds functional upper body strength",
        "Develops impressive back width",
        "Improves grip strength",
        "Enhances shoulder stability"
      ],
      tips: [
        "Start with assisted version if needed",
        "Focus on pulling with elbows (not just arms)",
        "Full range of motion is key",
        "Add weight with dip belt for progression",
        "Try different grips (wide/narrow/neutral)"
      ]
    },
    {
      id: 2,
      name: "Bent-Over Barbell Row",
      muscles: ["Middle Back", "Lats", "Rear Delts", "Biceps"],
      video: interBACK.bentover,
      instructions: [
        "Stand with feet shoulder-width, knees slightly bent",
        "Bend at hips until torso is 45° to floor",
        "Grip bar slightly wider than shoulder-width",
        "Pull bar to lower ribcage, elbows at 45°",
        "Squeeze shoulder blades together at top",
        "Lower with control to full stretch"
      ],
      benefits: [
        "Builds overall back thickness",
        "Improves posture and spinal stability",
        "Enhances deadlift strength",
        "Develops strong core muscles"
      ],
      tips: [
        "Maintain neutral spine - never round back",
        "Lead with elbows, not hands",
        "Use straps if grip fails before back",
        "Start with lighter weight to perfect form",
        "Keep head in line with spine"
      ]
    },
    {
      id: 3,
      name: "Close-Grip Lat Pulldown",
      muscles: ["Lower Lats", "Biceps", "Brachialis"],
      video: interBACK.closegrid,
      instructions: [
        "Use V-bar or close-grip attachment",
        "Sit with thighs secured under pads",
        "Pull bar to upper chest, lean back slightly",
        "Squeeze lats at bottom position",
        "Control return to full stretch"
      ],
      benefits: [
        "Targets lower lat fibers specifically",
        "Reduces strain on shoulders",
        "Improves mind-muscle connection",
        "Great for V-taper development"
      ],
      tips: [
        "Imagine pulling elbows to pockets",
        "Don't use momentum - controlled movement",
        "Pause for 1 second at contraction",
        "Keep chest up throughout",
        "Adjust weight to maintain strict form"
      ]
    },
    {
      id: 4,
      name: "Wide-Grip Seated Cable Row",
      muscles: ["Upper Back", "Rear Delts", "Trapezius"],
      video: interBACK.widegrid,
      instructions: [
        "Use wide bar attachment on cable machine",
        "Sit with knees slightly bent, chest up",
        "Pull handle to upper abdomen",
        "Squeeze shoulder blades together",
        "Return slowly to full stretch"
      ],
      benefits: [
        "Develops thickness in upper back",
        "Improves scapular retraction",
        "Counters effects of rounded shoulders",
        "Enhances posture"
      ],
      tips: [
        "Imagine squeezing pencil between shoulder blades",
        "Maintain slight forward lean on extension",
        "Don't let weight stack touch between reps",
        "Keep elbows at 90° angle to torso",
        "Exhale on pull, inhale on release"
      ]
    },
    {
      id: 5,
      name: "Chest-Supported Dumbbell Row",
      muscles: ["Middle Back", "Rear Delts", "Rhomboids"],
      video: interBACK.chestsupported,
      instructions: [
        "Set incline bench to 45° and lie chest-down",
        "Let arms hang straight down with dumbbells",
        "Row weights up to hips, elbows high",
        "Squeeze shoulder blades at top",
        "Lower with control to full stretch"
      ],
      benefits: [
        "Eliminates cheating and momentum",
        "Reduces lower back strain",
        "Improves scapular movement",
        "Allows strict focus on back muscles"
      ],
      tips: [
        "Imagine pulling with elbows, not hands",
        "Pause at top for 2-second contraction",
        "Use moderate weight with perfect form",
        "Keep neck neutral (don't look up)",
        "Try single-arm variations for imbalances"
      ]
    },
    {
      id: 6,
      name: "Hyperextensions (Weighted)",
      muscles: ["Erector Spinae", "Glutes", "Hamstrings"],
      video: interBACK.HYPER,
      instructions: [
        "Position hips on pad of hyperextension bench",
        "Cross arms or hold weight plate to chest",
        "Lower torso until parallel to floor",
        "Raise back up to neutral spine position",
        "Squeeze glutes at top"
      ],
      benefits: [
        "Strengthens entire posterior chain",
        "Improves spinal stability",
        "Reduces risk of back injuries",
        "Enhances deadlift and squat performance"
      ],
      tips: [
        "Avoid hyperextension at top",
        "Keep movement slow and controlled",
        "Progress gradually with added weight",
        "Engage core throughout movement",
        "Don't round back when lowering"
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
            alt="Back Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Intermediate • Back Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                BACK TRAINING
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
                <span className="text-[#FCDE3B]">BACK</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Advanced back development with compound movements and progressive techniques
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

export default BackIntermediate;

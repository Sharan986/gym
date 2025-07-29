import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advARMS } from '../assets/assets';
import { advSHOULDERS } from '../assets/assets';

const ArmsAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Skull Crushers",
      muscles: ["Triceps (Long Head)", "Anconeus"],
      video: advARMS.tricepskull,
      instructions: [
        "Lie on a flat bench with a barbell (EZ bar preferred) using a narrow overhand grip.",
        "Extend arms straight up over shoulders.",
        "Lower the bar slowly toward your forehead by bending your elbows.",
        "Stop when your forearms reach parallel to the floor.",
        "Extend arms back to the starting position without locking elbows."
      ],
      benefits: [
        "Maximizes long head triceps development.",
        "Increases elbow extension strength.",
        "Builds overall arm mass.",
        "Improves lockout strength for pressing movements."
      ],
      tips: [
        "Keep elbows tucked in at a 45° angle.",
        "Use a spotter for heavy sets.",
        "Control the negative (3-second descent).",
        "Try the incline bench variation for a different angle.",
        "Use wrist wraps if needed for support."
      ]
    },
    {
      id: 2,
      name: "Incline Dumbbell Curls",
      muscles: ["Biceps (Long Head)", "Brachialis"],
      video: advARMS.inclinedb,
      instructions: [
        "Set an incline bench to a 45-60 degree angle.",
        "Let your arms hang straight down with dumbbells.",
        "Curl the weights while keeping your elbows back.",
        "Rotate your palms up (supinate) during the ascent.",
        "Squeeze at the top when your palms face your shoulders.",
        "Lower slowly with control (3-second count)."
      ],
      benefits: [
        "Targets the long head of the biceps for peak development.",
        "Provides a greater stretch at the bottom position.",
        "Reduces cheating and body momentum.",
        "Improves mind-muscle connection."
      ],
      tips: [
        "Keep your shoulders back against the bench.",
        "Don't swing the weights; use controlled movements only.",
        "Pause for 1 second at peak contraction.",
        "Alternate arms or lift simultaneously.",
        "Increase weight gradually."
      ]
    },
    {
      id: 3,
      name: "Tricep Rope Pushdown",
      muscles: ["Triceps (All Heads)", "Anconeus"],
      video: advSHOULDERS.ropepushdown,
      instructions: [
        "Attach a rope to a high pulley cable machine.",
        "Stand with a slight forward lean, elbows pinned to your sides.",
        "Push the rope downward until your arms are fully extended.",
        "At the bottom, pull the rope ends apart for an extra contraction.",
        "Control the return to the starting position."
      ],
      benefits: [
        "Isolates the triceps with constant tension.",
        "Improves arm definition and separation.",
        "Allows varied hand positions for different emphasis.",
        "Reduces joint stress compared to heavy presses."
      ],
      tips: [
        "Keep your elbows stationary; only your forearms should move.",
        "Lean forward slightly for better muscle engagement.",
        "Use moderate weight with perfect form.",
        "Focus on squeezing at full extension.",
        "Try single-arm variations for imbalances."
      ]
    },
    {
      id: 4,
      name: "Concentration Curls",
      muscles: ["Biceps Brachii", "Brachialis"],
      video: advARMS.concentration,
      instructions: [
        "Sit on a bench with your legs spread, elbow resting inside your thigh.",
        "Start with your arm fully extended, dumbbell hanging down.",
        "Curl the weight up while keeping your elbow stationary.",
        "Squeeze your bicep hard at the top position.",
        "Lower slowly with control (3-4 second count)."
      ],
      benefits: [
        "Maximizes bicep isolation.",
        "Eliminates cheating and momentum.",
        "Enhances peak contraction.",
        "Improves mind-muscle connection."
      ],
      tips: [
        "Use the bench support to prevent body movement.",
        "Focus on squeezing at the top for 2 seconds.",
        "Keep your wrist neutral throughout the movement.",
        "Use lighter weight than standing curls.",
        "Try alternating arms or both together."
      ]
    },
    {
      id: 5,
      name: "Tricep Kickbacks",
      muscles: ["Triceps (Lateral Head)", "Anconeus"],
      video: advARMS.tricepkick,
      instructions: [
        "Bend forward at the waist with a dumbbell in your hand.",
        "Keep your upper arm parallel to the floor, elbow bent at 90°.",
        "Extend your arm backward until it's straight.",
        "Squeeze your triceps at full extension.",
        "Return slowly to the starting position."
      ],
      benefits: [
        "Isolates the triceps with strict form.",
        "Improves muscle definition.",
        "Enhances mind-muscle connection.",
        "Good finishing exercise for triceps."
      ],
      tips: [
        "Keep your shoulder stationary; only your forearm should move.",
        "Use lighter weight with perfect form.",
        "Hold the contraction at the top for 1-2 seconds.",
        "Maintain a neutral spine position.",
        "Try the cable version for constant tension."
      ]
    },
    {
      id: 6,
      name: "Reverse Curls",
      muscles: ["Brachioradialis", "Brachialis", "Forearms"],
      video: advARMS.reversecurls,
      instructions: [
        "Stand upright holding a dumbbell in each hand with arms fully extended.",
        "Grip dumbbells with an overhand (palms down) grip.",
        "Keep elbows pinned to your sides and wrists straight.",
        "Curl dumbbells up toward shoulders, focusing on forearms and brachialis.",
        "Squeeze at the top, then lower slowly with control to starting position."
      ],
      benefits: [
        "Develops forearm and brachialis muscles.",
        "Improves grip strength.",
        "Balances arm development.",
        "Enhances elbow joint stability."
      ],
      tips: [
        "Use lighter weight than regular curls.",
        "Keep your wrists straight throughout.",
        "Focus on squeezing at the top of the movement.",
        "Control the eccentric (lowering) phase.",
        "Try single-arm variations for imbalances."
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
            alt="Advanced Arms Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-500 text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Advanced • Arms Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                ARM MASTERY
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6">
                <Link 
                  to='/WorkoutGuide' 
                  className="text-white hover:text-orange-500 transition-colors duration-300"
                >
                  GUIDE
                </Link>
                <span className="text-gray-400">/</span>
                <Link 
                  to='/WorkoutGuide/Advance' 
                  className="text-white hover:text-orange-500 transition-colors duration-300"
                >
                  ADVANCED
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-orange-500">ARMS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Elite arm training with advanced techniques and maximum intensity protocols
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50  overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                  
                  {/* Exercise Header */}
                  <div className="p-6 sm:p-8 border-b border-gray-700/50">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-One text-white mb-4">
                      {exercise.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-400 font-M">Targets:</span>
                      {exercise.muscles.map((muscle, i) => (
                        <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-500 text-xs font-medium rounded-full">
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
                        <h3 className="text-xl sm:text-2xl font-One text-orange-500 mb-4">
                          How to Perform
                        </h3>
                        <ol className="space-y-2">
                          {exercise.instructions.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base leading-relaxed">
                              <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
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
                      <h3 className="text-lg sm:text-xl font-One text-red-400 mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-2">
                        {exercise.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-red-400 mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-One text-orange-500 mb-4">
                        Pro Tips
                      </h3>
                      <ul className="space-y-2">
                        {exercise.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-orange-500 mt-1">★</span>
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

export default ArmsAdvanced;

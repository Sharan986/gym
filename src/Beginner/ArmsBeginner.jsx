import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begARMS } from '../assets/assets';

const ArmsBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Standing Bicep Curls",
      muscles: ["Biceps Brachii", "Brachialis", "Forearms"],
      video: begARMS.bicep,
      instructions: [
        "Stand with feet shoulder-width apart, holding a barbell with an underhand grip.",
        "Keep your elbows close to your torso and your shoulders back.",
        "Curl the barbell upward while contracting your biceps.",
        "Pause when the bar reaches shoulder height.",
        "Slowly lower back to the starting position (3-4 second descent)."
      ],
      benefits: [
        "Builds overall bicep mass and strength.",
        "Engages forearm muscles for grip development.",
        "Allows progressive overload with weight increases.",
        "Improves mind-muscle connection with biceps."
      ],
      tips: [
        "Avoid swinging your body; keep your torso stationary.",
        "Squeeze your biceps hard at the top of the movement.",
        "Use the full range of motion without hyperextending your elbows.",
        "Start with lighter weight to perfect your form.",
        "Keep your wrists straight to prevent strain."
      ]
    },
    {
      id: 2,
      name: "Dumbbell Overhead Tricep Extensions",
      muscles: ["Triceps Brachii (All Three Heads)", "Anconeus"],
      video: begARMS.tricep1,
      instructions: [
        "Stand or sit holding one dumbbell with both hands.",
        "Press the weight overhead until your arms are fully extended.",
        "Keeping your elbows close to your ears, lower the dumbbell behind your head.",
        "Pause when your forearms reach parallel to the floor.",
        "Extend your arms back to the starting position."
      ],
      benefits: [
        "Targets all three heads of the triceps.",
        "Improves shoulder stability and mobility.",
        "Enhances arm definition and strength.",
        "Can be done seated or standing."
      ],
      tips: [
        "Keep your elbows pointing forward (don't flare outward).",
        "Move slowly through the full range of motion.",
        "Use lighter weight than you think for proper form.",
        "Engage your core to prevent back arching.",
        "Focus on the stretch at the bottom of the movement."
      ]
    },
    {
      id: 3,
      name: "Hammer Curls",
      muscles: ["Brachialis", "Biceps Brachii", "Brachioradialis"],
      video: begARMS.hammercurl,
      instructions: [
        "Stand holding dumbbells with a neutral grip (palms facing inward).",
        "Keep your elbows close to your sides and your shoulders back.",
        "Curl the weights upward while maintaining a neutral grip.",
        "Pause when the dumbbells reach shoulder height.",
        "Lower slowly with control (3-second count)."
      ],
      benefits: [
        "Develops arm thickness and width.",
        "Targets the often-neglected brachialis muscle.",
        "Reduces wrist strain compared to supinated curls.",
        "Improves functional grip strength."
      ],
      tips: [
        "Imagine hammering nails with each rep.",
        "Keep a slight bend in your elbows at the bottom position.",
        "Alternate arms or lift simultaneously.",
        "Avoid rocking your body for momentum.",
        "Squeeze at the top for peak contraction."
      ]
    },
    {
      id: 4,
      name: "Tricep Pushdown",
      muscles: ["Triceps Brachii (Especially Lateral Head)", "Anconeus"],
      video: begARMS.pushdownBIG,
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
              <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Beginner • Arms Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                ARMS TRAINING
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
                <span className="text-[#48D3A3]">ARMS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Build strong, defined arms with these foundational exercises
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50  overflow-hidden hover:border-[#48D3A3]/30 transition-all duration-300">
                  
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
  );
};

export default ArmsBeginner;

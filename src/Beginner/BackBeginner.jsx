import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begBACK } from '../assets/assets';

const BackBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Assisted Pull-Ups/Chin-Ups",
      video: begBACK.assistedpullup,
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids", "Upper Back"],
      instructions: [
        "Set the assisted machine to your desired weight support.",
        "Grip the handles (palms facing away for pull-ups, toward you for chin-ups).",
        "Step onto the platform and keep your body straight.",
        "Pull yourself up until your chin clears the bar.",
        "Lower yourself slowly with control."
      ],
      benefits: [
        "Builds functional upper body strength.",
        "Progressively develops pull-up ability.",
        "Targets the entire back and arm musculature.",
        "Improves grip strength."
      ],
      tips: [
        "Focus on using your back muscles, not just your arms.",
        "Avoid swinging or using momentum.",
        "Start with more assistance and gradually reduce.",
        "Keep your core engaged throughout the movement.",
        "Full range of motion is key; go all the way down."
      ]
    },
    {
      id: 2,
      name: "Lat Pulldown Machine",
      video: begBACK.latspulldown,
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids"],
      instructions: [
        "Adjust the thigh pad to secure your legs.",
        "Grip the bar slightly wider than your shoulders.",
        "Pull the bar down to your chest while leaning back slightly.",
        "Control the return to the starting position."
      ],
      benefits: [
        "Builds upper back width.",
        "Easier alternative to pull-ups.",
        "Adjustable resistance for progression.",
        "Improves posture."
      ],
      tips: [
        "Initiate the movement by squeezing your shoulder blades.",
        "Keep your elbows tracking slightly forward.",
        "Avoid using momentum from swinging.",
        "Don't pull behind your neck; this can injure your shoulders."
      ]
    },
    {
      id: 3,
      name: "Seated Cable Row",
      video: begBACK.machinerowing,
      muscles: ["Rhomboids", "Middle Trapezius", "Latissimus Dorsi"],
      instructions: [
        "Sit with your knees slightly bent.",
        "Pull the handle to your waist while keeping your chest up.",
        "Squeeze your shoulder blades together at peak contraction.",
        "Extend your arms fully for a complete stretch."
      ],
      benefits: [
        "Improves posture.",
        "Targets mid-back muscles.",
        "Low impact on joints.",
        "Counters the effects of prolonged sitting."
      ],
      tips: [
        "Imagine squeezing a pencil between your shoulder blades.",
        "Maintain a slight forward lean on extension.",
        "Use straps if your grip fatigues first.",
        "Keep the movement controlled; no jerking."
      ]
    },
    {
      id: 4,
      name: "Hyperextension",
      video: begBACK.hyperextension,
      muscles: ["Erector Spinae", "Glutes", "Hamstrings"],
      instructions: [
        "Adjust the pad to align with your hip crease.",
        "Cross your arms over your chest or hold a weight.",
        "Lower your torso until it is parallel to the floor.",
        "Raise your back to a neutral spine position."
      ],
      benefits: [
        "Strengthens the lower back.",
        "Improves spinal stability.",
        "Can help alleviate back pain.",
        "Enhances posterior chain development."
      ],
      tips: [
        "Avoid hyperextension at the top.",
        "Engage your core throughout the movement.",
        "Start with bodyweight only.",
        "Keep the movement slow and controlled.",
        "Don't round your back when lowering."
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
              <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Beginner • Back Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                BACK TRAINING
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
                  to='/WorkoutGuide/Beginner' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  BEGINNER
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#48D3A3]">BACK</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Strengthen your back muscles for better posture and power
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

export default BackBeginner;

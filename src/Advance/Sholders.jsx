import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advSHOULDERS } from '../assets/assets';
import { interSHOULDERS } from '../assets/assets';
import {  DSC06120R } from '../Imgs/Imgs';

const ShouldersAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Face Pulls (Rope)",
      video: advSHOULDERS.ropefacepull,
      muscles: ["Posterior Deltoids", "Trapezius", "Rhomboids"],
      instructions: [
        "Attach a rope to a cable machine at chest height.",
        "Grab the rope with both hands and step back to create tension.",
        "Pull the rope towards your forehead, separating your hands as you pull.",
        "Return to the starting position with control."
      ],
      benefits: [
        "Strengthens the rear deltoids and upper back",
        "Improves posture and shoulder health",
        "Enhances shoulder stability"
      ],
      tips: [
        "Keep your elbows high and squeeze your shoulder blades together.",
        "Avoid using momentum; focus on controlled movements.",
        "Use a light to moderate weight to maintain proper form."
      ]
    },
    {
      id: 2,
      name: "Cable Lateral Raises",
      video: advSHOULDERS.cable,
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      instructions: [
        "Stand next to a cable machine with the pulley at its lowest setting.",
        "Grab the handle with your outside hand, keeping a slight bend in your elbow.",
        "Raise your arm out to the side until it's parallel to the floor.",
        "Slowly lower back to the starting position with control."
      ],
      benefits: [
        "Isolates the lateral deltoids effectively",
        "Provides constant tension throughout the movement",
        "Improves shoulder width and definition"
      ],
      tips: [
        "Keep your torso upright and avoid leaning.",
        "Raise only to shoulder height to avoid impingement.",
        "Control the weight on both the lift and descent."
      ]
    },
    {
      id: 4,
      name: "Arnold Press",
      video: advSHOULDERS.arnoldpress,
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      instructions: [
        "Sit on a bench with dumbbells at shoulder height, palms facing your body.",
        "As you press the dumbbells overhead, rotate your palms to face forward.",
        "Lower the dumbbells back to the starting position with the same rotation.",
        "Keep your core engaged and maintain control throughout."
      ],
      benefits: [
        "Enhances shoulder mobility and strength",
        "Engages multiple parts of the deltoids",
        "Improves rotational strength"
      ],
      tips: [
        "Focus on smooth rotation during the press.",
        "Avoid using momentum to lift the weights.",
        "Keep your elbows slightly in front of your body."
      ]
    },
    {
      id: 5,
      name: "Reverse Fly Machine",
      video: advSHOULDERS.reversefly,
      muscles: ["Posterior Deltoids", "Trapezius", "Rhomboids"],
      instructions: [
        "Sit at a reverse fly machine or bend forward with dumbbells.",
        "Keep a slight bend in your elbows and open your arms outward.",
        "Squeeze your shoulder blades together at the top of the movement.",
        "Return to the starting position with control."
      ],
      benefits: [
        "Targets the often-neglected rear delts",
        "Improves posture and upper back strength",
        "Helps balance shoulder development"
      ],
      tips: [
        "Focus on using your rear delts, not your arms.",
        "Keep your movements controlled and deliberate.",
        "Avoid arching your back during the movement."
      ]
    },
    {
      id: 6,
      name: "Upright Rows",
      video: interSHOULDERS.CABLE,
      muscles: ["Lateral Deltoids", "Trapezius", "Biceps"],
      instructions: [
        "Stand holding a barbell or dumbbells with an overhand grip.",
        "Pull the weight straight up along your torso to chin level.",
        "Keep your elbows higher than your hands throughout.",
        "Lower back down with control."
      ],
      benefits: [
        "Develops the lateral deltoids and traps",
        "Improves shoulder and upper back strength",
        "Can be done with various equipment"
      ],
      tips: [
        "Use a shoulder-width grip to reduce strain.",
        "Don't raise the weight higher than chin level.",
        "Keep the movement smooth and controlled."
      ]
    },
    {
      id: 7,
      name: "Front Raises",
      video: advSHOULDERS.frontraise,
      muscles: ["Anterior Deltoids", "Pectoralis Major (upper)"],
      instructions: [
        "Stand holding dumbbells or a barbell with palms facing your thighs.",
        "Raise the weight straight in front of you to shoulder height.",
        "Pause briefly at the top of the movement.",
        "Lower back down with control."
      ],
      benefits: [
        "Isolates the front deltoids effectively",
        "Improves shoulder definition and strength",
        "Can be done with various equipment"
      ],
      tips: [
        "Keep a slight bend in your elbows.",
        "Avoid using momentum to swing the weights up.",
        "Control the descent to maximize muscle engagement."
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        
        {/* Hero Section */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
          {/* Hero Background */}
          <img
            src={DSC06120R}
            alt="Shoulders Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
            loading="lazy"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-500 text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Advanced • Shoulders Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                SHOULDER MASTERY
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
                <span className="text-orange-500">SHOULDERS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Elite shoulder development with maximum intensity and advanced training protocols
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                  
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

export default ShouldersAdvanced;

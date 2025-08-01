import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begLEGS } from '../assets/assets';
import {  DSC06120R } from '../Imgs/Imgs';

const LegsBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Squats",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      video: begLEGS.squat,
      instructions: [
        "Position the barbell on your upper back, not on your neck.",
        "Place your feet shoulder-width apart with your toes slightly out.",
        "Lower your hips back and down as if sitting in a chair.",
        "Descend until your thighs are parallel to the floor.",
        "Drive through your heels to return to standing."
      ],
      benefits: [
        "Builds overall leg strength and size.",
        "Enhances core stability.",
        "Boosts testosterone and growth hormone.",
        "Improves functional movement patterns."
      ],
      tips: [
        "Keep your chest up and your back straight.",
        "Ensure your knees track over your toes.",
        "Start with just the bar to learn the form.",
        "Use a squat rack with safety bars.",
        "Brace your core before descending."
      ]
    },
    {
      id: 2,
      name: "Sumo Squats",
      muscles: ["Inner Thighs", "Glutes", "Quadriceps"],
      video: begLEGS.sumosqt,
      instructions: [
        "Stand with your feet wider than shoulder-width and your toes at a 45° angle.",
        "Hold a dumbbell or kettlebell at your chest or between your legs.",
        "Lower your body until your thighs are parallel to the floor.",
        "Drive through your heels to return to the starting position.",
        "Squeeze your glutes at the top position."
      ],
      benefits: [
        "Targets inner thighs more than regular squats.",
        "Reduces stress on the knees.",
        "Improves hip mobility.",
        "Great for glute development."
      ],
      tips: [
        "Keep your knees aligned with your toes.",
        "Maintain an upright torso position.",
        "Go deeper than parallel for maximum glute activation.",
        "Use lighter weight to focus on form."
      ]
    },
    {
      id: 3,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: begLEGS.legext,
      instructions: [
        "Adjust the machine so your knees align with the rotation point.",
        "Place your ankles behind the pad with your legs at a 90° angle.",
        "Extend your legs fully without locking your knees.",
        "Slowly lower back to the starting position."
      ],
      benefits: [
        "Isolates the quadriceps muscles.",
        "Improves knee joint stability.",
        "Helps develop teardrop quad shape.",
        "Good for rehab after knee injuries."
      ],
      tips: [
        "Avoid swinging or using momentum.",
        "Pause at the top for peak contraction.",
        "Don't use excessive weight that compromises form.",
        "Keep your back flat against the pad."
      ]
    },
    {
      id: 4,
      name: "Leg Curls",
      muscles: ["Hamstrings"],
      video: begLEGS.legscurl,
      instructions: [
        "Lie face down on the machine with your knees just off the bench.",
        "Position the roller pad just above your ankles.",
        "Curl your legs up until the pad touches your glutes.",
        "Slowly lower back to the starting position."
      ],
      benefits: [
        "Isolates hamstring development.",
        "Improves knee flexion strength.",
        "Balances quad-dominant training.",
        "Reduces the risk of hamstring injuries."
      ],
      tips: [
        "Keep your hips pressed into the bench.",
        "Control the eccentric (lowering) phase.",
        "Squeeze your hamstrings at the top of the movement.",
        "Don't arch your back to complete reps."
      ]
    },
    {
      id: 5,
      name: "Standing Calf Raises",
      muscles: ["Gastrocnemius", "Soleus"],
      video: begLEGS.calf,
      instructions: [
        "Stand on the edge of a step or calf raise machine.",
        "Raise onto your toes as high as possible.",
        "Pause at the top for 1-2 seconds.",
        "Lower your heels below the step level for a full stretch."
      ],
      benefits: [
        "Develops calf size and definition.",
        "Improves ankle stability.",
        "Enhances jumping ability.",
        "Helps prevent shin splints."
      ],
      tips: [
        "Use the full range of motion.",
        "Control the lowering phase.",
        "Try single-leg variations for imbalance correction.",
        "Perform higher reps (15-20) for calves."
      ]
    }
  ];

  return (
    <>
      <div className="bg-[#070915] min-h-screen font-One">
        {/* Modern Hero Section */}
        <div className="relative">
          <img
            src={DSC06120R}
            alt="Legs Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Beginner • Legs Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                LEG TRAINING
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
                <span className="text-[#48D3A3]">LEGS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Develop lower body power and stability with foundational leg exercises
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

export default LegsBeginner;

import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advLEGS } from '../assets/assets';

const LegsAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Hack Squat",
      muscles: ["Quadriceps", "Glutes", "Hamstrings"],
      video: advLEGS.hack_squat,
      instructions: [
        "Position yourself in the hack squat machine with your shoulders against the pads.",
        "Place your feet shoulder-width apart on the platform.",
        "Release the safety handles and lower the weight slowly.",
        "Bend your knees to 90° or a comfortable range.",
        "Press through your heels to extend your legs.",
        "Don't lock your knees at the top."
      ],
      benefits: [
        "Allows heavy loading with less spinal compression.",
        "Good alternative for those with back issues.",
        "Easier to focus on quads without balance requirements.",
        "Adjustable foot positions target different muscles."
      ],
      tips: [
        "Never lock your knees at full extension.",
        "Keep your feet flat throughout the movement.",
        "Don't let your knees collapse inward.",
        "Control the negative (3-second descent).",
        "Try single-leg variations for imbalances."
      ]
    },
    {
      id: 2,
      name: "Bulgarian Split Squats (Weighted)",
      muscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      video: advLEGS.bulgariasplit,
      instructions: [
        "Stand facing away from a bench, place one foot on the bench behind you.",
        "Hold dumbbells at your sides or kettlebells at your chest.",
        "Lower your body until your front thigh is parallel to the floor.",
        "Keep your torso upright throughout the movement.",
        "Drive through your front heel to return to the start.",
        "Maintain a controlled tempo."
      ],
      benefits: [
        "Develops unilateral leg strength.",
        "Improves balance and coordination.",
        "Reduces strength imbalances between legs.",
        "Enhances hip mobility and stability."
      ],
      tips: [
        "Start with bodyweight to master the form.",
        "Keep your front knee aligned with your toes.",
        "Use a bench height that allows a 90° knee bend.",
        "Add weight gradually in 5-10 lb increments.",
        "Focus on a controlled eccentric (3-second descent)."
      ]
    },
    {
      id: 3,
      name: "Hamstring-Focused Leg Press",
      muscles: ["Hamstrings", "Glutes"],
      video: advLEGS.legpress,
      instructions: [
        "Position your feet high and wide on the platform.",
        "Press the weight out and release the safety handles.",
        "Lower the weight slowly with control.",
        "Focus on feeling the stretch in your hamstrings.",
        "Press back up without locking your knees.",
        "Keep your hips stable throughout."
      ],
      benefits: [
        "Targets often-neglected hamstrings.",
        "Reduces quadriceps dominance.",
        "Improves posterior chain strength.",
        "Safer than traditional deadlifts for some."
      ],
      tips: [
        "Use lighter weight than a regular leg press.",
        "Point your toes slightly outward.",
        "Don't lower too deep if your back rounds.",
        "Squeeze your glutes at the top of the movement.",
        "Try single-leg variations."
      ]
    },
    {
      id: 4,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: advLEGS.leg_ext,
      instructions: [
        "Adjust the seat so your knees align with the machine's axis.",
        "Place your ankles behind the pad with your legs at 90°.",
        "Extend your legs fully without locking your knees.",
        "Squeeze your quads at the top for 1-2 seconds.",
        "Lower slowly back to the starting position."
      ],
      benefits: [
        "Isolates quadriceps muscles.",
        "Improves knee joint stability.",
        "Helps develop teardrop quad shape.",
        "Good for rehab after knee injuries."
      ],
      tips: [
        "Avoid swinging or using momentum.",
        "Use the full range of motion.",
        "Try single-leg variations for imbalances.",
        "Don't use excessive weight.",
        "Keep your back flat against the pad."
      ]
    },
    {
      id: 5,
      name: "Hip Adduction/Abduction Machine",
      muscles: ["Adductors", "Abductors", "Glutes"],
      video: advLEGS.hip_adduction,
      instructions: [
        "For adduction: Sit with pads between your thighs, squeeze inward.",
        "For abduction: Sit with pads outside your thighs, push outward.",
        "Maintain an upright posture throughout.",
        "Control the movement in both directions.",
        "Squeeze the target muscles at peak contraction."
      ],
      benefits: [
        "Improves hip stability and mobility.",
        "Enhances athletic performance.",
        "Prevents groin injuries.",
        "Balances lower body development."
      ],
      tips: [
        "Use moderate weight with perfect form.",
        "Don't rock your body to move the weight.",
        "Pause at peak contraction.",
        "Perform both movements equally.",
        "Great warm-up or finisher exercise."
      ]
    },
    {
      id: 6,
      name: "Barbell Hip Thrust",
      muscles: ["Glutes", "Hamstrings", "Core"],
      video: advLEGS.hip_thrust,
      instructions: [
        "Sit on the ground with your upper back against a bench.",
        "Roll the barbell over your hips (use a pad for comfort).",
        "Drive through your heels to lift your hips until your body forms a straight line.",
        "Squeeze your glutes hard at the top position.",
        "Lower with control to the starting position."
      ],
      benefits: [
        "Maximizes glute activation.",
        "Improves hip extension power.",
        "Enhances athletic performance.",
        "Reduces the risk of hamstring injuries."
      ],
      tips: [
        "Use a spotter for heavy sets.",
        "Keep your chin tucked to maintain a neutral spine.",
        "Pause for 2 seconds at the top.",
        "Increase weight gradually.",
        "Try single-leg variations."
      ]
    },
    {
      id: 7,
      name: "Standing Calf Raises (Weighted)",
      muscles: ["Gastrocnemius"],
      video: advLEGS.weiged_calf,
      instructions: [
        "Stand on the edge of a step or calf raise machine.",
        "Hold dumbbells or use machine shoulder pads.",
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
        "Control the lowering phase (3 seconds).",
        "Try single-leg variations for imbalances.",
        "Perform higher reps (15-20).",
        "Stretch your calves between sets."
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
            loading="lazy"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-500 text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Advanced • Legs Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                LEG MASTERY
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
                <span className="text-orange-500">LEGS</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Elite leg development with maximum intensity and advanced training protocols
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

export default LegsAdvanced;
 

import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import { advCHEST } from '../assets/assets';

const Footer = React.lazy(() => import("../components/Footer"));

const ChestAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Weighted Push-Ups",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids", "Core"],
      video: advCHEST.pushup,
      instructions: [
        "Assume a standard push-up position with hands slightly wider than shoulders.",
        "Have a partner place a weight plate on your upper back.",
        "Keep your body straight from head to heels.",
        "Lower your chest until it nearly touches the ground.",
        "Explode back up to the starting position.",
        "Maintain a tight core throughout the movement."
      ],
      benefits: [
        "Builds functional chest strength.",
        "Improves core stability.",
        "Enhances shoulder stability.",
        "No equipment needed for the basic version.",
        "Scalable difficulty with added weight."
      ],
      tips: [
        "Start with bodyweight to master form before adding weight.",
        "Keep elbows at a 45° angle to the body.",
        "Maintain a neutral spine; don't sag your hips.",
        "Increase weight gradually in 5-10 lb increments.",
        "Try diamond or wide grip variations."
      ]
    },
    {
      id: 2,
      name: "Flat Bench Press",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      video: advCHEST.bench_press,
      instructions: [
        "Lie on a flat bench with your eyes under the barbell.",
        "Grip the bar slightly wider than shoulder width.",
        "Unrack the bar and hold it straight over your chest.",
        "Lower the bar to mid-chest with control (3 seconds).",
        "Press the bar up explosively without locking your elbows.",
        "Keep your feet planted and your back slightly arched."
      ],
      benefits: [
        "Builds maximum chest mass and strength.",
        "Improves upper body pressing power.",
        "Allows progressive overload with weight.",
        "Enhances triceps and shoulder development."
      ],
      tips: [
        "Use a spotter for heavy sets.",
        "Retract your shoulder blades before unracking.",
        "Drive through your heels during the press.",
        "Don't bounce the bar off your chest.",
        "Vary grip width for different emphasis."
      ]
    },
    {
      id: 3,
      name: "Incline Dumbbell Press",
      muscles: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
      video: advCHEST.inclinedpress,
      instructions: [
        "Set the bench to a 30-45° incline.",
        "Press dumbbells up until your arms are extended.",
        "Lower slowly until the dumbbells reach chest level.",
        "Keep your wrists straight and your forearms vertical.",
        "Press back up along the same arc.",
        "Squeeze your chest at the top position."
      ],
      benefits: [
        "Targets often underdeveloped upper chest.",
        "Allows greater range of motion than barbell.",
        "Improves shoulder stability.",
        "Reduces strain on rotator cuffs."
      ],
      tips: [
        "Start with lighter weight to perfect form.",
        "Keep your feet planted firmly on the ground.",
        "Don't let your elbows flare beyond 90°.",
        "Use a spotter for heavy sets.",
        "Try alternating arm presses for variation."
      ]
    },
    {
      id: 4,
      name: "Decline Cable Press",
      muscles: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
      video: advCHEST.cablepress,
      instructions: [
        "Set cable pulleys to the highest position.",
        "Stand between cables with a slight forward lean.",
        "Press handles downward and together.",
        "Squeeze your chest at full extension.",
        "Control the return to the starting position.",
        "Maintain a slight bend in your elbows."
      ],
      benefits: [
        "Isolates lower chest fibers.",
        "Provides constant tension throughout the movement.",
        "Improves mind-muscle connection.",
        "Reduces joint stress compared to barbell."
      ],
      tips: [
        "Use moderate weight with perfect form.",
        "Focus on squeezing your chest at the bottom.",
        "Keep your shoulders down and back.",
        "Try single-arm variations for imbalances.",
        "Adjust pulley height for different angles."
      ]
    },
    {
      id: 5,
      name: "Parallel Bar Dips (Weighted)",
      muscles: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
      video: advCHEST.parallel,
      instructions: [
        "Use a dip belt to add weight.",
        "Grip the bars and lift your body to the starting position.",
        "Lean forward slightly to emphasize the chest.",
        "Lower until your shoulders are below your elbows.",
        "Press back up to full arm extension.",
        "Keep your core engaged throughout."
      ],
      benefits: [
        "Builds functional pressing strength.",
        "Develops chest thickness.",
        "Improves shoulder stability.",
        "Enhances triceps development."
      ],
      tips: [
        "Start with bodyweight before adding weight.",
        "Don't go too deep if your shoulders feel uncomfortable.",
        "Keep your shoulders down, away from your ears.",
        "Increase weight gradually in 5 lb increments.",
        "Focus on a controlled negative (3-second descent)."
      ]
    },
    {
      id: 6,
      name: "Pec Dec Fly Machine",
      muscles: ["Pectoralis Major", "Anterior Deltoids"],
      video: advCHEST.pecdec,
      instructions: [
        "Adjust the seat height so handles are at chest level.",
        "Grip the handles with your elbows slightly bent.",
        "Bring your arms together in front of your chest.",
        "Squeeze your pecs hard at peak contraction.",
        "Control the return to the stretched position.",
        "Keep your back flat against the pad."
      ],
      benefits: [
        "Isolates the chest without triceps involvement.",
        "Great for finishing a chest workout.",
        "Improves chest definition.",
        "Easy to control weight progression."
      ],
      tips: [
        "Use moderate weight with perfect form.",
        "Lean slightly forward to increase chest activation.",
        "Hold the contraction for 1-2 seconds.",
        "Don't let the weights touch between reps.",
        "Exhale while bringing your arms together."
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
            alt="Chest Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
            loading="lazy"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-500 text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Advanced • Chest Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                CHEST MASTERY
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
                <span className="text-orange-500">CHEST</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Elite chest development with maximum intensity and advanced training protocols
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

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default ChestAdvanced;

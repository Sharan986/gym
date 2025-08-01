import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begCHEST } from '../assets/assets';
import {interCHEST} from '../assets/assets';
import { interARMS } from '../assets/assets';
import {  DSC06120R } from '../Imgs/Imgs';

const ChestIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Push-Ups ",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids", "Core"],
      video: begCHEST.pushups,
      instructions: [
        "Start in a high plank position (hands slightly wider than shoulders)",
        "For decline: Place feet on elevated surface (bench/step)",
        "For weighted: Have partner place plate on your back",
        "Lower body until chest nearly touches the ground",
        "Push through palms to return to starting position",
        "Keep body in straight line throughout"
      ],
      benefits: [
        "Builds functional chest and core strength",
        "No equipment needed (for basic version)",
        "Improves shoulder stability",
        "Can be scaled for all fitness levels"
      ],
      tips: [
        "Engage glutes and core to prevent sagging hips",
        "Go slow (2 seconds down, 1 second up)",
        "Increase difficulty by elevating feet or adding weight",
        "Wider hand placement emphasizes chest",
        "Keep elbows at 45° angle to body"
      ]
    },
    {
      id: 2,
      name: "Incline Dumbbell Press",
      muscles: ["Upper Pectoralis Major", "Anterior Deltoids", "Triceps"],
      video: interARMS.inclinedumbellbicep ,
      instructions: [
        "Set bench to 30-45 degree incline",
        "Press dumbbells up until arms are extended (not locked)",
        "Lower slowly until dumbbells reach chest level",
        "Keep wrists straight and forearms vertical",
        "Press back up along same arc"
      ],
      benefits: [
        "Targets often-underdeveloped upper chest",
        "Allows greater range of motion than barbell",
        "Improves shoulder stability",
        "Reduces strain on rotator cuffs"
      ],
      tips: [
        "Start with lighter weight to perfect form",
        "Keep feet planted firmly on ground",
        "Don't let elbows flare beyond 90°",
        "Squeeze chest at top of movement",
        "Use spotter for heavy weights"
      ]
    },
    {
      id: 3,
      name: "Flat Chest Press",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      video: begCHEST.inclinechest,
      instructions: [
        "Lie flat on bench with dumbbells at chest level",
        "Press weights up until arms are extended (don't lock)",
        "Lower slowly until elbows reach bench level",
        "Keep dumbbells in line with shoulders",
        "Maintain neutral wrist position"
      ],
      benefits: [
        "Builds overall chest mass and strength",
        "Allows deeper stretch than barbell press",
        "Improves muscle balance (each side works independently)",
        "Reduces shoulder strain"
      ],
      tips: [
        "Imagine 'hugging a barrel' on the way down",
        "Control the negative (3 second descent)",
        "Squeeze chest at top for 1 second",
        "Don't let dumbbells touch at top",
        "Keep slight arch in lower back"
      ]
    },
    {
      id: 4,
      name: "Incline Dumbbell Flys",
      muscles: ["Upper Pectoralis Major", "Anterior Deltoids"],
      video: interCHEST.inclinedumbell,
      instructions: [
        "Set bench to 30 degree incline",
        "Start with dumbbells extended above chest (palms facing)",
        "Lower arms in wide arc until parallel with shoulders",
        "Keep slight bend in elbows (like hugging a tree)",
        "Return along same arc to starting position"
      ],
      benefits: [
        "Stretches and isolates upper chest fibers",
        "Improves chest muscle definition",
        "Enhances shoulder mobility",
        "Develops mind-muscle connection"
      ],
      tips: [
        "Use lighter weight than pressing movements",
        "Control the stretch at bottom position",
        "Imagine string between dumbbells keeping them aligned",
        "Don't lower below shoulder level",
        "Squeeze chest at top of movement"
      ]
    },
    {
      id: 5,
      name: "Pec Dec Fly Machine",
      muscles: ["Pectoralis Major", "Anterior Deltoids"],
      video: interCHEST.pecfly,
      instructions: [
        "Adjust seat height so handles are at chest level",
        "Grip handles with elbows slightly bent",
        "Bring arms together in front of chest",
        "Squeeze chest muscles at peak contraction",
        "Return slowly to stretched position"
      ],
      benefits: [
        "Isolates chest without triceps involvement",
        "Provides constant tension throughout movement",
        "Great for finishing chest workout",
        "Easy to control weight progression"
      ],
      tips: [
        "Don't use momentum - control the weight",
        "Lean slightly forward to increase chest activation",
        "Hold contraction for 1-2 seconds",
        "Adjust grip width to target different chest areas",
        "Exhale while bringing arms together"
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
            alt="Chest Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#FCDE3B]/20 backdrop-blur-sm border border-[#FCDE3B]/30 text-[#FCDE3B] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Intermediate • Chest Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                CHEST TRAINING
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
                <span className="text-[#FCDE3B]">CHEST</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Advanced chest development with progressive overload and isolation techniques
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

export default ChestIntermediate;

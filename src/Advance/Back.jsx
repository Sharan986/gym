import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advBACK } from '../assets/assets';
import { interBACK } from '../assets/assets';
import {  DSC06120R } from '../Imgs/Imgs';

const BackAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Deadlifts / Rack Pulls",
      video: advBACK.DEADLIFT,
      muscles: ["Erector Spinae", "Latissimus Dorsi", "Trapezius", "Glutes", "Hamstrings"],
      instructions: [
        "Stand with feet hip-width apart, barbell over mid-foot.",
        "Bend at hips and knees to grip the bar (overhand or mixed grip).",
        "Keep your back flat, chest up, and core braced.",
        "Drive through heels to lift the bar, extending hips and knees.",
        "For rack pulls: Set pins at knee height or slightly below.",
        "Stand tall at the top, then lower with control."
      ],
      benefits: [
        "Builds overall back thickness and strength.",
        "Develops powerful hip extension.",
        "Improves grip strength.",
        "Rack pulls target the upper back specifically."
      ],
      tips: [
        "Keep the bar close to your body throughout the lift.",
        "Engage lats by bending the bar.",
        "Use straps for heavy sets if grip fails.",
        "For rack pulls: Focus on squeezing shoulder blades at the top.",
        "Maintain a neutral spine position."
      ]
    },
    {
      id: 2,
      name: "Underhand Bent-Over Rows",
      video: interBACK.bentover,
      muscles: ["Latissimus Dorsi", "Rhomboids", "Biceps", "Rear Delts"],
      instructions: [
        "Stand with feet shoulder-width apart, knees slightly bent.",
        "Bend at hips to a 45° angle with an underhand grip on the barbell.",
        "Pull the bar to your lower abdomen, elbows tucked at 45°.",
        "Squeeze your shoulder blades together at the top.",
        "Lower with control to full arm extension."
      ],
      benefits: [
        "Targets lower lats more effectively.",
        "Allows greater range of motion.",
        "Engages biceps more than overhand grip.",
        "Improves scapular retraction."
      ],
      tips: [
        "Maintain a flat back; never round your shoulders.",
        "Lead with your elbows, not your hands.",
        "Use straps for heavy sets to focus on the back.",
        "Pause for 1 second at contraction.",
        "Keep your head in line with your spine."
      ]
    },
    {
      id: 3,
      name: "Single-Arm Dumbbell Rows",
      video: advBACK.dbrowing,
      muscles: ["Latissimus Dorsi", "Rear Delts", "Rotator Cuff", "Core"],
      instructions: [
        "Place your knee and hand on a bench, with the other foot on the floor.",
        "Hold a dumbbell with a neutral grip, arm fully extended.",
        "Pull your elbow up and back to hip level.",
        "Squeeze your shoulder blade at the top position.",
        "Lower with control to full stretch."
      ],
      benefits: [
        "Corrects muscle imbalances.",
        "Improves core stability.",
        "Allows greater range of motion.",
        "Enhances mind-muscle connection."
      ],
      tips: [
        "Keep your torso parallel to the floor.",
        "Imagine pulling with your elbow, not your hand.",
        "Pause for 2 seconds at peak contraction.",
        "Use straps to focus purely on back muscles.",
        "Control the eccentric (3-4 second descent)."
      ]
    },
    {
      id: 4,
      name: "Chest-Supported Rows",
      video: advBACK.chestbarbell,
      muscles: ["Middle Back", "Rear Delts", "Rhomboids"],
      instructions: [
        "Set an incline bench to 45° and lie chest-down.",
        "Let your arms hang straight down with dumbbells.",
        "Row the weights up to your hips, elbows high.",
        "Squeeze your shoulder blades together at the top.",
        "Lower with control to full stretch."
      ],
      benefits: [
        "Eliminates cheating and momentum.",
        "Reduces lower back strain.",
        "Improves scapular movement.",
        "Allows strict focus on back muscles."
      ],
      tips: [
        "Imagine pulling with your elbows, not your hands.",
        "Pause at the top for a 2-second contraction.",
        "Use moderate weight with perfect form.",
        "Keep your neck neutral (don't look up).",
        "Try a pronated grip variation."
      ]
    },
    {
      id: 5,
      name: "Wide-Grip Seated Cable Rows",
      video: advBACK.widegrip,
      muscles: ["Upper Back", "Rear Delts", "Trapezius"],
      instructions: [
        "Use a wide bar attachment on a cable machine.",
        "Sit with knees slightly bent, chest up.",
        "Pull the handle to your upper abdomen.",
        "Squeeze your shoulder blades together.",
        "Return slowly to full stretch."
      ],
      benefits: [
        "Develops thickness in the upper back.",
        "Improves scapular retraction.",
        "Counters the effects of rounded shoulders.",
        "Enhances posture."
      ],
      tips: [
        "Imagine squeezing a pencil between your shoulder blades.",
        "Maintain a slight forward lean on extension.",
        "Don't let the weight stack touch between reps.",
        "Keep your elbows at a 90° angle to your torso.",
        "Exhale on the pull, inhale on the release."
      ]
    },
    {
      id: 6,
      name: "Wide-Grip Lat Pulldowns",
      video: advBACK.widegriplat,
      muscles: ["Latissimus Dorsi", "Teres Major", "Biceps"],
      instructions: [
        "Grip the bar wide (1.5x shoulder width).",
        "Sit with your thighs secured under the pads.",
        "Pull the bar to your upper chest while leaning back slightly.",
        "Squeeze your lats at the bottom position.",
        "Control the return to full stretch."
      ],
      benefits: [
        "Builds impressive back width.",
        "Improves scapular depression.",
        "Enhances V-taper development.",
        "Good alternative to pull-ups."
      ],
      tips: [
        "Imagine pulling your elbows to your pockets.",
        "Don't use momentum; use controlled movement.",
        "Pause for 1 second at contraction.",
        "Keep your chest up throughout.",
        "Adjust the weight to maintain strict form."
      ]
    }
  ];

  return (
    <>
      <div className="bg-[#070915] min-h-screen font-One">
        {/* Modern Hero Section */}
        <div className="relative">
          <img
            src= {DSC06120R}
            alt="Back Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] object-cover object-center"
            loading="lazy"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-500 text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Advanced • Back Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                BACK MASTERY
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
                <span className="text-orange-500">BACK</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Elite back development with compound movements and maximum intensity protocols
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

export default BackAdvanced;

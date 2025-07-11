import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { advARMS } from '../assets/assets';

const ArmsAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Skull Crushers",
      muscles: ["Triceps (Long Head)", "Anconeus"],
      video:advARMS.inclinedb ,
      instructions: [
        "Lie on flat bench with barbell (EZ bar preferred) using narrow overhand grip",
        "Extend arms straight up over shoulders",
        "Lower bar slowly toward forehead by bending elbows",
        "Stop when forearms reach parallel to floor",
        "Extend arms back to starting position without locking elbows"
      ],
      benefits: [
        "Maximizes long head triceps development",
        "Increases elbow extension strength",
        "Builds overall arm mass",
        "Improves lockout strength for pressing movements"
      ],
      tips: [
        "Keep elbows tucked in at 45° angle",
        "Use spotter for heavy sets",
        "Control negative (3 second descent)",
        "Try incline bench variation for different angle",
        "Use wrist wraps if needed for support"
      ]
    },
    {
      id: 2,
      name: "Incline Dumbbell Curls",
      muscles: ["Biceps (Long Head)", "Brachialis"],
      video: advARMS.inclinedb,
      instructions: [
        "Set incline bench to 45-60 degree angle",
        "Let arms hang straight down with dumbbells",
        "Curl weights while keeping elbows back",
        "Rotate palms up (supinate) during ascent",
        "Squeeze at top when palms face shoulders",
        "Lower slowly with control (3 second count)"
      ],
      benefits: [
        "Targets long head of biceps for peak development",
        "Provides greater stretch at bottom position",
        "Reduces cheating and body momentum",
        "Improves mind-muscle connection"
      ],
      tips: [
        "Keep shoulders back against bench",
        "Don't swing weights - controlled movement only",
        "Pause for 1 second at peak contraction",
        "Alternate arms or lift simultaneously",
        "Increase weight gradually"
      ]
    },
    {
      id: 3,
      name: "Tricep Rope Pushdown",
      muscles: ["Triceps (All Heads)", "Anconeus"],
      video: advARMS.rope,
      instructions: [
        "Attach rope to high pulley cable machine",
        "Stand with slight forward lean, elbows pinned to sides",
        "Push rope downward until arms fully extended",
        "At bottom, pull rope ends apart for extra contraction",
        "Control return to starting position"
      ],
      benefits: [
        "Isolates triceps with constant tension",
        "Improves arm definition and separation",
        "Allows varied hand positions for different emphasis",
        "Reduces joint stress compared to heavy presses"
      ],
      tips: [
        "Keep elbows stationary - only forearms should move",
        "Lean forward slightly for better muscle engagement",
        "Use moderate weight with perfect form",
        "Focus on squeezing at full extension",
        "Try single-arm variations for imbalances"
      ]
    },
    {
      id: 4,
      name: "Concentration Curls",
      muscles: ["Biceps Brachii", "Brachialis"],
      video: advARMS.concentration,
      instructions: [
        "Sit on bench with legs spread, elbow resting inside thigh",
        "Start with arm fully extended, dumbbell hanging down",
        "Curl weight up while keeping elbow stationary",
        "Squeeze bicep hard at top position",
        "Lower slowly with control (3-4 second count)"
      ],
      benefits: [
        "Maximizes bicep isolation",
        "Eliminates cheating and momentum",
        "Enhances peak contraction",
        "Improves mind-muscle connection"
      ],
      tips: [
        "Use bench support to prevent body movement",
        "Focus on squeezing at top for 2 seconds",
        "Keep wrist neutral throughout movement",
        "Use lighter weight than standing curls",
        "Try alternating arms or both together"
      ]
    },
    {
      id: 5,
      name: "Tricep Dumbbell Kickbacks",
      muscles: ["Triceps (Lateral Head)", "Anconeus"],
      video: advARMS.tricepkick,
      instructions: [
        "Bend forward at waist with dumbbell in hand",
        "Keep upper arm parallel to floor, elbow bent at 90°",
        "Extend arm backward until it's straight",
        "Squeeze triceps at full extension",
        "Return slowly to starting position"
      ],
      benefits: [
        "Isolates triceps with strict form",
        "Improves muscle definition",
        "Enhances mind-muscle connection",
        "Good finishing exercise for triceps"
      ],
      tips: [
        "Keep shoulder stationary - only forearm moves",
        "Use lighter weight with perfect form",
        "Hold contraction at top for 1-2 seconds",
        "Maintain neutral spine position",
        "Try cable version for constant tension"
      ]
    },
    {
      id: 6,
      name: "EZ Bar Reverse Curls",
      muscles: ["Brachioradialis", "Brachialis", "Forearms"],
      video: advARMS.reversecurls,
      instructions: [
        "Stand holding EZ bar with overhand grip (palms down)",
        "Keep elbows pinned to sides",
        "Curl bar up while maintaining grip position",
        "Squeeze forearms at top position",
        "Lower slowly with control"
      ],
      benefits: [
        "Develops forearm and brachialis muscles",
        "Improves grip strength",
        "Balances arm development",
        "Enhances elbow joint stability"
      ],
      tips: [
        "Use lighter weight than regular curls",
        "Keep wrists straight throughout",
        "Focus on squeezing at top of movement",
        "Control the eccentric (lowering) phase",
        "Try single-arm variations for imbalances"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6ODA0/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Advanced Arms Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">ADVANCED ARMS</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/">HOME</Link>
            <span className="text-yellow-300">/ADVANCED ARMS</span>
          </h1>
        </div>
      </div>

      {exercises.map((exercise) => (
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4'>
          <h1 className='text-white font-One text-4xl text-center mb-2'>{exercise.name}</h1>
          
          <div className='text-blue-300 mb-4 text-center'>
            <span className='font-bold'>Targets: </span>
            {exercise.muscles.join(", ")}
          </div>

          <div className='flex justify-center my-4 bg-gray-800 h-48 items-center rounded-lg'>
            <video className='w-full h-full object-cover' controls={false} autoPlay muted loop>
              <source src={exercise.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='text-white mt-4'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>How to Perform:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>

          <div className='text-white mt-4'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>Benefits:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className='text-green-300 mt-4 bg-gray-900 p-3 rounded-lg'>
            <h2 className='font-bold text-xl mb-2'>Pro Tips:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default ArmsAdvanced;
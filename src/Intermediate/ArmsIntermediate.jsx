import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {begARMS} from "../assets/assets"
import { interARMS } from '../assets/assets';
import { advSHOULDERS } from '../assets/assets';

const ArmsIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: " Tricep Overhead Extensions",
      muscles: ["Triceps (Long Head)", "Anconeus"],
      video: begARMS.cableoverhead,
      instructions: [
        "Sit on bench with back support, hold EZ bar with narrow overhand grip",
        "Press weight overhead until arms are fully extended",
        "Keeping elbows close to ears, lower bar behind head",
        "Pause when forearms reach parallel to floor",
        "Extend arms back to starting position"
      ],
      benefits: [
        "Targets the often underdeveloped long head of triceps",
        "Improves shoulder stability and mobility",
        "Enhances arm definition and strength",
        "Reduces wrist strain compared to straight bar"
      ],
      tips: [
        "Keep elbows pointing forward (don't flare outward)",
        "Move slowly through full range of motion (3 sec down, 1 sec up)",
        "Use lighter weight than you think for proper form",
        "Engage core to prevent back arching",
        "Focus on stretch at bottom of movement"
      ]
    },
    {
      id: 2,
      name: " Preacher Curls",
      muscles: ["Biceps Brachii (Short Head)", "Brachialis"],
      video: interARMS.preacher,
      instructions: [
        "Set preacher bench to support underarms comfortably",
        "Grip EZ bar with shoulder-width underhand grip",
        "Curl weight up until forearms are vertical",
        "Squeeze biceps hard at top position",
        "Lower slowly with control (3-4 second count)"
      ],
      benefits: [
        "Isolates biceps by eliminating body English",
        "Reduces shoulder and wrist strain",
        "Allows strict form and heavy weights",
        "Enhances bicep peak development"
      ],
      tips: [
        "Don't fully extend elbows at bottom (maintain tension)",
        "Keep back flat against pad throughout",
        "Use full range of motion without hyperextending",
        "Try different grip widths to target various angles",
        "Control the negative portion of the lift"
      ]
    },
    {
      id: 3,
      name: "Tricep Rope Pushdown",
      muscles: ["Triceps (All Heads)", "Anconeus"],
      video: advSHOULDERS.ropepushdown ,
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
      name: "Incline Dumbbell Curls",
      muscles: ["Biceps Brachii (Long Head)", "Brachialis"],
      video: begARMS.inclinecurl,
      instructions: [
        "Set incline bench to 45-60 degree angle",
        "Let arms hang straight down with dumbbells",
        "Curl weights while keeping elbows back",
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
        "Rotate palms up as you curl (supination)",
        "Pause for 1 second at peak contraction",
        "Alternate arms or lift simultaneously"
      ]
    },
    {
      id: 5,
      name: "Reverse Curls",
      muscles: ["Brachioradialis", "Brachialis", "Forearms"],
      video: interARMS.reversecurl,
      instructions: [
        "Attach straight bar to low pulley cable machine",
        "Grip bar with overhand grip (palms down)",
        "Keep elbows pinned to sides",
        "Curl bar up to shoulder height",
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
    <div className='lg:mx-8'>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Arms Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">ARMS</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to='/WorkoutGuide'>GUIDE</Link>
            <span className="text-yellow-300">/ARMS</span>
          </h1>
        </div>
      </div>

      {exercises.map((exercise) => (
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4 font-DM'>
          <h1 className='text-white font-One text-4xl text-center mb-2'>{exercise.name}</h1>

          <div className='text-blue-300 mb-4 text-center'>
            <span className='font-bold'>Targets: </span>
            {exercise.muscles.join(", ")}
          </div>

          <div className='flex justify-center my-4 bg-gray-800 h-48 lg:h-[40rem] items-center rounded-lg'>
            <video className='w-full h-full lg:h-[40rem] object-cover' controls={false} preload="none" autoPlay muted loop loading="lazy">
              <source src={exercise.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='text-white mt-4 font-DM lg:text-2xl'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>How to Perform:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>

          <div className='text-white mt-4 font-DM lg:text-2xl md:text-2xl'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>Benefits:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className='text-green-300 mt-4 bg-gray-900 p-3 rounded-lg font-DM lg:text-xl'>
            <h2 className='font-bold text-xl mb-2'>Pro Tips:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
  </div>   
      <Footer />
    </>
  );
};

export default ArmsIntermediate;
import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begLEGS } from '../assets/assets';

import { interLEGS } from '../assets/assets';

const LegsIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Back Squats",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core", "Calves"],
      video: begLEGS.barbellsqt,
      instructions: [
        "Position barbell on upper back (not neck) with hands slightly wider than shoulder-width",
        "Stand with feet shoulder-width apart, toes slightly out",
        "Lower hips back and down like sitting in a chair",
        "Descend until thighs are parallel to floor (or lower)",
        "Drive through heels to return to standing position",
        "Keep chest up and back straight throughout"
      ],
      benefits: [
        "Builds overall leg strength and size",
        "Enhances core stability and balance",
        "Boosts testosterone and growth hormone production",
        "Improves functional movement patterns",
        "Increases bone density"
      ],
      tips: [
        "Use squat rack with safety bars for heavy sets",
        "Start with just the bar to perfect form",
        "Brace core before descending",
        "Keep knees tracking over toes",
        "Control the descent (2-3 seconds)"
      ]
    },
    {
      id: 2,
      name: "Leg Press Machine",
      muscles: ["Quadriceps", "Hamstrings", "Glutes"],
      video: interLEGS.leg_press,
      instructions: [
        "Sit on machine with back flat against pad",
        "Place feet shoulder-width apart on platform",
        "Release safety handles and lower weight slowly",
        "Bend knees to 90° (or comfortable range)",
        "Press through heels to extend legs",
        "Don't lock knees at top"
      ],
      benefits: [
        "Allows heavy loading with less spinal compression",
        "Good alternative for those with back issues",
        "Easier to focus on leg muscles without balance requirement",
        "Adjustable foot positions target different muscles",
        "Can safely train to failure"
      ],
      tips: [
        "Never lock knees at full extension",
        "Keep feet flat throughout movement",
        "Don't let knees collapse inward",
        "Control the negative (3 second descent)",
        "Try single-leg variations for imbalances"
      ]
    },
    {
      id: 3,
      name: "Romanian Deadlifts (RDL)",
      muscles: ["Hamstrings", "Glutes", "Erector Spinae"],
      video: interLEGS.RDL,
      instructions: [
        "Stand with feet hip-width apart holding barbell or dumbbells",
        "Keep slight bend in knees, push hips back",
        "Lower weight along front of legs",
        "Descend until stretch in hamstrings (usually mid-shin)",
        "Drive hips forward to return to standing",
        "Squeeze glutes at top"
      ],
      benefits: [
        "Develops posterior chain strength",
        "Improves hip hinge mechanics",
        "Enhances deadlift and squat performance",
        "Increases hamstring flexibility",
        "Reduces risk of hamstring injuries"
      ],
      tips: [
        "Maintain neutral spine - never round back",
        "Keep bar/dumbbells close to body",
        "Lead with hips, not shoulders",
        "Use straps if grip fails first",
        "Focus on hamstring stretch at bottom"
      ]
    },
    {
      id: 4,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: interLEGS.leg_extension,
      instructions: [
        "Adjust machine so knees align with rotation point",
        "Place ankles behind pad, legs at 90°",
        "Extend legs fully without locking knees",
        "Squeeze quads at top for 1 second",
        "Lower slowly back to starting position"
      ],
      benefits: [
        "Isolates quadriceps muscles",
        "Improves knee joint stability",
        "Helps develop teardrop quad shape",
        "Good for rehab after knee injuries",
        "Can train to complete muscle failure"
      ],
      tips: [
        "Avoid swinging or using momentum",
        "Use full range of motion",
        "Try single-leg variations for imbalances",
        "Don't use excessive weight that compromises form",
        "Keep back flat against pad"
      ]
    },
    {
      id: 5,
      name: "Standing & Seated Calf Raises",
      muscles: ["Gastrocnemius (standing)", "Soleus (seated)"],
      video: interLEGS.seatedcalf,
      instructions: [
        "Standing: Use machine or step with weights",
        "Stand on balls of feet, lower heels below step",
        "Raise up onto toes as high as possible",
        "Pause at top for 1-2 seconds",
        "Seated: Place knees under pad with toes on platform",
        "Lift weight by extending ankles"
      ],
      benefits: [
        "Develops calf size and definition",
        "Improves ankle stability and mobility",
        "Enhances jumping ability",
        "Helps prevent shin splints",
        "Balances lower leg development"
      ],
      tips: [
        "Use full range of motion",
        "Control the lowering phase (3 seconds)",
        "Try single-leg variations for imbalances",
        "Perform higher reps (15-20) for calves",
        "Stretch calves between sets"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Legs Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">LEGS</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/LEGS</span>
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

          <div className='flex justify-center my-4 bg-gray-800 h-48 items-center rounded-lg'>
            <video className='w-full h-full object-cover' controls={false} preload="none" autoPlay muted loop loading="lazy">
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

export default LegsIntermediate;
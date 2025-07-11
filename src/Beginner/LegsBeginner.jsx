import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begLEGS } from '../assets/assets';

const LegsBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Squats",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      video: begLEGS.squat,
      instructions: [
        "Position barbell on upper back (not neck)",
        "Feet shoulder-width apart, toes slightly out",
        "Lower hips back and down like sitting in a chair",
        "Descend until thighs parallel to floor",
        "Drive through heels to return to standing"
      ],
      benefits: [
        "Builds overall leg strength and size",
        "Enhances core stability",
        "Boosts testosterone and growth hormone",
        "Improves functional movement patterns"
      ],
      tips: [
        "Keep chest up and back straight",
        "Knees should track over toes",
        "Start with just the bar to learn form",
        "Use squat rack with safety bars",
        "Brace core before descending"
      ]
    },
    {
      id: 2,
      name: "Sumo Squats",
      muscles: ["Inner Thighs", "Glutes", "Quadriceps"],
      video: begLEGS.sumosqt,
      instructions: [
        "Stand with feet wider than shoulder-width, toes at 45°",
        "Hold dumbbell/kettlebell at chest or between legs",
        "Lower until thighs parallel to floor",
        "Drive through heels to return up",
        "Squeeze glutes at top position"
      ],
      benefits: [
        "Targets inner thighs more than regular squats",
        "Reduces stress on knees",
        "Improves hip mobility",
        "Great for glute development"
      ],
      tips: [
        "Keep knees aligned with toes",
        "Maintain upright torso position",
        "Go deeper than parallel for maximum glute activation",
        "Use lighter weight to focus on form"
      ]
    },
    {
      id: 3,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: begLEGS.legext,
      instructions: [
        "Adjust machine so knees align with rotation point",
        "Place ankles behind pad, legs at 90°",
        "Extend legs fully without locking knees",
        "Slowly lower back to starting position"
      ],
      benefits: [
        "Isolates quadriceps muscles",
        "Improves knee joint stability",
        "Helps develop teardrop quad shape",
        "Good for rehab after knee injuries"
      ],
      tips: [
        "Avoid swinging or using momentum",
        "Pause at top for peak contraction",
        "Don't use excessive weight that compromises form",
        "Keep back flat against pad"
      ]
    },
    {
      id: 4,
      name: "Leg Curls",
      muscles: ["Hamstrings"],
      video: begLEGS.legscurl,
      instructions: [
        "Lie face down on machine, knees just off bench",
        "Position roller pad just above ankles",
        "Curl legs up until pad touches glutes",
        "Slowly lower back to starting position"
      ],
      benefits: [
        "Isolates hamstring development",
        "Improves knee flexion strength",
        "Balances quad-dominant training",
        "Reduces risk of hamstring injuries"
      ],
      tips: [
        "Keep hips pressed into bench",
        "Control the eccentric (lowering) phase",
        "Squeeze hamstrings at top of movement",
        "Don't arch back to complete reps"
      ]
    },
    {
      id: 5,
      name: "Standing Calf Raises",
      muscles: ["Gastrocnemius", "Soleus"],
      video: begLEGS.calf,
      instructions: [
        "Stand on edge of step or calf raise machine",
        "Raise onto toes as high as possible",
        "Pause at top for 1-2 seconds",
        "Lower heels below step level for full stretch"
      ],
      benefits: [
        "Develops calf size and definition",
        "Improves ankle stability",
        "Enhances jumping ability",
        "Helps prevent shin splints"
      ],
      tips: [
        "Use full range of motion",
        "Control the lowering phase",
        "Try single-leg variations for imbalance correction",
        "Perform higher reps (15-20) for calves"
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
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4'>
          <h1 className='text-white font-One text-4xl text-center mb-2'>{exercise.name}</h1>
          
          {/* Muscle Targets */}
          <div className='text-blue-300 mb-4 text-center'>
            <span className='font-bold'>Targets: </span>
            {exercise.muscles.join(", ")}
          </div>

          <div className='flex justify-center my-4 bg-gray-800 h-48 items-center rounded-lg'>
            <video className='w-full h-full object-cover' controls={false} autoPlay muted loop loading="lazy">
              <source src={exercise.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Instructions */}
          <div className='text-white mt-4'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>How to Perform:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
          
          {/* Benefits */}
          <div className='text-white mt-4'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>Benefits:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {exercise.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          {/* Pro Tips */}
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
  )
}

export default LegsBeginner;
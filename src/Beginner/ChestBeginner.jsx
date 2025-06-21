import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ChestBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Chest Press Machine",
      muscles: ["Pectoralis Major (Middle)", "Anterior Deltoids", "Triceps"],
      instructions: [
        "Adjust seat to align handles with mid-chest",
        "Keep back flat against pad throughout",
        "Push handles forward without locking elbows",
        "Control weight back to start position"
      ],
      benefits: [
        "Builds overall chest strength",
        "Guided motion for beginners",
        "Adjustable resistance levels"
      ],
      tips: [
        "Squeeze chest at peak contraction",
        "Use 3-second eccentric (lowering) phase",
        "Keep shoulders depressed"
      ]
    },
    {
      id: 2,
      name: "Pec Deck (Butterfly Machine)",
      muscles: ["Pectoralis Major (Inner)", "Anterior Deltoids"],
      instructions: [
        "Set seat height so elbows align with chest",
        "Press arms together in hugging motion",
        "Return slowly to stretched position"
      ],
      benefits: [
        "Isolates inner chest muscles",
        "Improves chest muscle endurance",
        "Reduces shoulder strain"
      ],
      tips: [
        "Imagine holding a beach ball between arms",
        "Pause for 2 seconds at peak contraction",
        "Avoid using momentum"
      ]
    },
    {
      id: 3,
      name: "Incline Chest Press Machine",
      muscles: ["Pectoralis Major (Upper)", "Anterior Deltoids", "Triceps"],
      instructions: [
        "Set incline to 30-45 degrees",
        "Push handles upward at angle",
        "Lower slowly to chest level"
      ],
      benefits: [
        "Targets upper chest specifically",
        "Reduces lower back strain vs free weights",
        "Easier to control than dumbbells"
      ],
      tips: [
        "Focus on pushing 'up and out'",
        "Maintain scapular retraction",
        "Don't let elbows drop below bench"
      ]
    },
    {
      id: 4,
      name: "Dumbbell Bench Press",
      muscles: ["Pectoralis Major (All)", "Anterior Deltoids", "Triceps"],
      instructions: [
        "Lie on bench with dumbbells at chest",
        "Press upward until arms nearly straight",
        "Lower slowly with control"
      ],
      benefits: [
        "Builds stabilizing muscles",
        "Allows natural arm movement",
        "Improves muscle balance"
      ],
      tips: [
        "Rotate palms slightly inward at top",
        "Keep dumbbells in line with elbows",
        "Touch dumbbells lightly at chest"
      ]
    },
    {
      id: 5,
      name: "Resistance Band Chest Fly",
      muscles: ["Pectoralis Major (All)", "Anterior Deltoids"],
      instructions: [
        "Anchor band behind you at chest height",
        "Extend arms forward in wide arc",
        "Control return to stretched position"
      ],
      benefits: [
        "Portable home workout option",
        "Constant tension on muscles",
        "Reduces joint stress"
      ],
      tips: [
        "Maintain slight elbow bend",
        "Focus on chest squeeze at midpoint",
        "Use slow tempo (3-1-3 count)"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Chest Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">CHEST</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/CHEST</span>
          </h1>
        </div>
      </div>

      {exercises.map((exercise) => (
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4'>
          <h1 className='text-white font-One text-4xl text-center mb-2'>{exercise.name}</h1>
          
          {/* Muscle Targets */}
          <div className='text-white mb-4 text-center'>
            <span className='font-bold'>Targets: </span>
            {exercise.muscles.join(", ")}
          </div>
          
          {/* Image placeholder */}
          <div className='flex justify-center my-4 bg-gray-800 h-48 items-center rounded-lg'>
            <p className='text-gray-400'>[Exercise demonstration image]</p>
          </div>
          
          {/* Instructions */}
          <div className='text-white mt-4'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>How to Use:</h2>
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

export default ChestBeginner;
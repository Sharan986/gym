import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ShouldersBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Dumbbell Shoulder Press (seated)",
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      instructions: [
        "Sit on bench with back support",
        "Hold dumbbells at shoulder height",
        "Press weights upward until arms are nearly straight",
        "Lower slowly back to starting position"
      ],
      benefits: [
        "Builds overall shoulder strength",
        "Improves shoulder stability",
        "Allows natural arm movement"
      ],
      tips: [
        "Keep core engaged throughout",
        "Don't lock elbows at top",
        "Use controlled movement"
      ]
    },
    {
      id: 2,
      name: "Resistance Band Lateral Raise",
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      instructions: [
        "Stand on center of resistance band",
        "Hold ends with palms facing inward",
        "Raise arms to shoulder height",
        "Lower slowly with control"
      ],
      benefits: [
        "Portable workout option",
        "Constant tension on muscles",
        "Reduces joint stress"
      ],
      tips: [
        "Keep slight bend in elbows",
        "Imagine pouring water from cups",
        "Avoid shrugging shoulders"
      ]
    },
    {
      id: 3,
      name: "Front Raise (dumbbells)",
      muscles: ["Anterior Deltoids", "Pectoralis Major"],
      instructions: [
        "Stand with dumbbells in front of thighs",
        "Raise one arm straight forward to eye level",
        "Lower slowly and alternate arms",
        "Keep slight bend in elbows"
      ],
      benefits: [
        "Targets front shoulder muscles",
        "Improves shoulder mobility",
        "Can be done unilaterally"
      ],
      tips: [
        "Control the descent",
        "Avoid using momentum",
        "Keep wrists neutral"
      ]
    },
    {
      id: 4,
      name: "Cable Lateral Raise",
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      instructions: [
        "Stand beside cable machine",
        "Grab handle with opposite hand",
        "Raise arm to shoulder height",
        "Control return to starting position"
      ],
      benefits: [
        "Constant tension throughout",
        "Adjustable resistance",
        "Isolates side delts effectively"
      ],
      tips: [
        "Lean slightly away from machine",
        "Focus on elbow leading the movement",
        "Use light weight for proper form"
      ]
    },
    {
      id: 5,
      name: "Upright Row (machine or barbell)",
      muscles: ["Lateral Deltoids", "Trapezius", "Biceps"],
      instructions: [
        "Grip bar with hands shoulder-width apart",
        "Pull elbows upward to chin level",
        "Lower slowly to starting position",
        "Keep bar close to body"
      ],
      benefits: [
        "Works multiple upper body muscles",
        "Improves shoulder mobility",
        "Can use various equipment"
      ],
      tips: [
        "Don't raise above collarbone",
        "Keep shoulders relaxed",
        "Use controlled tempo"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Shoulders Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">SHOULDERS</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/SHOULDERS</span>
          </h1>
        </div>
      </div>

      {exercises.map((exercise) => (
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4 '>
          <h1 className='text-white font-One text-4xl text-center mb-2'>{exercise.name}</h1>
          
          <div className='text-blue-300 mb-4 text-center'>
            <span className='font-bold'>Targets: </span>
            {exercise.muscles.join(", ")}
          </div>
          
          <div className='flex justify-center my-4 bg-gray-800 h-48 items-center rounded-lg'>
            <p className='text-gray-400'>[Exercise demonstration image]</p>
          </div>
          
          <div className='text-white mt-4'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>How to Use:</h2>
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
  )
}

export default ShouldersBeginner;
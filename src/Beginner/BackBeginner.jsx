import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const BackBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Lat Pulldown Machine",
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids"],
      instructions: [
        "Adjust thigh pad to secure legs",
        "Grip bar slightly wider than shoulders",
        "Pull bar down to chest while leaning back slightly",
        "Control return to starting position"
      ],
      benefits: [
        "Builds upper back width",
        "Easier alternative to pull-ups",
        "Adjustable resistance for progression"
      ],
      tips: [
        "Initiate movement by squeezing shoulder blades",
        "Keep elbows tracking slightly forward",
        "Avoid using momentum from swinging"
      ]
    },
    {
      id: 2,
      name: "Seated Cable Row",
      muscles: ["Rhomboids", "Middle Trapezius", "Latissimus Dorsi"],
      instructions: [
        "Sit with knees slightly bent",
        "Pull handle to waist while keeping chest up",
        "Squeeze shoulder blades together at peak",
        "Extend arms fully for complete stretch"
      ],
      benefits: [
        "Improves posture",
        "Targets mid-back muscles",
        "Low impact on joints"
      ],
      tips: [
        "Imagine squeezing a pencil between shoulder blades",
        "Maintain slight forward lean on extension",
        "Use straps if grip fatigues first"
      ]
    },
    {
      id: 3,
      name: "Resistance Band Row",
      muscles: ["Rear Deltoids", "Rhomboids", "Trapezius"],
      instructions: [
        "Anchor band at chest height",
        "Step back to create tension",
        "Pull elbows back to torso",
        "Control return to stretched position"
      ],
      benefits: [
        "Portable home workout option",
        "Constant tension through full range",
        "Scalable resistance"
      ],
      tips: [
        "Focus on squeezing rear delts",
        "Keep shoulders down away from ears",
        "Use slow tempo (2-1-2 count)"
      ]
    },
    {
      id: 4,
      name: "Back Extension Machine",
      muscles: ["Erector Spinae", "Glutes", "Hamstrings"],
      instructions: [
        "Adjust pad to align with hip crease",
        "Cross arms over chest",
        "Lower torso until parallel to floor",
        "Raise back to neutral spine position"
      ],
      benefits: [
        "Strengthens lower back",
        "Improves spinal stability",
        "Can help alleviate back pain"
      ],
      tips: [
        "Avoid hyperextension at top",
        "Engage core throughout movement",
        "Progress by holding weight to chest"
      ]
    },
    {
      id: 5,
      name: "Dumbbell Row (Bench-Supported)",
      muscles: ["Latissimus Dorsi", "Rear Deltoids", "Biceps"],
      instructions: [
        "Place knee and hand on bench",
        "Pull dumbbell to hip pocket",
        "Lower with control to full stretch",
        "Keep torso parallel to floor"
      ],
      benefits: [
        "Reduces lower back strain",
        "Allows independent arm work",
        "Improves mind-muscle connection"
      ],
      tips: [
        "Lead with elbow, not hand",
        "Imagine pulling elbow to ceiling",
        "Maintain neutral spine position"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Back Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">BACK</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/BACK</span>
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

export default BackBeginner;
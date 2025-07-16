import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begSHOULDERS } from '../assets/assets';
import { interSHOULDERS } from '../assets/assets';

const ShouldersBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Machine Shoulder Press",
      video: begSHOULDERS.machinesholder,
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      instructions: [
        "Adjust seat height so handles align with shoulders",
        "Grip handles with palms facing forward",
        "Press upward until arms are nearly straight",
        "Lower slowly back to starting position",
        "Keep back flat against the pad"
      ],
      benefits: [
        "Provides stable movement path for beginners",
        "Reduces strain on lower back",
        "Allows controlled weight progression",
        "Isolates shoulder muscles effectively"
      ],
      tips: [
        "Don't lock elbows at the top",
        "Exhale while pressing up, inhale while lowering",
        "Use full range of motion without overextending",
        "Start with lighter weight to perfect form"
      ]
    },
    {
      id: 2,
      name: "Dumbbell Lateral Raises",
      video: begSHOULDERS.lateralraises,
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      instructions: [
        "Stand with dumbbells at sides, palms facing inward",
        "Keep slight bend in elbows",
        "Raise arms to shoulder height (forming a 'T')",
        "Pause briefly at the top",
        "Lower slowly with control"
      ],
      benefits: [
        "Builds shoulder width and definition",
        "Improves shoulder mobility",
        "Can be done with various equipment",
        "Enhances mind-muscle connection"
      ],
      tips: [
        "Imagine pouring water from cups",
        "Use lighter weights for proper form",
        "Avoid shrugging shoulders upward",
        "Control the descent (3-4 seconds)"
      ]
    },
    {
      id: 3,
      name: "Reverse Dumbbell Flys",
      video: interSHOULDERS.reverse,
      muscles: ["Rear Deltoids", "Rhomboids", "Trapezius"],
      instructions: [
        "Bend forward at hips about 45 degrees",
        "Hold dumbbells with palms facing each other",
        "Raise arms out to sides, squeezing shoulder blades",
        "Pause at top when arms parallel to floor",
        "Lower slowly to starting position"
      ],
      benefits: [
        "Targets often-neglected rear delts",
        "Improves posture and upper back strength",
        "Counters effects of rounded shoulders",
        "Enhances shoulder stability"
      ],
      tips: [
        "Keep slight bend in elbows",
        "Lead with elbows, not hands",
        "Maintain neutral spine position",
        "Use lighter weights for control"
      ]
    },
    {
      id: 4,
      name: "Front Raises",
      video: begSHOULDERS.frontraises,
      muscles: ["Anterior Deltoids", "Pectoralis Major"],
      instructions: [
        "Stand with dumbbells in front of thighs",
        "Keep slight bend in elbows",
        "Raise one arm straight forward to eye level",
        "Lower slowly and alternate arms",
        "Maintain controlled movement throughout"
      ],
      benefits: [
        "Isolates front shoulder muscles",
        "Improves shoulder flexion strength",
        "Can identify muscle imbalances",
        "Enhances shoulder definition"
      ],
      tips: [
        "Avoid swinging or using momentum",
        "Keep wrists neutral (not bent)",
        "Control the descent (2-3 seconds)",
        "Alternate arms or lift both together"
      ]
    },
    {
      id: 5,
      name: "Shrugs",
      video: begSHOULDERS.shrugs,
      muscles: ["Trapezius", "Levator Scapulae"],
      instructions: [
        "Stand with dumbbells at sides",
        "Keep arms straight, shoulders relaxed",
        "Elevate shoulders straight upward",
        "Squeeze traps at the top position",
        "Lower slowly to full stretch"
      ],
      benefits: [
        "Develops upper trap muscles",
        "Improves shoulder girdle stability",
        "Enhances neck support",
        "Can be done with various equipment"
      ],
      tips: [
        "Avoid rolling shoulders (move straight up/down)",
        "Hold contraction at top for 1-2 seconds",
        "Use straps if grip fails before traps",
        "Keep chin neutral (don't jut forward)"
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
           <Link to='/WorkoutGuide'>GUIDE</Link>
            <span className="text-yellow-300">/SHOULDERS</span>
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
            <video className='w-full h-full object-cover' controls={false} preload="none" autoPlay muted loop>
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
  )
}

export default ShouldersBeginner;
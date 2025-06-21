import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ShouldersIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Arnold Press",
      muscles: ["Deltoids", "Triceps", "Trapezius"],
      instructions: [
        "Sit on a bench with back support and hold two dumbbells at shoulder height with your palms facing your body",
        "As you press the dumbbells overhead, rotate your palms to face forward",
        "Continue pressing until your arms are fully extended overhead",
        "Reverse the movement to return to the starting position"
      ],
      benefits: [
        "Targets all three deltoid heads",
        "Improves shoulder strength and stability",
        "Enhances overall shoulder definition"
      ],
      tips: [
        "Keep your core engaged throughout the movement",
        "Avoid locking your elbows at the top",
        "Use a controlled movement"
      ]
    },
    {
      id: 2,
      name: "Seated Barbell Overhead Press",
      muscles: ["Deltoids", "Triceps", "Trapezius"],
      instructions: [
        "Sit on a bench with back support and hold a barbell at shoulder height with an overhand grip",
        "Press the barbell overhead until your arms are fully extended",
        "Lower the barbell back to the starting position with control"
      ],
      benefits: [
        "Builds overall shoulder strength",
        "Improves upper body power",
        "Enhances shoulder stability"
      ],
      tips: [
        "Keep your core engaged throughout the movement",
        "Avoid arching your back",
        "Use a controlled movement"
      ]
    },
    {
      id: 3,
      name: "Dumbbell Rear Delt Fly (on incline bench)",
      muscles: ["Rear Deltoids", "Trapezius", "Rhomboids"],
      instructions: [
        "Set an incline bench to a 45-degree angle and lie face down with a dumbbell in each hand",
        "Let your arms hang straight down with your palms facing each other",
        "Raise the dumbbells out to the sides until your arms are parallel to the floor",
        "Lower the dumbbells back to the starting position with control"
      ],
      benefits: [
        "Isolates the rear deltoids",
        "Improves posture",
        "Enhances overall shoulder definition"
      ],
      tips: [
        "Keep a slight bend in your elbows",
        "Squeeze your shoulder blades together at the top of the movement",
        "Use a controlled movement"
      ]
    },
    {
      id: 4,
      name: "Smith Machine Overhead Press",
      muscles: ["Deltoids", "Triceps", "Trapezius"],
      instructions: [
        "Set a bench inside the Smith machine and sit with back support",
        "Grip the barbell at shoulder height with an overhand grip",
        "Press the barbell overhead until your arms are fully extended",
        "Lower the barbell back to the starting position with control"
      ],
      benefits: [
        "Provides stability for controlled movements",
        "Builds overall shoulder strength",
        "Enhances shoulder stability"
      ],
      tips: [
        "Keep your core engaged throughout the movement",
        "Avoid locking your elbows at the top",
        "Use a controlled movement"
      ]
    },
    {
      id: 5,
      name: "Cable Front Raise",
      muscles: ["Front Deltoids", "Pectoralis Major"],
      instructions: [
        "Attach a straight bar to a low pulley and stand facing the cable machine",
        "Grip the bar with an overhand grip and your hands shoulder-width apart",
        "Raise the bar straight out in front of you until it is at shoulder height",
        "Lower the bar back to the starting position with control"
      ],
      benefits: [
        "Isolates the front deltoids",
        "Improves shoulder strength and definition",
        "Enhances overall upper body stability"
      ],
      tips: [
        "Keep a slight bend in your elbows",
        "Avoid using momentum to lift the weight",
        "Use a controlled movement"
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
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4'>
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
  );
};

export default ShouldersIntermediate;

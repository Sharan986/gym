import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';

const ArmsBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Dumbbell Bicep Curl (Seated)",
      muscles: ["Biceps", "Forearms"],
      video: Videos.vid16,
      instructions: [
        "Sit on a bench with a dumbbell in each hand, palms facing forward",
        "Keep your elbows close to your torso",
        "Curl the weights while contracting your biceps",
        "Continue until your biceps are fully contracted and the dumbbells are at shoulder level",
        "Lower the dumbbells back to the starting position"
      ],
      benefits: [
        "Isolates the biceps",
        "Improves arm strength",
        "Enhances muscle definition"
      ],
      tips: [
        "Keep your elbows stationary",
        "Avoid swinging the weights",
        "Use a controlled movement"
      ]
    },
    {
      id: 2,
      name: "Resistance Band Hammer Curl",
      muscles: ["Biceps", "Brachialis", "Forearms"],
      video: Videos.vid17,
      instructions: [
        "Stand on the middle of the resistance band with feet shoulder-width apart",
        "Hold the ends of the band with your palms facing your torso",
        "Keep your elbows close to your torso and curl the band upward",
        "Continue until your biceps are fully contracted",
        "Lower the band back to the starting position"
      ],
      benefits: [
        "Targets the brachialis for arm thickness",
        "Improves grip strength",
        "Portable and versatile"
      ],
      tips: [
        "Keep your elbows close to your sides",
        "Maintain a neutral wrist position",
        "Control the resistance band throughout the movement"
      ]
    },
    {
      id: 3,
      name: "Overhead Dumbbell Tricep Extension",
      muscles: ["Triceps"],
      video: Videos.vid18,
      instructions: [
        "Stand or sit on a bench with a dumbbell held by both hands",
        "Raise the dumbbell overhead until both arms are fully extended",
        "Lower the dumbbell behind your head by bending your elbows",
        "Return to the starting position by extending your arms"
      ],
      benefits: [
        "Isolates the triceps",
        "Improves arm strength and stability",
        "Enhances muscle definition"
      ],
      tips: [
        "Keep your elbows close to your head",
        "Avoid moving your upper arms",
        "Use a controlled movement"
      ]
    },
    {
      id: 4,
      name: "Incline Dumbbell Curl (on bench)",
      muscles: ["Biceps", "Forearms"],
      video: Videos.vid19,
      instructions: [
        "Set an incline bench to a 45-degree angle and sit back with a dumbbell in each hand",
        "Let your arms hang down at your sides with your palms facing forward",
        "Curl the dumbbells while contracting your biceps",
        "Continue until your biceps are fully contracted",
        "Lower the dumbbells back to the starting position"
      ],
      benefits: [
        "Targets the long head of the biceps",
        "Improves arm strength and definition",
        "Enhances muscle stretch and contraction"
      ],
      tips: [
        "Keep your elbows stationary",
        "Avoid swinging the weights",
        "Use a controlled movement"
      ]
    },
    {
      id: 5,
      name: "Tricep Pushdown (Cable)",
      video: Videos.vid20,
      muscles: ["Triceps"],
      instructions: [
        "Attach a straight or angled bar to a high pulley and grab it with an overhand grip",
        "Stand with your feet shoulder-width apart and your elbows close to your sides",
        "Push the bar down until your arms are fully extended",
        "Return to the starting position by bending your elbows"
      ],
      benefits: [
        "Isolates the triceps",
        "Improves arm strength and definition",
        "Enhances muscle endurance"
      ],
      tips: [
        "Keep your elbows close to your sides",
        "Avoid using your body weight to push the bar down",
        "Use a controlled movement"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Arms Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">ARMS</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/ARMS</span>
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
            <video className='w-full h-full object-cover' controls={false} autoPlay muted loop loading="lazy">
              <source src={exercise.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

export default ArmsBeginner;

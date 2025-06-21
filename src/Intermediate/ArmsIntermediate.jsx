import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ArmsIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Curl",
      muscles: ["Biceps", "Forearms"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold a barbell with an underhand grip, hands slightly wider than shoulder-width apart",
        "Keep your elbows close to your torso and curl the barbell up towards your shoulders",
        "Squeeze your biceps at the top of the movement",
        "Lower the barbell back to the starting position with control"
      ],
      benefits: [
        "Builds overall bicep strength",
        "Increases muscle mass",
        "Improves arm definition"
      ],
      tips: [
        "Keep your elbows stationary and close to your torso",
        "Avoid using momentum to lift the weight",
        "Use a controlled movement"
      ]
    },
    {
      id: 2,
      name: "Concentration Curl (Dumbbell)",
      muscles: ["Biceps", "Forearms"],
      instructions: [
        "Sit on a bench with your legs spread apart and hold a dumbbell in one hand",
        "Rest your elbow against the inside of your thigh and let the dumbbell hang down",
        "Curl the dumbbell up towards your shoulder, squeezing your bicep at the top of the movement",
        "Lower the dumbbell back to the starting position with control"
      ],
      benefits: [
        "Isolates the biceps for maximum contraction",
        "Improves muscle definition",
        "Enhances overall arm strength"
      ],
      tips: [
        "Keep your elbow stationary against your thigh",
        "Avoid swinging the weight",
        "Use a controlled movement"
      ]
    },
    {
      id: 3,
      name: "Skull Crushers (EZ Bar)",
      muscles: ["Triceps"],
      instructions: [
        "Lie on a flat bench and hold an EZ bar with an overhand grip, hands close together",
        "Extend your arms so the bar is directly above your chest",
        "Lower the bar towards your forehead by bending your elbows",
        "Extend your arms back to the starting position, squeezing your triceps at the top of the movement"
      ],
      benefits: [
        "Targets the triceps for maximum growth",
        "Improves arm strength and definition",
        "Enhances overall upper body stability"
      ],
      tips: [
        "Keep your elbows stationary and close to your head",
        "Avoid flaring your elbows out",
        "Use a controlled movement"
      ]
    },
    {
      id: 4,
      name: "Cable Rope Overhead Extension",
      muscles: ["Triceps"],
      instructions: [
        "Attach a rope to a high pulley and stand facing the cable machine",
        "Grip the rope with both hands and extend your arms overhead",
        "Lower the rope behind your head by bending your elbows",
        "Extend your arms back to the starting position, squeezing your triceps at the top of the movement"
      ],
      benefits: [
        "Isolates the triceps for maximum contraction",
        "Improves arm strength and definition",
        "Enhances overall upper body stability"
      ],
      tips: [
        "Keep your elbows close to your head",
        "Avoid using momentum to lift the weight",
        "Use a controlled movement"
      ]
    },
    {
      id: 5,
      name: "Dumbbell Hammer Curl",
      muscles: ["Biceps", "Brachialis", "Forearms"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing your torso)",
        "Keep your elbows close to your torso and curl the dumbbells up towards your shoulders",
        "Squeeze your biceps at the top of the movement",
        "Lower the dumbbells back to the starting position with control"
      ],
      benefits: [
        "Targets the brachialis for arm thickness",
        "Improves grip strength",
        "Enhances overall arm definition"
      ],
      tips: [
        "Keep your elbows stationary and close to your torso",
        "Avoid swinging the weights",
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

export default ArmsIntermediate;

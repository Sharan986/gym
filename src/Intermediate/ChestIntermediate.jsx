import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ChestIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Bench Press",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      instructions: [
        "Lie back on a flat bench with your feet flat on the floor",
        "Grip the barbell with hands slightly wider than shoulder-width apart",
        "Lift the barbell from the rack and hold it straight over you with your arms locked",
        "Lower the barbell to your chest, then push it back up to the starting position"
      ],
      benefits: [
        "Builds overall chest strength",
        "Increases muscle mass",
        "Improves upper body power"
      ],
      tips: [
        "Keep your back arched slightly",
        "Control the weight on the way down",
        "Use a spotter for heavy lifts"
      ]
    },
    {
      id: 2,
      name: "Incline Dumbbell Press",
      muscles: ["Upper Pectoralis Major", "Triceps", "Anterior Deltoids"],
      instructions: [
        "Set an incline bench to a 45-degree angle and lie back with a dumbbell in each hand",
        "Hold the dumbbells at shoulder level with your palms facing forward",
        "Press the dumbbells upward until your arms are fully extended",
        "Lower the dumbbells back to the starting position"
      ],
      benefits: [
        "Targets the upper chest muscles",
        "Improves shoulder stability",
        "Enhances overall chest definition"
      ],
      tips: [
        "Keep your feet flat on the floor",
        "Avoid locking your elbows at the top",
        "Use a controlled movement"
      ]
    },
    {
      id: 3,
      name: "Cable Crossover",
      muscles: ["Pectoralis Major", "Anterior Deltoids"],
      instructions: [
        "Set the cable pulleys to the highest position and select the desired weight",
        "Stand in the center of the cable machine with a staggered stance",
        "Grab the handles with your palms facing down",
        "Bring your hands together in front of your body, crossing one hand over the other",
        "Return to the starting position with control"
      ],
      benefits: [
        "Isolates the chest muscles",
        "Improves muscle definition",
        "Enhances flexibility and range of motion"
      ],
      tips: [
        "Keep a slight bend in your elbows",
        "Squeeze your chest muscles at the peak of the contraction",
        "Use a slow and controlled movement"
      ]
    },
    {
      id: 4,
      name: "Smith Machine Chest Press",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      instructions: [
        "Set the bench inside the Smith machine and lie back with your feet flat on the floor",
        "Grip the barbell with hands slightly wider than shoulder-width apart",
        "Unrack the barbell and lower it to your chest",
        "Press the barbell back up to the starting position"
      ],
      benefits: [
        "Provides stability for controlled movements",
        "Builds overall chest strength",
        "Reduces the need for a spotter"
      ],
      tips: [
        "Keep your back flat on the bench",
        "Control the weight on the way down",
        "Avoid locking your elbows at the top"
      ]
    },
    {
      id: 5,
      name: "Dumbbell Chest Fly",
      muscles: ["Pectoralis Major", "Anterior Deltoids"],
      instructions: [
        "Lie back on a flat bench with a dumbbell in each hand, palms facing each other",
        "Extend your arms above your chest with a slight bend in your elbows",
        "Lower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest",
        "Bring the dumbbells back up to the starting position"
      ],
      benefits: [
        "Stretches and contracts the chest muscles",
        "Improves muscle definition",
        "Enhances flexibility and range of motion"
      ],
      tips: [
        "Keep a slight bend in your elbows throughout the movement",
        "Avoid lowering the weights too far",
        "Use a controlled movement"
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

export default ChestIntermediate;

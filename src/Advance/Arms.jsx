import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';

const ArmsAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Close-Grip Barbell Bench Press",
      muscles: ["Triceps", "Chest", "Shoulders"],
      video: Videos.vid21,
      instructions: [
        "Lie back on a flat bench with a barbell grasped using a close grip (hands closer than shoulder-width).",
        "Lift the bar from the rack and hold it straight over you with your arms locked.",
        "As you breathe in, lower the bar until it touches the middle of your chest.",
        "After a second pause, bring the bar back to the starting position as you breathe out.",
      ],
      benefits: [
        "Builds triceps mass and strength",
        "Enhances chest and shoulder stability",
        "Improves overall pressing power"
      ],
      tips: [
        "Keep your elbows tucked in to maximize triceps engagement.",
        "Avoid flaring your elbows out to prevent shoulder strain.",
        "Use a controlled motion for both lifting and lowering the barbell."
      ]
    },
    {
      id: 2,
      name: "Weighted Dips",
      muscles: ["Triceps", "Chest", "Shoulders"],
      video: Videos.vid22,
      instructions: [
        "Use parallel bars and lift yourself with your arms fully extended.",
        "Lower your body by bending your elbows while leaning forward slightly.",
        "Dip down until your shoulders are below your elbows.",
        "Lift your body back up by extending your arms.",
      ],
      benefits: [
        "Increases triceps strength and size",
        "Improves upper body stability",
        "Enhances muscle endurance"
      ],
      tips: [
        "Keep your body upright to focus more on the triceps.",
        "Avoid swinging or using momentum to lift yourself.",
        "Use a weight belt to add resistance as you progress."
      ]
    },
    {
      id: 3,
      name: "EZ-Bar Skull Crushers",
      muscles: ["Triceps"],
      video: Videos.vid23,
      instructions: [
        "Lie on a flat bench with an EZ-bar grasped with an inner close grip.",
        "Extend your arms so they are perpendicular to the floor.",
        "Lower the bar by bending your elbows, bringing the bar towards your forehead.",
        "Extend your arms back to the starting position.",
      ],
      benefits: [
        "Isolates and strengthens the triceps",
        "Improves arm extension power",
        "Enhances muscle definition"
      ],
      tips: [
        "Keep your upper arms stationary and perpendicular to the floor.",
        "Avoid lowering the bar too quickly to prevent injury.",
        "Use a controlled movement throughout the exercise."
      ]
    },
    {
      id: 4,
      name: "Incline Dumbbell Curl (Alternating)",
      muscles: ["Biceps", "Forearms"],
      video: Videos.vid24,
      instructions: [
        "Set an incline bench to a 45-degree angle and sit back with a dumbbell in each hand.",
        "Let your arms hang down at your sides with your palms facing forward.",
        "Curl one dumbbell while keeping the other arm stationary.",
        "Alternate arms with each repetition.",
      ],
      benefits: [
        "Enhances bicep peak and strength",
        "Improves muscle balance and coordination",
        "Increases muscle endurance"
      ],
      tips: [
        "Keep your elbows stationary and avoid swinging the weights.",
        "Focus on a slow and controlled movement.",
        "Ensure full range of motion for maximum benefit."
      ]
    },
    {
      id: 5,
      name: "Overhead Rope Cable Tricep Extension",
      muscles: ["Triceps"],
      video: Videos.vid25,
      instructions: [
        "Attach a rope to the low pulley of a cable station.",
        "Stand with your back to the machine and grasp the rope with both hands.",
        "Extend your arms fully overhead, keeping your elbows close to your head.",
        "Lower the rope behind your head by bending your elbows.",
        "Return to the starting position by extending your arms.",
      ],
      benefits: [
        "Targets all three heads of the triceps",
        "Improves arm extension and stability",
        "Enhances muscle definition and endurance"
      ],
      tips: [
        "Keep your elbows close to your head throughout the movement.",
        "Avoid using your body weight to move the rope.",
        "Use a controlled motion for both lifting and lowering."
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6ODA0/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Advanced Arms Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">ADVANCED ARMS</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/">HOME</Link>
            <span className="text-yellow-300">/ADVANCED ARMS</span>
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
            <video className='w-full h-full object-cover' controls={false} autoPlay muted loop>
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

export default ArmsAdvanced;

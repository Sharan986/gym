import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const BackIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Bent-Over Row",
      muscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Biceps"],
      instructions: [
        "Stand with your feet shoulder-width apart and knees slightly bent",
        "Bend at your hips and knees to lower your torso until it's almost parallel to the floor",
        "Grip the barbell with hands slightly wider than shoulder-width apart",
        "Lift the barbell to your torso, keeping your elbows close to your body",
        "Lower the barbell back to the starting position"
      ],
      benefits: [
        "Strengthens the entire back",
        "Improves posture",
        "Enhances overall upper body strength"
      ],
      tips: [
        "Keep your back straight and avoid rounding your shoulders",
        "Use a controlled movement",
        "Engage your core for stability"
      ]
    },
    {
      id: 2,
      name: "T-Bar Row (with machine or landmine attachment)",
      muscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Biceps"],
      instructions: [
        "Place a barbell in a landmine attachment or use a T-bar row machine",
        "Stand over the barbell with your feet shoulder-width apart",
        "Bend at your hips and knees to lower your torso",
        "Grip the handles and lift the weight to your torso",
        "Lower the weight back to the starting position"
      ],
      benefits: [
        "Targets the middle back muscles",
        "Improves overall back strength",
        "Enhances muscle definition"
      ],
      tips: [
        "Keep your back straight and avoid rounding your shoulders",
        "Use a controlled movement",
        "Engage your core for stability"
      ]
    },
    {
      id: 3,
      name: "Dumbbell Renegade Row (on bench)",
      muscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Core"],
      instructions: [
        "Place two dumbbells on the floor and assume a push-up position with each hand gripping a dumbbell",
        "Row one dumbbell up to your torso while balancing on the other arm",
        "Lower the dumbbell back to the starting position and repeat with the other arm",
        "Continue alternating arms"
      ],
      benefits: [
        "Strengthens the back and core",
        "Improves stability and balance",
        "Enhances overall upper body strength"
      ],
      tips: [
        "Keep your hips level and avoid rotating your torso",
        "Use a controlled movement",
        "Engage your core for stability"
      ]
    },
    {
      id: 4,
      name: "Iso-Lateral Row Machine",
      muscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Biceps"],
      instructions: [
        "Sit on the iso-lateral row machine with your chest against the pad",
        "Grip the handles with your palms facing each other",
        "Pull the handles back to your torso, squeezing your shoulder blades together",
        "Return to the starting position with control"
      ],
      benefits: [
        "Isolates the back muscles",
        "Improves muscle definition",
        "Enhances overall back strength"
      ],
      tips: [
        "Keep your back straight and avoid rounding your shoulders",
        "Use a controlled movement",
        "Squeeze your shoulder blades together at the peak of the contraction"
      ]
    },
    {
      id: 5,
      name: "Cable Lat Row",
      muscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Biceps"],
      instructions: [
        "Sit on the cable row machine with your feet on the platform and knees slightly bent",
        "Grip the handle with your palms facing down",
        "Pull the handle to your torso, squeezing your shoulder blades together",
        "Return to the starting position with control"
      ],
      benefits: [
        "Strengthens the entire back",
        "Improves posture",
        "Enhances overall upper body strength"
      ],
      tips: [
        "Keep your back straight and avoid rounding your shoulders",
        "Use a controlled movement",
        "Squeeze your shoulder blades together at the peak of the contraction"
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

export default BackIntermediate;

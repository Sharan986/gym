import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';

const LegsBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Leg Press Machine",
      muscles: ["Quadriceps", "Hamstrings", "Glutes"],
      video: Videos.vid11,
      instructions: [
        "Sit on the leg press machine with your back against the pad",
        "Place your feet on the platform shoulder-width apart",
        "Push the platform away by extending your legs",
        "Bend your knees to lower the platform back down"
      ],
      benefits: [
        "Builds overall leg strength",
        "Improves muscle endurance",
        "Reduces stress on the lower back"
      ],
      tips: [
        "Keep your feet flat on the platform",
        "Do not lock your knees at the top",
        "Control the movement"
      ]
    },
    {
      id: 2,
      name: "Stiff-Leg Dumbbell Deadlift",
      muscles: ["Hamstrings", "Glutes", "Lower Back"],
      video: Videos.vid12,
      instructions: [
        "Stand with feet hip-width apart, holding dumbbells in front of your thighs",
        "Keep your legs straight and bend at the hips to lower the dumbbells",
        "Lower the dumbbells until you feel a stretch in your hamstrings",
        "Return to the starting position by squeezing your glutes"
      ],
      benefits: [
        "Strengthens the posterior chain",
        "Improves hip mobility",
        "Enhances overall stability"
      ],
      tips: [
        "Keep your back straight throughout the movement",
        "Engage your core for stability",
        "Use a controlled tempo"
      ]
    },
    {
      id: 3,
      name: "Cable Glute Kickbacks",
      muscles: ["Glutes", "Hamstrings"],
      video: Videos.vid13,
      instructions: [
        "Attach an ankle strap to a low cable pulley and secure it around your ankle",
        "Stand facing the cable machine and hold onto it for support",
        "Kick your leg back, keeping it straight, until your glute is fully contracted",
        "Return to the starting position with control"
      ],
      benefits: [
        "Isolates and strengthens the glutes",
        "Improves hip stability",
        "Enhances overall lower body strength"
      ],
      tips: [
        "Keep your core engaged",
        "Avoid arching your back",
        "Use a light to moderate weight"
      ]
    },
    {
      id: 4,
      name: "Leg Extension Machine",
      muscles: ["Quadriceps"],
      video: Videos.vid14,
      instructions: [
        "Sit on the leg extension machine with your back against the pad",
        "Place your ankles behind the roller pad",
        "Extend your legs until they are straight",
        "Lower the weight back down with control"
      ],
      benefits: [
        "Isolates and strengthens the quadriceps",
        "Improves knee stability",
        "Enhances overall leg strength"
      ],
      tips: [
        "Avoid locking your knees at the top",
        "Use a controlled movement",
        "Adjust the seat for proper alignment"
      ]
    },
    {
      id: 5,
      name: "Standing Calf Raise Machine",
      muscles: ["Calves"],
      video: Videos.vid15,
      instructions: [
        "Stand on the calf raise machine with your shoulders under the pads",
        "Place the balls of your feet on the edge of the platform",
        "Raise your heels as high as possible",
        "Lower your heels back down below the platform"
      ],
      benefits: [
        "Strengthens the calf muscles",
        "Improves ankle stability",
        "Enhances overall lower leg strength"
      ],
      tips: [
        "Keep your core engaged",
        "Use a full range of motion",
        "Control the movement"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Legs & Glutes Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">LEGS </h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/LEGS </span>
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
  )
}

export default LegsBeginner;

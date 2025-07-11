import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advSHOULDERS } from '../assets/assets';
import { interSHOULDERS } from '../assets/assets';

const ShouldersAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name:  "Face Pulls (ROPE)",
      video: advSHOULDERS.ropefacepull,
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps", "Core"],
      instructions: [
        "Stand with feet shoulder-width apart, holding a barbell at shoulder height.",
        "Press the barbell overhead until your arms are fully extended.",
        "Lower the barbell back to shoulder height with control.",
        "Keep your core engaged throughout the movement."
      ],
      benefits: [
        "Builds significant shoulder strength and size",
        "Engages core for stability",
        "Improves overall upper body power"
      ],
      tips: [
        "Keep your head slightly forward to maintain balance.",
        "Avoid arching your back excessively.",
        "Use a controlled motion for both lifting and lowering."
      ]
    },
      {
      id: 2,
      name: "Cable Lateral Raises",
      video: advSHOULDERS.cable,
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      instructions: [
        "Stand next to a cable machine with the pulley at its lowest setting.",
        "Grab the handle with your outside hand, keeping a slight bend in your elbow.",
        "Raise your arm out to the side until it's parallel to the floor.",
        "Slowly lower back to the starting position with control."
      ],
      benefits: [
        "Isolates the lateral deltoids effectively",
        "Provides constant tension throughout the movement",
        "Improves shoulder width and definition"
      ],
      tips: [
        "Keep your torso upright and avoid leaning.",
        "Raise only to shoulder height to avoid impingement.",
        "Control the weight on both the lift and descent."
      ]
    },
   
    
    {
      id: 4,
      name: "Arnold Press",
      video: advSHOULDERS.arnoldpress,
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      instructions: [
        "Sit on a bench with dumbbells at shoulder height, palms facing your body.",
        "As you press the dumbbells overhead, rotate your palms to face forward.",
        "Lower the dumbbells back to the starting position with the same rotation.",
        "Keep your core engaged and maintain control throughout."
      ],
      benefits: [
        "Enhances shoulder mobility and strength",
        "Engages multiple parts of the deltoids",
        "Improves rotational strength"
      ],
      tips: [
        "Focus on smooth rotation during the press.",
        "Avoid using momentum to lift the weights.",
        "Keep your elbows slightly in front of your body."
      ]
    },
    {
      id: 5,
      name: "Reverse Fly Machine",
      video: advSHOULDERS.reversefly,
      muscles: ["Posterior Deltoids", "Trapezius", "Rhomboids"],
      instructions: [
        "Sit at a reverse fly machine or bend forward with dumbbells.",
        "Keep a slight bend in your elbows and open your arms outward.",
        "Squeeze your shoulder blades together at the top of the movement.",
        "Return to the starting position with control."
      ],
      benefits: [
        "Targets the often-neglected rear delts",
        "Improves posture and upper back strength",
        "Helps balance shoulder development"
      ],
      tips: [
        "Focus on using your rear delts, not your arms.",
        "Keep your movements controlled and deliberate.",
        "Avoid arching your back during the movement."
      ]
    },
    {
      id: 6,
      name: "Upright Rows",
      video: interSHOULDERS.CABLE,
      muscles: ["Lateral Deltoids", "Trapezius", "Biceps"],
      instructions: [
        "Stand holding a barbell or dumbbells with an overhand grip.",
        "Pull the weight straight up along your torso to chin level.",
        "Keep your elbows higher than your hands throughout.",
        "Lower back down with control."
      ],
      benefits: [
        "Develops the lateral deltoids and traps",
        "Improves shoulder and upper back strength",
        "Can be done with various equipment"
      ],
      tips: [
        "Use a shoulder-width grip to reduce strain.",
        "Don't raise the weight higher than chin level.",
        "Keep the movement smooth and controlled."
      ]
    },
    {
      id: 7,
      name: "Front Raises",
      video: advSHOULDERS.frontraise,
      muscles: ["Anterior Deltoids", "Pectoralis Major (upper)"],
      instructions: [
        "Stand holding dumbbells or a barbell with palms facing your thighs.",
        "Raise the weight straight in front of you to shoulder height.",
        "Pause briefly at the top of the movement.",
        "Lower back down with control."
      ],
      benefits: [
        "Isolates the front deltoids effectively",
        "Improves shoulder definition and strength",
        "Can be done with various equipment"
      ],
      tips: [
        "Keep a slight bend in your elbows.",
        "Avoid using momentum to swing the weights up.",
        "Control the descent to maximize muscle engagement."
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
          loading="lazy"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">shoulder</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/shoulder</span>
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

export default ShouldersAdvanced;
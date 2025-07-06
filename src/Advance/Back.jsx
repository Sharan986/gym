import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';

const BackAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Pull-Ups (Weighted)",
      video: Videos.vid26,
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids", "Core"],
      instructions: [
        "Hang from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width.",
        "Engage your core and pull your body up until your chin clears the bar.",
        "Lower your body back down with control until your arms are fully extended.",
        "Add weight using a dip belt or weighted vest for increased resistance."
      ],
      benefits: [
        "Builds significant upper body strength",
        "Enhances grip strength",
        "Improves overall back and core stability"
      ],
      tips: [
        "Focus on controlled movements, both up and down.",
        "Avoid swinging or using momentum.",
        "Engage your lats by imagining pulling your elbows down to your hips."
      ]
    },
    {
      id: 2,
      name: "Bent-Over Barbell Row",
      video: Videos.vid27,
      muscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Biceps"],
      instructions: [
        "Stand with feet shoulder-width apart, knees slightly bent, and bend at the hips to lower your torso.",
        "Grip the barbell with an overhand grip, hands slightly wider than shoulder-width.",
        "Pull the barbell to your waist, keeping your elbows close to your body.",
        "Lower the barbell back to the starting position with control."
      ],
      benefits: [
        "Increases back thickness and strength",
        "Improves posture and spinal stability",
        "Engages multiple muscle groups"
      ],
      tips: [
        "Keep your back straight and avoid rounding your shoulders.",
        "Focus on squeezing your shoulder blades together at the peak of the movement.",
        "Use a controlled tempo to maximize muscle engagement."
      ]
    },
    {
      id: 3,
      name: "Deadlifts",
      video: Videos.vid28,
      muscles: ["Erector Spinae", "Glutes", "Hamstrings", "Trapezius"],
      instructions: [
        "Stand with feet hip-width apart, with a barbell on the floor in front of you.",
        "Bend at the hips and knees to grip the barbell with an overhand or mixed grip.",
        "Lift the barbell by extending your hips and knees to stand up straight.",
        "Lower the barbell back to the floor with control, maintaining a straight back."
      ],
      benefits: [
        "Builds overall back and posterior chain strength",
        "Improves posture and spinal stability",
        "Enhances full-body power and coordination"
      ],
      tips: [
        "Keep the barbell close to your body throughout the lift.",
        "Engage your core and maintain a neutral spine.",
        "Avoid jerking the weight; use a smooth, controlled motion."
      ]
    },
    {
      id: 4,
      name: "T-Bar Row",
      video: Videos.vid29,
      muscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Biceps"],
      instructions: [
        "Straddle a T-bar row machine with feet shoulder-width apart.",
        "Bend at the hips and knees to grip the handles.",
        "Pull the handles to your torso, keeping your elbows close to your body.",
        "Lower the handles back to the starting position with control."
      ],
      benefits: [
        "Targets the entire back for balanced development",
        "Improves grip and forearm strength",
        "Allows for heavy loading with reduced lower back strain"
      ],
      tips: [
        "Keep your chest up and shoulders back throughout the movement.",
        "Focus on squeezing your shoulder blades together.",
        "Use a controlled tempo to maximize muscle engagement."
      ]
    },
    {
      id: 5,
      name: "Single-Arm Dumbbell Row",
      video: Videos.vid30,
      muscles: ["Latissimus Dorsi", "Rear Deltoids", "Biceps", "Core"],
      instructions: [
        "Place one knee and hand on a bench for support.",
        "Hold a dumbbell in the opposite hand with your arm extended.",
        "Pull the dumbbell to your hip, keeping your elbow close to your body.",
        "Lower the dumbbell back to the starting position with control."
      ],
      benefits: [
        "Allows for unilateral strength development",
        "Improves core stability and balance",
        "Enhances mind-muscle connection"
      ],
      tips: [
        "Keep your torso parallel to the floor and avoid rotating.",
        "Focus on pulling with your back muscles, not your arm.",
        "Use a full range of motion for maximum benefit."
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
                <h1 className="text-5xl font-One z-10">Back</h1>
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

export default BackAdvanced;

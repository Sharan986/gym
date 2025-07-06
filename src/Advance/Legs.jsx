import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';

const LegsAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Back Squat",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      video: Videos.vid21,
      instructions: [
        "Stand with your feet shoulder-width apart and the barbell resting on your upper back",
        "Keep your chest up and core engaged",
        "Lower your body by bending your knees and hips, as if sitting back into a chair",
        "Descend until your thighs are parallel to the ground",
        "Push through your heels to return to the starting position"
      ],
      benefits: [
        "Builds overall leg strength",
        "Enhances core stability",
        "Improves functional movement patterns"
      ],
      tips: [
        "Keep your knees in line with your toes",
        "Maintain a neutral spine",
        "Control the descent and ascent"
      ]
    },
    {
      id: 2,
      name: "Bulgarian Split Squat",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
      video: Videos.vid22,
      instructions: [
        "Stand a few feet in front of a bench or elevated surface",
        "Place one foot on the bench behind you",
        "Lower your body by bending your front knee until your thigh is parallel to the ground",
        "Push through your front heel to return to the starting position"
      ],
      benefits: [
        "Improves unilateral leg strength",
        "Enhances balance and stability",
        "Increases flexibility and mobility"
      ],
      tips: [
        "Keep your torso upright",
        "Engage your core for stability",
        "Use a controlled tempo"
      ]
    },
    {
      id: 3,
      name: "Romanian Deadlift",
      muscles: ["Hamstrings", "Glutes", "Lower Back", "Core"],
      video: Videos.vid23,
      instructions: [
        "Stand with your feet hip-width apart, holding a barbell with an overhand grip",
        "Keep your legs slightly bent and bend at the hips to lower the barbell",
        "Lower the barbell until you feel a stretch in your hamstrings",
        "Return to the starting position by squeezing your glutes and extending your hips"
      ],
      benefits: [
        "Strengthens the posterior chain",
        "Improves hip mobility",
        "Enhances overall stability and posture"
      ],
      tips: [
        "Keep your back straight throughout the movement",
        "Engage your core for stability",
        "Use a controlled tempo"
      ]
    },
    {
      id: 4,
      name: "Walking Lunges",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
      video: Videos.vid24,
      instructions: [
        "Stand with your feet hip-width apart",
        "Take a step forward with one leg and lower your body until both knees are bent at a 90-degree angle",
        "Push through your front heel to return to the starting position",
        "Repeat with the other leg"
      ],
      benefits: [
        "Improves unilateral leg strength",
        "Enhances balance and coordination",
        "Increases flexibility and mobility"
      ],
      tips: [
        "Keep your torso upright",
        "Engage your core for stability",
        "Use a controlled tempo"
      ]
    },
    {
      id: 5,
      name: "Box Jumps",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
      video: Videos.vid25,
      instructions: [
        "Stand in front of a sturdy box or platform",
        "Bend your knees and swing your arms back",
        "Explode upwards, swinging your arms forward and jumping onto the box",
        "Land softly on the box with your knees slightly bent",
        "Step down carefully and repeat"
      ],
      benefits: [
        "Improves explosive power",
        "Enhances athletic performance",
        "Increases cardiovascular fitness"
      ],
      tips: [
        "Use a box height that is appropriate for your fitness level",
        "Land softly to reduce impact on your joints",
        "Engage your core for stability"
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
            <h1 className="text-5xl font-One z-10">Legs</h1>
            <h1 className="font-One text-2xl mt-6">
              <Link to="/"> HOME </Link>
              <span className="text-yellow-300">/LEGS</span>
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

export default LegsAdvanced;

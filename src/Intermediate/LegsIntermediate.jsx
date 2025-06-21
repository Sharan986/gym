import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LegsIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Back Squat",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
      instructions: [
        "Stand with your feet shoulder-width apart and hold a barbell across your upper back.",
        "Keep your chest up and core braced, then lower your body by bending your knees and pushing your hips back.",
        "Lower until your thighs are parallel to the floor.",
        "Push through your heels to return to the starting position."
      ],
      benefits: [
        "Builds overall leg strength",
        "Increases muscle mass",
        "Improves mobility and balance"
      ],
      tips: [
        "Keep your knees in line with your toes",
        "Maintain a neutral spine",
        "Use a controlled movement"
      ]
    },
    {
      id: 2,
      name: "Romanian Deadlift (Barbell or Dumbbell)",
      muscles: ["Hamstrings", "Glutes", "Lower Back"],
      instructions: [
        "Stand with your feet hip-width apart and hold a barbell or dumbbells in front of your thighs.",
        "Keep your knees slightly bent and lower the weights by pushing your hips back.",
        "Lower until you feel a stretch in your hamstrings.",
        "Return to the starting position by pushing your hips forward."
      ],
      benefits: [
        "Strengthens the posterior chain",
        "Improves hip mobility",
        "Enhances overall lower body strength"
      ],
      tips: [
        "Keep the weights close to your body",
        "Maintain a neutral spine",
        "Avoid rounding your back"
      ]
    },
    {
      id: 3,
      name: "Dumbbell Walking Lunges",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
      instructions: [
        "Stand with your feet hip-width apart and hold a dumbbell in each hand.",
        "Take a step forward with one foot and lower your body until both knees are bent at a 90-degree angle.",
        "Push through your front heel to return to the starting position.",
        "Repeat with the other leg."
      ],
      benefits: [
        "Improves leg strength and endurance",
        "Enhances balance and coordination",
        "Increases muscle mass"
      ],
      tips: [
        "Keep your torso upright",
        "Maintain a controlled movement",
        "Avoid letting your front knee extend past your toes"
      ]
    },
    {
      id: 4,
      name: "Hip Thrust (with barbell or machine)",
      muscles: ["Glutes", "Hamstrings", "Lower Back"],
      instructions: [
        "Sit on the ground with your upper back against a bench and a barbell across your hips.",
        "Bend your knees and place your feet flat on the ground.",
        "Push through your heels to lift your hips until your body forms a straight line from your shoulders to your knees.",
        "Lower your hips back to the starting position."
      ],
      benefits: [
        "Strengthens the glutes and hamstrings",
        "Improves hip mobility",
        "Enhances overall lower body strength"
      ],
      tips: [
        "Keep your chin tucked and ribs down",
        "Squeeze your glutes at the top of the movement",
        "Use a controlled movement"
      ]
    },
    {
      id: 5,
      name: "Smith Machine Split Squat",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
      instructions: [
        "Stand in a split stance with one foot in front of the other and the barbell across your upper back.",
        "Lower your body by bending your knees until your back knee is close to the ground.",
        "Push through your front heel to return to the starting position.",
        "Repeat with the other leg."
      ],
      benefits: [
        "Improves leg strength and endurance",
        "Enhances balance and coordination",
        "Increases muscle mass"
      ],
      tips: [
        "Keep your torso upright",
        "Maintain a controlled movement",
        "Avoid letting your front knee extend past your toes"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Legs Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">LEGS</h1>
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

export default LegsIntermediate;

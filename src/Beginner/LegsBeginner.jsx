import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begLEGS } from '../assets/assets';

const LegsBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Squats",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      video: begLEGS.squat,
      instructions: [
        "Position the barbell on your upper back, not on your neck.",
        "Place your feet shoulder-width apart with your toes slightly out.",
        "Lower your hips back and down as if sitting in a chair.",
        "Descend until your thighs are parallel to the floor.",
        "Drive through your heels to return to standing."
      ],
      benefits: [
        "Builds overall leg strength and size.",
        "Enhances core stability.",
        "Boosts testosterone and growth hormone.",
        "Improves functional movement patterns."
      ],
      tips: [
        "Keep your chest up and your back straight.",
        "Ensure your knees track over your toes.",
        "Start with just the bar to learn the form.",
        "Use a squat rack with safety bars.",
        "Brace your core before descending."
      ]
    },
    {
      id: 2,
      name: "Sumo Squats",
      muscles: ["Inner Thighs", "Glutes", "Quadriceps"],
      video: begLEGS.sumosqt,
      instructions: [
        "Stand with your feet wider than shoulder-width and your toes at a 45° angle.",
        "Hold a dumbbell or kettlebell at your chest or between your legs.",
        "Lower your body until your thighs are parallel to the floor.",
        "Drive through your heels to return to the starting position.",
        "Squeeze your glutes at the top position."
      ],
      benefits: [
        "Targets inner thighs more than regular squats.",
        "Reduces stress on the knees.",
        "Improves hip mobility.",
        "Great for glute development."
      ],
      tips: [
        "Keep your knees aligned with your toes.",
        "Maintain an upright torso position.",
        "Go deeper than parallel for maximum glute activation.",
        "Use lighter weight to focus on form."
      ]
    },
    {
      id: 3,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: begLEGS.legext,
      instructions: [
        "Adjust the machine so your knees align with the rotation point.",
        "Place your ankles behind the pad with your legs at a 90° angle.",
        "Extend your legs fully without locking your knees.",
        "Slowly lower back to the starting position."
      ],
      benefits: [
        "Isolates the quadriceps muscles.",
        "Improves knee joint stability.",
        "Helps develop teardrop quad shape.",
        "Good for rehab after knee injuries."
      ],
      tips: [
        "Avoid swinging or using momentum.",
        "Pause at the top for peak contraction.",
        "Don't use excessive weight that compromises form.",
        "Keep your back flat against the pad."
      ]
    },
    {
      id: 4,
      name: "Leg Curls",
      muscles: ["Hamstrings"],
      video: begLEGS.legscurl,
      instructions: [
        "Lie face down on the machine with your knees just off the bench.",
        "Position the roller pad just above your ankles.",
        "Curl your legs up until the pad touches your glutes.",
        "Slowly lower back to the starting position."
      ],
      benefits: [
        "Isolates hamstring development.",
        "Improves knee flexion strength.",
        "Balances quad-dominant training.",
        "Reduces the risk of hamstring injuries."
      ],
      tips: [
        "Keep your hips pressed into the bench.",
        "Control the eccentric (lowering) phase.",
        "Squeeze your hamstrings at the top of the movement.",
        "Don't arch your back to complete reps."
      ]
    },
    {
      id: 5,
      name: "Standing Calf Raises",
      muscles: ["Gastrocnemius", "Soleus"],
      video: begLEGS.calf,
      instructions: [
        "Stand on the edge of a step or calf raise machine.",
        "Raise onto your toes as high as possible.",
        "Pause at the top for 1-2 seconds.",
        "Lower your heels below the step level for a full stretch."
      ],
      benefits: [
        "Develops calf size and definition.",
        "Improves ankle stability.",
        "Enhances jumping ability.",
        "Helps prevent shin splints."
      ],
      tips: [
        "Use the full range of motion.",
        "Control the lowering phase.",
        "Try single-leg variations for imbalance correction.",
        "Perform higher reps (15-20) for calves."
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
          <h1 className="text-5xl font-One z-10">Legs</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/">Home</Link>
            <span className="text-yellow-300">/Legs</span>
          </h1>
        </div>
      </div>
      {exercises.map((exercise) => (
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4 font-DM'>
          <h1 className='text-white font-One text-4xl text-center mb-2'>{exercise.name}</h1>

          <div className='text-blue-300 mb-4 text-center'>
            <span className='font-bold'>Targets: </span>
            {exercise.muscles.join(", ")}
          </div>
          <div className='flex justify-center my-4 bg-gray-800 h-48 items-center rounded-lg'>
            <video className='w-full h-full object-cover' controls={false} preload="none" autoPlay muted loop>
              <source src={exercise.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='text-white mt-4'>
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>How to Perform:</h2>
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

export default LegsBeginner;

import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advLEGS } from '../assets/assets';

const LegsAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Hack Squat",
      muscles: ["Quadriceps", "Glutes", "Hamstrings"],
      video: advLEGS.hack_squat,
      instructions: [
        "Position yourself in the hack squat machine with your shoulders against the pads.",
        "Place your feet shoulder-width apart on the platform.",
        "Release the safety handles and lower the weight slowly.",
        "Bend your knees to 90° or a comfortable range.",
        "Press through your heels to extend your legs.",
        "Don't lock your knees at the top."
      ],
      benefits: [
        "Allows heavy loading with less spinal compression.",
        "Good alternative for those with back issues.",
        "Easier to focus on quads without balance requirements.",
        "Adjustable foot positions target different muscles."
      ],
      tips: [
        "Never lock your knees at full extension.",
        "Keep your feet flat throughout the movement.",
        "Don't let your knees collapse inward.",
        "Control the negative (3-second descent).",
        "Try single-leg variations for imbalances."
      ]
    },
    {
      id: 2,
      name: "Bulgarian Split Squats (Weighted)",
      muscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      video: advLEGS.bulgariasplit,
      instructions: [
        "Stand facing away from a bench, place one foot on the bench behind you.",
        "Hold dumbbells at your sides or kettlebells at your chest.",
        "Lower your body until your front thigh is parallel to the floor.",
        "Keep your torso upright throughout the movement.",
        "Drive through your front heel to return to the start.",
        "Maintain a controlled tempo."
      ],
      benefits: [
        "Develops unilateral leg strength.",
        "Improves balance and coordination.",
        "Reduces strength imbalances between legs.",
        "Enhances hip mobility and stability."
      ],
      tips: [
        "Start with bodyweight to master the form.",
        "Keep your front knee aligned with your toes.",
        "Use a bench height that allows a 90° knee bend.",
        "Add weight gradually in 5-10 lb increments.",
        "Focus on a controlled eccentric (3-second descent)."
      ]
    },
    {
      id: 3,
      name: "Hamstring-Focused Leg Press",
      muscles: ["Hamstrings", "Glutes"],
      video: advLEGS.legpress,
      instructions: [
        "Position your feet high and wide on the platform.",
        "Press the weight out and release the safety handles.",
        "Lower the weight slowly with control.",
        "Focus on feeling the stretch in your hamstrings.",
        "Press back up without locking your knees.",
        "Keep your hips stable throughout."
      ],
      benefits: [
        "Targets often-neglected hamstrings.",
        "Reduces quadriceps dominance.",
        "Improves posterior chain strength.",
        "Safer than traditional deadlifts for some."
      ],
      tips: [
        "Use lighter weight than a regular leg press.",
        "Point your toes slightly outward.",
        "Don't lower too deep if your back rounds.",
        "Squeeze your glutes at the top of the movement.",
        "Try single-leg variations."
      ]
    },
    {
      id: 4,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: advLEGS.leg_ext,
      instructions: [
        "Adjust the seat so your knees align with the machine's axis.",
        "Place your ankles behind the pad with your legs at 90°.",
        "Extend your legs fully without locking your knees.",
        "Squeeze your quads at the top for 1-2 seconds.",
        "Lower slowly back to the starting position."
      ],
      benefits: [
        "Isolates quadriceps muscles.",
        "Improves knee joint stability.",
        "Helps develop teardrop quad shape.",
        "Good for rehab after knee injuries."
      ],
      tips: [
        "Avoid swinging or using momentum.",
        "Use the full range of motion.",
        "Try single-leg variations for imbalances.",
        "Don't use excessive weight.",
        "Keep your back flat against the pad."
      ]
    },
    {
      id: 5,
      name: "Hip Adduction/Abduction Machine",
      muscles: ["Adductors", "Abductors", "Glutes"],
      video: advLEGS.hip_adduction,
      instructions: [
        "For adduction: Sit with pads between your thighs, squeeze inward.",
        "For abduction: Sit with pads outside your thighs, push outward.",
        "Maintain an upright posture throughout.",
        "Control the movement in both directions.",
        "Squeeze the target muscles at peak contraction."
      ],
      benefits: [
        "Improves hip stability and mobility.",
        "Enhances athletic performance.",
        "Prevents groin injuries.",
        "Balances lower body development."
      ],
      tips: [
        "Use moderate weight with perfect form.",
        "Don't rock your body to move the weight.",
        "Pause at peak contraction.",
        "Perform both movements equally.",
        "Great warm-up or finisher exercise."
      ]
    },
    {
      id: 6,
      name: "Barbell Hip Thrust",
      muscles: ["Glutes", "Hamstrings", "Core"],
      video: advLEGS.hip_thrust,
      instructions: [
        "Sit on the ground with your upper back against a bench.",
        "Roll the barbell over your hips (use a pad for comfort).",
        "Drive through your heels to lift your hips until your body forms a straight line.",
        "Squeeze your glutes hard at the top position.",
        "Lower with control to the starting position."
      ],
      benefits: [
        "Maximizes glute activation.",
        "Improves hip extension power.",
        "Enhances athletic performance.",
        "Reduces the risk of hamstring injuries."
      ],
      tips: [
        "Use a spotter for heavy sets.",
        "Keep your chin tucked to maintain a neutral spine.",
        "Pause for 2 seconds at the top.",
        "Increase weight gradually.",
        "Try single-leg variations."
      ]
    },
    {
      id: 7,
      name: "Standing Calf Raises (Weighted)",
      muscles: ["Gastrocnemius"],
      video: advLEGS.weiged_calf,
      instructions: [
        "Stand on the edge of a step or calf raise machine.",
        "Hold dumbbells or use machine shoulder pads.",
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
        "Control the lowering phase (3 seconds).",
        "Try single-leg variations for imbalances.",
        "Perform higher reps (15-20).",
        "Stretch your calves between sets."
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
          loading="lazy"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">Legs</h1>
          <h1 className="font-One text-2xl mt-6">
           <Link to='/WorkoutGuide'>GUIDE</Link>
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

export default LegsAdvanced;
 
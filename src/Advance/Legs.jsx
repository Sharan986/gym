import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';
import { advLEGS } from '../assets/assets';

const LegsAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Hack Squat",
      muscles: ["Quadriceps", "Glutes", "Hamstrings"],
      video:  advLEGS.hack_squat,
      instructions: [
        "Position yourself in the hack squat machine with shoulders against pads",
        "Place feet shoulder-width apart on platform",
        "Release safety handles and lower weight slowly",
        "Bend knees to 90° (or comfortable range)",
        "Press through heels to extend legs",
        "Don't lock knees at top"
      ],
      benefits: [
        "Allows heavy loading with less spinal compression",
        "Good alternative for those with back issues",
        "Easier to focus on quads without balance requirement",
        "Adjustable foot positions target different muscles"
      ],
      tips: [
        "Never lock knees at full extension",
        "Keep feet flat throughout movement",
        "Don't let knees collapse inward",
        "Control the negative (3 second descent)",
        "Try single-leg variations for imbalances"
      ]
    },
    {
      id: 2,
      name: "Bulgarian Split Squats (Weighted)",
      muscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      video: advLEGS.bulgariasplit,
      instructions: [
        "Stand facing away from bench, place one foot on bench behind you",
        "Hold dumbbells at sides or kettlebells at chest",
        "Lower body until front thigh is parallel to floor",
        "Keep torso upright throughout movement",
        "Drive through front heel to return to start",
        "Maintain controlled tempo"
      ],
      benefits: [
        "Develops unilateral leg strength",
        "Improves balance and coordination",
        "Reduces strength imbalances between legs",
        "Enhances hip mobility and stability"
      ],
      tips: [
        "Start with bodyweight to master form",
        "Keep front knee aligned with toes",
        "Use bench height that allows 90° knee bend",
        "Add weight gradually (5-10lb increments)",
        "Focus on controlled eccentric (3 sec descent)"
      ]
    },
    {
      id: 3,
      name: "Hamstring-Focused Leg Press",
      muscles: ["Hamstrings", "Glutes"],
      video: advLEGS.legpress,
      instructions: [
        "Position feet high and wide on platform",
        "Press weight out and release safety handles",
        "Lower weight slowly with control",
        "Focus on feeling stretch in hamstrings",
        "Press back up without locking knees",
        "Keep hips stable throughout"
      ],
      benefits: [
        "Targets often-neglected hamstrings",
        "Reduces quadriceps dominance",
        "Improves posterior chain strength",
        "Safer than traditional deadlifts for some"
      ],
      tips: [
        "Use lighter weight than regular leg press",
        "Point toes slightly outward",
        "Don't lower too deep if back rounds",
        "Squeeze glutes at top of movement",
        "Try single-leg variations"
      ]
    },
    {
      id: 4,
      name: "Leg Extensions",
      muscles: ["Quadriceps"],
      video: advLEGS.leg_ext,
      instructions: [
        "Adjust seat so knees align with machine's axis",
        "Place ankles behind pad with legs at 90°",
        "Extend legs fully without locking knees",
        "Squeeze quads at top for 1-2 seconds",
        "Lower slowly back to starting position"
      ],
      benefits: [
        "Isolates quadriceps muscles",
        "Improves knee joint stability",
        "Helps develop teardrop quad shape",
        "Good for rehab after knee injuries"
      ],
      tips: [
        "Avoid swinging or using momentum",
        "Use full range of motion",
        "Try single-leg variations for imbalances",
        "Don't use excessive weight",
        "Keep back flat against pad"
      ]
    },
    {
      id: 5,
      name: "Hip Adduction/Abduction Machine",
      muscles: ["Adductors", "Abductors", "Glutes"],
      video: advLEGS.hip_adduction,
      instructions: [
        "For adduction: Sit with pads between thighs, squeeze inward",
        "For abduction: Sit with pads outside thighs, push outward",
        "Maintain upright posture throughout",
        "Control movement in both directions",
        "Squeeze target muscles at peak contraction"
      ],
      benefits: [
        "Improves hip stability and mobility",
        "Enhances athletic performance",
        "Prevents groin injuries",
        "Balances lower body development"
      ],
      tips: [
        "Use moderate weight with perfect form",
        "Don't rock body to move weight",
        "Pause at peak contraction",
        "Perform both movements equally",
        "Great warm-up or finisher exercise"
      ]
    },
    {
      id: 6,
      name: "Barbell Hip Thrust",
      muscles: ["Glutes", "Hamstrings", "Core"],
      video: advLEGS.hip_thrust,
      instructions: [
        "Sit on ground with upper back against bench",
        "Roll barbell over hips (use pad for comfort)",
        "Drive through heels to lift hips until body forms straight line",
        "Squeeze glutes hard at top position",
        "Lower with control to starting position"
      ],
      benefits: [
        "Maximizes glute activation",
        "Improves hip extension power",
        "Enhances athletic performance",
        "Reduces risk of hamstring injuries"
      ],
      tips: [
        "Use spotter for heavy sets",
        "Keep chin tucked to maintain neutral spine",
        "Pause for 2 seconds at top",
        "Increase weight gradually",
        "Try single-leg variations"
      ]
    },
    {
      id: 7,
      name: "Standing Calf Raises (Weighted)",
      muscles: ["Gastrocnemius"],
      video: advLEGS.weiged_calf,
      instructions: [
        "Stand on edge of step or calf raise machine",
        "Hold dumbbells or use machine shoulder pads",
        "Raise onto toes as high as possible",
        "Pause at top for 1-2 seconds",
        "Lower heels below step level for full stretch"
      ],
      benefits: [
        "Develops calf size and definition",
        "Improves ankle stability",
        "Enhances jumping ability",
        "Helps prevent shin splints"
      ],
      tips: [
        "Use full range of motion",
        "Control the lowering phase (3 seconds)",
        "Try single-leg variations for imbalances",
        "Perform higher reps (15-20)",
        "Stretch calves between sets"
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
            <video className='w-full h-full object-cover' controls={false} autoPlay muted loop loading="lazy">
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
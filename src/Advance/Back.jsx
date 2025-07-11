import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { advBACK } from '../assets/assets';
import { interBACK } from '../assets/assets';

const BackAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Deadlifts / Rack Pulls",
      video: advBACK.DEADLIFT,
      muscles: ["Erector Spinae", "Latissimus Dorsi", "Trapezius", "Glutes", "Hamstrings"],
      instructions: [
        "Stand with feet hip-width apart, barbell over mid-foot",
        "Bend at hips and knees to grip bar (overhand or mixed grip)",
        "Keep back flat, chest up, and core braced",
        "Drive through heels to lift bar, extending hips and knees",
        "For rack pulls: Set pins at knee height or slightly below",
        "Stand tall at top, then lower with control"
      ],
      benefits: [
        "Builds overall back thickness and strength",
        "Develops powerful hip extension",
        "Improves grip strength",
        "Rack pulls target upper back specifically"
      ],
      tips: [
        "Keep bar close to body throughout lift",
        "Engage lats by bending the bar",
        "Use straps for heavy sets if grip fails",
        "For rack pulls: Focus on squeezing shoulder blades at top",
        "Maintain neutral spine position"
      ]
    },
    {
      id: 2,
      name: "Underhand Bent-Over Rows",
      video: interBACK.bentover,
      muscles: ["Latissimus Dorsi", "Rhomboids", "Biceps", "Rear Delts"],
      instructions: [
        "Stand with feet shoulder-width apart, knees slightly bent",
        "Bend at hips to 45° angle with underhand grip on barbell",
        "Pull bar to lower abdomen, elbows tucked at 45°",
        "Squeeze shoulder blades together at top",
        "Lower with control to full arm extension"
      ],
      benefits: [
        "Targets lower lats more effectively",
        "Allows greater range of motion",
        "Engages biceps more than overhand grip",
        "Improves scapular retraction"
      ],
      tips: [
        "Maintain flat back - never round shoulders",
        "Lead with elbows, not hands",
        "Use straps for heavy sets to focus on back",
        "Pause for 1 second at contraction",
        "Keep head in line with spine"
      ]
    },
    {
      id: 3,
      name: "Single-Arm Dumbbell Rows",
      video: advBACK.dbrowing,
      muscles: ["Latissimus Dorsi", "Rear Delts", "Rotator Cuff", "Core"],
      instructions: [
        "Place knee and hand on bench, other foot on floor",
        "Hold dumbbell with neutral grip, arm fully extended",
        "Pull elbow up and back to hip level",
        "Squeeze shoulder blade at top position",
        "Lower with control to full stretch"
      ],
      benefits: [
        "Corrects muscle imbalances",
        "Improves core stability",
        "Allows greater range of motion",
        "Enhances mind-muscle connection"
      ],
      tips: [
        "Keep torso parallel to floor",
        "Imagine pulling with elbow, not hand",
        "Pause for 2 seconds at peak contraction",
        "Use straps to focus purely on back muscles",
        "Control the eccentric (3-4 second descent)"
      ]
    },
    {
      id: 4,
      name: "Chest-Supported Rows",
      video: advBACK.chestbarbell,
      muscles: ["Middle Back", "Rear Delts", "Rhomboids"],
      instructions: [
        "Set incline bench to 45° and lie chest-down",
        "Let arms hang straight down with dumbbells",
        "Row weights up to hips, elbows high",
        "Squeeze shoulder blades together at top",
        "Lower with control to full stretch"
      ],
      benefits: [
        "Eliminates cheating and momentum",
        "Reduces lower back strain",
        "Improves scapular movement",
        "Allows strict focus on back muscles"
      ],
      tips: [
        "Imagine pulling with elbows, not hands",
        "Pause at top for 2-second contraction",
        "Use moderate weight with perfect form",
        "Keep neck neutral (don't look up)",
        "Try pronated grip variation"
      ]
    },
    {
      id: 5,
      name: "Wide-Grip Seated Cable Rows",
      video: advBACK.widegrip,
      muscles: ["Upper Back", "Rear Delts", "Trapezius"],
      instructions: [
        "Use wide bar attachment on cable machine",
        "Sit with knees slightly bent, chest up",
        "Pull handle to upper abdomen",
        "Squeeze shoulder blades together",
        "Return slowly to full stretch"
      ],
      benefits: [
        "Develops thickness in upper back",
        "Improves scapular retraction",
        "Counters effects of rounded shoulders",
        "Enhances posture"
      ],
      tips: [
        "Imagine squeezing pencil between shoulder blades",
        "Maintain slight forward lean on extension",
        "Don't let weight stack touch between reps",
        "Keep elbows at 90° angle to torso",
        "Exhale on pull, inhale on release"
      ]
    },
    {
      id: 6,
      name: "Wide-Grip Lat Pulldowns",
      video: advBACK.widegriplat,
      muscles: ["Latissimus Dorsi", "Teres Major", "Biceps"],
      instructions: [
        "Grip bar wide (1.5x shoulder width)",
        "Sit with thighs secured under pads",
        "Pull bar to upper chest while leaning back slightly",
        "Squeeze lats at bottom position",
        "Control return to full stretch"
      ],
      benefits: [
        "Builds impressive back width",
        "Improves scapular depression",
        "Enhances V-taper development",
        "Good alternative to pull-ups"
      ],
      tips: [
        "Imagine pulling elbows to pockets",
        "Don't use momentum - controlled movement",
        "Pause for 1 second at contraction",
        "Keep chest up throughout",
        "Adjust weight to maintain strict form"
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
          loading="lazy"
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
            <video className='w-full h-full object-cover' controls={false} autoPlay muted loop>
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

export default BackAdvanced;
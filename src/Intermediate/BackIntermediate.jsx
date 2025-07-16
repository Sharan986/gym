import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { interBACK } from '../assets/assets';

const BackIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Pull-Ups (Assisted if needed)",
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids", "Trapezius"],
      video: interBACK.pullup,
      instructions: [
        "Grab pull-up bar with overhand grip (palms facing away)",
        "Hands slightly wider than shoulder-width",
        "Hang with arms fully extended, engage core",
        "Pull yourself up until chin clears the bar",
        "Lower slowly with control (3-4 second descent)",
        "Keep shoulders down (avoid shrugging)"
      ],
      benefits: [
        "Builds functional upper body strength",
        "Develops impressive back width",
        "Improves grip strength",
        "Enhances shoulder stability"
      ],
      tips: [
        "Start with assisted version if needed",
        "Focus on pulling with elbows (not just arms)",
        "Full range of motion is key",
        "Add weight with dip belt for progression",
        "Try different grips (wide/narrow/neutral)"
      ]
    },
    {
      id: 2,
      name: "Bent-Over Barbell Row",
      muscles: ["Middle Back", "Lats", "Rear Delts", "Biceps"],
      video: interBACK.bentover,
      instructions: [
        "Stand with feet shoulder-width, knees slightly bent",
        "Bend at hips until torso is 45° to floor",
        "Grip bar slightly wider than shoulder-width",
        "Pull bar to lower ribcage, elbows at 45°",
        "Squeeze shoulder blades together at top",
        "Lower with control to full stretch"
      ],
      benefits: [
        "Builds overall back thickness",
        "Improves posture and spinal stability",
        "Enhances deadlift strength",
        "Develops strong core muscles"
      ],
      tips: [
        "Maintain neutral spine - never round back",
        "Lead with elbows, not hands",
        "Use straps if grip fails before back",
        "Start with lighter weight to perfect form",
        "Keep head in line with spine"
      ]
    },
    {
      id: 3,
      name: "Close-Grip Lat Pulldown",
      muscles: ["Lower Lats", "Biceps", "Brachialis"],
      video: interBACK.closegrid,
      instructions: [
        "Use V-bar or close-grip attachment",
        "Sit with thighs secured under pads",
        "Pull bar to upper chest, lean back slightly",
        "Squeeze lats at bottom position",
        "Control return to full stretch"
      ],
      benefits: [
        "Targets lower lat fibers specifically",
        "Reduces strain on shoulders",
        "Improves mind-muscle connection",
        "Great for V-taper development"
      ],
      tips: [
        "Imagine pulling elbows to pockets",
        "Don't use momentum - controlled movement",
        "Pause for 1 second at contraction",
        "Keep chest up throughout",
        "Adjust weight to maintain strict form"
      ]
    },
    {
      id: 4,
      name: "Wide-Grip Seated Cable Row",
      muscles: ["Upper Back", "Rear Delts", "Trapezius"],
      video: interBACK.widegrid,
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
      id: 5,
      name: "Chest-Supported Dumbbell Row",
      muscles: ["Middle Back", "Rear Delts", "Rhomboids"],
      video: interBACK.chestsupported,
      instructions: [
        "Set incline bench to 45° and lie chest-down",
        "Let arms hang straight down with dumbbells",
        "Row weights up to hips, elbows high",
        "Squeeze shoulder blades at top",
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
        "Try single-arm variations for imbalances"
      ]
    },
    {
      id: 6,
      name: "Hyperextensions (Weighted)",
      muscles: ["Erector Spinae", "Glutes", "Hamstrings"],
      video: interBACK.HYPER,
      instructions: [
        "Position hips on pad of hyperextension bench",
        "Cross arms or hold weight plate to chest",
        "Lower torso until parallel to floor",
        "Raise back up to neutral spine position",
        "Squeeze glutes at top"
      ],
      benefits: [
        "Strengthens entire posterior chain",
        "Improves spinal stability",
        "Reduces risk of back injuries",
        "Enhances deadlift and squat performance"
      ],
      tips: [
        "Avoid hyperextension at top",
        "Keep movement slow and controlled",
        "Progress gradually with added weight",
        "Engage core throughout movement",
        "Don't round back when lowering"
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
           <Link to='/WorkoutGuide'>GUIDE</Link>
            <span className="text-yellow-300">/BACK</span>
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
            <video className='w-full h-full object-cover' controls={false} preload="none" autoPlay muted loop loading="lazy">
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

export default BackIntermediate;
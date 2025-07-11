import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';

const ShouldersIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Reverse Fly Machine",
      muscles: ["Rear Deltoids", "Trapezius", "Rhomboids"],
      video: Videos.vid21,
      instructions: [
        "Adjust seat height so handles are at shoulder level",
        "Sit with chest against pad and grip handles",
        "Keep slight bend in elbows throughout movement",
        "Squeeze shoulder blades together as you pull arms back",
        "Pause when arms are parallel to floor",
        "Control return to starting position"
      ],
      benefits: [
        "Isolates often-neglected rear delts",
        "Improves posture and shoulder health",
        "Counters effects of rounded shoulders",
        "Enhances upper back thickness"
      ],
      tips: [
        "Imagine squeezing a pencil between shoulder blades",
        "Use lighter weight with perfect form",
        "Keep movement slow and controlled",
        "Exhale during contraction phase",
        "Maintain neutral neck position"
      ]
    },
    {
      id: 2,
      name: "Dumbbell Lateral Raises",
      muscles: ["Lateral Deltoids", "Supraspinatus"],
      video: Videos.vid22,
      instructions: [
        "Stand with dumbbells at sides, palms facing inward",
        "Keep slight bend in elbows (10-15°)",
        "Raise arms to shoulder height forming 'T' shape",
        "Pause briefly at top (elbows slightly higher than hands)",
        "Lower slowly with control (3-4 second descent)"
      ],
      benefits: [
        "Builds shoulder width and definition",
        "Improves shoulder mobility",
        "Enhances mind-muscle connection",
        "Creates balanced shoulder development"
      ],
      tips: [
        "Imagine pouring water from cups",
        "Use lighter weights (12-15 rep range)",
        "Avoid shrugging shoulders upward",
        "Lean slightly forward to increase lateral delt activation",
        "Try alternating arms for better focus"
      ]
    },
    {
      id: 3,
      name: "Military Press (Barbell)",
      muscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps", "Upper Chest"],
      video: Videos.vid23,
      instructions: [
        "Stand with feet shoulder-width apart",
        "Grip barbell slightly wider than shoulders",
        "Clean bar to front rack position",
        "Press bar overhead until arms are straight",
        "Lower bar to chin level with control",
        "Keep core braced throughout"
      ],
      benefits: [
        "Builds overall shoulder strength and size",
        "Improves overhead mobility",
        "Enhances core stability",
        "Develops functional pressing strength"
      ],
      tips: [
        "Use power rack with safety bars",
        "Don't arch back excessively",
        "Press bar slightly back (not straight up)",
        "Keep elbows slightly in front of bar",
        "Use wrist wraps for heavy sets"
      ]
    },
    {
      id: 4,
      name: "Upright Rows (Barbell or Cable)",
      muscles: ["Lateral Deltoids", "Trapezius", "Biceps"],
      video: Videos.vid24,
      instructions: [
        "Stand holding barbell with narrow grip (6-8 inches)",
        "Keep bar close to body as you pull upward",
        "Raise elbows to shoulder height",
        "Pause briefly at top position",
        "Lower slowly with control"
      ],
      benefits: [
        "Targets side delts and traps simultaneously",
        "Improves shoulder girdle strength",
        "Enhances upper body posture",
        "Can be done with various equipment"
      ],
      tips: [
        "Don't raise above collarbone (prevents impingement)",
        "Keep shoulders relaxed (don't shrug)",
        "Use moderate weight with strict form",
        "Try cable version for constant tension",
        "Warm up rotator cuffs first"
      ]
    },
    {
      id: 5,
      name: "Face Pulls (Cable)",
      muscles: ["Rear Deltoids", "Rotator Cuff", "Trapezius"],
      video: Videos.vid25,
      instructions: [
        "Attach rope to high pulley cable",
        "Grab ends with thumbs pointing back",
        "Pull rope towards forehead while flaring elbows",
        "Squeeze rear delts at peak contraction",
        "Control return to starting position"
      ],
      benefits: [
        "Improves shoulder health and posture",
        "Strengthens rotator cuff muscles",
        "Counters effects of pressing movements",
        "Enhances rear delt development"
      ],
      tips: [
        "Use light-to-moderate weight",
        "Imagine showing your biceps at peak",
        "Keep upper arms parallel to floor",
        "Perform as warm-up and finisher",
        "Focus on quality reps over weight"
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Shoulders Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">SHOULDERS</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/SHOULDERS</span>
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

export default ShouldersIntermediate;
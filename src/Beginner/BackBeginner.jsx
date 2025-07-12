import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begBACK } from '../assets/assets';

const BackBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Assisted Pull-Ups/Chin-Ups",
      video: begBACK.assistedpullup,
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids", "Upper Back"],
      instructions: [
        "Set the assisted machine to your desired weight support.",
        "Grip the handles (palms facing away for pull-ups, toward you for chin-ups).",
        "Step onto the platform and keep your body straight.",
        "Pull yourself up until your chin clears the bar.",
        "Lower yourself slowly with control."
      ],
      benefits: [
        "Builds functional upper body strength.",
        "Progressively develops pull-up ability.",
        "Targets the entire back and arm musculature.",
        "Improves grip strength."
      ],
      tips: [
        "Focus on using your back muscles, not just your arms.",
        "Avoid swinging or using momentum.",
        "Start with more assistance and gradually reduce.",
        "Keep your core engaged throughout the movement.",
        "Full range of motion is key; go all the way down."
      ]
    },
    {
      id: 2,
      name: "Lat Pulldown Machine",
      video: begBACK.latspulldown,
      muscles: ["Latissimus Dorsi", "Biceps", "Rear Deltoids"],
      instructions: [
        "Adjust the thigh pad to secure your legs.",
        "Grip the bar slightly wider than your shoulders.",
        "Pull the bar down to your chest while leaning back slightly.",
        "Control the return to the starting position."
      ],
      benefits: [
        "Builds upper back width.",
        "Easier alternative to pull-ups.",
        "Adjustable resistance for progression.",
        "Improves posture."
      ],
      tips: [
        "Initiate the movement by squeezing your shoulder blades.",
        "Keep your elbows tracking slightly forward.",
        "Avoid using momentum from swinging.",
        "Don't pull behind your neck; this can injure your shoulders."
      ]
    },
    {
      id: 3,
      name: "Seated Cable Row",
      video: begBACK.machinerowing,
      muscles: ["Rhomboids", "Middle Trapezius", "Latissimus Dorsi"],
      instructions: [
        "Sit with your knees slightly bent.",
        "Pull the handle to your waist while keeping your chest up.",
        "Squeeze your shoulder blades together at peak contraction.",
        "Extend your arms fully for a complete stretch."
      ],
      benefits: [
        "Improves posture.",
        "Targets mid-back muscles.",
        "Low impact on joints.",
        "Counters the effects of prolonged sitting."
      ],
      tips: [
        "Imagine squeezing a pencil between your shoulder blades.",
        "Maintain a slight forward lean on extension.",
        "Use straps if your grip fatigues first.",
        "Keep the movement controlled; no jerking."
      ]
    },
    {
      id: 4,
      name: "Hyperextension",
      video: begBACK.hyperextension,
      muscles: ["Erector Spinae", "Glutes", "Hamstrings"],
      instructions: [
        "Adjust the pad to align with your hip crease.",
        "Cross your arms over your chest or hold a weight.",
        "Lower your torso until it is parallel to the floor.",
        "Raise your back to a neutral spine position."
      ],
      benefits: [
        "Strengthens the lower back.",
        "Improves spinal stability.",
        "Can help alleviate back pain.",
        "Enhances posterior chain development."
      ],
      tips: [
        "Avoid hyperextension at the top.",
        "Engage your core throughout the movement.",
        "Start with bodyweight only.",
        "Keep the movement slow and controlled.",
        "Don't round your back when lowering."
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
          <h1 className="text-5xl font-One z-10">Back</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/">Home</Link>
            <span className="text-yellow-300">/Back</span>
          </h1>
        </div>
      </div>
      {exercises.map((exercise) => (
        <div key={exercise.id} className='border-2 border-yellow-300 mx-3 mt-4 p-4'>
          <h1 className='text-white font-One text-4xl text-center mb-2'>{exercise.name}</h1>

          <div className='text-white mb-4 text-center'>
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

export default BackBeginner;

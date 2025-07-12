import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begARMS } from '../assets/assets';

const ArmsBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Standing Bicep Curls",
      muscles: ["Biceps Brachii", "Brachialis", "Forearms"],
      video: begARMS.bicep,
      instructions: [
        "Stand with feet shoulder-width apart, holding a barbell with an underhand grip.",
        "Keep your elbows close to your torso and your shoulders back.",
        "Curl the barbell upward while contracting your biceps.",
        "Pause when the bar reaches shoulder height.",
        "Slowly lower back to the starting position (3-4 second descent)."
      ],
      benefits: [
        "Builds overall bicep mass and strength.",
        "Engages forearm muscles for grip development.",
        "Allows progressive overload with weight increases.",
        "Improves mind-muscle connection with biceps."
      ],
      tips: [
        "Avoid swinging your body; keep your torso stationary.",
        "Squeeze your biceps hard at the top of the movement.",
        "Use the full range of motion without hyperextending your elbows.",
        "Start with lighter weight to perfect your form.",
        "Keep your wrists straight to prevent strain."
      ]
    },
    {
      id: 2,
      name: "Dumbbell Overhead Tricep Extensions",
      muscles: ["Triceps Brachii (All Three Heads)", "Anconeus"],
      video: begARMS.tricep1,
      instructions: [
        "Stand or sit holding one dumbbell with both hands.",
        "Press the weight overhead until your arms are fully extended.",
        "Keeping your elbows close to your ears, lower the dumbbell behind your head.",
        "Pause when your forearms reach parallel to the floor.",
        "Extend your arms back to the starting position."
      ],
      benefits: [
        "Targets all three heads of the triceps.",
        "Improves shoulder stability and mobility.",
        "Enhances arm definition and strength.",
        "Can be done seated or standing."
      ],
      tips: [
        "Keep your elbows pointing forward (don't flare outward).",
        "Move slowly through the full range of motion.",
        "Use lighter weight than you think for proper form.",
        "Engage your core to prevent back arching.",
        "Focus on the stretch at the bottom of the movement."
      ]
    },
    {
      id: 3,
      name: "Hammer Curls",
      muscles: ["Brachialis", "Biceps Brachii", "Brachioradialis"],
      video: begARMS.hammercurl,
      instructions: [
        "Stand holding dumbbells with a neutral grip (palms facing inward).",
        "Keep your elbows close to your sides and your shoulders back.",
        "Curl the weights upward while maintaining a neutral grip.",
        "Pause when the dumbbells reach shoulder height.",
        "Lower slowly with control (3-second count)."
      ],
      benefits: [
        "Develops arm thickness and width.",
        "Targets the often-neglected brachialis muscle.",
        "Reduces wrist strain compared to supinated curls.",
        "Improves functional grip strength."
      ],
      tips: [
        "Imagine hammering nails with each rep.",
        "Keep a slight bend in your elbows at the bottom position.",
        "Alternate arms or lift simultaneously.",
        "Avoid rocking your body for momentum.",
        "Squeeze at the top for peak contraction."
      ]
    },
    {
      id: 4,
      name: "Tricep Pushdown",
      muscles: ["Triceps Brachii (Especially Lateral Head)", "Anconeus"],
      video: begARMS.pushdownBIG,
      instructions: [
        "Attach a rope to a high pulley cable machine.",
        "Stand with a slight forward lean, elbows pinned to your sides.",
        "Push the rope downward until your arms are fully extended.",
        "At the bottom, pull the rope ends apart for an extra contraction.",
        "Control the return to the starting position."
      ],
      benefits: [
        "Isolates the triceps with constant tension.",
        "Improves arm definition and separation.",
        "Allows varied hand positions for different emphasis.",
        "Reduces joint stress compared to heavy presses."
      ],
      tips: [
        "Keep your elbows stationary; only your forearms should move.",
        "Lean forward slightly for better muscle engagement.",
        "Use moderate weight with perfect form.",
        "Focus on squeezing at full extension.",
        "Try single-arm variations for imbalances."
      ]
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://example.com/arms-banner.jpg"
          alt="Arms Workout Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">Arms</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/">Home</Link>
            <span className="text-yellow-300">/Arms</span>
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

export default ArmsBeginner;

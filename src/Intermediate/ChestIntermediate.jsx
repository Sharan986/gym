import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Videos } from '../assets/assets';

const ChestIntermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "Push-Ups (Weighted or Decline)",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids", "Core"],
      video: Videos.vid1,
      instructions: [
        "Start in a high plank position (hands slightly wider than shoulders)",
        "For decline: Place feet on elevated surface (bench/step)",
        "For weighted: Have partner place plate on your back",
        "Lower body until chest nearly touches the ground",
        "Push through palms to return to starting position",
        "Keep body in straight line throughout"
      ],
      benefits: [
        "Builds functional chest and core strength",
        "No equipment needed (for basic version)",
        "Improves shoulder stability",
        "Can be scaled for all fitness levels"
      ],
      tips: [
        "Engage glutes and core to prevent sagging hips",
        "Go slow (2 seconds down, 1 second up)",
        "Increase difficulty by elevating feet or adding weight",
        "Wider hand placement emphasizes chest",
        "Keep elbows at 45° angle to body"
      ]
    },
    {
      id: 2,
      name: "Incline Dumbbell Press",
      muscles: ["Upper Pectoralis Major", "Anterior Deltoids", "Triceps"],
      video: Videos.vid2,
      instructions: [
        "Set bench to 30-45 degree incline",
        "Press dumbbells up until arms are extended (not locked)",
        "Lower slowly until dumbbells reach chest level",
        "Keep wrists straight and forearms vertical",
        "Press back up along same arc"
      ],
      benefits: [
        "Targets often-underdeveloped upper chest",
        "Allows greater range of motion than barbell",
        "Improves shoulder stability",
        "Reduces strain on rotator cuffs"
      ],
      tips: [
        "Start with lighter weight to perfect form",
        "Keep feet planted firmly on ground",
        "Don't let elbows flare beyond 90°",
        "Squeeze chest at top of movement",
        "Use spotter for heavy weights"
      ]
    },
    {
      id: 3,
      name: "Flat Dumbbell Chest Press",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      video: Videos.vid3,
      instructions: [
        "Lie flat on bench with dumbbells at chest level",
        "Press weights up until arms are extended (don't lock)",
        "Lower slowly until elbows reach bench level",
        "Keep dumbbells in line with shoulders",
        "Maintain neutral wrist position"
      ],
      benefits: [
        "Builds overall chest mass and strength",
        "Allows deeper stretch than barbell press",
        "Improves muscle balance (each side works independently)",
        "Reduces shoulder strain"
      ],
      tips: [
        "Imagine 'hugging a barrel' on the way down",
        "Control the negative (3 second descent)",
        "Squeeze chest at top for 1 second",
        "Don't let dumbbells touch at top",
        "Keep slight arch in lower back"
      ]
    },
    {
      id: 4,
      name: "Incline Dumbbell Flys",
      muscles: ["Upper Pectoralis Major", "Anterior Deltoids"],
      video: Videos.vid4,
      instructions: [
        "Set bench to 30 degree incline",
        "Start with dumbbells extended above chest (palms facing)",
        "Lower arms in wide arc until parallel with shoulders",
        "Keep slight bend in elbows (like hugging a tree)",
        "Return along same arc to starting position"
      ],
      benefits: [
        "Stretches and isolates upper chest fibers",
        "Improves chest muscle definition",
        "Enhances shoulder mobility",
        "Develops mind-muscle connection"
      ],
      tips: [
        "Use lighter weight than pressing movements",
        "Control the stretch at bottom position",
        "Imagine string between dumbbells keeping them aligned",
        "Don't lower below shoulder level",
        "Squeeze chest at top of movement"
      ]
    },
    {
      id: 5,
      name: "Pec Deck Fly Machine",
      muscles: ["Pectoralis Major", "Anterior Deltoids"],
      video: Videos.vid5,
      instructions: [
        "Adjust seat height so handles are at chest level",
        "Grip handles with elbows slightly bent",
        "Bring arms together in front of chest",
        "Squeeze chest muscles at peak contraction",
        "Return slowly to stretched position"
      ],
      benefits: [
        "Isolates chest without triceps involvement",
        "Provides constant tension throughout movement",
        "Great for finishing chest workout",
        "Easy to control weight progression"
      ],
      tips: [
        "Don't use momentum - control the weight",
        "Lean slightly forward to increase chest activation",
        "Hold contraction for 1-2 seconds",
        "Adjust grip width to target different chest areas",
        "Exhale while bringing arms together"
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
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">CHEST</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/CHEST</span>
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

export default ChestIntermediate;
import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import { Videos } from '../assets/assets';

const Footer = React.lazy(() => import("../components/Footer"));

const ChestAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Weighted Push-Ups",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids", "Core"],
      video: Videos.vid6,
      instructions: [
        "Assume standard push-up position with hands slightly wider than shoulders",
        "Have partner place weight plate on your upper back",
        "Keep body straight from head to heels",
        "Lower chest until it nearly touches the ground",
        "Explode back up to starting position",
        "Maintain tight core throughout movement"
      ],
      benefits: [
        "Builds functional chest strength",
        "Improves core stability",
        "Enhances shoulder stability",
        "No equipment needed for basic version",
        "Scalable difficulty with added weight"
      ],
      tips: [
        "Start with bodyweight to master form before adding weight",
        "Keep elbows at 45° angle to body",
        "Maintain neutral spine - don't sag hips",
        "Increase weight gradually (5-10lb increments)",
        "Try diamond or wide grip variations"
      ]
    },
    {
      id: 2,
      name: "Flat Barbell Bench Press",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      video: Videos.vid7,
      instructions: [
        "Lie on flat bench with eyes under barbell",
        "Grip bar slightly wider than shoulder width",
        "Unrack bar and hold straight over chest",
        "Lower bar to mid-chest with control (3 sec)",
        "Press bar up explosively without locking elbows",
        "Keep feet planted and back slightly arched"
      ],
      benefits: [
        "Builds maximum chest mass and strength",
        "Improves upper body pressing power",
        "Allows progressive overload with weight",
        "Enhances triceps and shoulder development"
      ],
      tips: [
        "Use spotter for heavy sets",
        "Retract shoulder blades before unracking",
        "Drive through heels during press",
        "Don't bounce bar off chest",
        "Vary grip width for different emphasis"
      ]
    },
    {
      id: 3,
      name: "Incline Dumbbell Press",
      muscles: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
      video: Videos.vid8,
      instructions: [
        "Set bench to 30-45° incline",
        "Press dumbbells up until arms are extended",
        "Lower slowly until dumbbells reach chest level",
        "Keep wrists straight and forearms vertical",
        "Press back up along same arc",
        "Squeeze chest at top position"
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
        "Use spotter for heavy sets",
        "Try alternating arm presses for variation"
      ]
    },
    {
      id: 4,
      name: "Decline Cable Press",
      muscles: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
      video: Videos.vid9,
      instructions: [
        "Set cable pulleys to highest position",
        "Stand between cables with slight forward lean",
        "Press handles downward and together",
        "Squeeze chest at full extension",
        "Control return to starting position",
        "Maintain slight bend in elbows"
      ],
      benefits: [
        "Isolates lower chest fibers",
        "Provides constant tension throughout movement",
        "Improves mind-muscle connection",
        "Reduces joint stress compared to barbell"
      ],
      tips: [
        "Use moderate weight with perfect form",
        "Focus on squeezing chest at bottom",
        "Keep shoulders down and back",
        "Try single-arm variations for imbalances",
        "Adjust pulley height for different angles"
      ]
    },
    {
      id: 5,
      name: "Parallel Bar Dips (Weighted)",
      muscles: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
      video: Videos.vid10,
      instructions: [
        "Use dip belt to add weight",
        "Grip bars and lift body to starting position",
        "Lean forward slightly to emphasize chest",
        "Lower until shoulders are below elbows",
        "Press back up to full arm extension",
        "Keep core engaged throughout"
      ],
      benefits: [
        "Builds functional pressing strength",
        "Develops chest thickness",
        "Improves shoulder stability",
        "Enhances triceps development"
      ],
      tips: [
        "Start with bodyweight before adding weight",
        "Don't go too deep if shoulders feel uncomfortable",
        "Keep shoulders down away from ears",
        "Increase weight gradually (5lb increments)",
        "Focus on controlled negative (3 sec descent)"
      ]
    },
    {
      id: 6,
      name: "Pec Deck Fly Machine",
      muscles: ["Pectoralis Major", "Anterior Deltoids"],
      video: Videos.vid11,
      instructions: [
        "Adjust seat height so handles are at chest level",
        "Grip handles with elbows slightly bent",
        "Bring arms together in front of chest",
        "Squeeze pecs hard at peak contraction",
        "Control return to stretched position",
        "Keep back flat against pad"
      ],
      benefits: [
        "Isolates chest without triceps involvement",
        "Great for finishing chest workout",
        "Improves chest definition",
        "Easy to control weight progression"
      ],
      tips: [
        "Use moderate weight with perfect form",
        "Lean slightly forward to increase chest activation",
        "Hold contraction for 1-2 seconds",
        "Don't let weights touch between reps",
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
          loading="lazy"
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

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default ChestAdvanced;
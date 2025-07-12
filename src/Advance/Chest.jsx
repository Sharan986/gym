import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import { advCHEST } from '../assets/assets';

const Footer = React.lazy(() => import("../components/Footer"));

const ChestAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Weighted Push-Ups",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids", "Core"],
      video: advCHEST.pushup,
      instructions: [
        "Assume a standard push-up position with hands slightly wider than shoulders.",
        "Have a partner place a weight plate on your upper back.",
        "Keep your body straight from head to heels.",
        "Lower your chest until it nearly touches the ground.",
        "Explode back up to the starting position.",
        "Maintain a tight core throughout the movement."
      ],
      benefits: [
        "Builds functional chest strength.",
        "Improves core stability.",
        "Enhances shoulder stability.",
        "No equipment needed for the basic version.",
        "Scalable difficulty with added weight."
      ],
      tips: [
        "Start with bodyweight to master form before adding weight.",
        "Keep elbows at a 45° angle to the body.",
        "Maintain a neutral spine; don't sag your hips.",
        "Increase weight gradually in 5-10 lb increments.",
        "Try diamond or wide grip variations."
      ]
    },
    {
      id: 2,
      name: "Flat Bench Press",
      muscles: ["Pectoralis Major", "Triceps", "Anterior Deltoids"],
      video: advCHEST.bench_press,
      instructions: [
        "Lie on a flat bench with your eyes under the barbell.",
        "Grip the bar slightly wider than shoulder width.",
        "Unrack the bar and hold it straight over your chest.",
        "Lower the bar to mid-chest with control (3 seconds).",
        "Press the bar up explosively without locking your elbows.",
        "Keep your feet planted and your back slightly arched."
      ],
      benefits: [
        "Builds maximum chest mass and strength.",
        "Improves upper body pressing power.",
        "Allows progressive overload with weight.",
        "Enhances triceps and shoulder development."
      ],
      tips: [
        "Use a spotter for heavy sets.",
        "Retract your shoulder blades before unracking.",
        "Drive through your heels during the press.",
        "Don't bounce the bar off your chest.",
        "Vary grip width for different emphasis."
      ]
    },
    {
      id: 3,
      name: "Incline Dumbbell Press",
      muscles: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
      video: advCHEST.inclinedpress,
      instructions: [
        "Set the bench to a 30-45° incline.",
        "Press dumbbells up until your arms are extended.",
        "Lower slowly until the dumbbells reach chest level.",
        "Keep your wrists straight and your forearms vertical.",
        "Press back up along the same arc.",
        "Squeeze your chest at the top position."
      ],
      benefits: [
        "Targets often underdeveloped upper chest.",
        "Allows greater range of motion than barbell.",
        "Improves shoulder stability.",
        "Reduces strain on rotator cuffs."
      ],
      tips: [
        "Start with lighter weight to perfect form.",
        "Keep your feet planted firmly on the ground.",
        "Don't let your elbows flare beyond 90°.",
        "Use a spotter for heavy sets.",
        "Try alternating arm presses for variation."
      ]
    },
    {
      id: 4,
      name: "Decline Cable Press",
      muscles: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
      video: advCHEST.cablepress,
      instructions: [
        "Set cable pulleys to the highest position.",
        "Stand between cables with a slight forward lean.",
        "Press handles downward and together.",
        "Squeeze your chest at full extension.",
        "Control the return to the starting position.",
        "Maintain a slight bend in your elbows."
      ],
      benefits: [
        "Isolates lower chest fibers.",
        "Provides constant tension throughout the movement.",
        "Improves mind-muscle connection.",
        "Reduces joint stress compared to barbell."
      ],
      tips: [
        "Use moderate weight with perfect form.",
        "Focus on squeezing your chest at the bottom.",
        "Keep your shoulders down and back.",
        "Try single-arm variations for imbalances.",
        "Adjust pulley height for different angles."
      ]
    },
    {
      id: 5,
      name: "Parallel Bar Dips (Weighted)",
      muscles: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
      video: advCHEST.parallel,
      instructions: [
        "Use a dip belt to add weight.",
        "Grip the bars and lift your body to the starting position.",
        "Lean forward slightly to emphasize the chest.",
        "Lower until your shoulders are below your elbows.",
        "Press back up to full arm extension.",
        "Keep your core engaged throughout."
      ],
      benefits: [
        "Builds functional pressing strength.",
        "Develops chest thickness.",
        "Improves shoulder stability.",
        "Enhances triceps development."
      ],
      tips: [
        "Start with bodyweight before adding weight.",
        "Don't go too deep if your shoulders feel uncomfortable.",
        "Keep your shoulders down, away from your ears.",
        "Increase weight gradually in 5 lb increments.",
        "Focus on a controlled negative (3-second descent)."
      ]
    },
    {
      id: 6,
      name: "Pec Dec Fly Machine",
      muscles: ["Pectoralis Major", "Anterior Deltoids"],
      video: advCHEST.pecdec,
      instructions: [
        "Adjust the seat height so handles are at chest level.",
        "Grip the handles with your elbows slightly bent.",
        "Bring your arms together in front of your chest.",
        "Squeeze your pecs hard at peak contraction.",
        "Control the return to the stretched position.",
        "Keep your back flat against the pad."
      ],
      benefits: [
        "Isolates the chest without triceps involvement.",
        "Great for finishing a chest workout.",
        "Improves chest definition.",
        "Easy to control weight progression."
      ],
      tips: [
        "Use moderate weight with perfect form.",
        "Lean slightly forward to increase chest activation.",
        "Hold the contraction for 1-2 seconds.",
        "Don't let the weights touch between reps.",
        "Exhale while bringing your arms together."
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
          <h1 className="text-5xl font-One z-10">Chest</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/">Home</Link>
            <span className="text-yellow-300">/Chest</span>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default ChestAdvanced;

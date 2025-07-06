import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import { Videos } from '../assets/assets';

const Footer = React.lazy(() => import("../components/Footer"));

const ChestAdvanced = () => {
  const exercises = [
    {
      id: 1,
      name: "Barbell Bench Press",
      muscles: ["Chest", "Shoulders", "Triceps"],
      video: Videos.vid6,
      instructions: [
        "Lie down on a flat bench with your eyes under the barbell.",
        "Grip the barbell with hands slightly wider than shoulder-width apart.",
        "Lift the barbell off the rack and hold it straight over your chest.",
        "Lower the barbell to your mid-chest.",
        "Press the barbell back up to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Builds overall upper body strength.",
        "Increases muscle mass in the chest, shoulders, and triceps.",
        "Improves performance in sports and daily activities.",
        "Enhances bone density and joint health."
      ],
      tips: [
        "Use a spotter when lifting heavy weights.",
        "Keep your feet flat on the ground and your back flat against the bench.",
        "Breathe out while pushing the barbell and inhale while lowering it.",
        "Maintain a controlled motion to prevent injury.",
        "Avoid bouncing the barbell off your chest."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForBarbellBenchPress"
    },
    {
      id: 2,
      name: "Incline Barbell Bench Press",
      muscles: ["Upper Chest", "Shoulders", "Triceps"],
      video: Videos.vid7,
      instructions: [
        "Set the bench to a 30-45 degree incline.",
        "Lie down on the bench with your eyes under the barbell.",
        "Grip the barbell with hands slightly wider than shoulder-width apart.",
        "Lift the barbell off the rack and hold it straight over your upper chest.",
        "Lower the barbell to your upper chest.",
        "Press the barbell back up to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Targets the upper chest for balanced development.",
        "Increases muscle mass in the upper chest, shoulders, and triceps.",
        "Improves strength in the upper body.",
        "Enhances overall chest definition."
      ],
      tips: [
        "Use a spotter when lifting heavy weights.",
        "Keep your feet flat on the ground and your back flat against the bench.",
        "Breathe out while pushing the barbell and inhale while lowering it.",
        "Maintain a controlled motion to prevent injury.",
        "Avoid using too steep of an incline to prevent shoulder strain."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForInclineBarbellBenchPress"
    },
    {
      id: 3,
      name: "Decline Barbell Bench Press",
      muscles: ["Lower Chest", "Shoulders", "Triceps"],
      video: Videos.vid8,
      instructions: [
        "Set the bench to a 15-30 degree decline.",
        "Lie down on the bench with your eyes under the barbell.",
        "Grip the barbell with hands slightly wider than shoulder-width apart.",
        "Lift the barbell off the rack and hold it straight over your lower chest.",
        "Lower the barbell to your lower chest.",
        "Press the barbell back up to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Targets the lower chest for balanced development.",
        "Increases muscle mass in the lower chest, shoulders, and triceps.",
        "Improves strength in the upper body.",
        "Enhances overall chest definition."
      ],
      tips: [
        "Use a spotter when lifting heavy weights.",
        "Keep your feet secured and your back flat against the bench.",
        "Breathe out while pushing the barbell and inhale while lowering it.",
        "Maintain a controlled motion to prevent injury.",
        "Avoid using too steep of a decline to prevent shoulder strain."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForDeclineBarbellBenchPress"
    },
    {
      id: 4,
      name: "Weighted Dips",
      muscles: ["Chest", "Shoulders", "Triceps"],
      video: Videos.vid9,
      instructions: [
        "Attach a weight belt around your waist and add the desired weight.",
        "Grip the parallel bars and lift yourself up.",
        "Lean slightly forward to emphasize the chest.",
        "Lower your body until your shoulders are below your elbows.",
        "Push yourself back up to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Builds strength and muscle mass in the chest, shoulders, and triceps.",
        "Improves upper body stability and control.",
        "Enhances functional movements like pushing and lifting.",
        "Increases overall upper body definition."
      ],
      tips: [
        "Start with a light weight to master the form.",
        "Keep your shoulders down and back to avoid strain.",
        "Breathe out while pushing up and inhale while lowering.",
        "Maintain a controlled motion to prevent injury.",
        "Avoid going too low if you feel shoulder discomfort."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForWeightedDips"
    },
    {
      id: 5,
      name: "Cable Crossover",
      muscles: ["Chest", "Shoulders"],
      video: Videos.vid10,
      instructions: [
        "Set the cable pulleys to the highest position.",
        "Stand in the center of the cable machine with a slight forward lean.",
        "Grip the handles with your arms extended out to the sides.",
        "Bring your hands together in front of your chest, keeping your arms slightly bent.",
        "Slowly return to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Isolates the chest muscles for targeted strengthening.",
        "Improves muscle tone and definition.",
        "Enhances overall chest development.",
        "Provides constant tension throughout the movement."
      ],
      tips: [
        "Start with a light weight to master the form.",
        "Keep your back straight and avoid arching.",
        "Breathe out while bringing your hands together and inhale while returning.",
        "Maintain a controlled motion to prevent injury.",
        "Consult a trainer if you're unsure about your form."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForCableCrossover"
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
            <h2 className='text-yellow-200 font-One text-2xl mb-2'>How to Use:</h2>
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

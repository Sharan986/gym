import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import { Videos } from '../assets/assets';

const Footer = React.lazy(() => import("../components/Footer"));

const ChestBeginner = () => {
  const exercises = [
    {
      id: 1,
      name: "Chest Press Machine",
      muscles: ["Chest", "Shoulders", "Triceps"],
      video: Videos.vid1,
      instructions: [
        "Adjust the seat height so that the handles are at chest level.",
        "Sit down and grip the handles firmly.",
        "Push the handles forward until your arms are fully extended.",
        "Slowly return to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Strengthens the chest, shoulders, and triceps.",
        "Improves upper body strength and muscle tone.",
        "Enhances functional movements like pushing and lifting.",
        "Suitable for beginners and can be adjusted for different fitness levels."
      ],
      tips: [
        "Start with a light weight to master the form.",
        "Keep your back flat against the seat and avoid arching.",
        "Breathe out while pushing the handles and inhale while returning.",
        "Maintain a controlled motion to prevent injury.",
        "Consult a trainer if you're unsure about your form."
      ],
      image: "https://imgs.search.brave.com/c4qu6h88mtyArWiAS6xUEfONuFHxUNLK3buQyZ-b2Sg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93b3Jr/b3V0aGVhbHRoeS5j/b20vY2RuL3Nob3Av/ZmlsZXMvRk1JLVBM/MjEwMF9TdGVlbEZs/ZXgtSW5jbGluZS1D/aGVzdC1QcmVzcy1N/YWNoaW5lLndlYnA_/dj0xNzA0OTI1MTk1/JndpZHRoPTkwMA"
    },
    {
      id: 2,
      name: "Pec Deck (Butterfly Machine)",
      muscles: ["Chest", "Shoulders"],
      video: Videos.vid2,
      instructions: [
        "Adjust the seat height so that the handles are at chest level.",
        "Sit down and place your forearms against the pads.",
        "Push the pads together in front of your chest.",
        "Slowly return to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Isolates the chest muscles for targeted strengthening.",
        "Improves muscle tone and definition.",
        "Enhances overall chest development.",
        "Suitable for beginners and can be adjusted for different fitness levels."
      ],
      tips: [
        "Start with a light weight to master the form.",
        "Keep your back flat against the seat and avoid arching.",
        "Breathe out while pushing the pads and inhale while returning.",
        "Maintain a controlled motion to prevent injury.",
        "Consult a trainer if you're unsure about your form."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForPecDeck"
    },
    {
      id: 3,
      name: "Incline Chest Press Machine",
      muscles: ["Upper Chest", "Shoulders", "Triceps"],
      video: Videos.vid3,
      instructions: [
        "Adjust the seat height so that the handles are at chest level.",
        "Sit down and grip the handles firmly.",
        "Push the handles forward and upward until your arms are fully extended.",
        "Slowly return to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Strengthens the upper chest, shoulders, and triceps.",
        "Improves upper body strength and muscle tone.",
        "Enhances functional movements like pushing and lifting.",
        "Suitable for beginners and can be adjusted for different fitness levels."
      ],
      tips: [
        "Start with a light weight to master the form.",
        "Keep your back flat against the seat and avoid arching.",
        "Breathe out while pushing the handles and inhale while returning.",
        "Maintain a controlled motion to prevent injury.",
        "Consult a trainer if you're unsure about your form."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForInclineChestPress"
    },
    {
      id: 4,
      name: "Dumbbell Bench Press",
      muscles: ["Chest", "Shoulders", "Triceps"],
      video: Videos.vid4,
      instructions: [
        "Lie down on a flat bench with a dumbbell in each hand, resting on your thighs.",
        "Lift the dumbbells one at a time to shoulder width.",
        "Press the dumbbells upward until your arms are fully extended.",
        "Slowly lower the dumbbells back to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Strengthens the chest, shoulders, and triceps.",
        "Improves upper body strength and muscle tone.",
        "Enhances functional movements like pushing and lifting.",
        "Allows for a greater range of motion compared to barbell bench press."
      ],
      tips: [
        "Start with a light weight to master the form.",
        "Keep your feet flat on the ground and your back flat against the bench.",
        "Breathe out while pushing the dumbbells and inhale while returning.",
        "Maintain a controlled motion to prevent injury.",
        "Use a spotter if lifting heavy weights."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForDumbbellBenchPress"
    },
    {
      id: 5,
      name: "Resistance Band Chest Fly",
      muscles: ["Chest", "Shoulders"],
      video: Videos.vid5,
      instructions: [
        "Attach the resistance band to a stable object at chest height.",
        "Stand with your back to the attachment point and hold the band handles with your arms extended out to the sides.",
        "Bring your hands together in front of your chest, keeping your arms slightly bent.",
        "Slowly return to the starting position.",
        "Repeat for the desired number of repetitions."
      ],
      benefits: [
        "Strengthens the chest and shoulders.",
        "Improves muscle tone and definition.",
        "Enhances overall chest development.",
        "Provides constant tension throughout the movement."
      ],
      tips: [
        "Start with a light resistance band to master the form.",
        "Keep your back straight and avoid arching.",
        "Breathe out while bringing your hands together and inhale while returning.",
        "Maintain a controlled motion to prevent injury.",
        "Consult a trainer if you're unsure about your form."
      ],
      image: "https://imgs.search.brave.com/ExampleImageURLForResistanceBandChestFly"
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

export default ChestBeginner;

import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import { begCHEST } from '../assets/assets';
import Footer  from "../components/Footer";

const ChestBeginner = () => {
  
const exercises = [
  {
    id: 1,
    name: "PUSH UPS",
    muscles: ["Chest", "Shoulders", "Triceps"],
    video: begCHEST.pushups,
    instructions: [
      "Start in a high plank position with your hands placed slightly wider than shoulder-width apart.",
      "Keep your body in a straight line from head to heels.",
      "Lower your body until your chest nearly touches the floor, keeping your elbows tucked in.",
      "Push through your palms to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    benefits: [
      "Strengthens the chest, shoulders, arms, and core.",
      "Improves overall upper body strength and endurance.",
      "Enhances stability and balance.",
      "Can be modified for different fitness levels and goals.",
      "Requires no equipment, making it accessible for everyone."
    ],
    tips: [
      "Keep your core engaged throughout the movement to protect your lower back.",
      "Avoid letting your hips sag or rise too high to maintain proper form.",
      "Breathe in as you lower your body and exhale as you push up.",
      "Start with knee push-ups if full push-ups are too challenging.",
      "Consult a trainer if you need help with form or modifications."
    ],
    image: "https://imgs.search.brave.com/c4qu6h88mtyArWiAS6xUEfONuFHxUNLK3buQyZ-b2Sg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93b3Jr/b3V0aGVhbHRoeS5j/b20vY2RuL3Nob3Av/ZmlsZXMvRk1JLVBM/MjEwMF9TdGVlbEZs/ZXgtSW5jbGluZS1D/aGVzdC1QcmVzcy1N/YWNoaW5lLndlYnA_/dj0xNzA0OTI1MTk1/JndpZHRoPTkwMA"
  },
  {
    id: 2,
    name: "Machine Chest Press (Incline)",
    muscles: ["Upper Chest", "Shoulders", "Triceps"],
    video: begCHEST.inclinechest,
    instructions: [
      "Adjust the seat height so that the handles are at upper chest level.",
      "Sit down and grip the handles firmly.",
      "Push the handles forward and upward until your arms are fully extended.",
      "Slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    benefits: [
      "Targets the upper chest, enhancing muscle tone and strength.",
      "Improves overall upper body strength and endurance.",
      "Enhances functional movements like pushing and lifting.",
      "Suitable for different fitness levels with adjustable resistance."
    ],
    tips: [
      "Start with a lighter weight to master the form.",
      "Keep your back flat against the seat to avoid strain.",
      "Exhale while pushing the handles and inhale while returning.",
      "Maintain a controlled motion to maximize effectiveness.",
      "Consult a trainer for personalized adjustments."
    ],
    image: "https://imgs.search.brave.com/ExampleImageURLForInclineChestPress"
  },
  {
    id: 3,
    name: "Flat Chest Press ",
    muscles: ["Chest", "Shoulders", "Triceps"],
    video: begCHEST.benchpress,
    instructions: [
      "Adjust the seat so that the handles are aligned with your mid-chest.",
      "Sit down and grip the handles firmly.",
      "Push the handles forward until your arms are fully extended.",
      "Slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    benefits: [
      "Strengthens the chest, shoulders, and triceps.",
      "Improves muscle tone and overall upper body strength.",
      "Enhances pushing movements and functional fitness.",
      "Adjustable for various fitness levels and goals."
    ],
    tips: [
      "Begin with a lighter weight to ensure proper form.",
      "Keep your back flat against the seat throughout the exercise.",
      "Exhale on exertion and inhale on the return for better performance.",
      "Use controlled movements to prevent injury.",
      "Consider consulting a trainer for optimal settings."
    ],
    image: "https://imgs.search.brave.com/ExampleImageURLForFlatChestPress"
  },
  {
    id: 4,
    name: "Pec Dec Fly",
    muscles: ["Chest", "Shoulders"],
    video: begCHEST.pecde,
    instructions: [
      "Adjust the seat height so that the handles are at chest level.",
      "Sit down and place your forearms against the pads.",
      "Bring your arms together in front of your chest.",
      "Slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    benefits: [
      "Isolates the chest muscles, improving muscle tone and definition.",
      "Enhances overall chest development and strength.",
      "Provides a focused workout for the pectoral muscles.",
      "Suitable for all fitness levels with adjustable resistance."
    ],
    tips: [
      "Start with a lighter resistance to master the form.",
      "Keep your back flat against the seat and avoid arching.",
      "Exhale while bringing your arms together and inhale while returning.",
      "Maintain a controlled motion to maximize muscle engagement.",
      "Consult a trainer for personalized adjustments and form checks."
    ],
    image: "https://imgs.search.brave.com/ExampleImageURLForPecDeckFly"
  }
];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="Chest Workout Banner"
          className="w-screen h-60 lg:h-[24rem] object-cover object-center scale-125"
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

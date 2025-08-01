import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { begCHEST } from '../assets/assets';
import {  DSC06120R } from '../Imgs/Imgs';

const ChestBeginner = () => {

  const exercises = [
    {
      id: 1,
      name: "Push Ups",
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
      name: "Flat Chest Press",
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
      <div className="bg-[#070915] min-h-screen font-One">
        {/* Modern Hero Section */}
        <div className="relative">
          <img
            src={DSC06120R}
            alt="Chest Workout Banner"
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] object-cover object-center"
          />
          
          {/* Clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
                Beginner • Chest Workout
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
                CHEST TRAINING
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6">
                <Link 
                  to='/WorkoutGuide' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  GUIDE
                </Link>
                <span className="text-gray-400">/</span>
                <Link 
                  to='/WorkoutGuide/Beginner' 
                  className="text-white hover:text-[#48D3A3] transition-colors duration-300"
                >
                  BEGINNER
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#48D3A3]">CHEST</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
                Build upper body strength with targeted chest exercises
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50  overflow-hidden hover:border-[#48D3A3]/30 transition-all duration-300">
                  
                  {/* Exercise Header */}
                  <div className="p-6 sm:p-8 border-b border-gray-700/50">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-One text-white mb-4">
                      {exercise.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-400 font-M">Targets:</span>
                      {exercise.muscles.map((muscle, i) => (
                        <span key={i} className="px-3 py-1 bg-[#48D3A3]/20 text-[#48D3A3] text-xs font-medium rounded-full">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video and Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
                    
                    {/* Video Section */}
                    <div className="order-2 lg:order-1">
                      <div className="bg-black/50 rounded-xl overflow-hidden border border-gray-600/30">
                        <video 
                          className="w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 object-cover" 
                          controls={false} 
                          preload="metadata" 
                          autoPlay 
                          muted 
                          loop
                          playsInline
                        >
                          <source src={exercise.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="order-1 lg:order-2 space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-One text-[#48D3A3] mb-4">
                          How to Perform
                        </h3>
                        <ol className="space-y-2">
                          {exercise.instructions.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base leading-relaxed">
                              <span className="flex-shrink-0 w-6 h-6 bg-[#48D3A3] text-black text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Benefits and Tips Grid */}
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 pt-0">
                    
                    {/* Benefits */}
                    <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-One text-[#FCDE3B] mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-2">
                        {exercise.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-[#FCDE3B] mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-br from-[#48D3A3]/10 to-[#48D3A3]/5 border border-[#48D3A3]/20 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-One text-[#48D3A3] mb-4">
                        Pro Tips
                      </h3>
                      <ul className="space-y-2">
                        {exercise.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-M text-sm sm:text-base">
                            <span className="text-[#48D3A3] mt-1">★</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default ChestBeginner;

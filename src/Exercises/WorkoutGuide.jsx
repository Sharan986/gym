import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const WorkoutGuide = () => {
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One">
          <div className="relative overflow-hidden">
       <img
         src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
         alt="About Us Banner"
         className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
       />
       <div className="absolute bottom-8 left-8 text-white">
         <h1 className="text-5xl font-One lg:text-7xl z-10">WORKOUT GUIDE</h1>
         <h1 className="font-One text-2xl mt-4 lg:text-5xl">
           <Link to='/'>HOME</Link>
           <span className="text-yellow-300 lg:text-4xl">/WORKOUT GUIDE</span>
         </h1>
       </div>
     </div>
        <div className="mx-7 pb-16">
          <p className="text-4xl text-gray-200 mt-2 uppercase pb-5">Your Fitness Journey Starts Here!</p>
          <p className="text-gray-300 font-DM text-xl  ">
            Regular workouts offer numerous benefits for both body and mind. They strengthen muscles, improve cardiovascular health, and boost endurance, enhancing overall physical fitness. Exercise helps maintain a healthy weight by burning calories and increasing metabolism. It reduces stress and anxiety by releasing endorphins, promoting mental well-being.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#070915] font-One mx-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   w-full">
          {/* Beginner Box */}
          <Link to="/WorkoutGuide/Beginner" className="no-underline">
            <div className="relative border-2 border-white overflow-hidden shadow-xl  transition-transform duration-300 h-96 bg-gradient-to-r ">
              <img
                src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=870&auto=format&fit=crop"
                alt="Beginner workout"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Beginner</h2>
                <p className="text-xl">
                  Start your fitness journey with simple and effective routines.
                </p>
              </div>
            </div>
          </Link>

          {/* Intermediate Box */}
          <Link to="/WorkoutGuide/Intermediate" className="no-underline">
            <div className="relative  border-2 border-white overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 h-96 bg-gradient-to-r from-gray-800 to-gray-900">
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1740&auto=format&fit=crop"
                alt="Intermediate workout"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Intermediate</h2>
                <p className="text-xl">
                  Take your workout to the next level with guided programs.
                </p>
              </div>
            </div>
          </Link>

          {/* Advanced Box */}
          <Link to="/WorkoutGuide/Advance" className="no-underline">
            <div className="relative   border-2 border-white overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 h-96 bg-gradient-to-r from-gray-800 to-gray-900">
              <img
                src="https://images.unsplash.com/photo-1604335788369-94f349ae5243?q=80&w=870&auto=format&fit=crop"
                alt="Advanced workout"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Advanced</h2>
                <p className="text-xl">
                  Push limits with intense and personalized training plans.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WorkoutGuide;

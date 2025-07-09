import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const WorkoutGuide = () => {
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One">
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
            alt="Workout Banner"
            className="w-full h-60 object-cover object-center opacity-70"
          />
          <div className="absolute bottom-0 left-0 text-white p-10">
           <h1 className="text-5xl font-One">Workout-Guide</h1>
           <h1 className="font-One text-2xl mt-4">
             <Link to="/" className="hover:underline">HOME</Link>
             <span className="text-yellow-300"> / Workout-Guide</span>
           </h1>
         </div>
        </div>
        <div className="px-4 md:px-8 py-8">
          <p className="text-gray-300 font-DM text-lg  mx-auto max-w-6xl">
            Regular workouts offer numerous benefits for both body and mind. They strengthen muscles, improve cardiovascular health, and boost endurance, enhancing overall physical fitness. Exercise helps maintain a healthy weight by burning calories and increasing metabolism. It reduces stress and anxiety by releasing endorphins, promoting mental well-being.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen py-12 bg-[#070915] font-One">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl w-full">
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
            <div className="relative  border-2 border-white overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 h-96 bg-gradient-to-r from-gray-800 to-gray-900">
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

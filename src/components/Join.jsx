import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="bg-[#FCDE3B] flex flex-col md:flex-row justify-between items-center font-One mt-2 mx-8">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl pt-5 text-center md:text-left">
          Ready to Transform Your Workout Routine?
        </p>
       
      </div>
      <div className="flex justify-center w-full md:w-1/2 p-4">
        <Link to="/WorkoutGuide" className="w-full md:w-auto">
          <button className="border-2 pr-4 md:pr-8 lg:pr-12 xl:pr-20 text-3xl md:text-4xl lg:text-5xl xl:text-7xl bg-[#070915] text-[#FCDE3B] mb-3 p-3 md:p-4 lg:p-5 xl:p-6 w-full">
            Workout With Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

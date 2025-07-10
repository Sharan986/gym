import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="bg-[#FCDE3B] flex flex-col md:flex-row justify-between items-center font-One mt-2 mx-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-3 pt-5 text-center md:text-left">
          Join Our Gym and Start
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-3 text-center md:text-left">
          Your Fitness Journey Today
        </p>
      </div>
      <div className="flex justify-center w-full md:w-1/2 p-4">
        <Link to="/JoinUs" className="w-full md:w-auto">
          <button className="border-2 pr-4 md:pr-8 lg:pr-12 xl:pr-20 text-3xl md:text-4xl lg:text-5xl xl:text-7xl bg-[#070915] text-[#FCDE3B] mb-3 p-3 md:p-4 lg:p-5 xl:p-6 w-full">
            JOIN NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

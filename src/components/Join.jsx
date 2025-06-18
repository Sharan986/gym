import React from "react";
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <>
      <div className="bg-[#FCDE3B] flex flex-col mx-7 justify-center gap-5 items-center font-One h-fit  mt-2">
        <p className="text-3xl text-center mx-3 pt-5 sm:text-5xl">
          Join Our Gym and Start Your Fitness Journey Today
        </p>
        <Link to="/JoinUs">
          {" "}
          <button className="border-2 text-4xl bg-[#070915] text-[#FCDE3B] mb-3 p-4 ">
            JOIN NOW
          </button>
        </Link>
      </div>
    </>
  );
};

export default Join;

import React from 'react';
import { Link } from 'react-router-dom';
import Boss2 from "../assets/BOSS2.jpg";

const WkGuid = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-center mx-7 md:py-16 gap-10'>
        {/* Text Content */}
        <div className='w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1'>
          <h1 className='text-2xl italic font-One text-[#48D3A3] text-left mb-4'>
            Workout Guide
          </h1>
          <h2 className='text-5xl font-One text-white text-left mb-6'>
            Stronger Faster Healthier Happier Fitter
          </h2>

          <p className='text-lg sm:text-lg font-M text-gray-400 text-left mb-6 sm:mb-8'>
            Our workout guide adapts to all levels—from beginners to advanced athletes. Each exercise includes step-by-step instructions, proper form cues, and modifications to ensure safe, effective training. Focus on consistency first, intensity second.
          </p>

          <p className='text-lg sm:text-lg font-M text-gray-400 text-left mb-6 sm:mb-8'>
            Beginners: Start with 2-3 weekly sessions, mastering technique before adding weight. Intermediate/Advanced: Use progressive overload and varied routines to break plateaus. Recovery is just as crucial as the workout itself.
          </p>

          {/* Button */}
          <Link to='/WorkoutGuide' className='w-full sm:w-auto'>
            <div className="bg-[#FCDE3B] hover:bg-[#f8d524] transition-colors duration-300 font-One h-12 sm:h-15 flex justify-center items-center shadow-lg sm:w-auto px-4">
              <div className="text-3xl sm:text-2xl md:text-3xl text-black">
                Workout Guide
              </div>
            </div>
          </Link>
        </div>

        {/* Image */}
        <div className='w-full lg:w-1/2 flex justify-center order-1 lg:order-2'>
          <img
            src="https://framerusercontent.com/images/WJFi2cgxAQot5SoG1L0KXIYoY8.png?scale-down-to=1024"
            alt="Workout Guide"
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-xl object-cover'
          />
        </div>
      </div>

      <div className="flex justify-center mx-8 mt-10">
        <img
          src={Boss2}
          alt="Boss"
          className="lg:h-[60vw] w-full object-top object-cover"
        />
      </div>
    </>
  );
};

export default WkGuid;

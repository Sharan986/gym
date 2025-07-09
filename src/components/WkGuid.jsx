import React from 'react';
import { Link } from 'react-router-dom';

const WkGuid = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between  mx-6 max-w-7xl sm:px-6 lg:px-8 py-10 md:py-16'>
      {/* Text Content */}
      <div className='w-full lg:w-1/2 flex flex-col  lg:items-start mb-8 lg:mb-0 lg:pr-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-One text-[#48D3A3]  lg:text-left mb-4'>
          Workout Guide
        </h1>
        <h2 className='text-2xl sm:text-3xl italic font-One text-white  lg:text-left mb-6'>
          Stronger Faster Healthier Happier Fitter
        </h2>
        <p className='text-base sm:text-lg font-DM text-gray-400  lg:text-left mb-6 sm:mb-8'>
          Our workout guide is designed to help you achieve your fitness goals, whether you're a beginner or an experienced athlete. We provide detailed instructions and tips for various exercises.
        </p>
        
           {/* Image */}
      <div className='w-full lg:w-1/2 flex justify-center mt-1 lg:mt-0'>
        <img
          src="https://framerusercontent.com/images/WJFi2cgxAQot5SoG1L0KXIYoY8.png?scale-down-to=1024"
          alt="Workout Guide"
          className='w-full max-w-md lg:max-w-lg xl:max-w-xl  shadow-xl object-cover'
        />
      </div>

        {/* Button */}
        <Link 
          to='/WorkoutGuide' 
          className='w-full sm:w-3/4 lg:w-auto'
        >
          <div className="bg-[#FCDE3B] hover:bg-[#f8d524] transition-colors duration-300 font-One h-30 sm:h-20  flex justify-center   shadow-lg">
            <div className="text-2xl sm:text-2xl md:text-3xl  text-black">
              Workout-Guide
            </div>
          </div>
        </Link>
      </div>

   
    </div>
  );
};

export default WkGuid;
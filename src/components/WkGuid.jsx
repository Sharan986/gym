import React from 'react';
import { Link } from 'react-router-dom';


const WkGuid = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-center mx-7 md:py-16 gap-10'>
        {/* Text Content */}
        <div className='w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1'>
          <h1 className='text-3xl italic font-One text-[#48D3A3] text-left mb-4'>
            Workout Guide
          </h1>
          <h2 className='text-4xl md:text-5xl font-One text-white text-left mb-6'>
            Stronger Faster Healthier Happier Fitter
          </h2>
         <p className='text-lg sm:text-lg font-DM text-gray-300 text-left mb-6 sm:mb-8'>
  Our workout guide is designed for all levels, offering step-by-step instructions and modifications for safe and effective training.
</p>
<p className='text-lg sm:text-lg font-DM text-gray-300 text-left mb-6 sm:mb-8'>
  Beginners should start with 2-3 weekly sessions, focusing on technique.
</p>

          {/* Button */}
          <Link to='/WorkoutGuide' className='w-full sm:w-auto'>
            <div className="bg-[#FCDE3B] hover:bg-[#f8d524] transition-colors duration-300 font-One h-12 sm:h-15 flex justify-center items-center shadow-lg w-full sm:w-auto px-4">
              <div className="text-xl sm:text-2xl md:text-3xl text-black">
                Workout Guide
              </div>
            </div>
          </Link>
        </div>
        {/* Image - Hidden on mobile screens */}
        <div className='w-full lg:w-1/2 justify-center order-1 lg:order-2 hidden md:flex'>
          <img
            src="https://framerusercontent.com/images/WJFi2cgxAQot5SoG1L0KXIYoY8.png?scale-down-to=1024"
            alt="Workout Guide"
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-xl object-cover'
          />
        </div>
      </div>
    
    </>
  );
};

export default WkGuid;

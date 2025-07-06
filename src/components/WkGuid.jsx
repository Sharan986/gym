import React from 'react';
import Button from './Button';

const WkGuid = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center mx-4 mt-10 mb-2 p-4'>
      <div className='w-full lg:w-1/2 flex flex-col lg:items-start mb-6 lg:mb-0'>
        <h1 className='text-xl md:text-5xl font-One text-[#48D3A3]  lg:text-left mb-4'>
          Workout Guide
        </h1>
        <h1 className='text-3xl italic font-One text-white'>Stronger Faster Healthier Happier Fitter</h1>
        <p className='text-base md:text-lg font-DM text-gray-400 mt-2 lg:text-left'>
          Our workout guide is designed to help you achieve your fitness goals, whether you're a beginner or an experienced athlete. We provide detailed instructions and tips for various exercises.
        </p>
        <div className='w-full lg:w-1/2 flex justify-center mt-3 mb-3'>
          <img
            src="https://framerusercontent.com/images/WJFi2cgxAQot5SoG1L0KXIYoY8.png?scale-down-to=1024"
            alt="Workout Guide"
            className='w-full max-w-md'
          />
        </div>
        <div className="mt-4 bg-[#FCDE3B] font-One h-20 w-full flex justify-center items-center  lg:justify-start">
           <div className="text-3xl md:text-2xl font-bold">Workout-Guide</div>
         </div>
      </div>
    </div>
  );
};

export default WkGuid;

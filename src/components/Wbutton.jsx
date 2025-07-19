import React from 'react';

const Wbutton = ({ text = 'Click Me', className = '' }) => {
  return (
    <div className='w-40 md:w-52 flex justify-center items-center'>
      <button
        className={`text-[#FCDE3B] border-2 border-[#FCDE3B] bg-transparent hover:bg-[#53F0B8] w-full h-16 font-One font-semibold ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Wbutton;

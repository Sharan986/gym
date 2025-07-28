import React from 'react';

const Wbutton = ({ text = 'Click Me', className = '', onClick, disabled = false }) => {
  return (
    <div className="w-40 sm:w-44 md:w-52 lg:w-56 flex justify-center items-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative
          text-[#FCDE3B] font-One font-semibold 
          border-2 border-[#FCDE3B] 
          bg-transparent hover:bg-[#48D3A3] hover:text-black hover:border-[#48D3A3]
          w-full h-12 sm:h-14 md:h-16
          transition-all duration-300 ease-in-out
          hover:shadow-lg hover:shadow-[#48D3A3]/30
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-[#48D3A3] focus:ring-offset-2 focus:ring-offset-black
          ${className}
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default Wbutton;

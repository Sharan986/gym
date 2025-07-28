import React from 'react';

const Button = ({ text = 'Click Me', className = '', onClick, disabled = false }) => {
  return (
    <div className="w-40 sm:w-44 md:w-52 lg:w-56 flex justify-center items-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative
          bg-[#FCDE3B] text-black font-One font-semibold 
          hover:bg-[#48D3A3] hover:text-white
          border-2 border-[#FCDE3B] hover:border-[#48D3A3]
          w-full h-16 md:h-16
          transition-all duration-300 ease-in-out
          hover:shadow-lg hover:shadow-[#FCDE3B]/30
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-[#48D3A3] focus:ring-offset-2 focus:ring-offset-black
          transform hover:scale-105
          ${className}
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

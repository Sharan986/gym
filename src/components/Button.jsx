import React from 'react';

const Button = ({ text = 'Click Me', className = '' }) => {
  return (
    <div className='w-44 md:w-52  flex justify-center items-center'> {/* Add width here */}
      <button
        className={`bg-[#FCDE3B] hover:bg-[#53F0B8] w-full h-16   font-Two font-semibold  ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

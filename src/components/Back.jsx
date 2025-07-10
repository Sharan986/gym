import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will take you back to the previous page
  };

  return (
    <button onClick={goBack} className='bg-white font-One text-4xl w-32 text-[#53f0b8] cursor-pointer flex items-center justify-center'>
      Back
    </button>
  );
};

export default BackButton;

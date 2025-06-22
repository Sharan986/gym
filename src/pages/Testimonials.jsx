import React from 'react';
import Review from '../components/Review'; // Adjust the import path as necessary
import BOSSD from '../assets/BOSSD.jpeg'; // Adjust the import path as necessary

const Testimonials = () => {
  return (
    <div className='font-One text-white px-7 py-3 md:py-12 lg:py-16'>
      {/* Container for centering content */}
      <div className='max-w-7xl mx-auto'>

        {/* Responsive Image */}
        <div className='w-full flex justify-center items-center mb-8'>
          <img 
            src={BOSSD} // Adjust the path as necessary
            alt="Testimonial"
            className='max-w-full h-auto object-contain' />
        </div>

        {/* Review Component */}
        <Review />
        
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import Review from '../components/Review'; // Adjust the import path as necessary
import BOSSD from '../assets/BOSSD.jpeg'; // Adjust the import path as necessary
import PhotoGrid from '../components/PhotoGrid';

const Testimonials = () => {
  return (
    <div className='font-One text-white px-7 py-10 md:py-12 '>
      {/* Container for centering content */}
      <div className='max-w-7xl mx-auto'>
       <PhotoGrid />
        {/* Responsive Image */}
         <Review />

        {/* Review Component */}
     
 
      </div>
    </div>
  );
};

export default Testimonials;

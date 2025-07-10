import React from 'react';
import Review from '../components/Review'; // Adjust the import path as necessary
import BOSSD from '../assets/BOSSD.jpeg'; // Adjust the import path as necessary
import PhotoGrid from '../components/PhotoGrid';

const Testimonials = () => {
  return (
    <div className='font-One text-white mt-10 '>
      {/* Container for centering content */}
      <div className='mx-9 '>
       <PhotoGrid />
        {/* Responsive Image */}
         <Review />

        {/* Review Component */}
     
 
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import Review from '../components/Review'; // Adjust the import path as necessary
import BOSSD from '../assets/BOSSD.jpeg'; // Adjust the import path as necessary
import PhotoGrid from '../components/PhotoGrid';
import Boss2 from "../assets/BOSS2.jpg";


const Testimonials = () => {
  return (
    <>
    
   
    <div className='font-One text-white mt-10 '>
      {/* Container for centering content */}
      <div className='mx-9 '>
       <PhotoGrid />

        {/* Photo Grid Component */}
          <div className="flex justify-center mx-2 mt-5">
        <img
          src={Boss2}
          alt="Boss"
          className="lg:h-[60vw] w-full object-top object-cover"
        />
      </div>
        {/* Responsive Image */}
         <Review />

        {/* Review Component */}
     
 
      </div>
    </div>
     </>
  );
};

export default Testimonials;

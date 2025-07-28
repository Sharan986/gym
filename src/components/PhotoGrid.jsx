import React from 'react';
import { Link } from "react-router-dom";

import Icon from '../components/Icon';
import { DSC06176, DSC06244 } from '../Imgs/Imgs';
import { DSC06205 } from '../Imgs/Imgs';
import { FTCollection } from '../FT/ft';



const PhotoGrid = () => {

  return (
    <>
      
      <section 
        className="text-white text-xl mt-16 sm:mt-20 md:mt-24 lg:mx-24 mx-6 mb-3" 
        aria-labelledby="gallery-heading"
      >
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Icon/>
          <header id="gallery-heading" className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-One text-[#48D3A3]">
            Our Gallery
          </header>
        </div>
        
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-One text-white mb-2 sm:mb-3 uppercase leading-tight'>
          No Weakness Allowed
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-M mb-6 sm:mb-8 max-w-full sm:max-w-2xl md:max-w-3xl leading-relaxed">
          Experience the energy and dedication at OneRepMaax Gym through our photo gallery showcasing 
          state-of-the-art equipment, training sessions, and our vibrant fitness community.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5
                        h-[30vh] xs:h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh]">
          {/* Left stacked images */}
          <div className="row-span-1 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={DSC06176} 
              alt={DSC06176} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
            />
          </div>
          <div className="row-span-1 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={DSC06205} 
              alt={DSC06205} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
             
            />
          </div>

          {/* Large featured image */}
          <div className="col-span-2 row-span-1 col-start-2 row-start-1 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300 relative">
            <img 
              src={FTCollection.z30} 
              alt={FTCollection.z30} 
              className="w-full h-full object-cover object-center transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
             
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Two bottom right images */}
          <div className="col-start-2 row-start-2 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={DSC06244} 
              alt={DSC06244} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
             
            />
          </div>
          <div className="col-start-3 row-start-2 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={FTCollection.z8} 
              alt={FTCollection.z8} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
             
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <Link 
            to="/Gallery"
            className="group block w-full"
            aria-label="View complete gallery of OneRepMaax Gym photos and facility tour"
           
          >
            <button className="w-full h-12 sm:h-16 md:h-18 lg:h-20 bg-gradient-to-r from-[#FCDE3B] via-[#F5D632] to-[#FCDE3B] text-[#070915] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-M font-bold uppercase tracking-wider transition-all duration-300 transform group-hover:scale-[1.02] sm:group-hover:scale-105 group-hover:shadow-xl sm:group-hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <span className="font-M">View Gallery</span>
                <span className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 font-One">→</span>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 sm:via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 sm:duration-1000"></div>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PhotoGrid;

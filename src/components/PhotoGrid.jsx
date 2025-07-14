import React from 'react';
import { Link } from "react-router-dom";
import { gallery } from '../assets/Gallery/gallery';
import Icon from '../components/Icon';

const PhotoGrid = () => {
  const photos = [
    { id: 1, url: gallery.f1, alt: 'Image 1' },
    { id: 2, url: gallery.e4, alt: 'Image 2' },
    { id: 3, url: gallery.ft8, alt: 'Image 3' },
    { id: 4, url: gallery.f4, alt: 'Image 4' },
    { id: 5, url: gallery.ft13, alt: 'Image 5' },
  ];

  return (
    <div className="w-full">
     <div className="flex justfy-center items-center gap-2">
        <Icon/>
        <header className="text-2xl lg:text-center text-[#48D3A3]">Our Gallery</header>

      </div>
      <h2 className='text-4xl font-One text-white mb-6'>
        No Weakness Allowed
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 
                      h-[40vh] sm:h-[50vh] md:h-[80vh]">
        {/* Left stacked images */}
        <div className="row-span-1 overflow-hidden">
          <img src={photos[0].url} alt={photos[0].alt} className="w-full h-full object-cover" />
        </div>
        <div className="row-span-1 overflow-hidden">
          <img src={photos[1].url} alt={photos[1].alt} className="w-full h-full object-cover" />
        </div>

        {/* Large top right image */}
        <div className="col-span-2 row-span-1 col-start-2 row-start-1 overflow-hidden">
          <img src={photos[2].url} alt={photos[2].alt} className="w-full h-full object-cover object-center" />
        </div>

        {/* Two small bottom right images */}
        <div className="col-start-2 row-start-2 overflow-hidden">
          <img src={photos[3].url} alt={photos[3].alt} className="w-full h-full object-cover" />
        </div>
        <div className="col-start-3 row-start-2 overflow-hidden">
          <img src={photos[4].url} alt={photos[4].alt} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-6">
        <Link to="/Gallery">
          <button className="w-full h-24 bg-[#FCDE3B] text-black text-5xl">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGrid;

import React from 'react';
import { Link } from "react-router-dom";

const PhotoGrid = () => {
  const photos = [
    {
      id: 1,
      url: 'https://imgs.search.brave.com/gvE-uS8ZlYvKAG4hdhLmDYAXeWHp7RuRnBFFmi9dT1c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Z3ltLXdlaWdodHMu/anBnP3dpZHRoPTEw/MDAmZm9ybWF0PXBq/cGcmZXhpZj0wJmlw/dGM9MA',
      alt: 'Nature 1'
    },
    {
      id: 2,
      url: 'https://imgs.search.brave.com/veinENOs9ylLJ7G7ER_6QeV6_OZXTC7EME_1D5wUzoI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Ym94aW5nLWd5bS13/b3Jrb3V0LmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA',
      alt: 'Nature 2'
    },
    {
      id: 3,
      url: 'https://imgs.search.brave.com/9HIFAXgya0sDw0-annh73Y-HX7SzoIml0qrIYc6lFI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC80NzN6b2M0/MDU0N3AvM2pYMGth/M1VnSzlzVk92ck10/Uzh1bi9jYmFiOWUx/NGQ5ZDJhNzFjOGVi/N2U4MmZhY2I3ZTBl/YS9wZi1tZW1iZXJz/LWd5bS53ZWJwP2Zt/PXdlYnA',
      alt: 'Nature 3'
    },
  ];

  return (
    <div className="">
       <h1 className='text-2xl italic font-One text-[#48D3A3] text-left mb-4'>
          Our Gallery
        </h1>
        <h2 className='text-4xl   font-One text-white text-left mb-6'>
          No Weakness Allowed
        </h2>

      <div className="grid grid-cols-1 gap-2 mx-2">
        {/* First image, spanning full width */}
        <div className="relative  overflow-hidden h-64">
          <img
            src={photos[0].url}
            alt={photos[0].alt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* Container for the next two images, side by side */}
        <div className="grid grid-cols-2 gap-2">
          <div className="relative  overflow-hidden h-48">
            <img
              src={photos[1].url}
              alt={photos[1].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden h-48">
            <img
              src={photos[2].url}
              alt={photos[2].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/Gallery">
          <button className="w-full bg-yellow-400 text-black text-2xl  ">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGrid;

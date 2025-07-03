import React from 'react';
import { Link } from "react-router-dom";

const PhotoGrid = () => {
  const photos = [
    {
      id: 1,
      url: 'https://plus.unsplash.com/premium_photo-1666736570873-36d95bd8ee3f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Nature 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1614367674345-f414b2be3e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      alt: 'Nature 2'
    },
    {
      id: 3,
      url: 'https://plus.unsplash.com/premium_photo-1666736568991-b23b13b7749f?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Nature 3'
    },
  ];

  return (
    <div className="mx-1 ">
      <div className="grid grid-cols-1 gap-2">
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
          <button className="w-full bg-yellow-400 text-black text-2xl  py-3 px-4">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGrid;

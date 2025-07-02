import React from 'react';
import { Link } from "react-router-dom";

const PhotoGrid = () => {
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1750544684761-cc028988a69e?q=80&w=774&auto=format&fit=crop',
      alt: 'Nature 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1708869452169-ebc2f336f079?w=500&auto=format&fit=crop',
      alt: 'Nature 2'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1751076547771-ff3a1e5267a4?q=80&w=870&auto=format&fit=crop',
      alt: 'Nature 3'
    },
   
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`
              relative rounded-lg overflow-hidden 
              ${index === 0 ? 'h-28   md:h-full md:row-span-2 md:col-span-2' : 'h-48 md:h-full'}
            `}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/Gallery">
          <button className="w-full bg-yellow-400 text-black text-2xl font-semibold py-3 px-4 rounded">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGrid;

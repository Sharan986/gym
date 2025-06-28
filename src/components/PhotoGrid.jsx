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
      url: 'https://source.unsplash.com/random/300x300/?nature,3',
      alt: 'Nature 3'
    },
    {
      id: 4,
      url: 'https://source.unsplash.com/random/300x300/?nature,4',
      alt: 'Nature 4'
    }
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative h-32 rounded-lg overflow-hidden">
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/Gallery">
          <button className="w-full bg-yellow-300 text-black text-2xl font-semibold py-2 px-4 rounded">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGrid;

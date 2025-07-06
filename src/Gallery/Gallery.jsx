import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Join from '../components/Join';
import Button from '../components/Button';

const Gallery = () => {
  // Array of gallery items
  const galleryItems = [
    {
      imgSrc: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      imgAlt: "Person Lifting Weights",
      title: "YOGA",
      id: 1
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      imgAlt: "Fitness Equipment",
      title: "FITNESS",
      id: 2
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1751308759380-03e5abd14510?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Yoga Session",
      title: "GYM",
      id: 3
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=400&q=80",
      imgAlt: "Running Track",
      title: "RUNNING",
      id: 4
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="relative overflow-hidden">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-full h-60 object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One">About Us</h1>
          <h1 className="font-One text-2xl mt-9">
            <Link to="/" className="hover:underline">HOME</Link>
            <span className="text-yellow-300">/Contact Us</span>
          </h1>
        </div>
      </div>

      {/* Gallery Items Section */}
      <div className="mx-7 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="flex flex-col items-start font-One text-white mb-10">
            <img
              src={item.imgSrc}
              alt={item.imgAlt}
              className="w-full h-60 object-cover shadow-lg"
            />
            <div className="flex flex-col items-center w-full">
              <h1 className="text-2xl mt-2">{item.title}</h1>
              <div className="mt-2">
                <Link to={`/item/${item.id}`}>
                  <Button
                    text="View More"
                    className="bg-[#FCDE3B] hover:bg-[#53F0B8] text-black font-semibold px-4 py-2 "
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Join and Footer Sections */}
      <Join />
      <Footer />
    </>
  );
};

export default Gallery;

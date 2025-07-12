import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const weightGainerProducts = [
  { id: 1, name: 'Weight Gainer A', photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Weight Gainer B', photo: 'https://images.unsplash.com/photo-1571019614242-c055f5a6a293?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Weight Gainer C', photo: 'https://images.unsplash.com/photo-1571019614242-c055f5a6a293?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Weight Gainer D', photo: 'https://images.unsplash.com/photo-1571019614242-c055f5a6a293?auto=format&fit=crop&w=500&q=80' },
];

const WeightGainers = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+918877152285`, 'HII MY SELF SUMIT');
  };

  return (
    <>
        <div className="relative overflow-hidden">
       <img
         src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
         alt="About Us Banner"
         className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
       />
       <div className="absolute bottom-8 left-8 text-white">
         <h1 className="text-4xl font-One lg:text-6xl z-10">SUPPLEMENT</h1>
         <h1 className="font-One text-xl mt-4 lg:text-3xl">
           <Link to='//Supplement'>SUPPLEMENT</Link>
           <span className="text-yellow-300 lg:text-3xl">/WeightGainers</span>
         </h1>
       </div>
     </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">Weight Gainer Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {weightGainerProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md overflow-hidden">
              <img src={product.photo} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Contact on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WeightGainers;

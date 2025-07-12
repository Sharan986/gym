import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const preWorkoutProducts = [
  {
    id: 3,
    name: "MuscleBlaze Pre Workout WrathX, 340 g (0.75 lb)",
    Price: "₹1,399",
    photo:
      "https://img8.hkrtcdn.com/38823/prd_3882277-MuscleBlaze-Pre-Workout-WrathX-0.74-lb-Mango-Mayhem_o.jpg",
  },
  {
    id: 5,
    name: "MuscleBlaze Pre Workout 200 Xtreme (Fruit Punch, 15 Servings, 100g)",
    Price: "₹499",
    photo:
      "https://m.media-amazon.com/images/I/7144k02s2FL._SY450_.jpg",
  },
  {
    id: 8,
    name: "Nakpro Pre Workout Supplement Powder",
    Price: "₹349",
    photo:
      "https://nakpro.com/cdn/shop/products/01_8ff935e3-cb6c-4657-ae7c-eb0153770826.png?v=1746927037&width=900",
  },
  {
    id: 9,
    name: "GNC Creatine Monohydrate With Black Shaker (750ml) Creatine  (100 g, Blueberry)Fuel One Dead-Lift Pre Workout",
    Price: "₹449",
    photo:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmpHekjlJ__OViZoGulY9oFPYpqnhMYrqnTufqjBusft2P2gF1fseTp0o9IplCRCvcnngvtDFmwUYua5TbhWVudWn9Raun-s827TqviYUW",
  },
];

const PreWorkout = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+918877152285`, "HII MY SELF SUMIT");
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
           <Link to="/Supplement">SUPPLEMENT</Link>
          <span className="text-yellow-300 lg:text-3xl">/PreWorkout</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Preworkout Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {preWorkoutProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md overflow-hidden"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-[24rem] object-contain"
              />
              <div className="p-4">
                <h2 className="text-2xl">{product.name}</h2>
                <br />
                <h2 className="text-2xl">{product.Price}</h2>

                <button
                  onClick={handleWhatsAppClick}
                  className="mt-4 bg-green-500 hover:bg-green-700  text-xl py-2 px-4 rounded w-full"
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

export default PreWorkout;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const vitaminProducts = [
  {
    id: 1,
    name: "MuscleBlaze MB-Vite Daily Multivitamin (30 Tablets)",
    photo:
      "https://m.media-amazon.com/images/I/4107+ceI2WL._SY300_SX300_.jpg",
    Price:"₹305"
    },
  {
    id: 2,
    name: "Nutrabay Pro Active Multivitamin for Men - 30 Tabs",
    photo:
      "https://cdn2.nutrabay.com/uploads/variant/images/variant-20152-featured_image-Nutrabay_Pro_Active_Multivitamin_for_Men__30_Tabs.png",
      Price:"₹199"
    },
  {
    id: 3,
    name: "GNC Mega Men One Daily Multivitamin",
    photo:
      "https://www.guardian.in/cdn/shop/files/mm30.jpg?v=1738667353&width=1000",
      Price:"₹349"
    },
  {
    id: 4,
    name: "GNC Mega Men Sport MultivitaminVitamin D",
    photo:
      "https://www.guardian.in/cdn/shop/files/90200169-1_11237759-8752-4cad-8632-126e69daba52.jpg?v=1694086378&width=1000",
      Price:"699"
    },
];

const Vitamins = () => {
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
              <span className="text-yellow-300 lg:text-3xl">/Vitamin</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Vitamin Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vitaminProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md overflow-hidden"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-[24rem] object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                 <h2 className="text-xl font-semibold">{product.Price}</h2>
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

export default Vitamins;

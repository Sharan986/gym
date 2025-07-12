import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Pintola High Protein Muesli Dark Chocolate & Cranberry 1kg, 24g Protein",
    Price: "₹599",
    photo:
      "https://m.media-amazon.com/images/I/71D7PfiOuYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Kellogg's Muesli Nuts Delight 1000G",
    Price: "2,943",
    photo:
    "https://m.media-amazon.com/images/I/71+c6EvKAbL._AC_UL480_FMwebp_QL65_.jpg"  },
  {
    id: 4,
    name: "Yogabar Super High Protein Muesli 850g | 21g Protein | With Probiotics and Whey ",
    Price: "₹349",
    photo:
    "https://m.media-amazon.com/images/I/41FgNdf3nZL._SX300_SY300_QL70_FMwebp_.jpg"  },
  {
    id: 7,
    name: "MuscleBlaze Fit High Protein Muesli (1kg, Fruits & Nut) | 22g Protein",
    Price: "₹699",
    photo:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0eVZX8EUvbnwVXDI9s9ofnTO1jFZV3nkCymrWM9ZpUIfmctYaxDPaCL91n859f1xfV0vKWjXCeXHjBYMhifel0ImhMEP4JbNQUrqkJonRjUTIro2GoIqLe4yjmHCziHfZVkXXmQg&usqp=CAc",
  },
];

const Muesli = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918877152285";
    const message =
      "Hello, I am interested in your protein products. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
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
            <span className="text-yellow-300 lg:text-3xl">/MUESLI</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Muesli Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
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

export default Muesli;

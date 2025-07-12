import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const OatsProducts = [
  {
    id: 3,
    name: "MuscleBlaze Fit Instant Oats (Unflavoured, 1kg) | 12g Protein | ",
    Price: "₹₹275",
    photo:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEncjxXsyknxXyiVa14BZm16HRQKm2q6-Qnbt-OPBomChcVtmW8WwCktUXtK85SIHeeoEsBvi3QL6Oljr3vXCfv7OrrFGDKqBH-R3oQbdM6y7xF9bygXt7t0E66fZG5oJHLFLj0qb2yRlg&usqp=CAc",
  },
  {
    id: 5,
    name: "High Protein Super Rolled Oats Chocolate",
    Price: "₹489",
    photo:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1RrCJmXlZvUvwRzkeJDolDBrDe0gbQ7HtrDre4Nboq-b-n7KbF8vKbFFmke-VoTG3334VNyq7kZ9l9a_F8mK5zKl6Anle2tmlJF5yGR8ffyTLtpkIllD20RAD_gqmxlxXb1LAkQt5pQ&usqp=CAc",
  },
  {
    id: 8,
    name: "MuscleBlaze High Protein Oats - 1 Kg (2.2 Lb), Dark Chocolate",
    Price: "₹629",
    photo:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9mL1brk3mz6KoH46IOjdhm54ZzX-CXaOfAgBMcTc_VkguqyQSyJgyYurQEf2ujou8obJWpGFAMH2ikppug0D_K5qrEYPKPfYBw1dg5xJn-vPkfT6nBiGHvQQMD35lQuSlJI7X-_C4Tgc&usqp=CAc",
  },
  {
    id: 9,
    name: "PINTOLA 25g High Protein Oats 1kg, ",
    Price: "₹568",
    photo:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHwGxOfdUhsi1_4E3OEoFnnXVY4DM4eG0UvWLHX6TkreZh0JLsIiwTG3sY1Up74-zyjN90XlGKgBUEP2X3aAdvP4eNWzp8oV-HW5POJy_Oph_XEtwbjZ8WgoBgQ7wu6BQpXuA6vGeWca8&usqp=CAc",
  },
];

const Oats = () => {
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
            <span className="text-yellow-300 lg:text-3xl">/Oats</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Oats Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {OatsProducts.map((product) => (
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

export default Oats;

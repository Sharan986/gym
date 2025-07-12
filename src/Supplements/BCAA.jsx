import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const bcaa = [
  {
    id: 3,
    name: "MuscleBlaze BCAA Pro",
    Price: "₹669",
    photo:
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCLjZY0apOPRR2QjW0CiCpxAtfHw2sQHLAbELMmuQR8XPp8bJ2uteWEifY8L8hYaBHqRTC-OZleJksRiFL5eoTcz9kfytehHZgkfo_1AghtWr5oYUIv4uN"  },
  {
    id: 5,
    name: "AS-IT-IS Nutrition ATOM BCAA 250g with L-arginine",
    Price: "₹689",
    photo:
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrqxyIa22mh8JCtW8jtdP8nPTUV18FzMFtOMrOk2lbo37VYSesEb4WV2iOHggWmUBbASQKbLQWUvsLTc_7XdX_-BlBMinwzkoUCxE5LyUZZHGClv_B5W0lkQ"  },
  {
    id: 8,
    name: "Bigmuscles Nutrition bcaa Energy",
    Price: "₹399",
    photo:
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGijtwOhXwSgY7Kf8UNtX-ojVAnAmSB0qZNKB80E9ODEzcw4MJoaULk3T1kPXNfBlYHNch_CJ3_EGSn3He8qBh1ZdDQ0rvWd425AHbaj-UUfjTdCrBp9UHaA"  },
  {
    id: 9,
    name: "BCAA 5000 Powder | Fruit Punch | 250 g",
    Price: "₹1091",
    photo:
      "https://www.optimumnutrition.co.in/cdn/shop/files/1142950_1_bcc1ecf5-891c-45b7-832f-2f58a67ddf75.webp?v=1752258597&width=823",
  },
];

const BCAA = () => {
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
              <span className="text-yellow-300 lg:text-3xl">/BCAA</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Preworkout Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bcaa.map((product) => (
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

export default BCAA;

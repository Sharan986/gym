import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const OatsProducts = [
  {
    id: 3,
    name: "MuscleBlaze Fit Instant Oats (Unflavoured, 1kg) | 12g Protein | ",
    Price: "₹350 ₹275",
    photo:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEncjxXsyknxXyiVa14BZm16HRQKm2q6-Qnbt-OPBomChcVtmW8WwCktUXtK85SIHeeoEsBvi3QL6Oljr3vXCfv7OrrFGDKqBH-R3oQbdM6y7xF9bygXt7t0E66fZG5oJHLFLj0qb2yRlg&usqp=CAc",
  },
  {
    id: 5,
    name: "High Protein Super Rolled Oats Chocolate",
    Price: "₹599 ₹489",
    photo:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1RrCJmXlZvUvwRzkeJDolDBrDe0gbQ7HtrDre4Nboq-b-n7KbF8vKbFFmke-VoTG3334VNyq7kZ9l9a_F8mK5zKl6Anle2tmlJF5yGR8ffyTLtpkIllD20RAD_gqmxlxXb1LAkQt5pQ&usqp=CAc",
  },
  {
    id: 8,
    name: "MuscleBlaze High Protein Oats - 1 Kg (2.2 Lb), Dark Chocolate",
    Price: "₹799 ₹629",
    photo:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9mL1brk3mz6KoH46IOjdhm54ZzX-CXaOfAgBMcTc_VkguqyQSyJgyYurQEf2ujou8obJWpGFAMH2ikppug0D_K5qrEYPKPfYBw1dg5xJn-vPkfT6nBiGHvQQMD35lQuSlJI7X-_C4Tgc&usqp=CAc",
  },
  {
    id: 9,
    name: "PINTOLA 25g High Protein Oats 1kg, ",
    Price: "₹699 ₹568",
    photo:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHwGxOfdUhsi1_4E3OEoFnnXVY4DM4eG0UvWLHX6TkreZh0JLsIiwTG3sY1Up74-zyjN90XlGKgBUEP2X3aAdvP4eNWzp8oV-HW5POJy_Oph_XEtwbjZ8WgoBgQ7wu6BQpXuA6vGeWca8&usqp=CAc",
  },
];

const Oats = () => {
  const handleWhatsAppClick = (productName) => {
    const message = `Hi! I'm interested in ${productName} from OneRepMaax Gym.`;
    const phoneNumber = "919204057290";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/src/Imgs/DSC06120R.webp"
          alt="High Protein Oats - OneRepMaax Gym"
          className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover object-center"
        />
        
        {/* Clean overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-[#48D3A3]/20 backdrop-blur-sm border border-[#48D3A3]/30 text-[#48D3A3] text-sm sm:text-base font-M uppercase tracking-wider mb-4">
              Supplements • Oats
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-One text-white leading-tight mb-4">
              OATS
            </h1>
            <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-One mb-6">
              <Link 
                to='/Supplement' 
                className="text-white hover:text-[#48D3A3] transition-colors duration-300"
              >
                SUPPLEMENTS
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#48D3A3]">OATS</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-200 font-M max-w-3xl leading-relaxed">
              High-protein oats for sustained energy and muscle building nutrition
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6 uppercase">
              High Protein Oats
            </h2>
            <p className="text-xl md:text-2xl font-One text-white mb-8 max-w-4xl mx-auto">
              Nutritious Oats for Sustained Energy & Muscle Building
            </p>
            <p className="text-lg md:text-xl font-DM text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Premium high-protein oats packed with essential nutrients and fiber. 
              Perfect for breakfast, pre-workout fuel, or post-workout recovery to support your fitness goals.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {OatsProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-600/20 hover:border-[#48D3A3]/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#48D3A3]/10 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-2xl bg-white p-4">
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="w-full h-48 object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-One text-white group-hover:text-[#48D3A3] transition-colors duration-300 mb-4 leading-tight min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  
                  <div className="mb-6">
                    {/* Market Price (crossed out) */}
                    <span className="text-sm font-One text-gray-400 line-through block">
                      {product.Price.split(' ')[0]}
                    </span>
                    {/* Our Offer Price (highlighted) */}
                    <span className="text-2xl font-One bg-gradient-to-r from-[#FCDE3B] to-[#F97316] bg-clip-text text-transparent block">
                      {product.Price.split(' ')[1]}
                    </span>
                    {/* Savings indicator */}
                    <span className="text-xs font-One text-[#48D3A3] block mt-1">
                      Save ₹{(parseInt(product.Price.split(' ')[0].replace(/[₹,]/g, '')) - parseInt(product.Price.split(' ')[1].replace(/[₹,]/g, ''))).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-One text-sm py-3 px-4 rounded-lg hover:from-[#128C7E] hover:to-[#25D366] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/5 to-[#3BC493]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/30">
            <h3 className="text-3xl md:text-5xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6">
              Benefits of High Protein Oats
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300 font-DM">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#48D3A3] to-[#3BC493] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/Icons/muscle.webp" alt="High Protein" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-One text-white mb-2">High Protein</h4>
                <p>12-25g protein per serving for muscle building and recovery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FCDE3B] to-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/Icons/cardio.webp" alt="Sustained Energy" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-One text-white mb-2">Sustained Energy</h4>
                <p>Complex carbohydrates provide long-lasting energy for workouts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FCDE3B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/Icons/premium.webp" alt="Rich in Fiber" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-One text-white mb-2">Rich in Fiber</h4>
                <p>High fiber content supports digestion and promotes satiety</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Oats;

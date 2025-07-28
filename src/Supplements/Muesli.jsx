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
      "Hello, I am interested in your muesli products. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="High Protein Muesli - OneRepMaax Gym"
          className="w-full h-72 lg:h-[70vh] object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-5xl font-One lg:text-7xl bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-4">
            MUESLI
          </h1>
          <nav className="font-One text-lg lg:text-2xl flex items-center gap-2">
            <Link to="/Supplement" className="hover:text-[#48D3A3] transition-colors duration-300">SUPPLEMENTS</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FCDE3B]">MUESLI</span>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6 uppercase">
              High Protein Muesli
            </h2>
            <p className="text-xl md:text-2xl font-One text-white mb-8 max-w-4xl mx-auto">
              Nutritious Breakfast for Fitness Enthusiasts
            </p>
            <p className="text-lg md:text-xl font-DM text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Premium high-protein muesli blends packed with essential nutrients, fiber, and protein. 
              Perfect for a healthy breakfast or post-workout meal to fuel your fitness journey and support muscle recovery.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-600/20 hover:border-[#48D3A3]/40 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#48D3A3]/10 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-3xl bg-white p-6">
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="w-full h-80 object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-One text-white group-hover:text-[#48D3A3] transition-colors duration-300 mb-4 leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-One bg-gradient-to-r from-[#FCDE3B] to-[#F97316] bg-clip-text text-transparent">
                      {product.Price.startsWith('₹') ? product.Price : `₹${product.Price}`}
                    </span>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] rounded-full group-hover:w-24 transition-all duration-700"></div>
                  </div>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-One text-lg py-4 px-6 rounded-xl hover:from-[#128C7E] hover:to-[#25D366] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30 flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Contact on WhatsApp
                  </button>
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/5 to-[#3BC493]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/30">
            <h3 className="text-3xl md:text-5xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6">
              Why Choose High Protein Muesli?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300 font-DM">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#48D3A3] to-[#3BC493] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-One text-white mb-2">High Protein</h4>
                <p>20-24g protein per serving to support muscle building and recovery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FCDE3B] to-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-One text-white mb-2">Nutrient Dense</h4>
                <p>Packed with vitamins, minerals, fiber, and essential nutrients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FCDE3B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-One text-white mb-2">Convenient</h4>
                <p>Quick and easy breakfast option perfect for busy fitness schedules</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Muesli;

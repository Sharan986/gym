import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const FishoilProducts = [
  {
    id: 3,
    name: "MuscleBlaze Omega 3 Fish Oil (1000 mg) with 180mg EPA and 120mg DHA, 90 capsules",
    Price: "₹535",
    photo:
      "https://img8.hkrtcdn.com/39778/prd_3977707-MuscleBlaze-Omega-3-Fish-Oil-1000-mg-with-180mg-EPA-and-120mg-DHA-90-capsules_o.jpg",
  },
  {
    id: 5,
    name: "Wellcore Micronised Creatine Monohydrate | Lab Tested | Enhanced Absorption | 100% Pure Creatine  (122 g, Fruit Fusion)",
    Price: "₹299",
    photo:
      "https://www.guardian.in/cdn/shop/files/1_c4089fba-5a0a-4a66-8bdd-ae11139ae426.jpg?v=1738060031&width=1000",
  },
  // {
  //   id: 8,
  //   name: "AS-IT-IS Nutrition Creatine Monohydrate 100g - 32 Servings, Fruit Punch Creatine  (100 g, Fruit Punch)",
  //   Price: "₹₹320",
  //   photo:
  //     "https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/o/o/t/creatine-creatine-monohydrate-100g-32-servings-fruit-punch-original-imahcjwnajgdjfjc.jpeg?q=70",
  // },
  // {
  //   id: 9,
  //   name: "GNC Creatine Monohydrate With Black Shaker (750ml) Creatine  (100 g, Blueberry)",
  //   Price: "₹449",
  //   photo:
  //     "https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/f/i/i/-original-imahcecgkqzkghvj.jpeg?q=70",
  // },
];

const Fishoil = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+918877152285`, "HII MY SELF SUMIT");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="Fish Oil Supplements - OneRepMaax Gym"
          className="w-full h-72 lg:h-[70vh] object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-5xl font-One lg:text-7xl bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-4">
            FISH OIL
          </h1>
          <nav className="font-One text-lg lg:text-2xl flex items-center gap-2">
            <Link to="/Supplement" className="hover:text-[#48D3A3] transition-colors duration-300">SUPPLEMENTS</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FCDE3B]">FISH OIL</span>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6 uppercase">
              Fish Oil Products
            </h2>
            <p className="text-xl md:text-2xl font-One text-white mb-8 max-w-4xl mx-auto">
              Omega-3 Rich Fish Oil for Heart & Brain Health
            </p>
            <p className="text-lg md:text-xl font-DM text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Premium fish oil supplements rich in EPA and DHA omega-3 fatty acids. 
              Support cardiovascular health, brain function, joint mobility, and overall wellness with our high-quality fish oil capsules.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {FishoilProducts.map((product) => (
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
                      {product.Price}
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
              Benefits of Fish Oil
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300 font-DM">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#48D3A3] to-[#3BC493] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-One text-white mb-2">Heart Health</h4>
                <p>Supports cardiovascular health and helps maintain healthy cholesterol levels</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FCDE3B] to-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-One text-white mb-2">Brain Function</h4>
                <p>Enhances cognitive function, memory, and supports brain health</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FCDE3B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-One text-white mb-2">Joint Support</h4>
                <p>Reduces inflammation and supports joint mobility and flexibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fishoil;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { DSC06177 } from "../Imgs/Imgs";

const supplementData = [
  {
    title: "Protein",
    imageUrl:
      "https://imgs.search.brave.com/3UXd1tfSYqRNjvYMCHRwtyS5g1uj__MH2en0FMCHiRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUWtOb0c5/ODlOQXE3OFA5LWhw/M3c0T0RUOGU0SlJh/YVJaUkVKM0hYdnpC/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/QXgvTmpjeU9ESXdM/M0JvYjNSdi9MMjFo/YmkxcGJpMTBhR1V0/L1ozbHRMV1J5YVc1/cmFXNW4vTFhCeWIz/UmxhVzR0YzJoaC9h/MlV0WkhKcGJtc3Vh/bkJuL1AzTTlOakV5/ZURZeE1pWjMvUFRB/bWF6MHlNQ1pqUFhR/NC9hVkpLVG10elZs/OWljWFpCL1UzRjFO/Mk5mUm1jNUxUUmgv/TlVrM1VWaFZaRjkw/VkhsSC9TSGwwVFZr/OQ",
  },
  {
    title: "Creatine",
    imageUrl:
      "https://images.unsplash.com/photo-1704650311981-419f841421cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Preworkout",
    imageUrl:
      "https://images.unsplash.com/photo-1704650311981-419f841421cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "Vitamins",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "BCAA",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "Fishoil",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "Oats",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    title: "Muesli",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Supplement = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <img
          src={DSC06177}
          alt="Premium Fitness Supplements - OneRepMaax Gym"
          className="w-full h-72 lg:h-[70vh] object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-5xl font-One lg:text-7xl bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-4">
            SUPPLEMENTS
          </h1>
          <nav className="font-One text-lg lg:text-2xl flex items-center gap-2">
            <Link to='/' className="hover:text-[#48D3A3] transition-colors duration-300">HOME</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FCDE3B]">SUPPLEMENTS</span>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6 uppercase">
              Premium Supplements
            </h2>
            <p className="text-2xl md:text-3xl font-One text-white mb-8 max-w-4xl mx-auto">
              Boost Strength, Endurance, Muscle Growth
            </p>
            <p className="text-lg md:text-xl font-DM text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Our premium supplement collection supports muscle growth, enhances performance, boosts recovery, 
              fills nutritional gaps, helps achieve fitness goals efficiently, increases endurance, aids fat loss, 
              improves strength, and promotes overall physical well-being.
            </p>
          </div>

          {/* Supplements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {supplementData.map((item, index) => (
              <Link to={`/Supplement/${item.title}`} key={index} className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-600/20 hover:border-[#48D3A3]/40 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#48D3A3]/10 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img 
                      src={item.imageUrl} 
                      alt={`${item.title} supplements at OneRepMaax Gym`} 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-3xl font-One text-white group-hover:text-[#48D3A3] transition-colors duration-300 drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="h-1 w-16 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] rounded-full group-hover:w-full transition-all duration-700"></div>
                    <p className="text-gray-400 font-DM mt-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Premium quality supplement
                    </p>
                  </div>

                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/5 to-[#3BC493]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/30">
            <h3 className="text-3xl md:text-5xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6">
              Need Guidance?
            </h3>
            <p className="text-lg md:text-xl font-DM text-gray-300 mb-8 max-w-3xl mx-auto">
              Our certified trainers can help you choose the right supplements for your fitness goals. 
              Get personalized recommendations today!
            </p>
            <Link 
              to="/JoinUs" 
              className="inline-block bg-gradient-to-r from-[#48D3A3] to-[#3BC493] text-black font-One text-lg md:text-xl px-8 py-4 rounded-xl hover:from-[#3BC493] hover:to-[#48D3A3] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#48D3A3]/30"
            >
              CONSULT OUR EXPERTS
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Supplement;

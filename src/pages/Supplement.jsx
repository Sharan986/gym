import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { DSC06177 } from "../Imgs/Imgs";

const supplementData = [
  {
    title: "Protein",
    imageUrl: "/supplementImgs/onwhey.webp",
  },
  {
    title: "Creatine",
    imageUrl: "/supplementImgs/wellcore.webp",
  },
  {
    title: "PreWorkout",
    imageUrl: "/supplementImgs/wrathx.webp",
  },
  {
    title: "PeanutButter",
    imageUrl: "/supplementImgs/alpino.webp",
  },
  {
    title: "Vitamins",
    imageUrl: "https://m.media-amazon.com/images/I/4107+ceI2WL._SY300_SX300_.jpg",
  },
   {
    title: "BCAA",
    imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCLjZY0apOPRR2QjW0CiCpxAtfHw2sQHLAbELMmuQR8XPp8bJ2uteWEifY8L8hYaBHqRTC-OZleJksRiFL5eoTcz9kfytehHZgkfo_1AghtWr5oYUIv4uN",
  },
   {
    title: "Fishoil",
    imageUrl: "https://img8.hkrtcdn.com/39778/prd_3977707-MuscleBlaze-Omega-3-Fish-Oil-1000-mg-with-180mg-EPA-and-120mg-DHA-90-capsules_o.jpg",
  },
   {
    title: "Oats",
    imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEncjxXsyknxXyiVa14BZm16HRQKm2q6-Qnbt-OPBomChcVtmW8WwCktUXtK85SIHeeoEsBvi3QL6Oljr3vXCfv7OrrFGDKqBH-R3oQbdM6y7xF9bygXt7t0E66fZG5oJHLFLj0qb2yRlg&usqp=CAc",
  },
    {
    title: "Muesli",
    imageUrl: "https://m.media-amazon.com/images/I/71D7PfiOuYL._AC_UL480_FMwebp_QL65_.jpg",
  },
];

const Supplement = () => {
  return (
    <>
      <Helmet>
        <title>Premium Fitness Supplements - OneRepMaax Gym Jamshedpur | Protein, Creatine & More</title>
        <meta name="description" content="Premium fitness supplements at OneRepMaax Gym Jamshedpur. Quality protein, creatine, pre-workout, vitamins, BCAA, fish oil, and nutrition products for optimal fitness results." />
        <link rel="canonical" href="https://onerepmaax.com/supplements" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premium Fitness Supplements - OneRepMaax Gym Jamshedpur | Protein, Creatine & More" />
        <meta property="og:description" content="Premium fitness supplements at OneRepMaax Gym Jamshedpur. Quality protein, creatine, pre-workout, vitamins, BCAA, fish oil, and nutrition products for optimal fitness results." />
        <meta property="og:url" content="https://onerepmaax.com/supplements" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Premium Fitness Supplements - OneRepMaax Gym Jamshedpur | Protein, Creatine & More" />
        <meta name="twitter:description" content="Premium fitness supplements at OneRepMaax Gym Jamshedpur. Quality protein, creatine, pre-workout, vitamins, BCAA, fish oil, and nutrition products for optimal fitness results." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Premium Fitness Supplements",
            "description": "Quality fitness supplements including protein, creatine, vitamins, and nutrition products",
            "publisher": {
              "@type": "HealthClub",
              "name": "OneRepMaax Gym",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jamshedpur",
                "addressRegion": "Jharkhand",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>
      
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
                <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-600/20 hover:border-[#48D3A3]/40 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#48D3A3]/10 backdrop-blur-sm">
                  <div className="relative overflow-hidden bg-white p-6">
                    <img 
                      src={item.imageUrl} 
                      alt={`${item.title} supplements at OneRepMaax Gym`} 
                      className="w-full h-80 object-contain transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-3xl font-One text-white group-hover:text-[#48D3A3] transition-colors duration-300 drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="h-1 w-16 bg-gradient-to-r from-[#48D3A3] to-[#3BC493] l group-hover:w-full transition-all duration-700"></div>
                    <p className="text-gray-400 font-DM mt-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Premium quality supplement
                    </p>
                  </div>

                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#48D3A3]/5 to-[#3BC493]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50  p-12 border border-gray-700/30">
            <h3 className="text-3xl md:text-5xl font-One bg-gradient-to-r from-[#48D3A3] to-[#3BC493] bg-clip-text text-transparent mb-6">
              Need Guidance?
            </h3>
            <p className="text-lg md:text-xl font-DM text-gray-300 mb-8 max-w-3xl mx-auto">
              Our certified trainers can help you choose the right supplements for your fitness goals. 
              Get personalized recommendations today!
            </p>
            <Link 
              to="/JoinUs" 
              className="inline-block bg-gradient-to-r from-[#48D3A3] to-[#3BC493] text-black font-One text-lg md:text-xl px-8 py-4 hover:from-[#3BC493] hover:to-[#48D3A3] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#48D3A3]/30"
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

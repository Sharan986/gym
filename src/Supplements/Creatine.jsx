import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Creatinear = [
  { id: 3, name: 'AS-IT-IS Nutrition Creatine Monohydrate | USA Labdoor Certified for Accuracy & Purity Creatine  (100 g, unflavored)',Price:"₹1,244" , photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/b/h/z/creatine-creatine-monohydrate-usa-labdoor-certified-for-accuracy-original-imah7tm8dkgntguz.jpeg?q=70' },
  { id: 5, name: 'Wellcore Micronised Creatine Monohydrate | Lab Tested | Enhanced Absorption | 100% Pure Creatine  (122 g, Fruit Fusion)',Price:"₹599" , photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/z/h/n/creatine-micronised-creatine-monohydrate-lab-tested-enhanced-original-imahcbffa8ynchht.jpeg?q=70' },
  { id: 8, name: 'AS-IT-IS Nutrition Creatine Monohydrate 100g - 32 Servings, Fruit Punch Creatine  (100 g, Fruit Punch)', Price:"₹₹320" ,photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/o/o/t/creatine-creatine-monohydrate-100g-32-servings-fruit-punch-original-imahcjwnajgdjfjc.jpeg?q=70' },
  { id: 9, name: "GNC Creatine Monohydrate With Black Shaker (750ml) Creatine  (100 g, Blueberry)",Price:"₹449" , photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/f/i/i/-original-imahcecgkqzkghvj.jpeg?q=70' },
];

const Creatine = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+918877152285`, 'HII MY SELF SUMIT');
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
    <span className="text-yellow-300 lg:text-3xl">/Creatine</span>
    </h1>
  </div>
</div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">Preworkout Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Creatinear.map((product) => (
            <div key={product.id} className="bg-white shadow-md overflow-hidden">
              <img src={product.photo} alt={product.name} className="w-full h-[24rem] object-contain" />
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

export default Creatine;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: "BIGMUSCLES NUTRITION Premium Gold Whey Protein  (1 kg, Belgian Chocolate)",Price:"₹1,244" , photo: "https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/p/0/1/-original-imaguy37ubczqunt.jpeg?q=70" },
  { id: 2, name: "AS-IT-IS Nutrition ATOM Isolate Whey Protein  (1 kg, Mango Delight)", Price:"2,943" ,photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/m/a/q/whey-protein-atom-isolate-6600720269-as-it-is-nutrition-original-imah4wa74y2rfecj.jpeg?q=70' },
  { id: 4, name: "AS-IT-IS Nutrition ATOM Whey Protein  (1 kg, Double Rich Chocolate)",Price:"₹2016" ,  photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/m/t/g/whey-protein-atom-4500112126-as-it-is-nutrition-original-imahd5xgg9jzsfen.jpeg?q=70' },
  { id: 6, name: "MUSCLEBLAZE Raw Whey Concentrate, Light & Clean Protein, Easy to Digest Whey Protein  (1 kg, Unflavoured)",Price:"₹1,880" , photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/c/f/o/-original-imahcyj5yznysh36.jpeg?q=70' },
  { id: 7, name: "MUSCLEBLAZE Beginner's Whey Protein, No Added Sugar Whey Protein  (1 kg, Chocolate)",Price:"₹1,449" ,photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/h/k/a/-original-imahcyhsdjce2yg5.jpeg?q=70' },
];

const ProductList = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918877152285';
    const message = 'Hello, I am interested in your protein products. Could you please provide more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
          <span className="text-yellow-300 lg:text-3xl">/Protein</span>
         </h1>
       </div>
     </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">Protein Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
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

export default ProductList;

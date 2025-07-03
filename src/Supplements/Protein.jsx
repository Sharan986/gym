import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: 'Whey Protein', photo: 'https://images.unsplash.com/photo-1693996045300-521e9d08cabc?q=80&w=870&auto=format&fit=crop' },
  { id: 2, name: 'Creatine', photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Soy Protein', photo: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Mass Gainer', photo: 'https://media.istockphoto.com/id/471972943/photo/protein-shake-after-your-workout.jpg?s=2048x2048&w=is&k=20&c=7wLxz30ysjZLn2OVYpN7ued5pYEK26tVjJVbihROt6U=' },
  { id: 7, name: 'Egg Protein', photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80' },
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
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="About Us Banner"
          className="w-full h-60 object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-One">About Us</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/">HOME</Link>
            <span className="text-yellow-300">/Supplement</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 font-One">
        <h1 className="text-4xl text-center text-white font-bold mb-8">Protein Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md overflow-hidden">
              <img src={product.photo} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl">{product.name}</h2>
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

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MembershipSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-[#070915] text-white p-8 mx-1">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-[#48D3A3] text-xl font-bold mb-4 font-One italic">OUR MEMBERSHIP</h2>
          <p className="mb-8 text-white font-One text-3xl">
            Fight School has specialized in martial arts
          </p>
          <ul className="space-y-4 font-DM">
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">Personal Training</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">Body Building</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">Boxing Classes</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">Specialized Workouts</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">Cardio and More</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <style>
            {`
              .slick-slide > div {
                margin: 0 10px;
              }
              .slick-list {
                margin: 0 -10px;
              }
            `}
          </style>
          <Slider {...sliderSettings}>
            <div className="p-4 border-2 border-[#48D3A3] font-DM transition-transform transform">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">1 Month</h2>
              <p className="text-2xl font-bold mb-2 text-yellow-400">Rs1200</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Access to all gym equipment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Monthly fitness assessment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Basic group classes included</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Free water bottle on signup</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Support & Mentoring</span>
                </li>
              </ul>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                BOOK NOW
              </button>
            </div>
            <div className="p-4 border-2 border-[#48D3A3] font-M transition-transform transform">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">3 Months</h2>
              <p className="text-2xl font-bold mb-2 text-yellow-400">Rs2700</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Access to all gym equipment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Monthly fitness assessment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Basic group classes included</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Free water bottle on signup</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Support & Mentoring</span>
                </li>
              </ul>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                BOOK NOW
              </button>
            </div>
            <div className="p-4 border-2 border-[#48D3A3] font-M transition-transform transform">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">6 Months</h2>
              <p className="text-2xl font-bold mb-2 text-yellow-400">Rs5100</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Access to all gym equipment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Monthly fitness assessment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Basic group classes included</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Free gym bag on signup</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Support & Mentoring</span>
                </li>
              </ul>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                BOOK NOW
              </button>
            </div>
            <div className="p-4 border-2 border-[#48D3A3] font-M transition-transform transform">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">9 Months</h2>
              <p className="text-2xl font-bold mb-2 text-yellow-400">Rs6800</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Access to all gym equipment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Monthly fitness assessment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>All group classes included</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Free gym bag on signup</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Support & Mentoring</span>
                </li>
              </ul>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                BOOK NOW
              </button>
            </div>
            <div className="p-4 border-2 border-[#48D3A3] font-M transition-transform transform">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">12 Months</h2>
              <p className="text-2xl font-bold mb-2 text-yellow-400">Rs7500</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Access to all gym equipment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Monthly fitness assessment</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>All group classes included</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Free gym bag and shaker</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2 text-[#48D3A3]">✓</span>
                  <span>Priority Support</span>
                </li>
              </ul>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                BOOK NOW
              </button>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;

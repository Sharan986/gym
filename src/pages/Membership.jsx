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
    <div className="bg-[#070915] text-white p-2 mx-1 mb-6">
      <div className="flex flex-col md:flex-row">

        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-[#48D3A3] text-2xl font-bold mb-4 font-One italic">OUR MEMBERSHIP</h2>
          <p className="mb-8 text-white font-One text-3xl">
            Fight School has specialized <br />in martial arts
          </p>
          <ul className="space-y-4 font-M">
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">P . T</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">ZUMBA</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">YOGA</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">NUTRITION @1000/Month</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-[#48D3A3]">✓</span>
              <span className="text-gray-300">Free Wifi ,COFFE ,SEP CHANGING ROOMS AND MANY MORE</span>
            </li>
          </ul>
        </div>


        <div className="w-83  md:w-2/3 p-4">
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
            <div className="p-4 border-2 border-[#48D3A3] font-DM transition-transform transform ">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">Membership</h2>
            <div className='flex justify-between mb-4'>
             <div>
              <ol className='font-One text-2xl space-y-2'>
                <li className='text-3xl'>Duration</li>
                <li className="text-gray-300">1 Month</li>
                <li className="text-gray-300">3 Months</li>
                <li className="text-gray-300">6 Months</li>
                <li className="text-gray-300">9 Months</li>
                <li className="text-gray-300">12 Months</li>
              </ol>
             </div>

             <div>
              <ol className='font-One text-2xl space-y-2'>
                <li className='text-3xl'>Price</li>
                <li className="text-yellow-400">Rs1200</li>
                <li className="text-yellow-400">Rs2700</li>
                <li className="text-yellow-400">Rs5100</li>
                <li className="text-yellow-400">Rs6800</li>
                <li className="text-yellow-400">Rs7500</li>
              </ol>
             </div>

             </div>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                BOOK NOW
              </button>
            </div>
            <div className="p-4 border-2 border-[#48D3A3] font-M transition-transform transform">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">Locker Facility</h2>
             
                  <div className='flex justify-between mb-4'>
             <div>
              <ol className='font-One text-2xl space-y-2'>
                <li className='text-3xl'>Duration</li>
                <li className="text-gray-300">1 Month</li>
                <li className="text-gray-300">3 Months</li>
                <li className="text-gray-300">6 Months</li>
                <li className="text-gray-300">9 Months</li>
                <li className="text-gray-300">12 Months</li>
              </ol>
             </div>

             <div>
              <ol className='font-One text-2xl space-y-2'>
                <li className='text-3xl'>Price</li>
                <li className="text-yellow-400">Rs1200</li>
                <li className="text-yellow-400">Rs2700</li>
                <li className="text-yellow-400">Rs5100</li>
                <li className="text-yellow-400">Rs6800</li>
                <li className="text-yellow-400">Rs7500</li>
              </ol>
             </div>

             </div>

              <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                BOOK NOW
              </button>
            </div>
            <div className="p-4 border-2 border-[#48D3A3] font-M transition-transform transform">
              <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-3xl italic">Personal Training</h2>

                <div className='flex justify-between mb-4'>
             <div>
              <ol className='font-One text-2xl space-y-2'>
                <li className='text-3xl'>Duration</li>
                <li className="text-gray-300">1 Month</li>
                <li className="text-gray-300">3 Months</li>
      
              </ol>
             </div>

             <div>
              <ol className='font-One text-2xl space-y-2'>
                <li className='text-3xl'>Price</li>
                <li className="text-yellow-400">Rs  5000</li>
                <li className="text-yellow-400">Rs  1000</li>
           <div className='pt-28'>

           </div>
              </ol>

             </div>

             </div>

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

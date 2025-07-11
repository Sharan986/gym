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

  const slidesData = [
    {
      title: 'Membership',
      durations: ['1 Month', '3 Months', '6 Months', '9 Months', '12 Months'],
      prices: ['Rs1200', 'Rs2700', 'Rs5100', 'Rs6800', 'Rs7500'],
    },
    {
      title: 'Locker Facility',
      durations: ['1 Month', '3 Months', '6 Months', '9 Months', '12 Months'],
      prices: ['Rs1200', 'Rs2700', 'Rs5100', 'Rs6800', 'Rs7500'],
    },
    {
      title: 'Personal Training',
      durations: ['1 Month', '3 Months'],
      prices: ['Rs  5000', 'Rs  1000'],
    },
  ];

  return (
    <div className="bg-[#070915] text-white mb-6 ">
      <div className="flex flex-col md:flex-col">
        <div className="mx-7 pt-5 mb-2">
          <h2 className="text-[#48D3A3] text-2xl mb-4 font-One italic">OUR MEMBERSHIP</h2>
          <p className="mb-8 text-white font-One text-3xl">
            Fight School has specialized in martial arts
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3  gap-y-2 font-DM text-lg">
            {[
              "PERSONAL TRAINING",
              "ZUMBA",
              "YOGA",
              "NUTRITION @1000/Month",
              "Free Wifi ,COFFE ,SEP CHANGING ROOMS AND MANY MORE",
              "CHANGING ROOMS AND MANY MORE"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-2 text-[#48D3A3]">✓</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full p-2 mt-6">
          <div className="px-4 sm:px-8"> {/* ✅ Added margin-x */}
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
              {slidesData.map((slide, idx) => (
                <div key={idx} className="p-5 border-2 border-[#48D3A3] font-DM transition-transform transform">
                  <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-2xl italic">{slide.title}</h2>
                  <div className="flex justify-between mb-4">
                    <div>
                      <ol className="font-One text-2xl space-y-2">
                        <li className="text-3xl">Duration</li>
                        {slide.durations.map((duration, i) => (
                          <li key={i} className="text-gray-300">{duration}</li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <ol className="font-One text-2xl space-y-2">
                        <li className="text-3xl">Price</li>
                        {slide.prices.map((price, i) => (
                          <li key={i} className="text-yellow-400">{price}</li>
                        ))}
                        {slide.title === 'Personal Training' && slide.prices.length < 5 && (
                          <div className="pt-28"></div>
                        )}
                      </ol>
                    </div>
                  </div>
                  <button className="bg-yellow-400 text-black font-bold py-2 px-4 w-full hover:bg-yellow-500 transition-colors">
                    BOOK NOW
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;

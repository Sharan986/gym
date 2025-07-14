import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "../components/Icon"; 

const MembershipSection = () => {

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2, // default for large screens
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 640, // match Tailwind sm breakpoint
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  const slidesData = [
    {
      title: "Membership",
      durations: ["1 Month", "3 Months", "6 Months", "9 Months", "12 Months"],
      prices: ["Rs 1,200", "Rs 2,700", "Rs 5,100", "Rs 6,800", "Rs 7,500"],
    },
    {
      title: "Locker Facility",
      durations: ["1 Month", "3 Months", "6 Months", "9 Months", "12 Months"],
      prices: ["Rs 1,200", "Rs 2,700", "Rs 5,100", "Rs 6,800", "Rs 7,500"],
    },
    {
      title: "Personal Training",
      durations: ["1 Month", "3 Months"],
      prices: ["Rs 5,000", "Rs 10,000"],
    },
  ];

  const membershipBenefits = [
    "PERSONAL TRAINING",
    "ZUMBA",
    "YOGA",
    "NUTRITION @1000/Month",
    "Free Wifi, COFFEE",
    "CHANGING ROOMS AND MANY MORE",
    "SEPARATE CHANGING ROOMS AND MANY MORE",
  ];

  return (
    <div className="bg-[#070915] text-white mb-6">
      <div className="flex flex-col md:flex-col">
        <div className="mx-4 pt-5 mb-2">
          <div className="flex items-center gap-2">
            <Icon />
            <h2 className="text-[#48D3A3] text-2xl font-One">
              OUR MEMBERSHIP
            </h2>
          </div>
          <p className="mb-8 text-white font-One text-3xl">
            Fight School has specialized in martial arts
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 font-DM text-lg">
            {membershipBenefits.map((item, idx) => (
              <li key={idx} className="flex ">
               
               
               <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-7 h-9 text-[#48D3A3]"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path strokeLinecap="round"  d="M9 5l7 7-7 7" />
</svg>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full p-2 mt-6">
          <div className="px-4 sm:px-8">
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
                <div
                  key={idx}
                  className="p-5 border-2 border-[#48D3A3] font-DM transition-transform transform"
                >
                  <h2 className="text-[#48D3A3] font-bold mb-2 font-One text-2xl">
                    {slide.title}
                  </h2>
                  <div className="flex justify-between mb-4">
                    <div>
                      <ol className="font-One text-2xl space-y-2">
                        <li className="text-3xl">Duration</li>
                        {slide.durations.map((duration, i) => (
                          <li key={i} className="text-gray-300">
                            {duration}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <ol className="font-One text-2xl space-y-2">
                        <li className="text-3xl">Price</li>
                        {slide.prices.map((price, i) => (
                          <li key={i} className="text-yellow-400">
                            {price}
                          </li>
                        ))}
                        {slide.title === "Personal Training" &&
                          slide.prices.length < 5 && (
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

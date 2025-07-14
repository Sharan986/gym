import React from "react";

import MembershipSection from "./Membership";
import WkGuid from "../components/WkGuid";
import Icon from "../components/Icon";

const Facilities = () => {
  const FacilitiesData = [
    {
      id: 1,
      title: "Cardio Equipment",
      description:
        "Enhance your cardiovascular fitness with our treadmills, ellipticals, and stationary bikes.",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
    },
    {
      id: 2,
      title: "Strength Training",
      description:
        "Build muscle and strength with our free weights, resistance machines, and functional training tools.",
      imageUrl:
        "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
    },
    {
      id: 3,
      title: "Group Classes",
      description:
        "Join our diverse group fitness classes, including yoga and HIIT, led by certified instructors.",
      imageUrl:
        "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
    },
    {
      id: 4,
      title: "Personal Training",
      description:
        "Achieve your fitness goals with personalized workout plans from our certified trainers.",
      imageUrl:
        "https://framerusercontent.com/images/B8TSO75Dd4eD75lnadm9FGAXtE.svg",
    },
  ];

  return (
    <>
      <div className="text-white text-xl pt-16 lg:mx-15 mx-8 mb-3">
        <div className="flex items-center gap-2">
          <Icon />
          <header className="text-2xl font-One w-full text-[#48D3A3]   ">
            OUR FACILITIES
          </header>
        </div>
        <p className="text-4xl sm:text-6xl w-full mt-4 font-One uppercase ">
          We Help To Get Fitness Goal
        </p>
        <p className="w-full text-gray-300 font-DM text-xl lg:text-xl mt-6 mb-4 ">
          Our mission has always been to create a welcoming and supportive
          environment where everyone, regardless of their fitness level.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center mt-8">
          {FacilitiesData.map((facility) => (
            <div key={facility.id} className="font-One mb-4 p-2 flex flex-col">
              <img
                src={facility.imageUrl}
                alt={facility.title}
                className="h-16 w-16 object-cover mb-2 "
              />
              <div className="">
                <h1 className="text-2xl ">{facility.title}</h1>
                <p className="text-xl lg:text-2xl md:text-lg lg:w-160 font-DM text-gray-300 ">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-3 mb-8">
        <MembershipSection />
      </div>
    </>
  );
};

export default Facilities;

import React from "react";

import MembershipSection from "./Membership";
import WkGuid from "../components/WkGuid";

const Facilities = () => {
  const FacilitiesData = [
    {
      id: 1,
      title: "Cardio Equipment",
      description:
        "Our gym is equipped with a wide range of cardio machines, including treadmills, ellipticals, and stationary bikes, to help you improve your cardiovascular fitness.",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
    },
    {
      id: 2,
      title: "Strength Training",
      description:
        "We offer a variety of strength training equipment, including free weights, resistance machines, and functional training tools to help you build muscle and strength.",
      imageUrl:
        "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
    },
    {
      id: 3,
      title: "Group Classes",
      description:
        "Join our group fitness classes led by certified instructors. From yoga to high-intensity interval training (HIIT), we have something for everyone.",
      imageUrl:
        "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
    },
    {
      id: 4,
      title: "Personal Training",
      description:
        "Our certified personal trainers are here to help you reach your fitness goals. Whether you're a beginner or an experienced athlete, we can create a personalized workout plan for you.",
      imageUrl: "https://framerusercontent.com/images/B8TSO75Dd4eD75lnadm9FGAXtE.svg",
    },
  ];

  return (
    <>
    <div className="text-white text-xl pt-16 lg:mx-15 mx-8">
      <header className="text-xl font-One w-full text-[#48D3A3] italic sm:text-3xl ">
        OUR FACILITIES
      </header>
      <p className="text-5xl sm:text-6xl w-full mt-4 font-One uppercase ">
        We Help To Get Fitness Goal
      </p>
      <p className="w-full text-gray-400 font-M text-lg lg:text-xl mt-6 mb-4 ">
        Our mission has always been to create a welcoming and supportive environment where everyone, regardless of their fitness level.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center mt-8">
        {FacilitiesData.map((facility) => (
          <div
            key={facility.id}
            className="font-One mb-4 p-2 flex flex-col"
          >
            <img
              src={facility.imageUrl}
              alt={facility.title}
              className="h-16 w-16 object-cover mb-2 "
            />
            <div className="">
              <h1 className="text-2xl ">{facility.title}</h1>
              <p className="text-lg lg:text-2xl lg:w-160 font-DM text-gray-400 ">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
    <div className="mx-3 mb-8">
    <WkGuid />
    <MembershipSection />
    </div>
    </>
  );
};

export default Facilities;

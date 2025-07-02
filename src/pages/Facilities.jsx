import React from "react";
import Button from "../components/Button";
import Boss2 from "../assets/BOSS2.jpg";

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
    <div className="text-white text-xl pt-16 mx-7">
      <header className="text-xl font-One w-full text-[#48D3A3] italic sm:text-3xl text-center">
        OUR FACILITIES
      </header>
      <p className="text-5xl sm:text-6xl w-full mt-4 font-One uppercase text-center">
        We Help To Get Fitness Goal
      </p>
      <p className="w-full text-gray-400 font-M text-lg mt-6 mb-4 text-center">
        Our mission has always been to create a welcoming and supportive environment where everyone, regardless of their fitness level.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mt-8">
        {FacilitiesData.map((facility) => (
          <div
            key={facility.id}
            className="font-One mb-4 border border-gray-300 p-4 flex flex-col items-center"
          >
            <img
              src={facility.imageUrl}
              alt={facility.title}
              className="h-16 w-16 object-cover mb-2 text-start"
            />
            <div className=" text-start">
              <h1 className="text-2xl text-center">{facility.title}</h1>
              <p className="text-lg lg:w-80 font-DM text-gray-400 ">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <img
          src={Boss2}
          alt="Boss"
          className="h-auto max-h-[90vh] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Facilities;

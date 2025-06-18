import React from "react";
import Button from "../components/Button";

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
          imageUrl:"https://framerusercontent.com/images/B8TSO75Dd4eD75lnadm9FGAXtE.svg",
        },
    ];

    return (
        <div className="text-white text-xl pt-16 mx-7">
            <header className="text-xl font-One w-screen text-[#48D3A3] italic sm:text-3xl">
                OUR FACILITIES
            </header>
            <p className="text-5xl sm:text-6xl sm:w-screen w-fit mt-4 font-One uppercase">
                We Help To Get Fitness Goal
            </p>
            <p className="w-fit mr-3 sm:w-screen text-gray-400 font-M  text-lg mt-6 mb-4">
                Our mission has always been to create a welcoming and supportive
                environment where everyone, regardless of their fitness level.
            </p>
            <div className="sm:flex sm:flex-wrap sm:justify-between  mt-8">
            {FacilitiesData.map((facility) => (
                <div
                    key={facility.id}
                    className=" font-One mb-4 w-fit"
                >
                    <img
                        src={facility.imageUrl}
                        alt={facility.title}
                        className=" h-16 w-16 object-cover mb-2"
                    />
                    <h1 className=" text-3xl">{facility.title}</h1>
                    <p className="text-lg font-DM text-gray-400 ">{facility.description}</p>
                </div>
            ))}
            </div>

            <div>
              <img src="https://framerusercontent.com/images/1u1P4IwQpMVbJQFutraspJBKAo.png?scale-down-to=1024" alt="" 
              className="
              sm:h-[90vh] sm:object-center sm:object-cover sm:w-screen"
              />
            </div>
           
        </div>
    );
};

export default Facilities;

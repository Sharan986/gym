import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Wbutton from "../components/Wbutton";

const About = () => {
  const Values = [
    {
      id: 1,
      title: "Community",
      description:
        "We believe in the power of community to motivate, support, and inspire. At OneRepMaax, you're never alone on your fitness journey.",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
    },
    {
      id: 2,
      title: "Quality",
      description:
        "From our equipment to our trainers, we invest in quality. We're committed to providing the best possible resources for your fitness journey.",
      imageUrl:
        "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
    },
    {
      id: 3,
      title: "Personalization",
      description:
        "We recognize that everyone's fitness journey is unique. Our approach is tailored to your goals, preferences, and needs.",
      imageUrl:
        "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-full h-60 object-cover object-center scale-125"
        />
        <div className="absolute inset-0 flex flex-col  text-white justify-center ml-10">
          <h1 className="text-5xl font-One">About Us</h1>
          <h1 className="font-One text-2xl mt-9">
            <Link to="/" className="hover:text-yellow-300">HOME</Link>
            <span className="text-yellow-300"> / ABOUT</span>
          </h1>
        </div>
      </div>
      <div className="bg-[#070915] font-One mx-3">
    <div className="flex flex-col md:flex-row  text-white p-4 md:p-8">
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <img
          src="https://framerusercontent.com/images/DtDqTbYboEmXHzSbpGaNQgZUdXA.png?scale-down-to=1024"
          alt="Fitness"
          className="w-full max-w-md"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <div className="text-[#48D3A3]  text-3xl font-semibold mb-4">WHAT WE DO</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          OUR MISSION IS TO DEVELOP YOUR FITNESS
        </h1>
        <p className="mb-8">
          We are the un-corporation, dedicated to giving you the tools for your fitness goals in a vibrant gym. Unlike other clubs, you'll stay because we care!
        </p>
        <ul className="list-none p-0">
          <li className="mb-2 flex items-center">
            <span className="text-[#48D3A3] text-2xl mr-2">01.</span>
            <span className="text-xl ">HEALTHY & EFFECTIVE</span>
          </li>
          <li className="flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2">02.</span>
            <span className="text-xl">INDIVIDUAL APPROACH</span>
          </li>
        </ul>
      </div>
    </div>

     <div className="flex flex-col md:flex-row  text-white p-4 md:p-8">
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <div className="text-[#48D3A3] text-3xl  font-semibold mb-4">100% PREMIUM QUALITY</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          WE WILL GIVE YOU STRENGTH AND HEALTH
        </h1>
        <p className="mb-8">
          Our gym is dedicated to helping individuals of all fitness levels achieve their health and wellness goals.
        </p>
        <ul className="list-none p-0">
          <li className="mb-2 flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2">→</span>
            <span>ENHANCING JOINT BLOOD FLOW</span>
          </li>
          <li className="mb-2 flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2">→</span>
            <span>HELP REDUCE INFLAMMATION</span>
          </li>
          <li className="flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2 ">→</span>
            <span>HELPS YOU STICK TO YOUR DIET</span>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center relative">
        <img
          src="https://framerusercontent.com/images/qISsB3ElwghTDVU84HVxbjQpD2o.jpg?scale-down-to=1024"
          alt="Fitness"
          className="w-full max-w-md"
        />
       
      </div>
    </div>
    </div>

      <div className="text-white text-xl pt-16 px-4 md:px-8">
        <header className="text-xl font-One text-[#48D3A3] italic sm:text-3xl text-center">
          Our Values
        </header>
        <p className="text-3xl sm:text-5xl w-full mt-4 font-One uppercase text-center">
          Strength. Discipline. Growth. Consistency.
        </p>
        <p className="text-gray-400 font-M text-base md:text-lg mt-6 mb-4 text-center">
          Our mission has always been to create a welcoming and supportive environment where everyone, regardless of their fitness level, can thrive.
        </p>

        <div className="flex  flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          {Values.map((value) => (
            <div key={value.id} className="font-One mb-4 sm:mb-0 border-2 border-[#48D3A3]  sm:w-1/2 md:w-1/3 p-4">
              <img
                src={value.imageUrl}
                alt={value.title}
                className="h-16 w-16 object-cover mb-2 mx-auto"
              />
              <h1 className="text-2xl md:text-3xl text-center">{value.title}</h1>
              <p className="text-base md:text-lg font-DM text-gray-400 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

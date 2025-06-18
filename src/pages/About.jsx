import React from "react";
import Wbutton from "../components/Wbutton";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const About = () => {

  const Values= [
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
        {/* Background Image */}
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white ">
          <h1 className=" text-5xl font-One z-10">About Us</h1>
          <h1 className="font-One text-2xl mt-9">
            <Link to='/'> HOME </Link>
           <span className="text-yellow-300">/ABOUT</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center font-One">

        <div className="text-white pt-16 ml-6 mr-6  ">
          <header className="text-xl w-full text-[#48D3A3] italic ">
            what we do
          </header>
          <p className="text-5xl mt-2  uppercase ">
            Our mission is to develop your fitness
            <br />
          </p>
          <p className="max-w-screen text-gray-400 font-DM text-lg mt-6 mb-4">
            We are the un-corporation, dedicated to giving you the tools for
            your fitness goals in a vibrant gym. Unlike other clubs, you’ll stay
            because we care
          </p>
          <div className="text-center">
           <img
          src="https://framerusercontent.com/images/WJFi2cgxAQot5SoG1L0KXIYoY8.png"
          alt=""
          className=""
        /></div>
        </div>
      </div>


        <div className="flex justify-center flex-col items-center font-One">

        <div className="text-white pt-16 ml-6 mr-6  ">
          <header className="text-xl w-full text-[#48D3A3] italic ">
            100% PREMIUM QUALITY
          </header>
          <p className="text-5xl mt-2  uppercase ">
           We Will Give You  Strength and Health
            <br />
          </p>
          <p className="max-w-screen text-gray-400 font-DM text-lg mt-6 mb-4">
           Our gym is dedicated to helping individuals of all fitness levels achieve their health and wellness goals
          </p>
          <div className="text-center">
           <img
          src="https://framerusercontent.com/images/qISsB3ElwghTDVU84HVxbjQpD2o.jpg?scale-down-to=1024"
          alt=""
          className=""
        /></div>
        </div>
      </div>

       <div className="text-white text-xl pt-16 mx-7">
         <header className="text-xl font-One w-screen text-[#48D3A3] italic sm:text-3xl">
               Our Values
            </header>
            <p className="text-5xl sm:text-6xl sm:w-screen w-fit mt-4 font-One uppercase">
                Strength. Discipline. Growth. Consistency.
            </p>
            <p className="w-fit mr-3 sm:w-screen text-gray-400 font-M  text-lg mt-6 mb-4">
                Our mission has always been to create a welcoming and supportive
                environment where everyone, regardless of their fitness level.
            </p>

            <div className="sm:flex sm:flex-wrap sm:justify-between  mt-8">
            {Values.map((value) => (
                <div
                    key={value.id}
                    className=" font-One mb-4 w-fit"
                >
                    <img
                        src={value.imageUrl}
                        alt={value.title}
                        className=" h-16 w-16 object-cover mb-2"
                    />
                    <h1 className=" text-3xl">{value.title}</h1>
                    <p className="text-lg font-DM text-gray-400 ">{value.description}</p>
                </div>
            ))}
            </div>
          </div>
      <Footer />
    </>
  );
};

export default About;

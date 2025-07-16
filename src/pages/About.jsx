import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Wbutton from "../components/Wbutton";
import { w3 } from "../assets/w3/w3";

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
       className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
     />
     <div className="absolute bottom-8 left-8 text-white">
       <h1 className="text-5xl font-One lg:text-7xl z-10">ABOUT US</h1>
       <h1 className="font-One text-2xl mt-4 lg:text-5xl">
         <Link to='/'>HOME</Link>
         <span className="text-yellow-300 lg:text-5xl">/About Us</span>
       </h1>
     </div>
   </div>
      <div className="bg-[#070915] font-One mx-3">
        
          <p className="text-4xl text-gray-200 mt-2 uppercase pb-1 mx-7">Sweat Now, Thank Us Later.</p>

    <div className="flex flex-col md:flex-row  text-white md:p-8">
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <img
          src={w3.i7}
          alt="Fitness"
          className="w-full max-w-md"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <div className="text-[#48D3A3]  text-3xl font-semibold mb-4">WHAT WE DO</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          OUR MISSION IS TO DEVELOP YOUR FITNESS
        </h1>
        <p className="mb-8 text-lg">
          We are the un-corporation, dedicated to giving you the tools for your fitness goals in a vibrant gym. Unlike other clubs, you'll stay because we care!
        </p>
        <ul className="list-none p-0">
          <li className="mb-2 flex items-center">
            <span className="text-[#48D3A3] text-2xl mr-2">01.</span>
            <span className="text-2xl ">HEALTHY & EFFECTIVE</span>
          </li>
          <li className="flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2">02.</span>
            <span className="text-2xl">INDIVIDUAL APPROACH</span>
          </li>
        </ul>
      </div>
    </div>

     <div className="flex flex-col md:flex-row  text-white  md:p-8">
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <div className="text-[#48D3A3] text-3xl  font-semibold mb-4">100% PREMIUM QUALITY</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          WE WILL GIVE YOU STRENGTH AND HEALTH
        </h1>
        <p className="mb-8 text-xl ">
          Our gym is dedicated to helping individuals of all fitness levels achieve their health and wellness goals.
        </p>
        <ul className="list-none p-0">
          <li className="mb-2 flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2">01.</span>
            <span>ENHANCING JOINT BLOOD FLOW</span>
          </li>
          <li className="mb-2 flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2">02.</span>
            <span>HELP REDUCE INFLAMMATION</span>
          </li>
          <li className="flex items-center text-2xl">
            <span className="text-[#48D3A3] mr-2 ">03.</span>
            <span>HELPS YOU STICK TO YOUR DIET</span>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center relative">
        <img
          src={w3.i11}
          alt="Fitness"
          className="w-full max-w-md"
        />
       
      </div>
    </div>
    </div>

      <div className="text-white text-xl pt-5 md:px-8 mx-7 ">
        <header className="text-xl font-One text-[#48D3A3] ">
          Our Values
        </header>
        <p className="text-4xl sm:text-5xl w-full mt-4 font-One uppercase ">
          Strength. Discipline. Growth. Consistency.
        </p>
        <p className="text-gray-300 font-M text-xl md:text-lg mt-6 mb-3 ">
          Our mission has always been to create a welcoming and supportive environment where everyone, regardless of their fitness level, can thrive.
        </p>

       <div className="flex gap-10 flex-row md:w-[80vw] flex-wrap justify-center mt-8">
  {Values.map((value) => (
    <div 
      key={value.id} >
      <img
        src={value.imageUrl}
        alt={value.title}
        className="h-16 w-16 object-cover mb-2" 
      />
      <h1 className="text-3xl md:text-3xl pb-3 pt-3 font-One ">{value.title}</h1>
      <p className="text-lg md:text-lg font-DM text-gray-300 fot-DM">
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

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Wbutton from "../components/Wbutton";
import { w3 } from "../assets/w3/w3";

const About = () => {
  const Values = [
    {
      id: 1,
      title: "Premium Gym Facilities",
      description:
        "Cardio & strength equipment, group fitness studios, personal training areas, locker rooms, free WiFi, coffee, and ample parking - everything you need for fitness success in Jamshedpur.",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
    },
    {
      id: 2,
      title: "Specialized Fitness Programs",
      description:
        "Expert-led Yoga classes, high-energy Zumba sessions, and functional training programs in Mango, Dimna designed to keep you motivated and engaged in your fitness journey.",
      imageUrl:
        "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
    },
    {
      id: 3,
      title: "Open 7 Days a Week",
      description:
        "We're here when you need us! Open 7 days a week with separate changing rooms, showers, posing room, and certified personal trainers ready to support your fitness goals.",
      imageUrl:
        "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
    },
  ];

  return (
    <>
      
      <article>
        <header className="relative overflow-hidden">
          <img
            src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
            alt="OneRepMaax Gym - Premium Fitness Center in Jamshedpur, Mango, Dimna"
            className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-5xl font-One lg:text-7xl z-10">ABOUT US</h1>
            <nav className="font-One text-2xl mt-4 lg:text-5xl">
              <Link to='/'>HOME</Link>
              <span className="text-yellow-300 lg:text-5xl">/About Us</span>
            </nav>
          </div>
        </header>
        
        <main className="bg-[#070915] font-One mx-3">
          <div className="text-4xl text-gray-200 mt-2 uppercase pb-1 mx-7">
            <p>Sweat Now, Thank Us Later.</p>
          </div>

          <section className="flex flex-col md:flex-row text-white md:p-8">
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
              <img
                src={w3.i7}
                alt="OneRepMaax Gym member training with certified trainer in Jamshedpur"
                className="w-full max-w-md"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
              <header className="text-[#48D3A3] text-3xl font-One mb-4">OUR MISSION</header>
              <h2 className="text-4xl md:text-5xl font-One mb-4">
                EMPOWERING YOUR FITNESS JOURNEY IN JAMSHEDPUR
              </h2>
              <p className="mb-8 text-lg font-DM">
                Empowering individuals across Jamshedpur, Mango, Dimna, and Sankosai to achieve their fitness goals with fun, support, and motivation. We welcome all ages and fitness levels with customized workout plans and certified personal trainers!
              </p>
              <ul className="list-none p-0 font-One">
                <li className="mb-2 flex items-center">
                  <span className="text-[#48D3A3] text-2xl mr-2">01.</span>
                  <span className="text-2xl">AGE-INCLUSIVE MEMBERSHIP</span>
                </li>
                <li className="flex items-center text-2xl">
                  <span className="text-[#48D3A3] mr-2">02.</span>
                  <span className="text-2xl">CUSTOMIZED WORKOUT PLANS</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col md:flex-row text-white md:p-8">
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <header className="text-[#48D3A3] text-3xl font-One mb-4">OUR VISION</header>
              <h2 className="text-4xl md:text-5xl font-One mb-4">
                STATE-OF-THE-ART FITNESS CENTER FOR EVERYONE
              </h2>
              <p className="mb-8 text-xl font-DM">
                To make fitness accessible to everyone in Jamshedpur by providing state-of-the-art facilities and services that cater to diverse needs and goals, empowering individuals to achieve their full potential.
              </p>
              <ul className="list-none p-0 font-One">
                <li className="mb-2 flex items-center text-2xl">
                  <span className="text-[#48D3A3] mr-2">01.</span>
                  <span>YOGA & ZUMBA STUDIOS</span>
                </li>
                <li className="mb-2 flex items-center text-2xl">
                  <span className="text-[#48D3A3] mr-2">02.</span>
                  <span>CERTIFIED TRAINERS</span>
                </li>
                <li className="flex items-center text-2xl">
                  <span className="text-[#48D3A3] mr-2">03.</span>
                  <span>FUNCTIONAL TRAINING AREAS</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center relative">
              <img
                src={w3.i11}
                alt="Modern gym equipment and facilities at OneRepMaax Fitness Center in Mango, Jamshedpur"
                className="w-full max-w-md"
              />
            </div>
          </section>
        </main>

        <section className="text-white text-xl pt-5 md:px-8 mx-7">
          <header className="text-xl font-One text-[#48D3A3]">
            What We Offer at OneRepMaax Gym Jamshedpur
          </header>
          <h2 className="text-4xl sm:text-5xl w-full mt-4 font-One uppercase">
            Strength. Support. Success. Community.
          </h2>
          <p className="text-gray-300 font-DM text-xl md:text-lg mt-6 mb-3">
            From beginners to advanced fitness enthusiasts in Jamshedpur, Mango, Dimna, and Sankosai, we provide everything you need to succeed. Our welcoming environment caters to all ages and fitness levels with personalized support.
          </p>

          <div className="flex gap-10 flex-row md:w-[80vw] flex-wrap justify-center mt-8">
            {Values.map((value) => (
              <div key={value.id}>
                <img
                  src={value.imageUrl}
                  alt={`${value.title} - OneRepMaax Gym facilities in Jamshedpur`}
                  className="h-16 w-16 object-cover mb-2" 
                />
                <h3 className="text-3xl md:text-3xl pb-3 pt-3 font-One">{value.title}</h3>
                <p className="text-lg md:text-lg font-DM text-gray-300 fot-DM">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default About;

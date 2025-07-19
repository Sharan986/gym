import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" pt-24 mx-8 lg:mx-24 mb-16 font-DM text-lg text-gray-800">
      
      <div className="mb-10 text-center">
        <img src={logo} alt="Logo" className="w-24 mb-4 mx-auto" />
        <p className="text-lg md:text-xl font-DM text-gray-400 font-semibold max-w-xl mx-auto lg:text-2xl">
          A Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These.
        </p>
      </div>

      <div className="grid gap-10 md:gap-10 text-gray-400 font-DM">

        <div className="md:flex md:space-x-10">
          {/* COMPANY */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl mb-6 text-[#53f0b8] font-One md:text-4xl lg:text-5xl">COMPANY</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              <li>
                <Link to="/About" className="text-lg font-semibold hover:text-white transition md:text-xl lg:text-2xl ">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ServicesDetail" className=" text-lg font-semibold hover:text-white transition md:text-xl lg:text-2xl">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/Supplement" className=" text-lg font-semibold hover:text-white transition md:text-xl lg:text-2xl">
                  Supplement
                </Link>
              </li>
              <li>
                <Link to="/Gallery" className=" text-lg font-semibold hover:text-white transition md:text-xl lg:text-2xl">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/JoinUs" className=" text-lg font-semibold hover:text-white transition md:text-xl lg:text-2xl">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/WorkoutGuide" className=" text-lg font-semibold hover:text-white transition md:text-xl lg:text-2xl">
                  Workout Guide
                </Link>
              </li>
            </ul>
          </div>


          <div className="w-full md:w-1/2">
            <h2 className="text-3xl mb-6 text-[#53f0b8] font-One md:text-4xl lg:text-5xl">CONTACT US</h2>
            <ul className="space-y-4">
              <li className=" text-lg font-semibold flex gap-3 items-start">
                <img src="https://framerusercontent.com/images/3Gjs31lJXDq4ZvzvREIv8CQ0H08.svg" alt="phone" className="mt-1 w-5" />
                <span className="md:text-xl lg:text-2xl">+91 9204057290</span>
              </li>
              <li className=" text-lg font-semibold flex gap-3 items-start">
                <img src="https://framerusercontent.com/images/h6wGZ0hxbQPDpnwFJ25d2ZMHicQ.svg" alt="email" className="mt-1 w-5" />
                <span className="md:text-xl lg:text-2xl">onerepmaaxgym@gmail.com</span>
              </li>
              <li className=" text-lg font-semibold flex gap-3 items-start">
                <img src="https://framerusercontent.com/images/RmsksdVnRfJJKfOFy4VJv85AXLo.svg" alt="address" className="mt-1 w-5" />
                <span className="md:text-xl lg:text-2xl">
                  One Rep Maax Gym, Dimna Rd, Shankoshai, Mango, Jamshedpur, Jharkhand 831018
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* OPERATIONAL HOUR */}
        <div>
          <h2 className="text-3xl mb-6 text-[#53f0b8] font-One md:text-4xl">OPERATIONAL HOUR</h2>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold md:text-xl ">
                <span className="text-yellow-400 text-lg w-24 lg:text-2xl">Mon - Sat :</span> <span className=" pl-10 lg:text-2xl">05:00 AM - 11:00 PM</span>
              </p>


              <div className="border-t border-gray-300 my-2" />
            </li>
            <li>
              <p className="font-bold md:text-xl">
                <span className="text-yellow-400 inline-block text-lg w-24 lg:text-2xl">Sun :</span> <span className="pl-12 lg:text-2xl">08:00 AM - 06:00 PM</span>
              </p>
              <div className="border-t border-gray-300 mb-16v " />
            </li>
          </ul>
        </div>


        <iframe className="md:w-[700px] mb-8 lg:w-full lg:h-96"
          title="GYM LOCATION"
          width="100%"
          height="250"
          style={{ border: 2, borderColor: "#48D3A3" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=One+Rep+Maax+Gym,+Dimna+Road,+Jamshedpur&output=embed"
        />

      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto font-sans text-gray-800 px-9">
      {/* Logo and Description */}
      <div className="mb-10 text-center">
        <img src={logo} alt="Logo" className="w-24 mb-4 mx-auto" />
        <p className="text-lg font-DM text-gray-400 font-semibold max-w-xl mx-auto">
          A Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These.
        </p>
      </div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400 font-M">

  {/* COMPANY */}
  <div>
    <h2 className="text-2xl mb-6 text-[#53f0b8] font-One">COMPANY</h2>
    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
      <li><Link to="/About" className="text-base font-semibold hover:text-white transition">About Us</Link></li>
      <li><Link to="/ServicesDetail" className="text-base font-semibold hover:text-white transition">Service</Link></li>
      <li><Link to="/Supplement" className="text-base font-semibold hover:text-white transition">Supplement</Link></li>
      <li><Link to="/Gallery" className="text-base font-semibold hover:text-white transition">Gallery</Link></li>
      <li><Link to="/TrainersPage" className="text-base font-semibold hover:text-white transition">Trainers</Link></li>
      <li><Link to="/JoinUs" className="text-base font-semibold hover:text-white transition">Contact Us</Link></li>
       <li><Link to="/WorkoutGuide" className="text-base font-semibold hover:text-white transition">WorkoutGuide</Link></li>
    </ul>
  </div>

  {/* CONTACT US */}
  <div>
    <h2 className="text-2xl mb-6 text-[#53f0b8] font-One">CONTACT US</h2>
    <ul className="space-y-4">
      <li className="text-base font-semibold flex gap-3 items-start">
        <img src="https://framerusercontent.com/images/3Gjs31lJXDq4ZvzvREIv8CQ0H08.svg" alt="phone" className="mt-1 w-5" />
        <span>+91 9229556207</span>
      </li>
      <li className="text-base font-semibold flex gap-3 items-start">
        <img src="https://framerusercontent.com/images/h6wGZ0hxbQPDpnwFJ25d2ZMHicQ.svg" alt="email" className="mt-1 w-5" />
        <span>info@onerepmaax.com</span>
      </li>
      <li className="text-base font-semibold flex gap-3 items-start">
        <img src="https://framerusercontent.com/images/RmsksdVnRfJJKfOFy4VJv85AXLo.svg" alt="address" className="mt-1 w-5" />
        <span>Dimna Road, Mango Jamshedpur, Jharkhand India</span>
      </li>
    </ul>
  </div>

  {/* OPERATIONAL HOUR */}
  <div>
    <h2 className="text-2xl mb-6 text-[#53f0b8] font-One">OPERATIONAL HOUR</h2>
    <ul className="space-y-4">
      <li>
        <p className="font-semibold"><span className="text-yellow-400 inline-block w-24">Mon - Fri :</span> 08:00 AM - 10:00 PM</p>
        <div className="border-t border-gray-300 my-2" />
      </li>
      <li>
        <p className="font-bold"><span className="text-yellow-400 inline-block w-24">Sat :</span> 09:00 AM - 09:00 PM</p>
        <div className="border-t border-gray-300 my-2" />
      </li>
      <li>
        <p className="font-bold"><span className="text-yellow-400 inline-block w-24">Sun :</span> Closed</p>
        <div className="border-t border-gray-300 my-2" />
      </li>
    </ul>
  </div>

</div>

    </div>
  );
};

export default Footer;

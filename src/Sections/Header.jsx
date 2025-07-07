import React from "react";
import Navbar from "../components/Navbar";
import HeaderImg from "../assets/Header.jpg";
import Button from "../components/Button";
import Wbutton from "../components/Wbutton";
import Marquee from "../components/Marquee";
import { Link } from "react-router-dom";
import Services from "../pages/Services";
import Trainers from "../pages/Trainers";
import Facilities from "../pages/Facilities";
import Join from "../components/Join";
import Testimonials from "../pages/Testimonials";
import Num from "./Num";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <>

      <div className="relative overflow-hidden mb-4">
             <Nav />
        <img
          src={HeaderImg}
          alt=""
          className=" h-fit lg:h-screen scale-100 lg:w-screen w-fit object-cover object-center"
        />
             
      

        <div className="absolute top-0 left-0  h-20 w-24 sm:w-full mx-6  font-One uppercase  ">
         
          <div className="text-white w-screen text-xl  mt-36 md:mt-30">
            <header className="text-2xl  w-screen text-[#48D3A3] italic md:text-4xl ">FITNESS & GYM</header>
            <p className=" text-5xl w-80 md:w-full md:text-7xl">
              Discover 
              <div className="pt-38">

              </div>
            
            </p>
          </div>
          <div className="mt-14 sm:flex sm:items-center font-One  sm:gap-7  ">
           <Link to="JoinUs"><Button text="JOIN US TODAY" className="text-xl mb-4 sm:mb-0 md:text-3xl" /></Link>
           <Link to="/about"><Wbutton text="ABOUT US" className="text-xl md:text-3xl " /></Link> 
        </div>
        </div>

        
      </div>
      <Marquee />
      <Num />
      <Services />
      <Trainers />
      <Facilities />
      <Join />  
      <Testimonials />
      <Footer />
    </>
  );
};

export default Header;


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
import Icon from "../components/Icon"; 


const Header = () => {
  return (
    <>
  
      <Nav />
   
      <div className="relative overflow-hidden">
            
        <img
          src="/allPhotos/Header.webp"
          alt=""
          className=" h-[140vw] md:h-[90vw] md:w-full lg:h-screen scale-100 lg:w-screen w-fit object-cover object-center"
        />
             
      

        <div className="absolute top-0 left-0  h-20 w-24 sm:w-full mx-6  font-One uppercase  ">
         
          <div className="text-white w-screen text-xl  mt-6 md:mt-6">
            <div className="flex justify-center items-center gap-2 ">
          <Icon className="" />
            <header className="text-xl  w-screen text-[#48D3A3] pl ">FITNESS & GYM</header>
            </div>
           
            <p className=" text-4xl  w-80 md:w-160 md:text-6xl">
              Transform. Perform. Dominate.
            
            </p>
          </div>
          <div className="mt-50 md:mt-96 sm:flex sm:items-center font-One  sm:gap-7  ">
           <Link to="JoinUs"><Button text="JOIN US TODAY" className="text-2xl mb-4 sm:mb-0 md:text-3xl" /></Link>
           <Link to="/about"><Wbutton text="ABOUT US" className="text-2xl md:text-3xl " /></Link> 
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

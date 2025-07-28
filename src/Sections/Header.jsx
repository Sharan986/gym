
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
      <main className="relative overflow-hidden md:bg-black">
        <img
          src="/allPhotos/Header.webp"
          alt="OneRepMaax Gym (One Rep Maax) - Premium fitness center in Mango, Dimna, Jamshedpur with K11 certified trainers, modern equipment, 5000+ sq ft area"
          className=" h-[140vw] md:pt-32 md:bg-black md:h-[75vw] md:w-full lg:h-screen scale-100 lg:w-screen w-fit object-cover object-center"
        />
             
      

        <section className="absolute top-0 left-0  h-20 w-24 sm:w-full mx-6  font-One uppercase  ">
          <div className="text-white w-screen text-xl  mt-6 md:mt-6">
            <div className="flex justify-center items-center gap-2 ">
              <Icon className="" />
              <header className="text-xl  w-screen text-[#48D3A3] pl ">OneRepMaax Gym</header>
            </div>
           
            <h1 className=" text-4xl  w-80 md:w-160 md:text-[64px] lg:text-[80px] lg:w-full">
              Transform. Perform. <br /> Dominate.
            </h1>
          </div>
          <div className="mt-50 lg:mt-100 md:mt-70 sm:flex sm:items-center font-One  sm:gap-7   ">
            <Link to="JoinUs" aria-label="Join OneRepMaax Gym today - Best gym in Mango, Dimna, Jamshedpur with K11 certified trainers">
              <Button text="JOIN US TODAY" className="text-2xl mb-4 sm:mb-0 md:text-3xl" />
            </Link>
            <Link to="/about" aria-label="Learn about OneRepMaax (One Rep Maax) Gym facilities, trainers, and services in Jamshedpur">
              <Wbutton text="ABOUT US" className="text-2xl md:text-3xl " />
            </Link> 
          </div>
        </section>
      </main>
      <section className="md:pt-2">
        <Marquee />
        <Num />
        <Services />
        <Trainers />
        <Facilities />
        <Join />  
        <Testimonials />
        <Footer />
      </section>
    </>
  );
};

export default Header;

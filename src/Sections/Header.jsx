
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
import { Helmet } from "react-helmet-async"; 


const Header = () => {
  return (
    <>
      <Helmet>
        <title>OneRepMaax Gym | One Rep Maax | Best Gym in Mango, Dimna, Jamshedpur | K11 Certified Trainers</title>
        <meta name="description" content="OneRepMaax Gym (One Rep Maax) - Premium fitness center in Mango, Dimna, Jamshedpur. K11 certified trainers, 5000+ sq ft area, modern equipment, weight loss & strength training. Memberships from ₹1,200/month." />
        <meta name="keywords" content="OneRepMaax, One Rep Maax, gym in Mango, gym in Dimna, gym near me, gym in Jamshedpur, K11 certified trainers, Reps India member, premium fitness center, weight loss, strength training, personal training, gym membership Jamshedpur" />
        <link rel="canonical" href="https://www.onerepmaaxgym.in/" />
        
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="OneRepMaax Gym | Best Gym in Mango, Dimna, Jamshedpur" />
        <meta property="og:description" content="Premium fitness center with K11 certified trainers, 5000+ sq ft area, modern equipment. Transform your fitness at OneRepMaax Gym, Jamshedpur." />
        <meta property="og:url" content="https://www.onerepmaaxgym.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.onerepmaaxgym.in/allPhotos/Header.webp" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "OneRepMaax Gym - Premium Fitness Center in Jamshedpur",
            "description": "OneRepMaax Gym (One Rep Maax) - Premium fitness center in Mango, Dimna, Jamshedpur with K11 certified trainers, modern equipment, and comprehensive fitness programs.",
            "url": "https://www.onerepmaaxgym.in/",
            "mainEntity": {
              "@type": "HealthClub",
              "name": "OneRepMaax Gym",
              "alternateName": ["One Rep Maax", "One Rep Maax Gym", "OneRepMaax"],
              "url": "https://www.onerepmaaxgym.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dimna Rd, Shankoshai, Mango",
                "addressLocality": "Jamshedpur",
                "addressRegion": "Jharkhand",
                "postalCode": "831018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.8046,
                "longitude": 86.2029
              },
              "telephone": "+91-9204057290",
              "email": "onerepmaaxgym@gmail.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.onerepmaaxgym.in/"
              }]
            }
          })}
        </script>
      </Helmet>
  
      <Nav />
      <main className="relative overflow-hidden bg-black">
        <img
          src="/allPhotos/Header.webp"
          alt="OneRepMaax Gym (One Rep Maax) - Premium fitness center in Mango, Dimna, Jamshedpur with K11 certified trainers, modern equipment, 5000+ sq ft area"
          fetchPriority="high"
          className=" h-[140vw] md:pt-38 md:h-[75vw] md:w-full lg:h-screen scale-100 lg:w-screen w-fit object-cover object-center"
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

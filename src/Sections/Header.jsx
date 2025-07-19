
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
import { Helmet } from "react-helmet"; 


const Header = () => {
  return (
    <>
      <Helmet>
        <title>OneRepMaax Gym Jamshedpur | Best Fitness Center Dimna Road | REPS India Certified</title>
        <meta 
          name="description" 
          content="OneRepMaax Gym at Dimna Rd, Jamshedpur - Premium fitness center with K11 certified trainer & REPS India member Aditya Singh. Nutrition consultation, weight loss transformations. Memberships from Rs 1,200/month. Near Sunrise Tiles, Hero Showroom." 
        />
        <meta 
          name="keywords" 
          content="OneRepMaax gym Jamshedpur, gym Dimna Road, fitness center Mango, gym Sankosai, personal trainer Jamshedpur, K11 certified trainer, REPS India member, nutritionist Jamshedpur, yoga classes Jamshedpur, Zumba Mango, gym membership Jamshedpur, Aditya Singh gym owner, weight loss transformation, gym near Sunrise Tiles, gym near Hero Showroom, gym near Aastha Space Town, best gym alternative to Bodylyn gym, better than Iron Paradise gym" 
        />
        <meta name="author" content="OneRepMaax Gym" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Jamshedpur" />
        <meta name="geo.position" content="22.8046;86.2029" />
        <meta name="ICBM" content="22.8046, 86.2029" />
        <meta name="revisit-after" content="1 days" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://onerepmaaxgym.in" />
        <meta property="business:contact_data:street_address" content="Dimna Rd, Shankoshai" />
        <meta property="business:contact_data:locality" content="Mango" />
        <meta property="business:contact_data:region" content="Jamshedpur" />
        <meta property="business:contact_data:postal_code" content="831018" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="business:contact_data:phone_number" content="+91-9204057290" />
        <meta property="business:contact_data:website" content="https://onerepmaaxgym.in" />
        <meta name="apple-mobile-web-app-title" content="OneRepMaax Gym" />
        <meta name="application-name" content="OneRepMaax Gym Jamshedpur" />
        <meta name="msapplication-TileColor" content="#48D3A3" />
        <meta name="theme-color" content="#48D3A3" />
        <meta property="og:title" content="OneRepMaax Gym - Best Fitness Center in Jamshedpur" />
        <meta property="og:description" content="OneRepMaax Gym at Dimna Rd, Jamshedpur with K11 certified trainers. Memberships from Rs 1,200/month. Personal training, yoga, Zumba & state-of-the-art equipment. Founded by Aditya Singh." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onerepmaaxgym.in" />
        <meta property="og:image" content="https://onerepmaaxgym.in/allPhotos/Header.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OneRepMaax Gym - Best Fitness Center in Jamshedpur" />
        <meta name="twitter:description" content="Premium fitness center at Dimna Rd with K11 certified trainers. Memberships from Rs 1,200/month. Personal training, yoga, Zumba available." />
        <link rel="canonical" href="https://onerepmaaxgym.in" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Gym",
              "name": "OneRepMaax Gym",
              "description": "Premier fitness center in Jamshedpur offering personal training, yoga, Zumba, and state-of-the-art equipment with certified trainers",
              "url": "https://onerepmaaxgym.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dimna Rd, Shankoshai",
                "addressLocality": "Mango, Jamshedpur",
                "addressRegion": "Jharkhand",
                "postalCode": "831018",
                "addressCountry": "India"
              },
              "openingHours": ["Mo-Sa 05:00-23:00", "Su 08:00-18:00"],
              "telephone": "+91-9204057290",
              "priceRange": "Rs 1,200 - Rs 12,000",
              "founder": {
                "@type": "Person",
                "name": "Aditya Singh",
                "jobTitle": "Owner & Founder",
                "hasCredential": ["K11 Certified Trainer", "CPR & AED Certified", "REPS India Member", "Certified Nutritionist"]
              },
              "amenityFeature": [
                "Cardio Equipment",
                "Strength Training Equipment",
                "Personal Training",
                "Group Personal Training",
                "Yoga Classes",
                "Zumba Classes",
                "Functional Training",
                "Locker Facility",
                "Free WiFi",
                "Free Coffee",
                "Ample Parking",
                "Separate Changing Rooms",
                "Posing Room"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Monthly Membership",
                  "price": "1200",
                  "priceCurrency": "INR",
                  "category": "Membership"
                },
                {
                  "@type": "Offer",
                  "name": "Annual Membership",
                  "price": "7500",
                  "priceCurrency": "INR",
                  "category": "Membership"
                },
                {
                  "@type": "Offer",
                  "name": "Personal Training",
                  "price": "5000",
                  "priceCurrency": "INR",
                  "category": "Personal Training"
                },
                {
                  "@type": "Offer",
                  "name": "Group Personal Training",
                  "price": "9000",
                  "priceCurrency": "INR",
                  "category": "Group Training"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.8046",
                "longitude": "86.2029"
              },
              "areaServed": [
                "Jamshedpur",
                "Mango",
                "Dimna",
                "Sankosai",
                "Shankoshai"
              ],
              "nearbyLandmarks": [
                "Sunrise Tiles",
                "Dimna Road No.4", 
                "Aastha Space Town",
                "Hero Showroom"
              ],
              "event": [
                {
                  "@type": "Event",
                  "name": "Decathlon Event",
                  "description": "Community fitness event organized by OneRepMaax Gym"
                },
                {
                  "@type": "Event", 
                  "name": "Blood Donation Camp",
                  "description": "Community blood donation camp organized by OneRepMaax Gym"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fitness Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Weight Loss Transformation Program",
                    "description": "Proven weight loss transformations with certified nutritionist guidance"
                  },
                  {
                    "@type": "Offer",
                    "name": "Nutrition Consultation",
                    "description": "Professional nutrition guidance by certified nutritionist Aditya Singh"
                  }
                ]
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are OneRepMaax Gym membership prices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym offers flexible membership plans: 1 Month Rs 1,200, 3 Months Rs 2,700, 6 Months Rs 5,100, 9 Months Rs 6,800, and 12 Months Rs 7,500. We also offer personal training and group training options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are OneRepMaax Gym opening hours?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sunday from 8:00 AM to 6:00 PM. We're located at Dimna Rd, Shankoshai, Mango, Jamshedpur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer personal training in Jamshedpur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, OneRepMaax Gym offers personal training with K11 certified trainers including CPR & AED certified professionals. Personal training rates start from Rs 5,000 per month."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What facilities does OneRepMaax Gym provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym provides cardio equipment, strength training, yoga, Zumba, functional training, locker facility, free WiFi, free coffee, ample parking, separate changing rooms, and posing room. We also offer nutrition consultation and weight loss transformation programs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is OneRepMaax Gym located in Jamshedpur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym is located at Dimna Rd, Shankoshai, Mango, Jamshedpur 831018. We are near Sunrise Tiles, Hero Showroom, Aastha Space Town, and Dimna Road No.4."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes OneRepMaax Gym different from other gyms in Jamshedpur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OneRepMaax Gym stands out with our founder Aditya Singh being a K11 certified trainer, REPS India member, and certified nutritionist. We offer proven weight loss transformations, nutrition consultation, and community involvement through events like Decathlon and blood donation camps."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
  
      <Nav />
      <main className="relative overflow-hidden md:bg-black">
        <img
          src="/allPhotos/Header.webp"
          alt="OneRepMaax Gym - Best fitness center in Jamshedpur with modern equipment and certified trainers"
          className=" h-[140vw] md:pt-32 md:bg-black md:h-[75vw] md:w-full lg:h-screen scale-100 lg:w-screen w-fit object-cover object-center"
        />
             
      

        <section className="absolute top-0 left-0  h-20 w-24 sm:w-full mx-6  font-One uppercase  ">
          <div className="text-white w-screen text-xl  mt-6 md:mt-6">
            <div className="flex justify-center items-center gap-2 ">
              <Icon className="" />
              <header className="text-xl  w-screen text-[#48D3A3] pl ">FITNESS & GYM</header>
            </div>
           
            <h1 className=" text-4xl  w-80 md:w-160 md:text-[64px] lg:text-[80px] lg:w-full">
              Transform. Perform. Dominate.
            </h1>
          </div>
          <div className="mt-50 md:mt-70 sm:flex sm:items-center font-One  sm:gap-7   ">
            <Link to="JoinUs" aria-label="Join OneRepMaax Gym today - Best fitness center in Jamshedpur">
              <Button text="JOIN US TODAY" className="text-2xl mb-4 sm:mb-0 md:text-3xl" />
            </Link>
            <Link to="/about" aria-label="Learn more about OneRepMaax Gym facilities and services">
              <Wbutton text="ABOUT US" className="text-2xl md:text-3xl " />
            </Link> 
          </div>
        </section>
      </main>
      <section className="md:pt-10">
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

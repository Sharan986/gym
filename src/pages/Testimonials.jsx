import React from 'react';
import { Helmet } from 'react-helmet-async';
import Review from '../components/Review'; // Adjust the import path as necessary
import BOSSD from '../assets/BOSSD.jpeg'; // Adjust the import path as necessary
import PhotoGrid from '../components/PhotoGrid';
import Boss2 from "../assets/BOSS2.jpg";
import { FTCollection } from '../FT/ft'; // Adjust the import path as necessary


const Testimonials = () => {
  return (
    <>
    <Helmet>
      <title>OneRepMaax Gym Jamshedpur | Success Stories</title>
      <meta name="description" content="Read success stories and testimonials from OneRepMaax Gym Jamshedpur members. Real transformations with K11 certified trainers and proven fitness programs." />
      <link rel="canonical" href="https://onerepmaax.com/testimonials" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Member Testimonials - OneRepMaax Gym Jamshedpur | Success Stories" />
      <meta property="og:description" content="Read success stories and testimonials from OneRepMaax Gym Jamshedpur members. Real transformations with K11 certified trainers and proven fitness programs." />
      <meta property="og:url" content="https://onerepmaax.com/testimonials" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:title" content="Member Testimonials - OneRepMaax Gym Jamshedpur | Success Stories" />
      <meta name="twitter:description" content="Read success stories and testimonials from OneRepMaax Gym Jamshedpur members. Real transformations with K11 certified trainers and proven fitness programs." />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Member Testimonials",
          "description": "Success stories and testimonials from OneRepMaax Gym members",
          "publisher": {
            "@type": "HealthClub",
            "name": "OneRepMaax Gym",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jamshedpur",
              "addressRegion": "Jharkhand",
              "addressCountry": "IN"
            }
          }
        })}
      </script>
    </Helmet>
   
    <div className='font-One text-white mt-10 '>
      {/* Photo Grid Component */}
       <PhotoGrid />

        {/* Container for centering content */}
      <div className='mx-7 lg:mx-24'>
          <div className="flex justify-center mt-5">
        <img
          src={FTCollection.BOSS2}
          alt="Boss"
          className="lg:h-[60vw] w-full object-top object-cover"
        />
      </div>
        {/* Responsive Image */}
         <Review />

        {/* Review Component */}
     
 
      </div>
    </div>
     </>
  );
};

export default Testimonials;

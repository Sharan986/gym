import React from 'react';
import { Link } from "react-router-dom";
import { gallery } from '../assets/Gallery/gallery';
import Icon from '../components/Icon';
import { Helmet } from 'react-helmet';

const PhotoGrid = () => {
  const photos = [
    { id: 1, url: gallery.f1, alt: 'OneRepMaax Gym training session - Professional fitness equipment in action at Jamshedpur' },
    { id: 2, url: gallery.e4, alt: 'State-of-the-art gym equipment at OneRepMaax Jamshedpur - Premium Jaguar fitness machines' },
    { id: 3, url: gallery.ft8, alt: 'Modern fitness facility with premium Jaguar equipment - OneRepMaax Gym interior' },
    { id: 4, url: gallery.f4, alt: 'Professional training environment at OneRepMaax Gym - Certified trainers and members' },
    { id: 5, url: gallery.ft13, alt: 'Spacious 5000+ sq ft workout area with advanced fitness equipment - OneRepMaax Jamshedpur' },
  ];

  return (
    <>
      <Helmet>
        <title>OneRepMaax Gym Gallery - Premium Fitness Center Photos Jamshedpur | 5000+ Sq Ft</title>
        <meta 
          name="description" 
          content="Explore OneRepMaax Gym photo gallery showcasing our 5000+ sq ft fitness center with premium Jaguar equipment, K11 certified trainers, and modern facilities at Dimna Road, Jamshedpur. See our vibrant fitness community in action!" 
        />
        <meta 
          name="keywords" 
          content="OneRepMaax gym photos, gym gallery Jamshedpur, fitness center images, premium gym equipment photos, Jaguar gym equipment, gym facility tour, modern gym interior, fitness center Dimna Road, gym photos Mango Jamshedpur, state-of-the-art gym equipment, professional gym environment, spacious gym facility, OneRepMaax photo gallery" 
        />
        <meta property="og:title" content="OneRepMaax Gym Gallery - Premium Fitness Facility Photos | Jamshedpur" />
        <meta property="og:description" content="Take a visual tour of OneRepMaax Gym's 5000+ sq ft facility with premium equipment, professional training environment, and vibrant fitness community at Dimna Road, Jamshedpur." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://onerepmaaxgym.in/allPhotos/ft-8.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OneRepMaax Gym Gallery - Premium Fitness Center Photos" />
        <meta name="twitter:description" content="Explore our modern 5000+ sq ft fitness facility with premium Jaguar equipment and professional training environment." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "OneRepMaax Gym Photo Gallery",
              "description": "Photo gallery showcasing OneRepMaax Gym's premium fitness facility, equipment, and training environment in Jamshedpur",
              "url": "https://onerepmaaxgym.in/gallery",
              "about": {
                "@type": "Gym",
                "name": "OneRepMaax Gym",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Dimna Rd, Shankoshai",
                  "addressLocality": "Mango, Jamshedpur",
                  "addressRegion": "Jharkhand",
                  "postalCode": "831018",
                  "addressCountry": "India"
                }
              },
              "image": [
                {
                  "@type": "ImageObject",
                  "url": "https://onerepmaaxgym.in/allPhotos/f1.webp",
                  "description": "OneRepMaax Gym training session with professional fitness equipment"
                },
                {
                  "@type": "ImageObject", 
                  "url": "https://onerepmaaxgym.in/allPhotos/e4.webp",
                  "description": "State-of-the-art gym equipment at OneRepMaax Jamshedpur"
                },
                {
                  "@type": "ImageObject",
                  "url": "https://onerepmaaxgym.in/allPhotos/ft-8.webp", 
                  "description": "Modern fitness facility with premium Jaguar equipment"
                }
              ],
              "publisher": {
                "@type": "Organization",
                "name": "OneRepMaax Gym",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://onerepmaaxgym.in/logo.png"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <section 
        className="text-white text-xl mt-16 sm:mt-20 md:mt-24 lg:mx-24 mx-6 mb-3" 
        aria-labelledby="gallery-heading"
        itemScope 
        itemType="https://schema.org/ImageGallery"
      >
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Icon/>
          <header id="gallery-heading" className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-One text-[#48D3A3]" itemProp="name">
            Our Gallery
          </header>
        </div>
        
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-One text-white mb-2 sm:mb-3 uppercase leading-tight' itemProp="headline">
          No Weakness Allowed
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-M mb-6 sm:mb-8 max-w-full sm:max-w-2xl md:max-w-3xl leading-relaxed" itemProp="description">
          Experience the energy and dedication at OneRepMaax Gym through our photo gallery showcasing 
          state-of-the-art equipment, training sessions, and our vibrant fitness community.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5
                        h-[30vh] xs:h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh]" itemProp="image">
          {/* Left stacked images */}
          <div className="row-span-1 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={photos[0].url} 
              alt={photos[0].alt} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
              itemProp="contentUrl"
            />
          </div>
          <div className="row-span-1 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={photos[1].url} 
              alt={photos[1].alt} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
              itemProp="contentUrl"
            />
          </div>

          {/* Large featured image */}
          <div className="col-span-2 row-span-1 col-start-2 row-start-1 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300 relative">
            <img 
              src={photos[2].url} 
              alt={photos[2].alt} 
              className="w-full h-full object-cover object-center transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
              itemProp="contentUrl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Two bottom right images */}
          <div className="col-start-2 row-start-2 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={photos[3].url} 
              alt={photos[3].alt} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
              itemProp="contentUrl"
            />
          </div>
          <div className="col-start-3 row-start-2 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] sm:hover:scale-105 duration-300">
            <img 
              src={photos[4].url} 
              alt={photos[4].alt} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
              itemProp="contentUrl"
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <Link 
            to="/Gallery"
            className="group block w-full"
            aria-label="View complete gallery of OneRepMaax Gym photos and facility tour"
            itemProp="url"
          >
            <button className="w-full h-12 sm:h-16 md:h-18 lg:h-20 bg-gradient-to-r from-[#FCDE3B] via-[#F5D632] to-[#FCDE3B] text-[#070915] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-M font-bold uppercase tracking-wider transition-all duration-300 transform group-hover:scale-[1.02] sm:group-hover:scale-105 group-hover:shadow-xl sm:group-hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <span className="font-M">View Gallery</span>
                <span className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 font-One">→</span>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 sm:via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 sm:duration-1000"></div>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PhotoGrid;

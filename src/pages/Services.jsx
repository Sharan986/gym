import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s3 from "../assets/S3.jpeg";
import S2 from "../assets/S2.jpeg";
import sv4 from "../assets/sv4.jpeg";
import Icon from '../components/Icon';
import { Helmet } from 'react-helmet';

const Services = () => {
  const services = [ 
    {
      id: 1,
      img: s3,
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Personal Training",
      description: "K11 certified personal trainers in Jamshedpur with proven weight loss transformations",
      keywords: "personal trainer Jamshedpur, one-on-one training, K11 certified",
      price: "Starting from ₹5,000/month"
    },
    {
      id: 2,
      img: S2,
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Weight Loss Programs",
      description: "Proven weight loss transformations with nutrition consultation and certified guidance",
      keywords: "weight loss Jamshedpur, fat loss program, nutrition consultation",
      price: "Customized plans available"
    },
    {
      id: 3,
      img: sv4,
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Strength Training",
      description: "Build muscle and strength with state-of-the-art equipment and expert guidance",
      keywords: "strength training Jamshedpur, muscle building, powerlifting",
      price: "Included in membership"
    },
    {
      id: 4,
      img: s3,
      logo: "https://framerusercontent.com/images/0I5gJgQ9FmN97PDP0WbOideZ6U.svg",
      title: "Yoga Classes",
      description: "Improve flexibility and mindfulness with professional yoga instruction",
      keywords: "yoga classes Jamshedpur, flexibility training, mindfulness",
      price: "Included in membership"
    },
    {
      id: 5,
      img: S2,
      logo: "https://framerusercontent.com/images/KPr5TPF7GDGjQlZNZUhIj5OiPgc.svg",
      title: "Zumba Fitness",
      description: "Fun cardio workout with energetic Zumba sessions in Mango, Jamshedpur",
      keywords: "Zumba classes Jamshedpur, cardio workout, dance fitness",
      price: "Included in membership"
    },
    {
      id: 6,
      img: sv4,
      logo: "https://framerusercontent.com/images/iqlj4BpFHy7D5WgtVnLv4ig3SIw.svg",
      title: "Nutrition Consultation",
      description: "Professional nutrition guidance by certified nutritionist Aditya Singh",
      keywords: "nutrition consultation Jamshedpur, diet planning, nutritionist",
      price: "Free with personal training"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <>
      <Helmet>
        <title>Fitness Services - OneRepMaax Gym Jamshedpur | Personal Training, Weight Loss, Yoga</title>
        <meta 
          name="description" 
          content="Professional fitness services at OneRepMaax Gym Jamshedpur: K11 certified personal training (₹5,000/month), weight loss programs, strength training, yoga, Zumba, nutrition consultation by certified nutritionist Aditya Singh. 61 Google reviews - 4.9★!" 
        />
        <meta 
          name="keywords" 
          content="personal training Jamshedpur, weight loss programs, strength training, yoga classes Jamshedpur, Zumba fitness, nutrition consultation, K11 certified trainer, gym services Mango, fitness center Dimna Road, OneRepMaax services, 61 google reviews, 4.9 star rated gym services" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional Fitness Services - OneRepMaax Gym Jamshedpur" />
        <meta property="og:description" content="K11 certified personal training, weight loss programs, yoga, Zumba & nutrition consultation at OneRepMaax Gym. Professional fitness services in Jamshedpur starting from ₹5,000/month." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://onerepmaax.com/#services" />
        <link rel="canonical" href="https://onerepmaax.com/#services" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "OneRepMaax Gym Fitness Services",
              "description": "Professional fitness services offered at OneRepMaax Gym Jamshedpur",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "Personal Training",
                  "description": "K11 certified personal trainers in Jamshedpur with proven weight loss transformations",
                  "provider": {
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
                  "offers": {
                    "@type": "Offer",
                    "price": "5000",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "5000",
                      "priceCurrency": "INR",
                      "unitText": "monthly"
                    }
                  },
                  "serviceType": "Personal Fitness Training",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 2,
                  "name": "Weight Loss Programs",
                  "description": "Proven weight loss transformations with nutrition consultation and certified guidance",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Weight Loss Program",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 3,
                  "name": "Strength Training",
                  "description": "Build muscle and strength with state-of-the-art equipment and expert guidance",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Strength Training",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 4,
                  "name": "Yoga Classes",
                  "description": "Improve flexibility and mindfulness with professional yoga instruction",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Yoga Class",
                  "areaServed": "Jamshedpur"
                },
                {
                  "@type": "Service",
                  "position": 5,
                  "name": "Zumba Fitness",
                  "description": "Fun cardio workout with energetic Zumba sessions in Mango, Jamshedpur",
                  "provider": {
                    "@type": "Gym",
                    "name": "OneRepMaax Gym"
                  },
                  "serviceType": "Zumba Class",
                  "areaServed": ["Jamshedpur", "Mango"]
                },
                {
                  "@type": "Service",
                  "position": 6,
                  "name": "Nutrition Consultation",
                  "description": "Professional nutrition guidance by certified nutritionist Aditya Singh",
                  "provider": {
                    "@type": "Person",
                    "name": "Aditya Singh",
                    "jobTitle": "Certified Nutritionist",
                    "hasCredential": ["Certified Nutritionist", "K11 Certified Trainer"],
                    "worksFor": {
                      "@type": "Gym",
                      "name": "OneRepMaax Gym"
                    }
                  },
                  "serviceType": "Nutrition Consultation",
                  "areaServed": "Jamshedpur"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <section className="text-white text-xl pt-32 lg:mx-24 mx-6 mb-3" id="services" aria-labelledby="services-heading">
        <div className="flex items-center gap-2">
          <Icon />
          <header id="services-heading" className="text-2xl md:text-3xl lg:text-4xl font-One w-full text-[#48D3A3]">
            OUR SERVICES
          </header>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl w-full mt-4 font-One uppercase">
          Premium Fitness Services in Jamshedpur
        </h2>

        {/* ✅ Mobile Slider */}
        <div className="md:hidden mt-10">
          <Slider {...settings}>
            {services.map((service) => (
              <article key={service.id} className="">
                <div className="border-2 border-gray-600 overflow-hidden h-[42rem] flex flex-col">
                  <div className="h-[28rem] overflow-hidden">
                    <img
                      src={service.img}
                      alt={`${service.title} at OneRepMaax Gym Jamshedpur - ${service.description}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <img 
                        src={service.logo} 
                        alt={`${service.title} icon`} 
                        className="w-12 h-12 mx-auto mb-2" 
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-3">{service.description}</p>
                    </div>
                    <div className="text-xs text-gray-400 mt-auto">
                      <p className="text-[#48D3A3] font-semibold">{service.price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>

        {/* ✅ Tablet Slider */}
        <div className="hidden md:block lg:hidden mt-10">
          <Slider {...settings}>
            {services.map((service) => (
              <article key={service.id} className="p-2">
                <div className="border-2 border-gray-600 overflow-hidden h-[58rem] flex flex-col">
                  <div className="h-[40rem] overflow-hidden">
                    <img
                      src={service.img}
                      alt={`${service.title} at OneRepMaax Gym Jamshedpur - ${service.description}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <img 
                        src={service.logo} 
                        alt={`${service.title} icon`} 
                        className="w-16 h-16 mx-auto mb-2" 
                        loading="lazy"
                      />
                      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-4">{service.description}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-auto">
                      <p className="text-[#48D3A3] font-semibold">{service.price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>

        {/* ✅ Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {services.map((service) => (
            <article key={service.id} className="border-2 border-gray-600 overflow-hidden transition-transform hover:scale-105">
              <div className="h-[28rem] overflow-hidden">
                <img
                  src={service.img}
                  alt={`${service.title} at OneRepMaax Gym Jamshedpur - ${service.description}`}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <img 
                  src={service.logo} 
                  alt={`${service.title} icon`} 
                  className="w-16 h-16 mx-auto mb-2" 
                  loading="lazy"
                />
                <h3 className="text-xl lg:text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">{service.description}</p>
                <div className="text-sm text-gray-400">
                  <p className="text-[#48D3A3] font-semibold">{service.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
    </section>
    </>
  );
};

export default Services;

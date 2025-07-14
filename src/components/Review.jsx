import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGES } from '../config/imageConfig';
import Icon from '../components/Icon';

const Review = () => {
  const reviews = [
    {
      id: 2,
      quote: "One of the best gyms around. Clean space, top-quality equipment, and trainers who actually care. Highly recommend!",
      rating: "★★★★★",
      name: "Gurnake Singh",
      role: "Fitness Enthusiast",
      image: IMAGES.gurnakeSingh
    },
    {
      id: 3,
      quote: "It's Fabulous!",
      // rating: "★★★★☆",
      rating: "★★★★★",
      name: "AMARJEET ",
      role: "Community Athlete",
      image: IMAGES.amarjeetSingh2
    },
    {
      id: 4,
      quote: "Well-equipped gym with good trainers and a really nice environment. Great place to work on your fitness!",
      rating: "★★★★★",
      name: "Sagar kumar",
      role: "Dedicated Lifter",
      image: IMAGES.sagarKumar
    },
    {
      id: 1,
      quote: "An excellent gym with a certified and highly knowledgeable trainer. I'm truly glad I joined — the atmosphere is motivating, and the guidance is top-notch!",
      rating: "★★★★★",
      name: "Jasbir Singh",
      role: "Active Member",
      image: IMAGES.jasbirSingh2
    },
    {
      id: 6,
      quote: "My fitness journey started with OneRepMaax, and it’s still going strong. With certified, knowledgeable trainers and a motivating environment, I’m truly glad to be part of this amazing fitness community!",
      rating: "★★★★★",
      name: "Jasprit Singh",
      role: "Daily Grinder",
      image: IMAGES.jaspritSingh2
    },
    {
      id: 5,
      quote: "I can proudly say that my friends and I were among the first to join OneRepMaax. I still feel nostalgic about those early morning sessions with Respected Aditya Sir — back when the gym hadn't even officially opened.",
      rating: "★★★★★",
      name: "Sahil kumar",
      role: "Regular Trainee",
      image: IMAGES.sahilKumar
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" mt-9 ">
      <div >
        <div className="  mb-12">
          <div className="flex justfy-center items-center gap-2">
        <Icon/>
        <header className="text-2xl lg:text-center text-[#48D3A3]">Our Review</header>

      </div>
          <h1 className="text-4xl  md:text-5xl  text-white uppercase mb-5">
            What Our Members Are Saying OneRepMaax
          </h1>
          <p className="text-xl text-gray-400 font-DM">
            Discover how our gym transformed our members' lives.
          </p>
        </div>
<Slider {...settings}>
  {reviews.map((review) => (
 <div key={review.id} className="p-1 h-full">
  <div className="p-4 border-2 border-[#53f0b8] shadow-2xl text-center flex flex-col justify-between h-full min-h-[24rem] md:min-h-96">
    <div>
      <div className="flex justify-center mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-[#48D3A3] shadow-lg"
        />
      </div>

      <div className="text-white font-M text-sm px-4 flex items-center justify-center">
        “{review.quote}”
      </div>
    </div>

    <div className="mt-4">
      <div className="text-yellow-400 text-2xl mb-2">{review.rating}</div>
      <p className="text-white text-2xl">{review.name}</p>
      <p className="text-[#48D3A3] text-xl">{review.role}</p>
    </div>
  </div>
</div>

  ))}
</Slider>


      </div>
    </div>
  );
};

export default Review;

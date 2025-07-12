import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from "../assets/Testimonials/GS.jpg"
import img1 from "../assets/Testimonials/JSS.jpeg";

const Review = () => {
  const reviews = [
    {
      id: 1,
      quote: "My fitness journey started with OneRepMaax, and it’s still going strong. With certified, knowledgeable trainers and a motivating environment, I’m truly glad to be part of this amazing fitness community!",
      rating: "★★★★★",
      name: "Jasbir Singh",
      role: "Fitness Consultant",
      image: img1
    },
    {
      id: 2,
      quote: "One of the best gyms around. Clean space, top-quality equipment, and trainers who actually care. Highly recommend!",
      rating: "★★★★★",
      name: "Gurnake Singh",
      role: "Yoga Instructor",
      image: img2
    },
    {
      id: 3,
      quote: "It's Fabulous!",
      // rating: "★★★★☆",
      rating: "★★★★★",
      name: "AMARJEET ",
      role: "Marketing Executive",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      quote: "Well-equipped gym with good trainers and a really nice environment. Great place to work on your fitness!",
      rating: "★★★★★",
      name: "Sagar kumar",
      role: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      id: 5,
      quote: "I can proudly say that my friends and I were among the first to join OneRepMaax. I still feel nostalgic about those early morning sessions with Respected Aditya Sir — back when the gym hadn't even officially opened. I’ve learned so much about fitness, discipline, and training here. Truly grateful to Sir for starting such an amazing gym in the Dimna area!",
      rating: "★★★★★",
      name: "Sahil kumar",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
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
          <h2 className="text-2xl  text-[#48D3A3] ">Our Testimonials</h2>
          <h1 className="text-4xl  md:text-5xl  text-white uppercase mb-5">
            What Our Members Are Saying OneRepMaax
          </h1>
          <p className="text-xl text-gray-400 font-DM">
            Discover how our gym transformed our members' lives.
          </p>
        </div>
<Slider {...settings}>
  {reviews.map((review) => (
    <div key={review.id} className="p-1">
      <div className="p-2 border-2 border-[#53f0b8]shadow-2xl text-center h-[46vh] md:h-96 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-3">
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-[#48D3A3] shadow-lg"
            />
          </div>

          <div className="text-white font-M text-sm ">
            "{review.quote}"
          </div>
        </div>

        <div>
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

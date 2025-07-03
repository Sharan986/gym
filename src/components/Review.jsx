import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
  const reviews = [
    {
      id: 1,
      quote: "JOINING THIS GYM WAS THE BEST DECISION I'VE EVER MADE! THE TRAINERS ARE INCREDIBLY SUPPORTIVE, AND THE WORKOUT PLANS ARE TAILORED TO MY NEEDS.",
      rating: "★★★★★",
      name: "MICHAEL BROWN",
      role: "Fitness Consultant",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "THE FACILITIES ARE TOP-NOTCH AND THE COMMUNITY IS SO WELCOMING. I'VE NEVER FELT MORE MOTIVATED TO WORK OUT THAN I DO HERE!",
      rating: "★★★★★",
      name: "SARAH JOHNSON",
      role: "Yoga Instructor",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      quote: "AS A BEGINNER, I WAS NERVOUS ABOUT JOINING A GYM, BUT THE STAFF MADE ME FEEL COMFORTABLE RIGHT AWAY. NOW I LOOK FORWARD TO EVERY WORKOUT!",
      rating: "★★★★☆",
      name: "DAVID WILSON",
      role: "Marketing Executive",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      quote: "THE PERSONAL TRAINING SESSIONS HAVE COMPLETELY TRANSFORMED MY FITNESS JOURNEY. WORTH EVERY PENNY!",
      rating: "★★★★★",
      name: "EMMA DAVIS",
      role: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      id: 5,
      quote: "I LOVE THE VARIETY OF CLASSES OFFERED. THERE'S ALWAYS SOMETHING NEW TO TRY, WHICH KEEPS ME COMING BACK!",
      rating: "★★★★★",
      name: "JAMES MILLER",
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
    <div className="py-8 mx-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="  mb-12">
          <h2 className="text-3xl font-bold text-[#48D3A3] italic text-center mb-4">Our Testimonials</h2>
          <h1 className="text-4xl text-center md:text-5xl font-bold text-white uppercase mb-6">
            What Our Members Are Saying OneRepMaax
          </h1>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
            Discover how our gym transformed our members' lives.
          </p>
        </div>
<Slider {...settings}>
  {reviews.map((review) => (
    <div key={review.id} className="p-1">
      <div className="p-2 border-2 border-[#1c5440] shadow-2xl text-center h-[46vh] md:h-96 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-3">
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-[#48D3A3] shadow-lg"
            />
          </div>

          <blockquote className="text-white text-xl md:mx-20 md:text-3xl ">
            "{review.quote}"
          </blockquote>
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

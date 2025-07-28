import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import {DSC06177} from "../Imgs/Imgs";
const JoinUs = () => {
  const JoinData = [
    {
      id: 1,
      title: "Our Address",
      description:
        "One Rep Maax Gym, Dimna Rd, Shankoshai, Mango, Jamshedpur, Jharkhand 831018",
      imageUrl:
        "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
    },
    {
      id: 2,
      title: "Contact Info",
      description:
        "Got questions ? Call/WhatsApp us at +91 9204057290 ! Our team is ready to help you start your fitness journey today. Let's get moving!",
      imageUrl:
        "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
    },
    {
      id: 3,
      title: "Live Support",
      description:
        "Stuck on choosing a plan or class? Chat live with us or drop an email at info@onerepmaaxgym.in, and we’ll personalize your fitness journey. Start strong!",
      imageUrl:
        "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const phoneNumber = "919204057290";
    const message = `Hello! I want to get in touch with One Rep Maax Gym. Here are my details:\n
First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Interest: ${data.interested}
Message: ${data.message || ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative h-80 lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-gray-900/50"></div>
        <img
          src={DSC06177}
          loading="lazy"
          alt="Contact Us Banner"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <h1 className="text-6xl md:text-8xl font-One text-white mb-6 drop-shadow-2xl">
            GET IN TOUCH
          </h1>
          <div className="flex space-x-3 text-xl font-DM">
            <Link to="/" className="text-[#48D3A3] hover:text-white transition-colors">
              HOME
            </Link>
            <span className="text-[#FCDE3B]">/</span>
            <span className="text-white">CONTACT US</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-One text-white mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 font-DM leading-relaxed">
            Have questions? We're here to help. Reach out to our team through the contact form 
            or visit us at the gym. Your fitness journey starts with a single conversation.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {JoinData.map((join) => (
            <div
              key={join.id}
              className="backdrop-blur-sm bg-white/5 border border-[#48D3A3]/30  p-8 shadow-2xl hover:shadow-[#48D3A3]/20 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-[#48D3A3] l flex items-center justify-center">
                <img
                  src={join.imageUrl}
                  alt={join.title}
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-One text-[#48D3A3] mb-4">{join.title}</h3>
              <p className="text-gray-300 font-DM leading-relaxed">{join.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/5 border border-[#FCDE3B]/30  p-8 shadow-2xl">
            <h3 className="text-3xl font-One text-white mb-8 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    placeholder="First Name"
                    {...register("firstName", { required: "First name is required" })}
                    className="w-full bg-gray-800/50 border border-gray-600 p-4 text-white placeholder-gray-400 focus:border-[#48D3A3] focus:outline-none transition-colors"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Last Name"
                    {...register("lastName", { required: "Last name is required" })}
                    className="w-full bg-gray-800/50 border border-gray-600 p-4 text-white placeholder-gray-400 focus:border-[#48D3A3] focus:outline-none transition-colors"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full bg-gray-800/50 border border-gray-600 p-4 text-white placeholder-gray-400 focus:border-[#48D3A3] focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register("interested", { required: "Please select an option" })}
                  className="w-full bg-gray-800/50 border border-gray-600 p-4 text-white focus:border-[#48D3A3] focus:outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>What interests you?</option>
                  <option value="Membership">Membership</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Group Classes">Group Classes</option>
                  <option value="Zumba/Yoga">Zumba/Yoga</option>
                  <option value="Locker Facilities">Locker Facilities</option>
                </select>
                {errors.interested && (
                  <p className="text-red-400 text-sm mt-1">{errors.interested.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Tell us more about your fitness goals..."
                  {...register("message")}
                  rows="4"
                  className="w-full bg-gray-800/50 border border-gray-600 p-4 text-white placeholder-gray-400 focus:border-[#48D3A3] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FCDE3B] hover:bg-[#FCDE3B]/90 text-black font-One text-lg py-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="backdrop-blur-sm bg-white/5 border border-[#F97316]/30  p-8 shadow-2xl">
            <h3 className="text-3xl font-One text-white mb-6 text-center">Find Us Here</h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="One Rep Maax Gym Location"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=One+Rep+Maax+Gym,+Dimna+Road,+Jamshedpur&output=embed"
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300 font-DM">
                <span className="text-[#F97316] font-semibold">Address:</span><br />
                One Rep Maax Gym, Dimna Rd<br />
                Shankoshai, Mango, Jamshedpur<br />
                Jharkhand 831018
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;

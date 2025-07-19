import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";

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
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-5xl font-One lg:text-7xl z-10">CONTACT US</h1>
          <h1 className="font-One text-2xl mt-4 lg:text-5xl">
            <Link to="/">HOME</Link>
            <span className="text-yellow-300 lg:text-5xl">/CONTACT US</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col font-One mx-8">
        <div className="text-white max-w-2xl mt-5">
          <p className="text-4xl mt-2 uppercase">Get in touch with us</p>
          <p className="text-gray-300 font-DM text-xl mt-6 mb-4">
            Have questions? We're here to help. Reach out to our team through
            the contact form or visit us at the gym.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[80vw] gap-4 mx-8">
        {JoinData.map((join) => (
          <div
            key={join.id}
            className="flex flex-col gap-5 justify-center items-start font-One mb-4"
          >
            <img
              src={join.imageUrl}
              alt={join.title}
              className="h-16 object-cover mb-2 mt-6"
            />
            <h1 className="text-2xl text-yellow-300">{join.title}</h1>
            <p className="text-xl font-DM text-gray-300">{join.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mx-8 pt-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 font-One text-2xl text-white w-full"
        >
          <input
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
            className="w-full border p-2 bg-transparent"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}

          <input
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full border p-2 bg-transparent"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="w-full border p-2 bg-transparent"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

        
          <select
            {...register("interested", { required: "Please select an option" })}
            className="w-full border-gray-200 border-2 p-2  text-gray-500"
            defaultValue="Membership">
            <option value="Locker Facilities">Locker Facilities</option>
            <option value="Membership">Membership</option>
            <option value="Personal Training">Personal Training</option>
            <option value="Group Classes">Group Classes</option>
            <option value="Zumba/Yoga">Zumba/Yoga</option>
          
          </select>
          {errors.interested && (
            <p className="text-red-500">{errors.interested.message}</p>
          )}

          <textarea
            placeholder="Message"
            {...register("message")}
            className="w-full border p-2 h-32 bg-transparent"
          />

          <button
            type="submit"
            className="bg-[#FCDE3B] text-black px-5 py-3 w-full"
          >
            Submit Now
          </button>
        </form>


        <iframe className="md:w-[700px] "
          title="GYM LOCATION"
          width="100%"
          height="400"
          style={{ border: 2, borderColor: "#48D3A3" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=One+Rep+Maax+Gym,+Dimna+Road,+Jamshedpur&output=embed"
        />

      </div>

      <Footer />
    </>
  );
};

export default JoinUs;

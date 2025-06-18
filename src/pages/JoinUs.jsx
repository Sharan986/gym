import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useForm } from 'react-hook-form';
const JoinUs = () => {
     const JoinData = [
        {
            id: 1,
            title: "Our Address",
            description:
                "Dimna Road, Mango Jamshedpur, Jharkhand India",
            imageUrl:
                "https://framerusercontent.com/images/yDmqlROJtzeBLq417Av3RsaCh8g.svg",
        },
        {
            id: 2,
            title: "Contact Info",
            description:
                "Open chat or give us a call at +91 9229556207.",
            imageUrl:
                "https://framerusercontent.com/images/QIxFE5MhwuZBc8t01is4cWpqU.svg",
        },
        {
            id: 3,
            title: "Live Support",
            description:
                "Live chat service info@onerepmaax.com",
            imageUrl:
                "https://framerusercontent.com/images/K9GUi9VRMjtgqRY8QvQI2o0q54.svg",
        },
    ];
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Clears all fields
  };

  return (
    <>
     <div className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white ">
          <h1 className=" text-5xl font-One z-10">About Us</h1>
          <h1 className="font-One text-2xl mt-9">
            <Link to='/'> HOME </Link>
           <span className="text-yellow-300">/Contact Us</span>
          </h1>
        </div>
      </div>

      
      <div className="flex justify-center flex-col items-center font-One">

        <div className="text-white pt-16 ml-6 mr-6  ">
          <header className="text-xl w-full text-[#48D3A3] italic ">
           Contact us
          </header>
          <p className="text-5xl mt-2  uppercase ">
           Get in touch with us
            <br />
          </p>
          <p className="max-w-screen text-gray-400 font-DM text-lg mt-6 mb-4">
           Have questions? We're here to help. Reach out to our team through the contact form or visit us at the gym.
          </p>
          </div>
        </div>

        {JoinData.map((join) => (
                <div
                    key={join.id}
                    className=" font-One mb-4 mx-7 w-fit"
                >
                    <img
                        src={join.imageUrl}
                        alt={join.title}
                        className=" h-16 w-16 object-cover mb-2"
                    />
                    <h1 className=" text-3xl text-yellow-300">{join.title}</h1>
                    <p className="text-lg font-DM text-gray-400 ">{join.description}</p>
                </div>
            ))}

           <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-6 max-w-3xl font-One text-2xl text-white"
    >
      <input
        placeholder="First Name"
        {...register("firstName", { required: "First name is required" })}
        className="w-full border p-2"
      />
      {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

      <input
        placeholder="Last Name"
        {...register("lastName", { required: "Last name is required" })}
        className="w-full border p-2"
      />
      {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format"
          }
        })}
        className="w-full border p-2"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <textarea
        placeholder="Message"
        {...register("message",)}
        className="w-full border p-2 h-32"
      />
    

      <button
        type="submit"
        className="bg-[#FCDE3B] text-black px-5 py-4"
      >
        Submit Now
      </button>
    </form>

        <div className='text-center mt-6 mx-5'>
    <img src="https://framerusercontent.com/images/MbZjXFrQdQAPAjnUICYWrTLq6w.jpg?scale-down-to=1024" alt=""
     /></div>
        <Footer />
    </>
  )
}

export default JoinUs
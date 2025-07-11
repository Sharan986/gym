import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Intermediate = () => {
  const exercises = [
    {
      id: 1,
      name: "chest",
      path: "Chest"
    },
    {
      id: 2,
      name: "back",
      path: "Back"
    },
    {
      id: 3,
      name: "Legs",
      path: "Legs"
    },
    {
      id: 4,
      name: "Arms",
      path: "Arms"
    },
   {
      id: 5,
      name: "Shoulders",
      path: "Shoulders"
    },

  ];
  
  return (
   <>
       <div className="relative overflow-hidden">
    <img
      src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
      alt="About Us Banner"
      className="w-screen h-60 lg:h-96 object-cover object-center scale-125"
    />
    <div className="absolute bottom-8 left-8 text-white">
      <h1 className="text-5xl font-One lg:text-7xl z-10">SERVICES</h1>
      <h1 className="font-One text-2xl mt-4 lg:text-5xl">
        <Link to='/'>HOME</Link>
        <span className="text-yellow-300 lg:text-5xl">/Services</span>
      </h1>
    </div>
  </div>

         {exercises.map((Heading)=>{
            return(
              <Link key={Heading.id} 
                           to={`${Heading.path}`}>
   
              <div className='flex justify-center items-center font-One  h-36 mx-7 mt-12 border-2 border-blue-50'>
            <h1 className='text-white text-6xl'>{Heading.name}</h1>
         </div> </Link>
            )
         })}

         

         <Footer />
   </>
  )
}

export default Intermediate
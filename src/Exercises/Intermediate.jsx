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
             src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
             alt="About Us Banner"
             className="w-screen h-60 object-cover object-center scale-125"
           />
           <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
             <h1 className="text-5xl font-One z-10">Intermediate</h1>
             <h1 className="font-One text-2xl mt-6">
               <Link to="/"> HOME </Link>
               <span className="text-yellow-300">/Intermediate</span>
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
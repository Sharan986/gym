import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const WorkoutGuide = () => {
  return (
    <>
      <div className="bg-[#070915] overflow-hidden font-One">
          <div className="relative overflow-hidden">
               <img
                 src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
                 alt="About Us Banner"
                 className="w-screen h-60 object-cover object-center scale-125"
               />
               <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
                 <h1 className="text-5xl font-One z-10">Workout</h1>
                 <h1 className="font-One text-2xl mt-6">
                   <Link to="/"> HOME </Link>
                   <span className="text-yellow-300">/Workout</span>
                 </h1>
               </div>
             </div>
          <div className="px-8">
            
            <p className=" text-gray-400 font-DM text-lg mt-6 mb-4">
             Regular workouts offer numerous benefits for both body and mind. They strengthen muscles, improve cardiovascular health, and boost endurance, enhancing overall physical fitness. Exercise helps maintain a healthy weight by burning calories and increasing metabolism. It reduces stress and anxiety by releasing endorphins, promoting mental well-being
            </p>
          </div>
        </div>

        <div className="flex justify-center font-One items-center min-h-screen py-12 text-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl w-full">
            {/* Beginner Box */}
            <Link to="/WorkoutGuide/Beginner" className="no-underline">
              <div className="relative  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-300 h-64">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Beginner workout"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-black">
                  <h2 className="text-3xl font-bold ">Beginner</h2>
                  <p className="text-white mt-4 text-lg">
                    Start your fitness journey with simple and effective
                    routines.
                  </p>
                </div>
              </div>
            </Link>

            {/* Intermediate Box */}
            <Link to="/WorkoutGuide/Intermediate">
            <div className="relative rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-300 h-64">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Intermediate workout"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                <h2 className="text-3xl font-bold text-white">Intermediate</h2>
                <p className="text-white mt-4 text-lg">
                  Take your workout to the next level with guided programs.
                </p>
              </div>
            </div></Link>

            {/* Advanced Box */}
            <Link to="/WorkoutGuide/Advance">
           
            <div className="relative rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-300 h-64">
              <img
                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                alt="Advanced workout"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                <h2 className="text-3xl font-bold text-white">Advanced</h2>
                <p className="text-white mt-4 text-lg">
                  Push limits with intense and personalized training plans.
                </p>
              </div>
            </div> </Link>
          </div>
        </div>
     
      <Footer />
    </>
  );
};

export default WorkoutGuide;

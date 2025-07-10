import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const supplementData = [
  {
    title: "Protein",
    imageUrl:
      "https://imgs.search.brave.com/3UXd1tfSYqRNjvYMCHRwtyS5g1uj__MH2en0FMCHiRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUWtOb0c5/ODlOQXE3OFA5LWhw/M3c0T0RUOGU0SlJh/YVJaUkVKM0hYdnpC/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/QXgvTmpjeU9ESXdM/M0JvYjNSdi9MMjFo/YmkxcGJpMTBhR1V0/L1ozbHRMV1J5YVc1/cmFXNW4vTFhCeWIz/UmxhVzR0YzJoaC9h/MlV0WkhKcGJtc3Vh/bkJuL1AzTTlOakV5/ZURZeE1pWjMvUFRB/bWF6MHlNQ1pqUFhR/NC9hVkpLVG10elZs/OWljWFpCL1UzRjFO/Mk5mUm1jNUxUUmgv/TlVrM1VWaFZaRjkw/VkhsSC9TSGwwVFZr/OQ",
  },
  {
    title: "PreWorkout",
    imageUrl:
      "https://images.unsplash.com/photo-1704650311981-419f841421cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vitamins",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

const Supplement = () => {
  return (
    <>
   
<div className="flex flex-col lg:flex-row justify-center gap-5 font-One mx-4 lg:mx-8 mb-6">
  <div className="text-white text-center lg:text-left mt-8 lg:mt-16">
    <header className="text-2xl lg:text-3xl text-[#48D3A3] italic">Supplements</header>
    <p className="text-3xl lg:text-6xl mt-2 uppercase">
      Boost strength, endurance, muscle growth.
    </p>
    <p className="text-gray-400 text-lg lg:text-2xl font-DM mt-4 lg:mt-6 mb-4">
      Supplements support muscle growth, enhance performance, boost recovery, fill nutritional gaps,
      help achieve fitness goals efficiently, increase endurance, aid fat loss, improve strength,
      and promote overall physical well-being.
    </p>
  </div>
  <div className="flex justify-center lg:justify-start mt-4 lg:mt-5">
    <img
      src="https://images.unsplash.com/photo-1683394275459-ea44637a4e57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Supplements"
      className="w-full max-w-xs lg:max-w-md"
    />
  </div>
</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-8">
        {supplementData.map((item, index) => (
          <Link to={`/Supplement/${item.title}`} key={index}>
            <div className="relative">
              <img src={item.imageUrl} alt={item.title} className="w-full h-fit" />
              <h2 className="absolute bottom-3 right-2 text-white text-2xl font-One">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Supplement;

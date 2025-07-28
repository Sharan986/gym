import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { DSC06177 } from "../Imgs/Imgs";

const supplementData = [
  {
    title: "Protein",
    imageUrl:
      "https://imgs.search.brave.com/3UXd1tfSYqRNjvYMCHRwtyS5g1uj__MH2en0FMCHiRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUWtOb0c5/ODlOQXE3OFA5LWhw/M3c0T0RUOGU0SlJh/YVJaUkVKM0hYdnpC/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/QXgvTmpjeU9ESXdM/M0JvYjNSdi9MMjFo/YmkxcGJpMTBhR1V0/L1ozbHRMV1J5YVc1/cmFXNW4vTFhCeWIz/UmxhVzR0YzJoaC9h/MlV0WkhKcGJtc3Vh/bkJuL1AzTTlOakV5/ZURZeE1pWjMvUFRB/bWF6MHlNQ1pqUFhR/NC9hVkpLVG10elZs/OWljWFpCL1UzRjFO/Mk5mUm1jNUxUUmgv/TlVrM1VWaFZaRjkw/VkhsSC9TSGwwVFZr/OQ",
  },
  {
    title: "Creatine",
    imageUrl:
      "https://images.unsplash.com/photo-1704650311981-419f841421cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Preworkout",
    imageUrl:
      "https://images.unsplash.com/photo-1704650311981-419f841421cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "Vitamins",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "BCAA",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "Fishoil",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    title: "Oats",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    title: "Muesli",
    imageUrl:
      "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Supplement = () => {
  return (
    <>
       <div className="relative overflow-hidden">
  <img
    src={DSC06177}
    alt="About Us Banner"
    className="w-screen h-60 lg:h-[60vh] object-cover object-center scale-125"
  />
  <div className="absolute bottom-8 left-8 text-white">
    <h1 className="text-4xl font-One lg:text-6xl z-10">SUPPLEMENT</h1>
    <h1 className="font-One text-xl mt-4 lg:text-3xl">
      <Link to='/'>HOME</Link>
      <span className="text-yellow-300 lg:text-3xl">/SUPPLEMENT</span>
    </h1>
  </div>
</div>

   <div className="lg:mx-18 ">
<div className="flex flex-col mb-6 font-One mx-7">
  <div className="text-white text-left mt-3">
    
  </div>
  <div className="text-white text-left mt-2">
    <p className="text-4xl mt-1 uppercase">
      Boost strength, endurance, muscle growth.
    </p>
    
  </div>
</div>

    <p className="text-gray-300 text-lg font-DM mt-2 mb-7 mx-7">
      Supplements support muscle growth, enhance performance, boost recovery, fill nutritional gaps,
      help achieve fitness goals efficiently, increase endurance, aid fat loss, improve strength,
      and promote overall physical well-being.
    </p>
  






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
</div>
      <Footer />
    </>
  );
};

export default Supplement;

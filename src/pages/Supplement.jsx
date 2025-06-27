import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const supplementData = [
  { title: "Protein", imageUrl: "https://imgs.search.brave.com/3UXd1tfSYqRNjvYMCHRwtyS5g1uj__MH2en0FMCHiRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUWtOb0c5/ODlOQXE3OFA5LWhw/M3c0T0RUOGU0SlJh/YVJaUkVKM0hYdnpC/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/QXgvTmpjeU9ESXdM/M0JvYjNSdi9MMjFo/YmkxcGJpMTBhR1V0/L1ozbHRMV1J5YVc1/cmFXNW4vTFhCeWIz/UmxhVzR0YzJoaC9h/MlV0WkhKcGJtc3Vh/bkJuL1AzTTlOakV5/ZURZeE1pWjMvUFRB/bWF6MHlNQ1pqUFhR/NC9hVkpLVG10elZs/OWljWFpCL1UzRjFO/Mk5mUm1jNUxUUmgv/TlVrM1VWaFZaRjkw/VkhsSC9TSGwwVFZr/OQ" },
  { title: "PreWorkout", imageUrl: "https://images.unsplash.com/photo-1704650311981-419f841421cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Vitamins", imageUrl: "https://images.unsplash.com/photo-1565071783280-719b01b29912?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "WeightGainer", imageUrl: "https://images.unsplash.com/photo-1604480133054-2597dad6f610?q=80&w=1869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const Supplement = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
          alt="About Us Banner"
          className="w-screen h-60 object-cover object-center scale-125"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl font-One z-10">About Us</h1>
          <h1 className="font-One text-2xl mt-6">
            <Link to="/"> HOME </Link>
            <span className="text-yellow-300">/Supplement</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center font-One">
        <div className="text-white pt-16 ml-6 mr-6">
          <header className="text-xl w-full text-[#48D3A3] italic">Supplements</header>
          <p className="text-5xl mt-2 uppercase">
            Boost strength, endurance, muscle growth.
          </p>
          <div className="text-center mt-5">
            <img
              src="https://images.unsplash.com/photo-1683394275459-ea44637a4e57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90..."
              alt=""
              className=""
            />
          </div>
          <p className="max-w-screen text-gray-400 font-DM text-lg mt-6 mb-4">
            Supplements support muscle growth, enhance performance, boost recovery, fill nutritional gaps,
            help achieve fitness goals efficiently, increase endurance, aid fat loss, improve strength,
            and promote overall physical well-being.
          </p>
        </div>
      </div>

      {/* Supplement Types */}
      {supplementData.map((item, index) => (
           <Link to={`/Supplement/${item.title}`}>
        <div key={index} className="m-7 relative w-fit">
          <span>
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto" />
          </span>
          <h2 className="absolute bottom-3 right-2 text-white text-3xl font-One">{item.title}</h2>
        </div>

    </Link>
      ))}

      <Footer />

    </>
  );
};

export default Supplement;

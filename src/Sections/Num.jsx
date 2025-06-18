import React, { useState, useEffect } from 'react';

const Num = () => {
  const [counts, setCounts] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const NumData = [
    {
      id: 1,
      target: 250,
      num: "250+",
      text: "Members",
    },
    {
      id: 2,
      target: 50,
      num: "50+",
      text: "Transformations",
    },
    {
      id: 3,
      target: 5,
      num: "05+",
      text: "Trainers",
    },
    {
      id: 4,
      target: 5000,
      num: "5K+",
      text: "SQ.FEET",
    },
  ];

  useEffect(() => {
    const duration = 4000;
    const startTime = performance.now();

    const animateCounts = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const newCounts = {};
      NumData.forEach(item => {
        newCounts[item.id] = Math.floor(progress * item.target);
      });

      setCounts(prev => ({ ...prev, ...newCounts }));

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      } else {
        const finalCounts = {};
        NumData.forEach(item => {
          finalCounts[item.id] = item.target;
        });
        setCounts(prev => ({ ...prev, ...finalCounts }));
      }
    };

    requestAnimationFrame(animateCounts);
  }, []);

  const formatNumber = (id, value) => {
    const item = NumData.find(i => i.id === id);
    if (item.id === 4) { // For the "5K+" item
      return value >= 1000 ? `${Math.floor(value/1000)}K+` : `${value}+`;
    }
    if (item.id === 3) { // For the "05+" item
      return `${value < 10 ? '0' : ''}${value}+`; // Add leading zero for single digits
    }
    return `${value}+`;
  };

  return (
   <div className="flex justify-center mx-8 bg-[#070915] py-10">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-15 md:gap-32 md:mx-7 ">
   {NumData.map((item) => (
  <div key={item.id} className="relative text-center ">
    <div className="text-7xl md:text-7xl   text-[#9d9ea3] font-bold font-Two">
      {formatNumber(item.id, counts[item.id])}
    </div>
    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 text-[#FCDE3B] text-lg md:text-lg lg:text-2xl font-bold font-Two bg-gray-950 px-2">
      {item.text}
    </h2>
  </div>
))}

  </div>
</div>

  );
};

export default Num;
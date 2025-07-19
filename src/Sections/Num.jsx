import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Num = () => {
  const [counts, setCounts] = useState({
    1: 200,
    2: 35,
    3: 1,
    4: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const NumData = [
    { id: 1, target: 250, text: "Members" },
    { id: 2, target: 50, text: "Transformations" },
    { id: 3, target: 5, text: "Trainers" },
    { id: 4, target: 5000, text: "SQ.FEET" },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const duration = 4000;
      const startTime = performance.now();

      const animateCounts = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        setCounts((prevCounts) => {
          const newCounts = { ...prevCounts };
          NumData.forEach((item) => {
            newCounts[item.id] = Math.floor(progress * item.target);
          });
          return newCounts;
        });

        if (progress < 1) {
          requestAnimationFrame(animateCounts);
        }
      };

      requestAnimationFrame(animateCounts);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const formatNumber = (id, value) => {
    const item = NumData.find((i) => i.id === id);
    if (item.id === 4) {
      return value >= 1000 ? `${Math.floor(value / 1000)}K+` : `${value}+`;
    }
    if (item.id === 3) {
      return `${value < 10 ? "0" : ""}${value}+`;
    }
    return `${value}+`;
  };

  return (
    <div ref={ref} className="flex justify-center mx-4 bg-[#070915] py-5 mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-20 lg:gap-32 md:gap-15 md:mx-7 lg:mx-24">
        {NumData.map((item) => (
          <div key={item.id} className="relative text-center">
            <div className="text-7xl md:text-7xl lg:text-9xl text-[#9d9ea3] font-bold font-One">
              {formatNumber(item.id, counts[item.id])}
            </div>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 text-[#FCDE3B] text-lg md:text-lg lg:text-2xl font-bold font-M bg-gray-950 px-2">
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Num;
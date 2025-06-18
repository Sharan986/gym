import React from 'react';

const Marquee = () => {
  const texts = [
    "TRAIN HARD", "STAY HUMBLE", "BE PROUD", "FIT AND FOCUSED",
    "STAY ACTIVE", "BELIEVE IN YOURSELF", "HEALTHYLIVING",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#3CFCC5] py-1 font-Two">
      <div
        className="inline-block whitespace-nowrap"
        style={{
          animation: 'marquee 15s linear infinite',
        }}
      >
        {texts.concat(texts).map((text, index) => (
          <span key={index} className="text-xl md:text-3xl ">
            ✦
            <span className="mx-6 font-semibold text-black text-xl md:text-3xl ">
              {text}
            </span>
          </span>
        ))}

        {/* Inline style for keyframes */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%) }
            100% { transform: translateX(-50%) }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Marquee;

import React from 'react';

const Icon = ({ width = 24, height = 14, color = "#2ee6a6", className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="1 30 42 40" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      {/* Wide left stripe */}
      <rect x="20" y="30" width="20" height="40" transform="skewX(-20)" fill={color}/>
      
      {/* Middle thin stripe */}
      <rect x="43" y="30" width="8" height="40" transform="skewX(-20)" fill={color}/>
      
      {/* Right thin stripe */}
      <rect x="54" y="30" width="8" height="40" transform="skewX(-20)" fill={color}/>
    </svg>
  );
};

export default Icon;

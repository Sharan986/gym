// FT Images Import File
// This file contains all the FT webp images for easy importing

// Individual image imports
import z1 from './z1.webp';
import z2 from './z2.webp';
import z3 from './z3.webp';
import z4 from './z4.webp';
import z5 from './z5.webp';
import z6 from './z6.webp';
import z7 from './z7.webp';
import z8 from './z8.webp';
import z9 from './z9.webp';
import z10 from './z10.webp';
import z11 from './z11.webp';
import z12 from './z12.webp';
import z13 from './z13.webp';
import z14 from './z14.webp';
import z15 from './z15.webp';
import z16 from './z16.webp';
import z17 from './z17.webp';
import z18 from './z18.webp';
import z19 from './z19.webp';
import z20 from './z20.webp';
import z21 from './z21.webp';
import z22 from './z22.webp';
import z23 from './z23.webp';
import z24 from './z24.webp';
import z25 from './z25.webp';
import z26 from './z26.webp';
import z27 from './z27.webp';
import z28 from './z28.webp';
import z29 from './z29.webp';
import z30 from './z30.webp';
import c1 from './c1.webp';
import c2 from './c2.webp';
import c3 from './c3.webp';
import c4 from './c4.webp';
import c5 from './c5.webp';
import c6 from './c6.webp';
import cc1 from './cc1.webp';
import cc2 from './cc2.webp';
import oow from './oow.webp'; // Importing the specific image for other uses

// FT Collection object for easy access
export const FTCollection = {
  z1,
  z2,
  z3,
  z4,
  z5,
  z6,
  z7,
  z8,
  z9,
  z10,
  z11,
  z12,
  z13,
  z14,
  z15,
  z16,
  z17,
  z18,
  z19,
  z20,
  z21,
  z22,
  z23,
  z24,
  z25,
  z26,
  z27,
  z28,
  z29,
  z30,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    cc1,
    cc2,
    oow,
    
};

// FT Array for iteration and random selection
export const FTArray = [
  z1, z2, z3, z4, z5, z6, z7, z8, z9, z10,
  z11, z12, z13, z14, z15, z16, z17, z18, z19, z20,
  z21, z22, z23, z24, z25, z26, z27, z28, z29, z30,
  c1, c2, c3, c4, c5, c6, cc1, cc2, oow,
    
];

// Helper function to get random FT images
export const getRandomFTImages = (count = 5) => {
  const shuffled = [...FTArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get FT images by range
export const getFTImagesByRange = (start = 1, end = 30) => {
  return FTArray.slice(start - 1, end);
};

// Individual exports for direct import
export {
  z1, z2, z3, z4, z5, z6, z7, z8, z9, z10,
  z11, z12, z13, z14, z15, z16, z17, z18, z19, z20,
  z21, z22, z23, z24, z25, z26, z27, z28, z29, z30,
  c1, c2, c3, c4, c5, c6, cc1, cc2, oow,
    
};

// Default export
export default FTCollection;
  
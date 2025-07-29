// Import all webp images from the Imgs directory
import DSC06104 from './DSC06104.webp';
import DSC06105 from './DSC06105.webp';
import DSC06109 from './DSC06109.webp';
import DSC06113 from './DSC06113.webp';
import DSC06116 from './DSC06116.webp';
import DSC06120 from './DSC06120.webp';
import DSC06126 from './DSC06126.webp';
import DSC06141 from './DSC06141.webp';
import DSC06143 from './DSC06143.webp';
import DSC06146 from './DSC06146.webp';
import DSC06150 from './DSC06150.webp';
import DSC06154 from './DSC06154.webp';
import DSC06166 from './DSC06166.webp';
import DSC06168 from './DSC06168.webp';
import DSC06170 from './DSC06170.webp';
import DSC06172 from './DSC06172.webp';
import DSC06176 from './DSC06176.webp';
import DSC06177 from './DSC06177.webp';
import DSC06178 from './DSC06178.webp';
import DSC06181 from './DSC06181.webp';
import DSC06193 from './DSC06193.webp';
import DSC06199 from './DSC06199.webp';
import DSC06200 from './DSC06200.webp';
import DSC06204 from './DSC06204.webp';
import DSC06205 from './DSC06205.webp';
import DSC06208 from './DSC06208.webp';
import DSC06209 from './DSC06209.webp';
import DSC06212 from './DSC06212.webp';
import DSC06217 from './DSC06217.webp';
import DSC06219 from './DSC06219.webp';
import DSC06227 from './DSC06227.webp';
import DSC06229 from './DSC06229.webp';
import DSC06230 from './DSC06230.webp';
import DSC06231 from './DSC06231.webp';
import DSC06233 from './DSC06233.webp';
import DSC06236 from './DSC06236.webp';
import DSC06244_1 from './DSC06244 (1).webp';
import DSC06244 from './DSC06244.webp';
import DSC06120R from './DSC06120R.webp'; // Assuming this is a different version of DSC06120

// Export individual images
export {
  DSC06104,
  DSC06105,
  DSC06109,
  DSC06113,
  DSC06116,
  DSC06120,
  DSC06126,
  DSC06141,
  DSC06143,
  DSC06146,
  DSC06150,
  DSC06154,
  DSC06166,
  DSC06168,
  DSC06170,
  DSC06172,
  DSC06176,
  DSC06177,
  DSC06178,
  DSC06181,
  DSC06193,
  DSC06199,
  DSC06200,
  DSC06204,
  DSC06205,
  DSC06208,
  DSC06209,
  DSC06212,
  DSC06217,
  DSC06219,
  DSC06227,
  DSC06229,
  DSC06230,
  DSC06231,
  DSC06233,
  DSC06236,
  DSC06244_1,
  DSC06244,
  DSC06120R
};

// Export as an object for easy access
export const ImgsCollection = {
  DSC06104,
  DSC06105,
  DSC06109,
  DSC06113,
  DSC06116,
  DSC06120,
  DSC06126,
  DSC06141,
  DSC06143,
  DSC06146,
  DSC06150,
  DSC06154,
  DSC06166,
  DSC06168,
  DSC06170,
  DSC06172,
  DSC06176,
  DSC06177,
  DSC06178,
  DSC06181,
  DSC06193,
  DSC06199,
  DSC06200,
  DSC06204,
  DSC06205,
  DSC06208,
  DSC06209,
  DSC06212,
  DSC06217,
  DSC06219,
  DSC06227,
  DSC06229,
  DSC06230,
  DSC06231,
  DSC06233,
  DSC06236,
  DSC06244_1,
  DSC06244
};

// Export as an array for mapping/iteration
export const ImgsArray = [
  DSC06104,
  DSC06105,
  DSC06109,
  DSC06113,
  DSC06116,
  DSC06120,
  DSC06126,
  DSC06141,
  DSC06143,
  DSC06146,
  DSC06150,
  DSC06154,
  DSC06166,
  DSC06168,
  DSC06170,
  DSC06172,
  DSC06176,
  DSC06177,
  DSC06178,
  DSC06181,
  DSC06193,
  DSC06199,
  DSC06200,
  DSC06204,
  DSC06205,
  DSC06208,
  DSC06209,
  DSC06212,
  DSC06217,
  DSC06219,
  DSC06227,
  DSC06229,
  DSC06230,
  DSC06231,
  DSC06233,
  DSC06236,
  DSC06244_1,
  DSC06244
];

// Helper function to get random images
export const getRandomImages = (count = 5) => {
  const shuffled = [...ImgsArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get image by name/key
export const getImageByName = (imageName) => {
  return ImgsCollection[imageName] || null;
};

// Default export
export default ImgsCollection;
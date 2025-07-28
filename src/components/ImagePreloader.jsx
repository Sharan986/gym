import { useEffect } from 'react';

/**
 * Preload critical images for better performance
 */
const ImagePreloader = ({ images = [], priority = true }) => {
  useEffect(() => {
    if (!priority) return;

    images.forEach((imageSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });

    // Cleanup
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => {
        if (images.includes(link.href)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [images, priority]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;

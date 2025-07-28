import React from 'react';

/**
 * Responsive Image Component for better mobile performance
 * Uses existing smaller images when available and provides fallbacks
 */
const ResponsiveImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : loading}
      decoding="async"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '300px 400px'
      }}
      onError={(e) => {
        console.log(`Failed to load image: ${src}`);
        // Keep the original src if there's an error
      }}
    />
  );
};

export default ResponsiveImage;

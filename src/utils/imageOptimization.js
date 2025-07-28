// Image optimization utilities
export const imageOptimization = {
  // Generate different sizes for responsive loading
  sizes: {
    mobile: { width: 480, height: 640, suffix: '_480x640' },
    tablet: { width: 768, height: 1024, suffix: '_768x1024' },
    desktop: { width: 1200, height: 1600, suffix: '_1200x1600' }
  },

  // Get optimized image URL based on screen size
  getOptimizedImageUrl: (originalUrl, targetSize = 'mobile') => {
    const { suffix } = imageOptimization.sizes[targetSize];
    return originalUrl.replace('.webp', `${suffix}.webp`);
  },

  // Generate srcSet string for responsive images
  generateSrcSet: (originalUrl) => {
    const { mobile, tablet, desktop } = imageOptimization.sizes;
    
    return [
      `${imageOptimization.getOptimizedImageUrl(originalUrl, 'mobile')} ${mobile.width}w`,
      `${imageOptimization.getOptimizedImageUrl(originalUrl, 'tablet')} ${tablet.width}w`,
      `${imageOptimization.getOptimizedImageUrl(originalUrl, 'desktop')} ${desktop.width}w`,
      `${originalUrl} 1920w`
    ].join(', ');
  },

  // Common sizes configurations
  commonSizes: {
    fullWidth: '100vw',
    halfWidth: '50vw',
    thirdWidth: '33vw',
    responsive: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    heroImage: '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
  }
};

export default imageOptimization;

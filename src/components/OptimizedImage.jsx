import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function OptimizedImage({ src, alt, className, width, height }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect="blur"
      width={width}
      height={height}
      threshold={200}
      placeholderSrc="/placeholder.jpg" 
      useIntersectionObserver={true}
    />
  );
}
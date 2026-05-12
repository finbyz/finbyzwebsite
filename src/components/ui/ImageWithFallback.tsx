'use client';

import React from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Client component for images that need onLoad/onError handlers.
 * Handles graceful loading (fade-in) and error hiding.
 */
export default function ImageWithFallback({ src, alt, className = '' }: ImageWithFallbackProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`${className} opacity-0 transition-opacity duration-300`}
      onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
    />
  );
}

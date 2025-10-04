import Image from 'next/image';
import React from 'react';

interface ForwardContractGifImageProps {
  src: string;
  alt: string;
}

export default function ForwardContractGifImage({ src, alt }: ForwardContractGifImageProps) {
  return (
    <div className="flex justify-center py-4 animate-fade-in">
      {/* For GIFs, use img tag instead of next/image */}
      <img src={src} alt={alt} className="rounded-lg shadow-lg border border-muted w-2/3" />
    </div>
  );
}

import Image from 'next/image';
import { cn } from '@/lib/utils';
import React from 'react';

interface ProductifyImageSectionProps {
  src: string;
  alt: string;
  caption: string;
}

const ProductifyImageSection: React.FC<ProductifyImageSectionProps> = ({ src, alt, caption }) => (
  <div className="flex flex-col items-center gap-4 animate-fadeInUp">
    <Image
      src={src}
      alt={alt}
      width={1150}
      height={600}
      className="rounded-xl shadow-lg w-full h-auto object-contain"
      priority
    />
    <p className="text-muted-foreground text-base text-center mt-2">{caption}</p>
  </div>
);

export default ProductifyImageSection;

import Image from 'next/image';
import React from 'react';

interface ProductifyDualImageSectionProps {
  images: { src: string; alt: string; caption: string }[];
}

const ProductifyDualImageSection: React.FC<ProductifyDualImageSectionProps> = ({ images }) => (
  <div className="flex flex-col md:flex-row gap-8 items-start justify-center animate-fadeInUp">
    {images.map((img, idx) => (
      <div key={idx} className="flex-1 flex flex-col items-center">
        <Image
          src={img.src}
          alt={img.alt}
          width={600}
          height={400}
          className="rounded-xl shadow-lg w-full h-auto object-contain"
        />
        <p className="text-muted-foreground text-base text-center mt-2">{img.caption}</p>
      </div>
    ))}
  </div>
);

export default ProductifyDualImageSection;

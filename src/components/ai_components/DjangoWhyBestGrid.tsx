import React from "react";
import Image from "next/image";

interface WhyBestItem {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface DjangoWhyBestGridProps {
  items: WhyBestItem[];
}

const DjangoWhyBestGrid: React.FC<DjangoWhyBestGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="rounded-xl border border-gray-100 bg-white shadow-sm p-6 flex flex-col items-center hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col items-center mb-4">
            <Image
              src={item.image}
              alt={item.alt}
              width={80}
              height={80}
              className="object-contain mb-2"
            />
            <h3 className="text-lg font-semibold mt-2 mb-1 text-center">{item.title}</h3>
          </div>
          <p className="text-gray-700 text-center text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DjangoWhyBestGrid;

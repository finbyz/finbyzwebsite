import React from "react";
import Image from "next/image";

interface Industry {
  title: string;
  image: string;
  alt: string;
  description: string;
  bg?: string;
}

interface IndustryGridProps {
  industries: Industry[];
}

const bgClasses = [
  "bg-gray",
  "bg-lightgray",
  "bg-gray",
  "bg-lightgray",
  "bg-gray",
  "bg-lightgray"
];

const IndustryGrid: React.FC<IndustryGridProps> = ({ industries }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {industries.map((industry, idx) => (
        <div
          key={industry.title}
          className={`rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 ${industry.bg || bgClasses[idx % bgClasses.length]} p-6 flex flex-col items-center`}
        >
          <div className="flex justify-center">
            <Image
              src={industry.image}
              alt={industry.alt}
              width={120}
              height={120}
              className="object-contain p-4"
            />
          </div>
          <h3 className="text-lg font-semibold mt-2 text-center">{industry.title}</h3>
          <p className="mt-2 text-gray-700 text-center">{industry.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IndustryGrid;

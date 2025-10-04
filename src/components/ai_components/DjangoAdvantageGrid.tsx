import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Advantage {
  title: string;
  image: string;
  alt: string;
  description: string;
  bg?: string;
}

interface DjangoAdvantageGridProps {
  advantages: Advantage[];
}

const bgClasses = [
  "bg-gray-50",
  "bg-white",
  "bg-gray-100",
  "bg-gray-50",
  "bg-white",
  "bg-gray-100"
];

const DjangoAdvantageGrid: React.FC<DjangoAdvantageGridProps> = ({ advantages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {advantages.map((adv, idx) => (
        <div
          key={adv.title}
          className={cn(
            "rounded-xl shadow-sm p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-lg",
            adv.bg ? adv.bg : bgClasses[idx % bgClasses.length]
          )}
        >
          <div className="flex flex-col items-center mb-4">
            <h3 className="text-lg font-semibold mb-2 text-center">{adv.title}</h3>
            <Image
              src={adv.image}
              alt={adv.alt}
              width={80}
              height={80}
              className="object-contain mb-2"
            />
          </div>
          <p className="text-gray-700 text-center text-sm">{adv.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DjangoAdvantageGrid;

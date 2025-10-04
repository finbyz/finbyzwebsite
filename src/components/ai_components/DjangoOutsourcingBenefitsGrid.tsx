import React from "react";
import Image from "next/image";

interface Benefit {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface DjangoOutsourcingBenefitsGridProps {
  benefits: Benefit[];
}

const DjangoOutsourcingBenefitsGrid: React.FC<DjangoOutsourcingBenefitsGridProps> = ({ benefits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="rounded-xl border border-gray-100 bg-white shadow-sm p-6 flex flex-col items-center hover:shadow-md transition-shadow"
        >
          <Image
            src={benefit.image}
            alt={benefit.alt}
            width={64}
            height={64}
            className="object-contain mb-3"
          />
          <h4 className="text-base font-semibold mb-2 text-center">{benefit.title}</h4>
          <p className="text-gray-700 text-center text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DjangoOutsourcingBenefitsGrid;

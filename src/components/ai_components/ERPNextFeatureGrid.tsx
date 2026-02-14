import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

interface Feature {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface ERPNextFeatureGridProps {
  features: Feature[];
}

const ERPNextFeatureGrid: React.FC<ERPNextFeatureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature) => (
        <Card
          key={feature.title}
          className={cn(
            "border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 flex flex-col items-center text-center p-6",
            "animate-fadeInUp"
          )}
        >
          <CardHeader className="flex flex-col items-center">
            <Image
              src={feature.image}
              alt={feature.alt}
              width={120}
              height={120}
              className="mb-4 object-contain"
            />
            <CardTitle className="text-lg font-semibold mb-2">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ERPNextFeatureGrid;

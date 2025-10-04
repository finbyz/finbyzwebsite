import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface Feature {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface ERPNextKeyFeaturesSliderProps {
  features: Feature[];
}

const ERPNextKeyFeaturesSlider: React.FC<ERPNextKeyFeaturesSliderProps> = ({ features }) => {
  return (
    <div className="flex flex-col gap-8">
      {features.map((feature, idx) => (
        <Card
          key={feature.title}
          className="border-none flex flex-col md:flex-row items-center gap-6 bg-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
        >
          <div className="flex-shrink-0 flex items-center justify-center p-6">
            <Image
              src={feature.image}
              alt={feature.alt}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="flex-1 p-4">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-lg font-semibold mb-2">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ERPNextKeyFeaturesSlider;

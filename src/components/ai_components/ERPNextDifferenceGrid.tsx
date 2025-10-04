import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";

interface Feature {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface ERPNextDifferenceGridProps {
  features: Feature[];
}

const ERPNextDifferenceGrid: FC<ERPNextDifferenceGridProps> = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {features.map((feature) => (
      <Card
        key={feature.title}
        className="border-none shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <CardHeader className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center mb-2">
            <Image
              src={feature.image}
              alt={feature.alt}
              width={64}
              height={64}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardTitle className="text-lg font-semibold mb-2 text-center">
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-center text-sm md:text-base">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default ERPNextDifferenceGrid;

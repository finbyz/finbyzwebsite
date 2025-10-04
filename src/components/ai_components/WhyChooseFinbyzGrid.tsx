import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";

interface Feature {
  title: string;
  image: string;
  alt: string;
  description: string;
  bg?: string;
}

interface WhyChooseFinbyzGridProps {
  features: Feature[];
}

const bgMap: Record<string, string> = {
  gray: "bg-gray-100",
  lightgray: "bg-gray-50",
};

const WhyChooseFinbyzGrid: FC<WhyChooseFinbyzGridProps> = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {features.map((feature, idx) => (
      <Card
        key={feature.title}
        className={clsx(
          "border-none shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
          feature.bg === "gray"
            ? "bg-gray-100"
            : feature.bg === "lightgray"
            ? "bg-gray-50"
            : "bg-white"
        )}
      >
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-lg font-semibold mb-2 text-center">
            {feature.title}
          </CardTitle>
          <div className="w-20 h-20 flex items-center justify-center mb-2">
            <Image
              src={feature.image}
              alt={feature.alt}
              width={80}
              height={80}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
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

export default WhyChooseFinbyzGrid;

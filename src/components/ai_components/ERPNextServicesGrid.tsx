import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";

interface Service {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface ERPNextServicesGridProps {
  services: Service[];
}

const ERPNextServicesGrid: FC<ERPNextServicesGridProps> = ({ services }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {services.map((service) => (
      <Card
        key={service.title}
        className="border-none shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <CardHeader className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center mb-2">
            <Image
              src={service.image}
              alt={service.alt}
              width={64}
              height={64}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardTitle className="text-lg font-semibold mb-2 text-center">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-center text-sm md:text-base">
            {service.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default ERPNextServicesGrid;

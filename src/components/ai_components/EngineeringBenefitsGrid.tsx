import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import clsx from "clsx";
import React from "react";

interface Benefit {
  title: string;
  image: string;
  alt: string;
  description: string;
  bg?: string;
}

interface EngineeringBenefitsGridProps {
  benefits: Benefit[];
}

const bgMap: Record<string, string> = {
  gray: "bg-gray-100",
  lightgray: "bg-gray-50",
};

export default function EngineeringBenefitsGrid({ benefits }: EngineeringBenefitsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {benefits.map((b, i) => (
        <Card
          key={b.title}
          className={clsx(
            "border-none shadow-md transition-transform duration-300 hover:-translate-y-1",
            b.bg === "gray" ? "bg-gray-100" : "bg-gray-50"
          )}
        >
          <CardHeader className="flex flex-col items-center gap-2 pb-2">
            <CardTitle className="text-lg font-semibold text-center">{b.title}</CardTitle>
            <div className="flex justify-center">
              <Image
                src={b.image}
                alt={b.alt}
                width={80}
                height={80}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 text-center">{b.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

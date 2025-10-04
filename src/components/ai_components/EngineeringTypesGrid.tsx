import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import clsx from "clsx";
import React from "react";

interface Type {
  title: string;
  image: string;
  alt: string;
  description: string;
  bg?: string;
}

interface EngineeringTypesGridProps {
  types: Type[];
}

export default function EngineeringTypesGrid({ types }: EngineeringTypesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {types.map((t, i) => (
        <Card
          key={t.title}
          className={clsx(
            "border-none shadow-md transition-transform duration-300 hover:-translate-y-1",
            t.bg === "gray" ? "bg-gray-100" : "bg-gray-50"
          )}
        >
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold">{t.title}</CardTitle>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={t.image}
                alt={t.alt}
                width={80}
                height={80}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">{t.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

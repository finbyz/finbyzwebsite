import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface IndustryServiceCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
}

export default function IndustryServiceCard({ title, image, alt, description }: IndustryServiceCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center py-6 px-4 bg-white">
      <CardHeader className="flex flex-col items-center gap-2 pb-2">
        <Image src={image} alt={alt} width={64} height={64} className="object-contain mb-2" />
        <CardTitle className="text-base font-semibold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-700 text-center pt-0 pb-2 flex-1 flex items-center justify-center">
        {description}
      </CardContent>
    </Card>
  );
}

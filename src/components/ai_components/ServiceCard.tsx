import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

interface ServiceCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
  bg: string;
}

const bgMap: Record<string, string> = {
  gray: "bg-gray-100",
  lightgray: "bg-gray-50",
  white: "bg-white",
};

export default function ServiceCard({ title, image, alt, description, bg }: ServiceCardProps) {
  return (
    <Card className={cn("border-none shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col", bgMap[bg] || "bg-white")}>      
      <CardHeader className="flex flex-col items-center gap-2 pb-2">
        <CardTitle className="text-lg font-semibold text-center">{title}</CardTitle>
        <Image src={image} alt={alt} width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-105" />
      </CardHeader>
      <CardContent className="text-sm text-gray-700 text-center pt-0 pb-4 flex-1 flex items-center justify-center">
        {description}
      </CardContent>
    </Card>
  );
}

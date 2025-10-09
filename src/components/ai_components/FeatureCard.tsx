import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, image, alt, description }) => (
  // <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center justify-between">
  //   <CardHeader className="flex flex-col items-center">
  //     <CardTitle className="text-lg font-semibold mb-2 text-center">{title}</CardTitle>
  //     <Image src={image} alt={alt} width={160} height={160} className="object-contain rounded-ss-2xl rounded-ee-2xl hover:rounded-ss-none hover:rounded-ee-none hover:rounded-r-2xl hover:rounded-l-2xl transition-all duration-300" />
  //   </CardHeader>
  //   <CardContent className="text-center text-muted-foreground text-base pt-2">
  //     {description}
  //   </CardContent>
  // </Card>
  <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col items-center justify-between rounded-2xl cursor-pointer">
  <CardHeader className="flex flex-col items-center">
    <CardTitle className="text-lg font-semibold mb-2 text-center">
      {title}
    </CardTitle>
    <Image
      src={image}
      alt={alt}
      width={160}
      height={160}
      className="object-contain rounded-ss-2xl rounded-ee-2xl 
                 hover:rounded-ss-none hover:rounded-ee-none hover:rounded-l-2xl hover:rounded-r-2xl 
                 transition-all duration-300 ease-out transform hover:-translate-y-1"
    />
  </CardHeader>
  <CardContent className="text-justify text-muted-foreground text-base pt-2 opacity-90 transition-opacity duration-300 hover:opacity-100">
    {description}
  </CardContent>
</Card>

);

export default FeatureCard;

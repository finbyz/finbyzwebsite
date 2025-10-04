import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, image, alt, description }) => (
  <Card className="border-none bg-background shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
    <CardHeader className="flex items-center justify-center pb-2">
      <Image src={image} alt={alt} width={64} height={64} className="object-contain" />
    </CardHeader>
    <CardTitle className="text-center text-lg font-semibold mb-1">{title}</CardTitle>
    <CardContent className="text-center text-muted-foreground text-base">{description}</CardContent>
  </Card>
);

export default BenefitCard;

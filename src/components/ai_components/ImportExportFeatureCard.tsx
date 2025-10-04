import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ImportExportFeatureCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
  className?: string;
}

const ImportExportFeatureCard: FC<ImportExportFeatureCardProps> = ({ title, image, alt, description, className }) => (
  <Card className={cn("border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center", className)}>
    <CardHeader className="flex flex-col items-center gap-2 pb-2">
      <div className="w-24 h-24 flex items-center justify-center">
        <Image src={image} alt={alt} width={96} height={96} className="object-contain" />
      </div>
      <CardTitle className="text-lg font-semibold text-center mt-2">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground text-center px-2 pb-4">
      {description}
    </CardContent>
  </Card>
);

export default ImportExportFeatureCard;

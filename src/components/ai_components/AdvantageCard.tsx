import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

interface AdvantageCardProps {
  title: string;
  description: string;
}

export default function AdvantageCard({ title, description }: AdvantageCardProps) {
  return (
    <Card className="border-none bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-2 pb-2 justify-center">
        <CheckCircle className="text-green-500 w-5 h-5" />
        <CardTitle className="text-base font-semibold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-700 text-center pt-0 pb-4 flex-1 flex items-center justify-center">
        {description}
      </CardContent>
    </Card>
  );
}

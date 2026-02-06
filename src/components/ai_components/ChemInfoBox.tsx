import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ChemInfoBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ChemInfoBox: React.FC<ChemInfoBoxProps> = ({ icon, title, description }) => (
  <Card className="border-none bg-orange-50/60 shadow-md hover:shadow-lg transition-shadow h-full">
    <CardHeader className="flex flex-row items-center gap-2 pb-2">
      <div className="text-primary">{icon}</div>
      <CardTitle className="text-base font-semibold text-blue-900">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-700 text-sm">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default ChemInfoBox;

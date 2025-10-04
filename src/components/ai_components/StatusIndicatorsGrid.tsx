import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, HelpCircle, XCircle } from "lucide-react";
import React from "react";

interface Indicator {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface StatusIndicatorsGridProps {
  indicators: Indicator[];
}

const StatusIndicatorsGrid: React.FC<StatusIndicatorsGridProps> = ({ indicators }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
    {indicators.map((indicator, idx) => (
      <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-col items-center gap-2">
          <div className={`rounded-full p-3 bg-${indicator.color}-100 mb-2 animate-fade-in`}>
            {indicator.icon}
          </div>
          <CardTitle className="text-lg font-semibold text-gray-900">{indicator.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-gray-600">{indicator.description}</CardDescription>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default StatusIndicatorsGrid;

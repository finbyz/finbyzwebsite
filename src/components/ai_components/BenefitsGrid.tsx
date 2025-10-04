import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

interface Benefit {
  title: string;
  items: string[];
}

interface BenefitsGridProps {
  benefits: Benefit[];
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({ benefits }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {benefits.map((benefit, idx) => (
      <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 text-center">{benefit.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            {benefit.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default BenefitsGrid;

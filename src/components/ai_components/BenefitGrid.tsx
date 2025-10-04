import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface BenefitGridProps {
  benefits: Array<{ title: string; items: string[] }>;
}

const BenefitGrid: React.FC<BenefitGridProps> = ({ benefits }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {benefits.map((benefit, idx) => (
      <Card key={idx} className="border-none shadow-md bg-white/90 dark:bg-zinc-900/80">
        <CardHeader>
          <CardTitle className="text-lg font-semibold mb-2">{benefit.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 text-zinc-700 dark:text-zinc-300 space-y-1">
            {benefit.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default BenefitGrid;

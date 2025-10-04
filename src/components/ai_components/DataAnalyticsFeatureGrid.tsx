import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BarChart3, AreaChart, Route } from "lucide-react";
import Image from "next/image";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
  "Business Intelligence": <BarChart3 className="w-10 h-10 text-primary mx-auto mb-4" />, 
  "Data Visualizations": <AreaChart className="w-10 h-10 text-primary mx-auto mb-4" />, 
  "Strategy": <Route className="w-10 h-10 text-primary mx-auto mb-4" />
};

export default function DataAnalyticsFeatureGrid({ features }: { features: { title: string; icon: React.ReactNode; alt: string; description: string; }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <Card key={feature.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
          <CardHeader className="flex flex-col items-center">
            {iconMap[feature.title] || (
              <Image src={feature.icon as string} alt={feature.alt} width={48} height={48} className="mb-4" />
            )}
            <CardTitle className="text-lg font-semibold text-center">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-muted-foreground text-base">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

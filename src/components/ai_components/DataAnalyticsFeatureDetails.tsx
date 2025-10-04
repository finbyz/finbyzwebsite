import { BarChart3, AreaChart, Route } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
  "Business Intelligence": <BarChart3 className="w-8 h-8 text-primary mb-2" />, 
  "Data Visualizations": <AreaChart className="w-8 h-8 text-primary mb-2" />, 
  "Strategy": <Route className="w-8 h-8 text-primary mb-2" />
};

export default function DataAnalyticsFeatureDetails({ details }: { details: { title: string; description: string; icon: React.ReactNode; }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {details.map((item) => (
        <div key={item.title} className="flex flex-col items-center bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          {iconMap[item.title]}
          <h3 className="font-semibold text-lg mb-2 text-center">{item.title}</h3>
          <p className="text-center text-muted-foreground text-base">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideLeaf, LucideTrendingUp, LucideSettings, LucideShieldCheck } from "lucide-react";
import React from "react";

const icons = [
  <LucideLeaf className="w-8 h-8 text-green-600" />, // Agricultural Data
  <LucideTrendingUp className="w-8 h-8 text-blue-600" />, // Agricultural Sales
  <LucideSettings className="w-8 h-8 text-yellow-600" />, // Managing Processes
  <LucideShieldCheck className="w-8 h-8 text-emerald-600" /> // Government Compliance
];

export default function AgricultureFeatureGrid({ features }: { features: { title: string; description: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, idx) => (
        <Card
          key={feature.title}
          className={cn(
            "border-none shadow-lg bg-white/90 hover:shadow-2xl transition-all duration-300",
            idx % 2 === 0 ? "rounded-br-2xl" : "rounded-tl-2xl"
          )}
        >
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div>{icons[idx]}</div>
            <CardTitle className="text-lg font-semibold text-gray-800">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 text-base pt-0">
            {feature.description}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

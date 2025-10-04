import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LucideListChecks, LucideRefreshCw, LucideCheckCircle2 } from "lucide-react";
import React from "react";

const icons = [
  <LucideListChecks className="w-6 h-6 text-primary" />, 
  <LucideCheckCircle2 className="w-6 h-6 text-primary" />, 
  <LucideRefreshCw className="w-6 h-6 text-primary" />
];

export default function HowToUseFDAppSteps({ steps }: { steps: Array<{ title: string; items: string[] }> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, idx) => (
        <Card key={step.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <span>{icons[idx] || <LucideListChecks className="w-6 h-6 text-primary" />}</span>
            <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              {step.items.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

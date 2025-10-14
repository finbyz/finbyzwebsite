import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { List } from "@/components/sections/list";
import { LucideListChecks } from "lucide-react";
import React from "react";

interface Step {
  title: string;
  items?: string[];
}

interface HowToUseRodtepAppListProps {
  steps: Step[];
}

const HowToUseRodtepAppList: React.FC<HowToUseRodtepAppListProps> = ({ steps }) => {
  return (
    <div className="space-y-8">
      {steps.map((step, idx) => (
        <Card key={idx} className="border-none bg-muted/40 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center gap-3 pb-2 ">
            <span className="rounded-full bg-primary/10 p-2 h-5 w-5 text-primary" >
              {/* <LucideListChecks className="h-5 w-5 text-primary" /> */}
            </span>
            <CardTitle className="text-lg font-semibold text-[#1A5276]">{step.title}</CardTitle>
          </CardHeader>
          {step.items && step.items.length > 0 && (
            <CardContent className="pl-12 pt-0">
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default HowToUseRodtepAppList;

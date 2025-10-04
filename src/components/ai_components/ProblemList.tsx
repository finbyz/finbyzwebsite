import { LucideHelpCircle } from "lucide-react";
import React from "react";

interface ProblemListProps {
  items: string[];
}

export default function ProblemList({ items }: ProblemListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 animate-fade-in-up">
          <span className="mt-1 text-primary">
            <LucideHelpCircle size={22} />
          </span>
          <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

import { LucideLightbulb } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SolutionListProps {
  items: Array<{ description: string; link?: { href: string; text: string } }>;
}

export default function SolutionList({ items }: SolutionListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 animate-fade-in-up">
          <span className="mt-1 text-yellow-500">
            <LucideLightbulb size={22} />
          </span>
          <span className="text-base text-muted-foreground leading-relaxed">
            {item.link ? (
              <>
                {item.description.split(item.link.text)[0]}
                <Link href={item.link.href} target="_blank" className="text-primary underline font-medium hover:text-primary/80 transition-colors">
                  {item.link.text}
                </Link>
                {item.description.split(item.link.text)[1]}
              </>
            ) : (
              item.description
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

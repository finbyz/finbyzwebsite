'use client';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface TroubleshootingItem {
  problem: string;
  solution: string;
}

interface TroubleshootingProps {
  items: TroubleshootingItem[];
  title?: string;
  subtitle?: string;
}

export default function Troubleshooting({ 
  items,
  title = "Common Issues & Solutions",
  subtitle = "Troubleshoot problems you might encounter"
}: TroubleshootingProps) {
  return (
    <div className="container-custom py-12">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            {title}
          </h1>
          <p className="text-slate-600 text-lg">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-slate-200 px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 hover:bg-slate-50 -mx-6 px-6 rounded-t-lg">
                <span className="font-semibold text-slate-900 text-lg">
                  {item.problem}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-5">
                <p className="text-slate-600 leading-relaxed">
                  {item.solution}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        
      </div>
    </div>
  );
}
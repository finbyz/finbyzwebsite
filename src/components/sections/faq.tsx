"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ChevronDown } from "lucide-react";

// Define your palette
const palette = [
  { bg: "#1A5276", text: "#fff" },      // Blue
  { bg: "#FF8C00", text: "#fff" },      // Orange
  { bg: "#8E44AD", text: "#fff" },      // Purple
  { bg: "#16A085", text: "#fff" },      // Teal
];

// Assign palette to each FAQ
const faqs = [
  {
    question: "What industries do you serve?",
    answer: "Primarily manufacturing, trading, and professional services — but we customize tech for any business model.",
    category: "Services",
    palette: palette[0]
  },
  {
    question: "Do you work on fixed-cost projects or hourly?",
    answer: "We offer both. Clients choose between full-time resources or scoped deliverables.",
    category: "Pricing",
    palette: palette[1]
  },
  {
    question: "How do you ensure data security?",
    answer: "We follow best-in-class data governance and NDA-backed confidentiality, especially for ERP access.",
    category: "Security",
    palette: palette[2]
  },
  {
    question: "What's your typical project timeline?",
    answer: "ERP implementations: 3-6 months. AI automation: 2-4 weeks. Custom software: 1-3 months depending on scope.",
    category: "Timeline",
    palette: palette[3]
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical assistance.",
    category: "Support",
    palette: palette[1]
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-[#FAFBFC] w-full min-h-screen flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-[#1A5276] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 lg:mb-6 shadow-lg">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A5276] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-[#1A5276] max-w-3xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>
        
        <div className="animate-fade-in-delayed max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group border-2 border-gray-100 hover:border-gray-200 rounded-2xl px-4 lg:px-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-[#1A5276] hover:no-underline py-4 lg:py-6 group-hover:text-[#FF8C00] transition-colors duration-300 relative z-10">
                  <div className="flex items-center space-x-3 lg:space-x-4 w-full">
                    <div
                      className="w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shadow-sm flex-shrink-0"
                      style={{
                        background: faq.palette.bg,
                        color: faq.palette.text,
                      }}
                    >
                      <span className="text-xs font-bold">{faq.category.charAt(0)}</span>
                    </div>
                    <span className="flex-1 text-sm lg:text-base">{faq.question}</span>
                    <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-[#1A5276] group-hover:text-[#FF8C00] transition-colors duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 lg:pb-6 text-gray-700 leading-relaxed relative z-10">
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ background: faq.palette.bg }}
                    ></div>
                    <p className="text-sm lg:text-base">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}


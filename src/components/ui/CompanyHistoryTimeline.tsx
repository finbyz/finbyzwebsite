"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Lightbulb, 
  TrendingUp, 
  Target,
  Zap,
  Calendar
} from "lucide-react";
import "@/styles/component-colors.css";
import "@/app/globals.css";

interface TimelineEvent {
  date: string; // e.g., "January 2019"
  title: string;
  location: string;
  description: string;
  icon: any;
  position: 'left' | 'right';
  illustration?: React.ReactNode; // SVG or JSX for background
  buttonText?: string;
  buttonLink?: string;
}

interface CompanyHistoryTimelineProps {
  data?: {
    title?: string;
    subtitle?: string;
    events?: TimelineEvent[];
  };
}

// Main Timeline Component
export default function CompanyHistoryTimeline({ data }: CompanyHistoryTimelineProps) {
  // Default data based on the about page timeline
  const defaultEvents: TimelineEvent[] = [
    { date: "2015", title: "Finbyz Consulting Begins", description: "Launched as a financial and business consulting firm focused on unlocking operational efficiency.", icon: Building2, position: 'right', location: "" },
    { date: "2016", title: "Rebranded as Finbyz Tech Pvt Ltd", description: "Transitioned into a tech-first company focused on business process automation.", icon: Building2, position: 'left', location: "" },
    { date: "2017", title: "Exim App Built", description: "Launched a custom solution for managing export-import operations in ERP systems.", icon: Building2, position: 'right', location: "" },
    { date: "2018", title: "Specialized in Chemicals", description: "Created solutions for batch-wise inventory and regulatory compliance.", icon: Building2, position: 'left', location: "" },
    { date: "2019", title: "Entered Textile Manufacturing", description: "Designed complex production and inventory workflows for yarn manufacturers.", icon: Building2, position: 'right', location: "" },
    { date: "2020", title: "Serialized Inventory for Engineering", description: "Enabled bulk serialized item management for a heavy machinery manufacturer.", icon: Building2, position: 'left', location: "" },
    { date: "2021", title: "Optimized Plastic Operations", description: "Reduced machine downtime by solving mold change issues using smart tech.", icon: Building2, position: 'right', location: "" },
    { date: "2022", title: "Trading Bots & Agri Commodity Suite", description: "Built algorithmic trading automation and ERP workflows for agro-trading firms.", icon: Building2, position: 'left', location: "" },
    { date: "2023", title: "Solutions for Metal Casting", description: "Created tools to track rejections and process transparency in multi-stage manufacturing.", icon: Building2, position: 'right', location: "" },
    { date: "2024", title: "Resource Augmentation Model", description: "Launched a flexible model for businesses to hire dedicated tech talent. Also delivered industry-specific ERP for the solar pump sector.", icon: Building2, position: 'left', location: "" },
    { date: "2025", title: "AI-Powered Workflow Automations", description: "Integrated cutting-edge AI tools to solve real-world industry challenges, from production to procurement.", icon: Building2, position: 'right', location: "" },
    { date: "2026", title: "Placeholder Milestone 1", description: "Description for future milestone 1.", icon: Building2, position: 'left', location: "" },
    { date: "2027", title: "Placeholder Milestone 2", description: "Description for future milestone 2.", icon: Building2, position: 'right', location: "" },
    { date: "2028", title: "Placeholder Milestone 3", description: "Description for future milestone 3.", icon: Building2, position: 'left', location: "" },
  ];

  const events = data?.events || defaultEvents;
  const title = data?.title || "Company History";
  const subtitle = data?.subtitle || "A journey of a thousand miles begins with a single step. - Lao Tzu";

  return (
    <section className="timeline-section py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276]" >{title}</h2>
          <p className="text-lg" style={{  opacity: 0.7 }}>{subtitle}</p>
        </div>

      
      {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 z-0 rounded-full" style={{ background: 'linear-gradient(180deg, var(--primary-blue), var(--primary-purple))', transform: 'translateX(-50%)' }}></div>
          
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="timeline-item relative mb-16 last:mb-0">
                {/* Dot on the line */}
                <div className="absolute left-1/2 top-8 z-10" style={{ transform: 'translate(-50%, 0)' }}>
                  <div className="w-5 h-5 rounded-full border-4 border-white shadow-lg" style={{ background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-purple))' }}></div>
                </div>
                
                {/* Event Content */}
                <div className={`flex items-start ${isLeft ? 'justify-end pr-[calc(50%+2rem)]' : 'justify-start pl-[calc(50%+2rem)]'}`}>
                  <div className="flex items-start gap-4 max-w-md">
                    {isLeft && (
                      <>
                        <div className="flex-1">
                          <div className="rounded-lg shadow-md p-6" style={{ background: 'var(--bg-blue-light)', color: 'var(--text-blue)', border: '1px solid var(--border-blue)' }}>
                            <div className="font-bold text-xl mb-2" style={{ color: 'var(--primary-blue)' }}>{event.date}</div>
                            <div className="font-semibold text-lg mb-2">{event.title}</div>
                            <div className="text-sm" style={{ color: 'var(--text-blue)', opacity: 0.8 }}>{event.description}</div>
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-purple))' }}>
                          <event.icon className="w-8 h-8 text-white" />
                        </div>
                      </>
                    )}
                    {!isLeft && (
                      <>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-purple))' }}>
                          <event.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className=" rounded-lg shadow-md p-6" style={{ background: 'var(--bg-blue-light)', color: 'var(--text-blue)', border: '1px solid var(--border-blue)' }}>
                            <div className="font-bold text-xl mb-2" style={{ color: 'var(--primary-blue)' }}>{event.date}</div>
                            <div className="font-semibold text-lg mb-2">{event.title}</div>
                            <div className="text-sm" style={{ color: 'var(--text-blue)', opacity: 0.8 }}>{event.description}</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Usage Examples Component (for testing/demo purposes)
export function CompanyHistoryExample() {
  // Custom timeline data example
  const customTimelineData = {
    title: "Our Journey",
    subtitle: "Every great journey begins with a single step towards excellence",
    events: [
      {
        date: "April 2020",
        title: "Foundation",
        location: "Ahmedabad",
        description: "Started our journey with a vision to transform the digital landscape.",
        icon: Building2,
        position: 'left' as const,
        illustration: (
          <svg viewBox="0 0 100 100" fill="none" className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            <circle cx="50" cy="50" r="40" stroke="#a78bfa" strokeWidth="2" fill="none" />
          </svg>
        ),
        buttonText: "Visit",
        buttonLink: "#"
      },
      {
        date: "August 2021",
        title: "Innovation",
        location: "Bangalore",
        description: "Launched our first breakthrough product that revolutionized the market.",
        icon: Lightbulb,
        position: 'right' as const,
        illustration: (
          <svg viewBox="0 0 100 100" fill="none" className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            <rect x="20" y="20" width="60" height="60" rx="10" stroke="#a78bfa" strokeWidth="2" fill="none" />
          </svg>
        ),
        buttonText: "Visit",
        buttonLink: "#"
      },
      {
        date: "March 2022",
        title: "Growth",
        location: "Mumbai",
        description: "Expanded our team and reached new markets across multiple continents.",
        icon: TrendingUp,
        position: 'left' as const,
        illustration: (
          <svg viewBox="0 0 100 100" fill="none" className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            <polygon points="50,10 90,90 10,90" stroke="#a78bfa" strokeWidth="2" fill="none" />
          </svg>
        ),
        buttonText: "Visit",
        buttonLink: "#"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Default Timeline */}
      <CompanyHistoryTimeline />
      
      {/* Custom Timeline Example */}
      <CompanyHistoryTimeline data={customTimelineData} />
    </div>
  );
}

/* 
USAGE EXAMPLES:

1. Basic usage with default data:
   <CompanyHistoryTimeline />

2. Custom title and subtitle only:
   <CompanyHistoryTimeline data={{
     title: "Our Story",
     subtitle: "Building the future, one step at a time"
   }} />

3. Fully customized with your own events:
   <CompanyHistoryTimeline data={customTimelineData} />
*/
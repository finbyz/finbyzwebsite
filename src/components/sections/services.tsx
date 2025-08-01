"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Zap, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "ERP Implementation",
    description: "Streamline operations and scale faster with expert ERPNext implementations — from vanilla to custom builds.",
    iconColor: "#1A5276",
    bgColor: "#EAF1F8",
    borderColor: "#1A5276"
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate intelligently. From data workflows to business logic, we build AI that works where it matters.",
    iconColor: "#FF8C00",
    bgColor: "#FFF4E5",
    borderColor: "#FF8C00"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "From SaaS apps to custom tools, we develop scalable, user-centric software built to solve real problems.",
    iconColor: "#27AE60",
    bgColor: "#E8F8F2",
    borderColor: "#27AE60"
  },
  {
    icon: Users,
    title: "Resource Augmentation",
    description: "Tap into our skilled developers and consultants — as dedicated team members or project-based specialists.",
    iconColor: "#8E44AD",
    bgColor: "#F3EAF8",
    borderColor: "#8E44AD"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
            What We Do – Snapshot
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                className="group h-full border-0 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden rounded-2xl"
                style={{ 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  borderTop: `4px solid ${service.borderColor}` 
                }}
              >
                <CardContent className="p-8 lg:p-10 relative z-10 flex flex-col items-center text-center">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <service.icon 
                      className="w-10 h-10"
                      style={{ color: service.iconColor }}
                    />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-6 text-center leading-tight" style={{ color: service.iconColor }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center text-base lg:text-lg">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-delayed">
          <Button
            size="lg"
            className="bg-[#1A5276] text-white px-10 py-4 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#154360] group"
          >
            <span className="mr-2">Ready to get started?</span>
            <span className="text-xl opacity-90 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}


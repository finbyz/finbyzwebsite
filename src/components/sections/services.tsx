"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Zap, Code, Users } from "lucide-react";

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
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
            What We Do – Snapshot
          </h2>
          <p className="text-xl text-gray-500">
            Comprehensive technology solutions for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                className="group h-full border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
                style={{ borderTop: `4px solid ${service.borderColor}` }}
              >
                <CardContent className="p-8 relative z-10 flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <service.icon 
                      className="w-8 h-8"
                      style={{ color: service.iconColor }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center" style={{ color: service.iconColor }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-delayed">
          <button
            className="inline-flex items-center space-x-2 bg-[#1A5276] text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold transition-transform duration-200 hover:scale-105"
          >
            <span>Ready to get started?</span>
            <span className="text-xl opacity-90">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}


"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Zap, Code, Users, Database, Brain, Cpu, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: BarChart3,
    title: "ERP Implementation",
    description: "Streamline operations and scale faster with expert ERPNext implementations — from vanilla to custom builds.",
    iconColor: "#1A5276",
    bgColor: "#EAF1F8",
    borderColor: "#1A5276",
    capabilities: [
      { icon: Database, label: "ERP", color: "#1A5276" },
      { icon: BarChart3, label: "Analytics", color: "#FF8C00" },
      { icon: GitBranch, label: "Integration", color: "#27AE60" }
    ]
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate intelligently. From data workflows to business logic, we build AI that works where it matters.",
    iconColor: "#FF8C00",
    bgColor: "#FFF4E5",
    borderColor: "#FF8C00",
    capabilities: [
      { icon: Brain, label: "AI", color: "#8E44AD" },
      { icon: Zap, label: "Automation", color: "#FF8C00" },
      { icon: Cpu, label: "ML", color: "#27AE60" }
    ]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "From SaaS apps to custom tools, we develop scalable, user-centric software built to solve real problems.",
    iconColor: "#27AE60",
    bgColor: "#E8F8F2",
    borderColor: "#27AE60",
    capabilities: [
      { icon: Code, label: "Development", color: "#27AE60" },
      { icon: Database, label: "SaaS", color: "#1A5276" },
      { icon: GitBranch, label: "Custom", color: "#FF8C00" }
    ]
  },
  {
    icon: Users,
    title: "Resource Augmentation",
    description: "Tap into our skilled developers and consultants — as dedicated team members or project-based specialists.",
    iconColor: "#8E44AD",
    bgColor: "#F3EAF8",
    borderColor: "#8E44AD",
    capabilities: [
      { icon: Users, label: "Team", color: "#8E44AD" },
      { icon: Code, label: "Consulting", color: "#27AE60" },
      { icon: GitBranch, label: "Dedicated", color: "#1A5276" }
    ]
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-white relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
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
              className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.2}s` : '0s',
                animationDelay: isVisible ? `${index * 0.2}s` : '0s'
              }}
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
                  
                  <p className="text-gray-600 leading-relaxed text-center text-base lg:text-lg mb-6">
                    {service.description}
                  </p>
                  
                  {/* Capability Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {service.capabilities.map((capability, capIndex) => (
                      <Badge
                        key={capIndex}
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 text-xs font-medium border rounded-full transition-all duration-300 hover:scale-105"
                        style={{ 
                          borderColor: capability.color,
                          color: capability.color,
                          backgroundColor: `${capability.color}10`
                        }}
                      >
                        <capability.icon className="w-3 h-3" />
                        {capability.label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.8s' : '0s' }}>
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


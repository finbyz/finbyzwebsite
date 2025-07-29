"use client";

import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Globe, Users, Target } from "lucide-react";
import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  className: string;
}

function AnimatedCounter({ end, suffix, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className={className}>
      {count}{suffix}
    </div>
  );
}

// Palette
const palette = [
  { iconBg: "#1A5276", iconColor: "#fff" },      // Blue
  { iconBg: "#FF8C00", iconColor: "#fff" },      // Orange
  { iconBg: "#1A5276", iconColor: "#fff" },      // Blue
  { iconBg: "#FF8C00", iconColor: "#fff" },      // Orange
  { iconBg: "#1A5276", iconColor: "#fff" },      // Blue
];

const benefits = [
  { 
    number: 10, 
    suffix: "+", 
    label: "Years of Proven Experience",
    icon: Award,
    palette: palette[0]
  },
  { 
    number: 200, 
    suffix: "%", 
    label: "Efficiency Gains with Our Solutions",
    icon: TrendingUp,
    palette: palette[1]
  },
  { 
    number: 12, 
    suffix: "+", 
    label: "Countries Served",
    icon: Globe,
    palette: palette[2]
  },
  { 
    number: 60, 
    suffix: "%", 
    label: "Team Deployment Rate with 3X ROI",
    icon: Users,
    palette: palette[3]
  },
  { 
    number: 100, 
    suffix: "+", 
    label: "Projects Delivered with Precision",
    icon: Target,
    palette: palette[4]
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[#1A5276] text-white relative overflow-hidden">
      {/* No gradients, just a solid blue background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose Finbyz
          </h2>
          <p className="text-xl text-blue-100">
            Proven results that speak for themselves
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg"
                  style={{
                    background: benefit.palette.iconBg,
                  }}
                >
                  <benefit.icon className="w-8 h-8" style={{ color: benefit.palette.iconColor }} />
                </div>
                
                <AnimatedCounter
                  end={benefit.number}
                  suffix={benefit.suffix}
                  className="text-4xl md:text-5xl font-bold text-white mb-2 block"
                />
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {benefit.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-delayed">
          <Button 
            size="lg"
            className="bg-[#FF8C00] text-white hover:bg-[#e07c00] text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all shadow-lg"
          >
            Let&apos;s Build That Efficiency &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}


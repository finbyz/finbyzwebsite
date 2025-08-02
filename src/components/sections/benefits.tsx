"use client";

import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Globe, Target, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

// Intersection Observer Hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  className: string;
  start: boolean;
}

function AnimatedCounter({ end, suffix, className, start }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
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
  }, [end, start]);

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
  { iconBg: "#27AE60", iconColor: "#fff" },      // Green
  { iconBg: "#8E44AD", iconColor: "#fff" },      // Purple
];

const benefits = [
  { 
    number: 10, 
    suffix: "+", 
    label: "Years of Proven Experience",
    header: "Proven Track Record",
    description: "Decade of expertise in delivering cutting-edge solutions",
    icon: Award,
    palette: palette[0]
  },
  { 
    number: 200, 
    suffix: "%", 
    label: "Efficiency Gains with Our Solutions",
    header: "Maximum Efficiency",
    description: "Transform your operations with intelligent automation",
    icon: TrendingUp,
    palette: palette[1]
  },
  { 
    number: 12, 
    suffix: "+", 
    label: "Countries Served",
    header: "Global Reach",
    description: "Serving clients across multiple continents worldwide",
    icon: Globe,
    palette: palette[2]
  },
  { 
    number: 100, 
    suffix: "+", 
    label: "Projects Delivered with Precision",
    header: "Quality Delivery",
    description: "Every project completed with exceptional precision and care",
    icon: Target,
    palette: palette[3]
  }
];

export default function Benefits() {
  const [sectionRef, inView] = useInView(0.3);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#E3F0FF] via-white to-[#FFF7E6] relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A5276]">
            Why Choose Finbyz
          </h2>
          <p className="text-xl md:text-2xl text-[#1A5276] max-w-3xl mx-auto leading-relaxed">
            Proven results that speak for themselves
          </p>
        </div>
        {/* Grid layout for 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.label}
                className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: inView ? `${index * 0.2}s` : '0s',
                  animationDelay: inView ? `${index * 0.2}s` : '0s'
                }}
              >
                <Card className="group h-full border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden rounded-2xl hover:bg-white/90 border border-white/50 shadow-lg">
                  <CardContent className="p-8 lg:p-10 relative z-10 flex flex-col items-center text-center h-full">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                      style={{
                        background: benefit.palette.iconBg,
                      }}
                    >
                      <benefit.icon className="w-10 h-10" style={{ color: benefit.palette.iconColor }} />
                    </div>
                    
                    {/* Header */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center leading-tight text-[#1A5276]">
                      {benefit.header}
                    </h3>
                    
                    {/* Animated Counter */}
                    <AnimatedCounter
                      end={benefit.number}
                      suffix={benefit.suffix}
                      className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-4 block text-center"
                      start={inView}
                    />
                    
                    {/* Description */}
                    <p className="text-[#1A5276] text-base lg:text-lg leading-relaxed font-medium mb-4">
                      {benefit.description}
                    </p>
                    
                    {/* Label */}
                    <p className="text-[#1A5276] text-sm lg:text-base leading-relaxed font-medium mt-auto">
                      {benefit.label}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: inView ? '0.8s' : '0s' }}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:shadow-xl text-lg px-10 py-4 h-auto transform hover:scale-105 transition-all duration-300 shadow-lg rounded-full font-semibold"
          >
            Let&apos;s Build That Efficiency &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Globe, Users, Target } from "lucide-react";
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
  const [sectionRef, inView] = useInView(0.3);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#E3F0FF] via-white to-[#FFF7E6] relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A5276]">
            Why Choose Finbyz
          </h2>
          <p className="text-xl md:text-2xl text-[#1A5276] max-w-3xl mx-auto leading-relaxed">
            Proven results that speak for themselves
          </p>
        </div>
        {/* Center the grid and make cards fill space nicely */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.label}
                className="flex items-stretch h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-10 hover:bg-white/90 transition-all duration-500 hover:scale-105 border border-white/50 shadow-lg hover:shadow-xl w-full min-h-[320px] max-h-[360px] min-w-[260px] max-w-[340px] mx-auto">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transition-transform duration-300 hover:scale-110"
                    style={{
                      background: benefit.palette.iconBg,
                    }}
                  >
                    <benefit.icon className="w-10 h-10" style={{ color: benefit.palette.iconColor }} />
                  </div>
                  <AnimatedCounter
                    end={benefit.number}
                    suffix={benefit.suffix}
                    className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-4 block text-center"
                    start={inView}
                  />
                  <p className="text-[#1A5276] text-base lg:text-lg leading-relaxed font-medium">
                    {benefit.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-20 animate-fade-in-delayed">
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
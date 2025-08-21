"use client";

import React from "react";
import { TrendingUp, Users, Globe, Award, Clock, Zap, Shield, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/stats-showcase.css";

// Intersection Observer Hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current || revealed) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, revealed]);

  return [ref, revealed] as const;
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
    const duration = 2000;
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

const stats = [
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on feedback from our clients worldwide",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Serving businesses across multiple industries",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Countries Served",
    description: "Global presence with local expertise",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2"
  },
  {
    icon: Award,
    value: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful implementations and deliveries",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  },
  {
    icon: Clock,
    value: 99,
    suffix: ".9%",
    label: "Uptime Guarantee",
    description: "Reliable service with maximum availability",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    icon: Zap,
    value: 60,
    suffix: "%",
    label: "Faster Implementation",
    description: "Reduced time to market with our solutions",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Data Security",
    description: "Enterprise-grade security and compliance",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2"
  },
  {
    icon: Target,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Round-the-clock technical support",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  }
];

export default function StatsShowcase({ data = {} }: { data?: Record<string, any> }) {
  const [sectionRef, hasAnimated] = useInView(0.3);

  // Use provided data or fallback to defaults
  const {
    title = "Our Impact in Numbers",
    subtitle = "Discover the scale and success of our solutions through these key metrics",
    stats: customStats = stats
  } = data;

  return (
    <section ref={sectionRef} className="stats-showcase-section">
      {/* Background Pattern removed */}
      
      <div className="stats-showcase-container">
        <div className={`stats-showcase-header ${hasAnimated ? 'fade-in-up' : ''}`}>
          <h2 className="stats-showcase-title">
            {title}
          </h2>
          <p className="stats-showcase-subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="stats-showcase-grid">
          {customStats.map((stat: any, index: number) => (
            <div
              key={`${stat.label || 'stat'}-${index}`}
              className={`stats-showcase-card ${hasAnimated ? 'fade-in-up' : ''}`}
              style={{ 
                transitionDelay: hasAnimated ? `${index * 0.1}s` : '0s',
                animationDelay: hasAnimated ? `${index * 0.1}s` : '0s'
              }}
            >
              <div className="stats-showcase-icon-container">
                {(() => {
                  const iconPool = [TrendingUp, Users, Globe, Award, Clock, Zap, Shield, Target];
                  const IconComponent = stat.icon || iconPool[index % iconPool.length] || Target;
                  const fg = stat.iconColor || ["#1A5276","#FF8C00","#27AE60","#8E44AD"][index % 4];
                  const bg = stat.iconBg || ["#EAF1F8","#FFF4E5","#E8F8F2","#F3EAF8"][index % 4];
                  return (
                    <div className="stats-showcase-icon" style={{ color: fg, backgroundColor: bg }}>
                      {React.createElement(IconComponent, { className: "w-8 h-8" })}
                    </div>
                  );
                })()}
              </div>
              <div className="stats-showcase-content">
                <div className="stats-showcase-value">
                  <AnimatedCounter
                    end={stat.value || 100}
                    suffix={stat.suffix || ""}
                    className="text-white"
                    start={hasAnimated}
                  />
                </div>
                <h3 className="stats-showcase-label">
                  {stat.label}
                </h3>
                <p className="stats-showcase-description">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Globe, Target, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/benefits.css";

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

interface BenefitItem {
  number: number;
  suffix: string;
  label: string;
  header: string;
  description: string;
  icon: string;
  palette: {
    iconBg: string;
    iconColor: string;
  };
}

interface BenefitsProps {
  data?: {
    title?: string;
    subtitle?: string;
    benefits?: BenefitItem[];
    ctaButton?: {
      text?: string;
      action?: string;
    };
  };
}

export default function Benefits({ data = {} }: BenefitsProps) {
  const [sectionRef, inView] = useInView(0.3);

  const {
    title = "Why Choose Finbyz",
    subtitle = "Proven results that speak for themselves",
    benefits = [
      { 
        number: 10, 
        suffix: "+", 
        label: "Years of Proven Experience",
        header: "Proven Track Record",
        description: "Decade of expertise in delivering cutting-edge solutions",
        icon: "Award",
        palette: { iconBg: "#1A5276", iconColor: "#fff" }
      },
      { 
        number: 200, 
        suffix: "%", 
        label: "Efficiency Gains with Our Solutions",
        header: "Maximum Efficiency",
        description: "Transform your operations with intelligent automation",
        icon: "TrendingUp",
        palette: { iconBg: "#FF8C00", iconColor: "#fff" }
      },
      { 
        number: 12, 
        suffix: "+", 
        label: "Countries Served",
        header: "Global Reach",
        description: "Serving clients across multiple continents worldwide",
        icon: "Globe",
        palette: { iconBg: "#27AE60", iconColor: "#fff" }
      },
      { 
        number: 100, 
        suffix: "+", 
        label: "Projects Delivered with Precision",
        header: "Quality Delivery",
        description: "Every project completed with exceptional precision and care",
        icon: "Target",
        palette: { iconBg: "#8E44AD", iconColor: "#fff" }
      }
    ],
    ctaButton = { text: "Let's Build That Efficiency →", action: "efficiency" }
  } = data;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return Award;
      case "TrendingUp":
        return TrendingUp;
      case "Globe":
        return Globe;
      case "Target":
        return Target;
      case "CheckCircle":
        return CheckCircle;
      case "Zap":
        return Zap;
      case "Shield":
        return Shield;
      case "Clock":
        return Clock;
      default:
        return Award;
    }
  };

  return (
    <section ref={sectionRef} className="benefits-section">
      <div className="benefits-container">
        <div className={`benefits-header ${inView ? 'benefits-fade-in-up' : 'benefits-fade-out'}`}>
          <h2 className="benefits-title">
            {title}
          </h2>
          <p className="benefits-subtitle">
            {subtitle}
          </p>
        </div>
        
        {/* Grid layout for 4 cards */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = getIconComponent(benefit.icon);
            
            return (
              <div 
                key={benefit.label}
                className={`benefits-card-wrapper ${inView ? 'benefits-fade-in-up' : 'benefits-fade-out'}`}
                style={{ 
                  transitionDelay: inView ? `${index * 0.2}s` : '0s',
                  animationDelay: inView ? `${index * 0.2}s` : '0s'
                }}
              >
                <Card className="benefits-card">
                  <CardContent className="benefits-card-content">
                    <div
                      className="benefits-icon-container"
                      style={{
                        background: benefit.palette?.iconBg || '#EAF1F8',
                      }}
                    >
                      <IconComponent className="benefits-icon" style={{ color: benefit.palette?.iconColor || '#1A5276' }} />
                    </div>
                    
                    {/* Header */}
                    <h3 className="benefits-card-header">
                      {benefit.header}
                    </h3>
                    
                    {/* Animated Counter */}
                    <AnimatedCounter
                      end={benefit.number}
                      suffix={benefit.suffix}
                      className="benefits-counter"
                      start={inView}
                    />
                    
                    {/* Description */}
                    <p className="benefits-card-description">
                      {benefit.description}
                    </p>
                    
                    {/* Label */}
                    <p className="benefits-card-label">
                      {benefit.label}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className={`benefits-cta ${inView ? 'benefits-fade-in-up' : 'benefits-fade-out'}`} style={{ transitionDelay: inView ? '0.8s' : '0s' }}>
          <Button 
            size="lg"
            className="benefits-cta-button"
          >
            {ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
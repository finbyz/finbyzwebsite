"use client";

import { Eye, Heart, CheckCircle, BarChart3 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/differentiators.css";

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

interface DifferentiatorItem {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
}

interface DifferentiatorsProps {
  data?: {
    title?: string;
    subtitle?: string;
    differentiators?: DifferentiatorItem[];
    quote?: {
      text?: string;
      highlight?: string;
      author?: string;
    };
  };
}

export default function Differentiators({ data = {} }: DifferentiatorsProps) {
  const [sectionRef, inView] = useInView(0.3);

  const {
    title = "Our Differentiators",
    subtitle = "What sets us apart in the technology landscape",
    differentiators = [
      {
        icon: "Eye",
        title: "Clarity Over Complexity",
        description: "We simplify tech jargon into action plans. No overengineering, just elegant problem-solving.",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        icon: "Heart",
        title: "Ownership with Empathy",
        description: "Your goals become our goals. We bring care into consulting.",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        icon: "CheckCircle",
        title: "Precision in Execution",
        description: "We sweat the details — ERP flows, automations, dashboards — done right the first time.",
        iconColor: "#16A085",
        iconBg: "#E6F7F4"
      },
      {
        icon: "BarChart3",
        title: "Adaptable Team Model",
        description: "Need a full-time developer or quick AI prototype? Our team scales as you grow.",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    quote = {
      text: "You bring the vision — we'll build the roadmap.",
      highlight: "we'll build the roadmap",
      author: "— The Finbyz Promise"
    }
  } = data;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Eye":
        return Eye;
      case "Heart":
        return Heart;
      case "CheckCircle":
        return CheckCircle;
      case "BarChart3":
        return BarChart3;
      default:
        return Eye;
    }
  };

  return (
    <section ref={sectionRef} className="differentiators-section">
      <div className="differentiators-container">
        <div className={`differentiators-header ${inView ? 'differentiators-fade-in-up' : 'differentiators-fade-out'}`}>
          <h2 className="differentiators-title">
            {title}
          </h2>
          <p className="differentiators-subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="differentiators-grid">
          {differentiators.map((item, index) => {
            const IconComponent = getIconComponent(item.icon);
            
            return (
              <div
                key={item.title}
                className={`differentiators-card-wrapper ${inView ? 'differentiators-fade-in-up' : 'differentiators-fade-out'}`}
                style={{ 
                  transitionDelay: inView ? `${index * 0.2}s` : '0s',
                  animationDelay: inView ? `${index * 0.2}s` : '0s'
                }}
              >
                <div className="differentiators-card">
                  <div
                    className="differentiators-icon-container"
                    style={{ background: item.iconBg }}
                  >
                    <IconComponent className="differentiators-icon" style={{ color: item.iconColor }} />
                  </div>
                  <div className="differentiators-content">
                    <h3 className="differentiators-card-title">
                      {item.title}
                    </h3>
                    <p className="differentiators-card-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Quote Section */}
        <div className={`differentiators-quote ${inView ? 'differentiators-fade-in-up' : 'differentiators-fade-out'}`} style={{ transitionDelay: inView ? '0.8s' : '0s' }}>
          <div className="differentiators-quote-container">
            <div className="differentiators-quote-content">
                             <div className="differentiators-quote-text">
                 "{(quote.text || "").split(quote.highlight || "").map((part, index) => 
                   index === 0 ? (
                     <span key={index}>{part}<span className="differentiators-quote-highlight">{quote.highlight}</span></span>
                   ) : (
                     <span key={index}>{part}</span>
                   )
                 )}"
               </div>
              <div className="differentiators-quote-author">
                {quote.author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


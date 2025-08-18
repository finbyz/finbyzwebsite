"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, CheckCircle, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import "@/styles/components/success-snapshots.css";

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

const palette = [
  { border: "#1A5276", badge: "#1A5276", badgeBg: "#EAF1F8", btn: "#1A5276" }, // Blue
  { border: "#FF8C00", badge: "#FF8C00", badgeBg: "#FFF4E5", btn: "#FF8C00" }, // Orange
  { border: "#8E44AD", badge: "#8E44AD", badgeBg: "#F3EAF8", btn: "#8E44AD" }, // Purple
];

const cases = [
  {
    title: "3x Lead Conversion",
    subtitle: "Sales Process Optimization",
    challenge: "Scattered sales follow-ups",
    result: "3x Lead Conversion with ERP-Linked AI Tasks",
    badge: "Success Story",
    icon: TrendingUp,
    palette: palette[0]
  },
  {
    title: "75% Time Reduction",
    subtitle: "Report Automation",
    challenge: "Manual report creation",
    result: "Auto-Reports Delivered in 1/4th Time via Workflow Automation",
    badge: "Success Story",
    icon: Clock,
    palette: palette[1]
  },
  {
    title: "40% Cost Savings",
    subtitle: "Process Automation",
    challenge: "Redundant manual processes",
    result: "40% Operational Cost Reduction through Intelligent Automation",
    badge: "Success Story",
    icon: CheckCircle,
    palette: palette[2]
  }
];

export default function SuccessSnapshots({ data = {} }: { data?: Record<string, any> }) {
  const [sectionRef, inView] = useInView(0.3);
  const { isOpen } = useMobileMenu();

  // Use provided data or fallback to defaults
  const {
    title = "Success Snapshots",
    subtitle = "Real challenges, measurable results",
    cases: customCases = cases
  } = data;

  return (
    <section ref={sectionRef} className="success-snapshots-section">
      <div className="success-snapshots-container">
        <div className={`success-snapshots-header ${inView ? 'fade-in-up' : 'fade-out'}`}>
          <h2 className="success-snapshots-title">
            {title}
          </h2>
          <p className="success-snapshots-subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="success-snapshots-grid">
          {customCases.map((c: any, i: number) => (
            <div
              key={c.title || i}
              className={`success-snapshots-card ${inView ? 'fade-in-up' : 'fade-out'}`}
              style={{ 
                transitionDelay: inView ? `${i * 0.2}s` : '0s',
                animationDelay: inView ? `${i * 0.2}s` : '0s'
              }}
            >
              <div
                className={`success-snapshots-card ${c.palette?.border === '#1A5276' ? 'border-color-blue' : c.palette?.border === '#FF8C00' ? 'border-color-orange' : 'border-color-purple'}`}
              >
                <div className="flex items-center mb-4 lg:mb-6">
                  <div className={`success-snapshots-badge ${c.palette?.badgeBg === '#EAF1F8' ? 'badge-bg-blue' : c.palette?.badgeBg === '#FFF4E5' ? 'badge-bg-orange' : 'badge-bg-purple'}`}>
                    {c.icon ? (
                      <div 
                        className={`success-snapshots-badge-icon ${c.palette?.badge === '#1A5276' ? 'badge-color-blue' : c.palette?.badge === '#FF8C00' ? 'badge-color-orange' : 'badge-color-purple'}`}
                      >
                        {c.icon}
                      </div>
                    ) : (
                      <div className="success-snapshots-badge-icon badge-color-blue">
                        <Target className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="success-snapshots-card-title">{c.title}</div>
                    <div className="success-snapshots-card-company">{c.subtitle}</div>
                  </div>
                </div>
                
                <div className="mb-3 lg:mb-4">
                  <span className="font-semibold text-[#FF8C00]">Challenge:</span>
                  <span className="text-gray-700 ml-1 text-sm lg:text-base">{c.challenge}</span>
                </div>
                
                <div className="success-snapshots-results">
                  <span className="success-snapshots-result-label">Result:</span>
                  <span className="success-snapshots-result-value">{c.result}</span>
                </div>
                
                <div className="mt-auto">
                  <span className={`success-snapshots-button ${c.palette?.btn === '#1A5276' ? 'btn-bg-blue' : c.palette?.btn === '#FF8C00' ? 'btn-bg-orange' : 'btn-bg-purple'}`}>
                    {c.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mb-8 transition-all duration-1000 ${
          inView 
            ? isOpen 
              ? 'animate-slide-in-left' 
              : 'animate-fade-in-up' 
            : isOpen 
              ? 'opacity-0 -translate-x-10' 
              : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: inView ? '0.6s' : '0s' }}>
          <Button
            size="lg"
            className="bg-[#1A5276] text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl hover:bg-[#154360] transition-all duration-300 transform hover:scale-105"
          >
            Read Full Case Studies
          </Button>
        </div>
        
        <div className={`flex flex-col sm:flex-row justify-center gap-4 lg:gap-8 text-xs lg:text-sm text-[#1A5276] transition-all duration-1000 ${
          inView 
            ? isOpen 
              ? 'animate-slide-in-left' 
              : 'animate-fade-in-up' 
            : isOpen 
              ? 'opacity-0 -translate-x-10' 
              : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: inView ? '0.8s' : '0s' }}>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block bg-[#1A5276]"></span>
            200+ Success Stories
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block bg-[#FF8C00]"></span>
            95% Success Rate
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block bg-[#8E44AD]"></span>
            Proven Results
          </span>
        </div>
      </div>
    </section>
  );
}
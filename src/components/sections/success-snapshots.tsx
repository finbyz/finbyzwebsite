"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

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

export default function SuccessSnapshots() {
  const [sectionRef, inView] = useInView(0.3);
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <section ref={sectionRef} className="py-16 bg-white w-full min-h-screen flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className={`text-center mb-10 transition-all duration-1000 ${
          inView 
            ? isMobileMenuOpen 
              ? 'animate-slide-in-left' 
              : 'animate-fade-in-up' 
            : isMobileMenuOpen 
              ? 'opacity-0 -translate-x-10' 
              : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1A5276]">
            Success Snapshots
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Real challenges, measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`transition-all duration-700 ${
                inView 
                  ? isMobileMenuOpen 
                    ? 'animate-slide-in-left' 
                    : 'animate-fade-in-up' 
                  : isMobileMenuOpen 
                    ? 'opacity-0 -translate-x-10' 
                    : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: inView ? `${i * 0.2}s` : '0s',
                animationDelay: inView ? `${i * 0.2}s` : '0s'
              }}
            >
              <div
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 lg:p-8 flex flex-col border-t-4 h-full transition-all duration-300 hover:scale-105 group"
                style={{ borderTopColor: c.palette.border }}
              >
                <div className="flex items-center mb-4 lg:mb-6">
                  <div
                    className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-2xl mr-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: c.palette.badgeBg }}
                  >
                    <c.icon className="w-6 h-6 lg:w-7 lg:h-7" style={{ color: c.palette.badge }} />
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl font-bold text-[#1A5276]">{c.title}</div>
                    <div className="text-sm lg:text-base text-gray-500">{c.subtitle}</div>
                  </div>
                </div>
                
                <div className="mb-3 lg:mb-4">
                  <span className="font-semibold text-[#FF8C00]">Challenge:</span>
                  <span className="text-gray-700 ml-1 text-sm lg:text-base">{c.challenge}</span>
                </div>
                
                <div className="mb-6 lg:mb-8 flex-1">
                  <span className="font-semibold" style={{ color: c.palette.border }}>Result:</span>
                  <span className="text-gray-700 ml-1 text-sm lg:text-base leading-relaxed">{c.result}</span>
                </div>
                
                <div className="mt-auto">
                  <span
                    className="inline-block px-4 py-2 rounded-full text-white text-xs lg:text-sm font-semibold shadow-sm transition-all duration-300 group-hover:shadow-md"
                    style={{ background: c.palette.btn }}
                  >
                    {c.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mb-8 transition-all duration-1000 ${
          inView 
            ? isMobileMenuOpen 
              ? 'animate-slide-in-left' 
              : 'animate-fade-in-up' 
            : isMobileMenuOpen 
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
            ? isMobileMenuOpen 
              ? 'animate-slide-in-left' 
              : 'animate-fade-in-up' 
            : isMobileMenuOpen 
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
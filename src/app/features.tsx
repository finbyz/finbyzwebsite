"use client";

import { Zap, Shield, Globe, Target, Clock, Users, TrendingUp, Award } from "lucide-react";
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

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized for speed and efficiency with modern technology stack and intelligent caching.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8",
    stats: "10x faster"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with encryption, compliance standards, and regular security audits.",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5",
    stats: "99.9% secure"
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description: "Built to scale with your business growth and changing requirements across multiple regions.",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2",
    stats: "50+ countries"
  },
  {
    icon: Target,
    title: "Precision Analytics",
    description: "Advanced analytics and insights powered by AI to drive better business decisions.",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8",
    stats: "Real-time data"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock monitoring and support to ensure your systems are always running smoothly.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8",
    stats: "99.9% uptime"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in delivering cutting-edge solutions.",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5",
    stats: "100+ experts"
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Regular updates and new features to keep you ahead of the competition.",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2",
    stats: "Monthly updates"
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Award-winning solutions with a track record of successful implementations worldwide.",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8",
    stats: "200+ projects"
  }
];

export default function Features() {
  const [sectionRef, inView] = useInView(0.3);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1A5276]">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the advanced capabilities that make our platform the choice for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: inView ? `${index * 0.1}s` : '0s',
                animationDelay: inView ? `${index * 0.1}s` : '0s'
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 lg:p-8 flex flex-col items-center text-center gap-4 lg:gap-6 transition-all duration-500 hover:scale-105 border border-gray-100 h-full group">
                <div
                  className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                  style={{ background: feature.iconBg }}
                >
                  <feature.icon className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: feature.iconColor }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold mb-3 text-[#1A5276] leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 text-[#1A5276] border border-blue-100">
                    {feature.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

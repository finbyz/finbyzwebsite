"use client";

import React from "react";
import { Code, Database, Cloud, Shield, Zap, Globe, Cpu, GitBranch, Monitor } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/technology-stack.css";

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

const technologies = [
  {
    category: "Frontend",
    icon: Code,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Modern, responsive web applications",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    category: "Backend",
    icon: Database,
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    description: "Scalable and robust server solutions",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "Cloud-native deployment and scaling",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2"
  },
  {
    category: "AI & ML",
    icon: Cpu,
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    description: "Intelligent automation and insights",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  },
  {
    category: "Security",
    icon: Shield,
    technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "Encryption"],
    description: "Enterprise-grade security protocols",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    category: "Performance",
    icon: Zap,
    technologies: ["Redis", "CDN", "Caching", "Optimization"],
    description: "Lightning-fast user experiences",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    category: "Integration",
    icon: GitBranch,
    technologies: ["REST APIs", "GraphQL", "Webhooks", "Microservices"],
    description: "Seamless system integration",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2"
  },
  {
    category: "Global",
    icon: Globe,
    technologies: ["Multi-region", "CDN", "Localization", "Compliance"],
    description: "Worldwide deployment and compliance",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  }
];

export default function TechnologyStack({ data = {} }: { data?: Record<string, any> }) {
  const [sectionRef, inView] = useInView(0.3);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Set hasAnimated to true when element comes into view for the first time
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Use provided data or fallback to defaults
  const {
    title = "Technology Stack",
    subtitle = "Cutting-edge technologies and tools that power our innovative solutions",
    technologies: customTechnologies = technologies
  } = data;

  // Map string icon names from JSON to lucide-react components
  const iconMap: Record<string, React.ElementType> = {
    Code,
    Database,
    Cloud,
    Shield,
    Zap,
    Globe,
    Cpu,
    GitBranch,
    Monitor,
  };

  const defaultIconPool: React.ElementType[] = [
    Code,
    Database,
    Cloud,
    Cpu,
    Shield,
    Zap,
    GitBranch,
    Globe,
  ];

  const fallbackFg: string[] = ["#1A5276", "#FF8C00", "#27AE60", "#8E44AD"]; // blue, orange, green, purple
  const fallbackBg: string[] = ["#EAF1F8", "#FFF4E5", "#E8F8F2", "#F3EAF8"];

  return (
    <section ref={sectionRef} className="technology-stack-section">
      
      <div className="technology-stack-container">
        <div className={`technology-stack-header ${hasAnimated ? 'fade-in-up' : ''}`}>
          <h2 className="technology-stack-title">
            {title}
          </h2>
          <p className="technology-stack-subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="technology-stack-grid">
          {customTechnologies.map((tech: any, index: number) => (
            <div
              key={tech.category || tech.name || index}
              className={`technology-stack-card ${hasAnimated ? 'fade-in-up' : ''}`}
              style={{ 
                transitionDelay: hasAnimated ? `${index * 0.1}s` : '0s',
                animationDelay: hasAnimated ? `${index * 0.1}s` : '0s'
              }}
            >
              <div className="technology-stack-icon-container">
                {(() => {
                  let IconComponent: React.ElementType | undefined;
                  if (typeof tech.icon === 'string') {
                    IconComponent = iconMap[tech.icon];
                  } else if (tech.icon) {
                    IconComponent = tech.icon as React.ElementType;
                  }
                  if (!IconComponent) {
                    IconComponent = defaultIconPool[index % defaultIconPool.length] || Monitor;
                  }
                  const fg = tech.color || fallbackFg[index % fallbackFg.length];
                  const bg = tech.bgColor || fallbackBg[index % fallbackBg.length];
                  return (
                    <div className="technology-stack-icon" style={{ color: fg, backgroundColor: bg }}>
                      {React.createElement(IconComponent, { className: "w-8 h-8" })}
                    </div>
                  );
                })()}
              </div>
              <div className="flex-1">
                <h3 className="technology-stack-name">
                  {tech.category || tech.name}
                </h3>
                <p className="technology-stack-description">
                  {tech.description}
                </p>
                {tech.technologies && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {tech.technologies.map((technology: string, techIndex: number) => (
                      <span
                        key={technology}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full transition-all duration-300 hover:bg-[#1A5276] hover:text-white"
                        style={{ 
                          transitionDelay: inView ? `${(index * 0.1) + (techIndex * 0.05)}s` : '0s'
                        }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

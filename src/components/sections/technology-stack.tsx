 
import React from "react";
import { Code, Database, Cloud, Shield, Zap, Globe, Cpu, GitBranch, Monitor } from "lucide-react";
 
import "@/styles/components/technology-stack.css";

// Server-side render: no IntersectionObserver hooks

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

  // Use provided data or fallback to defaults
  const {
    component_type = "Card",
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
    <section className="technology-stack-section">
      
      <div className="technology-stack-container">
        <div className={`technology-stack-header`}>
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
              className={`technology-stack-card`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                animationDelay: `${index * 0.1}s`
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
                      {(IconComponent as any) ? <IconComponent className="w-8 h-8" /> : null}
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
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
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

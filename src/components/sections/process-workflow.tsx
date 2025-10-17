"use client";

import { Search, Lightbulb, Code, TestTube, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/process-workflow.css";

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

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  duration: string;
  iconColor: string;
  iconBg: string;
}

interface ProcessStats {
  steps: string;
  weeks: string;
  transparency: string;
  support: string;
}

interface ProcessWorkflowProps {
  data?: {
    component_type?: "Timeline";
    title?: string;
    subtitle?: string;
    processSteps?: ProcessStep[];
    stats?: ProcessStats;
  };
}

export default function ProcessWorkflow({ data = {} }: ProcessWorkflowProps) {
  const [sectionRef, inView] = useInView(0.1);

  const {
    component_type = "Timeline",
    title = "Our Development Process",
    subtitle = "A proven methodology that ensures quality, transparency, and successful project delivery",
    processSteps = [
      {
        step: "01",
        title: "Discovery & Analysis",
        description: "Understanding your business needs, goals, and technical requirements through comprehensive analysis",
        icon: "Search",
        details: [
          "Business Requirements Gathering",
          "Technical Architecture Planning",
          "Market Research & Analysis",
          "Stakeholder Interviews"
        ],
        duration: "1-2 weeks",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description: "Creating intuitive user experiences and technical designs that align with your vision",
        icon: "Lightbulb",
        details: [
          "UI/UX Design Creation",
          "Wireframing & Prototyping",
          "Technical Architecture Design",
          "User Journey Mapping"
        ],
        duration: "2-3 weeks",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        step: "03",
        title: "Development & Coding",
        description: "Building robust, scalable solutions using cutting-edge technologies and best practices",
        icon: "Code",
        details: [
          "Frontend Development",
          "Backend API Development",
          "Database Design & Implementation",
          "Third-party Integrations"
        ],
        duration: "4-8 weeks",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        step: "04",
        title: "Testing & Quality Assurance",
        description: "Rigorous testing to ensure flawless performance, security, and user experience",
        icon: "TestTube",
        details: [
          "Unit & Integration Testing",
          "Performance Testing",
          "Security Testing",
          "User Acceptance Testing"
        ],
        duration: "1-2 weeks",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      },
      {
        step: "05",
        title: "Deployment & Launch",
        description: "Seamless deployment to production with monitoring and support for successful launch",
        icon: "Rocket",
        details: [
          "Production Deployment",
          "Performance Monitoring",
          "Security Implementation",
          "Launch Support"
        ],
        duration: "1 week",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        step: "06",
        title: "Maintenance & Support",
        description: "Ongoing support, updates, and maintenance to ensure optimal performance",
        icon: "CheckCircle",
        details: [
          "24/7 Technical Support",
          "Regular Updates & Maintenance",
          "Performance Optimization",
          "Security Updates"
        ],
        duration: "Ongoing",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      }
    ],
    stats = {
      steps: "6",
      weeks: "8-12",
      transparency: "100%",
      support: "24/7"
    }
  } = data;

  // Ensure processSteps is always an array and has fallback values
  const safeProcessSteps = processSteps || [];
  const safeStats = stats || { steps: "0", weeks: "0", transparency: "0%", support: "0" };

  // Ensure distinct icons across steps using available pool
  const stepIconPool = ["Search", "Lightbulb", "Code", "TestTube", "Rocket", "CheckCircle"];
  const normalizeDistinct = (items: ProcessStep[]) => {
    if (!Array.isArray(items)) return [];
    const used = new Set<string>();
    return items.map((item) => {
      let name = item.icon;
      if (used.has(name) || !stepIconPool.includes(name)) {
        name = stepIconPool.find((n) => !used.has(n)) || name;
      }
      used.add(name);
      return { ...item, icon: name } as ProcessStep;
    });
  };
  const distinctSteps = normalizeDistinct(safeProcessSteps);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return Search;
      case "Lightbulb":
        return Lightbulb;
      case "Code":
        return Code;
      case "TestTube":
        return TestTube;
      case "Rocket":
        return Rocket;
      case "CheckCircle":
        return CheckCircle;
      default:
        return Search;
    }
  };

  return (
    <section ref={sectionRef} className="process-workflow-section">
      {/* Background Pattern */}


      <div className="container-custom  process-workflow-container">
        <div className={`process-workflow-header ${inView ? 'process-workflow-fade-in-up' : 'process-workflow-fade-out'}`}>
          <h2 className="process-workflow-title">
            {title}
          </h2>
          <p className="process-workflow-subtitle">
            {subtitle}
          </p>
        </div>

        <div className="process-workflow-grid">
          {distinctSteps.map((step, index) => {
            const IconComponent = getIconComponent(step.icon);

            return (
              <div
                key={`${step.step}-${step.title}-${index}`}
                className={`process-workflow-card-wrapper ${inView ? 'process-workflow-fade-in-up' : 'process-workflow-fade-out'}`}
                style={{
                  transitionDelay: inView ? `${index * 0.15}s` : '0s',
                  animationDelay: inView ? `${index * 0.15}s` : '0s'
                }}
              >
                <div className="process-workflow-card">
                  <div className="process-workflow-card-header">
                    <div className="process-workflow-icon-container">
                      <div
                        className="process-workflow-icon-wrapper"
                        style={{ background: step.iconBg }}
                      >
                        <IconComponent className="process-workflow-icon" style={{ color: "white" }} />
                      </div>
                      <div className="process-workflow-step-badge">
                        <span className="process-workflow-step-number">{step.step}</span>
                      </div>
                    </div>
                    <div className="process-workflow-card-title-section">
                      <h3 className="process-workflow-card-title">
                        {step.title}
                      </h3>
                      <p className="process-workflow-duration">{step.duration}</p>
                    </div>
                  </div>

                  <div className="process-workflow-card-content">
                    <p className="process-workflow-description">
                      {step.description}
                    </p>

                    <div className="process-workflow-details">
                      <h4 className="process-workflow-details-title">Key Activities:</h4>
                      <div className="process-workflow-details-list">
                        {(step.details || []).map((detail, detailIndex) => (
                          <div key={detailIndex} className="process-workflow-detail-item">
                            <div className="process-workflow-detail-bullet"></div>
                            <span className="process-workflow-detail-text">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < safeProcessSteps.length - 1 && (
                    <div className="process-workflow-arrow">
                      <ArrowRight className="process-workflow-arrow-icon" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Stats */}
        <div className={`process-workflow-stats ${inView ? 'process-workflow-fade-in-up' : 'process-workflow-fade-out'}`}>
          <div className="process-workflow-stat">
            <div className="process-workflow-stat-number">{safeStats.steps}</div>
            <div className="process-workflow-stat-label">Process Steps</div>
          </div>
          <div className="process-workflow-stat">
            <div className="process-workflow-stat-number">{safeStats.weeks}</div>
            <div className="process-workflow-stat-label">Weeks Average</div>
          </div>
          <div className="process-workflow-stat">
            <div className="process-workflow-stat-number">{safeStats.transparency}</div>
            <div className="process-workflow-stat-label">Transparency</div>
          </div>
          <div className="process-workflow-stat">
            <div className="process-workflow-stat-number">{safeStats.support}</div>
            <div className="process-workflow-stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

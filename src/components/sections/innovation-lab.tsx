"use client";

import { Lightbulb, Zap, Brain, Rocket, TestTube, Target, TrendingUp, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/innovation-lab.css";

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

interface InnovationProject {
  title: string;
  description: string;
  status: string;
  progress: number;
  team: string;
  timeline: string;
  technologies: string[];
  impact: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface ResearchArea {
  area: string;
  focus: string;
  publications: number;
  patents: number;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface InnovationStats {
  papers: string;
  patents: string;
  projects: string;
  researchers: string;
}

interface InnovationLabProps {
  data?: {
    title?: string;
    subtitle?: string;
    innovationProjects?: InnovationProject[];
    researchAreas?: ResearchArea[];
    innovationStats?: InnovationStats;
  };
}

export default function InnovationLab({ data = {} }: InnovationLabProps) {
  const [sectionRef, inView] = useInView(0.3);

  const {
    title = "Innovation Lab",
    subtitle = "Pushing the boundaries of technology through cutting-edge research and development",
    innovationProjects = [
      {
        title: "AI-Powered Analytics Platform",
        description: "Advanced machine learning algorithms for predictive business insights",
        status: "In Development",
        progress: 75,
        team: "8 researchers",
        timeline: "6 months",
        technologies: ["TensorFlow", "Python", "React", "PostgreSQL"],
        impact: "Expected 300% improvement in data analysis speed",
        icon: "Brain",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        title: "Quantum Computing Integration",
        description: "Exploring quantum algorithms for optimization problems",
        status: "Research Phase",
        progress: 30,
        team: "5 scientists",
        timeline: "12 months",
        technologies: ["Qiskit", "Python", "Quantum Algorithms"],
        impact: "Potential 1000x speedup for complex calculations",
        icon: "Zap",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        title: "Blockchain Supply Chain",
        description: "Transparent and secure supply chain management system",
        status: "Prototype Ready",
        progress: 90,
        team: "6 developers",
        timeline: "4 months",
        technologies: ["Ethereum", "Solidity", "React", "Node.js"],
        impact: "100% transparency in supply chain tracking",
        icon: "Target",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        title: "IoT Smart City Platform",
        description: "Comprehensive IoT solution for smart city infrastructure",
        status: "Testing Phase",
        progress: 85,
        team: "10 engineers",
        timeline: "8 months",
        technologies: ["MQTT", "Kubernetes", "React", "MongoDB"],
        impact: "Real-time monitoring of city infrastructure",
        icon: "Eye",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      },
      {
        title: "AR/VR Development Tools",
        description: "Next-generation tools for immersive application development",
        status: "Concept Phase",
        progress: 20,
        team: "4 designers",
        timeline: "18 months",
        technologies: ["Unity", "Unreal Engine", "WebXR", "Three.js"],
        impact: "Revolutionary AR/VR development experience",
        icon: "Rocket",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        title: "Edge Computing Framework",
        description: "Distributed computing framework for edge devices",
        status: "Development Phase",
        progress: 60,
        team: "7 developers",
        timeline: "10 months",
        technologies: ["Docker", "Kubernetes", "Go", "Rust"],
        impact: "50% reduction in latency for edge applications",
        icon: "TestTube",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      }
    ],
    researchAreas = [
      {
        area: "Artificial Intelligence",
        focus: "Machine Learning & Deep Learning",
        publications: 12,
        patents: 3,
        icon: "Brain",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        area: "Quantum Computing",
        focus: "Quantum Algorithms & Cryptography",
        publications: 8,
        patents: 2,
        icon: "Zap",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      },
      {
        area: "Blockchain Technology",
        focus: "Distributed Systems & Smart Contracts",
        publications: 15,
        patents: 5,
        icon: "Target",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        area: "Internet of Things",
        focus: "Sensor Networks & Edge Computing",
        publications: 20,
        patents: 8,
        icon: "Eye",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      }
    ],
    innovationStats = {
      papers: "25+",
      patents: "18",
      projects: "6",
      researchers: "35+"
    }
  } = data;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return Lightbulb;
      case "Zap":
        return Zap;
      case "Brain":
        return Brain;
      case "Rocket":
        return Rocket;
      case "TestTube":
        return TestTube;
      case "Target":
        return Target;
      case "TrendingUp":
        return TrendingUp;
      case "Eye":
        return Eye;
      default:
        return Lightbulb;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'innovation-lab-status-development';
      case 'Research Phase':
        return 'innovation-lab-status-research';
      case 'Prototype Ready':
        return 'innovation-lab-status-prototype';
      case 'Testing Phase':
        return 'innovation-lab-status-testing';
      default:
        return 'innovation-lab-status-concept';
    }
  };

  return (
    <section ref={sectionRef} className="innovation-lab-section">
      {/* Background Pattern */}
      <div className="innovation-lab-background">
        <div className="innovation-lab-pattern-1"></div>
        <div className="innovation-lab-pattern-2"></div>
      </div>
      
      <div className="innovation-lab-container">
        <div className={`innovation-lab-header ${inView ? 'innovation-lab-fade-in-up' : 'innovation-lab-fade-out'}`}>
          <h2 className="innovation-lab-title">
            {title}
          </h2>
          <p className="innovation-lab-subtitle">
            {subtitle}
          </p>
        </div>
        
        {/* Innovation Projects */}
        <div className="innovation-lab-projects">
          <h3 className="innovation-lab-projects-title">Active Innovation Projects</h3>
          <div className="innovation-lab-projects-grid">
            {innovationProjects.map((project, index) => {
              const IconComponent = getIconComponent(project.icon);
              
              return (
                <div
                  key={project.title}
                  className={`innovation-lab-project-wrapper ${inView ? 'innovation-lab-fade-in-up' : 'innovation-lab-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${index * 0.15}s` : '0s',
                    animationDelay: inView ? `${index * 0.15}s` : '0s'
                  }}
                >
                  <div className="innovation-lab-project-card">
                    <div className="innovation-lab-project-header">
                      <div
                        className="innovation-lab-project-icon-container"
                        style={{ background: project.iconBg }}
                      >
                        <IconComponent className="innovation-lab-project-icon" style={{ color: project.iconColor }} />
                      </div>
                      <div className="innovation-lab-project-title-section">
                        <span className={`innovation-lab-project-status ${getStatusClass(project.status)}`}>
                          {project.status}
                        </span>
                        <h3 className="innovation-lab-project-title">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="innovation-lab-project-content">
                      <p className="innovation-lab-project-description">
                        {project.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="innovation-lab-project-progress">
                        <div className="innovation-lab-project-progress-header">
                          <span className="innovation-lab-project-progress-label">Progress</span>
                          <span className="innovation-lab-project-progress-value">{project.progress}%</span>
                        </div>
                        <div className="innovation-lab-project-progress-bar">
                          <div 
                            className="innovation-lab-project-progress-fill"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="innovation-lab-project-details">
                        <div className="innovation-lab-project-detail-item">
                          <span className="innovation-lab-project-detail-label">Team:</span>
                          <span className="innovation-lab-project-detail-value">{project.team}</span>
                        </div>
                        <div className="innovation-lab-project-detail-item">
                          <span className="innovation-lab-project-detail-label">Timeline:</span>
                          <span className="innovation-lab-project-detail-value">{project.timeline}</span>
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="innovation-lab-project-technologies">
                        <h4 className="innovation-lab-project-technologies-title">Technologies:</h4>
                        <div className="innovation-lab-project-technologies-list">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="innovation-lab-project-technology-tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Impact */}
                      <div className="innovation-lab-project-impact">
                        <p className="innovation-lab-project-impact-title">Expected Impact:</p>
                        <p className="innovation-lab-project-impact-description">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Research Areas */}
        <div className={`innovation-lab-research ${inView ? 'innovation-lab-fade-in-up' : 'innovation-lab-fade-out'}`}>
          <h3 className="innovation-lab-research-title">Research Areas</h3>
          <div className="innovation-lab-research-grid">
            {researchAreas.map((area, index) => {
              const IconComponent = getIconComponent(area.icon);
              
              return (
                <div
                  key={area.area}
                  className={`innovation-lab-research-area-wrapper ${inView ? 'innovation-lab-fade-in-up' : 'innovation-lab-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${(index + 6) * 0.1}s` : '0s',
                    animationDelay: inView ? `${(index + 6) * 0.1}s` : '0s'
                  }}
                >
                  <div className="innovation-lab-research-area-card">
                    <div
                      className="innovation-lab-research-area-icon-container"
                      style={{ background: area.iconBg }}
                    >
                      <IconComponent className="innovation-lab-research-area-icon" style={{ color: area.iconColor }} />
                    </div>
                    <h4 className="innovation-lab-research-area-name">{area.area}</h4>
                    <p className="innovation-lab-research-area-focus">{area.focus}</p>
                    <div className="innovation-lab-research-area-stats">
                      <div className="innovation-lab-research-area-stat-item">
                        <span className="innovation-lab-research-area-stat-label">Publications:</span>
                        <span className="innovation-lab-research-area-stat-value">{area.publications}</span>
                      </div>
                      <div className="innovation-lab-research-area-stat-item">
                        <span className="innovation-lab-research-area-stat-label">Patents:</span>
                        <span className="innovation-lab-research-area-stat-value">{area.patents}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Innovation Stats */}
        <div className={`innovation-lab-stats ${inView ? 'innovation-lab-fade-in-up' : 'innovation-lab-fade-out'}`}>
          <div className="innovation-lab-stat">
            <div className="innovation-lab-stat-value">{innovationStats.papers}</div>
            <div className="innovation-lab-stat-label">Research Papers</div>
          </div>
          <div className="innovation-lab-stat">
            <div className="innovation-lab-stat-value">{innovationStats.patents}</div>
            <div className="innovation-lab-stat-label">Patents Filed</div>
          </div>
          <div className="innovation-lab-stat">
            <div className="innovation-lab-stat-value">{innovationStats.projects}</div>
            <div className="innovation-lab-stat-label">Active Projects</div>
          </div>
          <div className="innovation-lab-stat">
            <div className="innovation-lab-stat-value">{innovationStats.researchers}</div>
            <div className="innovation-lab-stat-label">Researchers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

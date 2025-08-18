"use client";

import { Award, Star, Trophy, Medal, FileText, Badge, CheckCircle, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "@/styles/components/awards-recognition.css";

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

interface Award {
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface Certification {
  name: string;
  level: string;
  year: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

interface RecognitionStats {
  awards: string;
  certifications: string;
  partnerships: string;
  years: string;
}

interface AwardsRecognitionProps {
  data?: {
    title?: string;
    subtitle?: string;
    awards?: Award[];
    certifications?: Certification[];
    recognitionStats?: RecognitionStats;
  };
}

export default function AwardsRecognition({ data = {} }: AwardsRecognitionProps) {
  const [sectionRef, inView] = useInView(0.3);

  const {
    title = "Awards & Recognition",
    subtitle = "Industry recognition and certifications that validate our expertise and commitment to excellence",
    awards = [
      {
        title: "Best Software Development Company 2024",
        organization: "Tech Excellence Awards",
        year: "2024",
        category: "Excellence",
        description: "Recognized for outstanding innovation and quality in software development",
        icon: "Trophy",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        title: "ISO 27001 Information Security",
        organization: "International Organization for Standardization",
        year: "2023",
        category: "Certification",
        description: "Certified for information security management systems",
        icon: "Certificate",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        title: "Top 100 Digital Agencies",
        organization: "Clutch.co",
        year: "2023",
        category: "Recognition",
        description: "Ranked among the top digital agencies worldwide",
        icon: "Badge",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        title: "AWS Advanced Consulting Partner",
        organization: "Amazon Web Services",
        year: "2023",
        category: "Partnership",
        description: "Advanced tier partnership for cloud solutions expertise",
        icon: "Star",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      },
      {
        title: "Microsoft Gold Partner",
        organization: "Microsoft",
        year: "2023",
        category: "Partnership",
        description: "Gold level partnership for Microsoft technologies",
        icon: "Medal",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        title: "Google Cloud Partner",
        organization: "Google Cloud",
        year: "2023",
        category: "Partnership",
        description: "Official partner for Google Cloud Platform services",
        icon: "Award",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      }
    ],
    certifications = [
      {
        name: "AWS Solutions Architect",
        level: "Professional",
        year: "2024",
        icon: "CheckCircle",
        iconColor: "#27AE60",
        iconBg: "#E8F8F2"
      },
      {
        name: "Microsoft Azure Developer",
        level: "Associate",
        year: "2024",
        icon: "CheckCircle",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        name: "Google Cloud Engineer",
        level: "Professional",
        year: "2023",
        icon: "CheckCircle",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        name: "Kubernetes Administrator",
        level: "Certified",
        year: "2023",
        icon: "CheckCircle",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    recognitionStats = {
      awards: "15+",
      certifications: "25+",
      partnerships: "10+",
      years: "5+"
    }
  } = data;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return Award;
      case "Star":
        return Star;
      case "Trophy":
        return Trophy;
      case "Medal":
        return Medal;
      case "Certificate":
        return FileText;
      case "Badge":
        return Badge;
      case "CheckCircle":
        return CheckCircle;
      case "TrendingUp":
        return TrendingUp;
      default:
        return Award;
    }
  };

  return (
    <section ref={sectionRef} className="awards-recognition-section">
      {/* Background Pattern */}
      <div className="awards-recognition-background">
        <div className="awards-recognition-pattern-1"></div>
        <div className="awards-recognition-pattern-2"></div>
      </div>
      
      <div className="awards-recognition-container">
        <div className={`awards-recognition-header ${inView ? 'awards-recognition-fade-in-up' : 'awards-recognition-fade-out'}`}>
          <h2 className="awards-recognition-title">
            {title}
          </h2>
          <p className="awards-recognition-subtitle">
            {subtitle}
          </p>
        </div>
        
        {/* Awards Grid */}
        <div className="awards-recognition-awards">
          <div className="awards-recognition-awards-grid">
            {awards.map((award, index) => {
              const IconComponent = getIconComponent(award.icon);
              
              return (
                <div
                  key={award.title}
                  className={`awards-recognition-award-wrapper ${inView ? 'awards-recognition-fade-in-up' : 'awards-recognition-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${index * 0.15}s` : '0s',
                    animationDelay: inView ? `${index * 0.15}s` : '0s'
                  }}
                >
                  <div className="awards-recognition-award-card">
                    <div className="awards-recognition-award-header">
                      <div
                        className="awards-recognition-award-icon-container"
                        style={{ background: award.iconBg }}
                      >
                        <IconComponent className="awards-recognition-award-icon" style={{ color: award.iconColor }} />
                      </div>
                      <div className="awards-recognition-award-title-section">
                        <span className="awards-recognition-award-category">
                          {award.category}
                        </span>
                        <h3 className="awards-recognition-award-title">
                          {award.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="awards-recognition-award-content">
                      <p className="awards-recognition-award-description">
                        {award.description}
                      </p>
                      
                      <div className="awards-recognition-award-footer">
                        <span className="awards-recognition-award-organization">{award.organization}</span>
                        <span className="awards-recognition-award-year">{award.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className={`awards-recognition-certifications ${inView ? 'awards-recognition-fade-in-up' : 'awards-recognition-fade-out'}`}>
          <h3 className="awards-recognition-certifications-title">Professional Certifications</h3>
          <div className="awards-recognition-certifications-grid">
            {certifications.map((cert, index) => {
              const IconComponent = getIconComponent(cert.icon);
              
              return (
                <div
                  key={cert.name}
                  className={`awards-recognition-certification-wrapper ${inView ? 'awards-recognition-fade-in-up' : 'awards-recognition-fade-out'}`}
                  style={{ 
                    transitionDelay: inView ? `${(index + 6) * 0.1}s` : '0s',
                    animationDelay: inView ? `${(index + 6) * 0.1}s` : '0s'
                  }}
                >
                  <div className="awards-recognition-certification-card">
                    <div
                      className="awards-recognition-certification-icon-container"
                      style={{ background: cert.iconBg }}
                    >
                      <IconComponent className="awards-recognition-certification-icon" style={{ color: cert.iconColor }} />
                    </div>
                    <h4 className="awards-recognition-certification-name">{cert.name}</h4>
                    <p className="awards-recognition-certification-level">{cert.level}</p>
                    <p className="awards-recognition-certification-year">{cert.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Recognition Stats */}
        <div className={`awards-recognition-stats ${inView ? 'awards-recognition-fade-in-up' : 'awards-recognition-fade-out'}`}>
          <div className="awards-recognition-stat">
            <div className="awards-recognition-stat-value">{recognitionStats.awards}</div>
            <div className="awards-recognition-stat-label">Awards Won</div>
          </div>
          <div className="awards-recognition-stat">
            <div className="awards-recognition-stat-value">{recognitionStats.certifications}</div>
            <div className="awards-recognition-stat-label">Certifications</div>
          </div>
          <div className="awards-recognition-stat">
            <div className="awards-recognition-stat-value">{recognitionStats.partnerships}</div>
            <div className="awards-recognition-stat-label">Partnerships</div>
          </div>
          <div className="awards-recognition-stat">
            <div className="awards-recognition-stat-value">{recognitionStats.years}</div>
            <div className="awards-recognition-stat-label">Years Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Globe, Target, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/components/benefits.css";
import "@/styles/components/unified-container.css";

// Server-side render: static display without IntersectionObserver/counter hooks

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
    component_type?: "Card";
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

  const {
    component_type = "Card",
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
        suffix: "+", 
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

  // Ensure distinct icons across benefits (fallback rotates through pool)
  const benefitIconPool = [
    "Award",
    "TrendingUp",
    "Globe",
    "Target",
    "CheckCircle",
    "Zap",
    "Shield",
    "Clock",
  ];
  const normalizeDistinct = (items: BenefitItem[]) => {
    const used = new Set<string>();
    return items.map((item) => {
      let name = item.icon;
      if (used.has(name) || !benefitIconPool.includes(name)) {
        name = benefitIconPool.find((n) => !used.has(n)) || name;
      }
      used.add(name);
      return { ...item, icon: name } as BenefitItem;
    });
  };
  const distinctBenefits = normalizeDistinct(benefits);

  const getDelayClass = (index: number) => `benefits-delay-${index}`;
  const getVariantClass = (index: number) => `benefits-icon-container--v${index % 4}`;

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

  const getIconContainerClass = (iconName: string) => {
    const key = (iconName || '').toLowerCase();
    switch (key) {
      case 'award':
        return 'benefits-icon-container--award';
      case 'trendingup':
        return 'benefits-icon-container--trendingup';
      case 'globe':
        return 'benefits-icon-container--globe';
      case 'target':
        return 'benefits-icon-container--target';
      default:
        return 'benefits-icon-container--default';
    }
  };

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className={`benefits-header`}>
          <h2 className="benefits-title">
            {title}
          </h2>
          <p className="benefits-subtitle">
            {subtitle}
          </p>
        </div>
        
        {/* Grid layout for 4 cards */}
        <div className="benefits-grid">
          {distinctBenefits.map((benefit, index) => {
            const IconComponent = getIconComponent(benefit.icon);
            
            return (
              <div 
                key={benefit.label}
                className={`benefits-card-wrapper ${getDelayClass(index)}`}
              >
                <Card className="benefits-card">
                  <CardContent className="benefits-card-content">
                    <div
                      className={`benefits-icon-container ${getIconContainerClass(benefit.icon)} ${getVariantClass(index)}`}
                    >
                      <IconComponent className={`benefits-icon benefits-icon-color--light`} />
                    </div>
                    
                    {/* Header */}
                    <h3 className="benefits-card-header">
                      {benefit.header}
                    </h3>
                    
                    {/* Animated Counter */}
                    <div className="benefits-counter">
                      {benefit.number}{benefit.suffix}
                    </div>
                    {/* Label */}
                    <p className="benefits-card-label">
                      {benefit.label}
                    </p>
                    
                    {/* Description */}
                    <p className="benefits-card-description">
                      {benefit.description}
                    </p>
                   
                    
                    
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className={`benefits-cta benefits-delay-4`}>
          <Button 
            size="lg"
            className="benefits-cta-button"
          >
            {ctaButton?.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
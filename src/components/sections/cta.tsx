 
import { Button } from "@/components/ui/button";
import { CalendarCheck, FileText, Rocket, Calendar } from "lucide-react";
import "@/styles/components/cta.css";

interface CTAProps {
  data?: {
    component_type?: "Text";
    subheading?: {
      text?: string;
      icon?: string;
    };
    title?: string;
    description?: string;
    primaryButton?: {
      text?: string;
      icon?: string;
      action?: ()=>void;
    };
    secondaryButton?: {
      text?: string;
      icon?: string;
      action?: ()=>void;
    };
    trustIndicator?: {
      text?: string;
      icon?: string;
    };
  };
}

export default function CTA({ data = {} }: CTAProps) {
  const {
    component_type = "Text",
    subheading = { text: "Talk to our Experts", icon: "CalendarCheck" },
    title = "Ready to Scale with Smart Tech? Let's Talk.",
    description = "Transform your business processes with AI-powered automation and expert implementation.",
    primaryButton = { text: "Book Demo", icon: "CalendarCheck", action: "demo" },
    secondaryButton = { text: "Get Proposal", icon: "FileText", action: "proposal" },
    trustIndicator = { text: "Trusted by 100+ businesses", icon: "CalendarCheck" }
  } = data;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "CalendarCheck":
        return CalendarCheck;
      case "FileText":
        return FileText;
      case "Rocket":
        return Rocket;
      case "Calendar":
        return Calendar;
      default:
        return CalendarCheck;
    }
  };

  const SubheadingIcon = getIconComponent(subheading.icon || "CalendarCheck");
  const PrimaryIcon = getIconComponent(primaryButton.icon || "CalendarCheck");
  const SecondaryIcon = getIconComponent(secondaryButton.icon || "FileText");
  const TrustIcon = getIconComponent(trustIndicator.icon || "CalendarCheck");

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          {/* Subheading */}
          <div className="cta-subheading">
            <SubheadingIcon className="cta-subheading-icon" />
            <span>{subheading.text}</span>
          </div>
          
          <h2 className="cta-title">
            {title.split('Smart Tech').map((part, index) => 
              index === 0 ? (
                <span key={index}>{part}<span className="cta-title-highlight">Smart Tech</span></span>
              ) : (
                <span key={index}>{part}</span>
              )
            )}
          </h2>
          
          <p className="cta-description">
            {description}
          </p>
          
          <div className="cta-button-group">
            <Button 
              size="lg"
              className="cta-primary-button"
              aria-label={`${primaryButton.text} with our experts`}
              onClick={primaryButton.action}
            >
              <PrimaryIcon className="cta-button-icon" aria-hidden="true" />
              {primaryButton.text}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="cta-secondary-button"
              aria-label={`${secondaryButton.text}`}
              onClick={secondaryButton.action}
            >
              <SecondaryIcon className="cta-button-icon" aria-hidden="true" />
              {secondaryButton.text}
            </Button>
          </div>
          
          {/* Trust Indicator */}
          <div className="cta-trust-indicator">
            <span className="cta-trust-text">
              <TrustIcon className="cta-trust-icon" />
              {trustIndicator.text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


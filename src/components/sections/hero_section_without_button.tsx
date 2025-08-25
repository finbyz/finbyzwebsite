 
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroSimpleData from "@/data/hero-simple.json";
import { renderTemplateObject } from "@/utils/templateEngine";
import "@/styles/components/hero.css";

interface HeroSectionProps {
  data?: Record<string, any>;
}

export default function Hero({ data = {} }: HeroSectionProps) {
  // Render the template with provided data
  const renderedData = renderTemplateObject(heroSimpleData, data);

  return (
    <section className="hero-section">
      {/* Professional Background Pattern */}
      <div className="hero-background" aria-hidden="true">
        {/* Subtle geometric pattern */}
        <div className="hero-geometric-pattern">
          <div className="hero-pattern-circle-1"></div>
          <div className="hero-pattern-circle-2"></div>
          <div className="hero-pattern-circle-3"></div>
          <div className="hero-pattern-circle-4"></div>
        </div>
        {/* Subtle gradient overlay */}
        <div className="hero-gradient-overlay"></div>
      </div>
      <div className="hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            {renderedData.title.split(' ').map((word: string, index: number) => 
              word.includes('AI') || word.includes('ERP') ? (
                <span key={index} className="hero-title-highlight">{word} </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h1>
          <p className="hero-subtitle">
            {renderedData.subtitle}
          </p>
        </div>
        {/* Right: Image - now blended with background */}
        <div className="hero-image-container">
          {/* Soft blurred gradient glow behind image */}
          <div className="hero-image-glow">
            <div className="hero-glow-effect"></div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src={renderedData.image.src}
              alt={renderedData.image.alt}
              fill
              style={{ objectFit: "contain" }}
              className="hero-image"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Scroll arrow removed for server-only rendering */}
    </section>
  );
}


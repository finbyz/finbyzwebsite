/**
 * @fileoverview Hero Section Component
 * 
 * A dynamic hero section component with animated content, gradient backgrounds,
 * and interactive elements. Features include:
 * - Full-screen responsive design
 * - Animated text and elements with staggered timing
 * - Gradient background with geometric patterns
 * - Call-to-action buttons with hover effects
 * - Scroll-to-section functionality
 * - Professional image display with blur effects
 * - Mobile-first responsive design
 * 
 * @component Hero
 * @example
 * ```tsx
 * // Basic usage in page
 * import Hero from "@/components/sections/hero"
 * 
 * export default function HomePage() {
 *   return (
 *     <div>
 *       <Hero />
 *       <Services id="services" />
 *     </div>
 *   )
 * }
 * 
 * // With custom scroll target
 * <Hero scrollTargetId="about-section" />
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 * @requires @/components/ui/button - For action buttons
 * @requires next/image - For optimized image display
 */

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroData from "@/data/hero.json";
import { renderTemplateObject } from "@/utils/templateEngine";
import "@/styles/components/hero.css";

/**
 * Hero section component with animated content and interactive elements.
 * 
 * Features:
 * - Full-screen responsive layout
 * - Animated text with staggered timing
 * - Gradient background with geometric patterns
 * - Professional image with blur effects
 * - Call-to-action buttons with hover animations
 * - Smooth scroll functionality
 * - Mobile-first design approach
 * 
 * Animations:
 * - fade-in-up: Main heading animation
 * - fade-in-up-delayed: Highlighted text animation
 * - fade-in-up-delayed-2: Description text animation
 * - fade-in-up-delayed-3: Button group animation
 * - fade-in-delayed: Image container animation
 * - scale-in: Image scaling animation
 * - bounce: Scroll arrow animation
 * 
 * Layout:
 * - Desktop: Two-column layout (content left, image right)
 * - Mobile: Single-column stacked layout
 * - Responsive breakpoints for optimal viewing
 * 
 * Interactive Elements:
 * - Primary CTA: "Book a Free Consultation"
 * - Secondary CTA: "Watch Demo"
 * - Scroll arrow: Smooth scroll to next section
 * 
 * @returns Hero section component with full-screen layout and animations
 * 
 * @example
 * ```tsx
 * // Custom hero with different content
 * <Hero 
 *   title="Custom Title"
 *   description="Custom description"
 *   primaryAction="Get Started"
 *   secondaryAction="Learn More"
 * />
 * 
 * // Hero with custom scroll behavior
 * const handleScroll = () => {
 *   document.getElementById('custom-section')?.scrollIntoView({ 
 *     behavior: 'smooth' 
 *   })
 * }
 * 
 * <Hero onScroll={handleScroll} />
 * ```
 */
export default function Hero({ data = {} }: { data?: Record<string, any> }) {
  // Render the template with provided data
  const renderedData = renderTemplateObject(heroData, data);

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
          <div className="hero-button-group">
            <Button 
              size="lg"
              className="hero-primary-button"
            >
              {renderedData.primaryButton}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hero-secondary-button"
            >
              {renderedData.secondaryButton}
            </Button>
          </div>
        </div>
        {/* Right: Image - now blended with background */}
        <div className="hero-image-container">
          {/* Soft blurred gradient glow behind image */}
          <div className="hero-image-glow">
            <div className="hero-glow-effect"></div>
          </div>
          <div className="hero-image-wrapper">
            {(() => {
              const src: string = renderedData?.image?.src || '';
              const alt: string = renderedData?.image?.alt || 'Hero Image';
              const isExternal = /^https?:\/\//i.test(src);
              return (
                <Image
                  src={src}
                  alt={alt}
                  fill
                  style={{ objectFit: "contain" }}
                  className="hero-image"
                  priority
                  unoptimized={isExternal}
                />
              );
            })()}
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="hero-scroll-arrow">
        <button 
          onClick={(e) => {
            // Prefer configured target first
            let nextSection: HTMLElement | null = null;
            if (renderedData.scrollTarget) {
              const byId = document.getElementById(renderedData.scrollTarget);
              if (byId) nextSection = byId as HTMLElement;
            }

            // Fallback: scroll to the immediate next section after this hero
            if (!nextSection) {
              const sectionEl = (e.currentTarget as HTMLElement).closest('section');
              const sibling = sectionEl?.nextElementSibling as HTMLElement | null;
              if (sibling) nextSection = sibling;
            }

            nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="hero-scroll-button"
        >
          <svg 
            className="hero-scroll-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}


/**
 * @fileoverview Testimonials Section Component
 * 
 * A dynamic testimonials section with animated cards, client logos, and
 * intersection observer-based animations. Features include:
 * - Responsive grid layout for testimonial cards
 * - Intersection observer for scroll-based animations
 * - Client logo showcase with color-coded branding
 * - Star ratings and quote styling
 * - Mobile menu context integration
 * - Smooth animations and transitions
 * 
 * @component Testimonials
 * @example
 * ```tsx
 * // Basic usage in page
 * import Testimonials from "@/components/sections/testimonials"
 * 
 * export default function HomePage() {
 *   return (
 *     <div>
 *       <Hero />
 *       <Services />
 *       <Testimonials />
 *     </div>
 *   )
 * }
 * 
 * // With custom testimonial data
 * const customTestimonials = [
 *   {
 *     quote: "Custom testimonial text...",
 *     author: "John Doe",
 *     company: "Tech Company",
 *     initials: "JD",
 *     rating: 5,
 *     palette: { color: "#1A5276", bg: "#EAF1F8" },
 *     url: "/reviews/custom"
 *   }
 * ]
 * 
 * <Testimonials testimonials={customTestimonials} />
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 * @requires @/components/ui/card - For testimonial cards
 * @requires @/components/ui/button - For action buttons
 * @requires @/components/ui/avatar - For author avatars
 * @requires @/contexts/MobileMenuContext - For mobile menu state
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { renderTemplateObject } from "@/utils/templateEngine";
import "@/styles/components/testimonials.css";

/**
 * Custom hook for intersection observer functionality.
 * Tracks when an element enters the viewport for animation triggers.
 * 
 * @param threshold - Intersection threshold (0-1, default: 0.3)
 * @returns Tuple of [ref, inView] where ref is the element reference and inView is boolean
 * 
 * @example
 * ```tsx
 * const [sectionRef, inView] = useInView(0.5)
 * 
 * return (
 *   <div ref={sectionRef} className={inView ? 'animate-fade-in' : 'opacity-0'}>
 *     Content that animates when in view
 *   </div>
 * )
 * ```
 */
// Server-side render: removed IntersectionObserver animations

/**
 * Color palette for testimonial cards and client logos.
 * Provides consistent branding colors across the component.
 */
const palette = [
  { color: "#1A5276", bg: "#EAF1F8" },
  { color: "#FF8C00", bg: "#FFF4E5" },
  { color: "#8E44AD", bg: "#F3EAF8" }
];

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  initials: string;
  rating: string | number;
  palette: { color: string; bg: string };
  url: string;
}

interface ClientLogo {
  name: string;
  color: string;
  bg: string;
}

/**
 * Testimonials section component with animated cards and client showcase.
 * 
 * Features:
 * - Responsive grid layout for testimonial cards
 * - Intersection observer for scroll-based animations
 * - Client logo showcase with color-coded branding
 * - Star ratings and professional quote styling
 * - Mobile menu context integration
 * - Smooth animations and transitions
 * 
 * Animations:
 * - fade-in-up: Section title animation
 * - slide-in-left: Mobile menu animation
 * - Card animations based on intersection observer
 * 
 * Layout:
 * - Desktop: 3-column grid for testimonials
 * - Mobile: Single column layout
 * - Client logos in horizontal scroll
 * 
 * @returns Testimonials section with animated cards and client showcase
 * 
 * @example
 * ```tsx
 * // Custom testimonials with different data
 * const customTestimonials = [
 *   {
 *     quote: "Amazing service and support!",
 *     author: "Jane Smith",
 *     company: "Tech Startup",
 *     initials: "JS",
 *     rating: 5,
 *     palette: { color: "#1A5276", bg: "#EAF1F8" },
 *     url: "/reviews/tech-startup"
 *   }
 * ]
 * 
 * <Testimonials testimonials={customTestimonials} />
 * 
 * // Testimonials with custom styling
 * <Testimonials 
 *   className="bg-gradient-to-r from-blue-50 to-purple-50"
 *   title="What Our Clients Say"
 * />
 * ```
 */
export default function Testimonials({ data = {} }: { data?: Record<string, any> }) {
  
  // Render the template with provided data
  const renderedData = renderTemplateObject(testimonialsData, data);

  // Add component_type to the data
  const componentData = {
    component_type: "Card",
    ...renderedData
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container-custom mx-auto py-16">
        <div className={`testimonials-header`}>
          <h2 className="testimonials-title">
            {renderedData.title}
          </h2>
          <p className="testimonials-subtitle">
            {renderedData.subtitle}
          </p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="testimonials-grid">
          {renderedData.testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={`${testimonial.author}-${testimonial.company}`}
              className={`testimonial-card-wrapper`}
              style={{ 
                transitionDelay: `${index * 0.2}s`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Card
                className="testimonial-card group"
                style={{ borderTop: `4px solid ${testimonial.palette.color}` }}
              >
                <CardContent className="testimonial-card-content">
                  {/* Quote Icon */}
                  <div
                    className="testimonial-quote-icon"
                    style={{ background: testimonial.palette.bg }}
                  >
                    <Quote className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: testimonial.palette.color }} />
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="testimonial-rating">
                    {[...Array(Number(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="testimonial-star" style={{ color: "#FF8C00" }} fill="#FF8C00" />
                    ))}
                  </div>
                  
                  {/* Quote Text */}
                  <p className="testimonial-quote-text">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  {/* Author Info */}
                  <div className="testimonial-author-section">
                    <Avatar className="testimonial-avatar" style={{ background: testimonial.palette.bg }}>
                      <AvatarFallback className="testimonial-avatar-fallback" style={{ background: testimonial.palette.color }}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="testimonial-author-info">
                      <p className="testimonial-author-name">{testimonial.author}</p>
                      <p className="testimonial-company">{testimonial.company}</p>
                      <a 
                        href={testimonial.url}
                        className="testimonial-review-link"
                      >
                        View Review
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        {renderedData.ctaButton && renderedData.ctaButton.trim() !== "" && (
        <div className={`testimonials-cta`}>
          <Button 
            size="lg"
            className="testimonials-cta-button"
          >
            {renderedData.ctaButton}
          </Button>
          
          {/* Trust Indicators */}
          <div className={`testimonials-trust-indicators`}>
            {renderedData.trustIndicators.map((indicator: any, index: number) => (
              <div key={index} className="trust-indicator">
                <div 
                  className={`trust-indicator-dot ${
                    indicator.color === '#1A5276' ? 'trust-indicator-dot-primary' :
                    indicator.color === '#FF8C00' ? 'trust-indicator-dot-secondary' :
                    'trust-indicator-dot-accent'
                  }`}
                ></div>
                <span>{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}


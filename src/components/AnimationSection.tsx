'use client';

import React, { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Observer, SplitText);
}

interface AnimatedSectionsProps {
  children: React.ReactNode;
  animationDuration?: number;
  animationEase?: string;
  wheelSpeed?: number;
  tolerance?: number;
  parallaxAmount?: number;
  textStagger?: number;
  textDelay?: number;
  className?: string;
  onSectionChange?: (index: number) => void;
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  backgroundImage?: string;
  style?: React.CSSProperties;
}

// Section component that will be used as children
export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background,
  backgroundImage,
  style = {} 
}) => {
  return (
    <section className={`animated-section ${className}`} data-background={background} data-bg-image={backgroundImage} style={style}>
      <div className="section-outer">
        <div className="section-inner">
          <div className="section-bg">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

// Heading component with auto text-splitting
export const SectionHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
};

const AnimatedSections: React.FC<AnimatedSectionsProps> = ({
  children,
  animationDuration = 1.25,
  animationEase = "power1.inOut",
  wheelSpeed = -1,
  tolerance = 10,
  parallaxAmount = 15,
  textStagger = 0.02,
  textDelay = 0.2,
  className = "",
  onSectionChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const outerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [animating, setAnimating] = useState(false);
  const splitHeadingsRef = useRef<any[]>([]);
  const observerRef = useRef<any>(null);

  // Process children to ensure they're Section components
  const sections = Children.toArray(children).filter(child => 
    isValidElement(child) && (
      child.type === Section ||
      (
        typeof child.props === 'object' &&
        child.props !== null &&
        'className' in child.props &&
        typeof child.props.className === 'string' &&
        child.props.className.includes('section')
      )
    )
  );

  useEffect(() => {
    if (typeof window === 'undefined' || sections.length === 0) return;

    const setupAnimation = () => {
      const container = containerRef.current;
      if (!container) return;

      // Get all sections and their elements
      const sectionElements = Array.from(container.querySelectorAll('.animated-section')) as HTMLElement[];
      const outerElements = Array.from(container.querySelectorAll('.section-outer')) as HTMLDivElement[];
      const innerElements = Array.from(container.querySelectorAll('.section-inner')) as HTMLDivElement[];
      const bgElements = Array.from(container.querySelectorAll('.section-bg')) as HTMLDivElement[];
      const headingElements = Array.from(container.querySelectorAll('.section-heading')) as HTMLHeadingElement[];

      if (sectionElements.length === 0) return;

      // Store references
      sectionsRef.current = sectionElements;
      outerWrappersRef.current = outerElements;
      innerWrappersRef.current = innerElements;
      imagesRef.current = bgElements;
      headingsRef.current = headingElements;

      // Initialize SplitText for headings
      splitHeadingsRef.current = headingElements.map(heading => 
        new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })
      );

      // Set initial positions
      gsap.set(outerElements, { yPercent: 100 });
      gsap.set(innerElements, { yPercent: -100 });

      const wrap = gsap.utils.wrap(0, sectionElements.length);

      const gotoSection = (index: number, direction: number) => {
        index = wrap(index);
        setAnimating(true);
        
        const fromTop = direction === -1;
        const dFactor = fromTop ? -1 : 1;
        const tl = gsap.timeline({
          defaults: { duration: animationDuration, ease: animationEase },
          onComplete: () => {
            setAnimating(false);
            onSectionChange?.(index);
          }
        });

        if (currentIndex >= 0) {
          gsap.set(sectionElements[currentIndex], { zIndex: 0 });
          tl.to(bgElements[currentIndex], { yPercent: -parallaxAmount * dFactor })
            .set(sectionElements[currentIndex], { autoAlpha: 0 });
        }

        gsap.set(sectionElements[index], { autoAlpha: 1, zIndex: 1 });
        
        tl.fromTo([outerElements[index], innerElements[index]], { 
            yPercent: (i: number) => i ? -100 * dFactor : 100 * dFactor
          }, { 
            yPercent: 0 
          }, 0)
          .fromTo(bgElements[index], { yPercent: parallaxAmount * dFactor }, { yPercent: 0 }, 0);

        // Animate text if SplitText is available
        if (splitHeadingsRef.current[index]?.chars) {
          tl.fromTo(splitHeadingsRef.current[index].chars, { 
              autoAlpha: 0, 
              yPercent: 150 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: {
                each: textStagger,
                from: "random"
              }
            }, textDelay);
        }

        setCurrentIndex(index);
      };

      // Create Observer
      observerRef.current = Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: wheelSpeed,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: tolerance,
        preventDefault: true
      });

      // Initialize first section
      gotoSection(0, 1);
    };

    const timer = setTimeout(setupAnimation, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.kill();
      }
      splitHeadingsRef.current.forEach(split => {
        if (split?.revert) split.revert();
      });
    };
  }, [sections.length, animationDuration, animationEase, wheelSpeed, tolerance, parallaxAmount, textStagger, textDelay, onSectionChange]);

  return (
    <div ref={containerRef} className={`animated-sections-container ${className}`}>
      <style jsx>{`
        .animated-sections-container {
          height: 100vh;
          overflow: hidden;
          position: relative;
        }

        .animated-sections-container :global(.animated-section) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          visibility: hidden;
        }

        .animated-sections-container :global(.section-outer) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .animated-sections-container :global(.section-inner) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .animated-sections-container :global(.section-bg) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-size: cover;
          background-position: center;
        }

        .animated-sections-container :global(.section-heading) {
          font-size: clamp(2rem, 8vw, 8rem);
          font-weight: bold;
          color: white;
          text-align: center;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          margin: 0;
          line-height: 1.2;
        }

        .animated-sections-container :global(.clip-text) {
          overflow: hidden;
        }

        /* Apply backgrounds based on data attributes */
        .animated-sections-container :global(.animated-section[data-background*="gradient-purple"]) .section-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .animated-sections-container :global(.animated-section[data-background*="gradient-pink"]) .section-bg {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        
        .animated-sections-container :global(.animated-section[data-background*="gradient-blue"]) .section-bg {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        
        .animated-sections-container :global(.animated-section[data-background*="gradient-green"]) .section-bg {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        
        .animated-sections-container :global(.animated-section[data-background*="gradient-orange"]) .section-bg {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .animated-sections-container :global(.animated-section[data-background*="gradient-dark"]) .section-bg {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .animated-sections-container :global(.animated-section[data-background*="gradient-sunset"]) .section-bg {
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
        }

        /* Solid colors */
        .animated-sections-container :global(.animated-section[data-background*="#"]) .section-bg {
          background-color: attr(data-background);
        }

        /* Background images */
        .animated-sections-container :global(.animated-section[data-bg-image]) .section-bg {
          background-image: attr(data-bg-image url);
        }
      `}</style>

      {Children.map(children, (child, index) => {
        if (isValidElement(child) && child.type === Section) {
          const props = typeof child.props === 'object' && child.props !== null ? child.props : {};
          return cloneElement(child, {
            ...props,
            key: index
          });
        }
        return child;
      })}
    </div>
  );
};

export default AnimatedSections;
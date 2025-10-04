'use client';

import React, { forwardRef } from 'react';
import type { JSX } from 'react';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 
    | 'gradient-purple' 
    | 'gradient-pink' 
    | 'gradient-blue' 
    | 'gradient-green' 
    | 'gradient-orange' 
    | 'gradient-dark' 
    | 'gradient-sunset'
    | 'gradient-ocean'
    | 'gradient-fire'
    | 'gradient-forest'
    | string; // For custom colors like "#FF0000"
  backgroundImage?: string;
  backgroundSize?: 'cover' | 'contain' | 'auto' | string;
  backgroundPosition?: string;
  backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  style?: React.CSSProperties;
  fullHeight?: boolean;
  padding?: string | number;
  textAlign?: 'left' | 'center' | 'right';
  id?: string;
  'data-section-name'?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className = '',
  background,
  backgroundImage,
  backgroundSize = 'cover',
  backgroundPosition = 'center',
  backgroundRepeat = 'no-repeat',
  overlay = false,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  overlayOpacity,
  style = {},
  fullHeight = true,
  padding = '2rem',
  textAlign = 'center',
  id,
  'data-section-name': sectionName,
  ...props
}, ref) => {
  
  // Determine background style
  const getBackgroundStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      backgroundSize,
      backgroundPosition,
      backgroundRepeat,
    };

    if (backgroundImage) {
      baseStyle.backgroundImage = `url(${backgroundImage})`;
    }

    // Handle gradient presets
    const gradients = {
      'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'gradient-pink': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'gradient-blue': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'gradient-green': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'gradient-orange': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'gradient-dark': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      'gradient-sunset': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      'gradient-ocean': 'linear-gradient(135deg, #667db6 0%, #0082c8 25%, #0082c8 50%, #667db6 100%)',
      'gradient-fire': 'linear-gradient(135deg, #ff9a00 0%, #ffcd02 50%, #ff9a00 100%)',
      'gradient-forest': 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    };

    if (background && gradients[background as keyof typeof gradients]) {
      baseStyle.background = gradients[background as keyof typeof gradients];
    } else if (background && background.startsWith('#')) {
      baseStyle.backgroundColor = background;
    } else if (background && background.includes('gradient')) {
      baseStyle.background = background;
    } else if (background) {
      baseStyle.backgroundColor = background;
    }

    return baseStyle;
  };

  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: fullHeight ? '100vh' : 'auto',
    minHeight: fullHeight ? '100vh' : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    textAlign,
    ...getBackgroundStyle(),
    ...style,
  };

  const overlayStyle: React.CSSProperties = overlay ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: overlayOpacity !== undefined 
      ? overlayColor.replace(/[\d.]+\)$/g, `${overlayOpacity})`)
      : overlayColor,
    zIndex: 1,
  } : {};

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  return (
    <section
      ref={ref}
      className={`animated-section section-component ${className}`}
      style={sectionStyle}
      id={id}
      data-section-name={sectionName}
      data-background={background}
      data-bg-image={backgroundImage}
      {...props}
    >
      <div className="section-outer">
        <div className="section-inner">
          <div className="section-bg">
            {overlay && <div className="section-overlay" style={overlayStyle} />}
            <div className="section-content" style={contentStyle}>
              {children}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-component {
          position: relative;
          overflow: hidden;
        }

        .section-outer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .section-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .section-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .section-content {
          position: relative;
          z-index: 2;
        }

        .section-overlay {
          pointer-events: none;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .section-component {
            padding: 1rem;
          }
          
          .section-content {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-component {
            padding: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;

// Additional utility components for common section patterns

export interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  color?: string;
  style?: React.CSSProperties;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = '',
  level = 2,
  size = 'large',
  color = 'white',
  style = {}
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizes = {
    small: 'clamp(1.5rem, 4vw, 3rem)',
    medium: 'clamp(2rem, 6vw, 5rem)',
    large: 'clamp(2.5rem, 8vw, 8rem)',
    xl: 'clamp(3rem, 10vw, 10rem)',
    xxl: 'clamp(4rem, 12vw, 12rem)',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: sizes[size],
    fontWeight: 'bold',
    color,
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    margin: 0,
    lineHeight: 1.2,
    ...style,
  };

  return (
    <Tag className={`section-heading ${className}`} style={headingStyle}>
      {children}
    </Tag>
  );
};

export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string | number;
  padding?: string | number;
  style?: React.CSSProperties;
}

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className = '',
  maxWidth = '800px',
  padding = '2rem',
  style = {}
}) => {
  const contentStyle: React.CSSProperties = {
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    margin: '0 auto',
    ...style,
  };

  return (
    <div className={`section-content-wrapper ${className}`} style={contentStyle}>
      {children}
    </div>
  );
};

// Grid layout for sections
export interface SectionGridProps {
  children: React.ReactNode;
  columns?: number | string;
  gap?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionGrid: React.FC<SectionGridProps> = ({
  children,
  columns = 'auto-fit',
  gap = '2rem',
  className = '',
  style = {}
}) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: typeof columns === 'number' 
      ? `repeat(${columns}, 1fr)`
      : `repeat(${columns}, minmax(250px, 1fr))`,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    width: '100%',
    ...style,
  };

  return (
    <div className={`section-grid ${className}`} style={gridStyle}>
      {children}
    </div>
  );
};
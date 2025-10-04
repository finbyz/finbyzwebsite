import React, { CSSProperties, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  useGradient?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  style = {},
  useGradient = false 
}) => {
  const defaultGradientStyle: CSSProperties = {
    background: '#F5F5F5'
  };

  const appliedStyle = useGradient 
    ? { ...defaultGradientStyle, ...style }
    : style;

  return (
    <div
      style={appliedStyle}
      className={`${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
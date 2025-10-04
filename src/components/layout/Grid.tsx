import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  cols?: number; // any number of columns
  gap?: number; // gap value in Tailwind scale
  responsive?: boolean;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 3,
  gap = 4,
  responsive = true,
  className = ''
}) => {
  // Generate grid columns dynamically
  const getGridClasses = () => {
    if (!responsive) {
      return `grid-cols-${cols}`;
    }

    // Small screens: 1 column, Medium: up to 2, Large: up to cols
    return `grid-cols-1 sm:grid-cols-${Math.min(2, cols)} md:grid-cols-${Math.min(3, cols)} lg:grid-cols-${cols}`;
  };

  const gapClasses = `gap-${gap}`;

  return (
    <div className={`grid ${getGridClasses()} ${gapClasses} ${className}`}>
      {children}
    </div>
  );
};

interface GridItemProps {
  children: ReactNode;
  className?: string;
}

export const GridItem: React.FC<GridItemProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export default Grid;

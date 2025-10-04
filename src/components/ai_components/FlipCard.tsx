import React, { useState, ReactNode } from 'react';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  width?: string;
  height?: string;
  flipOnClick?: boolean;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ 
  front, 
  back, 
  width = 'w-64', 
  height = 'h-80',
  flipOnClick = false,
  className = ''
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = (): void => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = (): void => {
    if (!flipOnClick) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (!flipOnClick) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className={`${width} ${height} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div 
        className={`relative w-full h-full ${flipOnClick ? 'cursor-pointer' : ''}`}
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full transition-transform duration-600"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full rounded-lg shadow-lg"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {front}
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full rounded-lg shadow-lg"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {back}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
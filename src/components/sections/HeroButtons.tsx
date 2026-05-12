'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

type ColorKey = 'orange' | 'blue' | 'green' | 'purple';

interface HeroButtonsProps {
  primaryButton?: {
    text: string;
    action?: string;
  };
  secondaryButton?: {
    text: string;
    action?: string;
  };
  accentColor?: ColorKey;
}

const colorClasses: Record<ColorKey, {
  bg: string;
  bgHover: string;
  border: string;
}> = {
  orange: {
    bg: 'bg-orange-500',
    bgHover: 'hover:bg-orange-600',
    border: 'border-orange-500',
  },
  blue: {
    bg: 'bg-orange-500',
    bgHover: 'hover:bg-orange-600',
    border: 'border-blue-500',
  },
  green: {
    bg: 'bg-green-500',
    bgHover: 'hover:bg-green-600',
    border: 'border-green-500',
  },
  purple: {
    bg: 'bg-purple-500',
    bgHover: 'hover:bg-purple-600',
    border: 'border-purple-500',
  },
};

/**
 * Client component that handles interactive button actions in the hero section.
 * Supports:
 * - String URLs: navigates to the URL
 * - Anchor IDs (#id): smooth scrolls to the element
 * - External URLs (https://): opens in new tab
 */
export default function HeroButtons({ primaryButton, secondaryButton, accentColor = 'orange' }: HeroButtonsProps) {
  const colors = colorClasses[accentColor] || colorClasses.orange;

  const handleAction = (action?: string) => {
    if (!action) return;
    
    if (action.startsWith('#')) {
      // Scroll to element
      const el = document.getElementById(action.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.startsWith('http://') || action.startsWith('https://')) {
      // External link — open in new tab
      window.open(action, '_blank');
    } else {
      // Internal navigation
      window.location.href = action;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {primaryButton && primaryButton.action && (
        <button
          onClick={() => handleAction(primaryButton.action)}
          className={`group ${colors.bg} ${colors.bgHover} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105`}
        >
          <span>{primaryButton.text}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
      {secondaryButton && secondaryButton.action && (
        <button
          onClick={() => handleAction(secondaryButton.action)}
          className={`group border-2 border-slate-600 hover:${colors.border} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-slate-800`}
        >
          <span>{secondaryButton.text}</span>
        </button>
      )}
      {secondaryButton && !secondaryButton.action && (
        <span className="text-slate-300 px-2 py-1 font-medium">
          {secondaryButton.text}
        </span>
      )}
    </div>
  );
}

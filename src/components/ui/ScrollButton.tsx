'use client';

import React from 'react';

interface ScrollButtonProps {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Client component for buttons that scroll to a target element.
 * Extracted so parent pages can remain server components.
 */
export default function ScrollButton({ targetId, className = '', children }: ScrollButtonProps) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
}

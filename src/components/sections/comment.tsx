/**
 * @fileoverview Comment Section Component (comment.tsx)
 * 
 * A simple comment section component that displays a single quote
 * with a large quotation mark design and bold text styling.
 * 
 * @component Comment
 * @example
 * ```tsx
 * // Basic usage in page
 * import Comment from "@/components/sections/comment"
 * 
 * export default function CommentsPage() {
 *   return (
 *     <div>
 *       <Hero />
 *       <Comment />
 *     </div>
 *   )
 * }
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 * @requires @/contexts/MobileMenuContext - For mobile menu state
 */

"use client";

import { useState, useEffect, useRef } from "react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import "@/styles/components/comment.css";

/**
 * Custom hook for intersection observer functionality.
 * Tracks when an element enters the viewport for animation triggers.
 * 
 * @param threshold - Intersection threshold (0-1, default: 0.3)
 * @returns Tuple of [ref, inView] where ref is the element reference and inView is boolean
 */
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

interface CommentProps {
  data?: {
    text?: string;
    symbol?: string;
  };
}

/**
 * Simple comment section component with large quotation mark design.
 * 
 * Features:
 * - Large stylized quotation mark design
 * - Bold text phrase layout
 * - Intersection observer for scroll-based animations
 * - Mobile menu context integration
 * - Smooth animations and transitions
 * 
 * @returns Simple comment section with quotation mark design
 */
export default function Comment({ data = {} }: CommentProps) {
  const [sectionRef, inView] = useInView(0.3);
  const { isOpen } = useMobileMenu();

  const {
    text = "Looking for a Trusted CRM Software Development Company?",
    symbol = "~"
  } = data;

  return (
    <section ref={sectionRef} id="comments" className="comment-section">
      <div className="comment-container">
        {/* Main Quote Display */}
        <div className={`comment-content ${
          inView 
            ? isOpen 
              ? 'comment-slide-in-left' 
              : 'comment-fade-in-up' 
            : isOpen 
              ? 'comment-slide-out-left' 
              : 'comment-fade-out'
        }`}>
          <div className="comment-layout">
            {/* Symbol Design */}
            <div className="comment-symbol">
              {symbol}
            </div>
            
            {/* Quote Text */}
            <div className="comment-text-container">
              <h3 className="comment-text">
                {text}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

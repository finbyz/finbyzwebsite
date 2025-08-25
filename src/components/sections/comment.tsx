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

 
 
import "@/styles/components/comment.css";

/**
 * Custom hook for intersection observer functionality.
 * Tracks when an element enters the viewport for animation triggers.
 * 
 * @param threshold - Intersection threshold (0-1, default: 0.3)
 * @returns Tuple of [ref, inView] where ref is the element reference and inView is boolean
 */
// Removed IntersectionObserver hook for server-side compatibility

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

  const {
    text = "Looking for a Trusted CRM Software Development Company?",
    symbol = "~"
  } = data;

  return (
    <section id="comments" className="comment-section">
      <div className="comment-container">
        {/* Main Quote Display */}
        <div className={`comment-content comment-fade-in-up`}>
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

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
  name: string;
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
                  {/* Author Info */}
                  <div className="testimonial-author-section">
                    <Avatar className="testimonial-avatar" style={{ background: testimonial.palette.bg }}>
                      <AvatarFallback className="testimonial-avatar-fallback" style={{ background: testimonial.palette.color }}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="testimonial-author-info">
                      <p className="testimonial-author-name">{testimonial.name}</p>
                      <p className="testimonial-author-name text-black">{testimonial.author}</p>
                      <p className="testimonial-company">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="testimonial-rating mt-4">
                    {[...Array(Number(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="testimonial-star" style={{ color: "#FF8C00" }} fill="#FF8C00" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="testimonial-quote-text">
                    {testimonial.quote}
                  </p>

                  {/* Review Link */}
                  <a
                    href={testimonial.url}
                    target="_blank"
                    className="testimonial-review-link !no-underline text-orange-600 hover:text-blue-800"
                  >
                    View Review
                  </a>
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
                    className={`trust-indicator-dot ${indicator.color === '#1A5276' ? 'trust-indicator-dot-primary' :
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


// 'use client';

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Star, Quote, CheckCircle2, ArrowRight } from "lucide-react";
// import testimonialsData from "@/data/testimonials.json";
// import { renderTemplateObject } from "@/utils/templateEngine";
// import "@/styles/components/testimonials.css";

// interface Testimonial {
//   quote: string;
//   author: string;
//   company: string;
//   initials: string;
//   rating: string | number;
//   palette: { color: string; bg: string };
//   url: string;
// }

// const palette = [
//   { color: "#1A5276", bg: "#EAF1F8" },
//   { color: "#FF8C00", bg: "#FFF4E5" },
//   { color: "#8E44AD", bg: "#F3EAF8" }
// ];

// export default function Testimonials({ data = {} }: { data?: Record<string, any> }) {
//   const renderedData = renderTemplateObject(testimonialsData, data);

//   return (
//     <section id="testimonials" className="testimonials-section relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10 animate-blob"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/20 to-purple-100/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
//       <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000"></div>

//       <div className="container-custom mx-auto py-24">
//         {/* Enhanced Header */}
//         <div className="mb-20 text-center">
//           <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 animate-float">
//             <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-spin-slow" />
//             <span className="text-sm font-semibold bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500 text-transparent">Trusted by Industry Leaders</span>
//           </div>

//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 bg-clip-text bg-gradient-to-r from-[#1A5276]  to-[#1A5276] text-transparent leading-tight">
//             {renderedData.title}
//           </h2>

//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {renderedData.subtitle}
//           </p>
//         </div>

//         {/* Testimonial Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {renderedData.testimonials.map((testimonial: Testimonial, index: number) => (
//             <div
//               key={`${testimonial.author}-${testimonial.company}`}
//               className="group"
//               style={{
//                 animation: `slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s both`
//               }}
//             >
//               <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/95 backdrop-blur-sm relative overflow-hidden group/card">
//                 {/* Top gradient border with animation */}
//                 <div
//                   className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r transform origin-left group-hover:scale-x-110 transition-all duration-500"
//                   style={{
//                     backgroundImage: `linear-gradient(to right, ${testimonial.palette.color}, ${testimonial.palette.color})`
//                   }}
//                 />

//                 {/* Corner accent */}
//                 <div
//                   className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"
//                   style={{ background: testimonial.palette.color }}
//                 />

//                 {/* Animated background blobs */}
//                 <div
//                   className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full opacity-5 blur-2xl group-hover:opacity-15 group-hover:scale-125 transition-all duration-700"
//                   style={{ background: testimonial.palette.color }}
//                 />

//                 <CardContent className="p-8 relative z-10 h-full flex flex-col">
//                   {/* Quote Icon with 3D effect */}
//                   <div className="mb-6 flex items-start justify-between">
//                     <div
//                       className="p-3 rounded-lg group-hover:scale-125 group-hover: transition-all duration-300 cursor-pointer transform group-hover:shadow-lg"
//                       style={{ background: testimonial.palette.bg }}
//                     >
//                       <Quote
//                         className="w-5 h-5"
//                         style={{ color: testimonial.palette.color }}
//                         fill={testimonial.palette.color}
//                       />
//                     </div>

//                     {/* Animated star rating */}
//                     <div className="flex gap-1.5">
//                       {[...Array(Number(testimonial.rating))].map((_, i) => (
//                         <div
//                           key={i}
//                           className="relative"
//                           style={{
//                             animation: `starPulse 0.5s ease-out ${i * 0.1}s`
//                           }}
//                         >
//                           <Star
//                             className="w-5 h-5 text-yellow-400 transition-all duration-300"
//                             fill="#FBBF24"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Quote text with enhanced styling */}
//                   <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium group-hover:text-gray-900 transition-all duration-300 flex-grow italic">
//                     &quot;{testimonial.quote}&quot;
//                   </p>

//                   {/* Animated divider */}
//                   <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-transparent mb-8 group-hover:w-20 group-hover:from-gray-400 transition-all duration-500" />

//                   {/* Author section with flip animation */}
//                   <div className="flex items-center gap-4 group/author">
//                     <Avatar className="h-14 w-14 border-2 group-hover:scale-110 group-hover: transition-all duration-300 shadow-md" style={{ borderColor: testimonial.palette.color }}>
//                       <AvatarFallback
//                         className="font-bold text-white text-lg"
//                         style={{ background: testimonial.palette.color }}
//                       >
//                         {testimonial.initials}
//                       </AvatarFallback>
//                     </Avatar>

//                     <div className="flex-1 min-w-0">
//                       <p className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors text-sm">{testimonial.author}</p>
//                       <p className="text-sm text-gray-600">{testimonial.company}</p>
//                     </div>

//                     {/* Arrow with slide animation */}
//                     <a
//                       href={testimonial.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-400 hover:text-gray-600 group-hover/author:translate-x-2 group-hover/author:-translate-y-1 transition-all duration-300 flex-shrink-0"
//                       title="View full review"
//                     >
//                       <ArrowRight className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section with advanced animations */}
//         {renderedData.ctaButton && renderedData.ctaButton.trim() !== "" && (
//           <div className="mt-20 animate-fadeInUp">
//             {/* Trust Indicators */}
//             {renderedData.trustIndicators && renderedData.trustIndicators.length > 0 && (
//               <div className="mb-14 flex flex-wrap justify-center gap-4 lg:gap-6">
//                 {renderedData.trustIndicators.map((indicator: any, index: number) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-lg group/indicator transition-all duration-300 hover:-translate-y-2 border border-gray-100/50"
//                     style={{
//                       animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`
//                     }}
//                   >
//                     <CheckCircle2
//                       className="w-5 h-5 flex-shrink-0 group-hover/indicator:scale-110 group-hover/indicator:rotate-12 transition-all duration-500"
//                       style={{ color: indicator.color || "#1A5276" }}
//                     />
//                     <span className="text-sm font-medium text-gray-700 group-hover/indicator:text-gray-900 transition-colors">{indicator.text}</span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* CTA Button */}
//             <div className="flex justify-center">
//               <Button
//                 size="lg"
//                 className="px-10 py-7 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-110 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 hover:from-blue-700 hover:via-purple-700 hover:to-orange-600 text-white border-0 group/btn relative overflow-hidden transform hover:skew-y-0"
//               >
//                 {/* Animated shine effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-30 transform -skew-x-12 group-hover/btn:translate-x-full transition-all duration-1000" />

//                 <span className="relative flex items-center gap-3">
//                   {renderedData.ctaButton}
//                   <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                 </span>
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Advanced CSS Animations */}
//       <style jsx>{`
//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) translateX(0px);
//           }
//           33% {
//             transform: translateY(-20px) translateX(10px);
//           }
//           66% {
//             transform: translateY(-10px) translateX(-10px);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes starPulse {
//           0% {
//             transform: scale(0.5) rotate(-180deg);
//             opacity: 0;
//           }
//           50% {
//             transform: scale(1.2);
//           }
//           100% {
//             transform: scale(1) rotate(0deg);
//             opacity: 1;
//           }
//         }

//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }

//         .testimonials-section {
//           background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #faf8fc 100%);
//           position: relative;
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out;
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }

//         .animate-blob {
//           animation: blob 7s infinite;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }

//         .perspective {
//           perspective: 1000px;
//         }
//       `}</style>
//     </section>
//   );
// }
'use client';

import dynamic from 'next/dynamic';

// Loading placeholder component for consistent loading states
const LoadingPlaceholder = ({ height = 'py-24' }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gradient-to-br from-gray-100 to-gray-50`} />
);

// FAQ Section - Heavy component with animations
export const LazyFAQSection = dynamic(
  () => import('@/components/ui/ComponentShowcase3').then(mod => ({ default: mod.FAQSection })),
  { 
    loading: () => <LoadingPlaceholder />,
    ssr: false 
  }
);

// Company History Timeline - Heavy component with scroll animations
export const LazyCompanyHistoryTimeline = dynamic(
  () => import('@/components/ui/CompanyHistoryTimeline'),
  { 
    loading: () => <LoadingPlaceholder />,
    ssr: false 
  }
);

// Timeline Carousel - Animation-heavy carousel component
export const LazyTimelineCarousel = dynamic(
  () => import('@/components/ui/ComponentShowcase3').then(mod => ({ default: mod.TimelineCarousel })),
  { 
    loading: () => <LoadingPlaceholder />,
    ssr: false 
  }
);

// Timeline Section - Full screen timeline with framer-motion
export const LazyTimelineSection = dynamic(
  () => import('@/components/ui/ComponentShowcase3').then(mod => ({ default: mod.TimelineSection })),
  { 
    loading: () => <LoadingPlaceholder />,
    ssr: false 
  }
);

// Team Section - Grid layout with animations
export const LazyTeamSection = dynamic(
  () => import('@/components/ui/ComponentShowcase3').then(mod => ({ default: mod.TeamSection })),
  { 
    loading: () => <LoadingPlaceholder />,
    ssr: false 
  }
);

// Blog Grid - Card layout with animations
export const LazyBlogGrid = dynamic(
  () => import('@/components/ui/ComponentShowcase3').then(mod => ({ default: mod.BlogGrid })),
  { 
    loading: () => <LoadingPlaceholder />,
    ssr: false 
  }
);

// ============================================
// Blog Layout Components - Used across all blog pages
// ============================================

// Business Slider - Logo carousel with animations
export const LazyBusinessSlider = dynamic(
  () => import('@/components/sections/business-slider'),
  {
    loading: () => <LoadingPlaceholder height="py-16" />,
    ssr: false
  }
);

// FAQ Component - Accordion with animations
export const LazyFAQ = dynamic(
  () => import('@/components/ai_components/FAQ'),
  {
    loading: () => <LoadingPlaceholder />,
    ssr: false
  }
);

// Finbyz Gallery - Image gallery with related reads
export const LazyFinbyzGallery = dynamic(
  () => import('@/components/sections/FinbyzGallery'),
  {
    loading: () => <LoadingPlaceholder />,
    ssr: false
  }
);

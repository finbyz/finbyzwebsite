 
import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// Import all components from sections folder
import Hero from './sections/hero';
import Testimonials from './sections/testimonials';
import Benefits from './sections/benefits';
import Differentiators from './sections/differentiators';
import Comment from './sections/comment';
import CTA from './sections/cta';
// Removed per request: FAQ
import ProcessWorkflow from './sections/process-workflow';
// Removed per request: IndustrySolutions
import GlobalPresence from './sections/global-presence';
import ContactInfo from './sections/contact-info';
// Removed per request: SupportServices
import ResourceCenter from './sections/resource-center';
// Removed per request: Partnerships
// Removed per request: SecurityCompliance

// Removed per request: ServicePricing
import HeroWithoutButton from './sections/hero_section_without_button';

import TechnologyStack from './sections/technology-stack';
// Removed per request: CaseStudies
import BusinessSlider from './sections/business-slider';
import ClientLogos from './sections/client-logos';
import StatsShowcase from './sections/stats-showcase';
// Removed per request: ProcessTimeline
import TeamExpertise from './sections/team-expertise';

import ERPIntroText from './sections/erp-intro-text';
import Text from './sections/forward-contracting-text';
import Video from './sections/video';
import Points from './sections/points';
// Additional sections to support all components in the folder
import ContactForm from './sections/contact-form';
import ContactWithMap from './sections/contact-with-map';
import ContentIllustrationLeft from './sections/content-illustration-left';
import ContentIllustrationRight from './sections/content-illustration-right';
import JobDetail from './sections/job-detail';
import ResponsiveCardGrid from './sections/responsive-card-grid';
import SecurityCompliance from './sections/security-compliance';

// ============================================================================
// SECTIONS-BASED RENDERER
// ============================================================================

interface SectionData {
  type: string;
  data?: Record<string, any>;
  id?: string;
  className?: string;
}

interface PageData {
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
  };
  sections: SectionData[];
}

interface SectionsBasedRendererProps {
  pageData: PageData;
  className?: string;
  onSectionRender?: (sectionType: string, index: number) => void;
}

/**
 * Component mapping - only uses components from sections folder
 */
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  // Generic keys (new) and legacy keys (aliases) both map to the same components
  // Hero variants
  'hero': Hero,
  'hero-basic': HeroWithoutButton,
  'hero-without-button': HeroWithoutButton,

  // Testimonial/long description cards
  'long-description-cards': Testimonials,
  'testimonials': Testimonials,

  // Number/KPI cards
  'number-cards': Benefits,
  'benefits': Benefits,

  // Feature cards (differentiators)
  'feature-cards': Differentiators,
  'differentiators': Differentiators,

  // Highlight quote
  'highlight-quote': Comment,
  'comment': Comment,

  // Call to action
  'call-to-action': CTA,
  'cta': CTA,
  // 'faq': FAQ,
  'process-steps': ProcessWorkflow,
  'process-workflow': ProcessWorkflow,
  // 'industry-solutions': IndustrySolutions,
  'global-presence': GlobalPresence,
  'contact-info-block': ContactInfo,
  'contact-info': ContactInfo,
  // 'support-services': SupportServices,
  'resource-center': ResourceCenter,
  // 'partnerships': Partnerships,
  // 'security-compliance': SecurityCompliance,
  

  // 'service-pricing': ServicePricing,
  // Technology categories
  'technology-categories': TechnologyStack,
  'technology-stack': TechnologyStack,
  // 'case-studies': CaseStudies,
  // Services section - maps to ResponsiveCardGrid
  'services': ResponsiveCardGrid,
  'services-overview': ResponsiveCardGrid,
  
  // 'business-slider' remains mapped to its dedicated component
  'inquiry-panel': BusinessSlider,
  'business-slider': BusinessSlider,

  // Logos carousel
  'logos-carousel': ClientLogos,
  'client-logos': ClientLogos,

  // Stats cards
  'stats-cards': StatsShowcase,
  'stats-showcase': StatsShowcase,
  // 'process-timeline': ProcessTimeline,
  'team-expertise-cards': TeamExpertise,
  'team-expertise': TeamExpertise,

  // Intro text
  'intro-text': ERPIntroText,
  'erp-intro-text': ERPIntroText,
  'text': Text,
  'video': Video,
  'points': Points,

  // Newly added mappings to use every component in sections folder
  'contact-form': ContactForm,
  'contact-with-map': ContactWithMap,
  'content-with-illustration-left': ContentIllustrationLeft,
  'content-illustration-left': ContentIllustrationLeft,
  'content-with-illustration-right': ContentIllustrationRight,
  'content-illustration-right': ContentIllustrationRight,
  'job-detail-section': JobDetail,
  'job-detail': JobDetail,
  'card-grid': ResponsiveCardGrid,
  'responsive-card-grid': ResponsiveCardGrid,
  'security-compliance': SecurityCompliance
};

/**
 * Renders a single section
 */
function SectionRenderer({ section, index, onSectionRender }: { section: SectionData; index: number; onSectionRender?: (sectionType: string, index: number) => void }) {
  const Component = COMPONENT_MAP[section.type];
  
  // Use useEffect to call onSectionRender after component mounts
  React.useEffect(() => {
    if (onSectionRender) {
      try { 
        onSectionRender(section.type, index); 
      } catch (error) {
        console.warn('Error in onSectionRender:', error);
      }
    }
  }, [onSectionRender, section.type, index]);
  
  if (!Component) {
    console.warn(`Unknown section type: ${section.type}`);
    return (
      <div className="p-8 bg-red-50 border border-red-200 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Unknown Section Type</h3>
        <p className="text-red-600">Section type "{section.type}" is not supported.</p>
        <p className="text-sm text-red-500 mt-2">Available types: {Object.keys(COMPONENT_MAP).join(', ')}</p>
      </div>
    );
  }

  return (
    <section 
      id={section.id} 
      className={`section-${section.type} ${section.className || ''}`}
    >
      <Component data={section.data || {}} />
    </section>
  );
}

/**
 * Main Sections-Based Renderer
 * Only uses components from sections folder and automatically adds header/footer
 */
export const SectionsBasedRenderer: React.FC<SectionsBasedRendererProps> = ({
  pageData,
  className = '',
  onSectionRender
}) => {
  /**
   * Validates the page data structure
   */
  const validatePageData = (data: PageData): boolean => {
    if (!data.metadata || !data.sections) {
      console.error('Invalid page data structure');
      return false;
    }

    if (!Array.isArray(data.sections) || data.sections.length === 0) {
      console.error('Page must have at least one section');
      return false;
    }

    return true;
  };

  // Validate page data
  if (!validatePageData(pageData)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Invalid Page Data</h1>
          <p className="text-gray-600">The provided page data is not valid.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`sections-based-page ${className}`}>
      {/* Page Metadata - Display as content instead of head tags */}
      <div className="page-metadata" style={{ display: 'none' }}>
        <div data-title={pageData.metadata.title}></div>
        <div data-description={pageData.metadata.description}></div>
        {pageData.metadata.keywords && (
          <div data-keywords={pageData.metadata.keywords.join(', ')}></div>
        )}
      </div>

      {/* Standard Header - Automatically Added */}
      <Header />

      {/* Page Content */}
      <main className="page-content">
        {pageData.sections.map((section, index) => (
          <SectionRenderer
            key={`${section.type}-${index}`}
            section={section}
            index={index}
            onSectionRender={onSectionRender}
          />
        ))}
      </main>

      {/* Standard Footer - Automatically Added */}
      <Footer />
    </div>
  );
};

/**
 * Hook for managing sections-based page state
 */
export const useSectionsBasedPage = (pageData: PageData) => {
  const [renderedSections, setRenderedSections] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSectionRender = React.useCallback((sectionType: string, index: number) => {
    setRenderedSections(prev => [...prev, `${sectionType}-${index}`]);
  }, []);

  const resetPage = React.useCallback(() => {
    setRenderedSections([]);
    setError(null);
  }, []);

  return {
    renderedSections,
    isLoading,
    error,
    handleSectionRender,
    resetPage,
    setError,
    setIsLoading
  };
};

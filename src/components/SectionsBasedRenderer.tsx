'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// Import all components from sections folder
import Hero from './sections/hero';
// Removed per request: Services
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
import InnovationLab from './sections/innovation-lab';
import AwardsRecognition from './sections/awards-recognition';
// Removed per request: ServicePricing
import HeroWithoutButton from './sections/hero_section_without_button';
import ClientSuccessStories from './sections/client-success-stories';
import TechnologyStack from './sections/technology-stack';
// Removed per request: CaseStudies
import BusinessSlider from './sections/business-slider';
import ServicesOverview from './sections/services-overview';
import ClientLogos from './sections/client-logos';
import StatsShowcase from './sections/stats-showcase';
// Removed per request: ProcessTimeline
import TeamExpertise from './sections/team-expertise';
import SuccessSnapshots from './sections/success-snapshots';

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
  'hero': Hero,
  // 'services': Services,
  'testimonials': Testimonials,
  'benefits': Benefits,
  'differentiators': Differentiators,
  'comment': Comment,
  'cta': CTA,
  // 'faq': FAQ,
  'process-workflow': ProcessWorkflow,
  // 'industry-solutions': IndustrySolutions,
  'global-presence': GlobalPresence,
  'contact-info': ContactInfo,
  // 'support-services': SupportServices,
  'resource-center': ResourceCenter,
  // 'partnerships': Partnerships,
  // 'security-compliance': SecurityCompliance,
  'innovation-lab': InnovationLab,
  'awards-recognition': AwardsRecognition,
  // 'service-pricing': ServicePricing,
  'hero-without-button': HeroWithoutButton,
  'client-success-stories': ClientSuccessStories,
  'technology-stack': TechnologyStack,
  // 'case-studies': CaseStudies,
  'business-slider': ServicesOverview, // Map to services-overview for business solutions
  'services-overview': ServicesOverview,
  'client-logos': ClientLogos,
  'stats-showcase': StatsShowcase,
  // 'process-timeline': ProcessTimeline,
  'team-expertise': TeamExpertise,
  'success-snapshots': SuccessSnapshots
};

/**
 * Renders a single section
 */
function SectionRenderer({ section, onSectionRender }: { section: SectionData; onSectionRender?: (sectionType: string, index: number) => void }) {
  const Component = COMPONENT_MAP[section.type];
  
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

  // Call the callback when section is rendered
  if (onSectionRender) {
    onSectionRender(section.type, 0);
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
      {/* Page Metadata */}
      <head>
        <title>{pageData.metadata.title}</title>
        <meta name="description" content={pageData.metadata.description} />
        {pageData.metadata.keywords && (
          <meta name="keywords" content={pageData.metadata.keywords.join(', ')} />
        )}
      </head>

      {/* Standard Header - Automatically Added */}
      <Header />

      {/* Page Content */}
      <main className="page-content">
        {pageData.sections.map((section, index) => (
          <SectionRenderer
            key={`${section.type}-${index}`}
            section={section}
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

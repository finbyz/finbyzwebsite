'use client';

import React from 'react';
import { PageData, SectionData } from '@/types/section-data';

// Sections imports
import Hero from './sections/hero';
import HeroWithoutButton from './sections/hero_section_without_button';
import Testimonials from './sections/testimonials';
import Benefits from './sections/benefits';
import Differentiators from './sections/differentiators';
import Comment from './sections/comment';
import CTA from './sections/cta';
import ProcessWorkflow from './sections/process-workflow';
import GlobalPresence from './sections/global-presence';
import ContactInfo from './sections/contact-info';
import ResourceCenter from './sections/resource-center';
import TechnologyStack from './sections/technology-stack';
import BusinessSlider from './sections/business-slider';
import ClientLogos from './sections/client-logos';
import StatsShowcase from './sections/stats-showcase';
import TeamExpertise from './sections/team-expertise';
import ERPIntroText from './sections/erp-intro-text';
import Text from './sections/forward-contracting-text';
import Video from './sections/video';
import Points from './sections/points';
import ForwardContractingText from './sections/forward-contracting-text';
import ResponsiveCardGrid from './sections/responsive-card-grid';
import ContentIllustrationLeft from './sections/content-illustration-left';
import ContentIllustrationRight from './sections/content-illustration-right';
import JobDetailSection from './sections/job-detail';
import ContactFormSection from './sections/contact-form';
import ContactWithMap from './sections/contact-with-map';
import SecurityCompliance from './sections/security-compliance';

// ============================================================================
// DYNAMIC PAGE RENDERER
// ============================================================================

interface DynamicPageRendererProps {
  pageData: PageData;
  className?: string;
  onSectionRender?: (sectionType: string, index: number) => void;
}

/**
 * Dynamic Page Renderer Component
 * Renders a complete page from JSON data by dynamically loading section components
 */
export const DynamicPageRenderer: React.FC<DynamicPageRendererProps> = ({
  pageData,
  className = '',
  onSectionRender
}) => {
  // Component mapping for dynamic rendering (all sections/*)
  const componentMap: Record<string, React.ComponentType<any>> = {
    'hero': Hero,
    'hero-without-button': HeroWithoutButton,
    'testimonials': Testimonials,
    'benefits': Benefits,
    'differentiators': Differentiators,
    'comment': Comment,
    'cta': CTA,
    'process-workflow': ProcessWorkflow,
    'global-presence': GlobalPresence,
    'contact-info': ContactInfo,
    'resource-center': ResourceCenter,
    'technology-stack': TechnologyStack,
    'business-slider': BusinessSlider,
    'client-logos': ClientLogos,
    'stats-showcase': StatsShowcase,
    'team-expertise': TeamExpertise,
    'erp-intro-text': ERPIntroText,
    'text': Text,
    'video': Video,
    'points': Points,
    'forward-contracting-text': ForwardContractingText,
    'responsive-card-grid': ResponsiveCardGrid,
    'content-illustration-left': ContentIllustrationLeft,
    'content-illustration-right': ContentIllustrationRight,
    'job-detail': JobDetailSection,
    'contact-form': ContactFormSection,
    'contact-with-map': ContactWithMap,
    'security-compliance': SecurityCompliance
  };

  /**
   * Renders a single section
   */
  const renderSection = (section: SectionData, index: number): React.ReactElement | null => {
    const Component = componentMap[section.type];
    
    if (!Component) {
      console.warn(`Unknown section type: ${section.type}`);
      return null;
    }

    // Defer callback to after commit to avoid setState during render
    React.useEffect(() => {
      if (onSectionRender) onSectionRender(section.type, index);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Component
        key={`${section.type}-${index}`}
        data={section.data}
        className={`section-${section.type} section-index-${index}`}
      />
    );
  };

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
    <div className={`dynamic-page ${className}`}>
      {/* Page Metadata - Display as content instead of head tags */}
      <div className="page-metadata" style={{ display: 'none' }}>
        <div data-title={pageData.metadata.title}></div>
        <div data-description={pageData.metadata.description}></div>
        {pageData.metadata.keywords && (
          <div data-keywords={pageData.metadata.keywords.join(', ')}></div>
        )}
      </div>

      {/* Render all sections */}
      <main className="page-content">
        {pageData.sections.map((section, index) => 
          renderSection(section, index)
        )}
      </main>
    </div>
  );
};

/**
 * Hook for managing dynamic page state
 */
export const useDynamicPage = (pageData: PageData) => {
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

/**
 * Error Boundary for Dynamic Page Renderer
 */
export class DynamicPageErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Dynamic page renderer error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Page Render Error</h1>
            <p className="text-gray-600 mb-4">
              Something went wrong while rendering the page.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default DynamicPageRenderer;

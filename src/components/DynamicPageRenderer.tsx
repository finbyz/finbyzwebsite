'use client';

import React from 'react';
import { PageData, SectionData, COMPONENT_MAP } from '@/types/section-data';
import Hero from './sections/hero';
// Removed per request: Services
import Testimonials from './sections/testimonials';
// Removed per request: SecurityCompliance
import CTA from './sections/cta';
import ResponsiveCardGrid from './sections/responsive-card-grid';
// Removed per request: FAQ

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
  // Component mapping for dynamic rendering
  const componentMap: Record<string, React.ComponentType<any>> = {
    hero: Hero,
    // services: Services,
    testimonials: Testimonials,
    // 'security-compliance': SecurityCompliance,
    cta: CTA,
    'responsive-card-grid': ResponsiveCardGrid,
    // faq: FAQ
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

    // Call the callback when section is rendered
    if (onSectionRender) {
      onSectionRender(section.type, index);
    }

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
      {/* Page Metadata */}
      <head>
        <title>{pageData.metadata.title}</title>
        <meta name="description" content={pageData.metadata.description} />
        {pageData.metadata.keywords && (
          <meta name="keywords" content={pageData.metadata.keywords.join(', ')} />
        )}
      </head>

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

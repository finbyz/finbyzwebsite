'use client';

import React from 'react';
import { HeroSection, ServiceCards, StatsSection, CallToAction } from './ui/ComponentShowcase';
import { PricingCards, ContactForm } from './ui/ComponentShowcase2';
import { TimelineSection, TimelineCarousel, TeamSection, BlogGrid, FAQSection } from './ui/ComponentShowcase3';
import { DataTable, ModalDialog, NotificationToast } from './ui/ComponentShowcase4';
import { SearchBar, FilterTags, Breadcrumbs, SidebarMenu, FooterLinks, SocialMediaIcons, LoadingSpinner, ErrorBoundary, TooltipComponent } from './ui/ComponentShowcase5';
import Hero from './sections/hero_section_without_button';
import Testimonials from './sections/testimonials';
import Benefits from './sections/benefits';
import Differentiators from './sections/differentiators';
import Comment from './sections/comment';
import ClientSuccessStories from './sections/client-success-stories';
import TechnologyStack from './sections/technology-stack';
import BusinessSlider from './sections/business-slider';
import ServicesOverview from './sections/services-overview';
import FileUpload from './ui/FileUpload';
import ERPModules from './ui/ERPModules';

// ============================================================================
// HTML COMPONENTS RENDERER
// ============================================================================

interface ComponentData {
  type: string;
  component: string;
  data: any;
}

interface HtmlSection {
  type: string;
  components: ComponentData[];
}

interface HtmlPageData {
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
    companyName?: string;
    viewport?: string;
  };
  sections: HtmlSection[];
}

interface HtmlComponentsRendererProps {
  pageData: HtmlPageData;
  className?: string;
  onSectionRender?: (sectionType: string, index: number) => void;
}

/**
 * Renders a single component based on its type
 */
function ComponentRenderer({ componentData }: { componentData: ComponentData }) {
  const { component, data } = componentData;

  // Component mapping for html-components format
  const componentMap: { [key: string]: React.ComponentType<any> } = {
    'Hero': HeroSection,
    'ServiceCards': ServiceCards,
    'StatsSection': StatsSection,
    'CallToAction': CallToAction,
    'PricingCards': PricingCards,
    'ContactForm': ContactForm,
    'TimelineSection': TimelineSection,
    'TimelineCarousel': TimelineCarousel,
    'TeamSection': TeamSection,
    'BlogGrid': BlogGrid,
    'FAQSection': FAQSection,
    'DataTable': DataTable,
    'ModalDialog': ModalDialog,
    'NotificationToast': NotificationToast,
    'SearchBar': SearchBar,
    'FilterTags': FilterTags,
    'Breadcrumbs': Breadcrumbs,
    'SidebarMenu': SidebarMenu,
    'FooterLinks': FooterLinks,
    'SocialMediaIcons': SocialMediaIcons,
    'LoadingSpinner': LoadingSpinner,
    'ErrorBoundary': ErrorBoundary,
    'TooltipComponent': TooltipComponent,
    'HeroSection': Hero,
    'Testimonials': Testimonials,
    'Benefits': Benefits,
    'Differentiators': Differentiators,
    'Comment': Comment,
    'ClientSuccessStories': ClientSuccessStories,
    'TechnologyStack': TechnologyStack,
    'BusinessSlider': BusinessSlider,
    'ServicesOverview': ServicesOverview,
    'FileUpload': FileUpload,
    'ERPModules': ERPModules,
    // Add more component mappings as needed
    'Banner': ({ data }: any) => (
      <div className="bg-blue-600 text-white p-4 text-center">
        <h3 className="text-lg font-semibold">{data.headline}</h3>
        <p className="text-blue-100">{data.subtext}</p>
        <div className="mt-3 space-x-3">
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium">
            {data.primaryButton}
          </button>
          <button className="border border-white text-white px-4 py-2 rounded font-medium">
            {data.secondaryButton}
          </button>
        </div>
      </div>
    ),
    'Services': ({ data }: any) => (
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{data.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-12">{data.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services?.map((service: any, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.capabilities?.map((cap: any, capIndex: number) => (
                    <span key={capIndex} className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {cap.icon} {cap.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'Card': ({ data }: any) => (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="text-sm text-gray-500 mb-4">{data.date}</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium">
          {data.buttonText}
        </button>
      </div>
    ),
    'Feature': ({ data }: any) => (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-3xl mb-3">{data.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
        <p className="text-gray-600 mb-3">{data.description}</p>
        <a href={data.link} className="text-blue-600 hover:underline text-sm">
          {data.linkText}
        </a>
      </div>
    ),
    'Stats': ({ data }: any) => (
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-600 mb-2">{data.value}</div>
        <div className="text-lg font-semibold mb-1">{data.label}</div>
        <div className="text-gray-600 text-sm">{data.description}</div>
      </div>
    ),
    'Testimonial': ({ data }: any) => (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">
            {data.avatar}
          </div>
          <div>
            <div className="font-semibold">{data.author}</div>
            <div className="text-sm text-gray-600">{data.company}</div>
          </div>
        </div>
        <div className="flex mb-3">
          {[...Array(data.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
        <p className="text-gray-700 italic">"{data.quote}"</p>
      </div>
    ),
    'Pricing': ({ data }: any) => (
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
        <h3 className="text-xl font-semibold mb-3">{data.planName}</h3>
        <div className="text-3xl font-bold text-blue-600 mb-1">{data.price}</div>
        <div className="text-gray-600 mb-4">{data.period}</div>
        <ul className="mb-6 space-y-2">
          {data.features?.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="w-full bg-blue-600 text-white py-2 rounded font-medium">
          {data.buttonText}
        </button>
      </div>
    ),
    'Contact': ({ data }: any) => (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{data.nameLabel}</label>
            <input
              type="text"
              placeholder={data.namePlaceholder}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{data.emailLabel}</label>
            <input
              type="email"
              placeholder={data.emailPlaceholder}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{data.messageLabel}</label>
            <textarea
              placeholder={data.messagePlaceholder}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-medium"
          >
            {data.submitText}
          </button>
        </form>
      </div>
    ),
    'CTA': ({ data }: any) => (
      <div className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-xl text-blue-100 mb-8">{data.description}</p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg">
            {data.primaryButton}
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg">
            {data.secondaryButton}
          </button>
        </div>
      </div>
    )
  };

  const Component = componentMap[component];

  if (!Component) {
    console.warn(`Component "${component}" not found`);
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Component "{component}" not found: {component}</p>
      </div>
    );
  }

  return <Component data={data} />;
}

/**
 * Renders a section containing multiple components
 */
function SectionRenderer({ section, onSectionRender }: { section: HtmlSection; onSectionRender?: (sectionType: string, index: number) => void }) {
  if (onSectionRender) {
    onSectionRender(section.type, 0);
  }

  return (
    <div className={`section-${section.type}`}>
      {section.components.map((componentData, index) => (
        <ComponentRenderer key={index} componentData={componentData} />
      ))}
    </div>
  );
}

/**
 * Main HTML Components Renderer
 */
export const HtmlComponentsRenderer: React.FC<HtmlComponentsRendererProps> = ({
  pageData,
  className = '',
  onSectionRender
}) => {
  /**
   * Validates the page data structure
   */
  const validatePageData = (data: HtmlPageData): boolean => {
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
    <div className={`html-components-page ${className}`}>
      {/* Page Metadata */}
      <head>
        <title>{pageData.metadata.title}</title>
        <meta name="description" content={pageData.metadata.description} />
        {pageData.metadata.keywords && (
          <meta name="keywords" content={pageData.metadata.keywords.join(', ')} />
        )}
        {pageData.metadata.viewport && (
          <meta name="viewport" content={pageData.metadata.viewport} />
        )}
      </head>

      {/* Render all sections */}
      <main className="page-content">
        {pageData.sections.map((section, index) => (
          <SectionRenderer
            key={`${section.type}-${index}`}
            section={section}
            onSectionRender={onSectionRender}
          />
        ))}
      </main>
    </div>
  );
};

/**
 * Hook for managing HTML components page state
 */
export const useHtmlComponentsPage = (pageData: HtmlPageData) => {
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

'use client';

import React, { useState } from 'react';
import { 
  HeroSection,
  ServiceCards,
  StatsSection,
  CallToAction,
  AccordionSection,
  ImageGallery,
  TestimonialCarousel
} from '@/components/ui/ComponentShowcase';
import Comment from "@/components/sections/comment";
import Features from "@/app/features";
import ClientSuccessStories from "@/components/sections/client-success-stories";
import TechnologyStack from "@/components/sections/technology-stack";
import {
  PricingCards,
  ContactForm
} from '@/components/ui/ComponentShowcase2';

import {
  TimelineSection,
  TimelineCarousel,
  TeamSection,
  BlogGrid,
  FAQSection
} from '@/components/ui/ComponentShowcase3';

import {
  DataTable,
  ModalDialog,
  NotificationToast
} from '@/components/ui/ComponentShowcase4';

import {
  SearchBar,
  FilterTags,
  Breadcrumbs,
  SidebarMenu,
  FooterLinks,
  SocialMediaIcons,
  LoadingSpinner,
  ErrorBoundary,
  TooltipComponent
} from '@/components/ui/ComponentShowcase5';

import Hero from "@/components/sections/hero_section_without_button";
import Testimonials from "@/components/sections/testimonials";
import { componentSchemas, getAllCategories, getComponentSchemasByCategory } from '@/lib/componentSchemas';
import { componentManifest, getComponentManifest } from '@/lib/componentManifest';
import { ChevronDown, ChevronRight, Copy, Eye, Code, BookOpen } from 'lucide-react';
import BusinessSlider from '@/components/sections/business-slider';
import ServicesOverview from "@/components/sections/services-overview";
import FileUpload from "@/components/ui/FileUpload";
import ERPModules from "@/components/ui/ERPModules";

// Import additional components from ComponentShowcase files
import { 
  ClientLogosCarousel
} from '@/components/ui/ComponentShowcase';

// Import additional components from other ComponentShowcase files
import { AlertBanners } from '@/components/ui/ComponentShowcase4';
import { FullScreenTimeline } from '@/components/ui/ComponentShowcase3';

// Import all section components
import Benefits from "@/components/sections/benefits";
import ClientLogos from "@/components/sections/client-logos";
import StatsShowcase from "@/components/sections/stats-showcase";
import TeamExpertise from "@/components/sections/team-expertise";
import AwardsRecognition from "@/components/sections/awards-recognition";
import InnovationLab from "@/components/sections/innovation-lab";
import ResourceCenter from "@/components/sections/resource-center";
import ContactInfo from "@/components/sections/contact-info";
import GlobalPresence from "@/components/sections/global-presence";
import CTA from "@/components/sections/cta";
import Differentiators from "@/components/sections/differentiators";
// Removed components per request
// import CaseStudies from "@/components/sections/case-studies";
// import ProcessTimeline from "@/components/sections/process-timeline";
// import IndustrySolutions from "@/components/sections/industry-solutions";
// import ServicePricing from "@/components/sections/service-pricing";
// import Services from "@/components/sections/services";
// import SecurityCompliance from "@/components/sections/security-compliance";
// import Partnerships from "@/components/sections/partnerships";
// import SupportServices from "@/components/sections/support-services";
// import FAQ from "@/components/sections/faq";
// import ProcessWorkflow from "@/components/sections/process-workflow";
import HeroSectionWithoutButton from "@/components/sections/hero_section_without_button";
import SuccessSnapshots from "@/components/sections/success-snapshots";

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedSchemas, setExpandedSchemas] = useState<Set<string>>(new Set());
  const [showPreview, setShowPreview] = useState<Set<string>>(new Set());
  const [showSchema, setShowSchema] = useState<Set<string>>(new Set());
  const [showAIDocs, setShowAIDocs] = useState<Set<string>>(new Set());

  const categories = ['all', ...getAllCategories()];
  const filteredSchemas = selectedCategory === 'all' 
    ? componentSchemas 
    : getComponentSchemasByCategory(selectedCategory);

  // Hide specific sections from the Components page
  const hiddenIds = new Set<string>([
    'services-overview',
    'erp-modules',
    'hero-section',
    'testimonial-carousel',
    'data-table',
    'modal-dialog',
    'notification-toast',
    'search-bar',
    'filter-tags',
    'breadcrumbs',
    'sidebar-menu',
    'error-boundary',
    'tooltip-component',
    'industry-solutions',
    'service-pricing',
    'case-studies',
    'security-compliance',
    'partnerships',
    'support-services',
    'process-timeline',
    'process-workflow',
    'services',
    'faq'
  ]);
  const schemasToRender = filteredSchemas.filter((schema) => !hiddenIds.has(schema.id));

  const toggleSchema = (id: string) => {
    const newExpanded = new Set(expandedSchemas);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSchemas(newExpanded);
  };

  const togglePreview = (id: string) => {
    const newPreview = new Set(showPreview);
    if (newPreview.has(id)) {
      newPreview.delete(id);
    } else {
      newPreview.add(id);
    }
    setShowPreview(newPreview);
  };

  const toggleSchemaView = (id: string) => {
    const newSchema = new Set(showSchema);
    if (newSchema.has(id)) {
      newSchema.delete(id);
    } else {
      newSchema.add(id);
    }
    setShowSchema(newSchema);
  };

  const toggleAIDocs = (id: string) => {
    const newAIDocs = new Set(showAIDocs);
    if (newAIDocs.has(id)) {
      newAIDocs.delete(id);
    } else {
      newAIDocs.add(id);
    }
    setShowAIDocs(newAIDocs);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const renderComponentPreview = (schema: any) => {
    const componentMap: { [key: string]: React.ComponentType<any> } = {
      'hero-section': HeroSection,
      'comment': Comment,
      'hero_section_without_button1': Hero,
      'services-overview': ServicesOverview,
      'service-cards': ServiceCards,
      'stats-section': Benefits,
      'call-to-action': CallToAction,
      'business-slider': BusinessSlider,
      'accordion-section': AccordionSection,
      'image-gallery': ImageGallery,
      'testimonial-carousel': TestimonialCarousel,
      'testimonials': Testimonials,
      'features': Features,
      'client-success-stories': ClientSuccessStories,
      'technology-stack': TechnologyStack,
      // 'case-studies': CaseStudies,
      'pricing-cards': PricingCards,
      'contact-form': ContactForm,
      'timeline-section': TimelineCarousel,
      'team-section': TeamSection,
      'blog-grid': BlogGrid,
      'faq-section': FAQSection,
      'data-table': DataTable,
      'modal-dialog': ModalDialog,
      'notification-toast': NotificationToast,
      'search-bar': SearchBar,
      'filter-tags': FilterTags,
      'breadcrumbs': Breadcrumbs,
      'sidebar-menu': SidebarMenu,
      'footer-links': FooterLinks,
      'social-media-icons': SocialMediaIcons,
      'loading-spinner': LoadingSpinner,
      'error-boundary': ErrorBoundary,
      'tooltip-component': TooltipComponent,
      'file-upload': FileUpload,
      'erp-modules': ERPModules,
      // New section components
      'benefits': Benefits,
      'client-logos': ClientLogos,
      'stats-showcase': StatsShowcase,
      // 'process-timeline': ProcessTimeline,
      'team-expertise': TeamExpertise,
      // 'industry-solutions': IndustrySolutions,
      // 'service-pricing': ServicePricing,
      // 'services': Services,
      'awards-recognition': AwardsRecognition,
      'innovation-lab': InnovationLab,
      // 'security-compliance': SecurityCompliance,
      // 'partnerships': Partnerships,
      'resource-center': ResourceCenter,
      // 'support-services': SupportServices,
      'contact-info': ContactInfo,
      'global-presence': GlobalPresence,
      'cta': CTA,
      'differentiators': Differentiators,
      // 'faq': FAQ,
      // 'process-workflow': ProcessWorkflow,
      'hero_section_without_button': HeroSectionWithoutButton,
      'success-snapshots': SuccessSnapshots,
      // Additional components from ComponentShowcase files
      'client-logos-carousel': ClientLogosCarousel,
      'alert-banners': AlertBanners,
      'full-screen-timeline': FullScreenTimeline
    };

    const Component = componentMap[schema.id];
    return Component ? <Component data={getComponentManifest(schema.id)} /> : <div>Component not found</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Component Library & JSON Schemas
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          A comprehensive collection of reusable UI components with their JSON structure definitions
        </p>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Component Schemas */}
        <div className="space-y-6">
          {schemasToRender.map((schema) => (
            <div key={schema.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{schema.name}</h3>
                    <p className="text-gray-600 mt-1">{schema.description}</p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                      {schema.category}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => togglePreview(schema.id)}
                      className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      {showPreview.has(schema.id) ? 'Hide' : 'Preview'}
                    </button>
                    <button
                      onClick={() => toggleSchemaView(schema.id)}
                      className="flex items-center px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      {showSchema.has(schema.id) ? 'Hide' : 'Schema'}
                    </button>
                    <button
                      onClick={() => toggleAIDocs(schema.id)}
                      className="flex items-center px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      {showAIDocs.has(schema.id) ? 'Hide' : 'AI Docs'}
                    </button>
                    <button
                      onClick={() => toggleSchema(schema.id)}
                      className="flex items-center px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      {expandedSchemas.has(schema.id) ? (
                        <ChevronDown className="w-4 h-4 mr-1" />
                      ) : (
                        <ChevronRight className="w-4 h-4 mr-1" />
                      )}
                      JSON
                    </button>
                  </div>
                </div>
              </div>

              {showPreview.has(schema.id) && (
                <div className="p-6">
                  {renderComponentPreview(schema)}
                </div>
              )}

              {showSchema.has(schema.id) && (
                <div className="p-6 bg-gray-50">
                  <pre className="text-sm whitespace-pre-wrap">
                    {JSON.stringify(getComponentManifest(schema.id), null, 2)}
                  </pre>
                </div>
              )}

              {expandedSchemas.has(schema.id) && (
                <div className="p-6 bg-green-50 border-t border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-green-800">JSON Data</h4>
                    <button
                      onClick={() => copyToClipboard(JSON.stringify(getComponentManifest(schema.id)?.example, null, 2))}
                      className="flex items-center px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy JSON
                    </button>
                  </div>
                  <pre className="text-sm whitespace-pre-wrap bg-white p-4 rounded-lg border border-green-200 overflow-x-auto">
                    {JSON.stringify(getComponentManifest(schema.id)?.example, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
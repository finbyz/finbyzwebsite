'use client';

import React, { useState } from 'react';
import { componentSchemas, getAllCategories, getComponentSchemasByCategory } from '@/lib/componentSchemas';
import { componentManifest, getComponentManifest } from '@/lib/componentManifest';
import { ChevronDown, ChevronRight, Copy, Eye, Code, BookOpen } from 'lucide-react';

// Import actual components that exist
import Testimonials from "@/components/sections/testimonials";
import BusinessSlider from '@/components/sections/business-slider';
import Benefits from "@/components/sections/benefits";
import ClientLogos from "@/components/sections/client-logos";
import StatsShowcase from "@/components/sections/stats-showcase";
import TeamExpertise from "@/components/sections/team-expertise";

import ResourceCenter from "@/components/sections/resource-center";
import ContactInfo from "@/components/sections/contact-info";
import GlobalPresence from "@/components/sections/global-presence";
import CTA from "@/components/sections/cta";
import Differentiators from "@/components/sections/differentiators";
import HeroSectionWithoutButton from "@/components/sections/hero_section_without_button";
import Hero from "@/components/sections/hero";

import Comment from "@/components/sections/comment";
import ProcessWorkflow from "@/components/sections/process-workflow";

import TechnologyStack from "@/components/sections/technology-stack";
import ERPIntroText from "@/components/sections/erp-intro-text";
import ContentIllustrationRight from "@/components/sections/content-illustration-right";
import ContentIllustrationLeft from "@/components/sections/content-illustration-left";
import FileUpload from "@/components/ui/FileUpload";
import { ServiceCards, StatsSection, CallToAction, AccordionSection, TestimonialCarousel, ImageGallery } from "@/components/ui/ComponentShowcase";
import { Services } from "@/utils/components";
import Features from "@/app/features";
import { PricingCards, ContactForm } from "@/components/ui/ComponentShowcase2";
import { TimelineSection, TeamSection, BlogGrid, FAQSection } from "@/components/ui/ComponentShowcase3";
import TimelineComponent from "@/components/ui/TimelineComponent";
import { ModalDialog, NotificationToast } from "@/components/ui/ComponentShowcase4";
import { SearchBar, FilterTags, Breadcrumbs, SidebarMenu, FooterLinks, SocialMediaIcons, LoadingSpinner, ErrorBoundary, TooltipComponent } from "@/components/ui/ComponentShowcase5";

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

  // Show all components on the Components page
  const schemasToRender = filteredSchemas;

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
      'hero_section_without_button_alt': HeroSectionWithoutButton,
      'hero-section': Hero,
      'testimonials': Testimonials,
      'business-slider': BusinessSlider,
      'benefits': Benefits,
      'client-logos': ClientLogos,
      'stats-showcase': StatsShowcase,
      'team-expertise': TeamExpertise,

      
      'resource-center': ResourceCenter,
      'contact-info': ContactInfo,
      'global-presence': GlobalPresence,
      'cta': CTA,
      'differentiators': Differentiators,

      'comment': Comment,

      'technology-stack': TechnologyStack,
      'erp-intro-text': ERPIntroText,
      'content-illustration-right': ContentIllustrationRight,
      'content-illustration-left': ContentIllustrationLeft,
      'file-upload': FileUpload,
      'services': Services,
      'features': Features,
      'service-cards': ServiceCards,
      'stats-section': StatsSection,
      'call-to-action': CallToAction,
      'accordion-section': AccordionSection,
      'testimonial-carousel': TestimonialCarousel,
      'pricing-cards': PricingCards,
      'contact-form': ContactForm,
      'timeline-section': TimelineSection,
      'process-timeline': TimelineComponent,
      'image-gallery': ImageGallery,
      'team-section': TeamSection,
      'blog-grid': BlogGrid,
      'faq-section': FAQSection,

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
      
      // Add missing mappings for components that exist in schemas but not in componentMap
      'process-workflow': ProcessWorkflow,
      'faq': FAQSection, // Map 'faq' to 'FAQSection' component
    };

    const Component = componentMap[schema.id];
    
    console.log('Component lookup:', {
      id: schema.id,
      component: Component,
      componentType: typeof Component,
      isReactComponent: Component && typeof Component === 'function' && Component.prototype?.isReactComponent
    });
    
    if (Component) {
      const manifest = getComponentManifest(schema.id);
      try {
        // Validate that Component is a valid React component
        if (typeof Component !== 'function') {
          throw new Error(`Component is not a function: ${typeof Component}`);
        }
        
        return (
          <div className="p-6">
            <Component data={manifest?.example?.data || {}} />
          </div>
        );
      } catch (error: any) {
        console.error('Error rendering component:', error);
        return (
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">Error rendering component: {schema.name}</p>
            <p className="text-sm text-red-600">{error?.message || 'Unknown error'}</p>
          </div>
        );
      }
    } else {
      // Fallback to documentation view if component doesn't exist
      const manifest = getComponentManifest(schema.id);
      return (
        <div className="p-6 bg-gray-100 rounded-lg">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Component Preview</h4>
            <p className="text-gray-600">Component: {schema.name}</p>
            <p className="text-sm text-gray-500">ID: {schema.id}</p>
            <p className="text-sm text-orange-600 mt-2">⚠️ Component not available for preview</p>
          </div>
          
          {manifest && (
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Purpose:</h5>
                <p className="text-sm text-gray-600">{manifest.purpose}</p>
              </div>
              
              {manifest.optimalUsage && manifest.optimalUsage.length > 0 && (
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Optimal Usage:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {manifest.optimalUsage.map((usage: string, index: number) => (
                      <li key={index}>{usage}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {manifest.notes && (
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Notes:</h5>
                  <p className="text-sm text-gray-600">{manifest.notes}</p>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
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
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Component Schema</h4>
                  <pre className="text-sm whitespace-pre-wrap bg-white p-4 rounded-lg border overflow-x-auto">
                    {JSON.stringify(getComponentManifest(schema.id), null, 2)}
                  </pre>
                </div>
              )}

              {showAIDocs.has(schema.id) && (
                <div className="p-6 bg-purple-50">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">AI Documentation</h4>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-gray-700">
                      This component can be used with AI-powered page builders and content management systems.
                      The JSON schema provides structured data that AI systems can understand and manipulate.
                    </p>
                  </div>
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
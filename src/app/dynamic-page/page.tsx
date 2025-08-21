'use client';

import React from 'react';
import { DynamicPageRenderer, DynamicPageErrorBoundary, useDynamicPage } from '@/components/DynamicPageRenderer';
import { PageData } from '@/types/section-data';
import samplePageData from '../../../data/sample-landing-page.json';

// ============================================================================
// DYNAMIC PAGE DEMONSTRATION
// ============================================================================

export default function DynamicPageDemo() {
  const pageData = samplePageData as PageData;
  const { renderedSections, handleSectionRender } = useDynamicPage(pageData);

  return (
    <DynamicPageErrorBoundary>
      <div className="min-h-screen">
        {/* Debug Panel */}
        <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg max-w-xs">
          <h3 className="font-semibold text-sm text-gray-800 mb-2">Debug Info</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <div>Page: {pageData.metadata.title}</div>
            <div>Sections: {pageData.sections.length}</div>
            <div>Rendered: {renderedSections.length}</div>
            <div className="text-xs text-gray-500 mt-2">
              {renderedSections.map((section, index) => (
                <div key={index} className="truncate">
                  ✓ {section}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <DynamicPageRenderer
          pageData={pageData}
          onSectionRender={handleSectionRender}
          className="dynamic-page-demo"
        />
      </div>
    </DynamicPageErrorBoundary>
  );
}

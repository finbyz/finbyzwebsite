'use client';

import React from 'react';
import { SectionsBasedRenderer, useSectionsBasedPage } from '@/components/SectionsBasedRenderer';
import { DynamicPageErrorBoundary } from '@/components/DynamicPageRenderer';
import pageData from './page-data.json';

// ============================================================================
// DYNAMIC PAGE: TEST777777777777777777777777
// ============================================================================

export default function Test777777777777777777777777Page() {
  const { renderedSections, handleSectionRender } = useSectionsBasedPage(pageData);

  return (
    <DynamicPageErrorBoundary>
      <div className="min-h-screen">
        {/* Page Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                {pageData.metadata.title}
              </h1>
              <p className="text-sm text-gray-600">
                {pageData.metadata.description}
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Generated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </header>

        {/* Dynamic Page Content - Using SectionsBasedRenderer */}
        <SectionsBasedRenderer
          pageData={pageData}
          onSectionRender={handleSectionRender}
          className="dynamic-page-test777777777777777777777777"
        />

        {/* Debug Panel */}
        <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg max-w-xs">
          <h3 className="font-semibold text-sm text-gray-800 mb-2">Page Info</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <div>Page: test777777777777777777777777</div>
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
      </div>
    </DynamicPageErrorBoundary>
  );
}

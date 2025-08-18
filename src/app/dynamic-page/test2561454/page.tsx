'use client';

import React from 'react';
import { SectionsBasedRenderer, useSectionsBasedPage } from '@/components/SectionsBasedRenderer';
import { PageData } from '@/types/section-data';
import pageData from './page-data.json';

// ============================================================================
// DYNAMIC PAGE: TEST2561454
// ============================================================================

export default function Test2561454Page() {
  const { renderedSections, handleSectionRender } = useSectionsBasedPage(pageData as PageData);

  return (
    <div className="min-h-screen">
      {/* Dynamic Page Content with Standard Header/Footer */}
      <SectionsBasedRenderer
        pageData={pageData as PageData}
        onSectionRender={handleSectionRender}
        className="dynamic-page-test2561454"
      />

      {/* Debug Panel */}
      <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg max-w-xs">
        <h3 className="font-semibold text-sm text-gray-800 mb-2">Page Info</h3>
        <div className="text-xs text-gray-600 space-y-1">
          <div>Page: test2561454</div>
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
  );
}

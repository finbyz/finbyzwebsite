import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { PageData, SectionData } from '@/types/section-data';

// ============================================================================
// PAGE GENERATION API
// ============================================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    if (!body.pageName || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: pageName and content' },
        { status: 400 }
      );
    }

    const { pageName, content } = body;

    // Validate the content structure
    if (!content.metadata || !content.sections || !Array.isArray(content.sections)) {
      return NextResponse.json(
        { error: 'Invalid content structure. Must include metadata and sections array' },
        { status: 400 }
      );
    }

    // Generate the page
    const result = await generateDynamicPage(pageName, content);

    return NextResponse.json({
      success: true,
      message: `Page '${pageName}' generated successfully`,
      data: {
        pageName,
        pageUrl: `/dynamic-page/${pageName}`,
        sectionsCount: content.sections.length,
        sections: content.sections.map((s: SectionData) => s.type),
        generatedFiles: result.generatedFiles
      }
    });

  } catch (error) {
    console.error('Error generating page:', error);
    return NextResponse.json(
      { error: 'Failed to generate page', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * Generates a dynamic page with the given content
 */
async function generateDynamicPage(pageName: string, content: PageData) {
  const generatedFiles: string[] = [];
  
  try {
    // Create the dynamic page directory
    const pageDir = join(process.cwd(), 'src', 'app', 'dynamic-page', pageName);
    await mkdir(pageDir, { recursive: true });

    // Generate the page.tsx file
    const pageContent = generatePageComponent(pageName, content);
    const pageFilePath = join(pageDir, 'page.tsx');
    await writeFile(pageFilePath, pageContent, 'utf-8');
    generatedFiles.push(pageFilePath);

    // Generate the layout.tsx file if it doesn't exist
    const layoutContent = generateLayoutComponent(content.metadata);
    const layoutFilePath = join(pageDir, 'layout.tsx');
    await writeFile(layoutFilePath, layoutContent, 'utf-8');
    generatedFiles.push(layoutFilePath);

    // Generate a JSON data file for the page
    const dataContent = JSON.stringify(content, null, 2);
    const dataFilePath = join(pageDir, 'page-data.json');
    await writeFile(dataFilePath, dataContent, 'utf-8');
    generatedFiles.push(dataFilePath);

    return { generatedFiles };

  } catch (error) {
    throw new Error(`Failed to generate page files: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generates the main page component
 */
function generatePageComponent(pageName: string, pageData: any): string {
  // Detect the data format
  const isHtmlComponentsFormat = pageData.sections && 
    pageData.sections.length > 0 && 
    pageData.sections[0].type === 'html-components';

  // Convert kebab-case to PascalCase for function name
  const functionName = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  if (isHtmlComponentsFormat) {
    // Generate HTML Components renderer
    return `'use client';

import React from 'react';
import { HtmlComponentsRenderer, useHtmlComponentsPage } from '@/components/HtmlComponentsRenderer';
import { DynamicPageErrorBoundary } from '@/components/DynamicPageRenderer';
import pageData from './page-data.json';

// ============================================================================
// DYNAMIC PAGE: ${pageName.toUpperCase()}
// ============================================================================

export default function ${functionName}Page() {
  const { renderedSections, handleSectionRender } = useHtmlComponentsPage(pageData);

  return (
    <DynamicPageErrorBoundary>
      <div className="min-h-screen">
        {/* Dynamic Page Content */}
        <HtmlComponentsRenderer
          pageData={pageData}
          onSectionRender={handleSectionRender}
          className="dynamic-page-${pageName}"
        />

        {/* Debug Panel */}
        <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg max-w-xs">
          <h3 className="font-semibold text-sm text-gray-800 mb-2">Page Info</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <div>Page: ${pageName}</div>
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
`;
  } else {
    // Generate SectionsBasedRenderer (includes standard Header/Footer and supports all sections)
    return `'use client';

import React from 'react';
import { SectionsBasedRenderer, useSectionsBasedPage } from '@/components/SectionsBasedRenderer';
import { PageData } from '@/types/section-data';
import pageData from './page-data.json';

// ============================================================================
// DYNAMIC PAGE: ${pageName.toUpperCase()}
// ============================================================================

export default function ${functionName}Page() {
  const { renderedSections, handleSectionRender } = useSectionsBasedPage(pageData as PageData);

  return (
    <div className="min-h-screen">
      {/* Dynamic Page Content with Standard Header/Footer */}
      <SectionsBasedRenderer
        pageData={pageData as PageData}
        onSectionRender={handleSectionRender}
        className="dynamic-page-${pageName}"
      />

      {/* Debug Panel */}
      <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg max-w-xs">
        <h3 className="font-semibold text-sm text-gray-800 mb-2">Page Info</h3>
        <div className="text-xs text-gray-600 space-y-1">
          <div>Page: ${pageName}</div>
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
`;
  }
}

/**
 * Generates the layout component for the page
 */
function generateLayoutComponent(metadata: PageData['metadata']): string {
  const title = metadata.title.replace(/'/g, "\\'");
  const description = metadata.description.replace(/'/g, "\\'");
  const keywords = metadata.keywords ? JSON.stringify(metadata.keywords) : '[]';
  
  return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  keywords: ${keywords},
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
`;
}

// ============================================================================
// PAGE FORMAT DETECTOR UTILITY
// ============================================================================

/**
 * Detects the format of page data to determine which renderer to use
 * @param pageData - The page data to analyze
 * @returns Object with format information and recommended renderer
 */
export function detectPageFormat(pageData: any) {
  if (!pageData || typeof pageData !== 'object') {
    return {
      format: 'unknown',
      renderer: 'none',
      reason: 'Invalid page data structure'
    };
  }

  // Check for html-components format
  if (pageData.sections && Array.isArray(pageData.sections)) {
    const hasHtmlComponents = pageData.sections.some((section: any) => 
      section.type === 'html-components' && section.components
    );

    if (hasHtmlComponents) {
      return {
        format: 'html-components',
        renderer: 'HtmlComponentsRenderer',
        reason: 'Contains html-components sections with nested components array',
        metadata: {
          sections: pageData.sections.length,
          componentTypes: pageData.sections
            .filter((s: any) => s.type === 'html-components')
            .flatMap((s: any) => s.components?.map((c: any) => c.component) || [])
        }
      };
    }
  }

  // Check for standard PageData format
  if (pageData.sections && Array.isArray(pageData.sections)) {
    const hasStandardSections = pageData.sections.some((section: any) => 
      section.type && section.data && !section.components
    );

    if (hasStandardSections) {
      return {
        format: 'standard',
        renderer: 'DynamicPageRenderer',
        reason: 'Contains standard sections with type and data properties',
        metadata: {
          sections: pageData.sections.length,
          sectionTypes: pageData.sections.map((s: any) => s.type)
        }
      };
    }
  }

  // Check for mixed format
  if (pageData.sections && Array.isArray(pageData.sections)) {
    const hasHtmlComponents = pageData.sections.some((section: any) => 
      section.type === 'html-components'
    );
    const hasStandardSections = pageData.sections.some((section: any) => 
      section.type && section.data && !section.components
    );

    if (hasHtmlComponents && hasStandardSections) {
      return {
        format: 'mixed',
        renderer: 'HtmlComponentsRenderer',
        reason: 'Contains both html-components and standard sections - using HtmlComponentsRenderer for compatibility',
        metadata: {
          sections: pageData.sections.length,
          htmlComponents: pageData.sections.filter((s: any) => s.type === 'html-components').length,
          standardSections: pageData.sections.filter((s: any) => s.type && s.data && !s.components).length
        }
      };
    }
  }

  return {
    format: 'unknown',
    renderer: 'none',
    reason: 'Unable to determine page format - check data structure',
    suggestions: [
      'Ensure pageData has a sections array',
      'For html-components format: sections should have type: "html-components" and components array',
      'For standard format: sections should have type and data properties'
    ]
  };
}

/**
 * Validates if page data is compatible with a specific renderer
 * @param pageData - The page data to validate
 * @param renderer - The renderer to check compatibility with
 * @returns Validation result
 */
export function validateRendererCompatibility(pageData: any, renderer: 'HtmlComponentsRenderer' | 'DynamicPageRenderer') {
  const format = detectPageFormat(pageData);
  
  if (renderer === 'HtmlComponentsRenderer') {
    return {
      compatible: format.format === 'html-components' || format.format === 'mixed',
      reason: format.format === 'html-components' || format.format === 'mixed' 
        ? 'Compatible with html-components format'
        : `Incompatible: ${format.reason}`,
      format: format.format
    };
  }

  if (renderer === 'DynamicPageRenderer') {
    return {
      compatible: format.format === 'standard',
      reason: format.format === 'standard' 
        ? 'Compatible with standard PageData format'
        : `Incompatible: ${format.reason}`,
      format: format.format
    };
  }

  return {
    compatible: false,
    reason: 'Unknown renderer type',
    format: format.format
  };
}

/**
 * Gets the recommended renderer for the given page data
 * @param pageData - The page data to analyze
 * @returns Recommended renderer and import statement
 */
export function getRecommendedRenderer(pageData: any) {
  const format = detectPageFormat(pageData);
  
  if (format.renderer === 'HtmlComponentsRenderer') {
    return {
      renderer: 'HtmlComponentsRenderer',
      import: "import { HtmlComponentsRenderer, useHtmlComponentsPage } from '@/components/HtmlComponentsRenderer';",
      hook: 'useHtmlComponentsPage',
      usage: '<HtmlComponentsRenderer pageData={pageData} />'
    };
  }

  if (format.renderer === 'DynamicPageRenderer') {
    return {
      renderer: 'DynamicPageRenderer',
      import: "import { DynamicPageRenderer, useDynamicPage } from '@/components/DynamicPageRenderer';",
      hook: 'useDynamicPage',
      usage: '<DynamicPageRenderer pageData={pageData as PageData} />'
    };
  }

  return {
    renderer: 'none',
    import: '// No renderer recommended - check data format',
    hook: 'none',
    usage: '// Fix data format first'
  };
}

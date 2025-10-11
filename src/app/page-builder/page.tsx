'use client';

import React, { useState, useCallback } from 'react';
import { DynamicPageRenderer, DynamicPageErrorBoundary } from '@/components/DynamicPageRenderer';
import { PageData, SectionData } from '@/types/section-data';
import { validatePageJSON } from '@/utils/client-validation';

// ============================================================================
// PAGE BUILDER INTERFACE
// ============================================================================

export default function PageBuilder() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [jsonInput, setJsonInput] = useState<string>('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Load sample data
   */
  const loadSampleData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/web-api/sample-page-data');
      const data = await response.json();
      setPageData(data);
      setJsonInput(JSON.stringify(data, null, 2));
      setValidationErrors([]);
    } catch (error) {
      console.error('Failed to load sample data:', error);
      setValidationErrors(['Failed to load sample data']);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Validate and parse JSON input
   */
  const validateAndParseJSON = useCallback(() => {
    try {
      const parsed = JSON.parse(jsonInput);
      const validation = validatePageJSON(parsed);
      
      if (validation.isValid) {
        setPageData(parsed);
        setValidationErrors([]);
        return true;
      } else {
        setValidationErrors(validation.errors);
        return false;
      }
    } catch (error) {
      setValidationErrors(['Invalid JSON format']);
      return false;
    }
  }, [jsonInput]);

  /**
   * Handle JSON input change
   */
  const handleJsonChange = useCallback((value: string) => {
    setJsonInput(value);
    setValidationErrors([]);
  }, []);

  /**
   * Export page data
   */
  const exportPageData = useCallback(() => {
    if (!pageData) return;
    
    const dataStr = JSON.stringify(pageData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'page-data.json';
    link.click();
    URL.revokeObjectURL(url);
  }, [pageData]);

  /**
   * Add a new section
   */
  const addSection = useCallback((sectionType: string) => {
    if (!pageData) return;

    // Create a basic section with empty data
    const newSection = {
      type: sectionType as any,
      data: {} as any
    };

    setPageData({
      ...pageData,
      sections: [...pageData.sections, newSection]
    });
  }, [pageData]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Page Builder</h1>
            <div className="flex space-x-3">
              <button
                onClick={loadSampleData}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Load Sample'}
              </button>
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                {isPreviewMode ? 'Edit Mode' : 'Preview Mode'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isPreviewMode ? (
          /* Preview Mode */
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Page Preview</h2>
              {pageData ? (
                <DynamicPageErrorBoundary>
                  <DynamicPageRenderer pageData={pageData} />
                </DynamicPageErrorBoundary>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No page data loaded. Load sample data or enter JSON to preview.
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* JSON Editor */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">JSON Editor</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={validateAndParseJSON}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    >
                      Validate
                    </button>
                    <button
                      onClick={exportPageData}
                      disabled={!pageData}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 disabled:opacity-50"
                    >
                      Export
                    </button>
                  </div>
                </div>
                
                <textarea
                  value={jsonInput}
                  onChange={(e) => handleJsonChange(e.target.value)}
                  className="w-full h-96 p-4 border border-gray-300 rounded-md font-mono text-sm resize-none"
                  placeholder="Enter page JSON data here..."
                />
                
                {validationErrors.length > 0 && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <h3 className="text-sm font-semibold text-red-800 mb-2">Validation Errors:</h3>
                    <ul className="text-sm text-red-700 space-y-1">
                      {validationErrors.map((error, index) => (
                        <li key={index}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Section Templates */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Add Section</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['hero', 'services', 'testimonials', 'features', 'pricing', 'contact', 'faq', 'cta'].map((type) => (
                    <button
                      key={type}
                      onClick={() => addSection(type)}
                      className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md capitalize"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Preview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                {pageData ? (
                  <div className="max-h-96 overflow-y-auto">
                    <DynamicPageErrorBoundary>
                      <DynamicPageRenderer pageData={pageData} />
                    </DynamicPageErrorBoundary>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    Enter valid JSON data to see preview
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
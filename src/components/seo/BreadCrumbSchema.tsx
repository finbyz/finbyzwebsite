"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  homeLabel?: string;
  customLabels?: Record<string, string>;
  baseUrl?: string;
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * BreadcrumbSchema Component
 * Generates schema.org structured data for breadcrumbs based on the current URL path
 */
export default function BreadcrumbSchema({ 
  homeLabel = "Home", 
  customLabels = {},
  baseUrl = process.env.SITE_URL || ''
}: BreadcrumbSchemaProps) {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    // Always start with home
    const breadcrumbs:BreadcrumbItem[] = [
      {
        position: 1,
        name: homeLabel,
        item: baseUrl
      }
    ];

    // Split pathname and filter empty strings
    const pathSegments = pathname.split('/').filter(segment => segment);

    // Build breadcrumbs from path segments
    let currentPath = baseUrl;
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Use custom label if provided, otherwise format the segment
      const label = customLabels[segment] || 
                   segment.split('-').map(word => 
                     word.charAt(0).toUpperCase() + word.slice(1)
                   ).join(' ');

      breadcrumbs.push({
        position: index + 2,
        name: label,
        item: currentPath
      } as BreadcrumbItem);
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Create schema.org structured data
  const schema: BreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(crumb => ({
      "@type": "ListItem",
      "position": crumb.position,
      "name": crumb.name,
      "item": crumb.item
    }))
  };

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

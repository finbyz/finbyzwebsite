/**
 * PageSchemas Component
 * Renders all JSON-LD schemas for a page
 */

import { ParsedSchema } from '@/lib/schema-generator';
import Script from 'next/script';

interface PageSchemasProps {
  schemas: ParsedSchema[];
}

/**
 * Renders JSON-LD script tags for all schemas
 */
export function PageSchemas({ schemas }: PageSchemasProps) {
  if (!schemas || schemas.length === 0) {
    return null;
  }
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          id={`structured-data-${schema.type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.json, null, 2) }}
        />
      ))}
    </>
  );
}

/**
 * Server component that auto-generates schemas from the current route
 */
export async function AutoPageSchemas() {
  const { generateAutoSchemas } = await import('@/lib/schema-generator');
  const schemas = await generateAutoSchemas();

  return <PageSchemas schemas={schemas} />;
}

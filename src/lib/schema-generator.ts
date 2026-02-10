/**
 * Schema Generator for fetching and processing JSON-LD schemas from Frappe
 * Handles the nextjs_page_schema child table data
 */

import { fetchNextJSPage } from './seo-metadata';
import { NextJSPageSchema } from './types/nextjs-page';

export interface ParsedSchema {
    type: string;
    json: Record<string, any>;
}

/**
 * Fetch schemas for a given page route/slug
 */
export async function fetchPageSchemas(slug: string): Promise<ParsedSchema[]> {
    const page = await fetchNextJSPage(slug);
    if (!page || !page.nextjs_page_schema || page.nextjs_page_schema.length === 0) {
        return [];
    }

    return parseSchemas(page.nextjs_page_schema);
}

/**
 * Parse schema data from the child table
 */
function parseSchemas(schemas: NextJSPageSchema[]): ParsedSchema[] {
    const parsedSchemas: ParsedSchema[] = [];

    for (const schema of schemas) {
        try {
            // Parse the JSON string from schema_json field
            const json = JSON.parse(schema.schema_json);

            parsedSchemas.push({
                type: schema.schema_type,
                json: json,
            });
        } catch (error) {
            console.error(`Failed to parse schema of type "${schema.schema_type}":`, error);
            // Skip invalid schemas
        }
    }

    return parsedSchemas;
}

/**
 * AUTO-GENERATE SCHEMAS from pathname
 * Use this in route group layouts - no need to specify slug!
 * 
 * @example
 * // In any layout.tsx
 * import { generateAutoSchemas } from '@/lib/schema-generator';
 * const schemas = await generateAutoSchemas();
 */
export async function generateAutoSchemas(): Promise<ParsedSchema[]> {
    const { headers } = await import('next/headers');
    const headersList = await headers();
    // Use full pathname as route (since route IS the name field)
    const pathname = headersList.get('x-pathname') || '/';

    // Normalize: ensure starts with / and remove trailing slash
    const route = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    try {
        const schemas = await fetchPageSchemas(route);
        return schemas;
    } catch (error) {
        console.error(`Auto schema generation failed for ${pathname}: `, error);
        return [];
    }
}

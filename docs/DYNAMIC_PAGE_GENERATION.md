# Dynamic Page Generation System

## Overview

The Dynamic Page Generation System allows you to create complete web pages from JSON data by dynamically assembling section components. This system provides a flexible, data-driven approach to page creation with full TypeScript support and validation.

## Architecture

### Core Components

1. **Data Structure Definitions** (`src/types/section-data.ts`)
   - TypeScript interfaces for all section types
   - Validation schemas for each component
   - Component mapping for dynamic rendering

2. **Page Assembler** (`src/utils/page-assembler.ts`)
   - Core utility for assembling pages from JSON data
   - Validation and error handling
   - File generation capabilities

3. **Dynamic Page Renderer** (`src/components/DynamicPageRenderer.tsx`)
   - React component for rendering pages from JSON
   - Error boundaries and state management
   - Section-by-section rendering

4. **CLI Generator** (`src/scripts/generate-page.ts`)
   - Command-line tool for page generation
   - JSON validation and processing
   - Sample data generation

5. **Page Builder Interface** (`src/app/page-builder/page.tsx`)
   - Web-based interface for creating and editing pages
   - Live preview functionality
   - JSON editor with validation

## Quick Start

### 1. Using the CLI Generator

```bash
# Generate a page from JSON file
npm run generate-page -- --input data/my-page.json --output src/pages/my-page

# Generate a sample page
npm run generate-page -- --sample

# Validate JSON file
npm run generate-page -- --validate --input data/my-page.json
```

### 2. Using the Page Builder Interface

1. Navigate to `/page-builder`
2. Click "Load Sample" to load example data
3. Edit the JSON in the editor
4. Click "Validate" to check for errors
5. Switch to "Preview Mode" to see the full page
6. Export the JSON when ready

### 3. Using the Dynamic Page Renderer

```tsx
import { DynamicPageRenderer } from '@/components/DynamicPageRenderer';
import { PageData } from '@/types/section-data';

const pageData: PageData = {
  metadata: {
    title: "My Page",
    description: "Page description",
    keywords: ["keyword1", "keyword2"]
  },
  sections: [
    {
      type: "hero",
      data: {
        title: "Welcome",
        subtitle: "Subtitle here",
        // ... other hero data
      }
    }
    // ... more sections
  ]
};

function MyPage() {
  return (
    <DynamicPageRenderer 
      pageData={pageData}
      onSectionRender={(sectionType, index) => {
        console.log(`Rendered ${sectionType} section at index ${index}`);
      }}
    />
  );
}
```

## Data Structure

### Page Data Format

```json
{
  "metadata": {
    "title": "Page Title",
    "description": "Page description",
    "keywords": ["keyword1", "keyword2"]
  },
  "sections": [
    {
      "type": "hero",
      "data": {
        // Section-specific data
      }
    }
  ]
}
```

### Available Section Types

1. **Hero** (`hero`)
   - Main landing section with title, subtitle, buttons, and image
   - Supports statistics and background images

2. **Services** (`services`)
   - Service showcase with icons, descriptions, and capabilities
   - Supports color theming and feature lists

3. **Testimonials** (`testimonials`)
   - Customer testimonials with avatars, ratings, and company info
   - Supports color palettes for each testimonial

4. **Security & Compliance** (`security-compliance`)
   - Security features, compliance certifications, and statistics
   - Supports detailed security measures and certifications

5. **Call to Action** (`cta`)
   - Action-oriented section with buttons and trust indicators
   - Supports primary and secondary actions

6. **Features** (`features`)
   - Feature showcase with descriptions and icons
   - Supports feature categories and comparisons

7. **Pricing** (`pricing`)
   - Pricing plans with features and comparisons
   - Supports multiple pricing tiers

8. **Contact** (`contact`)
   - Contact form and information
   - Supports multiple contact methods

9. **FAQ** (`faq`)
   - Frequently asked questions with expandable answers
   - Supports categories and search

10. **Team** (`team`)
    - Team member showcase with photos and bios
    - Supports social links and roles

11. **Blog** (`blog`)
    - Blog post listings with excerpts and metadata
    - Supports categories and pagination

12. **Footer** (`footer`)
    - Page footer with links, social media, and company info
    - Supports multiple columns and branding

13. **Header** (`header`)
    - Page header with navigation and branding
    - Supports responsive navigation and CTAs

## Validation

### JSON Validation

The system includes comprehensive validation for:

- Required fields for each section type
- Data type validation
- Nested object validation
- Array validation for lists and collections

### Validation Functions

```typescript
import { validatePageJSON } from '@/utils/page-assembler';

const validation = validatePageJSON(pageData);
if (validation.isValid) {
  console.log('Page data is valid');
} else {
  console.log('Validation errors:', validation.errors);
}
```

## Customization

### Adding New Section Types

1. **Define the TypeScript interface** in `src/types/section-data.ts`:

```typescript
export interface CustomSectionData {
  title: string;
  content: string;
  // ... other properties
}
```

2. **Add to the component map**:

```typescript
export const COMPONENT_MAP = {
  // ... existing components
  'custom-section': {
    component: CustomSection,
    schema: customSectionSchema,
    description: 'Custom section description'
  }
};
```

3. **Create the React component** in `src/components/sections/CustomSection.tsx`:

```typescript
interface CustomSectionProps {
  data: CustomSectionData;
  className?: string;
}

export const CustomSection: React.FC<CustomSectionProps> = ({ data, className }) => {
  return (
    <section className={className}>
      <h2>{data.title}</h2>
      <div>{data.content}</div>
    </section>
  );
};
```

4. **Update the DynamicPageRenderer** to include the new component:

```typescript
const componentMap: Record<string, React.ComponentType<any>> = {
  // ... existing components
  'custom-section': CustomSection
};
```

### Styling Customization

Each section component accepts a `className` prop for custom styling:

```tsx
<DynamicPageRenderer 
  pageData={pageData}
  className="my-custom-page-styles"
/>
```

## Error Handling

### Error Boundaries

The system includes error boundaries to handle rendering errors gracefully:

```tsx
import { DynamicPageErrorBoundary } from '@/components/DynamicPageRenderer';

<DynamicPageErrorBoundary fallback={<CustomErrorComponent />}>
  <DynamicPageRenderer pageData={pageData} />
</DynamicPageErrorBoundary>
```

### Validation Errors

Validation errors are displayed in the Page Builder interface and can be handled programmatically:

```typescript
const { isValid, errors } = validatePageJSON(pageData);
if (!isValid) {
  errors.forEach(error => console.error(error));
}
```

## Performance Considerations

### Lazy Loading

Sections can be lazy-loaded for better performance:

```typescript
const LazySection = React.lazy(() => import('./sections/HeavySection'));

// Wrap in Suspense
<Suspense fallback={<LoadingSpinner />}>
  <LazySection data={sectionData} />
</Suspense>
```

### Memoization

Use React.memo for expensive section components:

```typescript
export const ExpensiveSection = React.memo<SectionProps>(({ data }) => {
  // Component implementation
});
```

## Best Practices

### 1. Data Structure

- Keep section data focused and minimal
- Use consistent naming conventions
- Include fallback values for optional fields

### 2. Performance

- Optimize images and assets
- Use appropriate loading strategies
- Implement proper error boundaries

### 3. Accessibility

- Ensure proper semantic HTML structure
- Include alt text for images
- Maintain proper heading hierarchy

### 4. SEO

- Include proper meta tags in page metadata
- Use descriptive titles and descriptions
- Structure content for search engines

## Troubleshooting

### Common Issues

1. **Section not rendering**
   - Check if the section type is registered in COMPONENT_MAP
   - Verify the component is imported in DynamicPageRenderer
   - Check console for TypeScript errors

2. **Validation errors**
   - Review the section schema in section-data.ts
   - Ensure all required fields are present
   - Check data types match the interface

3. **Styling issues**
   - Verify CSS classes are properly applied
   - Check for conflicting styles
   - Ensure responsive design considerations

### Debug Tools

- Use the debug panel in the dynamic page demo
- Check browser console for errors
- Use the validation function to check data structure

## API Reference

### PageAssembler Class

```typescript
class PageAssembler {
  constructor(baseComponentsPath?: string, outputPath?: string);
  
  async assemblePage(pageData: PageData, pageName: string): Promise<{
    pageContent: string;
    metadata: any;
    sections: string[];
  }>;
}
```

### DynamicPageRenderer Component

```typescript
interface DynamicPageRendererProps {
  pageData: PageData;
  className?: string;
  onSectionRender?: (sectionType: string, index: number) => void;
}
```

### Validation Functions

```typescript
function validatePageJSON(jsonData: any): {
  isValid: boolean;
  errors: string[];
};

function generateSamplePageData(): PageData;
```

## Examples

See the `data/sample-landing-page.json` file for a complete example of a landing page with multiple sections.

## Contributing

When adding new features:

1. Update TypeScript interfaces
2. Add validation schemas
3. Create React components
4. Update documentation
5. Add tests
6. Update examples

## License

This system is part of the Finbyz Next.js project and follows the same licensing terms.

# Page Formats Guide

This guide explains the two different page formats supported by the Finbyz dynamic page system and how to use them correctly.

## Overview

The system supports two different page data formats:

1. **Standard PageData Format** - Used by `DynamicPageRenderer`
2. **HTML Components Format** - Used by `HtmlComponentsRenderer`

## 1. Standard PageData Format

This is the original format designed for the `DynamicPageRenderer` component.

### Structure

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
        "title": "Hero Title",
        "subtitle": "Hero Subtitle",
        "description": "Hero description"
      }
    },
    {
      "type": "services",
      "data": {
        "title": "Services Title",
        "services": [...]
      }
    }
  ]
}
```

### Usage

```tsx
import { DynamicPageRenderer, useDynamicPage } from '@/components/DynamicPageRenderer';
import { PageData } from '@/types/section-data';
import pageData from './page-data.json';

export default function MyPage() {
  const { renderedSections, handleSectionRender } = useDynamicPage(pageData as PageData);

  return (
    <DynamicPageRenderer
      pageData={pageData as PageData}
      onSectionRender={handleSectionRender}
    />
  );
}
```

### Supported Section Types

- `hero` - Hero sections
- `services` - Service showcases
- `testimonials` - Customer testimonials
- `cta` - Call to action sections
- `faq` - Frequently asked questions
- And more...

## 2. HTML Components Format

This is the newer format designed for the `HtmlComponentsRenderer` component, which provides more flexibility and component-level control.

### Structure

```json
{
  "metadata": {
    "title": "Page Title",
    "description": "Page description",
    "keywords": ["keyword1", "keyword2"],
    "companyName": "Company Name",
    "viewport": "width=device-width, initial-scale=1.0"
  },
  "sections": [
    {
      "type": "html-components",
      "components": [
        {
          "type": "html",
          "component": "Hero",
          "data": {
            "title": "Hero Title",
            "subtitle": "Hero Subtitle",
            "description": "Hero description"
          }
        }
      ]
    },
    {
      "type": "html-components",
      "components": [
        {
          "type": "html",
          "component": "Services",
          "data": {
            "title": "Services Title",
            "services": [...]
          }
        }
      ]
    }
  ]
}
```

### Usage

```tsx
import { HtmlComponentsRenderer, useHtmlComponentsPage } from '@/components/HtmlComponentsRenderer';
import pageData from './page-data.json';

export default function MyPage() {
  const { renderedSections, handleSectionRender } = useHtmlComponentsPage(pageData);

  return (
    <HtmlComponentsRenderer
      pageData={pageData}
      onSectionRender={handleSectionRender}
    />
  );
}
```

### Supported Component Types

- `Hero` - Hero sections
- `Services` - Service showcases
- `Testimonials` - Customer testimonials
- `CTA` - Call to action sections
- `FAQ` - Frequently asked questions
- `Banner` - Promotional banners
- `Card` - Information cards
- `Feature` - Feature highlights
- `Stats` - Statistics displays
- `Pricing` - Pricing plans
- `Contact` - Contact forms
- And many more...

## 3. How to Choose the Right Format

### Use Standard PageData Format When:

- You want a simple, structured approach
- Your sections follow a consistent pattern
- You're building traditional landing pages
- You prefer the original system

### Use HTML Components Format When:

- You need more flexible component layouts
- You want to mix different component types in sections
- You're building complex, component-rich pages
- You need custom component configurations

## 4. Automatic Format Detection

The system now includes automatic format detection to help you choose the right renderer:

```tsx
import { detectPageFormat, getRecommendedRenderer } from '@/utils/page-format-detector';

// Detect the format
const format = detectPageFormat(pageData);
console.log('Page format:', format.format);
console.log('Recommended renderer:', format.renderer);

// Get specific recommendations
const recommendation = getRecommendedRenderer(pageData);
console.log('Import statement:', recommendation.import);
console.log('Usage:', recommendation.usage);
```

## 5. Migration Guide

### From Standard to HTML Components

If you want to convert a standard format page to HTML components:

1. **Wrap each section** in an `html-components` container
2. **Move section data** to the `components` array
3. **Update component names** to match the HTML components format
4. **Switch renderer** from `DynamicPageRenderer` to `HtmlComponentsRenderer`

### Example Conversion

**Before (Standard):**
```json
{
  "sections": [
    {
      "type": "hero",
      "data": { "title": "Hello" }
    }
  ]
}
```

**After (HTML Components):**
```json
{
  "sections": [
    {
      "type": "html-components",
      "components": [
        {
          "type": "html",
          "component": "Hero",
          "data": { "title": "Hello" }
        }
      ]
    }
  ]
}
```

## 6. Troubleshooting

### Common Issues

1. **Type Assertion Errors**
   - **Problem**: `{pageData as PageData}` errors
   - **Solution**: Use the correct renderer for your data format

2. **Component Not Found**
   - **Problem**: "Component not found" warnings
   - **Solution**: Check component names and ensure they're supported

3. **Rendering Issues**
   - **Problem**: Sections not rendering properly
   - **Solution**: Validate your data structure using the format detector

### Validation

```tsx
import { validateRendererCompatibility } from '@/utils/page-format-detector';

// Check if your data works with a specific renderer
const compatibility = validateRendererCompatibility(pageData, 'HtmlComponentsRenderer');
if (!compatibility.compatible) {
  console.error('Compatibility issue:', compatibility.reason);
}
```

## 7. Best Practices

1. **Choose one format** per page for consistency
2. **Use the format detector** to avoid type assertion errors
3. **Validate your data** before rendering
4. **Keep component names consistent** across your project
5. **Use TypeScript interfaces** for better type safety

## 8. Examples

See the following example pages:
- **Standard Format**: `src/app/dynamic-page/minimal-page/`
- **HTML Components Format**: `src/app/dynamic-page/test123/`
- **Mixed Format**: `src/app/dynamic-page/Finbyz/`

## 9. Support

If you encounter issues:

1. Use the format detector to identify the problem
2. Check the console for error messages
3. Validate your JSON data structure
4. Ensure you're using the correct renderer
5. Check the component mapping for supported types

## 10. Future Updates

The system is designed to be extensible. New component types can be added to both renderers, and the format detection will automatically handle new formats as they're introduced.

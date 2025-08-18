# Sections-Based Renderer

The SectionsBasedRenderer is a new dynamic page rendering system that **only uses components from the sections folder** and **automatically adds standard header and footer** to every page.

## 🎯 Key Features

✅ **No Component Guessing** - Only uses existing components from `/src/components/sections/`  
✅ **Automatic Header & Footer** - Standard layout added to every page  
✅ **Type Safe** - No more `{pageData as PageData}` errors  
✅ **Predictable** - Clear component mapping with no surprises  
✅ **Maintainable** - Easy to add new components to the sections folder  

## 🏗️ Architecture

### Component Mapping
The renderer imports **all components directly from the sections folder**:

```tsx
// All imports are explicit - no guessing
import Hero from './sections/hero';
import Services from './sections/services';
import Testimonials from './sections/testimonials';
import Benefits from './sections/benefits';
// ... and many more
```

### Automatic Layout
Every page automatically includes:
- **Standard Header** from `/src/components/layout/header.tsx`
- **Standard Footer** from `/src/components/layout/footer.tsx`
- **Page Content** with your custom sections

## 📁 Available Components

The renderer supports **30+ components** from the sections folder:

| Component | Type | Description |
|-----------|------|-------------|
| `hero` | Hero | Hero section with title, buttons, and image |
| `services` | Services | Service showcase with icons and descriptions |
| `testimonials` | Testimonials | Customer testimonials with ratings |
| `benefits` | Benefits | Benefits showcase with statistics |
| `cta` | CTA | Call to action with buttons |
| `faq` | FAQ | Frequently asked questions |
| `contact-info` | Contact | Contact form and information |
| `team-expertise` | Team | Team member showcase |
| `case-studies` | Cases | Case study showcase |
| `service-pricing` | Pricing | Pricing plans and packages |
| `stats-showcase` | Stats | Statistics with animated counters |
| `process-timeline` | Timeline | Process workflow timeline |
| `business-slider` | Slider | Business solution carousel |
| `technology-stack` | Tech | Technology stack display |
| `innovation-lab` | Innovation | Innovation and R&D showcase |
| `security-compliance` | Security | Security and compliance info |
| `global-presence` | Global | Global presence and locations |
| `partnerships` | Partners | Partnership and alliance info |
| `resource-center` | Resources | Resource library and downloads |
| `support-services` | Support | Support and maintenance services |
| `awards-recognition` | Awards | Awards and recognition showcase |
| `industry-solutions` | Industry | Industry-specific solutions |
| `client-logos` | Logos | Client logo showcase |
| `success-snapshots` | Success | Success metrics and stories |
| `client-success-stories` | Stories | Client success case studies |
| `differentiators` | Diff | Competitive differentiators |
| `comment` | Comment | Comment or note sections |
| `hero-without-button` | Hero | Hero section without CTA buttons |

## 🚀 Usage

### Basic Implementation

```tsx
import { SectionsBasedRenderer, useSectionsBasedPage } from '@/components/SectionsBasedRenderer';
import pageData from './page-data.json';

export default function MyPage() {
  const { renderedSections, handleSectionRender } = useSectionsBasedPage(pageData);
  
  return (
    <SectionsBasedRenderer
      pageData={pageData}
      onSectionRender={handleSectionRender}
    />
  );
}
```

### Page Data Structure

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
      "id": "hero-section",
      "data": {
        "title": "Hero Title",
        "subtitle": "Hero subtitle",
        "primaryButton": "Get Started",
        "secondaryButton": "Learn More",
        "image": {
          "src": "/hero-image.png",
          "alt": "Hero image"
        }
      }
    },
    {
      "type": "services",
      "id": "services-section",
      "data": {
        "title": "Our Services",
        "subtitle": "What we offer",
        "services": [
          {
            "icon": "BarChart3",
            "title": "Service Title",
            "description": "Service description",
            "bgColor": "#EAF1F8",
            "iconColor": "#1A5276",
            "borderColor": "#1A5276"
          }
        ]
      }
    }
  ]
}
```

## 📋 Component Data Requirements

### Hero Component
```json
{
  "type": "hero",
  "data": {
    "title": "string - Main headline",
    "subtitle": "string - Supporting text",
    "primaryButton": "string - Primary CTA text",
    "secondaryButton": "string - Secondary CTA text",
    "image": {
      "src": "string - Image path",
      "alt": "string - Image alt text"
    },
    "scrollTarget": "string (optional) - Section ID to scroll to"
  }
}
```

### Services Component
```json
{
  "type": "services",
  "data": {
    "title": "string - Section title",
    "subtitle": "string - Section subtitle",
    "services": [
      {
        "icon": "string - Lucide icon name",
        "title": "string - Service title",
        "description": "string - Service description",
        "bgColor": "string - Background color hex",
        "iconColor": "string - Icon color hex",
        "borderColor": "string - Top border color hex"
      }
    ]
  }
}
```

### Benefits Component
```json
{
  "type": "benefits",
  "data": {
    "title": "string - Section title",
    "subtitle": "string - Section subtitle",
    "benefits": [
      {
        "number": "number - Statistic value",
        "suffix": "string - Statistic suffix (%, +, etc.)",
        "label": "string - Statistic label",
        "header": "string - Benefit header",
        "description": "string - Benefit description",
        "icon": "string - Lucide icon name",
        "palette": {
          "iconBg": "string - Icon background color hex",
          "iconColor": "string - Icon color hex"
        }
      }
    ],
    "ctaButton": {
      "text": "string - CTA button text",
      "action": "string - Action identifier"
    }
  }
}
```

### CTA Component
```json
{
  "type": "cta",
  "data": {
    "title": "string - CTA headline",
    "subtitle": "string - CTA subheadline",
    "description": "string - Supporting text",
    "primaryButton": {
      "text": "string - Button text",
      "icon": "string - Lucide icon name",
      "action": "string - Action identifier"
    },
    "secondaryButton": {
      "text": "string - Button text",
      "icon": "string - Lucide icon name",
      "action": "string - Action identifier"
    }
  }
}
```

## 🔧 Adding New Components

To add a new component:

1. **Create the component** in `/src/components/sections/`
2. **Import it** in `SectionsBasedRenderer.tsx`
3. **Add it to the component map** with a unique type identifier
4. **Document the data requirements** in `component-schemas.json`

```tsx
// 1. Import the new component
import NewComponent from './sections/new-component';

// 2. Add to component map
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  // ... existing components
  'new-component': NewComponent
};
```

## 📚 Complete Schema Reference

For the complete data requirements of all components, see:
- **`src/data/component-schemas.json`** - Detailed schemas for each component
- **`src/app/dynamic-page/sections-example/`** - Working example page

## 🆚 Comparison with Other Renderers

| Feature | SectionsBasedRenderer | DynamicPageRenderer | HtmlComponentsRenderer |
|---------|----------------------|-------------------|----------------------|
| **Component Source** | Sections folder only | Sections folder only | Mixed sources |
| **Header/Footer** | ✅ Automatic | ❌ Manual | ❌ Manual |
| **Type Safety** | ✅ Full | ⚠️ Partial | ⚠️ Partial |
| **Predictability** | ✅ High | ✅ High | ⚠️ Medium |
| **Maintenance** | ✅ Easy | ✅ Easy | ⚠️ Complex |

## 🚨 Error Handling

### Unknown Component Types
If you specify an unknown component type, the renderer shows a clear error:

```tsx
<div className="p-8 bg-red-50 border border-red-200 rounded-lg text-center">
  <h3 className="text-lg font-semibold text-red-800 mb-2">Unknown Section Type</h3>
  <p className="text-red-600">Section type "unknown-type" is not supported.</p>
  <p className="text-sm text-red-500 mt-2">
    Available types: hero, services, testimonials, benefits, ...
  </p>
</div>
```

### Validation
The renderer validates:
- ✅ Page metadata exists
- ✅ Sections array exists and is not empty
- ✅ Each section has a valid type
- ✅ Component data is properly structured

## 📖 Examples

### Working Example Page
Visit `/dynamic-page/sections-example` to see a working example with:
- Hero section
- Services showcase
- Benefits display
- CTA section

### Sample Data
```json
{
  "metadata": {
    "title": "My Dynamic Page",
    "description": "Built with sections-based renderer"
  },
  "sections": [
    {
      "type": "hero",
      "data": {
        "title": "Welcome",
        "subtitle": "This page uses only sections folder components",
        "primaryButton": "Get Started",
        "secondaryButton": "Learn More",
        "image": {
          "src": "/welcome.png",
          "alt": "Welcome"
        }
      }
    }
  ]
}
```

## 🎉 Benefits

1. **No More Guessing** - Only uses existing, tested components
2. **Automatic Layout** - Header and footer added automatically
3. **Type Safe** - No more type assertion errors
4. **Maintainable** - Easy to add new components
5. **Predictable** - Clear component mapping
6. **Professional** - Consistent layout across all pages

## 🔮 Future Enhancements

- **Component Categories** - Group components by type
- **Validation Schemas** - Runtime data validation
- **Component Previews** - Visual component browser
- **Drag & Drop** - Visual page builder interface

---

**Ready to start building?** Use the SectionsBasedRenderer for predictable, maintainable dynamic pages that only use components from your sections folder!

# Dynamic Page Generation API

This API allows you to dynamically generate complete pages by combining components from the `src/components/sections` directory. You can create pages with any combination of available sections by providing JSON data.

## 🚀 Features

- **Dynamic Page Generation**: Create pages on-the-fly with JSON data
- **Component Composition**: Mix and match any available section components
- **Automatic File Generation**: Generates page.tsx, layout.tsx, and data files
- **Type Safety**: Full TypeScript support with proper interfaces
- **Flexible Content**: Customize content, styling, and layout for each section

## 📁 Available Section Components

The API supports the following section types (all located in `src/components/sections/`):

| Section Type | Component | Description |
|--------------|-----------|-------------|
| `hero` | Hero | Full-screen hero section with CTA buttons |
| `services` | Services | Grid of service cards with icons |
| `testimonials` | Testimonials | Customer testimonials and reviews |
| `cta` | CTA | Call-to-action section |
| `faq` | FAQ | Frequently asked questions |
| `benefits` | Benefits | Feature benefits showcase |
| `differentiators` | Differentiators | Competitive advantages |
| `process-workflow` | ProcessWorkflow | Step-by-step process explanation |
| `industry-solutions` | IndustrySolutions | Industry-specific solutions |
| `global-presence` | GlobalPresence | Global office locations |
| `contact-info` | ContactInfo | Contact information and methods |
| `support-services` | SupportServices | Support tiers and services |
| `resource-center` | ResourceCenter | Resources and events |
| `partnerships` | Partnerships | Strategic partnerships |
| `security-compliance` | SecurityCompliance | Security measures and compliance |
| `innovation-lab` | InnovationLab | Innovation projects and research |
| `awards-recognition` | AwardsRecognition | Awards and certifications |
| `service-pricing` | ServicePricing | Pricing plans and packages |
| `hero_section_without_button` | HeroSectionWithoutButton | Hero section without CTA buttons |

## 🛠️ API Usage

### Endpoint
```
POST /api/generate-page
```

### Request Headers
```json
{
  "Content-Type": "application/json"
}
```

### Request Body Structure
```json
{
  "pageName": "string (required)",
  "content": {
    "metadata": {
      "title": "string",
      "description": "string",
      "keywords": ["string"]
    },
    "sections": [
      {
        "type": "section-type",
        "data": { /* section-specific data */ }
      }
    ]
  }
}
```

### Response Structure
```json
{
  "success": true,
  "message": "Page 'pageName' generated successfully",
  "data": {
    "pageName": "string",
    "pageUrl": "/dynamic-page/pageName",
    "sectionsCount": 3,
    "sections": ["hero", "services", "cta"],
    "generatedFiles": ["path/to/files"]
  }
}
```

## 📝 Examples

### 1. Simple Landing Page

```json
{
  "pageName": "simple-landing",
  "content": {
    "metadata": {
      "title": "Simple Landing Page",
      "description": "A clean and simple landing page example",
      "keywords": ["landing page", "simple", "example"]
    },
    "sections": [
      {
        "type": "hero",
        "data": {
          "title": "Welcome to Our Platform",
          "subtitle": "Simple, powerful, and effective",
          "description": "Get started with our amazing platform today",
          "primaryButton": {
            "text": "Get Started",
            "url": "/signup",
            "icon": "ArrowRight"
          },
          "secondaryButton": {
            "text": "Learn More",
            "url": "/about",
            "icon": "Info"
          },
          "image": {
            "src": "/images/hero-simple.jpg",
            "alt": "Simple hero image"
          }
        }
      },
      {
        "type": "cta",
        "data": {
          "title": "Ready to Get Started?",
          "subtitle": "Join thousands of satisfied customers",
          "description": "Don't wait any longer. Start your journey today.",
          "primaryButton": {
            "text": "Start Now",
            "url": "/signup",
            "icon": "ArrowRight",
            "variant": "primary"
          }
        }
      }
    ]
  }
}
```

### 2. Business Solutions Page

```json
{
  "pageName": "business-solutions",
  "content": {
    "metadata": {
      "title": "Business Solutions",
      "description": "Comprehensive business solutions for modern enterprises",
      "keywords": ["business", "solutions", "enterprise", "technology"]
    },
    "sections": [
      {
        "type": "hero",
        "data": {
          "title": "Transform Your Business",
          "subtitle": "Next-generation business solutions",
          "description": "Empower your business with cutting-edge technology",
          "primaryButton": {
            "text": "Schedule Demo",
            "url": "/demo",
            "icon": "Calendar"
          },
          "image": {
            "src": "/images/business-hero.jpg",
            "alt": "Business transformation"
          }
        }
      },
      {
        "type": "services",
        "data": {
          "title": "Our Solutions",
          "subtitle": "Comprehensive tools for growth",
          "services": [
            {
              "title": "Digital Transformation",
              "description": "Modernize your business processes",
              "icon": "Zap",
              "iconColor": "#1A5276",
              "iconBg": "#EAF1F8",
              "borderColor": "#1A5276",
              "bgColor": "#f8fafc",
              "capabilities": [
                {
                  "title": "Key Benefits",
                  "items": [
                    { "name": "Efficiency", "color": "#1A5276" },
                    { "name": "Scalability", "color": "#FF8C00" }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
```

## 🔧 How to Use

### 1. Using cURL

```bash
# Simple landing page
curl -X POST http://localhost:3000/api/generate-page \
  -H 'Content-Type: application/json' \
  -d @examples/simple-landing.json

# Business solutions page
curl -X POST http://localhost:3000/api/generate-page \
  -H 'Content-Type: application/json' \
  -d @examples/business-solutions.json

# Minimal page
curl -X POST http://localhost:3000/api/generate-page \
  -H 'Content-Type: application/json' \
  -d @examples/minimal-page.json
```

### 2. Using JavaScript/Fetch

```javascript
const pageData = {
  pageName: "my-custom-page",
  content: {
    metadata: {
      title: "My Custom Page",
      description: "A custom page I created",
      keywords: ["custom", "page", "example"]
    },
    sections: [
      {
        type: "hero",
        data: {
          title: "Welcome to My Page",
          subtitle: "Custom content here",
          description: "This is my custom page content",
          primaryButton: {
            text: "Get Started",
            url: "/start",
            icon: "ArrowRight"
          },
          image: {
            src: "/images/custom.jpg",
            alt: "Custom image"
          }
        }
      }
    ]
  }
};

const response = await fetch('/api/generate-page', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(pageData)
});

const result = await response.json();
console.log('Page generated:', result.data.pageUrl);
```

### 3. Using Axios

```javascript
import axios from 'axios';

const response = await axios.post('/api/generate-page', pageData);
console.log('Page generated:', response.data.data.pageUrl);
```

## 📂 Generated Files

When you call the API, it automatically generates the following files:

1. **`src/app/dynamic-page/{pageName}/page.tsx`** - Main page component
2. **`src/app/dynamic-page/{pageName}/layout.tsx`** - Page layout with metadata
3. **`src/app/dynamic-page/{pageName}/page-data.json`** - Page data file

## 🌐 Accessing Generated Pages

After successful generation, your page will be available at:

```
http://localhost:3000/dynamic-page/{pageName}
```

For example:
- `http://localhost:3000/dynamic-page/simple-landing`
- `http://localhost:3000/dynamic-page/business-solutions`
- `http://localhost:3000/dynamic-page/minimal-page`

## 🔍 Debug Information

Each generated page includes:

- **Page Header**: Shows page title, description, and generation date
- **Debug Panel**: Fixed bottom-right panel showing page info and rendered sections
- **Console Logs**: Detailed logging for development and debugging

## ⚠️ Important Notes

1. **Page Names**: Use kebab-case for page names (e.g., `my-page`, `business-solutions`)
2. **Section Types**: Must match exactly with the available section types
3. **Data Structure**: Each section must follow its specific data interface
4. **Images**: Ensure image paths are correct and images exist in the public directory
5. **Icons**: Use valid icon names from the Lucide React icon library

## 🚨 Error Handling

The API provides comprehensive error handling:

- **400 Bad Request**: Missing or invalid required fields
- **500 Internal Server Error**: File generation or system errors
- **Validation**: Automatic validation of page data structure
- **Detailed Error Messages**: Clear error descriptions for debugging

## 🔧 Customization

### Adding New Section Types

1. Create your section component in `src/components/sections/`
2. Add the section type to the `SectionData` union type in `src/types/section-data.ts`
3. Update the `COMPONENT_MAP` in the same file
4. Add the component to the `DynamicPageRenderer` component map

### Modifying Section Data

Each section type has its own data interface. Refer to `src/types/section-data.ts` for the complete structure of each section type.

## 📚 Additional Resources

- **Type Definitions**: `src/types/section-data.ts`
- **Dynamic Page Renderer**: `src/components/DynamicPageRenderer.tsx`
- **Example Data**: `examples/` directory
- **Sample Page**: `data/sample-landing-page.json`

## 🤝 Support

If you encounter any issues or need help:

1. Check the console logs for detailed error messages
2. Verify your JSON data structure matches the required interfaces
3. Ensure all required fields are provided
4. Check that section types match available components

---

**Happy Page Building! 🎉**

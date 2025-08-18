# Simple Page Generator Documentation

## Overview

The Simple Page Generator allows you to create complete, styled pages by providing only the essential content. No complex configuration, styling, or layout decisions required - just pure content that gets automatically transformed into beautiful, responsive pages.

## How It Works

1. **Provide Simple Content**: Just give us your text, titles, and basic information
2. **Automatic Styling**: The system applies professional styling, animations, and responsive design
3. **Instant Pages**: Get complete pages with headers, sections, and proper SEO metadata

## Content Structure

### Basic Page Structure
```typescript
{
  title: "Page Title",
  description: "Page description for SEO",
  sections: [
    // Your sections here
  ]
}
```

### Available Section Types

#### 1. Hero Section
```typescript
{
  type: "hero",
  title: "Main headline",
  subtitle?: "Optional highlighted text",
  description: "Supporting text",
  primaryButton: "Main action button",
  secondaryButton?: "Optional secondary button",
  image?: "Optional image URL"
}
```

#### 2. Services Section
```typescript
{
  type: "services",
  title: "Section title",
  subtitle?: "Optional subtitle",
  services: [
    {
      type: "service",
      title: "Service name",
      description: "Service description",
      icon?: "Optional emoji or icon"
    }
  ]
}
```

#### 3. Testimonials Section
```typescript
{
  type: "testimonials",
  title: "Section title",
  subtitle?: "Optional subtitle",
  testimonials: [
    {
      type: "testimonial",
      quote: "What the client said",
      author: "Client name",
      company: "Company name",
      rating?: 5 // Optional star rating (1-5)
    }
  ]
}
```

#### 4. FAQ Section
```typescript
{
  type: "faq",
  title: "Section title",
  subtitle?: "Optional subtitle",
  questions: [
    {
      question: "What's the question?",
      answer: "Here's the answer"
    }
  ]
}
```

#### 5. Call-to-Action Section
```typescript
{
  type: "cta",
  title: "Action title",
  description: "Supporting text",
  primaryButton: "Main action",
  secondaryButton?: "Optional secondary action"
}
```

## Usage Examples

### Example 1: Company Website
```typescript
import { generateSimplePage } from '@/utils/simplePageGenerator';

const companyPage = {
  title: "TechCorp Solutions",
  description: "Leading technology solutions for modern businesses",
  sections: [
    {
      type: "hero",
      title: "Transform Your Business",
      subtitle: "with Technology",
      description: "We help companies streamline operations and scale faster with cutting-edge technology solutions.",
      primaryButton: "Get Started",
      secondaryButton: "Learn More"
    },
    {
      type: "services",
      title: "Our Services",
      services: [
        {
          type: "service",
          title: "Web Development",
          description: "Custom websites and web applications built with modern technologies.",
          icon: "🌐"
        },
        {
          type: "service",
          title: "Mobile Apps",
          description: "Native and cross-platform mobile applications for iOS and Android.",
          icon: "📱"
        }
      ]
    },
    {
      type: "testimonials",
      title: "What Our Clients Say",
      testimonials: [
        {
          type: "testimonial",
          quote: "TechCorp transformed our business operations completely.",
          author: "Sarah Johnson",
          company: "InnovateCorp",
          rating: 5
        }
      ]
    },
    {
      type: "cta",
      title: "Ready to Get Started?",
      description: "Join hundreds of businesses already working with us.",
      primaryButton: "Start Your Project"
    }
  ]
};

// Generate the page
const CompanyPage = () => generateSimplePage(companyPage);
```

### Example 2: Product Landing Page
```typescript
const productPage = {
  title: "Revolutionary Product",
  description: "The next generation solution for your business",
  sections: [
    {
      type: "hero",
      title: "Introducing",
      subtitle: "Revolutionary Product",
      description: "The next generation solution that will transform how you work.",
      primaryButton: "Try Now",
      secondaryButton: "Watch Demo"
    },
    {
      type: "services",
      title: "Key Features",
      services: [
        {
          type: "service",
          title: "Lightning Fast",
          description: "10x faster than traditional solutions",
          icon: "⚡"
        },
        {
          type: "service",
          title: "Secure",
          description: "Enterprise-grade security built-in",
          icon: "🔒"
        }
      ]
    },
    {
      type: "cta",
      title: "Get Early Access",
      description: "Be among the first to experience the future.",
      primaryButton: "Join Waitlist"
    }
  ]
};
```

### Example 3: Service Page
```typescript
const servicePage = {
  title: "Web Development Services",
  description: "Professional web development solutions for businesses",
  sections: [
    {
      type: "hero",
      title: "Professional",
      subtitle: "Web Development",
      description: "Custom websites and web applications that drive results for your business.",
      primaryButton: "Get Quote",
      secondaryButton: "View Portfolio"
    },
    {
      type: "services",
      title: "Our Expertise",
      services: [
        {
          type: "service",
          title: "Frontend Development",
          description: "React, Vue, Angular - modern, responsive interfaces",
          icon: "🎨"
        },
        {
          type: "service",
          title: "Backend Development",
          description: "Node.js, Python, PHP - robust server-side solutions",
          icon: "⚙️"
        }
      ]
    },
    {
      type: "faq",
      title: "Common Questions",
      questions: [
        {
          question: "How much does a website cost?",
          answer: "Costs vary based on complexity, typically ranging from $5,000 to $50,000+."
        },
        {
          question: "How long does development take?",
          answer: "Simple websites take 2-4 weeks, complex applications 2-6 months."
        }
      ]
    }
  ]
};
```

## API Usage

### Creating Pages via API

You can also create pages by sending a POST request to `/api/create-page`:

```bash
curl -X POST http://localhost:3000/api/create-page \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Company",
    "description": "Welcome to our website",
    "sections": [
      {
        "type": "hero",
        "title": "Welcome to Our Platform",
        "description": "We help businesses grow with technology",
        "primaryButton": "Get Started"
      }
    ]
  }'
```

### API Response
```json
{
  "success": true,
  "message": "Page created successfully",
  "data": {
    "title": "My Company",
    "description": "Welcome to our website",
    "sectionsCount": 1,
    "sectionTypes": ["hero"]
  }
}
```

## Features

### Automatic Styling
- **Responsive Design**: Works perfectly on all devices
- **Professional Colors**: Consistent brand colors and gradients
- **Animations**: Smooth fade-in and hover effects
- **Typography**: Optimized font sizes and spacing

### Built-in Components
- **Hero Sections**: Full-screen landing areas with call-to-action buttons
- **Service Cards**: Professional service showcases with icons
- **Testimonials**: Client reviews with star ratings
- **FAQ Accordions**: Expandable question and answer sections
- **Call-to-Action**: Conversion-focused action sections

### SEO Optimization
- **Meta Tags**: Automatic title, description, and viewport tags
- **Structured Content**: Semantic HTML for better search rankings
- **Performance**: Optimized for fast loading times

## Best Practices

### Content Guidelines
1. **Keep Titles Concise**: 3-7 words for maximum impact
2. **Use Clear Descriptions**: Explain benefits, not just features
3. **Include Action Words**: Use verbs in button text ("Get Started", "Learn More")
4. **Add Social Proof**: Include testimonials and ratings when possible

### Section Order
1. **Hero First**: Always start with a compelling hero section
2. **Services/Features**: Follow with what you offer
3. **Social Proof**: Add testimonials or case studies
4. **FAQ**: Address common questions
5. **Call-to-Action**: End with a clear next step

### Icons and Visuals
- Use emojis for simple icons (🌐, 📱, ⚡)
- Keep icons relevant to the content
- Don't overuse icons - let them enhance, not distract

## Error Handling

The system includes validation to ensure your content is complete:

```typescript
// Missing required fields will return an error
{
  "error": "Missing required fields: title, description, and sections are required"
}

// Empty sections will be rejected
{
  "error": "At least one section is required"
}
```

## Customization

While the simple page generator focuses on minimal content, you can still customize:

### Adding Images
```typescript
{
  type: "hero",
  title: "Welcome",
  description: "Our platform",
  primaryButton: "Get Started",
  image: "/path/to/your/image.jpg" // Optional hero image
}
```

### Using Icons
```typescript
{
  type: "service",
  title: "Web Development",
  description: "Custom websites",
  icon: "🌐" // Emoji or icon text
}
```

### Optional Fields
Most fields marked with `?` are optional and will be gracefully handled if omitted.

## Performance

- **Fast Loading**: Optimized components with minimal bundle size
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Mobile First**: Responsive design that works on all devices
- **Accessible**: ARIA labels and keyboard navigation support

## Support

For questions or issues with the simple page generator:

1. Check the validation errors in the API response
2. Ensure all required fields are provided
3. Use the example templates as a starting point
4. Test with simple content first, then add complexity

The simple page generator is designed to be as straightforward as possible - just provide your content and let the system handle the rest! 
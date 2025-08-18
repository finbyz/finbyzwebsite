# 🚀 Quick Start Guide - Page Generation API

Get up and running with the Dynamic Page Generation API in minutes!

## ⚡ Quick Setup

### 1. Start Your Development Server
```bash
npm run dev
# or
yarn dev
```

### 2. Test the API
```bash
# Test with the provided examples
node scripts/test-page-generation.js
```

## 🎯 Create Your First Page

### Option 1: Use cURL
```bash
curl -X POST http://localhost:3000/api/generate-page \
  -H 'Content-Type: application/json' \
  -d @examples/simple-landing.json
```

### Option 2: Use JavaScript
```javascript
const pageData = {
  pageName: "my-first-page",
  content: {
    metadata: {
      title: "My First Page",
      description: "A page I created with the API",
      keywords: ["first", "page", "example"]
    },
    sections: [
      {
        type: "hero",
        data: {
          title: "Welcome to My Page",
          subtitle: "Created with the API",
          description: "This page was generated automatically",
          primaryButton: {
            text: "Get Started",
            url: "/start",
            icon: "ArrowRight"
          },
          image: {
            src: "/images/hero.jpg",
            alt: "Hero image"
          }
        }
      }
    ]
  }
};

fetch('/api/generate-page', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(pageData)
})
.then(response => response.json())
.then(result => {
  console.log('Page created:', result.data.pageUrl);
  // Visit: http://localhost:3000/dynamic-page/my-first-page
});
```

## 🌐 View Your Generated Page

After successful generation, visit:
```
http://localhost:3000/dynamic-page/{pageName}
```

## 📚 Available Examples

- **`examples/simple-landing.json`** - Basic landing page
- **`examples/business-solutions.json`** - Business page with multiple sections
- **`examples/minimal-page.json`** - Minimal page with just hero and CTA

## 🔧 Customize Your Page

### Add More Sections
```json
{
  "type": "services",
  "data": {
    "title": "Our Services",
    "subtitle": "What we offer",
    "services": [
      {
        "title": "Service Name",
        "description": "Service description",
        "icon": "Zap",
        "iconColor": "#1A5276",
        "iconBg": "#EAF1F8",
        "borderColor": "#1A5276",
        "bgColor": "#f8fafc"
      }
    ]
  }
}
```

### Available Section Types
- `hero` - Hero section with CTA buttons
- `services` - Service cards grid
- `testimonials` - Customer testimonials
- `cta` - Call-to-action section
- `faq` - Frequently asked questions
- `benefits` - Feature benefits
- `differentiators` - Competitive advantages
- And many more! (See full list in README)

## 🎨 Styling and Customization

Each section automatically includes:
- Responsive design
- Modern animations
- Professional styling
- Mobile-first approach
- Custom color schemes (via data)

## 🚨 Troubleshooting

### Common Issues

1. **"Server not running"**
   - Start your dev server: `npm run dev`

2. **"Invalid content structure"**
   - Check that your JSON has `metadata` and `sections` fields
   - Ensure section types match available components

3. **"Unknown section type"**
   - Verify section type spelling (e.g., `hero`, not `Hero`)
   - Check the available section types list

4. **Page not accessible**
   - Wait a few seconds for file generation
   - Check the console for error messages
   - Verify the generated URL in the API response

### Debug Tips

- Check the browser console for detailed logs
- Use the debug panel on generated pages
- Verify your JSON structure matches the examples
- Test with simple examples first

## 📖 Next Steps

1. **Read the full documentation**: `README-Page-Generation-API.md`
2. **Explore the examples**: `examples/` directory
3. **Check the types**: `src/types/section-data.ts`
4. **Run the test script**: `node scripts/test-page-generation.js`

## 🎉 You're Ready!

You now have a powerful API that can generate complete pages from JSON data. Create landing pages, business pages, portfolios, and more with just a few API calls!

---

**Need help?** Check the full README or run the test script to see working examples!

# Finbyz Solutions - Next.js Website

A modern, responsive website built with Next.js, Tailwind CSS, and Shadcn/UI components.

## Tech Stack

- **Next.js 15.4.4** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality React components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **TypeScript** - Type-safe JavaScript

## Features

- ✅ Fully responsive design
- ✅ Modern UI components with Shadcn/UI
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ TypeScript support
- ✅ Mobile-first approach
- ✅ Accessible components

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Navigation header
│   │   ├── footer.tsx       # Site footer
│   │   └── sticky-cta.tsx   # Sticky call-to-action
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── services.tsx     # Services overview
│   │   ├── benefits.tsx     # Benefits with animated counters
│   │   ├── differentiators.tsx # Company differentiators
│   │   ├── testimonials.tsx # Client testimonials
│   │   ├── success-snapshots.tsx # Case studies
│   │   ├── faq.tsx          # FAQ section
│   │   └── cta.tsx          # Call-to-action section
│   └── ui/                  # Shadcn/UI components
└── lib/
    └── utils.ts             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors and Theming

The project uses CSS custom properties for theming. You can modify the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: hsl(213, 69%, 35%);
  --secondary: hsl(25, 95%, 63%);
  --accent: hsl(158, 64%, 52%);
  /* ... other colors */
}
```

### Adding New Components

1. Create new components in the appropriate directory under `src/components/`
2. Use Shadcn/UI components as building blocks
3. Follow the existing pattern for animations and styling

### Adding New Shadcn/UI Components

```bash
npx shadcn@latest add [component-name]
```

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Performance

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minimal bundle size with tree shaking
- ✅ Fast page loads with static generation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.


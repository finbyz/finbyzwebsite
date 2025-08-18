"use client";

import { Metadata } from 'next';
import Hero from '@/components/sections/hero';
// import Services from '@/components/sections/services';
import CTA from '@/components/sections/cta';
import BusinessSlider from '@/components/sections/business-slider';

// Page metadata
export const metadata: Metadata = {
  title: "Sample Page",
  description: "A sample page generated with the page assembler",
  keywords: ["sample","page","generated"],
};

// Page component
export default function SamplePage() {
  return (
    <main className="min-h-screen">
      <BusinessSlider />
            <Hero data={{
  "title": "Welcome to Our Platform",
  "subtitle": "Building the future of technology",
  "primary_button": "Get Started",
  "secondary_button": "Learn More",
  "image": {
    "src": "/images/hero.jpg",
    "alt": "Hero image"
  },
  "scroll_target": "services"
}} />
      {/* Services removed per request */}
      {/* <Services data={{
  "title": "Our Services",
  "subtitle": "Comprehensive solutions for your business",
  "services": [
    {
      "title": "Web Development",
      "description": "Modern web applications built with cutting-edge technologies",
      "icon": "Code",
      "iconColor": "#1A5276",
      "bgColor": "#EAF1F8",
      "borderColor": "#1A5276",
      "capabilities": [
        {
          "icon": "Code",
          "label": "React",
          "color": "#61dafb"
        },
        {
          "icon": "Code",
          "label": "Next.js",
          "color": "#000000"
        },
        {
          "icon": "Code",
          "label": "TypeScript",
          "color": "#3178c6"
        }
      ]
    }
  ]
}} /> */}
      <CTA data={{
  "title": "Ready to Get Started?",
  "description": "Start your journey with us today and transform your business",
  "primaryButton": {
    "text": "Start Free Trial",

    "icon": "Rocket",
    "action": "trial"
  },
  "secondaryButton": {
    "text": "Contact Sales",
    "icon": "Phone",
    "action": "contact"
  },
  "trustIndicator": {
    "text": "Trusted by 10,000+ companies",
    "icon": "Shield"
  }
}} />
    </main>
  );
}

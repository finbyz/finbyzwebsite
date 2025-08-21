import { NextResponse } from 'next/server';

// Returns JSON in the requested shape: { pageName, content: { metadata, sections } }
// Only includes sections that currently exist in the codebase (excludes removed ones)
export async function GET() {
  const response = {
    pageName: "all-sections-sample",
    content: {
      metadata: {
        title: "All Components Showcase - SectionsBasedRenderer",
        description: "Complete demonstration of all available components from the sections folder",
        keywords: ["components", "showcase", "sections", "renderer", "demo"]
      },
      sections: [
        // Hero
        {
          type: "hero",
          id: "hero-section",
          data: {
            title: "Complete Component Showcase",
            subtitle: "Every available component from the sections folder in one page",
            primaryButton: "Get Started",
            secondaryButton: "View Documentation",
            image: { src: "/Hero Brain 2.png", alt: "Component Showcase" },
            scrollTarget: "benefits-section"
          }
        },

        // Benefits (stats-style)
        {
          type: "benefits",
          id: "benefits-section",
          data: {
            title: "Why Choose Our Solutions",
            subtitle: "Proven benefits that drive results",
            benefits: [
              { number: 60, suffix: "%", label: "Efficiency Improvement", header: "Maximum Efficiency", description: "Transform operations with intelligent automation", icon: "TrendingUp", palette: { iconBg: "#FF8C00", iconColor: "#fff" } },
              { number: 40, suffix: "%", label: "Cost Reduction", header: "Cost Effective", description: "Reduce operational costs significantly", icon: "DollarSign", palette: { iconBg: "#27AE60", iconColor: "#fff" } },
              { number: 99, suffix: "%", label: "Client Satisfaction", header: "Happy Clients", description: "Exceed expectations consistently", icon: "Heart", palette: { iconBg: "#E74C3C", iconColor: "#fff" } },
              { number: 24, suffix: "/7", label: "Support Available", header: "Always Here", description: "Round-the-clock support and maintenance", icon: "Clock", palette: { iconBg: "#3498DB", iconColor: "#fff" } }
            ],
            ctaButton: { text: "Experience the Benefits →", action: "benefits" }
          }
        },

        // Testimonials
        {
          type: "testimonials",
          id: "testimonials-section",
          data: {
            title: "What Our Clients Say",
            subtitle: "Trusted by businesses worldwide",
            testimonials: [
              { avatar: "SJ", rating: 5, quote: "Finbyz transformed our operations with their ERP implementation. The automation features alone saved us 40% in processing time.", author: "Sarah Johnson", company: "TechCorp Industries", position: "CTO" },
              { avatar: "MC", rating: 5, quote: "The AI automation they built for us is incredible. It handles complex workflows that used to take hours in minutes.", author: "Michael Chen", company: "DataFlow Solutions", position: "CEO" },
              { avatar: "AL", rating: 5, quote: "Professional team, excellent communication, and delivered exactly what we needed on time and budget.", author: "Amanda Lee", company: "InnovateLab", position: "Operations Director" }
            ]
          }
        },

        // Stats Showcase (separate from benefits)
        {
          type: "stats-showcase",
          id: "stats-section",
          data: {
            title: "Our Impact in Numbers",
            subtitle: "Metrics that tell our success story",
            stats: [
              { value: "200+", label: "Projects Completed", description: "Successfully delivered", icon: "CheckCircle", color: "#27AE60" },
              { value: "50+", label: "Countries Served", description: "Global presence", icon: "Globe", color: "#3498DB" },
              { value: "99.9%", label: "Uptime", description: "Reliable service", icon: "Shield", color: "#E74C3C" },
              { value: "1000+", label: "Happy Clients", description: "Satisfied customers", icon: "Users", color: "#8E44AD" }
            ]
          }
        },

        // Team Expertise
        {
          type: "team-expertise",
          id: "team-section",
          data: {
            title: "Meet Our Expert Team",
            subtitle: "Skilled professionals with years of experience",
            team: [
              { name: "John Doe", position: "Senior Developer", expertise: ["React","Node.js","AWS"], avatar: "/avatars/john.jpg", bio: "10+ years of experience in full-stack development", linkedin: "https://linkedin.com/in/johndoe" },
              { name: "Jane Smith", position: "AI Engineer", expertise: ["Machine Learning","Python","TensorFlow"], avatar: "/avatars/jane.jpg", bio: "Expert in AI and machine learning solutions", linkedin: "https://linkedin.com/in/janesmith" },
              { name: "Mike Johnson", position: "DevOps Engineer", expertise: ["Docker","Kubernetes","CI/CD"], avatar: "/avatars/mike.jpg", bio: "Specialist in cloud infrastructure and automation", linkedin: "https://linkedin.com/in/mikejohnson" }
            ]
          }
        },

        // Technology Stack
        {
          type: "technology-stack",
          id: "tech-stack-section",
          data: {
            title: "Our Technology Stack",
            subtitle: "Modern tools and frameworks we use",
            technologies: [
              { name: "Frontend", icon: "Monitor", description: "React, Next.js, TypeScript", color: "#61DAFB", bgColor: "#E3F2FD" },
              { name: "Backend", icon: "Server", description: "Node.js, Python, Java", color: "#339933", bgColor: "#E8F5E8" },
              { name: "Database", icon: "Database", description: "PostgreSQL, MongoDB, Redis", color: "#336791", bgColor: "#E3F2FD" },
              { name: "Cloud", icon: "Cloud", description: "AWS, Azure, Google Cloud", color: "#FF9900", bgColor: "#FFF3E0" }
            ]
          }
        },

        // Business Slider
        {
          type: "business-slider",
          id: "business-slider-section",
          data: {
            title: "Business Solutions",
            subtitle: "Comprehensive solutions for every industry",
            solutions: [
              { title: "E-commerce", description: "Complete online store solutions", icon: "ShoppingCart", color: "#E74C3C" },
              { title: "Healthcare", description: "Digital health platforms", icon: "Heart", color: "#27AE60" },
              { title: "Finance", description: "Fintech and banking solutions", icon: "DollarSign", color: "#F39C12" },
              { title: "Education", description: "Learning management systems", icon: "BookOpen", color: "#3498DB" }
            ]
          }
        },



        // Global Presence
        {
          type: "global-presence",
          id: "global-section",
          data: {
            title: "Global Presence",
            subtitle: "Serving clients worldwide",
            locations: [
              { city: "New York", country: "USA", timezone: "EST", icon: "MapPin", color: "#E74C3C" },
              { city: "London", country: "UK", timezone: "GMT", icon: "MapPin", color: "#3498DB" },
              { city: "Singapore", country: "Singapore", timezone: "SGT", icon: "MapPin", color: "#27AE60" },
              { city: "Sydney", country: "Australia", timezone: "AEST", icon: "MapPin", color: "#F39C12" }
            ]
          }
        },

        // Contact Info
        {
          type: "contact-info",
          id: "contact-section",
          data: {
            title: "Get in Touch",
            contactMethods: [
              { icon: "Phone", title: "Phone", value: "+1 (555) 123-4567", description: "Available 24/7" },
              { icon: "Mail", title: "Email", value: "hello@finbyz.com", description: "Response within 2 hours" },
              { icon: "MapPin", title: "Office", value: "123 Business Ave, Suite 100", description: "New York, NY 10001" }
            ],
            form: {
              title: "Send us a message",
              nameLabel: "Full Name",
              namePlaceholder: "Enter your full name",
              emailLabel: "Email Address",
              emailPlaceholder: "Enter your email",
              messageLabel: "Message",
              messagePlaceholder: "Tell us about your project",
              submitText: "Send Message"
            }
          }
        },

        // CTA
        {
          type: "cta",
          id: "final-cta-section",
          data: {
            title: "Ready to Get Started?",
            subtitle: "Transform your business with our solutions",
            description: "Join hundreds of businesses that have already accelerated their growth with our technology solutions.",
            primaryButton: { text: "Start Your Journey", icon: "Rocket", action: "start" },
            secondaryButton: { text: "Schedule Demo", icon: "Calendar", action: "demo" }
          }
        }
      ]
    }
  };

  return NextResponse.json(response, {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
  });
}



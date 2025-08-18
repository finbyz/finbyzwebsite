import { NextResponse } from 'next/server';

// ============================================================================
// ALL COMPONENTS SAMPLE DATA API
// ============================================================================

/**
 * GET endpoint that returns sample data for all available components
 * This creates a comprehensive page showcasing every component type
 */
export async function GET() {
  try {
    const allComponentsSampleData = {
      metadata: {
        title: "All Components Showcase - SectionsBasedRenderer",
        description: "Complete demonstration of all available components from the sections folder",
        keywords: ["components", "showcase", "sections", "renderer", "demo"]
      },
      sections: [
        // Hero Section
        {
          type: "hero",
          id: "hero-section",
          data: {
            title: "Complete Component Showcase",
            subtitle: "Every available component from the sections folder in one page",
            primaryButton: "Get Started",
            secondaryButton: "View Documentation",
            image: {
              src: "/Hero Brain 2.png",
              alt: "Component Showcase"
            },
            scrollTarget: "services-section"
          }
        },

        // Services Section
        {
          type: "services",
          id: "services-section",
          data: {
            title: "Our Core Services",
            subtitle: "Comprehensive solutions for modern businesses",
            services: [
              {
                icon: "BarChart3",
                title: "Analytics & Insights",
                description: "Data-driven decision making with advanced analytics",
                bgColor: "#EAF1F8",
                iconColor: "#1A5276",
                borderColor: "#1A5276"
              },
              {
                icon: "Zap",
                title: "AI Automation",
                description: "Intelligent automation for business processes",
                bgColor: "#FFF4E5",
                iconColor: "#FF8C00",
                borderColor: "#FF8C00"
              },
              {
                icon: "Code",
                title: "Custom Development",
                description: "Tailored solutions for unique requirements",
                bgColor: "#E8F8F2",
                iconColor: "#27AE60",
                borderColor: "#27AE60"
              },
              {
                icon: "Users",
                title: "Team Augmentation",
                description: "Expert developers and consultants",
                bgColor: "#F3EAF8",
                iconColor: "#8E44AD",
                borderColor: "#8E44AD"
              }
            ]
          }
        },

        // Benefits Section
        {
          type: "benefits",
          id: "benefits-section",
          data: {
            title: "Why Choose Our Solutions",
            subtitle: "Proven benefits that drive results",
            benefits: [
              {
                number: 60,
                suffix: "%",
                label: "Efficiency Improvement",
                header: "Maximum Efficiency",
                description: "Transform operations with intelligent automation",
                icon: "TrendingUp",
                palette: {
                  iconBg: "#FF8C00",
                  iconColor: "#fff"
                }
              },
              {
                number: 40,
                suffix: "%",
                label: "Cost Reduction",
                header: "Cost Effective",
                description: "Reduce operational costs significantly",
                icon: "DollarSign",
                palette: {
                  iconBg: "#27AE60",
                  iconColor: "#fff"
                }
              },
              {
                number: 99,
                suffix: "%",
                label: "Client Satisfaction",
                header: "Happy Clients",
                description: "Exceed expectations consistently",
                icon: "Heart",
                palette: {
                  iconBg: "#E74C3C",
                  iconColor: "#fff"
                }
              },
              {
                number: 24,
                suffix: "/7",
                label: "Support Available",
                header: "Always Here",
                description: "Round-the-clock support and maintenance",
                icon: "Clock",
                palette: {
                  iconBg: "#3498DB",
                  iconColor: "#fff"
                }
              }
            ],
            ctaButton: {
              text: "Experience the Benefits →",
              action: "benefits"
            }
          }
        },

        // Testimonials Section
        {
          type: "testimonials",
          id: "testimonials-section",
          data: {
            title: "What Our Clients Say",
            subtitle: "Trusted by businesses worldwide",
            testimonials: [
              {
                avatar: "SJ",
                rating: 5,
                quote: "Finbyz transformed our operations with their ERP implementation. The automation features alone saved us 40% in processing time.",
                author: "Sarah Johnson",
                company: "TechCorp Industries",
                position: "CTO"
              },
              {
                avatar: "MC",
                rating: 5,
                quote: "The AI automation they built for us is incredible. It handles complex workflows that used to take hours in minutes.",
                author: "Michael Chen",
                company: "DataFlow Solutions",
                position: "CEO"
              },
              {
                avatar: "AL",
                rating: 5,
                quote: "Professional team, excellent communication, and delivered exactly what we needed on time and budget.",
                author: "Amanda Lee",
                company: "InnovateLab",
                position: "Operations Director"
              }
            ]
          }
        },

        // Stats Showcase Section
        {
          type: "stats-showcase",
          id: "stats-section",
          data: {
            title: "Our Impact in Numbers",
            subtitle: "Metrics that tell our success story",
            stats: [
              {
                value: "200+",
                label: "Projects Completed",
                description: "Successfully delivered",
                icon: "CheckCircle",
                color: "#27AE60"
              },
              {
                value: "50+",
                label: "Countries Served",
                description: "Global presence",
                icon: "Globe",
                color: "#3498DB"
              },
              {
                value: "99.9%",
                label: "Uptime",
                description: "Reliable service",
                icon: "Shield",
                color: "#E74C3C"
              },
              {
                value: "1000+",
                label: "Happy Clients",
                description: "Satisfied customers",
                icon: "Users",
                color: "#8E44AD"
              }
            ]
          }
        },

        // Team Expertise Section
        {
          type: "team-expertise",
          id: "team-section",
          data: {
            title: "Meet Our Expert Team",
            subtitle: "Skilled professionals with years of experience",
            team: [
              {
                name: "John Doe",
                position: "Senior Developer",
                expertise: ["React", "Node.js", "AWS"],
                avatar: "/avatars/john.jpg",
                bio: "10+ years of experience in full-stack development",
                linkedin: "https://linkedin.com/in/johndoe"
              },
              {
                name: "Jane Smith",
                position: "AI Engineer",
                expertise: ["Machine Learning", "Python", "TensorFlow"],
                avatar: "/avatars/jane.jpg",
                bio: "Expert in AI and machine learning solutions",
                linkedin: "https://linkedin.com/in/janesmith"
              },
              {
                name: "Mike Johnson",
                position: "DevOps Engineer",
                expertise: ["Docker", "Kubernetes", "CI/CD"],
                avatar: "/avatars/mike.jpg",
                bio: "Specialist in cloud infrastructure and automation",
                linkedin: "https://linkedin.com/in/mikejohnson"
              }
            ]
          }
        },

        // Case Studies Section
        {
          type: "case-studies",
          id: "case-studies-section",
          data: {
            title: "Success Stories",
            subtitle: "Real results from real clients",
            cases: [
              {
                title: "Digital Transformation Success",
                company: "TechCorp",
                industry: "Technology",
                challenge: "Legacy system limitations and manual processes",
                solution: "Modern ERP implementation with AI automation",
                results: [
                  "60% increase in efficiency",
                  "40% reduction in operational costs",
                  "Real-time data insights"
                ],
                image: "/case-studies/techcorp.jpg",
                logo: "/logos/techcorp.png"
              },
              {
                title: "AI-Powered Analytics Platform",
                company: "DataFlow Solutions",
                industry: "Finance",
                challenge: "Complex data processing and reporting",
                solution: "Custom AI analytics platform with automated reporting",
                results: [
                  "300% faster data processing",
                  "95% reduction in manual reporting",
                  "Predictive insights capabilities"
                ],
                image: "/case-studies/dataflow.jpg",
                logo: "/logos/dataflow.png"
              }
            ]
          }
        },

        // Service Pricing Section
        {
          type: "service-pricing",
          id: "pricing-section",
          data: {
            title: "Transparent Pricing",
            subtitle: "Choose the perfect plan for your business needs",
            pricingPlans: [
              {
                name: "Starter",
                price: "$2,999",
                period: "month",
                description: "Perfect for small businesses and startups",
                icon: "Zap",
                features: [
                  "Basic Website Development",
                  "Responsive Design",
                  "SEO Optimization",
                  "3 Months Support",
                  "Basic Analytics"
                ],
                popular: false,
                iconColor: "#1A5276",
                iconBg: "#EAF1F8"
              },
              {
                name: "Professional",
                price: "$8,999",
                period: "month",
                description: "Ideal for growing businesses with advanced needs",
                icon: "Shield",
                features: [
                  "Custom Web Application",
                  "Database Integration",
                  "API Development",
                  "6 Months Support",
                  "Advanced Analytics"
                ],
                popular: true,
                iconColor: "#FF8C00",
                iconBg: "#FFF4E5"
              },
              {
                name: "Enterprise",
                price: "$19,999",
                period: "month",
                description: "Comprehensive solutions for large organizations",
                icon: "Globe",
                features: [
                  "Full-stack Development",
                  "Microservices Architecture",
                  "Cloud Infrastructure",
                  "12 Months Support",
                  "Real-time Analytics"
                ],
                popular: false,
                iconColor: "#27AE60",
                iconBg: "#E8F8F2"
              }
            ]
          }
        },

        // Technology Stack Section
        {
          type: "technology-stack",
          id: "tech-stack-section",
          data: {
            title: "Our Technology Stack",
            subtitle: "Modern tools and frameworks we use",
            technologies: [
              {
                name: "Frontend",
                icon: "Monitor",
                description: "React, Next.js, TypeScript",
                color: "#61DAFB",
                bgColor: "#E3F2FD"
              },
              {
                name: "Backend",
                icon: "Server",
                description: "Node.js, Python, Java",
                color: "#339933",
                bgColor: "#E8F5E8"
              },
              {
                name: "Database",
                icon: "Database",
                description: "PostgreSQL, MongoDB, Redis",
                color: "#336791",
                bgColor: "#E3F2FD"
              },
              {
                name: "Cloud",
                icon: "Cloud",
                description: "AWS, Azure, Google Cloud",
                color: "#FF9900",
                bgColor: "#FFF3E0"
              }
            ]
          }
        },

        // Process Timeline Section
        {
          type: "process-timeline",
          id: "process-section",
          data: {
            title: "Our Development Process",
            subtitle: "How we deliver exceptional results",
            steps: [
              {
                step: 1,
                title: "Discovery & Planning",
                description: "Understand requirements and create detailed project plan",
                icon: "Search",
                color: "#3498DB"
              },
              {
                step: 2,
                title: "Design & Prototyping",
                description: "Create wireframes and interactive prototypes",
                icon: "Palette",
                color: "#E74C3C"
              },
              {
                step: 3,
                title: "Development",
                description: "Build the solution with best practices",
                icon: "Code",
                color: "#27AE60"
              },
              {
                step: 4,
                title: "Testing & QA",
                description: "Comprehensive testing and quality assurance",
                icon: "CheckCircle",
                color: "#8E44AD"
              },
              {
                step: 5,
                title: "Deployment",
                description: "Launch and monitor the solution",
                icon: "Rocket",
                color: "#F39C12"
              }
            ]
          }
        },

        // Business Slider Section
        {
          type: "business-slider",
          id: "business-slider-section",
          data: {
            title: "Business Solutions",
            subtitle: "Comprehensive solutions for every industry",
            solutions: [
              {
                title: "E-commerce",
                description: "Complete online store solutions",
                icon: "ShoppingCart",
                color: "#E74C3C"
              },
              {
                title: "Healthcare",
                description: "Digital health platforms",
                icon: "Heart",
                color: "#27AE60"
              },
              {
                title: "Finance",
                description: "Fintech and banking solutions",
                icon: "DollarSign",
                color: "#F39C12"
              },
              {
                title: "Education",
                description: "Learning management systems",
                icon: "BookOpen",
                color: "#3498DB"
              }
            ]
          }
        },

        // Innovation Lab Section
        {
          type: "innovation-lab",
          id: "innovation-section",
          data: {
            title: "Innovation Lab",
            subtitle: "Research and development for future technologies",
            projects: [
              {
                title: "AI-Powered Analytics",
                description: "Next-generation business intelligence",
                status: "In Progress",
                progress: 75,
                icon: "Brain",
                color: "#8E44AD",
                iconBg: "#F3EAF8"
              },
              {
                title: "Blockchain Integration",
                description: "Secure and transparent solutions",
                status: "Planning",
                progress: 25,
                icon: "Link",
                color: "#27AE60",
                iconBg: "#E8F8F2"
              },
              {
                title: "IoT Solutions",
                description: "Connected device management",
                status: "Research",
                progress: 10,
                icon: "Wifi",
                color: "#3498DB",
                iconBg: "#E3F2FD"
              }
            ]
          }
        },

        // Security Compliance Section
        {
          type: "security-compliance",
          id: "security-section",
          data: {
            title: "Security & Compliance",
            subtitle: "Enterprise-grade security for your peace of mind",
            certifications: [
              {
                name: "ISO 27001",
                description: "Information Security Management",
                icon: "Shield",
                status: "Certified",
                color: "#27AE60"
              },
              {
                name: "SOC 2 Type II",
                description: "Security and Availability Controls",
                icon: "Lock",
                status: "Certified",
                color: "#3498DB"
              },
              {
                name: "GDPR",
                description: "Data Protection Compliance",
                icon: "UserCheck",
                status: "Compliant",
                color: "#8E44AD"
              }
            ],
            features: [
              "End-to-end encryption",
              "Multi-factor authentication",
              "Regular security audits",
              "24/7 monitoring"
            ]
          }
        },

        // Global Presence Section
        {
          type: "global-presence",
          id: "global-section",
          data: {
            title: "Global Presence",
            subtitle: "Serving clients worldwide",
            locations: [
              {
                city: "New York",
                country: "USA",
                timezone: "EST",
                icon: "MapPin",
                color: "#E74C3C"
              },
              {
                city: "London",
                country: "UK",
                timezone: "GMT",
                icon: "MapPin",
                color: "#3498DB"
              },
              {
                city: "Singapore",
                country: "Singapore",
                timezone: "SGT",
                icon: "MapPin",
                color: "#27AE60"
              },
              {
                city: "Sydney",
                country: "Australia",
                timezone: "AEST",
                icon: "MapPin",
                color: "#F39C12"
              }
            ]
          }
        },

        // Contact Info Section
        {
          type: "contact-info",
          id: "contact-section",
          data: {
            title: "Get in Touch",
            contactMethods: [
              {
                icon: "Phone",
                title: "Phone",
                value: "+1 (555) 123-4567",
                description: "Available 24/7"
              },
              {
                icon: "Mail",
                title: "Email",
                value: "hello@finbyz.com",
                description: "Response within 2 hours"
              },
              {
                icon: "MapPin",
                title: "Office",
                value: "123 Business Ave, Suite 100",
                description: "New York, NY 10001"
              }
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

        // CTA Section
        {
          type: "cta",
          id: "final-cta-section",
          data: {
            title: "Ready to Get Started?",
            subtitle: "Transform your business with our solutions",
            description: "Join hundreds of businesses that have already accelerated their growth with our technology solutions.",
            primaryButton: {
              text: "Start Your Journey",
              icon: "Rocket",
              action: "start"
            },
            secondaryButton: {
              text: "Schedule Demo",
              icon: "Calendar",
              action: "demo"
            }
          }
        }
      ]
    };

    return NextResponse.json(allComponentsSampleData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });

  } catch (error) {
    console.error('Error generating all components sample data:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate sample data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

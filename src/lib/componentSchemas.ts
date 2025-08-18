export interface ComponentSchema {
  id: string;
  name: string;
  description: string;
  category: string;
  schema: any;
  example: any;
}

export const componentSchemas: ComponentSchema[] = [
  {
    id: "services-overview",
    name: "Services Overview",
    description: "Four-tile services overview grid with one highlighted card (e.g., IT Consulting).",
    category: "Sections",
    schema: {
      component: "ServicesOverview",
      data: {
        services: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              href: { type: "string" },
              icon: { type: "string" },
              imageSrc: { type: "string" }
            }
          }
        },
        highlightedIndex: { type: "number" }
      }
    },
    example: {
      component: "ServicesOverview",
      data: {
        highlightedIndex: 1,
        services: [
          { title: "ERP Implementation", description: "Technology at work, a better way of doing the things!", icon: "BarChart3" },
          { title: "IT Consulting", description: "We help you align technology to achieve your business goals.", icon: "Briefcase" },
          { title: "Software Development", description: "From idea to production with modern engineering practices.", icon: "Code2" },
          { title: "Data Analytics", description: "Insights that accelerate decision‑making and growth.", icon: "Database" }
        ]
      }
    }
  },

  {
    id: "file-upload",
    name: "File Upload",
    description: "Drag & drop file upload with preview and progress tracking",
    category: "Interactive",
    schema: {
      component: "FileUpload",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        maxFiles: { type: "number" },
        maxFileSize: { type: "number" },
        acceptedTypes: { type: "array", items: { type: "string" } },
        uploadButtonText: { type: "string" },
        dragText: { type: "string" }
      }
    },
    example: {
      component: "FileUpload",
      data: {
        title: "Upload Your Files",
        subtitle: "Drag and drop files here or click to browse",
        maxFiles: 5,
        maxFileSize: 10,
        acceptedTypes: ["image/*", "application/pdf", "text/*"],
        uploadButtonText: "Upload Files",
        dragText: "Drop files here"
      }
    }
  },

  {
    id: "erp-modules",
    name: "ERP Modules",
    description: "ERP modules showcase with statistics, company info, and interactive module cards",
    category: "Sections",
    schema: {
      component: "ERPModules",
      data: {
        companyName: { type: "string" },
        companyDescription: { type: "string" },
        yearsOfExperience: { type: "number" },
        statistics: {
          type: "array",
          items: {
            type: "object",
            properties: {
              number: { type: "string" },
              label: { type: "string" }
            }
          }
        },
        modules: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              title: { type: "string" },
              quote: { type: "string" },
              author: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "ERPModules",
      data: {
        companyName: "Finbyz Tech Pvt Ltd",
        companyDescription: "Finbyz Tech Pvt Ltd track record spans over 10+ years of IT business solutions. We have technology in our genes. We provide innovative solution that work for all the Industries/businesses. We are adept enough to help fit an ERP solution that exactly meets your goals.",
        yearsOfExperience: 10,
        statistics: [
          { number: "100+", label: "Completed Projects" },
          { number: "6000+", label: "Active Users" },
          { number: "25+", label: "Expert Resources" }
        ],
        services: [
          {
            id: "erp-implementation",
            title: "ERP Implementation",
            description: "Technology at work, A better way of doing the Things!"
          },
          {
            id: "it-consulting",
            title: "IT Consulting",
            description: "It's about your company, Your Business & Your Success."
          },
          {
            id: "software-development",
            title: "Software Development",
            description: "Building digital solutions that drive your business forward."
          },
          {
            id: "data-analytics",
            title: "Data Analytics",
            description: "Transform data into actionable insights for growth."
          }
        ]
      }
    }
  },

  {
    id: "business-slider",
    name: "Business Slider",
    description: "A modern business slider with a digital transformation message, business illustration, and free demo form.",
    category: "Sections",
    schema: {
      component: "BusinessSlider",
      data: {
        // No props required for now, but you can extend this
      }
    },
    example: {
      component: "BusinessSlider",
      data: {}
    }
  },
  {
    id: "hero-section",
    name: "Hero Section",
    description: "Main landing section with headline, description, and call-to-action buttons",
    category: "Hero",
    schema: {
      component: "HeroSection",
      data: {
        headline: { type: "string" },
        highlightText: { type: "string" },
        description: { type: "string" },
        primaryButton: {
          type: "object",
          properties: {
            text: { type: "string" },
            action: { type: "string" }
          }
        },
        secondaryButton: {
          type: "object",
          properties: {
            text: { type: "string" },
            action: { type: "string" }
          }
        }
      }
    },
    example: {
      component: "HeroSection",
      data: {
        headline: "Empower Your Business with",
        highlightText: "AI & ERP",
        description: "Unlock efficiency, automation, and growth with next-gen technology and expert talent.",
        primaryButton: {
          text: "Book a Free Consultation",
          action: "/contact"
        },
        secondaryButton: {
          text: "Watch Demo",
          action: "/demo"
        }
      }
    }
  },

  {
    id: "hero_section_without_button1",
    name: "Hero Section Without Button",
    description: "Hero section with title, subtitle, and image - no action buttons",
    category: "Sections",
    schema: {
      component: "Hero",
      data: {
        title: { type: "string", description: "Main title text" },
        subtitle: { type: "string", description: "Subtitle description" },
        imageSrc: { type: "string", description: "Hero image source path" },
        imageAlt: { type: "string", description: "Alt text for hero image" }
      },
      required: ["title", "subtitle"]
    },
    example: {
      component: "Hero",
      data: {
        title: "Empower Your Business with AI & ERP",
        subtitle: "Unlock efficiency, automation, and growth with next-gen technology and expert talent.",
        imageSrc: "/Steer Your Vision.png",
        imageAlt: "Steer Your Vision - Digital transformation and business guidance"
      }
    }
  },

  {
    id: "testimonials",
    name: "Testimonials Section",
    description: "Customer testimonials with ratings, quotes, and client logos",
    category: "Content",
    schema: {
      component: "Testimonials",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        testimonials: {
          type: "array",
          items: {
            type: "object",
            properties: {
              quote: { type: "string", description: "Testimonial quote text" },
              author: { type: "string", description: "Author name" },
              company: { type: "string", description: "Company name" },
              initials: { type: "string", description: "Author initials for avatar" },
              rating: { type: "number", description: "Star rating (1-5)" },
              palette: {
                type: "object",
                properties: {
                  color: { type: "string", description: "Primary color" },
                  bg: { type: "string", description: "Background color" }
                }
              },
              url: { type: "string", description: "Link to full review" }
            }
          }
        }
      }
    },
    example: {
      component: "Testimonials",
      data: {
        title: "What Our Clients Say",
        subtitle: "Real feedback from satisfied customers",
        testimonials: [
          {
            quote: "Finbyz transformed our entire operation with their ERP implementation. The efficiency gains were immediate and substantial.",
            author: "Sarah Johnson",
            company: "TechCorp",
            initials: "SJ",
            rating: 5,
            palette: { color: "#1A5276", bg: "#EAF1F8" },
            url: "/reviews/techcorp"
          }
        ]
      }
    }
  },

  {
    id: "service-cards",
    name: "Service Cards",
    description: "Grid of service cards with icons, titles, descriptions, and tags",
    category: "Content",
    schema: {
      component: "ServiceCards",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        services: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              icon: { type: "string" },
              tags: { type: "array", items: { type: "string" } }
            }
          }
        }
      }
    },
    example: {
      component: "ServiceCards",
      data: {
        title: "What We Do – Snapshot",
        subtitle: "Comprehensive technology solutions for modern businesses",
        services: [
          {
            title: "ERP Implementation",
            description: "Streamline operations and scale faster with expert ERPNext implementations.",
            icon: "BarChart3",
            tags: ["ERP", "Analytics", "Integration"]
          }
        ]
      }
    }
  },

  {
    id: "stats-section",
    name: "Stats Section",
    description: "Statistics display with icons, numbers, and descriptions",
    category: "Content",
    schema: {
      component: "StatsSection",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        stats: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              value: { type: "string" },
              description: { type: "string" },
              subtitle: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "StatsSection",
      data: {
        title: "Why Choose Finbyz",
        subtitle: "Proven results that speak for themselves",
        stats: [
          {
            title: "Proven Track Record",
            value: "10+",
            description: "Decade of expertise in delivering cutting-edge solutions",
            subtitle: "Years of Proven Experience",
            icon: "Award"
          }
        ]
      }
    }
  },

  {
    id: "call-to-action",
    name: "Call to Action",
    description: "Action-oriented section with buttons and compelling text",
    category: "Sections",
    schema: {
      component: "CallToAction",
      data: {
        badge: {
          type: "object",
          properties: {
            text: { type: "string" },
            icon: { type: "string" }
          }
        },
        headline: { type: "string" },
        highlightText: { type: "string" },
        description: { type: "string" },
        buttons: {
          type: "array",
          items: {
            type: "object",
            properties: {
              text: { type: "string" },
              action: { type: "string" },
              variant: { type: "string", enum: ["primary", "secondary"] },
              icon: { type: "string" }
            }
          }
        },
        footer: {
          type: "object",
          properties: {
            text: { type: "string" },
            icon: { type: "string" }
          }
        }
      }
    },
    example: {
      component: "CallToAction",
      data: {
        badge: {
          text: "Talk to our Experts",
          icon: "Calendar"
        },
        headline: "Ready to Scale with",
        highlightText: "Smart Tech?",
        description: "Transform your business processes with AI-powered automation and expert implementation.",
        buttons: [
          {
            text: "Book Demo",
            action: "/demo",
            variant: "primary",
            icon: "Calendar"
          }
        ],
        footer: {
          text: "Trusted by 100+ businesses",
          icon: "Calendar"
        }
      }
    }
  },

  {
    id: "accordion-section",
    name: "Accordion Section",
    description: "Expandable FAQ or content sections",
    category: "Interactive",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              content: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our services",
      items: [
        {
          title: "What services does Finbyz offer?",
          content: "We offer comprehensive technology solutions including ERP implementation, AI automation, custom software development, and resource augmentation services."
        }
      ]
    }
  },

  {
    id: "image-gallery",
    name: "Image Gallery",
    description: "Grid of images with hover effects and titles",
    category: "Media",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        images: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              src: { type: "string" },
              alt: { type: "string" },
              title: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Our Work Gallery",
      subtitle: "Explore our latest projects and solutions",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          alt: "Business Analytics",
          title: "Data Analytics"
        }
      ]
    }
  },

  {
    id: "testimonial-carousel",
    name: "Testimonial Carousel",
    description: "Rotating customer testimonials with ratings",
    category: "Content",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        testimonials: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              role: { type: "string" },
              content: { type: "string" },
              rating: { type: "number" }
            }
          }
        }
      }
    },
    example: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from satisfied customers",
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CTO, TechCorp",
          content: "Finbyz transformed our entire operation with their ERP implementation.",
          rating: 5
        }
      ]
    }
  },

  {
    id: "pricing-cards",
    name: "Pricing Cards",
    description: "Pricing plans with features and call-to-action",
    category: "Commerce",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        plans: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              price: { type: "string" },
              period: { type: "string" },
              features: { type: "array", items: { type: "string" } },
              popular: { type: "boolean" },
              buttonText: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Choose Your Plan",
      subtitle: "Flexible pricing options for every business size",
      plans: [
        {
          name: "Starter",
          price: "$99",
          period: "per month",
          features: ["Basic ERP features", "Email support", "5 user licenses"],
          popular: false,
          buttonText: "Get Started"
        }
      ]
    }
  },

  {
    id: "contact-form",
    name: "Contact Form",
    description: "Contact form with company information",
    category: "Forms",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        contactInfo: {
          type: "object",
          properties: {
            phone: { type: "string" },
            email: { type: "string" },
            address: { type: "string" },
            hours: { type: "string" }
          }
        },
        fields: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              type: { type: "string" },
              label: { type: "string" },
              required: { type: "boolean" }
            }
          }
        },
        submitButton: { type: "string" }
      }
    },
    example: {
      title: "Get In Touch",
      subtitle: "Ready to transform your business? Let's start the conversation.",
      contactInfo: {
        phone: "+1 (555) 123-4567",
        email: "hello@finbyz.com",
        address: "123 Business Ave, Tech City, TC 12345",
        hours: "Mon-Fri 9AM-6PM EST"
      },
      fields: [
        { name: "name", type: "text", label: "Full Name", required: true },
        { name: "email", type: "email", label: "Email Address", required: true }
      ],
      submitButton: "Send Message"
    }
  },

  {
    id: "timeline-section",
    name: "Timeline Section",
    description: "Chronological timeline of events or milestones",
    category: "Content",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              year: { type: "string" },
              title: { type: "string" },
              description: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Our Journey",
      subtitle: "Key milestones in our company's growth",
      items: [
        {
          year: "2024",
          title: "AI Integration Launch",
          description: "Successfully launched AI-powered automation features across all platforms",
          icon: "Cpu"
        }
      ]
    }
  },

  {
    id: "team-section",
    name: "Team Section",
    description: "Team member profiles with photos and bios",
    category: "Content",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        members: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              role: { type: "string" },
              image: { type: "string" },
              bio: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Meet Our Team",
      subtitle: "The experts behind our innovative solutions",
      members: [
        {
          name: "Alex Johnson",
          role: "CEO & Founder",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          bio: "10+ years in enterprise technology"
        }
      ]
    }
  },

  {
    id: "blog-grid",
    name: "Blog Grid",
    description: "Grid of blog posts with images and metadata",
    category: "Content",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        posts: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              excerpt: { type: "string" },
              image: { type: "string" },
              date: { type: "string" },
              author: { type: "string" },
              category: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Latest Insights",
      subtitle: "Stay updated with industry trends and best practices",
      posts: [
        {
          title: "The Future of ERP Systems",
          excerpt: "Discover how AI is revolutionizing enterprise resource planning.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
          date: "March 15, 2024",
          author: "Alex Johnson",
          category: "Technology"
        }
      ]
    }
  },

  {
    id: "faq-section",
    name: "FAQ Section",
    description: "Frequently asked questions with expandable answers",
    category: "Interactive",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question: { type: "string" },
              answer: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our services",
      questions: [
        {
          question: "What makes your ERP solutions different?",
          answer: "Our ERP solutions are built with modern technology, AI integration, and user-centric design."
        }
      ]
    }
  },






  {
    id: "data-table",
    name: "Data Table",
    description: "Interactive data table with sorting and status indicators",
    category: "Data",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        columns: {
          type: "array",
          items: { type: "string" }
        },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              name: { type: "string" },
              status: { type: "string" },
              progress: { type: "number" },
              priority: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Data Table",
      subtitle: "Interactive data table with sorting and filtering",
      columns: ["Project", "Status", "Progress", "Priority"],
      data: [
        {
          id: 1,
          name: "ERP Implementation",
          status: "Completed",
          progress: 100,
          priority: "High"
        }
      ]
    }
  },

  {
    id: "modal-dialog",
    name: "Modal Dialog",
    description: "Overlay modal with content and actions",
    category: "Interactive",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        modal: {
          type: "object",
          properties: {
            title: { type: "string" },
            content: { type: "string" },
            primaryButton: { type: "string" },
            secondaryButton: { type: "string" }
          }
        }
      }
    },
    example: {
      title: "Modal Dialog",
      subtitle: "Interactive modal dialog component",
      modal: {
        title: "Modal Title",
        content: "This is an example modal dialog. You can add any content here including forms, images, or other components.",
        primaryButton: "Confirm",
        secondaryButton: "Cancel"
      }
    }
  },

  {
    id: "notification-toast",
    name: "Notification Toast",
    description: "Toast notifications with different types",
    category: "Feedback",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        toasts: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string", enum: ["success", "error", "warning", "info"] },
              message: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Notification Toasts",
      subtitle: "Interactive toast notifications",
      toasts: [
        {
          type: "success",
          message: "Success! Your action was completed."
        }
      ]
    }
  },

  {
    id: "search-bar",
    name: "Search Bar",
    description: "Search input with suggestions",
    category: "Navigation",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        placeholder: { type: "string" },
        suggestions: {
          type: "array",
          items: { type: "string" }
        }
      }
    },
    example: {
      title: "Search Component",
      subtitle: "Interactive search with suggestions",
      placeholder: "Search for services...",
      suggestions: ["ERP Implementation", "AI Automation", "Custom Development"]
    }
  },

  {
    id: "filter-tags",
    name: "Filter Tags",
    description: "Interactive filter tags for content organization",
    category: "Navigation",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        tags: {
          type: "array",
          items: { type: "string" }
        }
      }
    },
    example: {
      title: "Filter Tags",
      subtitle: "Interactive filter tags for content organization",
      tags: ["ERP", "AI", "Automation", "Development", "Integration"]
    }
  },

  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description: "Navigation breadcrumbs for page hierarchy",
    category: "Navigation",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: { type: "string" },
              href: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Breadcrumbs",
      subtitle: "Navigation breadcrumbs for page hierarchy",
      items: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "ERP Implementation", href: "/services/erp" }
      ]
    }
  },

  {
    id: "sidebar-menu",
    name: "Sidebar Menu",
    description: "Collapsible sidebar navigation",
    category: "Navigation",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        menuItems: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Sidebar Menu",
      subtitle: "Collapsible sidebar navigation",
      menuItems: [
        { id: "dashboard", name: "Dashboard", icon: "Home" },
        { id: "projects", name: "Projects", icon: "Folder" }
      ]
    }
  },

  {
    id: "footer-links",
    name: "Footer Links",
    description: "Organized footer navigation",
    category: "Navigation",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        sections: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              links: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    href: { type: "string" }
                  }
                }
              }
            }
          }
        },
        copyright: { type: "string" }
      }
    },
    example: {
      title: "Footer Links",
      subtitle: "Organized footer navigation",
      sections: [
        {
          title: "Services",
          links: [
            { name: "ERP Implementation", href: "#" },
            { name: "AI Automation", href: "#" }
          ]
        }
      ],
      copyright: "© 2024 Finbyz Tech. All rights reserved."
    }
  },

  {
    id: "social-media-icons",
    name: "Social Media Icons",
    description: "Social media link components",
    category: "Navigation",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        socialLinks: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              icon: { type: "string" },
              href: { type: "string" },
              color: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Social Media Icons",
      subtitle: "Social media link components",
      socialLinks: [
        { name: "Twitter", icon: "𝕏", href: "#", color: "hover:text-blue-400" },
        { name: "LinkedIn", icon: "in", href: "#", color: "hover:text-blue-600" }
      ]
    }
  },

  {
    id: "loading-spinner",
    name: "Loading Spinner",
    description: "Loading and progress indicators",
    category: "Feedback",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        spinners: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string", enum: ["spinner", "thin-spinner", "dots"] },
              label: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Loading Spinner",
      subtitle: "Loading and progress indicators",
      spinners: [
        { type: "spinner", label: "Spinner" },
        { type: "thin-spinner", label: "Thin Spinner" },
        { type: "dots", label: "Dots" }
      ]
    }
  },

  {
    id: "error-boundary",
    name: "Error Boundary",
    description: "Error handling component",
    category: "Feedback",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        error: {
          type: "object",
          properties: {
            title: { type: "string" },
            message: { type: "string" },
            buttonText: { type: "string" }
          }
        }
      }
    },
    example: {
      title: "Error Boundary",
      subtitle: "Error handling component",
      error: {
        title: "Something went wrong",
        message: "We encountered an error while processing your request. Please try again.",
        buttonText: "Try Again"
      }
    }
  },

  {
    id: "tooltip-component",
    name: "Tooltip Component",
    description: "Interactive tooltip elements",
    category: "Interactive",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        tooltips: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              text: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      title: "Tooltip Component",
      subtitle: "Interactive tooltip elements",
      tooltips: [
        {
          id: "info",
          text: "This is an informational tooltip",
          icon: "Info"
        }
      ]
    }
  },

  {
    id: "comment",
    name: "Comment Section",
    description: "Interactive comment section with user testimonials, ratings, and engagement features",
    category: "Content",
    schema: {
      component: "Comment",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        comments: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              user: { type: "string" },
              avatar: { type: "string", optional: true },
              rating: { type: "number", min: 1, max: 5 },
              comment: { type: "string" },
              date: { type: "string" },
              likes: { type: "number" },
              isLiked: { type: "boolean", optional: true }
            }
          }
        },
        callToAction: {
          type: "object",
          properties: {
            title: { type: "string" },
            subtitle: { type: "string" },
            buttonText: { type: "string" },
            buttonAction: { type: "string" }
          }
        }
      },
      required: ["title", "subtitle", "comments"]
    },
    example: {
      component: "Comment",
      data: {
        title: "What Our Clients Say",
        subtitle: "Don't just take our word for it. Here's what our valued clients have to say about their experience working with us.",
        comments: [
          {
            id: 1,
            user: "Sarah Johnson",
            avatar: "/avatars/sarah.jpg",
            rating: 5,
            comment: "Absolutely fantastic experience! The team at Finbyz delivered beyond our expectations.",
            date: "2024-01-15",
            likes: 24,
            isLiked: false
          },
          {
            id: 2,
            user: "Michael Chen",
            avatar: "/avatars/michael.jpg",
            rating: 5,
            comment: "Outstanding service and support throughout the entire process.",
            date: "2024-01-12",
            likes: 18,
            isLiked: false
          }
        ],
        callToAction: {
          title: "Join Our Happy Clients",
          subtitle: "Ready to experience the same level of excellence? Let's start your project today!",
          buttonText: "Start Your Project",
          buttonAction: "/contact"
        }
      }
    }
  },

  {
    id: "features",
    name: "Features Section",
    description: "Feature showcase with icons, descriptions, and statistics in a responsive grid layout",
    category: "Content",
    schema: {
      component: "Features",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        features: {
          type: "array",
          items: {
            type: "object",
            properties: {
              icon: { type: "string", description: "Icon name" },
              title: { type: "string", description: "Feature title" },
              description: { type: "string", description: "Feature description" },
              iconColor: { type: "string", description: "Icon color hex code" },
              iconBg: { type: "string", description: "Icon background color hex code" },
              stats: { type: "string", description: "Feature statistics" }
            }
          }
        }
      },
      required: ["title", "subtitle", "features"]
    },
    example: {
      component: "Features",
      data: {
        title: "Powerful Features",
        subtitle: "Discover the advanced capabilities that make our platform the choice for modern businesses",
        features: [
          {
            icon: "Zap",
            title: "Lightning Fast Performance",
            description: "Optimized for speed and efficiency with modern technology stack and intelligent caching.",
            iconColor: "#1A5276",
            iconBg: "#EAF1F8",
            stats: "10x faster"
          },
          {
            icon: "Shield",
            title: "Enterprise Security",
            description: "Bank-level security with encryption, compliance standards, and regular security audits.",
            iconColor: "#FF8C00",
            iconBg: "#FFF4E5",
            stats: "99.9% secure"
          }
        ]
      }
    }
  },

  {
    id: "client-success-stories",
    name: "Client Success Stories",
    description: "Showcase of client success stories with detailed case studies and results",
    category: "Content",
    schema: {
      component: "ClientSuccessStories",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        stories: {
          type: "array",
          items: {
            type: "object",
            properties: {
              company: { type: "string" },
              industry: { type: "string" },
              logo: { type: "string" },
              challenge: { type: "string" },
              solution: { type: "string" },
              results: {
                type: "object",
                properties: {
                  performance: { type: "string" },
                  users: { type: "string" },
                  revenue: { type: "string" },
                  uptime: { type: "string" }
                }
              },
              duration: { type: "string" },
              rating: { type: "number" },
              testimonial: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "stories"]
    },
    example: {
      component: "ClientSuccessStories",
      data: {
        title: "Client Success Stories",
        subtitle: "Real results from real clients. Discover how we've transformed businesses across industries",
        stories: [
          {
            company: "TechCorp Solutions",
            industry: "SaaS Platform",
            logo: "TC",
            challenge: "Scaling their platform to handle 10x user growth",
            solution: "Implemented microservices architecture with auto-scaling",
            results: {
              performance: "300%",
              users: "50K+",
              revenue: "200%",
              uptime: "99.9%"
            },
            duration: "6 months",
            rating: 5,
            testimonial: "The team delivered exceptional results, exceeding our expectations."
          }
        ]
      }
    }
  },

  {
    id: "industry-solutions",
    name: "Industry Solutions",
    description: "Industry-specific solutions and expertise across different sectors",
    category: "Content",
    schema: {
      component: "IndustrySolutions",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        solutions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              industry: { type: "string" },
              icon: { type: "string" },
              description: { type: "string" },
              solutions: { type: "array", items: { type: "string" } },
              benefits: { type: "array", items: { type: "string" } },
              stats: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "solutions"]
    },
    example: {
      component: "IndustrySolutions",
      data: {
        title: "Industry Solutions",
        subtitle: "Tailored technology solutions designed specifically for your industry's unique challenges",
        solutions: [
          {
            industry: "Healthcare",
            icon: "Heart",
            description: "Secure, HIPAA-compliant solutions for patient care",
            solutions: ["Patient Management Systems", "Telemedicine Platforms"],
            benefits: ["HIPAA Compliance", "Real-time Monitoring"],
            stats: "25+ healthcare clients"
          }
        ]
      }
    }
  },

  {
    id: "stats-showcase",
    name: "Stats Showcase",
    description: "Animated statistics and metrics with counters and visual elements",
    category: "Content",
    schema: {
      component: "StatsShowcase",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        stats: {
          type: "array",
          items: {
            type: "object",
            properties: {
              icon: { type: "string" },
              value: { type: "number" },
              suffix: { type: "string" },
              label: { type: "string" },
              description: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "stats"]
    },
    example: {
      component: "StatsShowcase",
      data: {
        title: "Our Impact in Numbers",
        subtitle: "Discover the scale and success of our solutions through these key metrics",
        stats: [
          {
            icon: "TrendingUp",
            value: 98,
            suffix: "%",
            label: "Client Satisfaction",
            description: "Based on feedback from our clients worldwide"
          }
        ]
      }
    }
  },

  {
    id: "team-expertise",
    name: "Team Expertise",
    description: "Showcase of team expertise areas and specializations",
    category: "Content",
    schema: {
      component: "TeamExpertise",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        expertise: {
          type: "array",
          items: {
            type: "object",
            properties: {
              category: { type: "string" },
              icon: { type: "string" },
              experts: { type: "number" },
              experience: { type: "string" },
              skills: { type: "array", items: { type: "string" } },
              description: { type: "string" },
              projects: { type: "number" }
            }
          }
        }
      },
      required: ["title", "subtitle", "expertise"]
    },
    example: {
      component: "TeamExpertise",
      data: {
        title: "Team Expertise",
        subtitle: "Meet our diverse team of experts with deep domain knowledge",
        expertise: [
          {
            category: "Frontend Development",
            icon: "Code",
            experts: 15,
            experience: "8+ years",
            skills: ["React", "Next.js", "TypeScript"],
            description: "Expert frontend developers creating responsive interfaces",
            projects: 200
          }
        ]
      }
    }
  },

  {
    id: "technology-stack",
    name: "Technology Stack",
    description: "Showcase of technologies and tools used in development",
    category: "Content",
    schema: {
      component: "TechnologyStack",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        technologies: {
          type: "array",
          items: {
            type: "object",
            properties: {
              category: { type: "string" },
              icon: { type: "string" },
              technologies: { type: "array", items: { type: "string" } },
              description: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "technologies"]
    },
    example: {
      component: "TechnologyStack",
      data: {
        title: "Technology Stack",
        subtitle: "Cutting-edge technologies and tools that power our innovative solutions",
        technologies: [
          {
            category: "Frontend",
            icon: "Code",
            technologies: ["React", "Next.js", "TypeScript"],
            description: "Modern, responsive web applications"
          }
        ]
      }
    }
  },

  {
    id: "service-pricing",
    name: "Service Pricing",
    description: "Transparent pricing plans with features and benefits",
    category: "Business",
    schema: {
      component: "ServicePricing",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        plans: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              price: { type: "string" },
              period: { type: "string" },
              description: { type: "string" },
              features: { type: "array", items: { type: "string" } },
              popular: { type: "boolean" }
            }
          }
        }
      },
      required: ["title", "subtitle", "plans"]
    },
    example: {
      component: "ServicePricing",
      data: {
        title: "Transparent Pricing",
        subtitle: "Choose the perfect plan for your business needs",
        plans: [
          {
            name: "Starter",
            price: "$2,999",
            period: "month",
            description: "Perfect for small businesses",
            features: ["Basic Website Development", "Responsive Design", "SEO Optimization"],
            popular: false
          }
        ]
      }
    }
  },

  {
    id: "process-workflow",
    name: "Process Workflow",
    description: "Development process steps and methodology",
    category: "Business",
    schema: {
      component: "ProcessWorkflow",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        steps: {
          type: "array",
          items: {
            type: "object",
            properties: {
              step: { type: "string" },
              title: { type: "string" },
              description: { type: "string" },
              details: { type: "array", items: { type: "string" } },
              duration: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "steps"]
    },
    example: {
      component: "ProcessWorkflow",
      data: {
        title: "Our Development Process",
        subtitle: "A proven methodology that ensures quality delivery",
        steps: [
          {
            step: "01",
            title: "Discovery & Analysis",
            description: "Understanding your business needs",
            details: ["Requirements Gathering", "Technical Planning"],
            duration: "1-2 weeks"
          }
        ]
      }
    }
  },

  {
    id: "case-studies",
    name: "Case Studies",
    description: "Detailed project showcases with results and technologies",
    category: "Content",
    schema: {
      component: "CaseStudies",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        studies: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              company: { type: "string" },
              industry: { type: "string" },
              challenge: { type: "string" },
              solution: { type: "string" },
              results: { type: "array", items: { type: "string" } },
              technologies: { type: "array", items: { type: "string" } },
              duration: { type: "string" },
              team: { type: "string" },
              rating: { type: "number" }
            }
          }
        }
      },
      required: ["title", "subtitle", "studies"]
    },
    example: {
      component: "CaseStudies",
      data: {
        title: "Case Studies",
        subtitle: "Real projects, real results",
        studies: [
          {
            title: "E-commerce Platform",
            company: "Global Retail Inc",
            industry: "E-commerce",
            challenge: "Legacy system struggling with traffic",
            solution: "Built modern scalable platform",
            results: ["300% performance increase", "50% cart abandonment reduction"],
            technologies: ["React", "Node.js", "PostgreSQL"],
            duration: "6 months",
            team: "8 developers",
            rating: 5
          }
        ]
      }
    }
  },

  {
    id: "awards-recognition",
    name: "Awards & Recognition",
    description: "Industry awards, certifications, and achievements",
    category: "Business",
    schema: {
      component: "AwardsRecognition",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        awards: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              organization: { type: "string" },
              year: { type: "string" },
              category: { type: "string" },
              description: { type: "string" }
            }
          }
        },
        certifications: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              level: { type: "string" },
              year: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "awards", "certifications"]
    },
    example: {
      component: "AwardsRecognition",
      data: {
        title: "Awards & Recognition",
        subtitle: "Industry recognition and certifications",
        awards: [
          {
            title: "Best Software Development Company 2024",
            organization: "Tech Excellence Awards",
            year: "2024",
            category: "Excellence",
            description: "Recognized for outstanding innovation"
          }
        ],
        certifications: [
          {
            name: "AWS Solutions Architect",
            level: "Professional",
            year: "2024"
          }
        ]
      }
    }
  },

  {
    id: "innovation-lab",
    name: "Innovation Lab",
    description: "Research projects and innovation initiatives",
    category: "Content",
    schema: {
      component: "InnovationLab",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        projects: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              status: { type: "string" },
              progress: { type: "number" },
              team: { type: "string" },
              timeline: { type: "string" },
              technologies: { type: "array", items: { type: "string" } },
              impact: { type: "string" }
            }
          }
        },
        researchAreas: {
          type: "array",
          items: {
            type: "object",
            properties: {
              area: { type: "string" },
              focus: { type: "string" },
              publications: { type: "number" },
              patents: { type: "number" }
            }
          }
        }
      },
      required: ["title", "subtitle", "projects", "researchAreas"]
    },
    example: {
      component: "InnovationLab",
      data: {
        title: "Innovation Lab",
        subtitle: "Pushing the boundaries of technology",
        projects: [
          {
            title: "AI-Powered Analytics Platform",
            description: "Advanced machine learning algorithms",
            status: "In Development",
            progress: 75,
            team: "8 researchers",
            timeline: "6 months",
            technologies: ["TensorFlow", "Python", "React"],
            impact: "Expected 300% improvement"
          }
        ],
        researchAreas: [
          {
            area: "Artificial Intelligence",
            focus: "Machine Learning & Deep Learning",
            publications: 12,
            patents: 3
          }
        ]
      }
    }
  },

  {
    id: "global-presence",
    name: "Global Presence",
    description: "Worldwide offices and global reach",
    category: "Business",
    schema: {
      component: "GlobalPresence",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        offices: {
          type: "array",
          items: {
            type: "object",
            properties: {
              city: { type: "string" },
              country: { type: "string" },
              region: { type: "string" },
              address: { type: "string" },
              phone: { type: "string" },
              email: { type: "string" },
              team: { type: "string" },
              timezone: { type: "string" },
              services: { type: "array", items: { type: "string" } }
            }
          }
        },
        stats: {
          type: "array",
          items: {
            type: "object",
            properties: {
              metric: { type: "string" },
              label: { type: "string" },
              description: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "offices", "stats"]
    },
    example: {
      component: "GlobalPresence",
      data: {
        title: "Global Presence",
        subtitle: "Serving clients worldwide",
        offices: [
          {
            city: "New York",
            country: "United States",
            region: "North America",
            address: "350 5th Avenue, New York, NY 10118",
            phone: "+1 (212) 555-0123",
            email: "nyc@finbyz.com",
            team: "45 developers",
            timezone: "EST (UTC-5)",
            services: ["Enterprise Solutions", "Financial Services"]
          }
        ],
        stats: [
          {
            metric: "25+",
            label: "Countries",
            description: "Global presence across continents"
          }
        ]
      }
    }
  },

  {
    id: "security-compliance",
    name: "Security & Compliance",
    description: "Security measures and compliance certifications",
    category: "Business",
    schema: {
      component: "SecurityCompliance",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        measures: {
          type: "array",
          items: {
            type: "object",
            properties: {
              category: { type: "string" },
              description: { type: "string" },
              features: { type: "array", items: { type: "string" } }
            }
          }
        },
        certifications: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              organization: { type: "string" },
              status: { type: "string" },
              validity: { type: "string" },
              description: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "measures", "certifications"]
    },
    example: {
      component: "SecurityCompliance",
      data: {
        title: "Security & Compliance",
        subtitle: "Enterprise-grade security measures",
        measures: [
          {
            category: "Data Encryption",
            description: "End-to-end encryption for all data",
            features: ["AES-256 encryption", "SSL/TLS protocols"]
          }
        ],
        certifications: [
          {
            name: "SOC 2 Type II",
            organization: "AICPA",
            status: "Certified",
            validity: "Annual",
            description: "Security controls certification"
          }
        ]
      }
    }
  },

  {
    id: "partnerships",
    name: "Strategic Partnerships",
    description: "Partnerships and collaborations with industry leaders",
    category: "Business",
    schema: {
      component: "Partnerships",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        partners: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              category: { type: "string" },
              level: { type: "string" },
              description: { type: "string" },
              benefits: { type: "array", items: { type: "string" } },
              projects: { type: "number" },
              years: { type: "number" }
            }
          }
        },
        categories: {
          type: "array",
          items: {
            type: "object",
            properties: {
              category: { type: "string" },
              count: { type: "number" },
              description: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "partners", "categories"]
    },
    example: {
      component: "Partnerships",
      data: {
        title: "Strategic Partnerships",
        subtitle: "Collaborating with industry leaders",
        partners: [
          {
            name: "Microsoft",
            category: "Technology Partner",
            level: "Gold Partner",
            description: "Strategic partnership for Azure solutions",
            benefits: ["Azure cloud expertise", "Enterprise solutions"],
            projects: 25,
            years: 5
          }
        ],
        categories: [
          {
            category: "Cloud Partners",
            count: 8,
            description: "Leading cloud providers"
          }
        ]
      }
    }
  },

  {
    id: "resource-center",
    name: "Resource Center",
    description: "Educational content, guides, and resources",
    category: "Content",
    schema: {
      component: "ResourceCenter",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        resources: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              type: { type: "string" },
              category: { type: "string" },
              description: { type: "string" },
              duration: { type: "string" },
              downloads: { type: "number" },
              rating: { type: "number" }
            }
          }
        },
        events: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              date: { type: "string" },
              time: { type: "string" },
              type: { type: "string" },
              attendees: { type: "number" },
              description: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "resources", "events"]
    },
    example: {
      component: "ResourceCenter",
      data: {
        title: "Resource Center",
        subtitle: "Access our comprehensive library",
        resources: [
          {
            title: "Complete Guide to Modern Web Development",
            type: "E-book",
            category: "Development",
            description: "Comprehensive guide covering React and Next.js",
            duration: "2 hours",
            downloads: 2500,
            rating: 4.8
          }
        ],
        events: [
          {
            title: "Web Development Masterclass",
            date: "March 15, 2024",
            time: "2:00 PM EST",
            type: "Live Webinar",
            attendees: 150,
            description: "Advanced React and Next.js techniques"
          }
        ]
      }
    }
  },

  {
    id: "support-services",
    name: "Support Services",
    description: "Support tiers and specialized services",
    category: "Business",
    schema: {
      component: "SupportServices",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        tiers: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              description: { type: "string" },
              responseTime: { type: "string" },
              availability: { type: "string" },
              features: { type: "array", items: { type: "string" } },
              price: { type: "string" }
            }
          }
        },
        services: {
          type: "array",
          items: {
            type: "object",
            properties: {
              service: { type: "string" },
              description: { type: "string" },
              responseTime: { type: "string" },
              coverage: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "tiers", "services"]
    },
    example: {
      component: "SupportServices",
      data: {
        title: "Support Services",
        subtitle: "Comprehensive support solutions",
        tiers: [
          {
            name: "Basic Support",
            description: "Essential support for small projects",
            responseTime: "24 hours",
            availability: "Business Hours",
            features: ["Email support", "Documentation access"],
            price: "Free"
          }
        ],
        services: [
          {
            service: "Technical Support",
            description: "Expert technical assistance",
            responseTime: "2-24 hours",
            coverage: "All technologies"
          }
        ]
      }
    }
  },

  {
    id: "contact-info",
    name: "Contact Information",
    description: "Contact methods and office locations",
    category: "Business",
    schema: {
      component: "ContactInfo",
      data: {
        title: { type: "string", description: "Section title" },
        subtitle: { type: "string", description: "Section subtitle" },
        methods: {
          type: "array",
          items: {
            type: "object",
            properties: {
              method: { type: "string" },
              value: { type: "string" },
              description: { type: "string" },
              availability: { type: "string" }
            }
          }
        },
        offices: {
          type: "array",
          items: {
            type: "object",
            properties: {
              city: { type: "string" },
              address: { type: "string" },
              phone: { type: "string" },
              email: { type: "string" },
              hours: { type: "string" },
              timezone: { type: "string" }
            }
          }
        }
      },
      required: ["title", "subtitle", "methods", "offices"]
    },
    example: {
      component: "ContactInfo",
      data: {
        title: "Contact Information",
        subtitle: "Get in touch with us",
        methods: [
          {
            method: "Phone Support",
            value: "+1 (555) 123-4567",
            description: "Call us for immediate assistance",
            availability: "24/7"
          }
        ],
        offices: [
          {
            city: "New York",
            address: "350 5th Avenue, New York, NY 10118",
            phone: "+1 (212) 555-0123",
            email: "nyc@finbyz.com",
            hours: "Mon-Fri: 9AM-6PM EST",
            timezone: "EST (UTC-5)"
          }
        ]
      }
    }
  },

  {
    id: "benefits",
    name: "Benefits",
    description: "Benefits showcase with icons and descriptions",
    category: "Sections",
    schema: {
      component: "Benefits",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        benefits: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "Benefits",
      data: {
        title: "Why Choose Finbyz",
        subtitle: "Discover the advantages of partnering with us",
        benefits: [
          {
            title: "Expert Team",
            description: "Experienced professionals with deep industry knowledge",
            icon: "Users"
          },
          {
            title: "Innovation",
            description: "Cutting-edge solutions and modern technologies",
            icon: "Zap"
          }
        ]
      }
    }
  },

  {
    id: "client-logos",
    name: "Client Logos",
    description: "Carousel showcasing client company logos",
    category: "Sections",
    schema: {
      component: "ClientLogos",
      data: {
        title: { type: "string" },
        clients: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              location: { type: "string" },
              logo: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "ClientLogos",
      data: {
        title: "Some of The Loyal Clients of FinByz",
        clients: [
          {
            name: "South India Trading Co.",
            location: "DELHI, INDIA",
            logo: "SOUTH INDIA TRADING CO."
          },
          {
            name: "Elkins Trade Link Ltd.",
            location: "TRADE LINK LTD.",
            logo: "elkins"
          }
        ]
      }
    }
  },

  {
    id: "process-timeline",
    name: "Process Timeline",
    description: "Timeline showing process steps and workflow",
    category: "Sections",
    schema: {
      component: "ProcessTimeline",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        steps: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "ProcessTimeline",
      data: {
        title: "Our Process",
        subtitle: "How we deliver exceptional results",
        steps: [
          {
            title: "Discovery",
            description: "Understanding your requirements and goals",
            icon: "Search"
          },
          {
            title: "Planning",
            description: "Creating detailed project roadmap",
            icon: "Target"
          }
        ]
      }
    }
  },

  {
    id: "services",
    name: "Services",
    description: "Services section with detailed service offerings",
    category: "Sections",
    schema: {
      component: "Services",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        services: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              icon: { type: "string" },
              features: { type: "array", items: { type: "string" } }
            }
          }
        }
      }
    },
    example: {
      component: "Services",
      data: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for your business",
        services: [
          {
            title: "ERP Implementation",
            description: "End-to-end ERP solutions",
            icon: "Database",
            features: ["Customization", "Integration", "Training"]
          }
        ]
      }
    }
  },

  {
    id: "cta",
    name: "Call to Action",
    description: "Call to action section with buttons and messaging",
    category: "Sections",
    schema: {
      component: "CTA",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        primaryButton: {
          type: "object",
          properties: {
            text: { type: "string" },
            href: { type: "string" }
          }
        },
        secondaryButton: {
          type: "object",
          properties: {
            text: { type: "string" },
            href: { type: "string" }
          }
        }
      }
    },
    example: {
      component: "CTA",
      data: {
        title: "Ready to Get Started?",
        subtitle: "Let's discuss your project requirements",
        primaryButton: {
          text: "Get Started",
          href: "/contact"
        },
        secondaryButton: {
          text: "Learn More",
          href: "/about"
        }
      }
    }
  },

  {
    id: "differentiators",
    name: "Differentiators",
    description: "Key differentiators and competitive advantages",
    category: "Sections",
    schema: {
      component: "Differentiators",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        differentiators: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "Differentiators",
      data: {
        title: "What Sets Us Apart",
        subtitle: "Our unique approach and capabilities",
        differentiators: [
          {
            title: "Industry Expertise",
            description: "Deep knowledge across multiple industries",
            icon: "Award"
          },
          {
            title: "Innovation Focus",
            description: "Cutting-edge solutions and technologies",
            icon: "Zap"
          }
        ]
      }
    }
  },

  {
    id: "faq",
    name: "FAQ",
    description: "Frequently asked questions section",
    category: "Sections",
    schema: {
      component: "FAQ",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question: { type: "string" },
              answer: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "FAQ",
      data: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions",
        questions: [
          {
            question: "What services does Finbyz offer?",
            answer: "We offer ERP implementation, IT consulting, software development, and data analytics services."
          },
          {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity, typically ranging from 3-12 months."
          }
        ]
      }
    }
  },

  {
    id: "hero_section_without_button",
    name: "Hero Section Without Button",
    description: "Hero section without call-to-action buttons",
    category: "Sections",
    schema: {
      component: "HeroSectionWithoutButton",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        background: { type: "string" }
      }
    },
    example: {
      component: "HeroSectionWithoutButton",
      data: {
        title: "Welcome to Finbyz",
        subtitle: "Empowering businesses with innovative solutions",
        background: "gradient"
      }
    }
  },

  {
    id: "success-snapshots",
    name: "Success Snapshots",
    description: "Success stories and achievements showcase",
    category: "Sections",
    schema: {
      component: "SuccessSnapshots",
      data: {
        title: { type: "string" },
        subtitle: { type: "string" },
        snapshots: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              metric: { type: "string" },
              icon: { type: "string" }
            }
          }
        }
      }
    },
    example: {
      component: "SuccessSnapshots",
      data: {
        title: "Success Stories",
        subtitle: "Real results from our clients",
        snapshots: [
          {
            title: "Increased Efficiency",
            description: "Streamlined operations for manufacturing client",
            metric: "40%",
            icon: "TrendingUp"
          },
          {
            title: "Cost Reduction",
            description: "Optimized processes for retail business",
            metric: "25%",
            icon: "DollarSign"
          }
        ]
      }
    }
  }
];

export const getComponentSchema = (id: string): ComponentSchema | undefined => {
  return componentSchemas.find(schema => schema.id === id);
};

export const getComponentSchemasByCategory = (category: string): ComponentSchema[] => {
  return componentSchemas.filter(schema => schema.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(componentSchemas.map(schema => schema.category))];
}; 
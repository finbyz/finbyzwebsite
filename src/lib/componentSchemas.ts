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
    id: "points",
    name: "Points",
    description: "Bulleted list with optional title",
    category: "Sections",
    schema: {
      component: "Points",
      data: {
        title: { type: "string" },
        points: { type: "array", items: { type: "string" } }
      }
    },
    example: {
      component: "Points",
      data: {
        component_type: "Text",
        title: "Forward Contract Utilization Steps",
        points: [
          "Go to the Payment Entry list and click on 'New'.",
          "Select the Party Type and the relevant Customer/Supplier.",
          "Choose the Bank or Cash Account for 'Paid To' and 'Paid From'.",
          "Select the forward contract and enter the amount utilized.",
          "Enter the Amount Paid and provide bank reference.",
          "Save and Submit the entry."
        ]
      }
    }
  },

  {
    id: "text",
    name: "Text",
    description: "Single-column rich text block with optional title",
    category: "Sections",
    schema: {
      component: "Text",
      data: {
        title: { type: "string" },
        paragraphs: { type: "array", items: { type: "string" } }
      }
    },
    example: {
      component: "Text",
      data: {
        component_type: "Text",
        paragraphs: [
          "Forward contracting in ERPNext is a powerful tool for currency hedging, allowing businesses to lock in exchange rates for future international transactions. Through the forward contract ERPNext feature, importers and exporters can minimize the impact of currency fluctuations by setting a fixed rate in advance. With integrated forward contract accounting ERPNext capabilities, companies can efficiently track forward contracts, manage gains or losses, and maintain accurate financial records aligned with their forex exposures."
        ]
      }
    }
  },

  {
    id: "video",
    name: "Video",
    description: "Responsive YouTube video embed with optional title",
    category: "Media",
    schema: {
      component: "Video",
      data: {
        title: { type: "string" },
        url: { type: "string" },
        videoId: { type: "string" }
      }
    },
    example: {
      component: "Video",
      data: {
        component_type: "Video",
        title: "ERPNext Tutorial (Custom Features)",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    }
  },

  {
    id: "content-illustration-right",
    name: "Content + Illustration (Right)",
    description: "Left-aligned title and paragraphs with an illustration image on the right",
    category: "Sections",
    schema: {
      component: "ContentIllustrationRight",
      data: {
        title: { type: "string" },
        paragraphs: { type: "array", items: { type: "string" } },
        imageSrc: { type: "string" },
        imageAlt: { type: "string" }
      }
    },
    example: {
      component: "ContentIllustrationRight",
      data: {
        title: "2. Pick the Right Tools",
        paragraphs: [
          "Choose analytics tools that suit your business needs.",
          "Popular options include Google Analytics, Mixpanel, and Adobe Analytics each offering unique features.",
          "Select tools that provide the insights necessary for making informed, data‑driven decisions."
        ],
        imageSrc: "/images/analytics-tools.png",
        imageAlt: "Analytics tools illustration"
      }
    }
  },

  {
    id: "content-illustration-left",
    name: "Content + Illustration (Left)",
    description: "Left-aligned image with title and paragraphs on the right",
    category: "Sections",
    schema: {
      component: "ContentIllustrationLeft",
      data: {
        title: { type: "string" },
        paragraphs: { type: "array", items: { type: "string" } },
        imageSrc: { type: "string" },
        imageAlt: { type: "string" }
      }
    },
    example: {
      component: "ContentIllustrationLeft",
      data: {
        title: "2. Pick the Right Tools",
        paragraphs: [
          "Choose analytics tools that suit your business needs.",
          "Popular options include Google Analytics, Mixpanel, and Adobe Analytics each offering unique features.",
          "Select tools that provide the insights necessary for making informed, data‑driven decisions."
        ],
        imageSrc: "/images/analytics-tools.png",
        imageAlt: "Analytics tools illustration"
      }
    }
  },

  {
    id: "erp-intro-text",
    name: "ERP Intro Text",
    description: "Large headline with quote icon and spacious descriptive paragraphs",
    category: "Sections",
    schema: {
      component: "ERPIntroText",
      data: {
        title: { type: "string" },
        paragraphs: { type: "array", items: { type: "string" } },
        highlightLink: {
          type: "object",
          properties: {
            text: { type: "string" },
            href: { type: "string" }
          }
        }
      }
    },
    example: {
      component: "ERPIntroText",
      data: {
        title: "Looking for Leading ERP Software Development Company?",
        paragraphs: [
          "ERP systems are essential for the efficient functioning of modern businesses. As a leading ERP software provider, we understand the importance of integrating business processes, streamlining data management, and enhancing overall productivity. With technology evolving rapidly, ERP solutions especially open-source options like ERPNext have become more accessible and effective for businesses of all sizes. At Finbyz Tech, we offer premium ERP software development services in Ahmedabad, empowering organizations to overcome operational challenges and drive sustainable growth.",
          "As a trusted ERPNext software company, Finbyz Tech guides your digital transformation journey by thoroughly understanding your existing workflows and recommending the most suitable ERP solutions. We help businesses unlock the full benefits of ERP implementation. Our goal is not just to deliver ERP systems, but to become your long-term IT partner. We go beyond the role of a typical ERP software supplier by offering end-to-end ERP software development services, including user training and post-implementation support. Our hands-on approach ensures a smooth transition to a more streamlined, professionally managed business operation."
        ],
        highlightLink: { text: "benefits of ERP implementation", href: "#" }
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
    id: "inquiry-form",
    name: "Inquiry Form",
    description: "A beautiful inquiry form for requesting free demos with illustration and form fields",
    category: "Forms",
    schema: {
      component: "InquiryForm",
      data: {
        component_type: { type: "string", default: "Form" },
        title: { type: "string" },
        description: { type: "string" },
        fields: {
          type: "object",
          properties: {
            name: { type: "string" },
            organization: { type: "string" },
            email: { type: "string" },
            mobile: { type: "string" }
          }
        },
        submitText: { type: "string" },
        backgroundImage: { type: "string" }
      }
    },
    example: {
      component: "InquiryForm",
      data: {
        component_type: "Form",
        title: "Request for FREE Demo",
        description: "Get started with your free demo today",
        fields: {
          name: "Name",
          organization: "Organization Name",
          email: "Email",
          mobile: "Mobile No"
        },
        submitText: "SUBMIT"
      }
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
    id: "hero_section_without_button_alt",
    name: "Hero Section Without Button (Alternative)",
    description: "Alternative hero section with title, subtitle, and image - no action buttons",
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
        { label: "Services", href: "/erpnext/services/erpnext-service-provider" },
        { label: "ERP Implementation", href: "/erpnext/services/erpnext-service-providererp" }
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
        { name: "LinkedIn", icon: "in", href: "#", color: "hover:text-orange-600" }
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
          href: "/about-us"
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
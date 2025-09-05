export interface ComponentManifest {
  name: string;
  purpose: string;
  optimalUsage: string[];
  jsonSchema: any;
  example: any;
  notes?: string;
}

export const componentManifest: { [key: string]: ComponentManifest } = {
  "ContentIllustrationRight": {
    name: "ContentIllustrationRight",
    purpose: "Present explanatory text with a supporting illustration aligned to the right.",
    optimalUsage: [
      "Use for short instructional steps or highlights.",
      "Keep paragraphs concise (2–4) for readability.",
      "Provide properly sized responsive images."
    ],
    jsonSchema: {
      component: "ContentIllustrationRight",
      data: {
        title: "string",
        paragraphs: ["string"],
        imageSrc: "string",
        imageAlt: "string"
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
        imageSrc: "/AboutUs.png",
        imageAlt: "Analytics tools illustration"
      }
    }
  },
  "content-illustration-right": {
    name: "ContentIllustrationRight",
    purpose: "Present explanatory text with a supporting illustration aligned to the right.",
    optimalUsage: [
      "Use for short instructional steps or highlights.",
      "Keep paragraphs concise (2–4) for readability.",
      "Provide properly sized responsive images."
    ],
    jsonSchema: {
      component: "ContentIllustrationRight",
      data: {
        title: "string",
        paragraphs: ["string"],
        imageSrc: "string",
        imageAlt: "string"
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
        imageSrc: "/AboutUs.png",
        imageAlt: "Analytics tools illustration"
      }
    }
  },

  "ContentIllustrationLeft": {
    name: "ContentIllustrationLeft",
    purpose: "Present explanatory text with a supporting illustration aligned to the left.",
    optimalUsage: [
      "Use for short instructional steps or highlights.",
      "Keep paragraphs concise (2–4) for readability.",
      "Provide properly sized responsive images."
    ],
    jsonSchema: {
      component: "ContentIllustrationLeft",
      data: {
        title: "string",
        paragraphs: ["string"],
        imageSrc: "string",
        imageAlt: "string"
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
        imageSrc: "/AboutUs.png",
        imageAlt: "Analytics tools illustration"
      }
    }
  },

  "content-illustration-left": {
    name: "ContentIllustrationLeft",
    purpose: "Present explanatory text with a supporting illustration aligned to the left.",
    optimalUsage: [
      "Use for short instructional steps or highlights.",
      "Keep paragraphs concise (2–4) for readability.",
      "Provide properly sized responsive images."
    ],
    jsonSchema: {
      component: "ContentIllustrationLeft",
      data: {
        title: "string",
        paragraphs: ["string"],
        imageSrc: "string",
        imageAlt: "string"
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
        imageSrc: "/AboutUs.png",
        imageAlt: "Analytics tools illustration"
      }
    }
  },
  "ERPIntroText": {
    name: "ERPIntroText",
    purpose: "Introductory section with a large headline, quote icon, and long-form paragraphs.",
    optimalUsage: [
      "Use at the start of ERP or services pages to set context.",
      "Keep paragraphs concise; 1–3 is ideal.",
      "Use the highlight link to draw attention to a key resource.",
    ],
    jsonSchema: {
      component: "ERPIntroText",
      data: {
        title: "string",
        paragraphs: ["string"],
        highlightLink: { text: "string", href: "string" }
      }
    },
    example: {
      component: "ERPIntroText",
      data: {
        title: "Looking for Leading ERP Software Development Company?",
        paragraphs: [
          "ERP systems are essential for the efficient functioning of modern businesses...",
          "As a trusted ERPNext software company, Finbyz Tech guides your digital transformation journey..."
        ],
        highlightLink: { text: "benefits of ERP implementation", href: "#" }
      }
    }
  },
  "Text": {
    name: "Text",
    purpose: "Single-column rich text block with optional title.",
    optimalUsage: [
      "Use for explanatory content between sections.",
      "Split long paragraphs into shorter ones for readability.",
      "Keep line length comfortable on large screens."
    ],
    jsonSchema: {
      component: "Text",
      data: { title: "string", paragraphs: ["string"] }
    },
    example: {
      component: "Text",
      data: {
        component_type: "Text",
        title: "How to Manage Forward Contract in ERPNext?",
        paragraphs: [
          "Forward contracting in ERPNext is a powerful tool for currency hedging..."
        ]
      }
    }
  },
  "text": {
    name: "Text",
    purpose: "Single-column rich text block with optional title.",
    optimalUsage: [
      "Use for explanatory content between sections.",
      "Split long paragraphs into shorter ones for readability.",
      "Keep line length comfortable on large screens."
    ],
    jsonSchema: {
      component: "Text",
      data: { title: "string", paragraphs: ["string"] }
    },
    example: {
      component: "Text",
      data: {
        component_type: "Text",
        paragraphs: [
          "Forward contracting in ERPNext is a powerful tool for currency hedging..."
        ]
      }
    }
  },
  "Video": {
    name: "Video",
    purpose: "Embed a responsive YouTube player with optional title.",
    optimalUsage: [
      "Use for tutorial or promo videos.",
      "Provide either a full YouTube URL or a videoId.",
      "Keep surrounding content minimal to focus attention."
    ],
    jsonSchema: {
      component: "Video",
      data: { title: "string", url: "string", videoId: "string" }
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
  "Points": {
    name: "Points",
    purpose: "Display a bulleted list with an optional heading.",
    optimalUsage: [
      "Use for concise procedural steps or key takeaways.",
      "Keep each bullet short and scannable.",
      "Prefer 4–10 bullets for readability."
    ],
    jsonSchema: {
      component: "Points",
      data: { title: "string", points: ["string"] }
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
  "points": {
    name: "Points",
    purpose: "Display a bulleted list with an optional heading.",
    optimalUsage: [
      "Use for concise procedural steps or key takeaways.",
      "Keep each bullet short and scannable.",
      "Prefer 4–10 bullets for readability."
    ],
    jsonSchema: {
      component: "Points",
      data: { title: "string", points: ["string"] }
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
  "video": {
    name: "Video",
    purpose: "Embed a responsive YouTube player with optional title.",
    optimalUsage: [
      "Use for tutorial or promo videos.",
      "Provide either a full YouTube URL or a videoId.",
      "Keep surrounding content minimal to focus attention."
    ],
    jsonSchema: {
      component: "Video",
      data: { title: "string", url: "string", videoId: "string" }
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
  "ForwardContractingText": {
    name: "ForwardContractingText",
    purpose: "Explains forward contracting in ERPNext using a simple text block.",
    optimalUsage: [
      "Use on ERP/Forex pages to describe forward contracts.",
      "Keep paragraph text concise and scannable.",
      "Use as a lead-in before forms or CTAs."
    ],
    jsonSchema: {
      component: "ForwardContractingText",
      data: {
        title: "string",
        paragraphs: ["string"]
      }
    },
    example: {
      component: "ForwardContractingText",
      data: {
        component_type: "Text",
        paragraphs: [
          "Forward contracting in ERPNext is a powerful tool for currency hedging, allowing businesses to lock in exchange rates for future international transactions. Through the forward contract ERPNext feature, importers and exporters can minimize the impact of currency fluctuations by setting a fixed rate in advance. With integrated forward contract accounting ERPNext capabilities, companies can efficiently track forward contracts, manage gains or losses, and maintain accurate financial records aligned with their forex exposures."
        ]
      }
    }
  },
  "forward-contracting-text": {
    name: "ForwardContractingText",
    purpose: "Explains forward contracting in ERPNext using a simple text block.",
    optimalUsage: [
      "Use on ERP/Forex pages to describe forward contracts.",
      "Keep paragraph text concise and scannable.",
      "Use as a lead-in before forms or CTAs."
    ],
    jsonSchema: {
      component: "ForwardContractingText",
      data: {
        title: "string",
        paragraphs: ["string"]
      }
    },
    example: {
      component: "ForwardContractingText",
      data: {
        component_type: "Text",
        paragraphs: [
          "Forward contracting in ERPNext is a powerful tool for currency hedging, allowing businesses to lock in exchange rates for future international transactions. Through the forward contract ERPNext feature, importers and exporters can minimize the impact of currency fluctuations by setting a fixed rate in advance. With integrated forward contract accounting ERPNext capabilities, companies can efficiently track forward contracts, manage gains or losses, and maintain accurate financial records aligned with their forex exposures."
        ]
      }
    }
  },
  // Alias to match schema.id used on the Components page
  "erp-intro-text": {
    name: "ERPIntroText",
    purpose: "Introductory section with a large headline, quote icon, and long-form paragraphs.",
    optimalUsage: [
      "Use at the start of ERP or services pages to set context.",
      "Keep paragraphs concise; 1–3 is ideal.",
      "Use the highlight link to draw attention to a key resource.",
    ],
    jsonSchema: {
      component: "ERPIntroText",
      data: {
        title: "string",
        paragraphs: ["string"],
        highlightLink: { text: "string", href: "string" }
      }
    },
    example: {
      component: "ERPIntroText",
      data: {
        title: "Looking for Leading ERP Software Development Company?",
        paragraphs: [
          "ERP systems are essential for the efficient functioning of modern businesses...",
          "As a trusted ERPNext software company, Finbyz Tech guides your digital transformation journey..."
        ],
        highlightLink: { text: "benefits of ERP implementation", href: "#" }
      }
    }
  },
  "HeroSection": {
    name: "HeroSection",
    purpose: "Use this component for the main landing section of your page. It includes a headline, description, and call-to-action buttons.",
    optimalUsage: [
      "Use as the first section on your page.",
      "Keep the headline concise and impactful.",
      "Include clear call-to-action buttons.",
      "Avoid using multiple hero sections on the same page."
    ],
    jsonSchema: {
      component: "HeroSection",
      data: {
        headline: "string",
        highlightText: "string",
        description: "string",
        primaryButton: {
          text: "string",
          action: "string"
        },
        secondaryButton: {
          text: "string",
          action: "string"
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

  "ServiceCards": {
    name: "ServiceCards",
    purpose: "Use this component to display a grid of service offerings with icons, titles, descriptions, and tags.",
    optimalUsage: [
      "Use for displaying 3-6 service offerings.",
      "Each service should have a clear icon, title, and description.",
      "Include relevant tags for categorization.",
      "Avoid using for single services - use Hero or Showcase instead."
    ],
    jsonSchema: {
      component: "ServiceCards",
      data: {
        title: "string",
        subtitle: "string",
        services: [
          {
            icon: "string",
            title: "string",
            description: "string",
            tags: ["string"]
          }
        ]
      }
    },
    example: {
      component: "ServiceCards",
      data: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for modern businesses",
        services: [
          {
            icon: "BarChart3",
            title: "ERP Implementation",
            description: "Streamline operations and scale faster with expert ERPNext implementations.",
            tags: ["ERP", "Analytics", "Integration"]
          },
          {
            icon: "Zap",
            title: "AI Automation",
            description: "Automate intelligently with AI-powered workflows and business logic.",
            tags: ["AI", "Automation", "ML"]
          }
        ]
      }
    }
  },

  "StatsSection": {
    name: "StatsSection",
    purpose: "Use this component to display key statistics, metrics, or achievements with visual impact.",
    optimalUsage: [
      "Use for displaying 3-6 key statistics or metrics.",
      "Include meaningful numbers with context.",
      "Use icons to enhance visual appeal.",
      "Ensure statistics are relevant and impressive."
    ],
    jsonSchema: {
      component: "StatsSection",
      data: {
        title: "string",
        subtitle: "string",
        stats: [
          {
            icon: "string",
            value: "string",
            title: "string",
            description: "string"
          }
        ]
      }
    },
    example: {
      component: "StatsSection",
      data: {
        title: "Why Choose Finbyz",
        subtitle: "Proven results that speak for themselves",
        stats: [
          {
            icon: "Award",
            value: "10+",
            title: "Years of Experience",
            description: "Decade of expertise in delivering cutting-edge solutions"
          },
          {
            icon: "Users",
            value: "500+",
            title: "Happy Clients",
            description: "Trusted by businesses worldwide"
          }
        ]
      }
    }
  },

  "CallToAction": {
    name: "CallToAction",
    purpose: "Use this component for action-oriented sections with compelling text and clear buttons.",
    optimalUsage: [
      "Use for conversion-focused sections.",
      "Include compelling headline and description.",
      "Provide clear, action-oriented buttons.",
      "Use for lead generation or next-step guidance."
    ],
    jsonSchema: {
      component: "CallToAction",
      data: {
        badge: {
          text: "string",
          icon: "string"
        },
        headline: "string",
        highlightText: "string",
        description: "string",
        buttons: [
          {
            text: "string",
            action: "string",
            variant: ["primary", "secondary"],
            icon: "string"
          }
        ],
        footer: {
          text: "string",
          icon: "string"
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
          icon: "Shield"
        }
      }
    }
  },


  "FileUpload": {
    name: "FileUpload",
    purpose: "Interactive file upload component with drag & drop, file preview, and upload progress tracking.",
    optimalUsage: [
      "Use for file upload functionality in forms or dashboards.",
      "Supports multiple file types and size validation.",
      "Provides visual feedback during upload process."
    ],
    jsonSchema: {
      component: "FileUpload",
      data: {
        title: "string",
        subtitle: "string",
        maxFiles: "number",
        maxFileSize: "number",
        acceptedTypes: ["string"],
        uploadButtonText: "string",
        dragText: "string"
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

  "InquiryForm": {
    name: "Inquiry Form",
    purpose: "A beautiful and modern inquiry form for collecting demo requests with visual illustration and form validation.",
    optimalUsage: [
      "Use for lead generation and demo requests.",
      "Perfect for landing pages and contact sections.",
      "Provides visual appeal with custom illustration.",
      "Includes form validation and submission feedback."
    ],
    jsonSchema: {
      component: "InquiryForm",
      data: {
        component_type: "Form",
        title: "string",
        description: "string",
        fields: {
          name: "string",
          organization: "string",
          email: "string",
          mobile: "string"
        },
        submitText: "string",
        backgroundImage: "string"
      }
    },
    example: {
      component: "InquiryForm",
      data: {
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
    },
    notes: "This component features a responsive design with a custom illustration showing a smartphone and envelope, perfect for demo request forms."
  },

  "inquiry-form": {
    name: "Inquiry Form",
    purpose: "A beautiful and modern inquiry form for collecting demo requests with visual illustration and form validation.",
    optimalUsage: [
      "Use for lead generation and demo requests.",
      "Perfect for landing pages and contact sections.",
      "Provides visual appeal with custom illustration.",
      "Includes form validation and submission feedback."
    ],
    jsonSchema: {
      component: "InquiryForm",
      data: {
        component_type: "Form",
        title: "string",
        description: "string",
        fields: {
          name: "string",
          organization: "string",
          email: "string",
          mobile: "string"
        },
        submitText: "string",
        backgroundImage: "string"
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
    },
    notes: "This component features a responsive design with a custom illustration showing a smartphone and envelope, perfect for demo request forms."
  },

  
  
  "hero_section_without_button": {
    name: "Hero Section Without Button",
    purpose: "Use this component as the primary landing section for pages. It displays a main headline, subtitle, and hero image without any action buttons - perfect for informational or content-focused pages.",
    optimalUsage: [
      "Best used as the **first section** on a page to create immediate visual impact.",
      "Ideal for **informational pages** where you want to showcase content without driving immediate action.",
      "The title should be **concise and impactful** - highlight key terms like AI, ERP, or other important concepts.",
      "Keep the subtitle **descriptive but brief** - focus on the core value proposition.",
      "Use high-quality images that **align with your brand** and message."
    ],
    jsonSchema: {
      component: "Hero",
      data: {
        title: "string", // Main headline text
        subtitle: "string", // Supporting description text
        imageSrc: "string", // Path to hero image
        imageAlt: "string" // Alt text for accessibility
      }
    },
    example: {
      component: "Hero",
      data: {
        title: "Empower Your Business with AI & ERP",
        subtitle: "Unlock efficiency, automation, and growth with next-gen technology and expert talent.",
        image: {
          src: "/Steer Your Vision.png",
          alt: "Steer Your Vision - Digital transformation and business guidance"
        },
        scrollTarget: "services"
      }
    },
    notes: "This hero variant is perfect for pages where you want to inform rather than immediately convert. The highlighted words (AI, ERP) will automatically appear in orange."
  },
  // Alias to match schema.id "hero_section_without_button_alt"
  "hero_section_without_button_alt": {
    name: "Hero Section Without Button",
    purpose: "Use this component as the primary landing section for pages. It displays a main headline, subtitle, and hero image without any action buttons - perfect for informational or content-focused pages.",
    optimalUsage: [
      "Best used as the **first section** on a page to create immediate visual impact.",
      "Ideal for **informational pages** where you want to showcase content without driving immediate action.",
      "The title should be **concise and impactful** - highlight key terms like AI, ERP, or other important concepts.",
      "Keep the subtitle **descriptive but brief** - focus on the core value proposition.",
      "Use high-quality images that **align with your brand** and message."
    ],
    jsonSchema: {
      component: "Hero",
      data: {
        title: "string",
        subtitle: "string",
        imageSrc: "string",
        imageAlt: "string"
      }
    },
    example: {
      component: "Hero",
      data: {
        title: "Empower Your Business with AI & ERP",
        subtitle: "Unlock efficiency, automation, and growth with next-gen technology and expert talent.",
        image: {
          src: "/Steer Your Vision.png",
          alt: "Steer Your Vision - Digital transformation and business guidance"
        },
        scrollTarget: "services"
      }
    },
    notes: "This hero variant is perfect for pages where you want to inform rather than immediately convert. The highlighted words (AI, ERP) will automatically appear in orange."
  },

  "testimonials": {
    name: "Testimonials Section",
    purpose: "Use this component to display customer testimonials, reviews, and social proof. It includes animated cards with ratings, quotes, and client branding.",
    optimalUsage: [
      "Best used **after your main services/content** to build trust and credibility.",
      "Include **3-6 testimonials** for optimal impact without overwhelming users.",
      "Each testimonial should have a **clear quote, author name, company, and rating**.",
      "Use **consistent color palettes** that match your brand or the client's branding.",
      "Include **diverse testimonials** from different industries or use cases."
    ],
    jsonSchema: {
      component: "Testimonials",
      data: {
        title: "string", // Section title
        subtitle: "string", // Section subtitle
        testimonials: [
          {
            quote: "string", // Testimonial quote
            author: "string", // Author name
            company: "string", // Company name
            initials: "string", // Author initials for avatar
            rating: "number", // Star rating (1-5)
            palette: {
              color: "string", // Primary color
              bg: "string" // Background color
            },
            url: "string" // Link to full review
          }
        ]
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
    },
    notes: "This component includes intersection observer animations and mobile menu integration. Testimonials will animate in as users scroll."
  },

  "client-logos": {
    name: "Client Logos Carousel",
    purpose: "Use this component to showcase your client companies and build credibility. It displays client logos in an auto-playing carousel with navigation controls.",
    optimalUsage: [
      "Use **after your hero section** to immediately build trust.",
      "Include **6-12 client logos** for variety without overwhelming.",
      "Each client should have a **company name and location**.",
      "Use **high-quality logo representations** or company initials.",
      "Consider **industry diversity** in your client selection."
    ],
    jsonSchema: {
      component: "ClientLogos",
      data: {
        title: "string",
        subtitle: "string",
        clients: [
          {
            name: "string",
            location: "string",
            logo: "string",
            colors: {
              primary: "string",
              secondary: "string",
              accent: "string"
            },
            description: "string"
          }
        ],
        carousel: {
          autoPlay: "boolean",
          interval: "number",
          showArrows: "boolean",
          showIndicators: "boolean"
        },

      }
    },
    example: {
      component: "ClientLogos",
      data: {
        title: "Some of The Loyal Clients of FinByz",
        subtitle: "Trusted by leading companies worldwide",
        clients: [
          {
            name: "South India Trading Co.",
            location: "DELHI, INDIA",
            logo: "SJC",
            colors: {
              primary: "#FFD700",
              secondary: "#FF6B35",
              accent: "#4CAF50"
            },
            description: "Multi-colored map of India with bold yellow text"
          },
          {
            name: "Elkins Trade Link Ltd.",
            location: "TRADE LINK LTD.",
            logo: "elkins",
            colors: {
              primary: "#87CEEB",
              secondary: "#808080"
            },
            description: "Light blue text with stylized 'k' as shopping bag"
          },
          {
            name: "G.M.'s Tulsi Tea",
            location: "TEA",
            logo: "Tulsi",
            colors: {
              primary: "#8A2BE2",
              secondary: "#FFD700",
              text: "#FFFFFF"
            },
            description: "Purple background with yellow banner and white text"
          },
          {
            name: "Farmindia Impex Pvt. Ltd.",
            location: "IMPEX PVT. LTD.",
            logo: "FARMINDIA",
            colors: {
              primary: "#228B22",
              secondary: "#808080"
            },
            description: "Dark green leaf with bold company name"
          },
          {
            name: "Raymond",
            location: "",
            logo: "R",
            colors: {
              primary: "#DC143C",
              secondary: "#DC143C"
            },
            description: "Mirrored red 'R's with script text"
          },
          {
            name: "Aditya Birla Tanfac",
            location: "TANFAC",
            logo: "ABT",
            colors: {
              primary: "#FF4500",
              secondary: "#FFD700",
              accent: "#008080"
            },
            description: "Geometric sunburst pattern with teal band"
          }
        ],
        carousel: {
          autoPlay: true,
          interval: 3000,
          showArrows: true,
          showIndicators: true
        },

      }
    },
    notes: "This component includes auto-play functionality, navigation arrows, and indicator dots. The carousel automatically advances every 3 seconds."
  },


  "file-upload": {
    name: "File Upload",
    purpose: "Drag & drop file upload component with preview and progress tracking capabilities.",
    optimalUsage: [
      "Use for **document uploads** and **file submissions**.",
      "Set appropriate **file size limits** and **accepted types**.",
      "Include **clear instructions** for users.",
      "Provide **visual feedback** during upload process.",
      "Handle **upload errors** gracefully."
    ],
    jsonSchema: {
      component: "FileUpload",
      data: {
        title: "string",
        subtitle: "string",
        maxFiles: "number",
        maxFileSize: "number",
        acceptedTypes: ["string"],
        uploadButtonText: "string",
        dragText: "string"
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
    },
    notes: "This component includes drag & drop functionality, file preview, and progress tracking."
  },

  

  "business-slider": {
    name: "Business Slider",
    purpose: "Interactive slider showcasing business solutions and services with smooth transitions.",
    optimalUsage: [
      "Use to **highlight key business solutions**.",
      "Include **compelling visuals** and **descriptions**.",
      "Ensure **smooth transitions** between slides.",
      "Add **call-to-action buttons** for engagement.",
      "Make it **mobile-responsive**."
    ],
    jsonSchema: {
      component: "BusinessSlider",
      data: {
        title: "string",
        subtitle: "string",
        slides: [
          {
            title: "string",
            description: "string",
            image: "string",
            buttonText: "string",
            buttonLink: "string"
          }
        ]
      }
    },
    example: {
      component: "BusinessSlider",
      data: {
        title: "Business Solutions",
        subtitle: "Transform your business with our comprehensive solutions",
        slides: [
          {
            title: "ERP Implementation",
            description: "Streamline your operations with modern ERP systems",
            image: "/erp-solution.jpg",
            buttonText: "Learn More",
            buttonLink: "/erp"
          }
        ]
      }
    },
    notes: "This component includes smooth transitions, responsive design, and interactive navigation."
  },

  "hero-section": {
    name: "Hero Section",
    purpose: "Main landing section with headline, description, and call-to-action buttons.",
    optimalUsage: [
      "Use as the **first section** on your page.",
      "Keep the headline **concise and impactful**.",
      "Include **clear call-to-action buttons**.",
      "Avoid using **multiple hero sections** on the same page.",
      "Ensure **mobile responsiveness**."
    ],
    jsonSchema: {
      component: "HeroSection",
      data: {
        headline: "string",
        highlightText: "string",
        description: "string",
        primaryButton: {
          text: "string",
          action: "string"
        },
        secondaryButton: {
          text: "string",
          action: "string"
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
    },
    notes: "This component includes responsive design and call-to-action buttons."
  },

  "service-cards": {
    name: "Service Cards",
    purpose: "Display a grid of service offerings with icons, titles, descriptions, and tags.",
    optimalUsage: [
      "Use for displaying **3-6 service offerings**.",
      "Each service should have a **clear icon, title, and description**.",
      "Include **relevant tags** for categorization.",
      "Avoid using for **single services** - use Hero or Showcase instead.",
      "Ensure **consistent spacing** and **visual hierarchy**."
    ],
    jsonSchema: {
      component: "ServiceCards",
      data: {
        title: "string",
        subtitle: "string",
        services: [
          {
            icon: "string",
            title: "string",
            description: "string",
            tags: ["string"]
          }
        ]
      }
    },
    example: {
      component: "ServiceCards",
      data: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for modern businesses",
        services: [
          {
            icon: "BarChart3",
            title: "ERP Implementation",
            description: "Streamline operations and scale faster with expert ERPNext implementations.",
            tags: ["ERP", "Analytics", "Integration"]
          },
          {
            icon: "Zap",
            title: "AI Automation",
            description: "Automate intelligently with AI-powered workflows and business logic.",
            tags: ["AI", "Automation", "ML"]
          }
        ]
      }
    },
    notes: "This component includes responsive grid layout and hover effects."
  },

  "stats-section": {
    name: "Stats Section",
    purpose: "Display key statistics and metrics with animated counters.",
    optimalUsage: [
      "Use to **highlight key achievements** and **metrics**.",
      "Include **meaningful numbers** that build credibility.",
      "Use **animated counters** for engagement.",
      "Keep **descriptions concise** and clear.",
      "Ensure **mobile responsiveness**."
    ],
    jsonSchema: {
      component: "StatsSection",
      data: {
        title: "string",
        subtitle: "string",
        stats: [
          {
            number: "string",
            label: "string",
            description: "string"
          }
        ]
      }
    },
    example: {
      component: "StatsSection",
      data: {
        title: "Our Impact",
        subtitle: "Numbers that speak for themselves",
        stats: [
          {
            number: "500+",
            label: "Projects Completed",
            description: "Successfully delivered projects across industries"
          },
          {
            number: "50+",
            label: "Expert Consultants",
            description: "Experienced professionals at your service"
          }
        ]
      }
    },
    notes: "This component includes animated counters and responsive design."
  },

  "call-to-action": {
    name: "Call to Action",
    purpose: "Compelling call-to-action section to drive user engagement and conversions.",
    optimalUsage: [
      "Use **strategically** to guide user actions.",
      "Include **clear value proposition**.",
      "Make **buttons prominent** and accessible.",
      "Use **compelling copy** that creates urgency.",
      "Ensure **mobile-friendly design**."
    ],
    jsonSchema: {
      component: "CallToAction",
      data: {
        title: "string",
        subtitle: "string",
        primaryButton: {
          text: "string",
          action: "string"
        },
        secondaryButton: {
          text: "string",
          action: "string"
        }
      }
    },
    example: {
      component: "CallToAction",
      data: {
        title: "Ready to Transform Your Business?",
        subtitle: "Join hundreds of companies that trust us with their digital transformation",
        primaryButton: {
          text: "Get Started Today",
          action: "/contact"
        },
        secondaryButton: {
          text: "Learn More",
          action: "/about"
        }
      }
    },
    notes: "This component includes responsive design and clear call-to-action buttons."
  },

  "accordion-section": {
    name: "Accordion Section",
    purpose: "Collapsible content sections for organizing information in an expandable format.",
    optimalUsage: [
      "Use for **FAQ sections** and **detailed information**.",
      "Keep **titles concise** and descriptive.",
      "Limit **content length** for better UX.",
      "Use **consistent styling** across all items.",
      "Ensure **keyboard accessibility**."
    ],
    jsonSchema: {
      component: "AccordionSection",
      data: {
        title: "string",
        subtitle: "string",
        items: [
          {
            title: "string",
            content: "string",
            icon: "string"
          }
        ]
      }
    },
    example: {
      component: "AccordionSection",
      data: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about our services",
        items: [
          {
            title: "What is ERP implementation?",
            content: "ERP implementation is the process of installing and configuring enterprise resource planning software to streamline business operations.",
            icon: "HelpCircle"
          },
          {
            title: "How long does implementation take?",
            content: "Implementation timelines vary from 3-12 months depending on the scope and complexity of your business requirements.",
            icon: "Clock"
          }
        ]
      }
    },
    notes: "This component includes smooth animations and keyboard navigation support."
  },

  "image-gallery": {
    name: "Image Gallery",
    purpose: "Display a collection of images in an organized grid or carousel format.",
    optimalUsage: [
      "Use for **portfolio showcases** and **product images**.",
      "Include **high-quality images** with proper aspect ratios.",
      "Add **descriptive captions** for accessibility.",
      "Implement **lightbox functionality** for viewing.",
      "Ensure **responsive grid** layout."
    ],
    jsonSchema: {
      component: "ImageGallery",
      data: {
        title: "string",
        subtitle: "string",
        images: [
          {
            src: "string",
            alt: "string",
            caption: "string",
            category: "string"
          }
        ],
        layout: "string"
      }
    },
    example: {
      component: "ImageGallery",
      data: {
        title: "Our Work Portfolio",
        subtitle: "Showcasing successful projects and implementations",
        images: [
          {
            src: "/portfolio/project1.jpg",
            alt: "ERP Dashboard Implementation",
            caption: "Modern dashboard for manufacturing company",
            category: "ERP"
          },
          {
            src: "/portfolio/project2.jpg",
            alt: "AI Analytics Platform",
            caption: "Machine learning insights dashboard",
            category: "AI"
          }
        ],
        layout: "grid"
      }
    },
    notes: "This component includes lightbox functionality and responsive grid layout."
  },

  "testimonial-carousel": {
    name: "Testimonial Carousel",
    purpose: "Rotating carousel of customer testimonials and reviews.",
    optimalUsage: [
      "Use to **build trust** and **showcase client feedback**.",
      "Include **diverse testimonials** from different industries.",
      "Show **client photos** or **company logos**.",
      "Add **star ratings** for credibility.",
      "Implement **auto-play** with pause on hover."
    ],
    jsonSchema: {
      component: "TestimonialCarousel",
      data: {
        title: "string",
        subtitle: "string",
        testimonials: [
          {
            quote: "string",
            author: "string",
            company: "string",
            position: "string",
            avatar: "string",
            rating: "number"
          }
        ],
        autoPlay: "boolean",
        interval: "number"
      }
    },
    example: {
      component: "TestimonialCarousel",
      data: {
        title: "Client Success Stories",
        subtitle: "Hear from our satisfied customers",
        testimonials: [
          {
            quote: "Finbyz transformed our entire operation with their ERP implementation.",
            author: "Sarah Johnson",
            company: "TechCorp Industries",
            position: "CTO",
            avatar: "/avatars/sarah.jpg",
            rating: 5
          },
          {
            quote: "The AI automation solutions have increased our efficiency by 300%.",
            author: "Michael Chen",
            company: "InnovateTech",
            position: "Operations Director",
            avatar: "/avatars/michael.jpg",
            rating: 5
          }
        ],
        autoPlay: true,
        interval: 5000
      }
    },
    notes: "This component includes auto-play functionality and smooth transitions."
  },

  "pricing-cards": {
    name: "Pricing Cards",
    purpose: "Display pricing plans and packages in an organized card layout.",
    optimalUsage: [
      "Use for **service pricing** and **subscription plans**.",
      "Highlight **recommended plans** with special styling.",
      "Include **clear feature lists** for each plan.",
      "Add **call-to-action buttons** for each tier.",
      "Show **price comparisons** clearly."
    ],
    jsonSchema: {
      component: "PricingCards",
      data: {
        title: "string",
        subtitle: "string",
        plans: [
          {
            name: "string",
            price: "string",
            period: "string",
            description: "string",
            features: ["string"],
            buttonText: "string",
            buttonLink: "string",
            popular: "boolean"
          }
        ]
      }
    },
    example: {
      component: "PricingCards",
      data: {
        title: "Choose Your Plan",
        subtitle: "Flexible pricing options for every business size",
        plans: [
          {
            name: "Starter",
            price: "$999",
            period: "month",
            description: "Perfect for small businesses",
            features: ["Basic ERP Setup", "Email Support", "5 User Licenses"],
            buttonText: "Get Started",
            buttonLink: "/contact",
            popular: false
          },
          {
            name: "Professional",
            price: "$2,499",
            period: "month",
            description: "Ideal for growing companies",
            features: ["Full ERP Implementation", "Priority Support", "Unlimited Users"],
            buttonText: "Start Free Trial",
            buttonLink: "/trial",
            popular: true
          }
        ]
      }
    },
    notes: "This component includes responsive design and popular plan highlighting."
  },

  "contact-form": {
    name: "Contact Form",
    purpose: "Interactive form for collecting user inquiries and contact information.",
    optimalUsage: [
      "Use for **lead generation** and **customer inquiries**.",
      "Include **essential fields** only to reduce friction.",
      "Add **form validation** for data quality.",
      "Provide **clear success/error messages**.",
      "Ensure **mobile-friendly** design."
    ],
    jsonSchema: {
      component: "ContactForm",
      data: {
        title: "string",
        subtitle: "string",
        fields: [
          {
            name: "string",
            type: "string",
            label: "string",
            placeholder: "string",
            required: "boolean"
          }
        ],
        submitButton: {
          text: "string",
          loadingText: "string"
        }
      }
    },
    example: {
      component: "ContactForm",
      data: {
        title: "Get In Touch",
        subtitle: "Ready to transform your business? Let's talk.",
        fields: [
          {
            name: "name",
            type: "text",
            label: "Full Name",
            placeholder: "Enter your full name",
            required: true
          },
          {
            name: "email",
            type: "email",
            label: "Email Address",
            placeholder: "Enter your email",
            required: true
          },
          {
            name: "message",
            type: "textarea",
            label: "Message",
            placeholder: "Tell us about your project",
            required: true
          }
        ],
        submitButton: {
          text: "Send Message",
          loadingText: "Sending..."
        }
      }
    },
    notes: "This component includes form validation and submission handling."
  },

  "timeline-section": {
    name: "Timeline Section",
    purpose: "Display chronological events, milestones, or process steps in a timeline format.",
    optimalUsage: [
      "Use for **project timelines** and **company milestones**.",
      "Include **clear dates** and **descriptions**.",
      "Add **visual icons** for each milestone.",
      "Ensure **chronological order** is clear.",
      "Make it **mobile-responsive**."
    ],
    jsonSchema: {
      component: "TimelineSection",
      data: {
        title: "string",
        subtitle: "string",
        events: [
          {
            date: "string",
            title: "string",
            description: "string",
            icon: "string",
            status: "string"
          }
        ]
      }
    },
    example: {
      component: "TimelineSection",
      data: {
        title: "Implementation Timeline",
        subtitle: "Your journey to digital transformation",
        events: [
          {
            date: "Week 1-2",
            title: "Discovery & Planning",
            description: "Understanding your business requirements and creating implementation roadmap",
            icon: "Search",
            status: "completed"
          },
          {
            date: "Week 3-6",
            title: "System Setup",
            description: "Configuring ERP modules and customizing to your business needs",
            icon: "Settings",
            status: "in-progress"
          }
        ]
      }
    },
    notes: "This component includes responsive design and status indicators."
  },

  "team-section": {
    name: "Team Section",
    purpose: "Showcase team members with photos, roles, and social links.",
    optimalUsage: [
      "Use to **introduce team members** and **build trust**.",
      "Include **professional photos** and **clear roles**.",
      "Add **social media links** for connection.",
      "Keep **bios concise** and engaging.",
      "Ensure **consistent styling** across all profiles."
    ],
    jsonSchema: {
      component: "TeamSection",
      data: {
        title: "string",
        subtitle: "string",
        members: [
          {
            name: "string",
            role: "string",
            bio: "string",
            photo: "string",
            socialLinks: {
              linkedin: "string",
              twitter: "string",
              email: "string"
            }
          }
        ]
      }
    },
    example: {
      component: "TeamSection",
      data: {
        title: "Meet Our Team",
        subtitle: "Expert consultants dedicated to your success",
        members: [
          {
            name: "Dr. Sarah Johnson",
            role: "Senior ERP Consultant",
            bio: "15+ years experience in enterprise software implementation",
            photo: "/team/sarah.jpg",
            socialLinks: {
              linkedin: "https://linkedin.com/in/sarahjohnson",
              twitter: "https://twitter.com/sarahjohnson",
              email: "sarah@finbyz.com"
            }
          },
          {
            name: "Michael Chen",
            role: "AI Solutions Architect",
            bio: "Specialist in machine learning and automation",
            photo: "/team/michael.jpg",
            socialLinks: {
              linkedin: "https://linkedin.com/in/michaelchen",
              twitter: "https://twitter.com/michaelchen",
              email: "michael@finbyz.com"
            }
          }
        ]
      }
    },
    notes: "This component includes hover effects and social media integration."
  },

  "blog-grid": {
    name: "Blog Grid",
    purpose: "Display blog posts or articles in a responsive grid layout.",
    optimalUsage: [
      "Use for **content marketing** and **thought leadership**.",
      "Include **featured images** and **excerpts**.",
      "Show **publication dates** and **author info**.",
      "Add **category tags** for organization.",
      "Implement **pagination** for large collections."
    ],
    jsonSchema: {
      component: "BlogGrid",
      data: {
        title: "string",
        subtitle: "string",
        posts: [
          {
            title: "string",
            excerpt: "string",
            author: "string",
            date: "string",
            category: "string",
            image: "string",
            slug: "string"
          }
        ]
      }
    },
    example: {
      component: "BlogGrid",
      data: {
        title: "Latest Insights",
        subtitle: "Stay updated with industry trends and best practices",
        posts: [
          {
            title: "The Future of ERP in 2024",
            excerpt: "Discover how AI and cloud technologies are reshaping enterprise resource planning...",
            author: "Sarah Johnson",
            date: "2024-01-15",
            category: "ERP",
            image: "/blog/erp-future.jpg",
            slug: "future-of-erp-2024"
          },
          {
            title: "5 Steps to Successful Digital Transformation",
            excerpt: "Learn the essential steps every business should take for successful digital transformation...",
            author: "Michael Chen",
            date: "2024-01-10",
            category: "Digital Transformation",
            image: "/blog/digital-transformation.jpg",
            slug: "digital-transformation-steps"
          }
        ]
      }
    },
    notes: "This component includes responsive grid layout and category filtering."
  },

  "faq-section": {
    name: "FAQ Section",
    purpose: "Display frequently asked questions and answers in an organized format.",
    optimalUsage: [
      "Use for **customer support** and **information sharing**.",
      "Group questions by **categories** for better organization.",
      "Keep **answers concise** and helpful.",
      "Include **search functionality** for large FAQ sets.",
      "Make it **mobile-friendly**."
    ],
    jsonSchema: {
      component: "FAQSection",
      data: {
        title: "string",
        subtitle: "string",
        categories: [
          {
            name: "string",
            questions: [
              {
                question: "string",
                answer: "string"
              }
            ]
          }
        ]
      }
    },
    example: {
      component: "FAQSection",
      data: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our services",
        categories: [
          {
            name: "ERP Implementation",
            questions: [
              {
                question: "How long does ERP implementation take?",
                answer: "Implementation timelines typically range from 3-12 months depending on the scope and complexity of your business requirements."
              },
              {
                question: "What is the cost of ERP implementation?",
                answer: "Costs vary based on the size of your organization and the modules you need. We provide detailed quotes after initial consultation."
              }
            ]
          },
          {
            name: "Support & Maintenance",
            questions: [
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support packages including 24/7 technical support, regular updates, and maintenance services."
              }
            ]
          }
        ]
      }
    },
    notes: "This component includes search functionality and category organization."
  },



  "modal-dialog": {
    name: "Modal Dialog",
    purpose: "Overlay dialog for displaying additional content or forms.",
    optimalUsage: [
      "Use for **forms**, **confirmations**, and **detailed views**.",
      "Include **clear close buttons** and **escape key support**.",
      "Add **backdrop click** to close functionality.",
      "Ensure **keyboard accessibility**.",
      "Keep **content focused** and concise."
    ],
    jsonSchema: {
      component: "ModalDialog",
      data: {
        title: "string",
        content: "string",
        actions: [
          {
            text: "string",
            type: "string",
            action: "string"
          }
        ],
        size: "string"
      }
    },
    example: {
      component: "ModalDialog",
      data: {
        title: "Confirm Action",
        content: "Are you sure you want to delete this project? This action cannot be undone.",
        actions: [
          { text: "Cancel", type: "secondary", action: "close" },
          { text: "Delete", type: "danger", action: "delete" }
        ],
        size: "medium"
      }
    },
    notes: "This component includes backdrop click and keyboard navigation support."
  },

  "notification-toast": {
    name: "Notification Toast",
    purpose: "Temporary notification messages that appear and disappear automatically.",
    optimalUsage: [
      "Use for **success**, **error**, and **info messages**.",
      "Keep **messages concise** and clear.",
      "Set **appropriate duration** for message type.",
      "Include **dismiss functionality**.",
      "Ensure **non-intrusive** positioning."
    ],
    jsonSchema: {
      component: "NotificationToast",
      data: {
        type: "string",
        title: "string",
        message: "string",
        duration: "number",
        actions: [
          {
            text: "string",
            action: "string"
          }
        ]
      }
    },
    example: {
      component: "NotificationToast",
      data: {
        type: "success",
        title: "Success!",
        message: "Your project has been saved successfully.",
        duration: 5000,
        actions: [
          { text: "View", action: "view" },
          { text: "Dismiss", action: "dismiss" }
        ]
      }
    },
    notes: "This component includes auto-dismiss and manual close functionality."
  },

  "search-bar": {
    name: "Search Bar",
    purpose: "Input field for searching through content with suggestions and filters.",
    optimalUsage: [
      "Use for **content discovery** and **navigation**.",
      "Include **search suggestions** for better UX.",
      "Add **search filters** for refined results.",
      "Implement **search history** if relevant.",
      "Ensure **fast response times**."
    ],
    jsonSchema: {
      component: "SearchBar",
      data: {
        placeholder: "string",
        suggestions: ["string"],
        filters: [
          {
            key: "string",
            label: "string",
            options: ["string"]
          }
        ]
      }
    },
    example: {
      component: "SearchBar",
      data: {
        placeholder: "Search for services, articles, or solutions...",
        suggestions: ["ERP Implementation", "AI Automation", "Digital Transformation"],
        filters: [
          {
            key: "category",
            label: "Category",
            options: ["ERP", "AI", "Consulting", "Development"]
          },
          {
            key: "type",
            label: "Type",
            options: ["Services", "Articles", "Case Studies"]
          }
        ]
      }
    },
    notes: "This component includes search suggestions and filter functionality."
  },

  "filter-tags": {
    name: "Filter Tags",
    purpose: "Interactive tags for filtering and categorizing content.",
    optimalUsage: [
      "Use for **content filtering** and **categorization**.",
      "Include **clear labels** and **visual feedback**.",
      "Add **multiple selection** capability.",
      "Implement **clear all** functionality.",
      "Ensure **responsive design**."
    ],
    jsonSchema: {
      component: "FilterTags",
      data: {
        title: "string",
        tags: [
          {
            key: "string",
            label: "string",
            count: "number",
            selected: "boolean"
          }
        ]
      }
    },
    example: {
      component: "FilterTags",
      data: {
        title: "Filter by Category",
        tags: [
          { key: "erp", label: "ERP", count: 15, selected: false },
          { key: "ai", label: "AI", count: 8, selected: true },
          { key: "consulting", label: "Consulting", count: 12, selected: false },
          { key: "development", label: "Development", count: 6, selected: false }
        ]
      }
    },
    notes: "This component includes multi-select functionality and count indicators."
  },

  "breadcrumbs": {
    name: "Breadcrumbs",
    purpose: "Navigation component showing the current page location in the site hierarchy.",
    optimalUsage: [
      "Use for **site navigation** and **user orientation**.",
      "Include **clickable links** for navigation.",
      "Show **current page** clearly.",
      "Keep **breadcrumb depth** reasonable.",
      "Ensure **mobile responsiveness**."
    ],
    jsonSchema: {
      component: "Breadcrumbs",
      data: {
        items: [
          {
            label: "string",
            href: "string",
            current: "boolean"
          }
        ]
      }
    },
    example: {
      component: "Breadcrumbs",
      data: {
        items: [
          { label: "Home", href: "/", current: false },
          { label: "Services", href: "/services", current: false },
          { label: "ERP Implementation", href: "/services/erp", current: true }
        ]
      }
    },
    notes: "This component includes responsive design and accessibility features."
  },

  "sidebar-menu": {
    name: "Sidebar Menu",
    purpose: "Vertical navigation menu for organizing site sections and pages.",
    optimalUsage: [
      "Use for **site navigation** and **content organization**.",
      "Include **clear hierarchy** with proper indentation.",
      "Add **active state** indicators.",
      "Implement **collapsible sections** if needed.",
      "Ensure **mobile-friendly** design."
    ],
    jsonSchema: {
      component: "SidebarMenu",
      data: {
        items: [
          {
            label: "string",
            href: "string",
            icon: "string",
            children: [
              {
                label: "string",
                href: "string"
              }
            ]
          }
        ]
      }
    },
    example: {
      component: "SidebarMenu",
      data: {
        items: [
          {
            label: "Dashboard",
            href: "/dashboard",
            icon: "Home",
            children: []
          },
          {
            label: "Services",
            href: "/services",
            icon: "Briefcase",
            children: [
              { label: "ERP Implementation", href: "/services/erp" },
              { label: "AI Solutions", href: "/services/ai" },
              { label: "Consulting", href: "/services/consulting" }
            ]
          }
        ]
      }
    },
    notes: "This component includes collapsible sections and active state indicators."
  },

  "footer-links": {
    name: "Footer Links",
    purpose: "Organized links and information in the page footer.",
    optimalUsage: [
      "Use for **site navigation** and **important links**.",
      "Organize links into **logical groups**.",
      "Include **contact information** and **social links**.",
      "Add **legal links** (privacy, terms).",
      "Ensure **mobile-friendly** layout."
    ],
    jsonSchema: {
      component: "FooterLinks",
      data: {
        sections: [
          {
            title: "string",
            links: [
              {
                label: "string",
                href: "string"
              }
            ]
          }
        ],
        socialLinks: [
          {
            platform: "string",
            url: "string",
            icon: "string"
          }
        ]
      }
    },
    example: {
      component: "FooterLinks",
      data: {
        sections: [
          {
            title: "Services",
            links: [
              { label: "ERP Implementation", href: "/services/erp" },
              { label: "AI Solutions", href: "/services/ai" },
              { label: "Consulting", href: "/services/consulting" }
            ]
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ],
        socialLinks: [
          { platform: "LinkedIn", url: "https://linkedin.com/company/finbyz", icon: "Linkedin" },
          { platform: "Twitter", url: "https://twitter.com/finbyz", icon: "Twitter" }
        ]
      }
    },
    notes: "This component includes responsive design and social media integration."
  },

  "social-media-icons": {
    name: "Social Media Icons",
    purpose: "Display social media links with icons for easy access.",
    optimalUsage: [
      "Use for **social media presence** and **engagement**.",
      "Include **relevant platforms** only.",
      "Add **hover effects** for interactivity.",
      "Ensure **consistent sizing** and **spacing**.",
      "Make icons **accessible** with proper labels."
    ],
    jsonSchema: {
      component: "SocialMediaIcons",
      data: {
        platforms: [
          {
            name: "string",
            url: "string",
            icon: "string",
            color: "string"
          }
        ],
        size: "string"
      }
    },
    example: {
      component: "SocialMediaIcons",
      data: {
        platforms: [
          { name: "LinkedIn", url: "https://linkedin.com/company/finbyz", icon: "Linkedin", color: "#0077B5" },
          { name: "Twitter", url: "https://twitter.com/finbyz", icon: "Twitter", color: "#1DA1F2" },
          { name: "Facebook", url: "https://facebook.com/finbyz", icon: "Facebook", color: "#1877F2" }
        ],
        size: "medium"
      }
    },
    notes: "This component includes hover effects and platform-specific colors."
  },

  "loading-spinner": {
    name: "Loading Spinner",
    purpose: "Visual indicator for loading states and processing operations.",
    optimalUsage: [
      "Use for **loading states** and **processing feedback**.",
      "Include **descriptive text** when appropriate.",
      "Choose **appropriate size** for context.",
      "Add **accessibility attributes**.",
      "Ensure **smooth animations**."
    ],
    jsonSchema: {
      component: "LoadingSpinner",
      data: {
        size: "string",
        text: "string",
        color: "string"
      }
    },
    example: {
      component: "LoadingSpinner",
      data: {
        size: "medium",
        text: "Loading your data...",
        color: "blue"
      }
    },
    notes: "This component includes accessibility features and smooth animations."
  },

  "error-boundary": {
    name: "Error Boundary",
    purpose: "React component that catches JavaScript errors and displays fallback UI.",
    optimalUsage: [
      "Use to **catch errors** and **prevent app crashes**.",
      "Include **helpful error messages**.",
      "Add **recovery options** when possible.",
      "Log **error details** for debugging.",
      "Provide **user-friendly fallback UI**."
    ],
    jsonSchema: {
      component: "ErrorBoundary",
      data: {
        fallback: {
          title: "string",
          message: "string",
          actions: [
            {
              text: "string",
              action: "string"
            }
          ]
        }
      }
    },
    example: {
      component: "ErrorBoundary",
      data: {
        fallback: {
          title: "Something went wrong",
          message: "We're sorry, but something unexpected happened. Please try refreshing the page.",
          actions: [
            { text: "Refresh Page", action: "refresh" },
            { text: "Go Home", action: "home" }
          ]
        }
      }
    },
    notes: "This component includes error logging and recovery options."
  }
};

export const getComponentManifest = (componentName: string): ComponentManifest | undefined => {
  return componentManifest[componentName];
};

export const getAllComponentNames = (): string[] => {
  return Object.keys(componentManifest);
}; 
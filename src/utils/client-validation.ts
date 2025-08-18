import { PageData, SectionData, COMPONENT_MAP } from '@/types/section-data';

// ============================================================================
// CLIENT-SIDE VALIDATION UTILITIES
// ============================================================================

/**
 * Validates page JSON data structure
 * @param jsonData - The JSON data to validate
 * @returns Validation result with errors
 */
export function validatePageJSON(jsonData: any): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  try {
    // Check if it's a valid object
    if (!jsonData || typeof jsonData !== 'object') {
      errors.push('Data must be a valid JSON object');
      return { isValid: false, errors };
    }

    // Validate metadata
    if (!jsonData.metadata) {
      errors.push('Page metadata is required');
    } else {
      if (!jsonData.metadata.title) {
        errors.push('Page title is required in metadata');
      }
      if (!jsonData.metadata.description) {
        errors.push('Page description is required in metadata');
      }
    }

    // Validate sections
    if (!jsonData.sections) {
      errors.push('Page sections are required');
    } else if (!Array.isArray(jsonData.sections)) {
      errors.push('Page sections must be an array');
    } else if (jsonData.sections.length === 0) {
      errors.push('Page must have at least one section');
    } else {
      // Validate each section
      jsonData.sections.forEach((section: any, index: number) => {
        if (!section.type) {
          errors.push(`Section ${index} must have a type`);
        } else if (!COMPONENT_MAP[section.type]) {
          errors.push(`Unknown section type: ${section.type}`);
        }

        if (!section.data) {
          errors.push(`Section ${index} (${section.type}) must have data`);
        }
      });
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  } catch (error) {
    errors.push('Invalid JSON format');
    return { isValid: false, errors };
  }
}

/**
 * Generates sample page data for testing
 * @returns Sample page data structure
 */
export function generateSamplePageData(): PageData {
  return {
    metadata: {
      title: "Sample Page",
      description: "A sample page generated with the page assembler",
      keywords: ["sample", "page", "generated"]
    },
    sections: [
      {
        type: "hero",
        data: {
          title: "Welcome to Our Platform",
          subtitle: "Building the future of technology",
          description: "We provide cutting-edge solutions for modern businesses",
          primaryButton: {
            text: "Get Started",
            url: "/get-started",
            icon: "ArrowRight"
          },
          secondaryButton: {
            text: "Learn More",
            url: "/about",
            icon: "Info"
          },
          image: {
            src: "/images/hero.jpg",
            alt: "Hero image"
          },
          stats: [
            {
              value: "10K+",
              label: "Happy Clients"
            },
            {
              value: "500+",
              label: "Projects Completed"
            },
            {
              value: "99%",
              label: "Satisfaction Rate"
            }
          ]
        }
      },
      {
        type: "services",
        data: {
          title: "Our Services",
          subtitle: "Comprehensive solutions for your business",
          services: [
            {
              title: "Web Development",
              description: "Modern web applications built with cutting-edge technologies",
              icon: "Code",
              iconColor: "#1A5276",
              iconBg: "#EAF1F8",
              borderColor: "#1A5276",
              bgColor: "#f8fafc",
              capabilities: [
                {
                  title: "Frontend",
                  items: [
                    {
                      name: "React",
                      color: "#61dafb"
                    },
                    {
                      name: "Next.js",
                      color: "#000000"
                    },
                    {
                      name: "TypeScript",
                      color: "#3178c6"
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        type: "cta",
        data: {
          title: "Ready to Get Started?",
          subtitle: "Join thousands of satisfied customers",
          description: "Start your journey with us today and transform your business",
          primaryButton: {
            text: "Start Free Trial",
            url: "/trial",
            icon: "Rocket",
            variant: "primary"
          },
          secondaryButton: {
            text: "Contact Sales",
            url: "/contact",
            icon: "Phone",
            variant: "secondary"
          }
        }
      }
    ]
  };
}

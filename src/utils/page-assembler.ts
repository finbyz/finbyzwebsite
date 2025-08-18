import { PageData, SectionData, COMPONENT_MAP } from '@/types/section-data';
import fs from 'fs';
import path from 'path';

// ============================================================================
// PAGE ASSEMBLER UTILITY
// ============================================================================

/**
 * Page Assembler Class
 * Handles the assembly of pages from JSON data by combining section components
 */
export class PageAssembler {
  private baseComponentsPath: string;
  private outputPath: string;

  constructor(baseComponentsPath: string = 'src/components/sections', outputPath: string = 'src/pages/generated') {
    this.baseComponentsPath = baseComponentsPath;
    this.outputPath = outputPath;
  }

  /**
   * Assembles a complete page from JSON data
   * @param pageData - The page data in JSON format
   * @param pageName - The name for the generated page
   * @returns Generated page content and metadata
   */
  async assemblePage(pageData: PageData, pageName: string): Promise<{
    pageContent: string;
    metadata: any;
    sections: string[];
  }> {
    try {
      // Validate page data
      this.validatePageData(pageData);

      // Generate the page content
      const pageContent = this.generatePageContent(pageData, pageName);
      
      // Generate individual section files
      const sections = await this.generateSectionFiles(pageData.sections, pageName);

      // Generate metadata
      const metadata = {
        title: pageData.metadata.title,
        description: pageData.metadata.description,
        keywords: pageData.metadata.keywords || [],
        sections: pageData.sections.map(section => section.type),
        generatedAt: new Date().toISOString()
      };

      return {
        pageContent,
        metadata,
        sections
      };
    } catch (error) {
      throw new Error(`Failed to assemble page: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Validates the page data structure
   * @param pageData - The page data to validate
   */
  private validatePageData(pageData: PageData): void {
    if (!pageData.metadata) {
      throw new Error('Page metadata is required');
    }

    if (!pageData.metadata.title) {
      throw new Error('Page title is required');
    }

    if (!pageData.sections || !Array.isArray(pageData.sections)) {
      throw new Error('Page sections must be an array');
    }

    if (pageData.sections.length === 0) {
      throw new Error('Page must have at least one section');
    }

    // Validate each section
    pageData.sections.forEach((section, index) => {
      if (!section.type) {
        throw new Error(`Section ${index} must have a type`);
      }

      if (!COMPONENT_MAP[section.type]) {
        throw new Error(`Unknown section type: ${section.type}`);
      }

      if (!section.data) {
        throw new Error(`Section ${index} (${section.type}) must have data`);
      }
    });
  }

  /**
   * Generates the main page content
   * @param pageData - The page data
   * @param pageName - The page name
   * @returns Generated page content
   */
  private generatePageContent(pageData: PageData, pageName: string): string {
    const imports = this.generateImports(pageData.sections);
    const sections = this.generateSections(pageData.sections);
    const metadata = pageData.metadata;

    return `"use client";

import { Metadata } from 'next';
${imports}

// Page metadata
export const metadata: Metadata = {
  title: "${metadata.title}",
  description: "${metadata.description}",
  keywords: ${JSON.stringify(metadata.keywords || [])},
};

// Page component
export default function ${this.toPascalCase(pageName)}Page() {
  return (
    <main className="min-h-screen">
      ${sections}
    </main>
  );
}
`;
  }

  /**
   * Generates import statements for required components
   * @param sections - Array of section data
   * @returns Import statements string
   */
  private generateImports(sections: SectionData[]): string {
    const uniqueComponents = [...new Set(sections.map(section => COMPONENT_MAP[section.type]))];
    
    return uniqueComponents
      .map(component => `import ${component} from '@/components/sections/${this.toKebabCase(component)}';`)
      .join('\n');
  }

  /**
   * Generates section components with their data
   * @param sections - Array of section data
   * @returns Sections JSX string
   */
  private generateSections(sections: SectionData[]): string {
    return sections
      .map(section => {
        const componentName = COMPONENT_MAP[section.type];
        const data = JSON.stringify(section.data, null, 2);
        
        return `      <${componentName} data={${data}} />`;
      })
      .join('\n');
  }

  /**
   * Generates individual section files for modularity
   * @param sections - Array of section data
   * @param pageName - The page name
   * @returns Array of generated section file names
   */
  private async generateSectionFiles(sections: SectionData[], pageName: string): Promise<string[]> {
    const sectionFiles: string[] = [];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const componentName = COMPONENT_MAP[section.type];
      const sectionFileName = `${pageName}-section-${i + 1}-${section.type}.tsx`;
      
      const sectionContent = this.generateSectionFile(section, componentName, i + 1);
      
      // In a real implementation, you would write this to the filesystem
      // await this.writeFile(path.join(this.outputPath, 'sections', sectionFileName), sectionContent);
      
      sectionFiles.push(sectionFileName);
    }

    return sectionFiles;
  }

  /**
   * Generates individual section file content
   * @param section - Section data
   * @param componentName - Component name
   * @param sectionNumber - Section number
   * @returns Section file content
   */
  private generateSectionFile(section: SectionData, componentName: string, sectionNumber: number): string {
    const data = JSON.stringify(section.data, null, 2);
    
    return `"use client";

import ${componentName} from '@/components/sections/${this.toKebabCase(componentName)}';

// Section ${sectionNumber}: ${section.type}
export default function ${this.toPascalCase(section.type)}Section${sectionNumber}() {
  const data = ${data};

  return <${componentName} data={data} />;
}
`;
  }

  /**
   * Writes content to a file
   * @param filePath - File path
   * @param content - File content
   */
  private async writeFile(filePath: string, content: string): Promise<void> {
    const dir = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
  }

  /**
   * Converts string to PascalCase
   * @param str - Input string
   * @returns PascalCase string
   */
  private toPascalCase(str: string): string {
    return str
      .split(/[-_\s]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  /**
   * Converts string to kebab-case
   * @param str - Input string
   * @returns kebab-case string
   */
  private toKebabCase(str: string): string {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Creates a page assembler instance and assembles a page
 * @param pageData - The page data in JSON format
 * @param pageName - The name for the generated page
 * @param options - Configuration options
 * @returns Generated page content and metadata
 */
export async function assemblePageFromJSON(
  pageData: PageData,
  pageName: string,
  options: {
    baseComponentsPath?: string;
    outputPath?: string;
    generateFiles?: boolean;
  } = {}
): Promise<{
  pageContent: string;
  metadata: any;
  sections: string[];
}> {
  const assembler = new PageAssembler(
    options.baseComponentsPath,
    options.outputPath
  );

  return assembler.assemblePage(pageData, pageName);
}

/**
 * Validates JSON data against the page data structure
 * @param jsonData - The JSON data to validate
 * @returns Validation result
 */
export function validatePageJSON(jsonData: any): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  try {
    // Basic structure validation
    if (!jsonData || typeof jsonData !== 'object') {
      errors.push('JSON data must be an object');
      return { isValid: false, errors };
    }

    if (!jsonData.metadata) {
      errors.push('Missing metadata object');
    } else {
      if (!jsonData.metadata.title) {
        errors.push('Missing page title in metadata');
      }
      if (!jsonData.metadata.description) {
        errors.push('Missing page description in metadata');
      }
    }

    if (!jsonData.sections) {
      errors.push('Missing sections array');
    } else if (!Array.isArray(jsonData.sections)) {
      errors.push('Sections must be an array');
    } else if (jsonData.sections.length === 0) {
      errors.push('Page must have at least one section');
    } else {
      // Validate each section
      jsonData.sections.forEach((section: any, index: number) => {
        if (!section.type) {
          errors.push(`Section ${index} missing type`);
        } else if (!COMPONENT_MAP[section.type]) {
          errors.push(`Section ${index} has unknown type: ${section.type}`);
        }

        if (!section.data) {
          errors.push(`Section ${index} missing data`);
        }
      });
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  } catch (error) {
    errors.push(`JSON parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return { isValid: false, errors };
  }
}

/**
 * Generates a sample page data structure
 * @returns Sample page data
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
            { value: "10K+", label: "Happy Clients" },
            { value: "500+", label: "Projects Completed" },
            { value: "99%", label: "Satisfaction Rate" }
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
                    { name: "React", color: "#61dafb" },
                    { name: "Next.js", color: "#000000" },
                    { name: "TypeScript", color: "#3178c6" }
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
          },
          trustIndicator: {
            text: "Trusted by 10,000+ companies",
            icon: "Shield"
          }
        }
      }
    ]
  };
}

// ============================================================================
// EXPORT UTILITIES
// ============================================================================

export { PageAssembler as default };

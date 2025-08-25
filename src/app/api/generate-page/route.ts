import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { PageData, SectionData } from '@/types/section-data';

// ============================================================================
// PAGE GENERATION API
// ============================================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    if (!body.pageName || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: pageName and content' },
        { status: 400 }
      );
    }

    const { pageName, content } = body;

    // Validate the content structure
    if (!content.metadata || !content.sections || !Array.isArray(content.sections)) {
      return NextResponse.json(
        { error: 'Invalid content structure. Must include metadata and sections array' },
        { status: 400 }
      );
    }

    // Generate the page
    const result = await generateDynamicPage(pageName, content);

    return NextResponse.json({
      success: true,
      message: `Page '${pageName}' generated successfully`,
      data: {
        pageName,
        pageUrl: `/${sanitizeSlug(pageName)}`,
        sectionsCount: content.sections.length,
        sections: content.sections.map((s: SectionData) => s.type),
        generatedFiles: result.generatedFiles
      }
    }, { headers: getCorsHeaders(request) });

  } catch (error) {
    console.error('Error generating page:', error);
    return NextResponse.json(
      { error: 'Failed to generate page', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500, headers: getCorsHeaders(request) }
    );
  }
}

// Explicitly handle GET with method not allowed to avoid HTML fallbacks
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const docsParam = url.searchParams.get('docs');

  if (docsParam && docsParam.toLowerCase() === 'true') {
    return NextResponse.json(
      { success: true, sections: getSectionsDocumentation() },
      { status: 200, headers: getCorsHeaders(request) }
    );
  }

  return NextResponse.json(
    { error: 'Method not allowed. Use POST. (Tip: GET ?docs=true for component docs)' },
    { status: 405, headers: getCorsHeaders(request) }
  );
}

// Handle CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(request) });
}

/**
 * Generates a dynamic page with the given content
 */
async function generateDynamicPage(pageName: string, content: PageData) {
  const generatedFiles: string[] = [];
  
  try {
    // Also store JSON in a runtime data directory for dynamic serving
    const runtimeDataDir = join(process.cwd(), 'data', 'dynamic-pages');
    await mkdir(runtimeDataDir, { recursive: true });
    const runtimeJsonPath = join(runtimeDataDir, `${pageName}.json`);
    await writeFile(runtimeJsonPath, JSON.stringify(content, null, 2), 'utf-8');
    generatedFiles.push(runtimeJsonPath);

    // Create the page directory directly under app as /<slug>
    const slug = sanitizeSlug(pageName);
    const pageDir = join(process.cwd(), 'src', 'app', slug);
    await mkdir(pageDir, { recursive: true });

    // Generate the page.tsx file
    const pageContent = generatePageComponent(pageName, content);
    const pageFilePath = join(pageDir, 'page.tsx');
    await writeFile(pageFilePath, pageContent, 'utf-8');
    generatedFiles.push(pageFilePath);

    // Generate the layout.tsx file if it doesn't exist
    const layoutContent = generateLayoutComponent(content.metadata);
    const layoutFilePath = join(pageDir, 'layout.tsx');
    await writeFile(layoutFilePath, layoutContent, 'utf-8');
    generatedFiles.push(layoutFilePath);

    // Generate a JSON data file for the page
    const dataContent = JSON.stringify(content, null, 2);
    const dataFilePath = join(pageDir, 'page-data.json');
    await writeFile(dataFilePath, dataContent, 'utf-8');
    generatedFiles.push(dataFilePath);

    return { generatedFiles };

  } catch (error) {
    throw new Error(`Failed to generate page files: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generates the main page component
 */
function generatePageComponent(pageName: string, pageData: any): string {
  // Detect the data format
  const isHtmlComponentsFormat = pageData.sections && 
    pageData.sections.length > 0 && 
    pageData.sections[0].type === 'html-components';

  // Convert kebab-case to PascalCase for function name
  const functionName = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  if (isHtmlComponentsFormat) {
    // Generate HTML Components renderer
    return `import { HtmlComponentsPageClient } from '@/components/HtmlComponentsPageClient';
import pageData from './page-data.json';

export default function ${functionName}Page() {
	return (
		<HtmlComponentsPageClient
			pageData={pageData as any}
			className="dynamic-page-${pageName}"
			pageKey="${pageName}"
		/>
	);
}
`;
  } else {
    // Generate SectionsBasedRenderer (includes standard Header/Footer and supports all sections)
    return `import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function ${functionName}Page() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-${pageName}"
			pageKey="${pageName}"
		/>
	);
}
`;
  }
}

/**
 * Generates the layout component for the page
 */
function generateLayoutComponent(metadata: PageData['metadata']): string {
  const title = metadata.title.replace(/'/g, "\\'");
  const description = metadata.description.replace(/'/g, "\\'");
  const keywords = metadata.keywords ? JSON.stringify(metadata.keywords) : '[]';
  
  return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  keywords: ${keywords},
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
`;
}

// ----------------------------------------------------------------------------
// Utilities
// ----------------------------------------------------------------------------
function getCorsHeaders(request: NextRequest): HeadersInit {
  const origin = request.headers.get('origin') || '*';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400'
  };
}

function sanitizeSlug(input: string): string {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\-\/_]/g, '-')
    .replace(/\/+/, '/')
    .replace(/^-+|-+$/g, '');
}

// ----------------------------------------------------------------------------
// Sections Documentation
// ----------------------------------------------------------------------------
function getSectionsDocumentation() {
  // Documentation for each section under src/components/sections
  // For generate-page API consumers. Icon names are from lucide-react unless noted.
  return [
    {
      type: 'hero',
      aliases: ['hero'],
      intendedContent: 'Above-the-fold header. Data keys: title, subtitle, primaryButton, secondaryButton, image { src, alt }',
      typicalData: { title: 1, subtitle: 1, buttons: 2, image: 1 },
      allowedIcons: []
    },
    {
      type: 'hero-basic',
      aliases: ['hero-without-button', 'hero-basic'],
      intendedContent: 'Hero without buttons. Data keys: title, subtitle, image { src, alt }',
      typicalData: { title: 1, subtitle: 1, image: 1 },
      allowedIcons: []
    },
    {
      type: 'number-cards',
      aliases: ['benefits', 'number-cards'],
      intendedContent: 'Numeric stat cards with counter. Data keys: benefits[] { number, suffix, label, header, description, icon }',
      typicalData: { benefits: 4 },
      allowedIcons: ['Award', 'TrendingUp', 'Globe', 'Target', 'CheckCircle', 'Zap', 'Shield', 'Clock']
    },
    {
      type: 'feature-cards',
      aliases: ['differentiators', 'feature-cards'],
      intendedContent: 'Feature highlight cards. Data keys: differentiators[] { icon, title, description, iconColor, iconBg }',
      typicalData: { differentiators: 4 },
      allowedIcons: ['Eye', 'Heart', 'CheckCircle', 'BarChart3']
    },
    {
      type: 'card-grid',
      aliases: ['responsive-card-grid', 'card-grid'],
      intendedContent: 'Responsive grid. Data keys: cards[] { title, description, image? | icon? }, variant: "standard" | "iconCard"',
      typicalData: { cards: '2, 3, 4, 6, or 8' },
      allowedIcons: ['Award', 'TrendingUp', 'Globe', 'Target', 'BarChart3', 'Zap', 'Shield', 'Cpu']
    },
    {
      type: 'long-description-cards',
      aliases: ['testimonials', 'long-description-cards'],
      intendedContent: 'Long quote/review cards. Data keys: testimonials[] { quote, author, company, initials, rating, palette, url }',
      typicalData: { testimonials: '3-6' },
      allowedIcons: ['Star', 'Quote']
    },
    {
      type: 'technology-categories',
      aliases: ['technology-stack', 'technology-categories'],
      intendedContent: 'Tech categories and tags. Data keys: technologies[] { category, description, technologies[], icon?(optional) }',
      typicalData: { technologies: 8 },
      allowedIcons: ['Code', 'Database', 'Cloud', 'Cpu', 'Shield', 'Zap', 'GitBranch', 'Globe', 'Monitor']
    },
    {
      type: 'stats-cards',
      aliases: ['stats-showcase', 'stats-cards'],
      intendedContent: 'Animated stats grid. Data keys: stats[] { icon?(optional), value, suffix, label, description, iconBg? }',
      typicalData: { stats: '4-8' },
      allowedIcons: ['TrendingUp', 'Users', 'Globe', 'Award', 'Clock', 'Zap', 'Shield', 'Target']
    },
    {
      type: 'team-expertise-cards',
      aliases: ['team-expertise', 'team-expertise-cards'],
      intendedContent: 'Expertise/skills cards. Data keys: team[] { category|name, experts, experience, skills[], description, icon? }',
      typicalData: { team: '6-8 areas' },
      allowedIcons: ['Users', 'Code', 'Database', 'Cloud', 'Shield', 'Zap', 'Globe', 'Cpu', 'GitBranch', 'Award', 'Clock', 'Target']
    },
    {
      type: 'process-steps',
      aliases: ['process-workflow', 'process-steps'],
      intendedContent: 'Process timeline. Data keys: processSteps[] { step, title, description, details[], duration, icon, iconColor, iconBg }',
      typicalData: { processSteps: 6 },
      allowedIcons: ['Search', 'Lightbulb', 'Code', 'TestTube', 'Rocket', 'CheckCircle']
    },
    {
      type: 'global-presence',
      aliases: ['global-presence'],
      intendedContent: 'Global reach and offices. Data keys: globalStats[], globalOffices[], optional locations[], globalCoverage.regions[]',
      typicalData: { globalStats: 4, globalOffices: '3-6', locations: 'optional list', globalCoverage: '4 regions' },
      allowedIcons: ['MapPin', 'Globe', 'Users', 'Clock', 'Phone', 'Mail', 'Building', 'Flag']
    },
    {
      type: 'contact-info-block',
      aliases: ['contact-info', 'contact-info-block'],
      intendedContent: 'Contact overview. Data keys: contactStats[], contactMethods[], officeLocations[], optional form, cta',
      typicalData: { contactStats: 4, contactMethods: 4, officeLocations: '3-4' },
      allowedIcons: ['Phone', 'Mail', 'MapPin', 'Clock', 'MessageCircle', 'Globe', 'Building', 'Users']
    },
    {
      type: 'contact-form',
      aliases: ['contact-form'],
      intendedContent: 'Simple form. Data keys: title, subtitle, submitLabel, toEmail; fields are name, email, mobile, message',
      typicalData: { fields: 4 },
      allowedIcons: []
    },
    {
      type: 'contact-with-map',
      aliases: ['contact-with-map'],
      intendedContent: 'Contact items + embedded map. Data keys: items[] { label, value, href?, icon }, addressTitle, addressLines[], mapEmbedUrl',
      typicalData: { items: '3-6', addressLines: '1-3' },
      // note: icon keys are lowercase strings mapped internally
      allowedIcons: ['phone', 'headset', 'briefcase', 'mail', 'user', 'pin']
    },
    {
      type: 'logos-carousel',
      aliases: ['client-logos', 'logos-carousel'],
      intendedContent: 'Client logos carousel. Data keys: clients[] (objects), carousel { autoPlay, interval, showArrows, showIndicators }',
      typicalData: { clients: '6-18', perSlide: 6 },
      allowedIcons: ['ChevronLeft', 'ChevronRight']
    },
    {
      type: 'resource-center',
      aliases: ['resource-center'],
      intendedContent: 'Resources hub. Data keys: resourceCategories[], resources[], upcomingEvents[], resourceStats',
      typicalData: { resourceCategories: 4, resources: 6, upcomingEvents: 3 },
      allowedIcons: ['BookOpen', 'Video', 'FileText', 'Download', 'Play', 'Calendar', 'Users', 'Star']
    },
    {
      type: 'call-to-action',
      aliases: ['cta', 'call-to-action'],
      intendedContent: 'CTA block. Data keys: subheading { text, icon }, title, description, primaryButton { text, icon }, secondaryButton { text, icon }, trustIndicator',
      typicalData: { buttons: 2 },
      allowedIcons: ['CalendarCheck', 'FileText', 'Rocket', 'Calendar']
    },
    {
      type: 'highlight-quote',
      aliases: ['comment', 'highlight-quote'],
      intendedContent: 'One-line highlight. Data keys: text, symbol',
      typicalData: { textBlocks: 1 },
      allowedIcons: []
    },
    {
      type: 'intro-text',
      aliases: ['erp-intro-text', 'intro-text'],
      intendedContent: 'Intro title + paragraphs. Data keys: title, paragraphs[], highlightLink? { text, href }',
      typicalData: { paragraphs: '1-3' },
      allowedIcons: []
    },
    {
      type: 'content-with-illustration-left',
      aliases: ['content-illustration-left', 'content-with-illustration-left'],
      intendedContent: 'Content + image (left). Data keys: title, paragraphs[], imageSrc, imageAlt?',
      typicalData: { paragraphs: '1-3', image: 1 },
      allowedIcons: []
    },
    {
      type: 'content-with-illustration-right',
      aliases: ['content-illustration-right', 'content-with-illustration-right'],
      intendedContent: 'Content + image (right). Data keys: title, paragraphs[], imageSrc, imageAlt?',
      typicalData: { paragraphs: '1-3', image: 1 },
      allowedIcons: []
    },
    {
      type: 'job-detail-section',
      aliases: ['job-detail', 'job-detail-section'],
      intendedContent: 'Job details. Data keys: title, jobDescription[], keySkills[], image { src, alt, width?, height? }, cta { primary, secondary }',
      typicalData: { jobDescription: '5-8', keySkills: '5-8' },
      allowedIcons: []
    },
    {
      type: 'inquiry-panel',
      aliases: ['business-slider', 'inquiry-panel'],
      intendedContent: 'Slide-in inquiry form. Data keys: fixed fields (name, organization, email, mobile); UI auto-handled',
      typicalData: { fields: 4 },
      allowedIcons: ['Send', 'X', 'MessageCircle', 'Info']
    }
  ];
}

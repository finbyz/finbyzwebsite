import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// ---- Types ----
interface Component {
  filename: string;
  name: string;
  code: string;
  props: Record<string, string>;
}

interface PageData {
  filename: string;
  code: string;
}

// ---- Base64 Decode Helper ----
function decodeBase64(base64String: string): string {
  try {
    return Buffer.from(base64String, 'base64').toString('utf-8');
  } catch (error) {
    throw new Error('Invalid base64 encoded string');
  }
}

interface SEOData {
  seo_title?: string;
  title?: string;
  description?: string;
  small_description?: string;
  keywords?: string;
  image?: string;
  content?: string;
}

interface GeneratePageRequest {
  slug: string;
  type: 'webpage' | 'blog';
  pageCode: string;
  components?: Component[];
  seoData?: SEOData;
}

// ---- Helper Functions ----
function escapeString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeComponent(filename: string, code: string): void {
  const safeFilename = path.basename(filename).replace(/[^a-zA-Z0-9._-]/g, '');
  const finalFilename = safeFilename.endsWith('.tsx') ? safeFilename : `${safeFilename}.tsx`;
  
  const componentDir = path.join(process.cwd(), 'src', 'components', 'ai_components');
  ensureDirectory(componentDir);
  
  const filePath = path.join(componentDir, finalFilename);
  fs.writeFileSync(filePath, code, 'utf-8');
}

function writePage(slug: string, code: string, type: 'webpage' | 'blog'): void {
  const baseDir = type === 'blog' ? '(blog)' : '(webpages)';
  const pageDir = path.join(process.cwd(), 'src', 'app', baseDir, slug);
  
  ensureDirectory(pageDir);
  
  const pagePath = path.join(pageDir, 'page.tsx');
  fs.writeFileSync(pagePath, code, 'utf-8');
}

function generateWebpageLayout(slug: string, seoData: SEOData): string {
  const title = escapeString(seoData.seo_title || seoData.title || '');
  const description = escapeString(seoData.description || seoData.small_description || '');
  const keywords = escapeString(seoData.keywords || '');
  const image = seoData.image || '';
  const content = escapeString((seoData.content || '').substring(0, 500));
  const canonicalUrl = `${process.env.FRAPPE_URL}/${slug}`;

  return `import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  keywords: "${keywords}",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "${canonicalUrl}",
  },
  openGraph: {
    title: "${title}",
    description: "${description}",
    url: "${canonicalUrl}",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    ${image ? `images: [{ url: "${image}", width: 1200, height: 630, alt: "${title}" }],` : ''}
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description}",
    creator: "@finbyztech",
    ${image ? `images: ["${image}"],` : ''}
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${title}",
    "description": "${description}",
    "url": "${canonicalUrl}",
    ${image ? `"image": "${image}",` : ''}
    ${keywords ? `"keywords": "${keywords}",` : ''}
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "${title}",
      "description": "${description}",
      ${content ? `"articleBody": "${content}",` : ''}
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "${new Date().toISOString()}",
      "dateModified": "${new Date().toISOString()}",
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="${title}" />
        <meta itemProp="description" content="${description}" />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
`;
}

function generateBlogLayout(slug: string, seoData: SEOData): string {
  const title = escapeString(seoData.seo_title || seoData.title || '');
  const description = escapeString(seoData.description || seoData.small_description || '');
  const keywords = escapeString(seoData.keywords || '');
  const image = seoData.image || '';
  const content = escapeString((seoData.content || '').substring(0, 500));
  const canonicalUrl = `${process.env.FRAPPE_URL}/blog/${slug}`;

  return `import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  keywords: "${keywords}",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "${canonicalUrl}",
  },
  openGraph: {
    title: "${title}",
    description: "${description}",
    url: "${canonicalUrl}",
    siteName: "FinByz Tech Blog",
    type: "article",
    locale: "en_US",
    ${image ? `images: [{ url: "${image}", width: 1200, height: 630, alt: "${title}" }],` : ''}
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description}",
    creator: "@finbyztech",
    ${image ? `images: ["${image}"],` : ''}
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${title}",
    "description": "${description}",
    "url": "${canonicalUrl}",
    ${image ? `"image": "${image}",` : ''}
    ${keywords ? `"keywords": "${keywords}",` : ''}
    "inLanguage": "en-US",
    "author": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech",
      ${image ? `"logo": { "@type": "ImageObject", "url": "${image}" }` : ''}
    },
    ${content ? `"articleBody": "${content}",` : ''}
    "datePublished": "${new Date().toISOString()}",
    "dateModified": "${new Date().toISOString()}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${canonicalUrl}"
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="${title}" />
        <meta itemProp="description" content="${description}" />
        ${image ? `<meta itemProp="image" content="${image}" />` : ''}
      </article>
      
      {children}
    </>
  );
}
`;
}

function writeLayout(slug: string, type: 'webpage' | 'blog', seoData: SEOData): void {
  const baseDir = type === 'blog' ? '(blog)' : '(webpages)';
  const pageDir = path.join(process.cwd(), 'src', 'app', baseDir, slug);
  
  ensureDirectory(pageDir);
  
  const layoutCode = type === 'blog' 
    ? generateBlogLayout(slug, seoData)
    : generateWebpageLayout(slug, seoData);
  
  const layoutPath = path.join(pageDir, 'layout.tsx');
  fs.writeFileSync(layoutPath, layoutCode, 'utf-8');
}

function updateAIComponentsRegistry(components: Component[]): void {
  const registryPath = path.join(process.cwd(), 'ai-components.json');
  
  let registry: { components: Array<{ name: string; path: string; props: Record<string, string> }> } = { components: [] };
  
  if (fs.existsSync(registryPath)) {
    const content = fs.readFileSync(registryPath, 'utf-8');
    registry = JSON.parse(content);
  }
  
  components.forEach(comp => {
    const exists = registry.components.find(c => c.name === comp.name);
    if (!exists) {
      registry.components.push({
        name: comp.name,
        path: `@/components/ai_components/${comp.name}`,
        props: comp.props
      });
    }
  });
  
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf-8');
}


// ---- API Handler ----
export async function POST(request: NextRequest) {
  try {
    const body: GeneratePageRequest = await request.json();
    
    // Validate request
    if (!body.slug || !body.pageCode || !body.type) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          message: 'slug, pageCode, and type are required'
        },
        { status: 400 }
      );
    }
    
    if (body.type !== 'webpage' && body.type !== 'blog') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid type',
          message: 'type must be either "webpage" or "blog"'
        },
        { status: 400 }
      );
    }
    
    // Sanitize slug
    const slug = body.slug.replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
    
    // Check if page already exists
    const baseDir = body.type === 'blog' ? '(blog)' : '(webpages)';
    const pageDir = path.join(process.cwd(), 'src', 'app', baseDir, slug);
    const pagePath = path.join(pageDir, 'page.tsx');
    
    if (!pagePath.endsWith('test') && fs.existsSync(pagePath)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Page already exists',
          message: `A ${body.type} with slug "${slug}" already exists at ${body.type === 'blog' ? `/blog/${slug}` : `/${slug}`}`,
          data: {
            slug,
            type: body.type,
            existingPath: `${baseDir}/${slug}/page.tsx`
          }
        },
        { status: 409 } // 409 Conflict
      );
    }
    
    
    // Decode base64 page code
    let decodedPageCode: string;
    try {
      decodedPageCode = decodeBase64(body.pageCode);
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid page code',
          message: 'pageCode must be a valid base64 encoded string'
        },
        { status: 400 }
      );
    }
    
    // Write components if provided
    if (body.components && body.components.length > 0) {
      body.components.forEach(comp => {
        // Decode component code if it's base64
        try {
          const decodedCompCode = decodeBase64(comp.code);
          writeComponent(comp.filename, decodedCompCode);
        } catch (error) {
          // If decode fails, assume it's already plain text (backwards compatibility)
          writeComponent(comp.filename, comp.code);
        }
      });
      updateAIComponentsRegistry(body.components);
    }
    
    // Write page
    writePage(slug, decodedPageCode, body.type);
    
    // Write layout
    writeLayout(slug, body.type, body.seoData || {});
    
    // Update completed pages registry
    
    
    return NextResponse.json({
      success: true,
      message: `Successfully generated ${body.type}`,
      data: {
        slug,
        type: body.type,
        componentsCreated: body.components?.length || 0,
        path: body.type === 'blog' ? `/blog/${slug}` : `/${slug}`
      }
    });
    
  } catch (error) {
    console.error('💥 Error generating page:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate page',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
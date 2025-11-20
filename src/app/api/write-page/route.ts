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
  name: string;
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

function writePage(slug: string, code: string, type: 'webpage' | 'blog' | 'code-snippet'): void {
  const baseDir = pageGroups[type]
  const pageDir = path.join(process.cwd(), 'src', 'app', baseDir, slug);
  
  ensureDirectory(pageDir);
  
  const pagePath = path.join(pageDir, 'page.tsx');
  fs.writeFileSync(pagePath, code, 'utf-8');
}

function generateWebpageLayout(slug: string, id:string, seoData: SEOData, type: PageType): string {
  const title = escapeString(seoData.seo_title || seoData.title || '');
  const description = escapeString(seoData.description || seoData.small_description || '');
  const keywords = escapeString(seoData.keywords || '');
  const image = seoData.image || '';
  const content = escapeString((seoData.content || '').substring(0, 500));
  const canonicalUrl = `${process.env.FRAPPE_URL}/${slug}`;
  const doctype = docTypes[type] || 'Web Page';

  return `import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import StructureData from "@/components/seo/StructureData";

import { Metadata } from "next";
import Script from "next/script";


export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchFrappeSchemaData({
    name: "${id}",
    type: "webpage"
  })

  return {
    title: pageData?.data?.title,
    description: pageData?.data?.description,
    keywords: pageData?.data?.keywords,
    authors: [{ name: "FinByz Tech Pvt Ltd" }],
    creator: "FinByz Tech Pvt Ltd",
    publisher: "FinByz Tech Pvt Ltd",
    alternates: {
      canonical: "${process.env.SITE_URL}/" + pageData?.data?.route || "",
    },
    openGraph: {
      title: pageData?.data?.seo_title,
      description: pageData?.data?.meta_description,
      url: "${process.env.SITE_URL}/" + pageData?.data?.route || "",
      siteName: "Finbyz Tech",
      type: "website",
      locale: "en_US",
      images: [{ url: "${process.env.FRAPPE_URL}/${image}", width: 1200, height: 630, alt: pageData?.data?.seo_title }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.data?.seo_title,
      description: pageData?.data?.small_description,
      creator: "@finbyz",
      images: ["${process.env.FRAPPE_URL}/" + pageData?.data?.title || ""],
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
    }
  }
}


export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("${doctype}", "${slug}");
  const faqsGroup = await getFaqs("${doctype}", "${slug}");

  return (
    <>
      
      {children}
      {faqsGroup?.faqs.length && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <StructureData name="${id}" type="${type}" />  
      <BusinessSlider />
    </>
  );
}
`;
}

function generateBlogLayout(slug: string,id:string, seoData: SEOData): string {
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


const pageGroups = {
  'blog': '(blogs)',
  'webpage': '(webpages)',
  'code-snippet': 'dev-insight'
}
const docTypes = {
  blog: 'Blog Post',
  'code-snippet': 'Code Snippet',
  webpage: 'Web Page'
};

type PageType = 'webpage' | 'blog' | 'code-snippet'


function writeLayout(slug: string, id:string , type: PageType, seoData: SEOData): void {
  const baseDir = pageGroups[type];
  const pageDir = path.join(process.cwd(), 'src', 'app', baseDir, slug);
  
  ensureDirectory(pageDir);
  
  const layoutCode = type === 'blog' 
    ? generateBlogLayout(slug, id, seoData)
    : generateWebpageLayout(slug, id, seoData, type);
  
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
    
    if (body.type !== 'webpage' && body.type !== 'blog' && body.type !== 'code-snippet') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid type',
          message: 'type must be either "webpage" or "blog" or "code-snippet"'
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
    writePage(slug, decodedPageCode, body.type,);
    
    // Write layout
    writeLayout(slug,body.name, body.type, body.seoData || {});
    
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
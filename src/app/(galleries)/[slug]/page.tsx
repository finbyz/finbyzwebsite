import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getFullGallery, getGalleryRoutes } from '@/lib/gallery';
import Tutorials from './Tutorials';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export const revalidate = 3600;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const galleries = await getFullGallery(slug);
    
    if (!galleries?.parent) {
      return {
        title: 'Gallery Not Found',
        description: 'The requested gallery could not be found.',
      };
    }

    const { parent } = galleries;
    const title = parent.seo_title || parent.gallery_title || parent.title || 'Learning Hub';
    const description = parent.small_description || parent.description || 'Explore our comprehensive collection of tutorials and resources';
    const keywords = parent.keywords || '';
    const image = parent.svg_image ? `/web-api/fb/n${parent.svg_image}` : '/images/FinbyzLogo.png';

    return {
      title,
      description,
      keywords: keywords.split(',').map(k => k.trim()).filter(Boolean),
      authors: [{ name: 'FinByz Tech Pvt Ltd' }],
      openGraph: {
        title,
        description,
        type: 'article',
        url: `https://finbyz.tech/${slug}`,
        siteName: 'FinByz Tech Pvt Ltd',
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
        creator: '@finbyz',
        site: '@finbyz',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      alternates: {
        canonical: `https://finbyz.tech/${slug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Learning Hub',
      description: 'Explore our comprehensive collection of tutorials and resources',
    };
  }
}

export async function generateStaticParams() {
  try {
    const routes = await getGalleryRoutes();

    return routes.map((route) => {
      return {
        slug: route
      };
    });
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

const GalleryPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Invalid gallery route.</p>
      </div>
    );
  }

  const galleries = await getFullGallery(slug);
  if (!galleries?.parent) {
    notFound();
  }

  return <Tutorials data={galleries} />;
};

export default GalleryPage;
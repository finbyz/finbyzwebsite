import { notFound } from 'next/navigation';
import { getFullGallery, getGalleryRoutes } from '@/lib/gallery';
import Tutorials from './Tutorials';
import { Metadata } from 'next';
import { generateAutoMetadata } from '@/lib/seo-metadata';
import FooterSection from '@/components/sections/FooterSection';

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export const dynamicParams = true;

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return generateAutoMetadata();
}

export async function generateStaticParams() {
  try {
    const routes = await getGalleryRoutes();

    return routes.map((route) => {
      return {
        slug: route.replace(/^\//, '').split('/')
      };
    });
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

const GalleryPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug;
  if (!slugStr) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Invalid gallery route.</p>
      </div>
    );
  }

  const galleries = await getFullGallery(slugStr);
  if (!galleries?.parent) {
    notFound();
  }

  return <>
    <Tutorials data={galleries} />
    <FooterSection docname={slugStr} showBusinessSlider={true} showInquiryForm={false} />
  </>
};

export default GalleryPage;
import { notFound } from 'next/navigation';
import { getFullGallery, getGalleryRoutes } from '@/lib/gallery';
import Tutorials from './Tutorials';
import { getFaqs, getPageData } from '@/lib/getPageData';
import FinbyzGallery from '@/components/sections/FinbyzGallery';
import FAQ from '@/components/ai_components/FAQ';
import { Metadata } from 'next';
import { generateAutoMetadata } from '@/lib/seo-metadata';

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
  const data = await getPageData(slugStr || "home");
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

  const faqsGroup = await getFaqs(slugStr)

  return <>
    <Tutorials data={galleries} />;
    {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
    {
      (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
    }
  </>
};

export default GalleryPage;
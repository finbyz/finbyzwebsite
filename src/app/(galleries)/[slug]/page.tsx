import { notFound } from 'next/navigation';
import { getFullGallery, getGalleryRoutes } from '@/lib/gallery';
import Tutorials from './Tutorials';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export const revalidate = 3600;

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